import React, { useEffect } from 'react'
import { DataBindings, DataVariable, CompositionLevel } from './types'

// ── Types ─────────────────────────────────────────────────────────────────────

interface BindOption {
  action: 'bind'
  bindKey: keyof DataBindings
  label: string
  icon: string
  section: 'mark' | 'collection'
}

interface LabelOption {
  action: 'label'
  label: string
  icon: string
  section: 'mark' | 'collection'
}

type MenuOption = BindOption | LabelOption

// ── Layout helpers ─────────────────────────────────────────────────────────────

const RADIUS  = 88
const BTN     = 46

function arcPositions(n: number, centerDeg: number, spreadDeg: number, r: number) {
  return Array.from({ length: n }, (_, i) => {
    const deg = n === 1
      ? centerDeg
      : centerDeg - spreadDeg / 2 + (spreadDeg / (n - 1)) * i
    const rad = (deg * Math.PI) / 180
    return { x: Math.cos(rad) * r, y: Math.sin(rad) * r }
  })
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface RadialBindMenuProps {
  x:           number
  y:           number
  varName:     DataVariable
  varType:     'numerical' | 'categorical'
  level:       CompositionLevel
  onBind:      (attr: keyof DataBindings, variable: DataVariable) => void
  onBindLabel: (section: 'mark' | 'collection', variable: DataVariable) => void
  onClose:     () => void
}

// ── Component ─────────────────────────────────────────────────────────────────

export function RadialBindMenu({
  x, y, varName, varType, level, onBind, onBindLabel, onClose,
}: RadialBindMenuProps) {

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Build option lists
  const markOpts: MenuOption[] = []
  const colOpts:  MenuOption[] = []

  if (varType === 'categorical') {
    markOpts.push(
      { action: 'bind', bindKey: 'markColor', label: 'Color', icon: '●', section: 'mark' },
      { action: 'label', label: 'Label', icon: 'Aa', section: 'mark' },
    )
  } else {
    // Pushed bottom-first so arc renders X=top, Y, Z, Label=bottom
    markOpts.push(
      { action: 'label', label: 'Label', icon: 'Aa', section: 'mark' },
      { action: 'bind', bindKey: 'markSizeZ', label: 'Z', icon: '⊙', section: 'mark' },
      { action: 'bind', bindKey: 'markSizeY', label: 'Y', icon: '↕', section: 'mark' },
      { action: 'bind', bindKey: 'markSizeX', label: 'X', icon: '↔', section: 'mark' },
    )
    if (level >= 2) {
      colOpts.push(
        { action: 'bind', bindKey: 'scatterSize',  label: 'Scatter',  icon: '⊞', section: 'collection' },
        { action: 'bind', bindKey: 'c1AlignCount', label: 'Count L1', icon: '#',  section: 'collection' },
      )
      if (level >= 3) {
        colOpts.push(
          { action: 'bind', bindKey: 'c2AlignCount', label: 'Count L2', icon: '#', section: 'collection' },
        )
      }
    }
  }

  const markPos = arcPositions(markOpts.length, 180, 100, RADIUS)
  const colPos  = arcPositions(colOpts.length,  0,   90,  RADIUS)

  const allItems = [
    ...markOpts.map((o, i) => ({ opt: o, pos: markPos[i] })),
    ...colOpts.map((o, i)  => ({ opt: o, pos: colPos[i]  })),
  ]

  function handleSelect(opt: MenuOption) {
    if (opt.action === 'bind') {
      onBind(opt.bindKey, varName)
    } else {
      onBindLabel(opt.section, varName)
    }
    onClose()
  }

  const hasCollection = colOpts.length > 0

  return (
    <>
      {/* Click-away backdrop */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }} onClick={onClose} />

      {/* Menu root — zero-size anchor at drop point */}
      <div style={{
        position: 'fixed', left: x, top: y,
        transform: 'translate(-50%, -50%)',
        width: 0, height: 0,
        zIndex: 1001, pointerEvents: 'none',
      }}>

        {/* Divider line between Mark / Collection */}
        {hasCollection && (
          <div style={{
            position: 'absolute',
            left: 0, top: -(RADIUS + 16),
            width: '1px', height: (RADIUS + 16) * 2,
            background: '#E5E5EA',
            transform: 'translateX(-50%)',
          }} />
        )}

        {/* Section labels — flanking center */}
        <div style={{
          position: 'absolute', left: -6, top: -22,
          fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#007AFF',
          whiteSpace: 'nowrap', textAlign: 'right',
          transform: 'translateX(-100%)',
        }}>
          Mark
        </div>

        {hasCollection && (
          <div style={{
            position: 'absolute', left: 6, top: -22,
            fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#5E5CE6',
            whiteSpace: 'nowrap',
          }}>
            Collection
          </div>
        )}

        {/* Center pip */}
        <div style={{
          position: 'absolute',
          width: 10, height: 10,
          background: '#1D1D1F', borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }} />

        {/* Option buttons */}
        {allItems.map(({ opt, pos }, i) => {
          const isCollection = opt.section === 'collection'
          const accent = isCollection ? '#5E5CE6' : '#007AFF'
          return (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              style={{
                position: 'absolute',
                left: pos.x, top: pos.y,
                transform: 'translate(-50%, -50%)',
                width: BTN, height: BTN,
                background: '#fff',
                border: `2px solid ${accent}`,
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '1px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.16)',
                pointerEvents: 'all',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translate(-50%, -50%) scale(1.13)'
                el.style.boxShadow = `0 6px 20px rgba(0,0,0,0.22)`
                el.style.background = isCollection ? '#F3EBFF' : '#EBF3FF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translate(-50%, -50%)'
                el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.16)'
                el.style.background = '#fff'
              }}
            >
              <span style={{ fontSize: '14px', color: accent, lineHeight: 1 }}>{opt.icon}</span>
              <span style={{ fontSize: '8px', color: '#6C6C70', fontWeight: '600', lineHeight: 1.2, textAlign: 'center' }}>
                {opt.label}
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}
