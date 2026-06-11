import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

interface Props {
  distort: number
  onDistortChange: (v: number) => void
  speed: number
  onSpeedChange: (v: number) => void
  sphereCount: number
}

// ── Shared sub-components ────────────────────────────────────────────────────

function LevelBadge({ level }: { level: number }) {
  return (
    <span style={{
      fontSize: '9px', color: '#8E8E93', border: '1px solid #D1D1D6',
      borderRadius: '4px', padding: '1px 5px', letterSpacing: '0.06em', fontWeight: '500',
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
        <span style={{ fontSize: '11px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: '500' }}>{label}</span>
        {right}
      </div>
      {children}
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
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dot, display: 'inline-block' }} />
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

// ── Live preview of a single fluid sphere ────────────────────────────────────

function PreviewBall({ distort, speed }: { distort: number; speed: number }) {
  return (
    <mesh>
      <sphereGeometry args={[0.7, 64, 64]} />
      <MeshDistortMaterial color="#3d88cc" distort={distort} speed={speed} roughness={0.06} metalness={0.04} transparent opacity={0.9} />
    </mesh>
  )
}

function FluidMarkPreview({ distort, speed }: { distort: number; speed: number }) {
  return (
    <div style={{
      width: '100%', height: '80px', borderRadius: '8px', overflow: 'hidden',
      border: '1px solid #E5E5EA',
    }}>
      <Canvas camera={{ position: [0, 0, 2.4], fov: 44 }} gl={{ antialias: true }} style={{ width: '100%', height: '100%' }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 3]} intensity={2.5} color="#fffaf0" />
        <directionalLight position={[-2, -1, -2]} intensity={0.5} color="#8899cc" />
        <PreviewBall distort={distort} speed={speed} />
      </Canvas>
    </div>
  )
}

// ── Slider row helper ────────────────────────────────────────────────────────

function SliderRow({ label, min, max, step, value, onChange, low, high }: {
  label: string; min: number; max: number; step: number;
  value: number; onChange: (v: number) => void; low: string; high: string
}) {
  return (
    <Row label={label}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ flex: 1, accentColor: '#3d88cc', cursor: 'pointer' }} />
        <span style={{ fontSize: '11px', color: '#6C6C70', minWidth: '32px', textAlign: 'right', fontWeight: '500' }}>
          {value.toFixed(2)}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#C7C7CC' }}>
        <span>{low}</span><span>{high}</span>
      </div>
    </Row>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function FluidVisualPanel({ distort, onDistortChange, speed, onSpeedChange, sphereCount }: Props) {
  return (
    <div style={{
      padding: '18px 14px', color: '#1D1D1F', fontSize: '13px',
      display: 'flex', flexDirection: 'column', gap: '10px',
      overflowY: 'auto', height: '100%',
    }}>
      <div>
        <div style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AEAEB2', marginBottom: '3px', fontWeight: '500' }}>Design Space</div>
        <div style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: '700' }}>Visual Elements</div>
      </div>

      {/* ── Mark ── */}
      <ElementCard dot="#F06951" title="Mark" subtitle="fluid sphere" level={1}>

        <FluidMarkPreview distort={distort} speed={speed} />

        <SliderRow label="Fluid Intensity" min={0} max={0.8} step={0.01} value={distort} onChange={onDistortChange} low="Rigid" high="Fluid" />
        <SliderRow label="Fluid Speed"     min={0} max={5.0} step={0.1}  value={speed}   onChange={onSpeedChange}   low="Still"  high="Fast" />

        <Row label="Material" right={<DataLink label="Color → Data panel" />}>
          <div style={{
            background: '#F8F8FA', border: '1px solid #E5E5EA', borderRadius: '8px',
            padding: '8px 10px', fontSize: '11px', color: '#6C6C70', lineHeight: 1.5,
          }}>
            Uses <em style={{ color: '#3C3C43' }}>MeshDistortMaterial</em> — a vertex-shader distortion applied to the sphere surface. Base color comes from the data panel.
          </div>
        </Row>

      </ElementCard>

      {/* ── Collection 1 ── */}
      <ElementCard dot="#5E5CE6" title="Collection 1" subtitle="row of fluid spheres" level={2}>

        <Row label="Spatial Arrangement">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '6px 11px', background: '#F2F2F7', border: '1px solid #E5E5EA',
              borderRadius: '8px', fontSize: '12px', color: '#6C6C70',
            }}>
              {/* Adjacent placement icon — circles in a row */}
              <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                {[10, 14, 8, 16, 11].map((s, i) => (
                  <span key={i} style={{ display: 'block', width: `${s}px`, height: `${s}px`, borderRadius: '50%', background: '#C7C7CC' }} />
                ))}
              </span>
              Adjacent Placement
            </span>
          </div>
        </Row>

        <Row label="Count" right={<DataLink label="Rows → Data panel" />}>
          <div style={{
            background: '#F8F8FA', border: '1px solid #E5E5EA', borderRadius: '8px',
            padding: '8px 10px', fontSize: '11px', color: '#6C6C70', lineHeight: 1.5,
          }}>
            <em style={{ color: '#3C3C43' }}>{sphereCount} spheres</em> — one per row in the data panel.
          </div>
        </Row>

        <Row label="Size (Radius)" right={<DataLink label="Value → Data panel" />}>
          <div style={{
            background: '#F8F8FA', border: '1px solid #E5E5EA', borderRadius: '8px',
            padding: '8px 10px', fontSize: '11px', color: '#6C6C70', lineHeight: 1.5,
          }}>
            Each sphere's radius is proportional to its <em style={{ color: '#3C3C43' }}>Value</em> (0–100).
          </div>
        </Row>

      </ElementCard>

      <div style={{ marginTop: 'auto', paddingTop: '8px', fontSize: '10px', color: '#C7C7CC', lineHeight: 1.6 }}>
        ↗ tags indicate data-encoded attributes
      </div>
    </div>
  )
}
