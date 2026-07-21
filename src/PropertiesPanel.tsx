import React, { useState, useRef, useEffect } from 'react'
import {
  ActiveElement, CompositionLevel,
  MarkConfig, CollectionConfig, SceneConfig,
  MarkShape, MarkMaterial, HdriPreset, Vec3,
  StructuralDeformation, CollectionArrangement,
  DataBindings, DataVariable, LabelConfig, LabelPosition,
  LabelSlots, DecorationConfig, LayerData, CategoryShapeEntry,
} from './types'

const VAR_LABELS: Record<string, { label: string; type: 'numerical' | 'categorical' }> = {
  weight:      { label: 'Weight',       type: 'numerical'   },
  garbageType: { label: 'Garbage Type', type: 'categorical' },
  count:       { label: 'Count',        type: 'numerical'   },
}
import { MODEL_PRESETS } from './models'

// ── Focal length utility ──────────────────────────────────────────────────────
export function focalLengthToFov(mm: number): number {
  return (2 * Math.atan(12 / mm) * 180) / Math.PI
}

// ── Icon paths ────────────────────────────────────────────────────────────────
const BASE = import.meta.env.BASE_URL
const ICONS = {
  spatial:     `${BASE}assets/icons/spatial.png`,
  shape:       `${BASE}assets/icons/shape.png`,
  material:    `${BASE}assets/icons/material.png`,
  structural:  `${BASE}assets/icons/structural.png`,
  populations: `${BASE}assets/icons/populations.png`,
  framing:     `${BASE}assets/icons/framing.png`,
  labels:      `${BASE}assets/icons/labels.png`,
}

// ── Shared UI primitives ──────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '10px', color: '#8E8E93',
      textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: '600',
    }}>
      {children}
    </span>
  )
}

function Row({ label, children, right }: {
  label: string; children: React.ReactNode; right?: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <SectionLabel>{label}</SectionLabel>
        {right}
      </div>
      {children}
    </div>
  )
}

function SegmentedControl<T extends string>({
  options, value, onChange,
}: { options: { value: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div style={{
      display: 'flex', background: '#EFEFEF',
      borderRadius: '8px', padding: '2px', gap: '2px',
    }}>
      {options.map((opt) => {
        const active = value === opt.value
        return (
          <button key={opt.value} onClick={() => onChange(opt.value)} style={{
            flex: 1, padding: '5px 4px',
            background: active ? '#FFFFFF' : 'transparent',
            border: 'none', borderRadius: '6px',
            boxShadow: active ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
            color: active ? '#1D1D1F' : '#6C6C70',
            cursor: 'pointer', fontSize: '12px', fontWeight: active ? '600' : '400',
            transition: 'all 0.15s', whiteSpace: 'nowrap', fontFamily: 'inherit',
          }}>
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

// ── Variable metadata ─────────────────────────────────────────────────────────

const VAR_META: Record<DataVariable, { label: string; type: 'numerical' | 'categorical' }> = {
  numerical:   { label: 'Numerical',    type: 'numerical'   },
  categorical: { label: 'Categorical',  type: 'categorical' },
  weight:      { label: 'Weight',       type: 'numerical'   },
  garbageType: { label: 'Garbage Type', type: 'categorical' },
  count:       { label: 'Count',        type: 'numerical'   },
  section:     { label: 'Section',      type: 'categorical' },
}

// ── Drag-and-drop primitives ──────────────────────────────────────────────────

function DropZone({ children, accepts, onDrop }: {
  children: React.ReactNode
  accepts:  'numerical' | 'categorical' | 'any'
  onDrop:   (varName: string) => void
}) {
  const [over, setOver] = useState(false)
  const keys = accepts === 'any'
    ? ['phys-var/numerical', 'phys-var/categorical']
    : [`phys-var/${accepts}`]
  const hasKey = (types: readonly string[]) => keys.some(k => types.includes(k))
  const accent = accepts === 'categorical' ? '#5E5CE6' : '#007AFF'

  return (
    <div
      onDragOver={(e) => {
        if (hasKey(e.dataTransfer.types)) { e.preventDefault(); setOver(true) }
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        if (!hasKey(e.dataTransfer.types)) return
        e.preventDefault()
        setOver(false)
        onDrop(e.dataTransfer.getData('phys-var/name'))
      }}
      style={{
        borderRadius: '8px',
        outline: over ? `2px dashed ${accent}` : '2px dashed transparent',
        outlineOffset: '2px', transition: 'outline 0.1s',
      }}
    >
      {children}
    </div>
  )
}

function BoundChip({ label, type, onClear }: {
  label: string; type: 'numerical' | 'categorical'; onClear: () => void
}) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      background: '#EBF3FF', border: '1px solid #A8CAFF',
      borderRadius: '7px', padding: '6px 10px',
      fontSize: '12px', color: '#007AFF', fontWeight: '500',
    }}>
      <span>{type === 'numerical' ? '#' : '◈'} {label}</span>
      <button onClick={onClear} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: '#60A0EE', padding: '0 0 0 2px',
        fontSize: '14px', lineHeight: 1, fontFamily: 'inherit',
      }}>×</button>
    </div>
  )
}

// ── Label slot drop zone ──────────────────────────────────────────────────────

const SLOT_ICONS: Record<LabelPosition, string> = { top: '↑', bottom: '↓', left: '←', right: '→' }

function LabelSlotZone({ position, slot, onBind, onClear }: {
  position: LabelPosition
  slot:     DataVariable | null
  onBind:   (v: DataVariable) => void
  onClear:  () => void
}) {
  const [over, setOver] = useState(false)

  if (slot !== null) {
    const meta = VAR_META[slot]
    return <BoundChip label={meta.label} type={meta.type} onClear={onClear} />
  }

  return (
    <div
      onDragOver={(e) => {
        const ok = e.dataTransfer.types.some(t => t === 'phys-var/numerical' || t === 'phys-var/categorical')
        if (ok) { e.preventDefault(); setOver(true) }
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        const ok = e.dataTransfer.types.some(t => t === 'phys-var/numerical' || t === 'phys-var/categorical')
        if (!ok) return
        e.preventDefault()
        setOver(false)
        onBind(e.dataTransfer.getData('phys-var/name') as DataVariable)
      }}
      title={`Drag a variable to the ${position} label`}
      style={{
        border: `1.5px dashed ${over ? '#007AFF' : '#D1D1D6'}`,
        borderRadius: '7px', padding: '4px 8px',
        fontSize: '10px', color: over ? '#007AFF' : '#AEAEB2',
        textAlign: 'center', whiteSpace: 'nowrap',
        background: over ? '#EBF3FF' : 'transparent',
        transition: 'all 0.1s', cursor: 'default',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
      }}
    >
      <span>{SLOT_ICONS[position]}</span>
      <span style={{ textTransform: 'capitalize' }}>{position}</span>
    </div>
  )
}

function LabelSlotsEditor({ config, onChange }: {
  config:   LabelConfig
  onChange: (c: LabelConfig) => void
}) {
  function updateSlot(pos: LabelPosition, v: DataVariable | null) {
    onChange({ ...config, slots: { ...config.slots, [pos]: v } })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button
        onClick={() => onChange({ ...config, show: !config.show })}
        style={{
          alignSelf: 'flex-start',
          background: config.show ? '#EBF3FF' : '#F2F2F7',
          border: `1px solid ${config.show ? '#A8CAFF' : '#D1D1D6'}`,
          color: config.show ? '#007AFF' : '#6C6C70',
          borderRadius: '6px', padding: '6px 14px',
          fontSize: '12px', fontWeight: config.show ? '600' : '400',
          cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
        }}
      >
        {config.show ? '● Visible' : '○ Hidden'}
      </button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gridTemplateRows: 'auto auto auto',
        gap: '4px', alignItems: 'center', justifyItems: 'center',
      }}>
        {/* row 0: Top */}
        <div />
        <LabelSlotZone position="top"    slot={config.slots.top}    onBind={(v) => updateSlot('top', v)}    onClear={() => updateSlot('top', null)} />
        <div />
        {/* row 1: Left · center · Right */}
        <LabelSlotZone position="left"   slot={config.slots.left}   onBind={(v) => updateSlot('left', v)}   onClear={() => updateSlot('left', null)} />
        <div style={{ width: '18px', height: '18px', background: '#E5E5EA', borderRadius: '4px', flexShrink: 0 }} />
        <LabelSlotZone position="right"  slot={config.slots.right}  onBind={(v) => updateSlot('right', v)}  onClear={() => updateSlot('right', null)} />
        {/* row 2: Bottom */}
        <div />
        <LabelSlotZone position="bottom" slot={config.slots.bottom} onBind={(v) => updateSlot('bottom', v)} onClear={() => updateSlot('bottom', null)} />
        <div />
      </div>
    </div>
  )
}

