import { CompositionLevel, ActiveElement, DecorationConfig } from './types'

// ── Static metadata per element type ─────────────────────────────────────────

interface ElementMeta {
  label: string
  subtitle: string
  color: string
  badge: string
}

const META: Record<ActiveElement, ElementMeta> = {
  mark:        { label: 'Mark',           subtitle: 'individual particle',   color: '#F06951', badge: 'L1'  },
  collection1: { label: 'Collection',     subtitle: 'group of marks',        color: '#5E5CE6', badge: 'L2'  },
  collection2: { label: 'Collection Lv2', subtitle: 'group of collections',  color: '#9D9BF4', badge: 'L3'  },
  scene:       { label: 'Scene',          subtitle: 'global framing',        color: '#34C759', badge: 'Env' },
}

// Which elements are visible at each composition level
const LEVEL_ELEMENTS: Record<CompositionLevel, ActiveElement[]> = {
  1: ['mark', 'scene'],
  2: ['mark', 'collection1', 'scene'],
  3: ['mark', 'collection1', 'collection2', 'scene'],
}

// ── Shared button styles ──────────────────────────────────────────────────────

const levelBtnBase: React.CSSProperties = {
  padding: '8px 12px', borderRadius: '10px',
  fontSize: '12px', fontWeight: '500',
  cursor: 'pointer', fontFamily: 'inherit',
  transition: 'border-color 0.15s, color 0.15s',
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
  width: '100%',
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface HierarchyPanelProps {
  level: CompositionLevel
  activeElement: ActiveElement
  onSelectElement: (el: ActiveElement) => void
  onAdvanceLevel: () => void
  onDowngradeLevel: () => void
  decorations: DecorationConfig[]
  activeDecorationId: string | null
  onSelectDecoration: (id: string) => void
  onAddDecoration: () => void
  onRemoveDecoration: (id: string) => void
}

// ── Component ─────────────────────────────────────────────────────────────────

export function HierarchyPanel({
  level, activeElement,
  onSelectElement, onAdvanceLevel, onDowngradeLevel,
  decorations, activeDecorationId,
  onSelectDecoration, onAddDecoration, onRemoveDecoration,
}: HierarchyPanelProps) {
  const elements = LEVEL_ELEMENTS[level]

  return (
    <div style={{
      padding: '14px 14px 14px',
      display: 'flex', flexDirection: 'column', gap: '8px',
    }}>

      {/* Header */}
      <div style={{ borderTop: '1px solid #E5E5EA', paddingTop: '12px' }}>
        <div style={{
          fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#AEAEB2', marginBottom: '3px', fontWeight: '500',
        }}>
          Composition
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: '700' }}>Hierarchy</div>
          <span style={{
            fontSize: '11px', color: '#8E8E93',
            background: '#F2F2F7', padding: '2px 8px',
            borderRadius: '6px', fontFamily: 'inherit',
          }}>
            Lv {level}
          </span>
        </div>
      </div>

      {/* Element boxes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {elements.map((el) => {
          const m = META[el]
          const isActive = el === activeElement && activeDecorationId === null
          return (
            <button
              key={el}
              onClick={() => onSelectElement(el)}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '9px 12px', width: '100%', textAlign: 'left',
                background: isActive ? `${m.color}14` : '#FAFAFA',
                border: `1.5px solid ${isActive ? m.color : '#E5E5EA'}`,
                borderRadius: '10px', cursor: 'pointer',
                transition: 'border-color 0.15s, background 0.15s',
                fontFamily: 'inherit',
              }}
            >
              {/* Type dot */}
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: m.color, flexShrink: 0,
                boxShadow: isActive ? `0 0 0 3px ${m.color}28` : 'none',
                transition: 'box-shadow 0.15s',
              }} />

              {/* Labels */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '12px', color: '#1D1D1F',
                  fontWeight: isActive ? '600' : '500', lineHeight: 1.2,
                }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '10px', color: '#8E8E93', marginTop: '1px' }}>
                  {m.subtitle}
                </div>
              </div>

              {/* Level badge */}
              <span style={{
                fontSize: '9px', letterSpacing: '0.06em', fontWeight: '500',
                color: isActive ? m.color : '#8E8E93',
                border: `1px solid ${isActive ? m.color : '#D1D1D6'}`,
                borderRadius: '4px', padding: '1px 5px', flexShrink: 0,
                transition: 'color 0.15s, border-color 0.15s',
              }}>
                {m.badge}
              </span>
            </button>
          )
        })}
      </div>

      {/* Level transition buttons — always present */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingTop: '2px' }}>

        {/* Advance button: shown at levels 1 and 2 */}
        {level < 3 && (
          <button
            onClick={onAdvanceLevel}
            style={{
              ...levelBtnBase,
              background: 'transparent',
              border: '1.5px dashed #C7C7CC',
              color: '#8E8E93',
            }}
          >
            {level === 1 ? '+ Add Collection' : '+ Add Collection Lv2'}
          </button>
        )}

        {/* Downgrade button: shown at levels 2 and 3 */}
        {level > 1 && (
          <button
            onClick={onDowngradeLevel}
            style={{
              ...levelBtnBase,
              background: 'transparent',
              border: '1.5px dashed #FFCCC7',
              color: '#FF6B60',
            }}
          >
            {level === 2 ? '− Remove Collection' : '− Remove Collection Lv2'}
          </button>
        )}

      </div>

      {/* Decorations */}
      <div style={{ borderTop: '1px solid #E5E5EA', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{
          fontSize: '10px', color: '#AEAEB2',
          textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600',
          marginBottom: '2px',
        }}>
          Decorations
        </div>

        {decorations.map((dec, idx) => {
          const isActive = dec.id === activeDecorationId
          return (
            <div key={dec.id} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <button
                onClick={() => onSelectDecoration(dec.id)}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '7px 10px', textAlign: 'left',
                  background: isActive ? '#FF950014' : '#FAFAFA',
                  border: `1.5px solid ${isActive ? '#FF9500' : '#E5E5EA'}`,
                  borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
              >
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: dec.color, flexShrink: 0,
                  boxShadow: isActive ? '0 0 0 3px rgba(255,149,0,0.2)' : 'none',
                }} />
                <span style={{
                  fontSize: '12px', color: '#1D1D1F',
                  fontWeight: isActive ? '600' : '400', flex: 1,
                }}>
                  Decoration {idx + 1}
                </span>
                <span style={{
                  fontSize: '9px', color: isActive ? '#FF9500' : '#8E8E93',
                  border: `1px solid ${isActive ? '#FF9500' : '#D1D1D6'}`,
                  borderRadius: '4px', padding: '1px 5px',
                }}>
                  Dec
                </span>
              </button>
              <button
                onClick={() => onRemoveDecoration(dec.id)}
                title="Remove decoration"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#FF3B30', fontSize: '16px', lineHeight: 1,
                  padding: '4px 6px', flexShrink: 0, fontFamily: 'inherit',
                }}
              >
                ×
              </button>
            </div>
          )
        })}

        <button
          onClick={onAddDecoration}
          style={{
            ...levelBtnBase,
            background: 'transparent',
            border: '1.5px dashed #FF9500',
            color: '#FF9500',
          }}
        >
          + Add Decoration
        </button>
      </div>

      <div style={{ fontSize: '10px', color: '#C7C7CC', lineHeight: 1.5 }}>
        Click an element to edit its properties →
      </div>
    </div>
  )
}
