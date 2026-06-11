import { useState, useRef } from 'react'
import {
  CompositionLevel, ActiveElement,
  MarkConfig, CollectionConfig, SceneConfig, LayerData,
  DataBindings, DataVariable, LabelConfig, DecorationConfig,
} from './types'
import { HierarchyPanel }    from './HierarchyPanel'
import { PropertiesPanel }   from './PropertiesPanel'
import { CompositionCanvas } from './CompositionCanvas'
import { LeftDataPanel }     from './LeftDataPanel'
import { SceneSave, SaveDialog, LoadDialog, loadSaves, persistSaves } from './SaveLoadModal'
import { resolveCustomModel } from './models'

// ── Default state ─────────────────────────────────────────────────────────────

const DEFAULT_LAYERS: LayerData[] = [
  { id: '1', name: 'Microplastics',     percentage: 40, color: '#aaaaaa' },
  { id: '2', name: 'Synthetic Fibres',  percentage: 35, color: '#3355cc' },
  { id: '3', name: 'Tyre Abrasion',     percentage: 28, color: '#bbbb33' },
  { id: '4', name: 'City Dust',         percentage: 24, color: '#cc4422' },
  { id: '5', name: 'Road Markings',     percentage: 7,  color: '#2233aa' },
]

const DEFAULT_MARK: MarkConfig = {
  shape:       'sphere',
  material:    'plastic',
  color:       '#F06951',
  position:    { x: 0, y: 0, z: 0 },
  size:        { x: 1, y: 1, z: 1 },
  orientation: { x: 0, y: 0, z: 0 },
  structural:  { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 },
}

const DEFAULT_COLLECTION1: CollectionConfig = {
  arrangement:       'alignment',
  color:             '#5E5CE6',
  alignCount:        5,
  alignAxis:         'X',
  alignSpacing:      1.5,
  alignAnchor:       'center',
  scatterCount:      50,
  scatterDimensions: { x: 4.5, y: 4, z: 3 },
  scatterDensity:    1.0,
}

const DEFAULT_COLLECTION2: CollectionConfig = {
  arrangement:       'alignment',
  color:             '#9D9BF4',
  alignCount:        3,
  alignAxis:         'X',
  alignSpacing:      0.5,
  alignAnchor:       'center',
  scatterCount:      30,
  scatterDimensions: { x: 20, y: 6, z: 8 },
  scatterDensity:    1.0,
}

const DEFAULT_SCENE: SceneConfig = {
  background:  'dark',
  hdriPreset:  'city',
  focalLength: 130,
}