// ── Collapsible attribute category ────────────────────────────────────────────

interface AttributeCategoryProps {
  icon: string; title: string
  open?: boolean; onToggle?: () => void
  children?: React.ReactNode; empty?: boolean
}

function AttributeCategory({ icon, title, open = false, onToggle, children, empty = false }: AttributeCategoryProps) {
  return (
    <div style={{
      border: '1px solid #E5E5EA', borderRadius: '10px', overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: '9px',
          padding: '9px 12px', width: '100%', textAlign: 'left',
          background: '#F8F8FA', border: 'none',
          borderBottom: open && !empty ? '1px solid #E5E5EA' : 'none',
          cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.1s',
        }}
      >
        <img src={icon} alt={title} style={{ width: '24px', height: '24px', borderRadius: '6px', flexShrink: 0, objectFit: 'cover' }} />
        <span style={{ flex: 1, fontSize: '12px', fontWeight: '600', color: '#1D1D1F', lineHeight: 1 }}>{title}</span>
        <span style={{ fontSize: '10px', color: '#AEAEB2', transition: 'transform 0.15s', display: 'inline-block', transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '12px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {empty
            ? <div style={{ fontSize: '11px', color: '#C7C7CC', textAlign: 'center', padding: '8px 0', fontStyle: 'italic' }}>Coming soon</div>
            : children}
        </div>
      )}
    </div>
  )
}

function useAccordion(initial: string, jumpTo?: string) {
  const [open, setOpen] = useState(initial)
  useEffect(() => {
    if (jumpTo !== undefined) setOpen(jumpTo)
  }, [jumpTo])
  return {
    isOpen: (s: string) => open === s,
    toggle: (s: string) => setOpen(o => o === s ? '' : s),
  }
}

// ── Vec3 input with optional aspect-ratio lock and per-axis data binding ───────

