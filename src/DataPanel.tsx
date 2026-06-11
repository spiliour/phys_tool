import { LayerData } from './types'
import { HdriPreset, focalLengthToFov } from './Scene'

interface DataPanelProps {
  layers: LayerData[]
  onChange: (layers: LayerData[]) => void
  showLabels: boolean
  onShowLabelsChange: (v: boolean) => void
  seaBackground: boolean
  onSeaBgChange: (v: boolean) => void
  hdriPreset: HdriPreset
  onHdriChange: (v: HdriPreset) => void
  focalLength: number
  onFocalLengthChange: (v: number) => void
}

const DEFAULT_COLORS = [
  '#b0b0b0', '#4466dd', '#cccc44', '#cc5533',
  '#3344aa', '#44aa66', '#aa44cc', '#44aaaa',
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

let _nextId = 20
function nextId() { return String(_nextId++) }

const cell: React.CSSProperties = { padding: '5px 6px', verticalAlign: 'middle' }

const inputBase: React.CSSProperties = {
  background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '6px',
  color: '#1D1D1F', fontSize: '12px', padding: '4px 7px', outline: 'none', width: '100%',
  fontFamily: 'inherit',
}

const iconBtn: React.CSSProperties = {
  background: '#F2F2F7', border: '1px solid #D1D1D6', color: '#6C6C70',
  cursor: 'pointer', borderRadius: '5px', padding: '2px 7px',
  fontSize: '12px', lineHeight: '1.4', fontFamily: 'inherit',
}

// ── Scene visual element card ─────────────────────────────────────────────────

function SceneCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid #E5E5EA', borderRadius: '10px', overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        padding: '9px 12px', background: '#F8F8FA', borderBottom: '1px solid #E5E5EA',
        gap: '8px',
      }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#F06951', display: 'inline-block', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '12px', color: '#1D1D1F', fontWeight: '600', lineHeight: 1.2 }}>Scene</div>
          <div style={{ fontSize: '10px', color: '#8E8E93', marginTop: '1px' }}>global framing</div>
        </div>
      </div>
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#FFFFFF' }}>
        {children}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: '11px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: '500' }}>
      {children}
    </span>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function DataPanel({
  layers, onChange,
  showLabels, onShowLabelsChange,
  seaBackground, onSeaBgChange,
  hdriPreset, onHdriChange,
  focalLength, onFocalLengthChange,
}: DataPanelProps) {
  const totalWeight = layers.reduce((s, l) => s + Math.max(0, l.percentage), 0)

  function update(id: string, field: keyof LayerData, value: string | number) {
    onChange(layers.map((l) => (l.id === id ? { ...l, [field]: value } : l)))
  }

  function addLayer() {
    onChange([...layers, {
      id: nextId(), name: `Layer ${layers.length + 1}`,
      percentage: 10, color: DEFAULT_COLORS[layers.length % DEFAULT_COLORS.length],
    }])
  }

  function removeLayer(id: string) {
    if (layers.length <= 1) return
    onChange(layers.filter((l) => l.id !== id))
  }

  function moveTowardTop(index: number) {
    if (index === 0) return
    const next = [...layers]
    ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
    onChange(next)
  }

  function moveTowardBottom(index: number) {
    if (index === layers.length - 1) return
    const next = [...layers]
    ;[next[index], next[index + 1]] = [next[index + 1], next[index]]
    onChange(next)
  }

  return (
    <div style={{
      padding: '18px 14px', color: '#1D1D1F', fontSize: '13px',
      minHeight: '100%', display: 'flex', flexDirection: 'column', gap: '14px',
    }}>
      {/* Header */}
      <div>
        <div style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AEAEB2', marginBottom: '3px', fontWeight: '500' }}>Data Encoding</div>
        <div style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: '700' }}>Data Panel</div>
      </div>

      <div style={{ fontSize: '11px', color: '#8E8E93', lineHeight: 1.5 }}>
        First row = top of stack. Weights are relative.
      </div>

      <div style={{ fontSize: '11px', color: '#8E8E93', borderTop: '1px solid #E5E5EA', paddingTop: '8px' }}>
        Total weight: <span style={{ color: '#1D1D1F', fontWeight: '600' }}>{totalWeight.toFixed(1)}</span>
      </div>

      {/* Layer table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #E5E5EA' }}>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px' }}>Name</th>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '52px' }}>Weight</th>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '36px' }}>Color</th>
            <th style={{ width: '56px' }}></th>
          </tr>
        </thead>
        <tbody>
          {layers.map((layer, i) => (
            <tr key={layer.id} style={{ borderBottom: '1px solid #F2F2F7', background: i % 2 === 0 ? 'transparent' : '#FAFAFA' }}>
              <td style={cell}>
                <input type="text" value={layer.name} onChange={(e) => update(layer.id, 'name', e.target.value)} style={inputBase} />
              </td>
              <td style={cell}>
                <input type="number" min={0} max={9999} step={1} value={layer.percentage}
                  onChange={(e) => update(layer.id, 'percentage', Number(e.target.value))}
                  style={{ ...inputBase, width: '46px' }} />
              </td>
              <td style={cell}>
                <input type="color" value={layer.color} onChange={(e) => update(layer.id, 'color', e.target.value)}
                  style={{ width: '30px', height: '28px', border: '1px solid #D1D1D6', borderRadius: '5px', background: 'none', cursor: 'pointer', padding: '1px' }} />
              </td>
              <td style={{ ...cell, textAlign: 'right' }}>
                <div style={{ display: 'flex', gap: '3px', justifyContent: 'flex-end' }}>
                  <button onClick={() => moveTowardTop(i)} disabled={i === 0} title="Move higher" style={iconBtn}>↑</button>
                  <button onClick={() => moveTowardBottom(i)} disabled={i === layers.length - 1} title="Move lower" style={iconBtn}>↓</button>
                  <button onClick={() => removeLayer(layer.id)} disabled={layers.length <= 1} title="Remove" style={{ ...iconBtn, color: '#FF3B30' }}>×</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addLayer} style={{
        background: '#F2F2F7', border: '1px solid #D1D1D6', color: '#6C6C70',
        cursor: 'pointer', borderRadius: '8px', padding: '7px 14px',
        fontSize: '12px', fontWeight: '500', alignSelf: 'flex-start',
        fontFamily: 'inherit',
      }}>
        + Add Layer
      </button>

      {/* Labels toggle */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid #E5E5EA', paddingTop: '12px',
      }}>
        <SectionLabel>Labels</SectionLabel>
        <button
          onClick={() => onShowLabelsChange(!showLabels)}
          style={{
            background: showLabels ? '#EBF3FF' : '#F2F2F7',
            border: `1px solid ${showLabels ? '#A8CAFF' : '#D1D1D6'}`,
            color: showLabels ? '#007AFF' : '#6C6C70',
            borderRadius: '6px', padding: '4px 12px',
            fontSize: '11px', fontWeight: showLabels ? '600' : '400',
            cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
          }}
        >
          {showLabels ? '● Visible' : '○ Hidden'}
        </button>
      </div>

      {/* Scene visual element card */}
      <SceneCard>
        {/* Background */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <SectionLabel>Background</SectionLabel>
          <div style={{ display: 'flex', background: '#EFEFEF', borderRadius: '8px', padding: '2px', gap: '2px' }}>
            {[{ v: false, label: '■ Dark' }, { v: true, label: '~ Ocean' }].map((opt) => {
              const active = seaBackground === opt.v
              return (
                <button key={String(opt.v)} onClick={() => onSeaBgChange(opt.v)} style={{
                  flex: 1, padding: '6px 4px',
                  background: active ? '#FFFFFF' : 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  boxShadow: active ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                  color: active ? '#1D1D1F' : '#6C6C70',
                  fontWeight: active ? '600' : '400',
                  cursor: 'pointer', fontSize: '12px', fontFamily: 'inherit',
                  transition: 'all 0.15s',
                }}>
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Lighting */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <SectionLabel>Lighting (HDRI)</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            {HDRI_OPTIONS.map(opt => {
              const active = hdriPreset === opt.value
              return (
                <button key={opt.value} onClick={() => onHdriChange(opt.value)} style={{
                  padding: '5px 6px',
                  background: active ? '#EBF3FF' : '#F2F2F7',
                  border: `1px solid ${active ? '#A8CAFF' : '#E5E5EA'}`,
                  borderRadius: '7px', color: active ? '#007AFF' : '#6C6C70',
                  cursor: 'pointer', fontSize: '11px', fontFamily: 'inherit',
                  fontWeight: active ? '600' : '400',
                  transition: 'all 0.1s', textAlign: 'center',
                }}>
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Camera */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <SectionLabel>Camera</SectionLabel>
            <span style={{ fontSize: '11px', color: '#6C6C70', fontFamily: 'inherit', fontWeight: '500' }}>
              {focalLength}mm
              <span style={{ color: '#AEAEB2', marginLeft: '5px' }}>
                {focalLengthToFov(focalLength).toFixed(0)}°
              </span>
            </span>
          </div>
          <input
            type="range"
            min={14} max={180} step={1}
            value={focalLength}
            onChange={e => onFocalLengthChange(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#F06951', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#AEAEB2' }}>
            <span>14mm wide</span><span>180mm tele</span>
          </div>
        </div>
      </SceneCard>

      <div style={{ fontSize: '10px', color: '#C7C7CC', lineHeight: 1.7, paddingBottom: '4px' }}>
        Drag to orbit · Scroll to zoom · Right-drag to pan
      </div>
    </div>
  )
}
