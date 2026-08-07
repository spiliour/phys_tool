import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import {
  ActiveElement, CompositionLevel,
  MarkConfig, CollectionConfig, SceneConfig, BackgroundMode,
  MarkShape, MarkMaterial, HdriPreset, Vec3,
  StructuralDeformation, CollectionArrangement,
  DataBindings, DataVariable, LabelConfig, LabelPosition,
  LabelSlots, DecorationConfig, LayerData, CategoryShapeEntry, MarkPart,
} from './types'

const VAR_LABELS: Record<string, { label: string; type: 'numerical' | 'categorical' }> = {
  weight:      { label: 'Weight',       type: 'numerical'   },
  garbageType: { label: 'Garbage Type', type: 'categorical' },
  count:       { label: 'Count',        type: 'numerical'   },
}
import { MODEL_PRESETS, ModelPreset } from './models'

// The list of models the shape/model pickers offer. App swaps this to the active
// model collection; defaults to the master set so nested pickers always have a list.
export const ModelListContext = createContext<ModelPreset[]>(MODEL_PRESETS)

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

// Resolves a variable to its display name — the universal numerical/categorical keys
// use the active dataset's column names; legacy keys fall back to VAR_META.
const VarLabelContext = createContext<(v: DataVariable) => string>((v) => VAR_META[v]?.label ?? v)

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

function BoundChip({ variable, onClear }: {
  variable: DataVariable; onClear: () => void
}) {
  const varLabel = useContext(VarLabelContext)
  const type = VAR_META[variable]?.type ?? 'numerical'
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px', maxWidth: '100%',
      background: '#EBF3FF', border: '1px solid #A8CAFF',
      borderRadius: '7px', padding: '6px 10px',
      fontSize: '12px', color: '#007AFF', fontWeight: '500',
    }}>
      <span style={{ minWidth: 0, wordBreak: 'break-word' }}><span style={{ color: '#8FB6EE', fontWeight: '700' }}>{type === 'numerical' ? '#' : 'Aa'}</span> {varLabel(variable)}</span>
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

function LabelSlotZone({ position, slot, onAdd, onRemove }: {
  position: LabelPosition
  slot:     DataVariable[]
  onAdd:    (v: DataVariable) => void
  onRemove: (v: DataVariable) => void
}) {
  const [over, setOver] = useState(false)
  const varLabel = useContext(VarLabelContext)
  const dropOk = (e: React.DragEvent) =>
    e.dataTransfer.types.some(t => t === 'phys-var/numerical' || t === 'phys-var/categorical')
  const onDragOver  = (e: React.DragEvent) => { if (dropOk(e)) { e.preventDefault(); setOver(true) } }
  const onDragLeave = () => setOver(false)
  const onDrop      = (e: React.DragEvent) => {
    if (!dropOk(e)) return
    e.preventDefault(); setOver(false)
    onAdd(e.dataTransfer.getData('phys-var/name') as DataVariable)
  }

  // Filled: one compact chip per variable (each removable); still a drop target
  // so more variables can be added to the same position.
  if (slot.length > 0) {
    return (
      <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
        title={`Drop another variable to add it to the ${position} label`}
        style={{ display: 'flex', flexDirection: 'column', gap: '3px', borderRadius: '6px',
          outline: over ? '1px dashed #007AFF' : 'none', outlineOffset: '2px' }}>
        {slot.map((v) => {
          const meta = VAR_META[v]
          return (
            <span key={v} style={{
              display: 'inline-flex', alignItems: 'center', gap: '3px', maxWidth: '100%',
              background: '#EBF3FF', border: '1px solid #A8CAFF',
              borderRadius: '6px', padding: '2px 3px 2px 6px', fontSize: '10px', fontWeight: '600',
              color: '#007AFF',
            }}>
              <span style={{ minWidth: 0, wordBreak: 'break-word', lineHeight: 1.25 }}>
                <span style={{ color: '#8FB6EE', fontWeight: '700' }}>{meta.type === 'numerical' ? '#' : 'Aa'}</span> {varLabel(v)}
              </span>
              <button onClick={() => onRemove(v)} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#AEAEB2', flexShrink: 0,
                padding: '0 2px', fontSize: '12px', lineHeight: 1, fontFamily: 'inherit',
              }}>×</button>
            </span>
          )
        })}
      </div>
    )
  }

  // Empty: dashed placeholder drop zone.
  return (
    <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
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
      <span style={{ opacity: 0.9 }}>＋ variable</span>
    </div>
  )
}