function Vec3Input({
  label, value, onChange, min, max, step = 0.1, lockable = false,
  axisBindings, onAxisBind,
}: {
  label: string; value: Vec3; onChange: (v: Vec3) => void
  min?: number; max?: number; step?: number; lockable?: boolean
  axisBindings?: { x: DataVariable | null; y: DataVariable | null; z: DataVariable | null }
  onAxisBind?:   (axis: 'x' | 'y' | 'z', v: DataVariable | null) => void
}) {
  const [locked,   setLocked]   = useState(false)
  const [overAxis, setOverAxis] = useState<'x' | 'y' | 'z' | null>(null)
  const axes: (keyof Vec3)[] = ['x', 'y', 'z']

  function handleChange(axis: keyof Vec3, raw: number) {
    if (locked && value[axis] !== 0) {
      const ratio = raw / value[axis]
      onChange({
        x: axis === 'x' ? raw : parseFloat((value.x * ratio).toFixed(3)),
        y: axis === 'y' ? raw : parseFloat((value.y * ratio).toFixed(3)),
        z: axis === 'z' ? raw : parseFloat((value.z * ratio).toFixed(3)),
      })
    } else {
      onChange({ ...value, [axis]: raw })
    }
  }

  const lockBtn = lockable ? (
    <button
      onClick={(e) => { e.stopPropagation(); setLocked(!locked) }}
      title={locked ? 'Unlock proportions' : 'Lock proportions (scale all axes together)'}
      style={{
        background: locked ? '#007AFF' : 'transparent',
        border: `1px solid ${locked ? '#007AFF' : '#D1D1D6'}`,
        borderRadius: '4px', padding: '1px 7px', lineHeight: '16px',
        cursor: 'pointer', fontSize: '10px',
        color: locked ? '#fff' : '#AEAEB2',
        fontFamily: 'inherit', transition: 'all 0.12s',
      }}
    >
      ⛓
    </button>
  ) : undefined

  return (
    <Row label={label} right={lockBtn}>
      <div style={{ display: 'flex', gap: '5px' }}>
        {axes.map((axis) => {
          const boundVar = axisBindings?.[axis] ?? null
          const isOver   = overAxis === axis

          if (boundVar !== null && onAxisBind) {
            const meta = VAR_META[boundVar]
            return (
              <div key={axis} style={{ flex: 1 }}>
                <div style={{
                  display: 'flex', alignItems: 'stretch',
                  border: `1px solid ${meta.type === 'numerical' ? '#A8CAFF' : '#C8A8FF'}`,
                  borderRadius: '6px', overflow: 'hidden',
                  background: meta.type === 'numerical' ? '#EBF3FF' : '#F3EBFF',
                }}>
                  <span style={{
                    padding: '4px 5px', background: meta.type === 'numerical' ? '#C5DFFF' : '#DFC5FF',
                    color: meta.type === 'numerical' ? '#0055CC' : '#5500CC',
                    fontSize: '9px', fontWeight: '700', letterSpacing: '0.03em',
                    display: 'flex', alignItems: 'center', flexShrink: 0,
                  }}>
                    {axis.toUpperCase()}
                  </span>
                  <span style={{
                    flex: 1, padding: '4px 4px', fontSize: '10px',
                    color: meta.type === 'numerical' ? '#007AFF' : '#5E5CE6',
                    fontWeight: '600', display: 'flex', alignItems: 'center',
                    overflow: 'hidden', whiteSpace: 'nowrap',
                  }}>
                    {meta.type === 'numerical' ? '#' : '◈'} {meta.label}
                  </span>
                  <button
                    onClick={() => onAxisBind(axis, null)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#AEAEB2', padding: '0 4px',
                      fontSize: '13px', lineHeight: 1, fontFamily: 'inherit',
                    }}
                  >×</button>
                </div>
              </div>
            )
          }

          return (
            <div
              key={axis}
              style={{ flex: 1 }}
              onDragOver={(e) => {
                if (axisBindings && e.dataTransfer.types.includes('phys-var/numerical')) {
                  e.preventDefault(); setOverAxis(axis)
                }
              }}
              onDragLeave={() => setOverAxis(null)}
              onDrop={(e) => {
                if (!axisBindings || !e.dataTransfer.types.includes('phys-var/numerical')) return
                e.preventDefault(); setOverAxis(null)
                onAxisBind?.(axis, e.dataTransfer.getData('phys-var/name') as DataVariable)
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'stretch',
                border: `1px solid ${isOver ? '#007AFF' : '#D1D1D6'}`,
                borderRadius: '6px', overflow: 'hidden',
                outline: isOver ? '1px dashed #007AFF' : 'none',
                outlineOffset: '1px',
              }}>
                <span style={{
                  padding: '4px 5px', background: '#E5E5EA', color: '#6C6C70',
                  fontSize: '9px', fontWeight: '700', letterSpacing: '0.03em',
                  display: 'flex', alignItems: 'center', flexShrink: 0,
                }}>
                  {axis.toUpperCase()}
                </span>
                <input
                  type="number"
                  value={value[axis]}
                  min={min} max={max} step={step}
                  onChange={(e) => handleChange(axis, Number(e.target.value))}
                  style={{
                    flex: 1, minWidth: 0, background: '#F2F2F7', border: 'none',
                    padding: '4px 5px', fontSize: '11px', color: '#1D1D1F',
                    outline: 'none', fontFamily: 'monospace', width: '100%',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </Row>
  )
}

// ── Constants ─────────────────────────────────────────────────────────────────

const MATERIAL_HINTS: Record<MarkMaterial, string> = {
  plastic:  'Matte diffuse surface',
  fluid:    'Glass-like, clearcoat + iridescence',
  metal:    'Polished — mirrors the HDRI',
  emissive: 'Self-illuminated, glows with color',
  original: "Use the model's built-in materials",
}

const MATERIAL_OPTIONS: MarkMaterial[] = ['plastic', 'fluid', 'metal', 'emissive']

const ARRANGEMENT_OPTIONS: { value: CollectionArrangement; label: string }[] = [
  { value: 'alignment',  label: 'Alignment'  },
  { value: 'scattering', label: 'Scattering' },
  { value: 'stacking',   label: 'Stacking'   },
  { value: 'piling',     label: 'Piling'     },
]

const HDRI_OPTIONS: { value: HdriPreset; label: string }[] = [
  { value: 'city',      label: 'City'      },
  { value: 'warehouse', label: 'Warehouse' },
  { value: 'sunset',    label: 'Sunset'    },
  { value: 'dawn',      label: 'Dawn'      },
  { value: 'forest',    label: 'Forest'    },
  { value: 'night',     label: 'Night'     },
  { value: 'studio',    label: 'Studio'    },
  { value: 'apartment', label: 'Apartment' },
]

// ── Panel header ──────────────────────────────────────────────────────────────

function PanelHeader({ title }: { title: string }) {
  return (
    <div style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: '700' }}>{title}</div>
  )
}

// ── Mark properties ───────────────────────────────────────────────────────────

function StructuralSection({ structural, onChange }: {
  structural: MarkConfig['structural']
  onChange: (s: MarkConfig['structural']) => void
}) {
  return (
    <>
      <Row label="Deformation">
        <SegmentedControl
          options={[
            { value: 'none'  as StructuralDeformation, label: 'None'     },
            { value: 'fluid' as StructuralDeformation, label: '〜 Fluid' },
          ]}
          value={structural.deformation}
          onChange={(v) => onChange({ ...structural, deformation: v })}
        />
      </Row>
      {structural.deformation === 'fluid' && (
        <>
          <Row label="Wave Intensity">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="range" min={0} max={0.8} step={0.01} value={structural.fluidDistort}
                onChange={(e) => onChange({ ...structural, fluidDistort: Number(e.target.value) })}
                style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
              <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '32px', textAlign: 'right' }}>{structural.fluidDistort.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#C7C7CC' }}>
              <span>Rigid</span><span>Fluid</span>
            </div>
          </Row>
          <Row label="Wave Speed">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="range" min={0} max={5} step={0.1} value={structural.fluidSpeed}
                onChange={(e) => onChange({ ...structural, fluidSpeed: Number(e.target.value) })}
                style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
              <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '32px', textAlign: 'right' }}>{structural.fluidSpeed.toFixed(1)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#C7C7CC' }}>
              <span>Still</span><span>Fast</span>
            </div>
          </Row>
        </>
      )}
    </>
  )
}

// Shape selection type that includes custom model fields
type ShapeConfig = {
  shape: MarkShape
  material: MarkMaterial
  customModelUrl?:    string
  customModelHasMat?: boolean
  customModelName?:   string
}

function ShapeDropdown({ config, onChange }: {
  config:   ShapeConfig
  onChange: (patch: Partial<ShapeConfig & { material: MarkMaterial }>) => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const blobUrlRef   = useRef<string | null>(null)

  const isPreset     = config.shape === 'custom' && MODEL_PRESETS.some(p => p.name === config.customModelName)
  const isUserImport = config.shape === 'custom' && !isPreset

  const selectValue = config.shape !== 'custom'
    ? config.shape
    : isPreset
      ? `preset:${config.customModelName}`
      : config.customModelUrl ? '__blob__' : 'box'

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    if (value === '__import__') {
      fileInputRef.current?.click()
      return
    }
    if (value === '__blob__') return
    if (value.startsWith('preset:')) {
      const name   = value.slice(7)
      const preset = MODEL_PRESETS.find(p => p.name === name)
      if (preset) onChange({ shape: 'custom', customModelUrl: preset.url, customModelHasMat: true, customModelName: preset.name, material: 'original' })
      return
    }
    // built-in
    const mat = config.material === 'original' ? 'plastic' : config.material
    onChange({ shape: value as MarkShape, customModelUrl: undefined, customModelHasMat: undefined, customModelName: undefined, material: mat })
  }

  function handleFileImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current)
    const url  = URL.createObjectURL(file)
    blobUrlRef.current = url
    const name = file.name.replace(/\.(glb|gltf)$/i, '')
    onChange({ shape: 'custom', customModelUrl: url, customModelHasMat: true, customModelName: name, material: 'original' })
    e.target.value = ''
  }

  const selectStyle: React.CSSProperties = {
    width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6',
    borderRadius: '8px', color: '#1D1D1F', fontSize: '13px',
    padding: '7px 10px', outline: 'none', cursor: 'pointer',
    fontFamily: 'inherit', appearance: 'auto',
  }

  return (
    <>
      <select value={selectValue} onChange={handleChange} style={selectStyle}>
        <optgroup label="Primitives">
          <option value="box">■  Box</option>
          <option value="sphere">●  Sphere</option>
          <option value="star">★  Star</option>
        </optgroup>

        {MODEL_PRESETS.length > 0 && (
          <optgroup label="3D Models">
            {MODEL_PRESETS.map(p => (
              <option key={p.name} value={`preset:${p.name}`}>{p.name}</option>
            ))}
          </optgroup>
        )}

        <optgroup label="Custom">
          {isUserImport && (
            <option value="__blob__">✎  {config.customModelName ?? 'Imported file'}</option>
          )}
          <option value="__import__">↑  Import .glb / .gltf…</option>
        </optgroup>
      </select>
      <input
        ref={fileInputRef} type="file" accept=".glb,.gltf"
        style={{ display: 'none' }} onChange={handleFileImport}
      />
    </>
  )
}