const DEFAULT_LABEL: LabelConfig = {
  show:  false,
  slots: { top: null, bottom: null, left: null, right: null },
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [level,         setLevel]         = useState<CompositionLevel>(1)
  const [activeElement, setActiveElement] = useState<ActiveElement>('mark')
  const [layers,        setLayers]        = useState<LayerData[]>(DEFAULT_LAYERS)
  const [markConfig,    setMarkConfig]    = useState<MarkConfig>(DEFAULT_MARK)
  const [col1Config,    setCol1Config]    = useState<CollectionConfig>(DEFAULT_COLLECTION1)
  const [col2Config,    setCol2Config]    = useState<CollectionConfig>(DEFAULT_COLLECTION2)
  const [sceneConfig,   setSceneConfig]   = useState<SceneConfig>(DEFAULT_SCENE)
  const [bindings,        setBindings]        = useState<DataBindings>({
    markColor: null, scatterSize: null,
    c1AlignCount: null, c2AlignCount: null,
    markSizeX: null, markSizeY: null, markSizeZ: null,
  })
  const [markLabelConfig, setMarkLabelConfig] = useState<LabelConfig>(DEFAULT_LABEL)
  const [colLabelConfig,  setColLabelConfig]  = useState<LabelConfig>(DEFAULT_LABEL)
  const [decorations,        setDecorations]        = useState<DecorationConfig[]>([])
  const [activeDecorationId, setActiveDecorationId] = useState<string | null>(null)

  // Save / load
  const [currentSaveId,   setCurrentSaveId]   = useState<string | null>(null)
  const [currentSaveName, setCurrentSaveName] = useState<string | null>(null)
  const [modalMode,       setModalMode]       = useState<'none' | 'save' | 'load'>('none')

  // Path tracing
  const [pathTracingActive,  setPathTracingActive]  = useState(false)
  const [pathTracerSamples,  setPathTracerSamples]  = useState(0)
  const downloadRenderRef = useRef<(() => void) | null>(null)

  function handleBind(attr: keyof DataBindings, variable: DataVariable | null) {
    setBindings((prev) => {
      const next = { ...prev, [attr]: variable }
      // mark size axes are mutually exclusive: binding one clears the others
      if (variable !== null && (attr === 'markSizeX' || attr === 'markSizeY' || attr === 'markSizeZ')) {
        if (attr !== 'markSizeX') next.markSizeX = null
        if (attr !== 'markSizeY') next.markSizeY = null
        if (attr !== 'markSizeZ') next.markSizeZ = null
      }
      return next
    })
  }

  function handleAddDecoration() {
    const id = `dec_${Date.now()}`
    const dec: DecorationConfig = {
      id,
      shape:       'sphere',
      material:    'plastic',
      color:       '#888888',
      position:    { x: 0, y: -1.5, z: 0 },
      size:        { x: 1, y: 1, z: 1 },
      orientation: { x: 0, y: 0, z: 0 },
      structural:  { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 },
    }
    setDecorations((prev) => [...prev, dec])
    setActiveDecorationId(id)
  }

  function handleRemoveDecoration(id: string) {
    setDecorations((prev) => prev.filter((d) => d.id !== id))
    setActiveDecorationId((cur) => cur === id ? null : cur)
  }

  function handleUpdateDecoration(dec: DecorationConfig) {
    setDecorations((prev) => prev.map((d) => d.id === dec.id ? dec : d))
  }

  function captureState(): Record<string, unknown> {
    return {
      level, activeElement,
      markConfig, col1Config, col2Config, sceneConfig,
      bindings, markLabelConfig, colLabelConfig,
      decorations, layers,
    }
  }

  function doSave(name: string) {
    const saves = loadSaves()
    if (currentSaveId) {
      const idx = saves.findIndex((s) => s.id === currentSaveId)
      if (idx >= 0) {
        saves[idx] = { ...saves[idx], name, data: captureState() }
        persistSaves(saves)
        setCurrentSaveName(name)
        setModalMode('none')
        return
      }
    }
    const id = `save_${Date.now()}`
    const newSave: SceneSave = { id, name, createdAt: new Date().toISOString(), data: captureState() }
    persistSaves([...saves, newSave])
    setCurrentSaveId(id)
    setCurrentSaveName(name)
    setModalMode('none')
  }

  function handleSaveClick() {
    if (currentSaveId && currentSaveName) {
      doSave(currentSaveName)
    } else {
      setModalMode('save')
    }
  }

  function handleLoad(save: SceneSave) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = save.data as any
    if (d.level          != null) setLevel(d.level)
    if (d.activeElement  != null) setActiveElement(d.activeElement)
    setMarkConfig(resolveCustomModel(d.markConfig ?? DEFAULT_MARK))
    setCol1Config(d.col1Config ?? DEFAULT_COLLECTION1)
    setCol2Config(d.col2Config ?? DEFAULT_COLLECTION2)
    setSceneConfig(d.sceneConfig ?? DEFAULT_SCENE)
    setBindings(d.bindings ?? { markColor: null, scatterSize: null, c1AlignCount: null, c2AlignCount: null, markSizeX: null, markSizeY: null, markSizeZ: null })
    setMarkLabelConfig(d.markLabelConfig ?? DEFAULT_LABEL)
    setColLabelConfig(d.colLabelConfig ?? DEFAULT_LABEL)
    setDecorations((d.decorations ?? []).map((dec: DecorationConfig) => resolveCustomModel(dec)))
    setLayers(d.layers ?? DEFAULT_LAYERS)
    setCurrentSaveId(save.id)
    setCurrentSaveName(save.name)
    setActiveDecorationId(null)
    setModalMode('none')
  }

  function handleDeleteSave(id: string) {
    const saves = loadSaves().filter((s) => s.id !== id)
    persistSaves(saves)
    if (currentSaveId === id) {
      setCurrentSaveId(null)
      setCurrentSaveName(null)
    }
  }

  function advanceLevel() {
    if (level === 1) { setLevel(2); setActiveElement('collection1') }
    if (level === 2) { setLevel(3); setActiveElement('collection2') }
  }

  function downgradeLevel() {
    if (level === 3) { setLevel(2); setActiveElement('collection1') }
    if (level === 2) { setLevel(1); setActiveElement('mark') }
  }

  return (
    <div style={{
      display: 'flex', width: '100vw', height: '100vh',
      background: '#F2F2F7', overflow: 'hidden',
    }}>

      {/* Left column: data panel (top) + hierarchy panel (bottom) */}
      <div style={{
        width: '260px', flexShrink: 0,
        borderRight: '1px solid #E5E5EA',
        background: '#FFFFFF',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>

        {/* Save / Load / Render toolbar */}
        <div style={{
          display: 'flex', gap: '6px', padding: '8px 10px',
          borderBottom: '1px solid #E5E5EA', flexShrink: 0, flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={handleSaveClick}
              title={currentSaveName ? `Save to "${currentSaveName}"` : 'Save scene'}
              style={{
                flex: 1, background: '#007AFF', color: '#fff',
                border: 'none', borderRadius: '7px', padding: '6px 8px',
                fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                fontFamily: 'inherit', overflow: 'hidden', textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {currentSaveName ? currentSaveName : 'Save'}
            </button>
            <button
              onClick={() => setModalMode('load')}
              style={{
                flex: 1, background: '#F2F2F7', color: '#1D1D1F',
                border: '1px solid #D1D1D6', borderRadius: '7px', padding: '6px 8px',
                fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Load
            </button>
          </div>
          <button
            onClick={() => { setPathTracingActive(true); setPathTracerSamples(0) }}
            disabled={pathTracingActive}
            style={{
              background: pathTracingActive ? '#E5E5EA' : '#1D1D1F',
              color: pathTracingActive ? '#AEAEB2' : '#FFFFFF',
              border: 'none', borderRadius: '7px', padding: '7px 8px',
              fontSize: '12px', fontWeight: '600',
              cursor: pathTracingActive ? 'default' : 'pointer',
              fontFamily: 'inherit', width: '100%',
            }}
          >
            {pathTracingActive ? 'Rendering...' : 'Render'}
          </button>
        </div>

        {/* Top: scrollable data panel */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <LeftDataPanel
            layers={layers}
            onChange={setLayers}
          />
        </div>

        {/* Bottom: hierarchy panel — shrinks to its content */}
        <div style={{ flexShrink: 0, borderTop: '1px solid #E5E5EA' }}>
          <HierarchyPanel
            level={level}
            activeElement={activeElement}
            onSelectElement={(el) => { setActiveElement(el); setActiveDecorationId(null) }}
            onAdvanceLevel={advanceLevel}
            onDowngradeLevel={downgradeLevel}
            decorations={decorations}
            activeDecorationId={activeDecorationId}
            onSelectDecoration={setActiveDecorationId}
            onAddDecoration={handleAddDecoration}
            onRemoveDecoration={handleRemoveDecoration}
          />
        </div>

      </div>

      {/* Center: 3D canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <CompositionCanvas
          level={level}
          markConfig={markConfig}
          collection1Config={col1Config}
          collection2Config={col2Config}
          sceneConfig={sceneConfig}
          layers={layers}
          bindings={bindings}
          markLabelConfig={markLabelConfig}
          colLabelConfig={colLabelConfig}
          decorations={decorations}
          pathTracingActive={pathTracingActive}
          onSamplesUpdate={setPathTracerSamples}
          downloadRenderRef={downloadRenderRef}
        />

        {/* Render panel overlay */}
        {pathTracingActive && (
          <div style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'rgba(10,10,10,0.82)', backdropFilter: 'blur(14px)',
            borderRadius: '14px', padding: '18px 20px', color: '#fff',
            display: 'flex', flexDirection: 'column', gap: '14px',
            width: '200px', fontFamily: 'inherit', zIndex: 10,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
            <div>
              <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '8px' }}>
                Path Tracing
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                <span style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {pathTracerSamples}
                </span>
                <span style={{ fontSize: '11px', opacity: 0.35 }}>spp</span>
              </div>
            </div>

            {/* Progress bar to 256 samples */}
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '3px', height: '3px' }}>
              <div style={{
                width: `${Math.min(100, (pathTracerSamples / 256) * 100)}%`,
                height: '100%', background: '#4FC3F7', borderRadius: '3px',
                transition: 'width 0.4s',
              }} />
            </div>
            <div style={{ fontSize: '11px', opacity: 0.4, marginTop: '-8px' }}>
              {pathTracerSamples === 0
                ? 'Building scene BVH…'
                : pathTracerSamples >= 256
                  ? 'Converged'
                  : `${256 - pathTracerSamples} samples to 256`}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => downloadRenderRef.current?.()}
                disabled={pathTracerSamples === 0}
                style={{
                  background: pathTracerSamples > 0 ? '#4FC3F7' : 'rgba(255,255,255,0.08)',
                  color: '#fff', border: 'none', borderRadius: '8px',
                  padding: '9px', fontSize: '12px', fontWeight: '600',
                  cursor: pathTracerSamples > 0 ? 'pointer' : 'default',
                  fontFamily: 'inherit',
                }}
              >
                Download PNG
              </button>
              <button
                onClick={() => setPathTracingActive(false)}
                style={{
                  background: 'rgba(255,255,255,0.08)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px',
                  padding: '9px', fontSize: '12px', fontWeight: '600',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Stop
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right: properties panel */}
      <div style={{
        width: '260px', flexShrink: 0,
        borderLeft: '1px solid #E5E5EA',
        background: '#FFFFFF', overflowY: 'auto',
      }}>
        <PropertiesPanel
          activeElement={activeElement}
          compositionLevel={level}
          markConfig={markConfig}        onMarkChange={setMarkConfig}
          collection1Config={col1Config} onCollection1Change={setCol1Config}
          collection2Config={col2Config} onCollection2Change={setCol2Config}
          sceneConfig={sceneConfig}      onSceneChange={setSceneConfig}
          bindings={bindings}            onBind={handleBind}
          markLabelConfig={markLabelConfig}  onMarkLabelChange={setMarkLabelConfig}
          colLabelConfig={colLabelConfig}    onColLabelChange={setColLabelConfig}
          activeDecorationId={activeDecorationId}
          decorations={decorations}
          onDecorationChange={handleUpdateDecoration}
        />
      </div>

      {/* Modals */}
      {modalMode === 'save' && (
        <SaveDialog
          initialName={currentSaveName ?? ''}
          onSave={doSave}
          onClose={() => setModalMode('none')}
        />
      )}
      {modalMode === 'load' && (
        <LoadDialog
          saves={loadSaves()}
          onLoad={handleLoad}
          onDelete={handleDeleteSave}
          onClose={() => setModalMode('none')}
        />
      )}

    </div>
  )
}
