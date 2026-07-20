import React, { useEffect, useState } from 'react'
import { DataBindings, DataVariable, CompositionLevel, LabelSlots } from './types'

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
  x:            number
  y:            number
  varName:      DataVariable
  varType:      'numerical' | 'categorical'
  level:        CompositionLevel
  onBind:       (attr: keyof DataBindings, variable: DataVariable) => void
  onColorBind:  (variable: DataVariable, mode: 'distinct' | 'continuous') => void
  onBindLabel:  (section: 'mark' | 'collection', variable: DataVariable, position: keyof LabelSlots) => void
  onClose:      () => void
}

// ── Sub-step card ─────────────────────────────────────────────────────────────

const cardStyle: React.CSSProperties = {
  position: 'fixed',
  background: '#fff',
  borderRadius: '14px',
  boxShadow: '0 6px 28px rgba(0,0,0,0.22)',
  padding: '12px 14px',
  zIndex: 1002,
  pointerEvents: 'all',
  minWidth: '150px',
}

const subBtnBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '8px',
  width: '100%', textAlign: 'left',
  background: '#F2F2F7', border: '1px solid #E5E5EA',
  borderRadius: '8px', padding: '8px 12px',
  fontSize: '12px', fontWeight: '500', color: '#1D1D1F',
  cursor: 'pointer', fontFamily: 'inherit',
  transition: 'background 0.12s',
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '10px', color: '#AEAEB2', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
      {children}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function RadialBindMenu({
  x, y, varName, varType, level, onBind, onColorBind, onBindLabel, onClose,
}: RadialBindMenuProps) {

  type Step = 'radial' | 'colorMode' | 'labelPos'
  const [step, setStep] = useState<Step>('radial')
  const [pendingSection, setPendingSection] = useState<'mark' | 'collection'>('mark')

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (step !== 'radial') setStep('radial')
        else onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, onClose])

  // Build option lists.
  // Mark arc: index 0 = lower-left (last in top-to-bottom reading) → push Label first.
  // Col1 arc: index n-1 = lower-right (last in reading) → push Label last.
  const markOpts: MenuOption[] = []
  const col1Opts: MenuOption[] = []  // L2 collection
  const col2Opts: MenuOption[] = []  // L3 collection (level 3 only, Count only)

  if (varType === 'categorical') {
    markOpts.push(
      { action: 'label', label: 'Label', icon: 'Aa', section: 'mark' },
      { action: 'bind',  bindKey: 'markColor', label: 'Color', icon: '●', section: 'mark' },
    )
  } else {
    markOpts.push(
      { action: 'label', label: 'Label', icon: 'Aa', section: 'mark' },
      { action: 'bind',  bindKey: 'markSizeZ', label: 'Z', icon: '⊙', section: 'mark' },
      { action: 'bind',  bindKey: 'markSizeY', label: 'Y', icon: '↕', section: 'mark' },
      { action: 'bind',  bindKey: 'markSizeX', label: 'X', icon: '↔', section: 'mark' },
    )
  }

  if (level >= 2) {
    col1Opts.push(
      { action: 'bind',  bindKey: 'scatterSize',  label: 'Scatter', icon: '⊞', section: 'collection' },
      { action: 'bind',  bindKey: 'c1AlignCount', label: 'Count',   icon: '#',  section: 'collection' },
      { action: 'label', label: 'Label', icon: 'Aa', section: 'collection' },
    )
  }

  if (level >= 3) {
    // Lv3 only has Count — no Label
    col2Opts.push(
      { action: 'bind', bindKey: 'c2AlignCount', label: 'Count', icon: '#', section: 'collection' },
    )
  }

  // Arc placement
  // Level 3: col1 at smaller radius so topmost button (−55°, r=80) stays well below the label
  const R3 = 64
  const markPos = arcPositions(markOpts.length, 180, 100, RADIUS)
  const col1Pos = level < 3
    ? arcPositions(col1Opts.length,   0, 90, RADIUS)  // level 2: right half
    : arcPositions(col1Opts.length, -30, 50, 80)      // level 3: upper-right, −55° to −5°
  const col2Pos = arcPositions(col2Opts.length, 25, 40, R3)  // lower-right single button

  const allItems = [
    ...markOpts.map((o, i) => ({ opt: o, pos: markPos[i] })),
    ...col1Opts.map((o, i) => ({ opt: o, pos: col1Pos[i] })),
    ...col2Opts.map((o, i) => ({ opt: o, pos: col2Pos[i] })),
  ]

  function handleSelect(opt: MenuOption) {
    if (opt.action === 'bind' && opt.bindKey === 'markColor') {
      setPendingSection('mark')
      setStep('colorMode')
      return
    }
    if (opt.action === 'label') {
      setPendingSection(opt.section)
      setStep('labelPos')
      return
    }
    if (opt.action === 'bind') {
      onBind(opt.bindKey, varName)
    }
    onClose()
  }

  const hasCollection = col1Opts.length > 0
  const hasCol2       = col2Opts.length > 0

  // ── Sub-step: Color mode card ──────────────────────────────────────────────

  if (step === 'colorMode') {
    return (
      <>
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }} onClick={() => setStep('radial')} />
        <div style={{ ...cardStyle, left: x - 75, top: y - 70 }}>
          <CardHeader>Color mode</CardHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <button
              style={subBtnBase}
              onClick={() => { onColorBind(varName, 'distinct'); onClose() }}
              onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
              onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
            >
              <span style={{ fontSize: '14px' }}>◈</span> Distinct
            </button>
            <button
              style={subBtnBase}
              onClick={() => { onColorBind(varName, 'continuous'); onClose() }}
              onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
              onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
            >
              <span style={{ fontSize: '14px' }}>▬</span> Continuous
            </button>
          </div>
        </div>
      </>
    )
  }

  // ── Sub-step: Label position card ─────────────────────────────────────────

  if (step === 'labelPos') {
    const btnStyle: React.CSSProperties = {
      ...subBtnBase,
      justifyContent: 'center',
      width: '88px', height: '34px',
      padding: '0 8px',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }
    const posBtn = (key: keyof LabelSlots, icon: string, label: string) => (
      <button
        key={key}
        style={btnStyle}
        onClick={() => { onBindLabel(pendingSection, varName, key); onClose() }}
        onMouseEnter={e => (e.currentTarget.style.background = '#E5E5EA')}
        onMouseLeave={e => (e.currentTarget.style.background = '#F2F2F7')}
      >
        {icon} {label}
      </button>
    )
    return (
      <>
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }} onClick={() => setStep('radial')} />
        <div style={{ ...cardStyle, left: x - 100, top: y - 110 }}>
          <CardHeader>Label position</CardHeader>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            {posBtn('top', '↑', 'Top')}
            <div style={{ display: 'flex', gap: '4px' }}>
              {posBtn('left',  '←', 'Left')}
              {posBtn('right', '→', 'Right')}
            </div>
            {posBtn('bottom', '↓', 'Bottom')}
          </div>
        </div>
      </>
    )
  }

  // ── Main radial menu ──────────────────────────────────────────────────────

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

        {/* Vertical divider: Mark | Collection */}
        {hasCollection && (
          <div style={{
            position: 'absolute', left: 0, top: -(RADIUS + 20),
            width: '1px', height: (RADIUS + 20) * 2,
            background: '#E5E5EA', transform: 'translateX(-50%)',
          }} />
        )}

        {/* Horizontal divider: Col Lv2 | Col Lv3 (right side only) */}
        {hasCol2 && (
          <div style={{
            position: 'absolute', left: 2, top: 0,
            width: RADIUS + 24, height: '1px',
            background: '#E5E5EA',
          }} />
        )}

        {/* Section label: Mark */}
        <div style={{
          position: 'absolute', left: -8, top: -10,
          fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#007AFF',
          whiteSpace: 'nowrap', textAlign: 'right',
          transform: 'translateX(-100%)',
        }}>
          Mark
        </div>

        {/* Section label: Collection / Collection Lv2 */}
        {hasCollection && (
          <div style={{
            position: 'absolute',
            left: 8, top: hasCol2 ? -(RADIUS + 16) : -10,
            fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#5E5CE6', whiteSpace: 'nowrap',
          }}>
            {hasCol2 ? 'Collection Lv2' : 'Collection'}
          </div>
        )}

        {/* Section label: Lv3 */}
        {hasCol2 && (
          <div style={{
            position: 'absolute', left: 8, top: 8,
            fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#9D9BF4', whiteSpace: 'nowrap',
          }}>
            Lv3
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
