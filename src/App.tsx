import { useState, useRef, useMemo, useEffect } from 'react'
import {
  CompositionLevel, ActiveElement,
  MarkConfig, CollectionConfig, SceneConfig, LayerData,
  DataBindings, DataVariable, LabelConfig, LabelSlots, DecorationConfig, BindingScale,
  MarkShape, MarkPart,
} from './types'
import { HierarchyPanel }    from './HierarchyPanel'
import { PropertiesPanel }   from './PropertiesPanel'
import { CompositionCanvas } from './CompositionCanvas'
import { SceneSave, SaveDialog, LoadDialog, loadSaves, persistSaves, captureThumbnail } from './SaveLoadModal'
import { submitStudySession, getParticipantId, studyConfigured } from './studySave'
import { LeftDataPanel, VarChip, DatasetReferenceCard, datasetModelCollection } from './LeftDataPanel'
import { RadialBindMenu } from './RadialBindMenu'
import { resolveCustomModel, MASTER_COLLECTION, modelsForCollection } from './models'

// ── Data variable definitions ─────────────────────────────────────────────────

const BINDING_LABELS: Record<keyof DataBindings, string> = {
  markColor:    'Color',
  markGeometry: 'Geometry',
  scatterSize:  'Scatter Size',
  scatterCount: 'Population',
  c1AlignCount: 'Count',
  c2AlignCount: 'Count',
  markSizeX:    'Width',
  markSizeY:    'Height',
  markSizeZ:    'Depth',
  markScale:    'Scale',
}

// Quantity encodings whose value can be scaled by a ×N multiplier on the tag.
const SCALABLE_BINDINGS = new Set<keyof DataBindings>([
  'markScale', 'markSizeX', 'markSizeY', 'markSizeZ', 'scatterSize', 'scatterCount',
])

// Multiplier control for a numeric tag, using a factor glyph (ƒ) for "times" so it
// never collides with the delete ×. It stays hidden as a faint ƒ affordance until
// a factor is set; clicking it opens an editable ƒN pill. Buffers while typing so
// a value can be cleared/retyped without snapping, and never commits 0 or empty.
function ScaleInput({ value, disabled, onCommit }: { value: number; disabled: boolean; onCommit: (n: number) => void }) {
  const [buf, setBuf]         = useState(String(value))
  const [editing, setEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => { if (!editing) setBuf(String(value)) }, [value, editing])
  useEffect(() => { if (editing) { inputRef.current?.focus(); inputRef.current?.select() } }, [editing])

  // Collapsed (no factor set): a faint ƒ that reveals the field on click.
  if (!editing && value === 1) {
    return (
      <button
        onClick={(e) => { e.stopPropagation(); setEditing(true) }}
        title="Set a multiplier ( ƒ2 = ×2, ƒ0.5 = ÷2 )"
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          color: disabled ? '#CFCFD6' : '#AEC8F2', fontSize: '14px', fontWeight: '700', fontStyle: 'italic', lineHeight: 1, fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.color = '#4A90E2'; e.currentTarget.style.background = '#DCEBFF' } }}
        onMouseLeave={(e) => { e.currentTarget.style.color = disabled ? '#CFCFD6' : '#AEC8F2'; e.currentTarget.style.background = 'none' }}
      >ƒ</button>
    )
  }

  // Active (factor set or editing): the editable ƒN pill.
  return (
    <span
      onClick={(e) => e.stopPropagation()}
      title="Multiplier ( ƒ2 = ×2, ƒ0.5 = ÷2 )"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '2px',
        background: disabled ? '#E7E7EC' : '#FFFFFF',
        border: `1px solid ${disabled ? '#D8D8DE' : '#C4DBFF'}`,
        borderRadius: '999px', padding: '1px 7px 1px 7px',
      }}
    >
      <span style={{ color: disabled ? '#B4B4BC' : '#7FAEF0', fontWeight: '700', fontStyle: 'italic', fontSize: '13px', lineHeight: 1 }}>ƒ</span>
      <input
        ref={inputRef}
        type="text" inputMode="decimal" value={buf}
        onFocus={(e) => { setEditing(true); e.currentTarget.select() }}
        onChange={(e) => { const raw = e.target.value; setBuf(raw); const n = Number(raw); if (raw.trim() !== '' && Number.isFinite(n) && n > 0) onCommit(n) }}
        onBlur={() => {
          setEditing(false)
          const n = Number(buf)
          const final = buf.trim() !== '' && Number.isFinite(n) && n > 0 ? n : value
          setBuf(String(final))
          if (final !== value) onCommit(final)
        }}
        style={{
          width: '24px', border: 'none', background: 'transparent',
          color: disabled ? '#AEAEB2' : '#0A66DA', fontSize: '12px', fontWeight: '700',
          textAlign: 'center', padding: '0', fontFamily: 'inherit', outline: 'none',
        }}
      />
    </span>
  )
}

