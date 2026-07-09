import { useState } from 'react'
import DeformLab    from './DeformLab'
import ShatterLab   from './ShatterLab'
import ParticleLab  from './ParticleLab'
import FluidLab     from './FluidLab'

type Probe = 'deform' | 'shatter' | 'particles' | 'fluid'

// Must match the labs' sidebar width
const SIDEBAR_W = 268
const BAR_H     = 44
const PANEL_BG  = '#383858'

// ── Icons ─────────────────────────────────────────────────────────────────────

function DeformIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeLinecap="round">
      <path strokeWidth="1.6" d="M2 6.5C4 5.5 6.5 7.5 9 7C11.5 6.5 14 7.5 16 6.5"/>
      <path strokeWidth="1.6" d="M2 11.5C4 12.5 6.5 10.5 9 11C11.5 11.5 14 10.5 16 11.5"/>
      <path strokeWidth="1" d="M2 6.5L2 11.5M9 7L9 11M16 6.5L16 11.5" opacity="0.4"/>
    </svg>
  )
}

function ShatterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <polygon strokeWidth="1.5" points="9,2 15,6.5 13,16 5,16 3,6.5"/>
      <path strokeWidth="1" d="M9 2L7 8L13 10" opacity="0.5"/>
      <path strokeWidth="1" d="M7 8L5 16" opacity="0.5"/>
    </svg>
  )
}

function ParticlesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <circle cx="4.5" cy="4.5" r="1.8"/>
      <circle cx="14"  cy="3.5" r="1.8"/>
      <circle cx="8"   cy="9"   r="1.8"/>
      <circle cx="3.5" cy="14"  r="1.8"/>
      <circle cx="14"  cy="13"  r="1.8"/>
      <circle cx="10.5" cy="15" r="1.2"/>
    </svg>
  )
}

function FluidIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeLinecap="round">
      <path strokeWidth="1.6" d="M2 13C4 10 6.5 15 9 13C11.5 11 14 15 16 13"/>
      <path strokeWidth="1.3" d="M2 9C4 6 6.5 11 9 9C11.5 7 14 11 16 9" opacity="0.4"/>
    </svg>
  )
}

// ── Config ────────────────────────────────────────────────────────────────────

const PROBES: { id: Probe; label: string; short: string; Icon: () => JSX.Element }[] = [
  { id: 'deform',    label: 'Deformation', short: 'Deform',    Icon: DeformIcon    },
  { id: 'shatter',   label: 'Shattering',  short: 'Shatter',   Icon: ShatterIcon   },
  { id: 'particles', label: 'Particles',   short: 'Particles', Icon: ParticlesIcon },
  { id: 'fluid',     label: 'Fluids',      short: 'Fluid',     Icon: FluidIcon     },
]

// ── Hub ───────────────────────────────────────────────────────────────────────

export default function LabHub() {
  const [active, setActive] = useState<Probe>('deform')

  return (
    <div style={{
      width: '100vw', height: '100vh', position: 'relative',
      fontFamily: 'system-ui, sans-serif',
    }}>

      {/* ── Active lab — fills the full viewport ── */}
      <div style={{ width: '100%', height: '100%' }}>
        {active === 'deform'    && <DeformLab    embedded />}
        {active === 'shatter'   && <ShatterLab   embedded />}
        {active === 'particles' && <ParticleLab  embedded />}
        {active === 'fluid'     && <FluidLab     embedded />}
      </div>

      {/* ── Probe switcher — absolute overlay at top of sidebar ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: SIDEBAR_W, height: BAR_H, zIndex: 50,
        background: PANEL_BG,
        borderBottom: '1px solid #505085',
        borderRight: '1px solid #505085',
        display: 'flex',
      }}>
        {PROBES.map(({ id, short, Icon }) => {
          const on = active === id
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              title={PROBES.find(p => p.id === id)!.label}
              style={{
                flex: 1,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 3, border: 'none', padding: '4px 4px 2px',
                borderBottom: on ? `2px solid #9090e8` : '2px solid transparent',
                background: on ? 'rgba(100,100,200,0.18)' : 'transparent',
                color: on ? '#d8d8ff' : '#7878a8',
                cursor: 'pointer',
                transition: 'color 0.12s, background 0.12s, border-color 0.12s',
              }}
            >
              <Icon />
              <span style={{
                fontSize: 9, fontFamily: 'inherit', lineHeight: 1,
                fontWeight: on ? 700 : 400,
                letterSpacing: 0.4,
                textTransform: 'uppercase',
              }}>
                {short}
              </span>
            </button>
          )
        })}
      </div>

    </div>
  )
}
