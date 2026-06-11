import { SphereData } from './types'
import { HdriPreset, focalLengthToFov } from './Scene'

interface FluidDataPanelProps {
  spheres: SphereData[]
  onChange: (spheres: SphereData[]) => void
  seaBackground: boolean
  onSeaBgChange: (v: boolean) => void
  hdriPreset: HdriPreset
  onHdriChange: (v: HdriPreset) => void
  focalLength: number
  onFocalLengthChange: (v: number) => void
}

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

const inputBase: React.CSSProperties = {
  background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '6px',
  color: '#1D1D1F', fontSize: '12px', padding: '4px 7px', outline: 'none', width: '100%',
  fontFamily: 'inherit',
}

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

export function FluidDataPanel({ spheres, onChange, seaBackground, onSeaBgChange, hdriPreset, onHdriChange, focalLength, onFocalLengthChange }: FluidDataPanelProps) {
  function update(id: string, field: keyof SphereData, value: string | number) {
    onChange(spheres.map(s => s.id === id ? { ...s, [field]: value } : s))
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
        Value (0–100) controls sphere size. Color controls sphere color.
      </div>

      {/* Sphere rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {spheres.map((s) => (
          <div key={s.id} style={{
            background: '#F8F8FA', border: '1px solid #E5E5EA', borderRadius: '10px',
            padding: '10px 10px 8px', display: 'flex', flexDirection: 'column', gap: '7px',
          }}>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
              <input type="color" value={s.color} onChange={e => update(s.id, 'color', e.target.value)}
                style={{ width: '28px', height: '28px', border: '1px solid #D1D1D6', borderRadius: '6px', background: 'none', cursor: 'pointer', padding: '1px', flexShrink: 0 }} />
              <input type="text" value={s.label} onChange={e => update(s.id, 'label', e.target.value)}
                style={{ ...inputBase, flex: 1 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '10px', color: '#8E8E93', minWidth: '32px', fontWeight: '500' }}>Value</span>
              <input type="range" min={0} max={100} step={1} value={s.value}
                onChange={e => update(s.id, 'value', Number(e.target.value))}
                style={{ flex: 1, accentColor: s.color, cursor: 'pointer' }} />
              <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '28px', textAlign: 'right', fontWeight: '500' }}>{s.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scene visual element card */}
      <SceneCard>
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
