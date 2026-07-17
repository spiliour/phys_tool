import { useState } from 'react'
import { LayerData } from './types'

interface LeftDataPanelProps {
  layers:   LayerData[]
  onChange: (layers: LayerData[]) => void
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const DEFAULT_COLORS = [
  '#b0b0b0', '#4466dd', '#cccc44', '#cc5533',
  '#3344aa', '#44aa66', '#aa44cc', '#44aaaa',
]

let _nextId = 100
function nextId() { return String(_nextId++) }

const cell: React.CSSProperties = { padding: '4px 5px', verticalAlign: 'middle' }

const inputBase: React.CSSProperties = {
  background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '6px',
  color: '#1D1D1F', fontSize: '12px', padding: '3px 6px',
  outline: 'none', width: '100%', fontFamily: 'inherit',
}

const iconBtn: React.CSSProperties = {
  background: '#F2F2F7', border: '1px solid #D1D1D6', color: '#6C6C70',
  cursor: 'pointer', borderRadius: '5px', padding: '2px 6px',
  fontSize: '11px', lineHeight: '1.4', fontFamily: 'inherit',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '10px', color: '#AEAEB2',
      textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600',
    }}>
      {children}
    </span>
  )
}

// ── Draggable variable chip ───────────────────────────────────────────────────

interface VarChipProps {
  label:    string
  type:     'numerical' | 'categorical'
  varName:  string
}

export function VarChip({ label, type, varName }: VarChipProps) {
  const isNum  = type === 'numerical'
  const accent = isNum ? '#007AFF' : '#5E5CE6'
  const bg     = isNum ? '#EBF3FF' : '#F3EBFF'
  const border = isNum ? '#A8CAFF' : '#C8A8FF'
  const mime   = `phys-var/${type}`

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('phys-var/name', varName)
        e.dataTransfer.setData(mime, '1')
        e.dataTransfer.effectAllowed = 'copy'
      }}
      title={`Drag to bind ${label}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        background: bg, border: `1px solid ${border}`,
        borderRadius: '7px', padding: '6px 10px',
        fontSize: '11px', color: accent, fontWeight: '600',
        cursor: 'grab', userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '10px', opacity: 0.7 }}>{isNum ? '#' : '◈'}</span>
      {label}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function LeftDataPanel({ layers, onChange }: LeftDataPanelProps) {

  function update(id: string, field: keyof LayerData, value: string | number) {
    onChange(layers.map((l) => (l.id === id ? { ...l, [field]: value } : l)))
  }

  function addLayer() {
    onChange([...layers, {
      id: nextId(),
      name: `Layer ${layers.length + 1}`,
      percentage: 10,
      color: DEFAULT_COLORS[layers.length % DEFAULT_COLORS.length],
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
      padding: '14px 14px 10px', color: '#1D1D1F', fontSize: '13px',
      display: 'flex', flexDirection: 'column', gap: '10px',
    }}>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #E5E5EA' }}>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px' }}>Name</th>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '46px' }}>Wt</th>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '30px' }}>Col</th>
            <th style={{ width: '52px' }} />
          </tr>
        </thead>
        <tbody>
          {layers.map((layer, i) => (
            <tr
              key={layer.id}
              style={{ borderBottom: '1px solid #F2F2F7', background: i % 2 === 0 ? 'transparent' : '#FAFAFA' }}
            >
              <td style={cell}>
                <input
                  type="text"
                  value={layer.name}
                  onChange={(e) => update(layer.id, 'name', e.target.value)}
                  style={inputBase}
                />
              </td>
              <td style={cell}>
                <input
                  type="number"
                  min={0} max={9999} step={1}
                  value={layer.percentage}
                  onChange={(e) => update(layer.id, 'percentage', Number(e.target.value))}
                  style={{ ...inputBase, width: '40px' }}
                />
              </td>
              <td style={cell}>
                <input
                  type="color"
                  value={layer.color}
                  onChange={(e) => update(layer.id, 'color', e.target.value)}
                  style={{
                    width: '26px', height: '24px',
                    border: '1px solid #D1D1D6', borderRadius: '4px',
                    background: 'none', cursor: 'pointer', padding: '1px',
                  }}
                />
              </td>
              <td style={{ ...cell, textAlign: 'right' }}>
                <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end' }}>
                  <button onClick={() => moveTowardTop(i)}    disabled={i === 0}                    title="Move up"   style={iconBtn}>↑</button>
                  <button onClick={() => moveTowardBottom(i)} disabled={i === layers.length - 1}    title="Move down" style={iconBtn}>↓</button>
                  <button onClick={() => removeLayer(layer.id)} disabled={layers.length <= 1}       title="Remove"    style={{ ...iconBtn, color: '#FF3B30' }}>×</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addLayer}
        style={{
          background: '#F2F2F7', border: '1px solid #D1D1D6', color: '#6C6C70',
          cursor: 'pointer', borderRadius: '8px', padding: '6px 12px',
          fontSize: '12px', fontWeight: '500', alignSelf: 'flex-start',
          fontFamily: 'inherit',
        }}
      >
        + Add Layer
      </button>

    </div>
  )
}