const BINDING_LEVEL: Record<keyof DataBindings, string> = {
  markColor:    '',
  markGeometry: '',
  markSizeX:    '',
  markSizeY:    '',
  markSizeZ:    '',
  markScale:    '',
  scatterSize:  '',
  scatterCount: '',
  c1AlignCount: 'Lv2',
  c2AlignCount: 'Lv3',
}

const DATASET_VAR_LABELS: Record<string, { numerical: string; categorical: string }> = {
  garbageInOcean: { numerical: 'Weight',  categorical: 'Garbage Type' },
  mahler:         { numerical: 'Number of Instruments', categorical: 'Orchestra Section' },
  co2Emissions:   { numerical: 'CO₂ Emissions (Mt)', categorical: 'Country' },
  mushroomToxicity: { numerical: 'Danger Score', categorical: 'Name' },
  oceanPlastic:   { numerical: 'Plastic Pieces (billions)', categorical: 'Ocean' },
  nantesHousing:  { numerical: 'Share (%)', categorical: 'Tenure Type' },
  whoAirQuality:  { numerical: 'Pollution concentration (PM2.5)', categorical: 'City' },
}

const DATASET_TITLES: Record<string, string> = {
  garbageInOcean: 'Garbage in the Ocean',
  mahler:         "Mahler's Symphony No. 8 Orchestra",
  co2Emissions:   'CO₂ Emissions by Country',
  mushroomToxicity: 'Mushroom danger score',
  oceanPlastic:   "Surface Plastic Mass across the world's Oceans",
  nantesHousing:  'Nantes Metropolitan Area Housing',
  whoAirQuality:  'WHO Ambient Air Quality Database',
}

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
  scale:       1,
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
  scatterMode:       'count',
  scatterCount:      50,
  scatterDimensions: { x: 4.5, y: 4, z: 3 },
  scatterDensity:    1.0,
  pilingCount:       10,
}

const DEFAULT_COLLECTION2: CollectionConfig = {
  arrangement:       'alignment',
  color:             '#9D9BF4',
  alignCount:        3,
  alignAxis:         'X',
  alignSpacing:      0.5,
  alignAnchor:       'center',
  scatterMode:       'count',
  scatterCount:      30,
  scatterDimensions: { x: 20, y: 6, z: 8 },
  scatterDensity:    1.0,
  pilingCount:       10,
}

const DEFAULT_SCENE: SceneConfig = {
  background:  'dark',
  hdriPreset:  'city',
  focalLength: 130,
}