function LabelSlotsEditor({ config, onChange, styleControls }: {
  config:   LabelConfig
  onChange: (c: LabelConfig) => void
  styleControls?: boolean   // show font-size / distance / bold / italic / colour controls
}) {
  function addToSlot(pos: LabelPosition, v: DataVariable) {
    const cur = config.slots[pos]
    if (cur.includes(v)) return
    onChange({ ...config, slots: { ...config.slots, [pos]: [...cur, v] } })
  }
  function removeFromSlot(pos: LabelPosition, v: DataVariable) {
    onChange({ ...config, slots: { ...config.slots, [pos]: config.slots[pos].filter(x => x !== v) } })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* One row per position (a labelled list handles long variable names better
          than a cross grid, which clips them). */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {(['top', 'bottom', 'left', 'right'] as const).map(pos => (
          <div key={pos} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ fontSize: '11px', color: '#8E8E93', fontWeight: '600', width: '56px', flexShrink: 0, paddingTop: '5px' }}>
              {SLOT_ICONS[pos]} {pos[0].toUpperCase() + pos.slice(1)}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <LabelSlotZone position={pos} slot={config.slots[pos]} onAdd={(v) => addToSlot(pos, v)} onRemove={(v) => removeFromSlot(pos, v)} />
            </div>
          </div>
        ))}
      </div>

      {styleControls && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E5E5EA', paddingTop: '10px' }}>
          <LabeledSlider label="Font size" value={config.fontSize ?? 11} min={8} max={28} step={1}
            onChange={(v) => onChange({ ...config, fontSize: v })} />
          <LabeledSlider label="Distance" value={config.distance ?? 0} min={-3} max={6} step={0.5} decimals={1}
            onChange={(v) => onChange({ ...config, distance: v })} />
          <Row label="Style">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                title="Bold"
                onClick={() => onChange({ ...config, bold: !config.bold })}
                style={{
                  padding: '4px 12px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit',
                  fontWeight: '700', fontSize: '13px', transition: 'all 0.12s',
                  background: config.bold ? '#EBF3FF' : '#F2F2F7',
                  border: `1px solid ${config.bold ? '#A8CAFF' : '#D1D1D6'}`,
                  color: config.bold ? '#007AFF' : '#6C6C70',
                }}
              >B</button>
              <button
                title="Italic"
                onClick={() => onChange({ ...config, italic: !config.italic })}
                style={{
                  padding: '4px 12px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit',
                  fontStyle: 'italic', fontSize: '13px', transition: 'all 0.12s',
                  background: config.italic ? '#EBF3FF' : '#F2F2F7',
                  border: `1px solid ${config.italic ? '#A8CAFF' : '#D1D1D6'}`,
                  color: config.italic ? '#007AFF' : '#6C6C70',
                }}
              >I</button>
              <input
                type="color"
                title="Font color"
                value={config.color ?? '#e8e8e8'}
                onChange={(e) => onChange({ ...config, color: e.target.value })}
                style={{
                  width: '30px', height: '28px', padding: '2px', borderRadius: '6px',
                  border: '1px solid #D1D1D6', background: '#F2F2F7', cursor: 'pointer',
                }}
              />
            </div>
          </Row>
        </div>
      )}
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

// A number input that tolerates transient/empty states while typing. It never
// commits an empty or non-numeric field — which would otherwise land as 0 and
// break scaling/geometry — and clamps committed values to [min, max]. The field
// resyncs to the model value whenever it isn't being actively edited.
function NumberCell({ value, min, max, step, onCommit, style }: {
  value:    number
  min?:     number
  max?:     number
  step?:    number
  onCommit: (n: number) => void
  style:    React.CSSProperties
}) {
  const [buf, setBuf]         = useState(String(value))
  const [editing, setEditing] = useState(false)
  useEffect(() => { if (!editing) setBuf(String(value)) }, [value, editing])

  const clamp = (n: number) => {
    if (min !== undefined) n = Math.max(min, n)
    if (max !== undefined) n = Math.min(max, n)
    return n
  }

  return (
    <input
      type="number"
      value={buf}
      min={min} max={max} step={step}
      onFocus={() => setEditing(true)}
      onChange={(e) => {
        const raw = e.target.value
        setBuf(raw)                       // show exactly what's typed (incl. empty / "0.")
        if (raw.trim() === '') return     // empty → keep the last value, never commit 0
        const n = Number(raw)
        if (Number.isFinite(n)) onCommit(clamp(n))
      }}
      onBlur={() => {
        setEditing(false)
        const n = Number(buf)
        setBuf(String(buf.trim() !== '' && Number.isFinite(n) ? clamp(n) : value))
      }}
      style={style}
    />
  )
}

