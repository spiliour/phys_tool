import { MarkShape, MarkMaterial } from './types'
import { MarkPreview } from './MarkPreview'

interface VisualElementsPanelProps {
  markShape: MarkShape
  onMarkShapeChange: (s: MarkShape) => void
  markMaterial: MarkMaterial
  onMarkMaterialChange: (m: MarkMaterial) => void
  density: number
  onDensityChange: (d: number) => void
  totalWeight: number
}

// ── Small reusable pieces ────────────────────────────────────────────────────

function LevelBadge({ level }: { level: number }) {
  return (
    <span style={{
      fontSize: '9px', color: '#8E8E93', border: '1px solid #D1D1D6',
      borderRadius: '4px', padding: '1px 5px', letterSpacing: '0.06em',
      fontWeight: '500',
    }}>L{level}</span>
  )
}

function DataLink({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '3px',
      fontSize: '10px', color: '#8A6800',
      background: '#FFFBEB', border: '1px solid #E8D58E',
      borderRadius: '4px', padding: '2px 6px', fontWeight: '500',
    }}>↗ {label}</span>
  )
}

function Row({ label, children, right }: { label: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '11px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: '500' }}>
          {label}
        </span>
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
      display: 'flex', background: '#EFEFEF', borderRadius: '8px',
      padding: '2px', gap: '2px',
    }}>
      {options.map((opt) => {
        const active = value === opt.value
        return (
          <button key={opt.value} onClick={() => onChange(opt.value)} style={{
            flex: 1, padding: '5px 4px',
            background: active ? '#FFFFFF' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            boxShadow: active ? '0 1px 3px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.05)' : 'none',
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

function ElementCard({ dot, title, subtitle, level, children }: {
  dot: string; title: string; subtitle?: string; level: number; children: React.ReactNode
}) {
  return (
    <div style={{
      border: '1px solid #E5E5EA', borderRadius: '10px', overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '9px 12px', background: '#F8F8FA', borderBottom: '1px solid #E5E5EA',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dot, display: 'inline-block', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '12px', color: '#1D1D1F', fontWeight: '600', lineHeight: 1.2 }}>{title}</div>
            {subtitle && <div style={{ fontSize: '10px', color: '#8E8E93', marginTop: '1px' }}>{subtitle}</div>}
          </div>
        </div>
        <LevelBadge level={level} />
      </div>
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#FFFFFF' }}>
        {children}
      </div>
    </div>
  )
}

// ── Constants ────────────────────────────────────────────────────────────────

const SHAPE_OPTIONS: { value: MarkShape; label: string }[] = [
  { value: 'box',    label: '■ Box'    },
  { value: 'sphere', label: '● Sphere' },
  { value: 'star',   label: '★ Star'   },
]

const MATERIAL_OPTIONS: { value: MarkMaterial; label: string; hint: string }[] = [
  { value: 'plastic',  label: 'Plastic',  hint: 'Matte diffuse surface'               },
  { value: 'fluid',    label: 'Fluid',    hint: 'Clearcoat + iridescence, glass-like' },
  { value: 'metal',    label: 'Metal',    hint: 'Polished — mirrors the HDRI'         },
  { value: 'emissive', label: 'Emissive', hint: 'Self-illuminated, glows with color'  },
]

const BASE_PER_UNIT = 140

// ── Main component ───────────────────────────────────────────────────────────

export function VisualElementsPanel({
  markShape, onMarkShapeChange,
  markMaterial, onMarkMaterialChange,
  density, onDensityChange,
  totalWeight,
}: VisualElementsPanelProps) {
  const approxParticles = Math.round(totalWeight * BASE_PER_UNIT * density)
  const approxLabel = approxParticles >= 1000
    ? (approxParticles / 1000).toFixed(1) + 'k'
    : String(approxParticles)

  return (
    <div style={{
      padding: '18px 14px', color: '#1D1D1F', fontSize: '13px',
      display: 'flex', flexDirection: 'column', gap: '10px',
      overflowY: 'auto', height: '100%',
    }}>
      <div>
        <div style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AEAEB2', marginBottom: '3px', fontWeight: '500' }}>
          Design Space
        </div>
        <div style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: '700' }}>Visual Elements</div>
      </div>

      {/* ── Mark ── */}
      <ElementCard dot="#F06951" title="Mark" subtitle="individual particle" level={1}>

        {/* Live 3D preview */}
        <MarkPreview shape={markShape} material={markMaterial} />

        <Row label="Shape">
          <SegmentedControl options={SHAPE_OPTIONS} value={markShape} onChange={onMarkShapeChange} />
        </Row>

        <Row label="Material" right={<DataLink label="Color → Data panel" />}>
          <select
            value={markMaterial}
            onChange={(e) => onMarkMaterialChange(e.target.value as MarkMaterial)}
            style={{
              width: '100%',
              background: '#F2F2F7',
              border: '1px solid #D1D1D6',
              borderRadius: '8px',
              color: '#1D1D1F',
              fontSize: '13px',
              padding: '7px 10px',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              appearance: 'auto',
            }}
          >
            {MATERIAL_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <div style={{ fontSize: '11px', color: '#AEAEB2', lineHeight: 1.5 }}>
            {MATERIAL_OPTIONS.find(o => o.value === markMaterial)?.hint}
          </div>
        </Row>

      </ElementCard>

      {/* ── Collection 1 ── */}
      <ElementCard dot="#5E5CE6" title="Collection 1" subtitle="single layer of particles" level={2}>

        <Row label="Particle Density">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="range" min={0.1} max={3.0} step={0.05} value={density}
              onChange={(e) => onDensityChange(Number(e.target.value))}
              style={{ flex: 1, accentColor: '#5E5CE6', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '52px', textAlign: 'right' }}>
              {density.toFixed(2)}× <span style={{ color: '#AEAEB2' }}>~{approxLabel}</span>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#C7C7CC' }}>
            <span>Sparse</span><span>Dense</span>
          </div>
        </Row>

        <Row label="Size (Layer Height)" right={<DataLink label="Weight → Data panel" />}>
          <div style={{
            background: '#F8F8FA', border: '1px solid #E5E5EA', borderRadius: '8px',
            padding: '8px 10px', fontSize: '11px', color: '#6C6C70', lineHeight: 1.5,
          }}>
            Height is proportional to the <em style={{ color: '#3C3C43' }}>Weight</em> value. Adjust in the right panel.
          </div>
        </Row>

      </ElementCard>

      {/* ── Collection 2 ── */}
      <ElementCard dot="#5E5CE6" title="Collection 2" subtitle="full stack of layers" level={3}>

        <Row label="Spatial Arrangement">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '6px 11px', background: '#F2F2F7', border: '1px solid #E5E5EA',
              borderRadius: '8px', fontSize: '12px', color: '#6C6C70',
            }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[0, 1, 2].map(i => (
                  <span key={i} style={{ display: 'block', width: '14px', height: '3px', background: '#C7C7CC', borderRadius: '1px' }} />
                ))}
              </span>
              Stacking
            </span>
            <span style={{ fontSize: '10px', color: '#AEAEB2' }}>contextual</span>
          </div>
        </Row>

      </ElementCard>

      <div style={{ marginTop: 'auto', paddingTop: '8px', fontSize: '10px', color: '#C7C7CC', lineHeight: 1.6 }}>
        ↗ tags indicate data-encoded attributes
      </div>
    </div>
  )
}