function MarkProperties({
  config, onChange, bindings, onBind, labelConfig, onLabelChange,
  colorMode, colorGradient, onColorGradientChange, openSection,
  layers, compositionLevel,
}: {
  config:         MarkConfig
  onChange:       (c: MarkConfig) => void
  bindings:       DataBindings
  onBind:         (attr: keyof DataBindings, v: DataVariable | null) => void
  labelConfig:    LabelConfig
  onLabelChange:  (c: LabelConfig) => void
  colorMode?:              'distinct' | 'continuous'
  colorGradient?:          { from: string; to: string }
  onColorGradientChange?:  (g: { from: string; to: string }) => void
  openSection?:            string
  layers:          LayerData[]
  compositionLevel: CompositionLevel
}) {
  const materialOptions: MarkMaterial[] = config.shape === 'custom' && config.customModelHasMat
    ? ['original', 'plastic', 'fluid', 'metal', 'emissive']
    : MATERIAL_OPTIONS
  const acc = useAccordion('Spatial', openSection)

  return (
    <>
      <PanelHeader title="Mark" />

      {/* ── Spatial ── */}
      <AttributeCategory icon={ICONS.spatial} title="Spatial" open={acc.isOpen('Spatial')} onToggle={() => acc.toggle('Spatial')}>
        <Vec3Input label="Position"    value={config.position}    onChange={(v) => onChange({ ...config, position: v })}    min={-10} max={10}  step={0.1} />
        <Row label="Scale">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="range" min={0.1} max={10} step={0.1}
              value={config.scale ?? 1}
              onChange={(e) => onChange({ ...config, scale: Number(e.target.value) })}
              style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
            <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>
              {(config.scale ?? 1).toFixed(1)}×
            </span>
          </div>
        </Row>
        <Vec3Input
          label="Size"
          value={config.size}
          onChange={(v) => onChange({ ...config, size: v })}
          min={0.1} max={10} step={0.1}
          lockable
          axisBindings={{ x: bindings.markSizeX, y: bindings.markSizeY, z: bindings.markSizeZ }}
          onAxisBind={(axis, v) => onBind(
            axis === 'x' ? 'markSizeX' : axis === 'y' ? 'markSizeY' : 'markSizeZ', v
          )}
        />
        <Vec3Input label="Orientation" value={config.orientation} onChange={(v) => onChange({ ...config, orientation: v })} min={-180} max={180} step={1} />
      </AttributeCategory>

      {/* ── Geometry ── */}
      <AttributeCategory icon={ICONS.shape} title="Geometry" open={acc.isOpen('Geometry')} onToggle={() => acc.toggle('Geometry')}>
        {bindings.markGeometry !== null && layers.length > 1 ? (
          // Per-category shape selection (active when geometry encoding is bound)
          layers.map((layer) => {
            const catEntry: CategoryShapeEntry | undefined = config.categoryShapes?.[layer.name]
            const catCfg: ShapeConfig = {
              shape:             catEntry?.shape ?? config.shape,
              material:          config.material,
              customModelUrl:    catEntry?.customModelUrl,
              customModelHasMat: catEntry?.customModelHasMat,
              customModelName:   catEntry?.customModelName,
            }
            return (
              <Row key={layer.id} label={layer.name}>
                <ShapeDropdown
                  config={catCfg}
                  onChange={(patch) => onChange({
                    ...config,
                    categoryShapes: {
                      ...(config.categoryShapes ?? {}),
                      [layer.name]: {
                        shape:             patch.shape ?? catEntry?.shape ?? config.shape,
                        customModelUrl:    patch.customModelUrl,
                        customModelHasMat: patch.customModelHasMat,
                        customModelName:   patch.customModelName,
                      },
                    },
                  })}
                />
              </Row>
            )
          })
        ) : (
          <Row label="Shape">
            <ShapeDropdown
              config={config}
              onChange={(patch) => onChange({ ...config, ...patch } as MarkConfig)}
            />
          </Row>
        )}
      </AttributeCategory>

      {/* ── Material ── */}
      <AttributeCategory icon={ICONS.material} title="Material" open={acc.isOpen('Material')} onToggle={() => acc.toggle('Material')}>
        <Row label="Type">
          <select
            value={config.material}
            onChange={(e) => onChange({ ...config, material: e.target.value as MarkMaterial })}
            style={{ width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', color: '#1D1D1F', fontSize: '13px', padding: '7px 10px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', appearance: 'auto' }}
          >
            {materialOptions.map((m) => (
              <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>
            ))}
          </select>
          <div style={{ fontSize: '11px', color: '#AEAEB2', lineHeight: 1.5 }}>{MATERIAL_HINTS[config.material]}</div>
        </Row>

        <Row label="Color">
          {bindings.markColor !== null ? (
            <>
              <BoundChip
                label={VAR_LABELS[bindings.markColor]?.label ?? bindings.markColor}
                type={VAR_LABELS[bindings.markColor]?.type ?? 'categorical'}
                onClear={() => onBind('markColor', null)}
              />
              {colorMode === 'continuous' && colorGradient && onColorGradientChange && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                  <input type="color" value={colorGradient.from}
                    onChange={(e) => onColorGradientChange({ ...colorGradient, from: e.target.value })}
                    style={{ width: '32px', height: '28px', border: '1px solid #D1D1D6', borderRadius: '5px', background: 'none', cursor: 'pointer', padding: '1px' }}
                  />
                  <span style={{ fontSize: '12px', color: '#AEAEB2', fontWeight: '500' }}>→</span>
                  <input type="color" value={colorGradient.to}
                    onChange={(e) => onColorGradientChange({ ...colorGradient, to: e.target.value })}
                    style={{ width: '32px', height: '28px', border: '1px solid #D1D1D6', borderRadius: '5px', background: 'none', cursor: 'pointer', padding: '1px' }}
                  />
                  <span style={{ fontSize: '11px', color: '#8E8E93' }}>Gradient</span>
                </div>
              )}
            </>
          ) : (
            <DropZone accepts="categorical" onDrop={() => onBind('markColor', 'garbageType')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '2px' }}>
                <input
                  type="color" value={config.color}
                  onChange={(e) => onChange({ ...config, color: e.target.value })}
                  style={{ width: '36px', height: '32px', border: '1px solid #D1D1D6', borderRadius: '6px', background: 'none', cursor: 'pointer', padding: '2px' }}
                />
                <span style={{ fontSize: '12px', color: '#8E8E93', fontFamily: 'monospace' }}>{config.color}</span>
              </div>
            </DropZone>
          )}
        </Row>
      </AttributeCategory>

      {/* ── Structural ── (temporarily hidden)
      <AttributeCategory icon={ICONS.structural} title="Structural" open={acc.isOpen('Structural')} onToggle={() => acc.toggle('Structural')}>
        <StructuralSection
          structural={config.structural}
          onChange={(s) => onChange({ ...config, structural: s })}
        />
      </AttributeCategory>
      */}

      {/* ── Labels ── */}
      <AttributeCategory icon={ICONS.labels} title="Labels" open={acc.isOpen('Labels')} onToggle={() => acc.toggle('Labels')}>
        <LabelSlotsEditor config={labelConfig} onChange={onLabelChange} />
      </AttributeCategory>
    </>
  )
}