function Vec3Input({
  label, value, onChange, min, max, step = 0.1, lockable = false,
  axisBindings, onAxisBind, axes: axesProp,
}: {
  label: string; value: Vec3; onChange: (v: Vec3) => void
  min?: number; max?: number; step?: number; lockable?: boolean
  axisBindings?: { x: DataVariable | null; y: DataVariable | null; z: DataVariable | null }
  onAxisBind?:   (axis: 'x' | 'y' | 'z', v: DataVariable | null) => void
  axes?: (keyof Vec3)[]   // which axes to show (default all three)
}) {
  const [locked,   setLocked]   = useState(false)
  const [overAxis, setOverAxis] = useState<'x' | 'y' | 'z' | null>(null)
  const varLabel = useContext(VarLabelContext)
  const axes: (keyof Vec3)[] = axesProp ?? ['x', 'y', 'z']

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
                    {meta.type === 'numerical' ? '#' : 'Aa'} {varLabel(boundVar)}
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
                <NumberCell
                  value={value[axis]}
                  min={min} max={max} step={step}
                  onCommit={(n) => handleChange(axis, n)}
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

const MATERIAL_OPTIONS: MarkMaterial[] = ['plastic', 'fluid', 'glass', 'metal', 'iridescent', 'emissive', 'toon', 'wireframe', 'custom']

// Opacity slider (all materials) + roughness/metalness (only for 'custom'). Shared
// by the Mark and the collection-object material sections.
function MaterialExtras({ material, opacity, roughness, metalness, onPatch }: {
  material:  MarkMaterial
  opacity?:  number
  roughness?: number
  metalness?: number
  onPatch:   (patch: { opacity?: number; roughness?: number; metalness?: number }) => void
}) {
  return (
    <>
      <LabeledSlider label="Opacity" value={opacity ?? 1} min={0} max={1} step={0.05} decimals={2}
        onChange={(v) => onPatch({ opacity: v })} />
      {material === 'custom' && (
        <>
          <LabeledSlider label="Roughness" value={roughness ?? 0.5} min={0} max={1} step={0.05} decimals={2}
            onChange={(v) => onPatch({ roughness: v })} />
          <LabeledSlider label="Metalness" value={metalness ?? 0} min={0} max={1} step={0.05} decimals={2}
            onChange={(v) => onPatch({ metalness: v })} />
        </>
      )}
    </>
  )
}

const ARRANGEMENT_OPTIONS: { value: CollectionArrangement; label: string }[] = [
  { value: 'alignment',  label: 'Alignment'         },
  { value: 'scattering', label: 'Scattering'        },
  { value: 'stacking',   label: 'Stacking'          },
  // { value: 'piling',     label: 'Piling'            },  // physics pile — hidden for now
  { value: 'surface',    label: 'Surface Placement'  },
  { value: 'adjacent',   label: 'Adjacent Placement' },
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
  const models       = useContext(ModelListContext)

  // A model chosen from a different collection (e.g. loaded from a save) is still a
  // preset — recognise it by name across every collection so it stays selectable.
  const selName      = config.shape === 'custom' ? config.customModelName : undefined
  const isPreset     = !!selName && (models.some(p => p.name === selName) || MODEL_PRESETS.some(p => p.name === selName))
  const isUserImport = config.shape === 'custom' && !isPreset

  // The picker lists the active collection, plus the current selection if it lives
  // outside that collection (so switching collections never hides what's in use).
  const extraPreset  = isPreset && selName && !models.some(p => p.name === selName)
    ? MODEL_PRESETS.find(p => p.name === selName)
    : undefined
  const modelOptions = extraPreset ? [extraPreset, ...models] : models

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
      const preset = models.find(p => p.name === name) ?? MODEL_PRESETS.find(p => p.name === name)
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
        {modelOptions.length > 0 && (
          <optgroup label="3D Models">
            {modelOptions.map(p => (
              <option key={p.name} value={`preset:${p.name}`}>{p.name}</option>
            ))}
          </optgroup>
        )}

        <optgroup label="Primitives">
          <option value="box">Box</option>
          <option value="sphere">Sphere</option>
          <option value="star">Star</option>
        </optgroup>

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

// Editor for a compound mark's sub-shapes: a selectable list of parts + an inline
// editor for the active part (shape / material / color / offset / size / rotation).
function PartsEditor({ config, activePartId, onAddPart, onRemovePart, onUpdatePart, onSelectPart }: {
  config:        MarkConfig
  activePartId?: string | null
  onAddPart?:    () => void
  onRemovePart?: (id: string) => void
  onUpdatePart?: (id: string, patch: Partial<MarkPart>) => void
  onSelectPart?: (id: string | null) => void
}) {
  const parts    = config.parts ?? []
  const active   = parts.find(p => p.id === activePartId) ?? null
  const partName = (p: MarkPart) => (p.shape === 'custom' ? (p.customModelName ?? 'model') : p.shape)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {parts.map((p, i) => {
          const sel = p.id === activePartId
          return (
            <div key={p.id}
              onClick={() => onSelectPart?.(sel ? null : p.id)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
                background: sel ? '#EBF3FF' : '#F2F2F7', border: `1px solid ${sel ? '#A8CAFF' : '#E5E5EA'}`,
                borderRadius: '8px', padding: '7px 10px',
              }}>
              <span style={{ fontSize: '12.5px', fontWeight: '600', color: sel ? '#007AFF' : '#1D1D1F' }}>
                Part {i + 1} <span style={{ color: '#8E8E93', fontWeight: '500', textTransform: 'capitalize' }}>· {partName(p)}</span>
              </span>
              <button onClick={(e) => { e.stopPropagation(); onRemovePart?.(p.id) }} title="Remove part"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#AEAEB2', fontSize: '16px', lineHeight: 1, padding: '0 2px', fontFamily: 'inherit' }}>×</button>
            </div>
          )
        })}
      </div>

      <button onClick={onAddPart}
        style={{ width: '100%', padding: '8px', background: '#F2F2F7', border: '1px dashed #C7C7CC', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#3A3A3C', fontFamily: 'inherit' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#E9E9EE')}
        onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
      >+ Add geometry</button>

      {active && (
        <div style={{ marginTop: '6px', paddingTop: '10px', borderTop: '1px solid #E5E5EA', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Row label="Shape">
            <ShapeDropdown
              config={{ shape: active.shape, material: active.material ?? config.material, customModelUrl: active.customModelUrl, customModelHasMat: active.customModelHasMat, customModelName: active.customModelName }}
              onChange={(patch) => onUpdatePart?.(active.id, {
                shape:             patch.shape ?? active.shape,
                customModelUrl:    patch.customModelUrl,
                customModelHasMat: patch.customModelHasMat,
                customModelName:   patch.customModelName,
                ...(patch.material ? { material: patch.material } : {}),
              })}
            />
          </Row>
          <Row label="Material">
            <select value={active.material ?? config.material}
              onChange={(e) => onUpdatePart?.(active.id, { material: e.target.value as MarkMaterial })}
              style={{ width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', color: '#1D1D1F', fontSize: '13px', padding: '7px 10px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', appearance: 'auto' }}>
              {MATERIAL_OPTIONS.map(m => <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>)}
            </select>
          </Row>
          <Row label="Color">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '2px' }}>
              <input type="color" value={active.color ?? config.color}
                onChange={(e) => onUpdatePart?.(active.id, { color: e.target.value })}
                style={{ width: '36px', height: '32px', border: '1px solid #D1D1D6', borderRadius: '6px', background: 'none', cursor: 'pointer', padding: '2px' }} />
              <span style={{ fontSize: '12px', color: '#8E8E93', fontFamily: 'monospace' }}>{active.color ?? config.color}</span>
            </div>
          </Row>
          <Vec3Input label="Offset"   value={active.offset}      onChange={(v) => onUpdatePart?.(active.id, { offset: v })}      min={-1}   max={1}   step={0.01} />
          <Vec3Input label="Size"     value={active.size}        onChange={(v) => onUpdatePart?.(active.id, { size: v })}        min={0.05} max={3}   step={0.05} lockable />
          <Vec3Input label="Rotation" value={active.orientation} onChange={(v) => onUpdatePart?.(active.id, { orientation: v })} min={-180} max={180} step={1} />
        </div>
      )}
    </>
  )
}

function MarkProperties({
  config, onChange, bindings, onBind, labelConfig, onLabelChange,
  colorMode, colorGradient, onColorGradientChange, colorTint, onColorTintChange, openSection,
  layers, compositionLevel,
  activePartId, onAddPart, onRemovePart, onUpdatePart, onSelectPart,
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
  colorTint?:              boolean
  onColorTintChange?:      (b: boolean) => void
  openSection?:            string
  layers:          LayerData[]
  compositionLevel: CompositionLevel
  activePartId?:   string | null
  onAddPart?:      () => void
  onRemovePart?:   (id: string) => void
  onUpdatePart?:   (id: string, patch: Partial<MarkPart>) => void
  onSelectPart?:   (id: string | null) => void
}) {
  const isCompound = !!config.parts && config.parts.length > 0
  const materialOptions: MarkMaterial[] = config.shape === 'custom' && config.customModelHasMat
    ? ['original', 'plastic', 'fluid', 'glass', 'metal', 'iridescent', 'emissive', 'toon', 'wireframe']
    : MATERIAL_OPTIONS
  const acc = useAccordion('Spatial', openSection)

  return (
    <>
      <PanelHeader title="Mark" />

      {/* ── Spatial ── */}
      <AttributeCategory icon={ICONS.spatial} title="Spatial" open={acc.isOpen('Spatial')} onToggle={() => acc.toggle('Spatial')}>
        <Vec3Input label="Position"    value={config.position}    onChange={(v) => onChange({ ...config, position: v })}    min={-10} max={10}  step={0.1} />
        <Row label="Scale">
          {bindings.markScale !== null ? (
            <BoundChip
              variable={bindings.markScale}
              onClear={() => onBind('markScale', null)}
            />
          ) : (
            <DropZone accepts="numerical" onDrop={(v) => onBind('markScale', v as DataVariable)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="range" min={0.1} max={10} step={0.1}
                  value={config.scale ?? 1}
                  onChange={(e) => onChange({ ...config, scale: Number(e.target.value) })}
                  style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>
                  {(config.scale ?? 1).toFixed(1)}×
                </span>
              </div>
            </DropZone>
          )}
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
        {isCompound ? (
          // Compound mark: a list of sub-shapes, each editable.
          <PartsEditor
            config={config}
            activePartId={activePartId}
            onAddPart={onAddPart}
            onRemovePart={onRemovePart}
            onUpdatePart={onUpdatePart}
            onSelectPart={onSelectPart}
          />
        ) : bindings.markGeometry !== null && layers.length > 1 ? (
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
          <>
            <Row label="Shape">
              <ShapeDropdown
                config={config}
                onChange={(patch) => onChange({ ...config, ...patch } as MarkConfig)}
              />
            </Row>
            {onAddPart && bindings.markGeometry === null && (
              <button
                onClick={onAddPart}
                title="Add another geometry to this mark (e.g. a sphere on a leaf)"
                style={{ width: '100%', padding: '8px', background: '#F2F2F7', border: '1px dashed #C7C7CC', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#3A3A3C', fontFamily: 'inherit' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#E9E9EE')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
              >
                + Add geometry
              </button>
            )}
          </>
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
        </Row>

        <Row label="Color">
          {bindings.markColor !== null ? (
            <>
              <BoundChip
                variable={bindings.markColor}
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
              {config.shape === 'custom' && onColorTintChange && (
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', fontSize: '12px', color: '#1D1D1F', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={colorTint ?? false}
                    onChange={(e) => onColorTintChange(e.target.checked)}
                    style={{ accentColor: '#5E5CE6', width: '14px', height: '14px', cursor: 'pointer' }}
                  />
                  <span>Tint model (keep its material)</span>
                </label>
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

        <MaterialExtras
          material={config.material}
          opacity={config.opacity} roughness={config.roughness} metalness={config.metalness}
          onPatch={(p) => onChange({ ...config, ...p })}
        />
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
        <LabelSlotsEditor config={labelConfig} onChange={onLabelChange} styleControls />
      </AttributeCategory>
    </>
  )
}

// ── Collection properties ─────────────────────────────────────────────────────

function CollectionProperties({
  config, onChange, collectionLevel, bindings, onBind, labelConfig, onLabelChange, onReseed, compositionLevel,
}: {
  config:          CollectionConfig
  onChange:        (c: CollectionConfig) => void
  collectionLevel: 1 | 2
  bindings:        DataBindings
  onBind:          (attr: keyof DataBindings, v: DataVariable | null) => void
  labelConfig?:    LabelConfig
  onLabelChange?:  (c: LabelConfig) => void
  onReseed?:       () => void
  compositionLevel: CompositionLevel
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
              <option key={opt.value} value={opt.value}>
                {opt.label}
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
                if (boundVar !== null) {
                  return <BoundChip variable={boundVar} onClear={() => onBind(boundKey, null)} />
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
                options={[{ value: 'X' as const, label: 'X axis' }, { value: 'Y' as const, label: 'Y axis' }]}
                value={config.alignAxis}
                onChange={(v) => onChange({ ...config, alignAxis: v })}
              />
            </Row>
            <Row label="Anchor">
              <SegmentedControl
                options={config.alignAxis === 'X'
                  ? [
                      { value: 'start'  as const, label: 'Top'    },
                      { value: 'center' as const, label: 'Center' },
                      { value: 'end'    as const, label: 'Bottom' },
                    ]
                  : [
                      { value: 'start'  as const, label: 'Left'   },
                      { value: 'center' as const, label: 'Center' },
                      { value: 'end'    as const, label: 'Right'  },
                    ]
                }
                value={config.alignAnchor}
                onChange={(v) => onChange({ ...config, alignAnchor: v })}
              />
            </Row>
            <Row label="Spacing">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="range" min={0} max={isL2 ? 12 : 6} step={0.1} value={config.alignSpacing}
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
              <Row label="Population">
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
                    {v === 'box' ? 'Box' : 'Sphere'}
                  </button>
                ))}
              </div>
            </Row>

            {/* Dimensions — drop target for size encoding */}
            {bindings.scatterSize !== null ? (
              <>
                <Row label="Dimensions">
                  <BoundChip variable={bindings.scatterSize} onClear={() => onBind('scatterSize', null)} />
                </Row>
                <Row label="Size axes">
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {(['x', 'y', 'z'] as const).map((ax) => {
                      const axes = config.scatterSizeAxes ?? { x: false, y: true, z: false }
                      const on = axes[ax]
                      return (
                        <button
                          key={ax}
                          onClick={() => onChange({ ...config, scatterSizeAxes: { ...axes, [ax]: !on } })}
                          style={{
                            flex: 1, padding: '6px 0', borderRadius: '7px',
                            border: `1px solid ${on ? '#A8CAFF' : '#E5E5EA'}`,
                            background: on ? '#EBF3FF' : '#F2F2F7',
                            color: on ? '#007AFF' : '#6C6C70',
                            fontWeight: on ? '700' : '500', fontSize: '12px',
                            cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase',
                          }}
                        >
                          {ax}
                        </button>
                      )
                    })}
                  </div>
                </Row>
              </>
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

            {/* Exclusion zone — the collection's own object (add one below) */}
            {config.object && (
              <Row label="Exclusion Zone">
                <label style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={config.scatterExcludeObject ?? false}
                    onChange={e => onChange({ ...config, scatterExcludeObject: e.target.checked })}
                    style={{ accentColor: '#5E5CE6', width: '14px', height: '14px', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '11px', color: '#6C6C70' }}>Keep marks out of the object</span>
                </label>
              </Row>
            )}

            {/* Placement: even spread toggle + randomise button */}
            {onReseed && (
              <Row label="Placement">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', flex: 1 }}>
                    <input
                      type="checkbox"
                      checked={config.scatterEven ?? false}
                      onChange={e => onChange({ ...config, scatterEven: e.target.checked })}
                      style={{ accentColor: '#5E5CE6', width: '14px', height: '14px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '11px', color: '#6C6C70' }}>Even spread</span>
                  </label>
                  <button
                    onClick={onReseed}
                    style={{
                      padding: '6px 12px',
                      background: '#F2F2F7', border: '1px solid #D1D1D6',
                      borderRadius: '8px', cursor: 'pointer',
                      fontSize: '12px', fontWeight: '600', color: '#1D1D1F',
                      fontFamily: 'inherit', flexShrink: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
                  >
                    Randomise
                  </button>
                </div>
              </Row>
            )}
          </>
        )}

        {/* ── Piling controls ── */}
        {config.arrangement === 'piling' && (
          <Row label="Population">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="range" min={2} max={60} step={1} value={config.pilingCount}
                onChange={(e) => onChange({ ...config, pilingCount: Number(e.target.value) })}
                style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
              <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{config.pilingCount}</span>
            </div>
          </Row>
        )}

        {/* ── Surface placement controls ── */}
        {config.arrangement === 'surface' && (
          <>
            <Row label="Surface">
              <span style={{ fontSize: '11px', color: '#AEAEB2', lineHeight: 1.4 }}>
                {config.object
                  ? 'Marks are placed on the collection object (below).'
                  : 'Add an object below to use as the surface.'}
              </span>
            </Row>
            <Row label="Population">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="range" min={1} max={200} step={1} value={config.surfaceCount ?? 24}
                  onChange={(e) => onChange({ ...config, surfaceCount: Number(e.target.value) })}
                  style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{config.surfaceCount ?? 24}</span>
              </div>
            </Row>
            <Row label="Mark Size">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="range" min={0.1} max={4} step={0.1} value={config.surfaceScale ?? 1}
                  onChange={(e) => onChange({ ...config, surfaceScale: Number(e.target.value) })}
                  style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
                <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right' }}>{(config.surfaceScale ?? 1).toFixed(1)}×</span>
              </div>
            </Row>
            {onReseed && (
              <Row label="Placement">
                <button
                  onClick={onReseed}
                  style={{ padding: '6px 12px', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#1D1D1F', fontFamily: 'inherit' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
                >
                  Randomise
                </button>
              </Row>
            )}
          </>
        )}

        {/* ── Adjacent controls (random scatter on a flat surface) ── */}
        {config.arrangement === 'adjacent' && (
          <>
            <LabeledSlider label="Population" value={config.scatterCount} min={1} max={200} step={1}
              onChange={(v) => onChange({ ...config, scatterCount: v })} />
            <Vec3Input label="Surface size" value={config.scatterDimensions}
              onChange={(v) => onChange({ ...config, scatterDimensions: v })} min={0.1} max={30} step={0.1} axes={['x', 'z']} />
            <CheckRow label="Show grid" checked={config.adjacentShowGrid ?? false}
              onChange={(v) => onChange({ ...config, adjacentShowGrid: v })} />
            {onReseed && (
              <Row label="Placement">
                <button
                  onClick={onReseed}
                  style={{ padding: '6px 12px', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#1D1D1F', fontFamily: 'inherit' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
                >
                  Randomise
                </button>
              </Row>
            )}
          </>
        )}

        {/* ── Stacking controls (vertical column, no physics) ── */}
        {config.arrangement === 'stacking' && (
          <>
            {/* A lone stack uses one mark per data row (set via the data panel's
                "Rows used"); a manual count only applies when a second collection
                arranges these stacks (level 3). */}
            {compositionLevel >= 3 && (
              <LabeledSlider label="Population" value={config.scatterCount} min={1} max={100} step={1}
                onChange={(v) => onChange({ ...config, scatterCount: v })} />
            )}
            <CheckRow label="Random orientation" checked={config.stackingRandomOrient ?? false}
              onChange={(v) => onChange({ ...config, stackingRandomOrient: v })} />
          </>
        )}

      </AttributeCategory>

      {/* ── Optional object: a decoration owned by this collection. Its Spatial /
             Geometry / Material sections appear only once it's added. It doubles
             as the surface / exclusion target. ── */}
      {config.object ? (
        <>
          <ObjectAttributeSections
            config={config.object}
            onChange={(o) => onChange({ ...config, object: o })}
            acc={acc}
          />
          <button
            onClick={() => onChange({ ...config, object: null, scatterExcludeObject: false })}
            style={{ width: '100%', padding: '9px', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '9px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#3A3A3C', fontFamily: 'inherit' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E9E9EE')}
            onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
          >
            Remove object
          </button>
        </>
      ) : (
        <button
          onClick={() => onChange({ ...config, object: makeCollectionObject(`col${collectionLevel}-object`) })}
          style={{ width: '100%', padding: '9px', background: '#F2F2F7', border: '1px dashed #C7C7CC', borderRadius: '9px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#3A3A3C', fontFamily: 'inherit' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#E9E9EE')}
          onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
        >
          + Add object
        </button>
      )}

      {/* ── Labels: only meaningful once a second collection arranges these
             instances (composition level 3). At level 2 there is a single
             collection, so a collection-wide label has nothing to distinguish. ── */}
      {collectionLevel === 1 && compositionLevel >= 3 && labelConfig && onLabelChange && (
        <AttributeCategory icon={ICONS.labels} title="Labels" open={acc.isOpen('Labels')} onToggle={() => acc.toggle('Labels')}>
          <LabelSlotsEditor config={labelConfig} onChange={onLabelChange} styleControls />
        </AttributeCategory>
      )}
    </>
  )
}

// ── Decoration properties ─────────────────────────────────────────────────────

// The Spatial / Geometry / Material sections for a decoration-shaped object.
// Shared by the standalone Decoration panel and the Collection's embedded object.
function ObjectAttributeSections({ config, onChange, acc }: {
  config:   DecorationConfig
  onChange: (c: DecorationConfig) => void
  acc:      ReturnType<typeof useAccordion>
}) {
  const materialOptions: MarkMaterial[] = config.shape === 'custom' && config.customModelHasMat
    ? ['original', 'plastic', 'fluid', 'glass', 'metal', 'iridescent', 'emissive', 'toon', 'wireframe']
    : MATERIAL_OPTIONS
  return (
    <>
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

        <MaterialExtras
          material={config.material}
          opacity={config.opacity} roughness={config.roughness} metalness={config.metalness}
          onPatch={(p) => onChange({ ...config, ...p })}
        />
      </AttributeCategory>
    </>
  )
}

function DecorationProperties({
  config, onChange,
}: {
  config:   DecorationConfig
  onChange: (c: DecorationConfig) => void
}) {
  const acc = useAccordion('Spatial')
  return (
    <>
      <PanelHeader title="Decoration" />
      <ObjectAttributeSections config={config} onChange={onChange} acc={acc} />
    </>
  )
}

// A fresh collection object (decoration owned by a collection). `id` must be
// stable per collection so React keeps its scene mesh across edits.
function makeCollectionObject(id: string): DecorationConfig {
  return {
    id,
    name:        'Object',
    shape:       'box',
    material:    'plastic',
    color:       '#9AA0A6',
    position:    { x: 0, y: 0, z: 0 },
    size:        { x: 1, y: 1, z: 1 },
    orientation: { x: 0, y: 0, z: 0 },
    structural:  { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 },
  }
}

// ── Small scene control helpers ───────────────────────────────────────────────

function LabeledSlider({ label, value, min, max, step, decimals = 0, suffix = '', onChange }: {
  label: string; value: number; min: number; max: number; step: number
  decimals?: number; suffix?: string; onChange: (v: number) => void
}) {
  return (
    <Row label={label}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }} />
        <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '38px', textAlign: 'right' }}>
          {value.toFixed(decimals)}{suffix}
        </span>
      </div>
    </Row>
  )
}

function ColorField({ label, value, onChange }: {
  label: string; value: string; onChange: (v: string) => void
}) {
  return (
    <Row label={label}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)}
          style={{ width: '36px', height: '30px', border: '1px solid #D1D1D6', borderRadius: '6px', background: 'none', cursor: 'pointer', padding: '2px' }} />
        <span style={{ fontSize: '12px', color: '#8E8E93', fontFamily: 'monospace' }}>{value}</span>
      </div>
    </Row>
  )
}

function CheckRow({ label, checked, onChange }: {
  label: string; checked: boolean; onChange: (v: boolean) => void
}) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#1D1D1F', cursor: 'pointer', padding: '2px 0' }}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}
        style={{ accentColor: '#5E5CE6', width: '14px', height: '14px', cursor: 'pointer' }} />
      <span>{label}</span>
    </label>
  )
}

// ── Scene properties ──────────────────────────────────────────────────────────

function SceneProperties({
  config, onChange,
}: { config: SceneConfig; onChange: (c: SceneConfig) => void }) {
  const acc = useAccordion('Framing')   // single-open: opening one section closes the others
  const titleShow   = config.sceneTitleShow   ?? false
  const titleOffset = config.sceneTitleOffset ?? 2.5
  const titleBelow  = config.sceneTitleBelow  ?? false
  return (
    <>
      <PanelHeader title="Scene" />

      <AttributeCategory icon={ICONS.framing} title="Framing" open={acc.isOpen('Framing')} onToggle={() => acc.toggle('Framing')}>
        <Row label="Background">
          <select
            value={config.background}
            onChange={(e) => onChange({ ...config, background: e.target.value as BackgroundMode })}
            style={{ width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px', color: '#1D1D1F', fontSize: '13px', padding: '7px 10px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', appearance: 'auto' }}
          >
            <option value="dark">Dark</option>
            <option value="color">Solid colour</option>
            <option value="gradient">Gradient</option>
            <option value="hdri">HDRI</option>
            <option value="sky">Sky</option>
            <option value="ocean">Ocean</option>
          </select>
        </Row>

        {config.background === 'color' && (
          <ColorField label="Colour" value={config.bgColor ?? '#202024'} onChange={(v) => onChange({ ...config, bgColor: v })} />
        )}
        {config.background === 'gradient' && (
          <>
            <ColorField label="Top"    value={config.bgGradientTop    ?? '#3a5f8a'} onChange={(v) => onChange({ ...config, bgGradientTop: v })} />
            <ColorField label="Bottom" value={config.bgGradientBottom ?? '#0a0a12'} onChange={(v) => onChange({ ...config, bgGradientBottom: v })} />
          </>
        )}
        {config.background === 'hdri' && (
          <>
            <LabeledSlider label="Blur"       value={config.hdriBlur ?? 0}      min={0} max={1} step={0.02} decimals={2} onChange={(v) => onChange({ ...config, hdriBlur: v })} />
            <LabeledSlider label="Brightness" value={config.hdriIntensity ?? 1} min={0} max={2} step={0.05} decimals={2} onChange={(v) => onChange({ ...config, hdriIntensity: v })} />
          </>
        )}
        {config.background === 'sky' && (
          <>
            <LabeledSlider label="Sun elevation" value={config.skyElevation ?? 20}  min={-5} max={90}  step={1} suffix="°" onChange={(v) => onChange({ ...config, skyElevation: v })} />
            <LabeledSlider label="Sun azimuth"   value={config.skyAzimuth ?? 140}   min={0}  max={360} step={1} suffix="°" onChange={(v) => onChange({ ...config, skyAzimuth: v })} />
          </>
        )}

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

        <LabeledSlider
          label="Exposure"
          value={config.exposure ?? (config.background === 'ocean' ? 0.95 : config.background === 'dark' ? 1.35 : 1.2)}
          min={0.2} max={3} step={0.05} decimals={2}
          onChange={(v) => onChange({ ...config, exposure: v })}
        />
        <LabeledSlider label="Env. rotation" value={config.envRotation ?? 0} min={0} max={360} step={1} suffix="°"
          onChange={(v) => onChange({ ...config, envRotation: v })} />

        <Row label="Atmosphere">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <CheckRow label="Stars" checked={config.stars ?? false} onChange={(v) => onChange({ ...config, stars: v })} />
            <CheckRow label="Grid"  checked={config.grid ?? false}  onChange={(v) => onChange({ ...config, grid: v })} />
            <CheckRow label="Fog"   checked={config.fog ?? false}   onChange={(v) => onChange({ ...config, fog: v })} />
          </div>
        </Row>
        {config.fog && (
          <>
            <ColorField label="Fog colour" value={config.fogColor ?? '#8090a0'} onChange={(v) => onChange({ ...config, fogColor: v })} />
            <LabeledSlider label="Fog near" value={config.fogNear ?? 20}  min={0}  max={100} step={1} onChange={(v) => onChange({ ...config, fogNear: v })} />
            <LabeledSlider label="Fog far"  value={config.fogFar ?? 150}  min={10} max={400} step={5} onChange={(v) => onChange({ ...config, fogFar: v })} />
          </>
        )}

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

      <AttributeCategory icon={ICONS.labels} title="Label" open={acc.isOpen('Label')} onToggle={() => acc.toggle('Label')}>
        <Row label="Show title">
          <SegmentedControl
            options={[{ value: 'on' as const, label: 'On' }, { value: 'off' as const, label: 'Off' }]}
            value={titleShow ? 'on' : 'off'}
            onChange={(v) => onChange({ ...config, sceneTitleShow: v === 'on' })}
          />
        </Row>
        {titleShow && (
          <>
            <Row label="Side">
              <SegmentedControl
                options={[{ value: 'above' as const, label: '↑ Above' }, { value: 'below' as const, label: '↓ Below' }]}
                value={titleBelow ? 'below' : 'above'}
                onChange={(v) => onChange({ ...config, sceneTitleBelow: v === 'below' })}
              />
            </Row>
            <Row label="Distance">
              <input
                type="number" min={0} max={15} step={0.1} value={titleOffset}
                onChange={(e) => onChange({ ...config, sceneTitleOffset: Math.max(0, Number(e.target.value) || 0) })}
                style={{
                  width: '100%', background: '#F2F2F7', border: '1px solid #D1D1D6',
                  borderRadius: '6px', padding: '6px 8px', fontSize: '12px', color: '#1D1D1F',
                  fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
                }}
              />
            </Row>
          </>
        )}
        <Row label="Hide behind objects">
          <SegmentedControl
            options={[
              { value: 'off' as const,       label: 'Off'       },
              { value: 'full' as const,      label: 'Full'      },
              { value: 'optimized' as const, label: 'Optimized' },
            ]}
            value={config.sceneLabelOcclude ?? 'optimized'}
            onChange={(v) => onChange({ ...config, sceneLabelOcclude: v })}
          />
          <span style={{ fontSize: '10px', color: '#AEAEB2', marginTop: '4px', display: 'block' }}>
            Optimized checks only decorations.
          </span>
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
  colorTint:             boolean
  onColorTintChange:     (b: boolean) => void
  markOpenSection?:      string
  onReseed?:             () => void
  models?:               ModelPreset[]
  varLabels?:            { numerical: string; categorical: string }   // active dataset column names
  activePartId?:         string | null
  onAddPart?:            () => void
  onRemovePart?:         (id: string) => void
  onUpdatePart?:         (id: string, patch: Partial<MarkPart>) => void
  onSelectPart?:         (id: string | null) => void
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
  colorMode, colorGradient, onColorGradientChange, colorTint, onColorTintChange, markOpenSection, onReseed,
  models, varLabels,
  activePartId, onAddPart, onRemovePart, onUpdatePart, onSelectPart,
}: PropertiesPanelProps) {
  const activeDec = activeDecorationId !== null
    ? decorations.find((d) => d.id === activeDecorationId) ?? null
    : null

  const resolveVarLabel = (v: DataVariable) =>
    v === 'numerical'   ? (varLabels?.numerical   ?? 'Numerical')
    : v === 'categorical' ? (varLabels?.categorical ?? 'Categorical')
    : (VAR_META[v]?.label ?? v)

  return (
    <VarLabelContext.Provider value={resolveVarLabel}>
    <ModelListContext.Provider value={models ?? MODEL_PRESETS}>
    <div style={{
      padding: '18px 14px', color: '#1D1D1F', fontSize: '13px',
      display: 'flex', flexDirection: 'column', gap: '10px',
      boxSizing: 'border-box',
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
          colorTint={colorTint}
          onColorTintChange={onColorTintChange}
          openSection={markOpenSection}
          layers={layers}
          compositionLevel={compositionLevel}
          activePartId={activePartId}
          onAddPart={onAddPart}
          onRemovePart={onRemovePart}
          onUpdatePart={onUpdatePart}
          onSelectPart={onSelectPart}
        />
      ) : activeElement === 'collection1' ? (
        <CollectionProperties
          config={collection1Config} onChange={onCollection1Change}
          collectionLevel={1} bindings={bindings} onBind={onBind}
          labelConfig={colLabelConfig} onLabelChange={onColLabelChange}
          onReseed={onReseed} compositionLevel={compositionLevel}
        />
      ) : activeElement === 'collection2' ? (
        <CollectionProperties
          config={collection2Config} onChange={onCollection2Change}
          collectionLevel={2} bindings={bindings} onBind={onBind}
          onReseed={onReseed} compositionLevel={compositionLevel}
        />
      ) : activeElement === 'scene' ? (
        <SceneProperties config={sceneConfig} onChange={onSceneChange} />
      ) : null}

    </div>
    </ModelListContext.Provider>
    </VarLabelContext.Provider>
  )
}