const DEFAULT_LABEL: LabelConfig = {
  show:  false,
  slots: { top: [], bottom: [], left: [], right: [] },
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
  const [activeDataset, setActiveDataset] = useState<string>('garbageInOcean')
  const [activeModelCollection, setActiveModelCollection] = useState<string>(MASTER_COLLECTION)
  const varLabels = DATASET_VAR_LABELS[activeDataset] ?? DATASET_VAR_LABELS.garbageInOcean
  const VAR_LIST: Array<{ label: string; type: 'numerical' | 'categorical'; varName: DataVariable }> = [
    { label: varLabels.numerical,   type: 'numerical',   varName: 'numerical'   },
    { label: varLabels.categorical, type: 'categorical', varName: 'categorical' },
  ]

  const [bindings,        setBindings]        = useState<DataBindings>({
    markColor: null, markGeometry: null, scatterSize: null, scatterCount: null,
    c1AlignCount: null, c2AlignCount: null,
    markSizeX: null, markSizeY: null, markSizeZ: null, markScale: null,
  })
  // Encodings can be deactivated without deleting them: a disabled binding is
  // parked here and treated as null by everything that consumes encodings.
  const [bindingDisabled, setBindingDisabled] = useState<Partial<Record<keyof DataBindings, boolean>>>({})
  // Per-encoding numeric multiplier (×N) applied to a quantity binding's value.
  const [bindingScale, setBindingScale] = useState<BindingScale>({})
  const [markLabelConfig, setMarkLabelConfig] = useState<LabelConfig>(DEFAULT_LABEL)
  const [colLabelConfig,  setColLabelConfig]  = useState<LabelConfig>(DEFAULT_LABEL)
  const [colorMode,     setColorMode]     = useState<'distinct' | 'continuous'>('distinct')
  const [colorGradient, setColorGradient] = useState({ from: '#EE6655', to: '#4488EE' })
  const [colorTint,     setColorTint]     = useState(false)  // tint GLB material instead of replacing it
  const [markOpenSection, setMarkOpenSection] = useState<string | undefined>(undefined)
  const [scatterSeed,     setScatterSeed]     = useState(0)
  const [decorations,        setDecorations]        = useState<DecorationConfig[]>([])
  const [activeDecorationId, setActiveDecorationId] = useState<string | null>(null)
  // The selected sub-shape of a compound mark (edited in the Mark panel + viewport).
  const [activePartId, setActivePartId] = useState<string | null>(null)

  // Data modal
  const [showDataModal, setShowDataModal] = useState(false)

  // Radial bind menu (drag-to-canvas)
  const [radialMenu, setRadialMenu] = useState<{
    x: number; y: number
    varName: DataVariable; varType: 'numerical' | 'categorical'
  } | null>(null)

  // Save / load
  const [currentSaveId,   setCurrentSaveId]   = useState<string | null>(null)
  const [currentSaveName, setCurrentSaveName] = useState<string | null>(null)
  const [modalMode,       setModalMode]       = useState<'none' | 'save' | 'load'>('none')

  // Study submission (one-button send of the current scene to the study backend)
  const [studyStatus, setStudyStatus] = useState<'idle' | 'saving' | 'sent' | 'downloaded' | 'error'>('idle')

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
    // A fresh (re)bind or clear is always active — drop any parked/disabled flag.
    setBindingDisabled((prev) => { if (!(attr in prev)) return prev; const n = { ...prev }; delete n[attr]; return n })
    // Removing a binding resets its ×N multiplier so a later bind starts at ×1.
    if (variable === null) setBindingScale((prev) => { if (!(attr in prev)) return prev; const n = { ...prev }; delete n[attr]; return n })
    // Auto-open geometry section and select mark when geometry encoding is activated
    if (attr === 'markGeometry' && variable !== null) {
      setActiveElement('mark')
      setMarkOpenSection('Geometry')
    }
    // Clear per-category shape overrides when geometry encoding is removed
    if (attr === 'markGeometry' && variable === null) {
      setMarkConfig(prev => ({ ...prev, categoryShapes: undefined }))
    }
    // Auto-sync LV2 alignment count whenever any binding is made
    if (variable !== null) {
      setCol1Config((prev) => ({ ...prev, alignCount: layers.length }))
    }
    // Auto-sync LV3 alignment count when scatterSize is bound
    if (attr === 'scatterSize' && variable !== null) {
      setCol2Config((prev) => ({ ...prev, alignCount: layers.length }))
    }
  }

  // Bindings actually applied to the visualization: disabled ones read as null so
  // no encoding code needs to know about the disable feature.
  const activeBindings = useMemo<DataBindings>(() => {
    const out = { ...bindings }
    ;(Object.keys(out) as Array<keyof DataBindings>).forEach((k) => { if (bindingDisabled[k]) out[k] = null })
    return out
  }, [bindings, bindingDisabled])

  function handleToggleBind(attr: keyof DataBindings) {
    if (bindings[attr] === null) return   // nothing bound → nothing to toggle
    setBindingDisabled((prev) => ({ ...prev, [attr]: !prev[attr] }))
  }

  function handleSetScale(attr: keyof DataBindings, value: number) {
    setBindingScale((prev) => ({ ...prev, [attr]: value }))
  }

  function handleColorBind(variable: DataVariable, mode: 'distinct' | 'continuous') {
    setColorMode(mode)
    handleBind('markColor', variable)
    if (mode === 'continuous') {
      setActiveElement('mark')
      setMarkOpenSection('Material')
    }
  }

  function handleBindLabel(section: 'mark' | 'collection', variable: DataVariable, position: keyof LabelSlots) {
    // A slot holds a list of variables (shown joined with " · "), so binding a
    // second variable to the same position appends it rather than replacing.
    const updater = (prev: LabelConfig) => {
      const cur = prev.slots[position]
      if (cur.includes(variable)) return prev
      return { ...prev, show: true, slots: { ...prev.slots, [position]: [...cur, variable] } }
    }
    if (section === 'mark') setMarkLabelConfig(updater)
    else setColLabelConfig(updater)
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

  // ── Compound-mark parts ──────────────────────────────────────────────────────
  const partIdRef = useRef(0)
  const newPartId = () => `part_${Date.now().toString(36)}_${partIdRef.current++}`

  function newMarkPart(shape: MarkShape, offsetY: number): MarkPart {
    return { id: newPartId(), shape, offset: { x: 0, y: offsetY, z: 0 }, size: { x: 0.6, y: 0.6, z: 0.6 }, orientation: { x: 0, y: 0, z: 0 } }
  }
  // Turn the mark's single shape into the first part of a compound.
  function partFromMark(m: MarkConfig): MarkPart {
    return {
      id: newPartId(),
      shape: m.shape, customModelUrl: m.customModelUrl, customModelHasMat: m.customModelHasMat, customModelName: m.customModelName,
      offset: { x: 0, y: 0, z: 0 }, size: { x: 1, y: 1, z: 1 }, orientation: { x: 0, y: 0, z: 0 },
    }
  }

  function handleAddPart() {
    let newId = ''
    setMarkConfig((prev) => {
      const base = prev.parts && prev.parts.length ? prev.parts : [partFromMark(prev)]
      const np = newMarkPart('sphere', 0.06)
      newId = np.id
      return { ...prev, parts: [...base, np] }
    })
    setActiveElement('mark')
    setActivePartId(newId)
  }

  function handleRemovePart(id: string) {
    setMarkConfig((prev) => {
      if (!prev.parts) return prev
      const remaining = prev.parts.filter((p) => p.id !== id)
      // Dropping to a single part reverts to a plain (non-compound) mark.
      if (remaining.length <= 1) {
        const only = remaining[0]
        const next: MarkConfig = { ...prev, parts: undefined }
        if (only) {
          next.shape = only.shape
          next.customModelUrl = only.customModelUrl
          next.customModelHasMat = only.customModelHasMat
          next.customModelName = only.customModelName
        }
        return next
      }
      return { ...prev, parts: remaining }
    })
    setActivePartId((cur) => (cur === id ? null : cur))
  }

  function handleUpdatePart(id: string, patch: Partial<MarkPart>) {
    setMarkConfig((prev) => (prev.parts ? { ...prev, parts: prev.parts.map((p) => (p.id === id ? { ...p, ...patch } : p)) } : prev))
  }

  function handleRenameDecoration(id: string, name: string) {
    setDecorations((prev) => prev.map((d) => d.id === id ? { ...d, name } : d))
  }

  function captureState(): Record<string, unknown> {
    return {
      level, activeElement,
      markConfig, col1Config, col2Config, sceneConfig,
      bindings, bindingDisabled, bindingScale, markLabelConfig, colLabelConfig,
      decorations, layers, activeDataset, activeModelCollection,
      colorMode, colorGradient, colorTint,
    }
  }

  async function handleSubmitStudy() {
    if (studyStatus === 'saving') return
    setStudyStatus('saving')
    const participant = getParticipantId()
    const label = currentSaveName ?? (activeDataset || '')
    const result = await submitStudySession(participant, captureState(), label)
    const next = result.ok ? 'sent' : result.downloaded ? 'downloaded' : 'error'
    setStudyStatus(next)
    if (!result.ok) console.warn('[study] submit fell back:', result.error)
    setTimeout(() => setStudyStatus('idle'), 3500)
  }

  function doSave(name: string) {
    const saves = loadSaves()
    const data = { ...captureState(), thumbnail: captureThumbnail() }
    if (currentSaveId) {
      const idx = saves.findIndex((s) => s.id === currentSaveId)
      if (idx >= 0) {
        saves[idx] = { ...saves[idx], name, data }
        persistSaves(saves)
        setCurrentSaveName(name)
        setModalMode('none')
        return
      }
    }
    const id = `save_${Date.now()}`
    const newSave: SceneSave = { id, name, createdAt: new Date().toISOString(), data }
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
    const rawMark = resolveCustomModel(d.markConfig ?? DEFAULT_MARK)
    if (rawMark.categoryShapes) {
      const resolvedCats: typeof rawMark.categoryShapes = {}
      for (const [k, v] of Object.entries(rawMark.categoryShapes)) {
        resolvedCats[k] = resolveCustomModel(v as Parameters<typeof resolveCustomModel>[0])
      }
      setMarkConfig({ ...rawMark, categoryShapes: resolvedCats })
    } else {
      setMarkConfig(rawMark)
    }
    // Collections used to reference a global decoration as their surface / exclusion
    // target; that role now lives on the collection itself as `object`. Migrate old
    // saves by moving the referenced decoration into the collection and dropping it
    // from the global list (so it isn't drawn twice).
    const resolvedDecs = ((d.decorations ?? []) as DecorationConfig[]).map((dec) => resolveCustomModel(dec))
    const usedDecIds = new Set<string>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const migrateCollectionObj = (cfg: any): CollectionConfig => {
      if (!cfg || cfg.object) return cfg
      const refId = cfg.surfaceTargetId || cfg.scatterExclusionId
      if (!refId) return cfg
      const dec = resolvedDecs.find((dd) => dd.id === refId)
      if (!dec) return cfg
      usedDecIds.add(dec.id)
      return { ...cfg, object: dec, scatterExcludeObject: !!cfg.scatterExclusionId, surfaceTargetId: null, scatterExclusionId: null }
    }
    setCol1Config(migrateCollectionObj(d.col1Config ?? DEFAULT_COLLECTION1))
    setCol2Config(migrateCollectionObj(d.col2Config ?? DEFAULT_COLLECTION2))
    // Migrate the old boolean occlusion flag to the new mode (true → optimized).
    const rawScene = d.sceneConfig ?? DEFAULT_SCENE
    const occ = rawScene.sceneLabelOcclude
    setSceneConfig({
      ...rawScene,
      sceneLabelOcclude: typeof occ === 'boolean' ? (occ ? 'optimized' : 'off') : occ,
    })
    // Migrate old saves that used dataset-specific varNames to universal keys
    const migrateVar = (v: DataVariable | null): DataVariable | null => {
      if (v === 'garbageType' || v === 'section') return 'categorical' as DataVariable
      if (v === 'weight'      || v === 'count')   return 'numerical'   as DataVariable
      return v
    }
    const rawBindings = d.bindings ?? {}
    setBindings({
      markColor:    migrateVar(rawBindings.markColor    ?? null),
      markGeometry: migrateVar(rawBindings.markGeometry ?? null),
      scatterSize:  migrateVar(rawBindings.scatterSize  ?? null),
      scatterCount: migrateVar(rawBindings.scatterCount ?? null),
      c1AlignCount: migrateVar(rawBindings.c1AlignCount ?? null),
      c2AlignCount: migrateVar(rawBindings.c2AlignCount ?? null),
      markSizeX:    migrateVar(rawBindings.markSizeX    ?? null),
      markSizeY:    migrateVar(rawBindings.markSizeY    ?? null),
      markSizeZ:    migrateVar(rawBindings.markSizeZ    ?? null),
      markScale:    migrateVar(rawBindings.markScale    ?? null),
    })
    setBindingDisabled(d.bindingDisabled ?? {})
    setBindingScale(d.bindingScale ?? {})
    // Old saves stored a single variable (or null) per slot; new saves store a
    // list. Normalise either shape to a list.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const migrateSlot = (v: any): DataVariable[] =>
      (Array.isArray(v) ? v : [v]).map((x) => migrateVar(x)).filter((x): x is DataVariable => x != null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const migrateSlots = (cfg: any): LabelConfig => ({
      ...cfg,
      slots: {
        top:    migrateSlot(cfg.slots.top),
        bottom: migrateSlot(cfg.slots.bottom),
        left:   migrateSlot(cfg.slots.left),
        right:  migrateSlot(cfg.slots.right),
      },
    })
    setMarkLabelConfig(d.markLabelConfig ? migrateSlots(d.markLabelConfig) : DEFAULT_LABEL)
    setColLabelConfig(d.colLabelConfig   ? migrateSlots(d.colLabelConfig)  : DEFAULT_LABEL)
    setDecorations(resolvedDecs.filter((dec) => !usedDecIds.has(dec.id)))
    setLayers(d.layers ?? DEFAULT_LAYERS)
    if (d.activeDataset != null) {
      setActiveDataset(d.activeDataset)
      // Restore the saved collection if present, else fall back to the dataset's default.
      setActiveModelCollection(d.activeModelCollection ?? datasetModelCollection(d.activeDataset))
    } else if (d.activeModelCollection != null) {
      setActiveModelCollection(d.activeModelCollection)
    }
    setColorMode(d.colorMode ?? 'distinct')
    setColorGradient(d.colorGradient ?? { from: '#EE6655', to: '#4488EE' })
    setColorTint(d.colorTint ?? false)
    setCurrentSaveId(save.id)
    setCurrentSaveName(save.name)
    setActiveDecorationId(null); setActivePartId(null)
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

      {/* Left column: toolbar + hierarchy panel */}
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
                flex: 1, background: '#F2F2F7', color: '#1D1D1F',
                border: '1px solid #D1D1D6', borderRadius: '7px', padding: '6px 8px',
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
          {/* Render (path tracer) — hidden for the study
          <button
            onClick={() => { setPathTracingActive(true); setPathTracerSamples(0) }}
            disabled={pathTracingActive}
            style={{
              background: '#F2F2F7',
              color: pathTracingActive ? '#AEAEB2' : '#1D1D1F',
              border: '1px solid #D1D1D6', borderRadius: '7px', padding: '7px 8px',
              fontSize: '12px', fontWeight: '600',
              cursor: pathTracingActive ? 'default' : 'pointer',
              fontFamily: 'inherit', width: '100%',
            }}
          >
            {pathTracingActive ? 'Rendering...' : 'Render'}
          </button>
          */}
          <button
            onClick={handleSubmitStudy}
            disabled={studyStatus === 'saving'}
            title={studyConfigured()
              ? 'Submit your work to the study'
              : 'Study backend not configured — this will download a JSON file instead'}
            style={{
              background:
                studyStatus === 'sent'       ? '#34C759'
                : studyStatus === 'error'      ? '#FF3B30'
                : studyStatus === 'downloaded' ? '#FF9500'
                : '#007AFF',
              color: '#fff', border: 'none', borderRadius: '7px', padding: '7px 8px',
              fontSize: '12px', fontWeight: '700', width: '100%', fontFamily: 'inherit',
              cursor: studyStatus === 'saving' ? 'default' : 'pointer',
              opacity: studyStatus === 'saving' ? 0.75 : 1, transition: 'background 0.15s',
            }}
          >
            {studyStatus === 'saving'     ? 'Submitting…'
              : studyStatus === 'sent'       ? '✓ Submitted'
              : studyStatus === 'downloaded' ? '✓ Saved (backup file)'
              : studyStatus === 'error'      ? 'Submit failed — retry'
              : 'Submit my work'}
          </button>
        </div>

        {/* Hierarchy panel fills remaining space */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <HierarchyPanel
            level={level}
            activeElement={activeElement}
            onSelectElement={(el) => { setActiveElement(el); setActiveDecorationId(null); setActivePartId(null) }}
            onAdvanceLevel={advanceLevel}
            onDowngradeLevel={downgradeLevel}
            decorations={decorations}
            activeDecorationId={activeDecorationId}
            onSelectDecoration={setActiveDecorationId}
            onAddDecoration={handleAddDecoration}
            onRemoveDecoration={handleRemoveDecoration}
            onRenameDecoration={handleRenameDecoration}
          />
        </div>

        {/* Dataset reference — title, image and source link */}
        <DatasetReferenceCard datasetKey={activeDataset} />

      </div>

      {/* Center: 3D canvas */}
      <div
        style={{ flex: 1, position: 'relative', zIndex: 0 }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          const varName = e.dataTransfer.getData('phys-var/name') as DataVariable
          if (!varName) return
          const varType = e.dataTransfer.types.includes('phys-var/numerical') ? 'numerical' : 'categorical'
          setRadialMenu({ x: e.clientX, y: e.clientY, varName, varType })
        }}
      >
        <CompositionCanvas
          level={level}
          markConfig={markConfig}
          collection1Config={col1Config}
          collection2Config={col2Config}
          sceneConfig={sceneConfig}
          layers={layers}
          bindings={activeBindings}
          bindingScale={bindingScale}
          markLabelConfig={markLabelConfig}
          colLabelConfig={colLabelConfig}
          decorations={decorations}
          colorMode={colorMode}
          colorGradient={colorGradient}
          colorTint={colorTint}
          scatterSeed={scatterSeed}
          datasetTitle={DATASET_TITLES[activeDataset]}
          onSelectElement={(el) => { setActiveElement(el); setActiveDecorationId(null); setActivePartId(null) }}
          onSelectDecoration={setActiveDecorationId}
          onSelectPart={(id) => { setActiveElement('mark'); setActiveDecorationId(null); setActivePartId(id) }}
          onMarkChange={setMarkConfig}
          onDecorationChange={handleUpdateDecoration}
          onCollection1Change={setCol1Config}
          onCollection2Change={setCol2Config}
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

      {/* Right: properties panel + pinned data variables */}
      <div style={{
        width: '260px', flexShrink: 0,
        borderLeft: '1px solid #E5E5EA',
        background: '#FFFFFF',
        display: 'flex', flexDirection: 'column',
      }}>

        {/* Scrollable properties */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <PropertiesPanel
            activeElement={activeElement}
            compositionLevel={level}
            layers={layers}
            markConfig={markConfig}        onMarkChange={setMarkConfig}
            collection1Config={col1Config} onCollection1Change={setCol1Config}
            collection2Config={col2Config} onCollection2Change={setCol2Config}
            sceneConfig={sceneConfig}      onSceneChange={setSceneConfig}
            bindings={activeBindings}      onBind={handleBind}
            markLabelConfig={markLabelConfig}  onMarkLabelChange={setMarkLabelConfig}
            colLabelConfig={colLabelConfig}    onColLabelChange={setColLabelConfig}
            activeDecorationId={activeDecorationId}
            decorations={decorations}
            onDecorationChange={handleUpdateDecoration}
            colorMode={colorMode}
            colorGradient={colorGradient}
            onColorGradientChange={setColorGradient}
            colorTint={colorTint}
            onColorTintChange={setColorTint}
            markOpenSection={markOpenSection}
            onReseed={() => setScatterSeed(s => s + 1)}
            models={modelsForCollection(activeModelCollection)}
            varLabels={varLabels}
            activePartId={activePartId}
            onAddPart={handleAddPart}
            onRemovePart={handleRemovePart}
            onUpdatePart={handleUpdatePart}
            onSelectPart={setActivePartId}
          />
        </div>

        {/* Pinned data variables section — capped so it can't crowd out the properties */}
        <div style={{ borderTop: '1px solid #E5E5EA', padding: '14px 14px 16px', flexShrink: 0, maxHeight: '50%', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', color: '#AEAEB2', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
              Data
            </span>
            <button
              onClick={() => setShowDataModal(true)}
              style={{ background: 'none', border: '1px solid #D1D1D6', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', color: '#6C6C70', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Open Data
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {VAR_LIST.map(v => {
              const activeKeys = (Object.keys(bindings) as Array<keyof DataBindings>)
                .filter(k => bindings[k] === v.varName)

              // Collect label binding tags from mark + collection label configs.
              // For scattered marks the paired slots (top+left, bottom+right) both
              // read as Top / Below so the tag matches the picker the user saw.
              const isScatterMark = col1Config.arrangement === 'scattering'
              const isSurfaceMark = col1Config.arrangement === 'surface'
              const markPosName = (pos: 'top' | 'bottom' | 'left' | 'right') =>
                isSurfaceMark
                  ? 'Above'
                  : isScatterMark
                    ? (pos === 'top' || pos === 'left' ? 'Top' : 'Below')
                    : pos[0].toUpperCase() + pos.slice(1)
              const labelTags: Array<{ key: string; label: string; onRemove: () => void }> = []
              ;(['top', 'bottom', 'left', 'right'] as const).forEach(pos => {
                if (markLabelConfig.slots[pos].includes(v.varName)) {
                  labelTags.push({
                    key: `mark-${pos}`,
                    label: `Label ${markPosName(pos)}`,
                    onRemove: () => setMarkLabelConfig(prev => ({ ...prev, slots: { ...prev.slots, [pos]: prev.slots[pos].filter(x => x !== v.varName) } })),
                  })
                }
                if (colLabelConfig.slots[pos].includes(v.varName)) {
                  labelTags.push({
                    key: `col-${pos}`,
                    label: `Label ${pos[0].toUpperCase() + pos.slice(1)}`,
                    onRemove: () => setColLabelConfig(prev => ({ ...prev, slots: { ...prev.slots, [pos]: prev.slots[pos].filter(x => x !== v.varName) } })),
                  })
                }
              })

              return (
                <div key={v.varName}>
                  <VarChip label={v.label} type={v.type} varName={v.varName} />
                  {(activeKeys.length > 0 || labelTags.length > 0) && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                      {activeKeys.map(k => {
                        const off = !!bindingDisabled[k]
                        return (
                        <div key={k}
                          onClick={() => handleToggleBind(k)}
                          title={off ? 'Disabled — click to re-enable' : 'Click to disable (keeps the binding)'}
                          style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px', cursor: 'pointer',
                          background: off ? '#F1F1F5' : '#E8F1FF', border: `1px solid ${off ? '#DADAE0' : '#BBD6FF'}`,
                          borderRadius: '10px', padding: '4px 6px 4px 11px',
                          fontSize: '12.5px', color: off ? '#A0A0A8' : '#0A66DA', fontWeight: '600', lineHeight: 1.2,
                        }}>
                          <span style={{ textDecoration: off ? 'line-through' : 'none', whiteSpace: 'nowrap' }}>
                            {BINDING_LEVEL[k] && <span style={{ color: off ? '#C7C7CC' : '#8FB6EE', marginRight: '3px', fontWeight: '500' }}>{BINDING_LEVEL[k]}</span>}
                            {BINDING_LABELS[k]}
                          </span>
                          {SCALABLE_BINDINGS.has(k) && (
                            <ScaleInput value={bindingScale[k] ?? 1} disabled={off} onCommit={(n) => handleSetScale(k, n)} />
                          )}
                          <button
                            onClick={(e) => { e.stopPropagation(); handleBind(k, null) }}
                            title="Remove"
                            style={{
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              width: '17px', height: '17px', borderRadius: '50%', flexShrink: 0,
                              background: 'none', border: 'none', cursor: 'pointer',
                              color: off ? '#B4B4BC' : '#7FAEF0', fontSize: '14px', lineHeight: 1, fontFamily: 'inherit', padding: 0,
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = off ? '#E4E4EA' : '#D3E4FF' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                          >×</button>
                        </div>
                        )
                      })}
                      {labelTags.map(lt => (
                        <div key={lt.key} style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          background: '#E8F1FF', border: '1px solid #BBD6FF',
                          borderRadius: '10px', padding: '4px 6px 4px 11px',
                          fontSize: '12.5px', color: '#0A66DA', fontWeight: '600', lineHeight: 1.2,
                        }}>
                          <span style={{ whiteSpace: 'nowrap' }}>{lt.label}</span>
                          <button
                            onClick={lt.onRemove}
                            title="Remove"
                            style={{
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              width: '17px', height: '17px', borderRadius: '50%', flexShrink: 0,
                              background: 'none', border: 'none', cursor: 'pointer',
                              color: '#7FAEF0', fontSize: '14px', lineHeight: 1, fontFamily: 'inherit', padding: 0,
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#D3E4FF' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                          >×</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Modals */}
      {modalMode === 'save' && (
        <SaveDialog
          initialName={currentSaveName ?? ''}
          onSave={doSave}
          onClose={() => setModalMode('none')}
        />
      )}
      {/* Data panel modal */}
      {showDataModal && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}
          onClick={() => setShowDataModal(false)}
        >
          <div
            style={{ background: '#fff', borderRadius: '14px', width: '340px', maxWidth: '90vw', maxHeight: '80vh', display: 'flex', flexDirection: 'column', boxShadow: '0 16px 48px rgba(0,0,0,0.28)', overflow: 'hidden', fontFamily: 'inherit' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '14px 20px', borderBottom: '1px solid #E5E5EA', fontSize: '15px', fontWeight: '700', color: '#1D1D1F', flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Data Panel
              <button onClick={() => setShowDataModal(false)} style={{ background: 'none', border: 'none', fontSize: '18px', color: '#AEAEB2', cursor: 'pointer', lineHeight: 1, padding: '0 2px' }}>×</button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
              <LeftDataPanel layers={layers} onChange={setLayers} onDatasetChange={setActiveDataset} selectedDataset={activeDataset} modelCollection={activeModelCollection} onModelCollectionChange={setActiveModelCollection} />
            </div>
          </div>
        </div>
      )}

      {modalMode === 'load' && (
        <LoadDialog
          onLoad={handleLoad}
          onClose={() => setModalMode('none')}
          currentName={currentSaveName ?? 'scene'}
          currentData={captureState()}
        />
      )}

      {/* Radial bind menu — appears when user drops a var chip onto the canvas */}
      {radialMenu && (
        <RadialBindMenu
          x={radialMenu.x}
          y={radialMenu.y}
          varName={radialMenu.varName}
          varType={radialMenu.varType}
          level={level}
          col1Arrangement={col1Config.arrangement}
          markIsCompound={!!markConfig.parts && markConfig.parts.length > 0}
          onBind={handleBind}
          onColorBind={handleColorBind}
          onBindLabel={handleBindLabel}
          onClose={() => setRadialMenu(null)}
        />
      )}

    </div>
  )
}