// ── Collection properties ─────────────────────────────────────────────────────

function CollectionProperties({
  config, onChange, collectionLevel, bindings, onBind, labelConfig, onLabelChange, onReseed,
}: {
  config:          CollectionConfig
  onChange:        (c: CollectionConfig) => void
  collectionLevel: 1 | 2
  bindings:        DataBindings
  onBind:          (attr: keyof DataBindings, v: DataVariable | null) => void
  labelConfig?:    LabelConfig
  onLabelChange?:  (c: LabelConfig) => void
  onReseed?:       () => void
}) {
  const isL2 = collectionLevel === 2
  const acc = useAccordion('Groups & Populations')

  return (
    <>
      <PanelHeader title="Collection" />

      <AttributeCategory icon={ICONS.populations} title="Groups & Populations" open={acc.isOpen('Groups & Populations')} onToggle={() => acc.toggle('Groups & Populations')}>

        <Row label="Arrangement">
          <select
            value={config.arrangement}
            onChange={(e) => onChange({ ...config, arrangement: e.target.value as CollectionArrangement })}
            style={{ width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', color: '#1D1D1F', fontSize: '13px', padding: '7px 10px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', appearance: 'auto' }}
          >
            {ARRANGEMENT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === 'stacking'}>
                {opt.label}{opt.value === 'stacking' ? ' (coming soon)' : ''}
              </option>
            ))}
          </select>
        </Row>

        {/* ── Alignment controls ── */}
        {config.arrangement === 'alignment' && (
          <>
            <Row label="Elements">
              {(() => {
                const boundKey = collectionLevel === 1 ? 'c1AlignCount' : 'c2AlignCount'
                const boundVar = bindings[boundKey]
                const anyBound = collectionLevel === 1
                  ? Object.values(bindings).some(v => v !== null)
                  : bindings.scatterSize !== null
                const VAR_META: Record<string, { label: string; type: 'numerical' | 'categorical' }> = {
                  weight:      { label: 'Weight',       type: 'numerical'   },
                  garbageType: { label: 'Garbage Type', type: 'categorical' },
                  count:       { label: 'Count',        type: 'numerical'   },
                }
                if (boundVar !== null) {
                  const meta = VAR_META[boundVar] ?? { label: boundVar, type: 'numerical' as const }
                  return <BoundChip label={meta.label} type={meta.type} onClear={() => onBind(boundKey, null)} />
                }
                if (anyBound) {
                  return (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: '#F2F2F7', border: '1px solid #E5E5EA',
                      borderRadius: '7px', padding: '5px 10px',
                    }}>
                      <span style={{ fontSize: '12px', color: '#1D1D1F', fontWeight: '600', flex: 1 }}>{config.alignCount}</span>
                      <span style={{ fontSize: '9px', color: '#AEAEB2', letterSpacing: '0.06em', fontWeight: '600' }}>DATA</span>
                    </div>
                  )
                }
                return (
                  <DropZone accepts="numerical" onDrop={() => onBind(boundKey, 'count')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input type="range" min={2} max={20} step={1} value={config.alignCount}
                        onChange={(e) => onChange({ ...config, alignCount: Number(e.target.value) })}
                        style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                      <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{config.alignCount}</span>
                    </div>
                  </DropZone>
                )
              })()}
            </Row>
            <Row label="Axis">
              <SegmentedControl
                options={[{ value: 'X' as const, label: '→ X axis' }, { value: 'Y' as const, label: '↑ Y axis' }]}
                value={config.alignAxis}
                onChange={(v) => onChange({ ...config, alignAxis: v })}
              />
            </Row>
            <Row label="Anchor">
              <SegmentedControl
                options={config.alignAxis === 'X'
                  ? [
                      { value: 'start'  as const, label: '↑ Top'    },
                      { value: 'center' as const, label: '◆ Ctr'    },
                      { value: 'end'    as const, label: '↓ Bottom' },
                    ]
                  : [
                      { value: 'start'  as const, label: '← Left'  },
                      { value: 'center' as const, label: '◆ Ctr'   },
                      { value: 'end'    as const, label: '→ Right'  },
                    ]
                }
                value={config.alignAnchor}
                onChange={(v) => onChange({ ...config, alignAnchor: v })}
              />
            </Row>
            <Row label="Spacing">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="range" min={0.5} max={isL2 ? 12 : 6} step={0.1} value={config.alignSpacing}
                  onChange={(e) => onChange({ ...config, alignSpacing: Number(e.target.value) })}
                  style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{config.alignSpacing.toFixed(1)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#C7C7CC' }}>
                <span>Tight</span><span>Spread</span>
              </div>
            </Row>
          </>
        )}

        {/* ── Scattering controls ── */}
        {config.arrangement === 'scattering' && (
          <>
            {/* Count vs Density toggle */}
            <Row label="Quantity">
              <div style={{ display: 'flex', gap: '4px' }}>
                {(['count', 'density'] as const).map(mode => (
                  <button key={mode} onClick={() => onChange({ ...config, scatterMode: mode })} style={{
                    flex: 1, padding: '5px 0',
                    background: (config.scatterMode ?? 'count') === mode ? '#5E5CE6' : '#F2F2F7',
                    color: (config.scatterMode ?? 'count') === mode ? '#fff' : '#6C6C70',
                    border: '1px solid', borderColor: (config.scatterMode ?? 'count') === mode ? '#5E5CE6' : '#E5E5EA',
                    borderRadius: '6px', cursor: 'pointer',
                    fontSize: '11px', fontWeight: '600', fontFamily: 'inherit',
                  }}>
                    {mode === 'count' ? 'Population' : 'Density'}
                  </button>
                ))}
              </div>
            </Row>
            {(config.scatterMode ?? 'count') === 'count' ? (
              <Row label="Mark Count">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="range" min={5} max={600} step={5} value={config.scatterCount}
                    onChange={(e) => onChange({ ...config, scatterCount: Number(e.target.value) })}
                    style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                  <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{config.scatterCount}</span>
                </div>
              </Row>
            ) : (
              <Row label="Density">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="range" min={0.05} max={5} step={0.05} value={config.scatterDensity}
                    onChange={(e) => onChange({ ...config, scatterDensity: Number(e.target.value) })}
                    style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                  <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '36px', textAlign: 'right' }}>{config.scatterDensity.toFixed(2)}/u³</span>
                </div>
              </Row>
            )}

            {/* Volume Shape */}
            <Row label="Volume">
              <div style={{ display: 'flex', width: '100%' }}>
                {(['box', 'sphere'] as const).map((v, idx) => (
                  <button key={v} onClick={() => onChange({ ...config, scatterBoundingVolume: v })}
                    style={{
                      flex: 1, padding: '5px 0',
                      background: (config.scatterBoundingVolume ?? 'box') === v ? '#5E5CE6' : '#F2F2F7',
                      color:      (config.scatterBoundingVolume ?? 'box') === v ? '#fff'    : '#6C6C70',
                      border: '1px solid', borderColor: (config.scatterBoundingVolume ?? 'box') === v ? '#5E5CE6' : '#E5E5EA',
                      borderRadius: idx === 0 ? '6px 0 0 6px' : '0 6px 6px 0',
                      cursor: 'pointer', fontFamily: 'inherit', fontSize: '11px', fontWeight: '600',
                    }}>
                    {v === 'box' ? '□ Box' : '○ Sphere'}
                  </button>
                ))}
              </div>
            </Row>

            {/* Dimensions — drop target for size encoding */}
            {bindings.scatterSize !== null ? (
              <Row label="Dimensions">
                <BoundChip label="Number of Instruments" type="numerical" onClear={() => onBind('scatterSize', null)} />
              </Row>
            ) : (
              <DropZone accepts="numerical" onDrop={() => onBind('scatterSize', 'numerical')} >
                <Vec3Input
                  label="Dimensions"
                  value={config.scatterDimensions}
                  onChange={(v) => onChange({ ...config, scatterDimensions: v })}
                  min={0.5} max={20} step={0.5}
                />
              </DropZone>
            )}

            {/* Orientation */}
            <Row label="Orientation">
              <div style={{ display: 'flex', width: '100%' }}>
                {(['random', 'static'] as const).map((v, idx) => (
                  <button key={v} onClick={() => onChange({ ...config, scatterOrientation: v })}
                    style={{
                      flex: 1, padding: '5px 0',
                      background: (config.scatterOrientation ?? 'random') === v ? '#5E5CE6' : '#F2F2F7',
                      color:      (config.scatterOrientation ?? 'random') === v ? '#fff'    : '#6C6C70',
                      border: '1px solid', borderColor: (config.scatterOrientation ?? 'random') === v ? '#5E5CE6' : '#E5E5EA',
                      borderRadius: idx === 0 ? '6px 0 0 6px' : '0 6px 6px 0',
                      cursor: 'pointer', fontFamily: 'inherit', fontSize: '11px', fontWeight: '600',
                    }}>
                    {v === 'random' ? 'Random' : 'Static'}
                  </button>
                ))}
              </div>
            </Row>

            {/* Show bounds */}
            <Row label="Show Bounds">
              <label style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={config.scatterShowBounds ?? true}
                  onChange={e => onChange({ ...config, scatterShowBounds: e.target.checked })}
                  style={{ accentColor: '#5E5CE6', width: '14px', height: '14px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '11px', color: '#6C6C70' }}>Visible</span>
              </label>
            </Row>

            {/* Reseed */}
            {onReseed && (
              <Row label="Placement">
                <button
                  onClick={onReseed}
                  style={{
                    width: '100%', padding: '6px 0',
                    background: '#F2F2F7', border: '1px solid #D1D1D6',
                    borderRadius: '8px', cursor: 'pointer',
                    fontSize: '12px', fontWeight: '600', color: '#1D1D1F',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
                >
                  Randomise
                </button>
              </Row>
            )}
          </>
        )}

        {/* ── Piling controls ── */}
        {config.arrangement === 'piling' && (
          <Row label="Mark Count">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="range" min={2} max={60} step={1} value={config.pilingCount}
                onChange={(e) => onChange({ ...config, pilingCount: Number(e.target.value) })}
                style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
              <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{config.pilingCount}</span>
            </div>
          </Row>
        )}

      </AttributeCategory>

      {/* ── Labels (level 1 only) ── */}
      {collectionLevel === 1 && labelConfig && onLabelChange && (
        <AttributeCategory icon={ICONS.labels} title="Labels" open={acc.isOpen('Labels')} onToggle={() => acc.toggle('Labels')}>
          <LabelSlotsEditor config={labelConfig} onChange={onLabelChange} />
        </AttributeCategory>
      )}
    </>
  )
}

// ── Decoration properties ─────────────────────────────────────────────────────

function DecorationProperties({
  config, onChange,
}: {
  config:   DecorationConfig
  onChange: (c: DecorationConfig) => void
}) {
  const materialOptions: MarkMaterial[] = config.shape === 'custom' && config.customModelHasMat
    ? ['original', 'plastic', 'fluid', 'metal', 'emissive']
    : MATERIAL_OPTIONS
  const acc = useAccordion('Spatial')

  return (
    <>
      <PanelHeader title="Decoration" />

      {/* ── Spatial ── */}
      <AttributeCategory icon={ICONS.spatial} title="Spatial" open={acc.isOpen('Spatial')} onToggle={() => acc.toggle('Spatial')}>
        <Vec3Input label="Position"    value={config.position}    onChange={(v) => onChange({ ...config, position: v })}    min={-20} max={20}  step={0.1} />
        <Vec3Input label="Size"        value={config.size}        onChange={(v) => onChange({ ...config, size: v })}        min={0.1} max={10}  step={0.1} lockable />
        <Vec3Input label="Orientation" value={config.orientation} onChange={(v) => onChange({ ...config, orientation: v })} min={-180} max={180} step={1} />
      </AttributeCategory>

      {/* ── Geometry ── */}
      <AttributeCategory icon={ICONS.shape} title="Geometry" open={acc.isOpen('Geometry')} onToggle={() => acc.toggle('Geometry')}>
        <Row label="Shape">
          <ShapeDropdown
            config={config}
            onChange={(patch) => onChange({ ...config, ...patch } as DecorationConfig)}
          />
        </Row>
      </AttributeCategory>

      {/* ── Material ── */}
      <AttributeCategory icon={ICONS.material} title="Material" open={acc.isOpen('Material')} onToggle={() => acc.toggle('Material')}>
        <Row label="Type">
          <select
            value={config.material}
            onChange={(e) => onChange({ ...config, material: e.target.value as MarkMaterial })}
            style={{ width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', color: '#1D1D1F', fontSize: '13px', padding: '7px 10px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', appearance: 'auto' }}
          >
            {materialOptions.map((m) => (
              <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>
            ))}
          </select>
          <div style={{ fontSize: '11px', color: '#AEAEB2', lineHeight: 1.5 }}>{MATERIAL_HINTS[config.material]}</div>
        </Row>
        <Row label="Color">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '2px' }}>
            <input
              type="color" value={config.color}
              onChange={(e) => onChange({ ...config, color: e.target.value })}
              style={{ width: '36px', height: '32px', border: '1px solid #D1D1D6', borderRadius: '6px', background: 'none', cursor: 'pointer', padding: '2px' }}
            />
            <span style={{ fontSize: '12px', color: '#8E8E93', fontFamily: 'monospace' }}>{config.color}</span>
          </div>
        </Row>
      </AttributeCategory>

      {/* ── Structural ── (temporarily hidden)
      <AttributeCategory icon={ICONS.structural} title="Structural" open={acc.isOpen('Structural')} onToggle={() => acc.toggle('Structural')}>
        <StructuralSection
          structural={config.structural}
          onChange={(s) => onChange({ ...config, structural: s })}
        />
      </AttributeCategory>
      */}
    </>
  )
}

// ── Scene properties ──────────────────────────────────────────────────────────

function SceneProperties({
  config, onChange,
}: { config: SceneConfig; onChange: (c: SceneConfig) => void }) {
  const [framingOpen, setFramingOpen] = useState(true)
  return (
    <>
      <PanelHeader title="Scene" />

      <AttributeCategory icon={ICONS.framing} title="Framing" open={framingOpen} onToggle={() => setFramingOpen(o => !o)}>
        <Row label="Background">
          <SegmentedControl
            options={[{ value: 'dark' as const, label: '■ Dark' }, { value: 'ocean' as const, label: '~ Ocean' }]}
            value={config.background}
            onChange={(v) => onChange({ ...config, background: v })}
          />
        </Row>
        <Row label="Lighting (HDRI)">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            {HDRI_OPTIONS.map((opt) => {
              const active = config.hdriPreset === opt.value
              return (
                <button key={opt.value} onClick={() => onChange({ ...config, hdriPreset: opt.value })} style={{
                  padding: '5px 6px',
                  background: active ? '#EBF3FF' : '#F2F2F7',
                  border: `1px solid ${active ? '#A8CAFF' : '#E5E5EA'}`,
                  borderRadius: '7px', color: active ? '#007AFF' : '#6C6C70',
                  cursor: 'pointer', fontSize: '11px', fontFamily: 'inherit',
                  fontWeight: active ? '600' : '400', transition: 'all 0.1s', textAlign: 'center',
                }}>
                  {opt.label}
                </button>
              )
            })}
          </div>
        </Row>
        <Row label="Camera">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
            <span style={{ fontSize: '11px', color: '#6C6C70', fontWeight: '500' }}>{config.focalLength}mm</span>
            <span style={{ fontSize: '11px', color: '#AEAEB2' }}>{focalLengthToFov(config.focalLength).toFixed(0)}° fov</span>
          </div>
          <input type="range" min={14} max={180} step={1} value={config.focalLength}
            onChange={(e) => onChange({ ...config, focalLength: Number(e.target.value) })}
            style={{ width: '100%', accentColor: '#34C759', cursor: 'pointer' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#AEAEB2', marginTop: '2px' }}>
            <span>14mm wide</span><span>180mm tele</span>
          </div>
        </Row>
      </AttributeCategory>
    </>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

interface PropertiesPanelProps {
  activeElement:         ActiveElement
  compositionLevel:      CompositionLevel
  layers:                LayerData[]
  markConfig:            MarkConfig
  onMarkChange:          (c: MarkConfig) => void
  collection1Config:     CollectionConfig
  onCollection1Change:   (c: CollectionConfig) => void
  collection2Config:     CollectionConfig
  onCollection2Change:   (c: CollectionConfig) => void
  sceneConfig:           SceneConfig
  onSceneChange:         (c: SceneConfig) => void
  bindings:              DataBindings
  onBind:                (attr: keyof DataBindings, variable: DataVariable | null) => void
  markLabelConfig:       LabelConfig
  onMarkLabelChange:     (c: LabelConfig) => void
  colLabelConfig:        LabelConfig
  onColLabelChange:      (c: LabelConfig) => void
  activeDecorationId:    string | null
  decorations:           DecorationConfig[]
  onDecorationChange:    (c: DecorationConfig) => void
  colorMode:             'distinct' | 'continuous'
  colorGradient:         { from: string; to: string }
  onColorGradientChange: (g: { from: string; to: string }) => void
  markOpenSection?:      string
  onReseed?:             () => void
}

export function PropertiesPanel({
  activeElement, compositionLevel, layers,
  markConfig,        onMarkChange,
  collection1Config, onCollection1Change,
  collection2Config, onCollection2Change,
  sceneConfig,       onSceneChange,
  bindings, onBind,
  markLabelConfig, onMarkLabelChange,
  colLabelConfig,  onColLabelChange,
  activeDecorationId, decorations, onDecorationChange,
  colorMode, colorGradient, onColorGradientChange, markOpenSection, onReseed,
}: PropertiesPanelProps) {
  const activeDec = activeDecorationId !== null
    ? decorations.find((d) => d.id === activeDecorationId) ?? null
    : null

  return (
    <div style={{
      padding: '18px 14px', color: '#1D1D1F', fontSize: '13px',
      display: 'flex', flexDirection: 'column', gap: '10px',
      height: '100%', boxSizing: 'border-box', overflowY: 'auto',
    }}>
      {activeDec !== null ? (
        <DecorationProperties config={activeDec} onChange={onDecorationChange} />
      ) : activeElement === 'mark' ? (
        <MarkProperties
          config={markConfig} onChange={onMarkChange}
          bindings={bindings} onBind={onBind}
          labelConfig={markLabelConfig} onLabelChange={onMarkLabelChange}
          colorMode={colorMode}
          colorGradient={colorGradient}
          onColorGradientChange={onColorGradientChange}
          openSection={markOpenSection}
          layers={layers}
          compositionLevel={compositionLevel}
        />
      ) : activeElement === 'collection1' ? (
        <CollectionProperties
          config={collection1Config} onChange={onCollection1Change}
          collectionLevel={1} bindings={bindings} onBind={onBind}
          labelConfig={colLabelConfig} onLabelChange={onColLabelChange}
          onReseed={onReseed}
        />
      ) : activeElement === 'collection2' ? (
        <CollectionProperties
          config={collection2Config} onChange={onCollection2Change}
          collectionLevel={2} bindings={bindings} onBind={onBind}
          onReseed={onReseed}
        />
      ) : activeElement === 'scene' ? (
        <SceneProperties config={sceneConfig} onChange={onSceneChange} />
      ) : null}

    </div>
  )
}
