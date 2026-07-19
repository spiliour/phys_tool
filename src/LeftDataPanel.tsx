import { useState } from 'react'
import { LayerData } from './types'

interface LeftDataPanelProps {
  layers:   LayerData[]
  onChange: (layers: LayerData[]) => void
}

// ── Preset datasets ───────────────────────────────────────────────────────────

const DATASETS: Record<string, { label: string; layers: LayerData[] }> = {
  plasticPollution: {
    label: 'Plastic Pollution',
    layers: [
      { id: '1', name: 'Microplastics',    percentage: 40, color: '#aaaaaa' },
      { id: '2', name: 'Synthetic Fibres', percentage: 35, color: '#3355cc' },
      { id: '3', name: 'Tyre Abrasion',    percentage: 28, color: '#bbbb33' },
      { id: '4', name: 'City Dust',        percentage: 24, color: '#cc4422' },
      { id: '5', name: 'Road Markings',    percentage:  7, color: '#2233aa' },
    ],
  },
  oceanDebris: {
    label: 'Ocean Debris',
    layers: [
      { id: '1', name: 'Fishing Nets',    percentage: 46, color: '#aaaaaa' },
      { id: '2', name: 'Plastic Bags',    percentage: 31, color: '#3355cc' },
      { id: '3', name: 'Bottles',         percentage: 27, color: '#bbbb33' },
      { id: '4', name: 'Food Packaging',  percentage: 19, color: '#cc4422' },
      { id: '5', name: 'Cigarette Butts', percentage: 12, color: '#2233aa' },
    ],
  },
  municipalWaste: {
    label: 'Municipal Waste',
    layers: [
      { id: '1', name: 'Organic', percentage: 44, color: '#aaaaaa' },
      { id: '2', name: 'Paper',   percentage: 17, color: '#3355cc' },
      { id: '3', name: 'Plastic', percentage: 12, color: '#bbbb33' },
      { id: '4', name: 'Glass',   percentage:  8, color: '#cc4422' },
      { id: '5', name: 'Metal',   percentage:  5, color: '#2233aa' },
    ],
  },
}

// ── Draggable variable chip ───────────────────────────────────────────────────

interface VarChipProps {
  label:   string
  type:    'numerical' | 'categorical'
  varName: string
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
        cursor: 'grab', userSelect: 'none', whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '10px', opacity: 0.7 }}>{isNum ? '#' : '◈'}</span>
      {label}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function LeftDataPanel({ layers, onChange }: LeftDataPanelProps) {
  const [selectedKey, setSelectedKey] = useState<string>('plasticPollution')

  function handleDatasetChange(key: string) {
    setSelectedKey(key)
    onChange(DATASETS[key].layers)
  }

  const cell: React.CSSProperties = {
    padding: '6px 8px', verticalAlign: 'middle',
    fontSize: '12px', color: '#1D1D1F',
  }

  return (
    <div style={{ padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Dataset selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={{ fontSize: '10px', color: '#AEAEB2', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
          Dataset
        </span>
        <select
          value={selectedKey}
          onChange={(e) => handleDatasetChange(e.target.value)}
          style={{
            background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px',
            color: '#1D1D1F', fontSize: '13px', padding: '7px 10px',
            fontFamily: 'inherit', cursor: 'pointer', outline: 'none', width: '100%',
          }}
        >
          {Object.entries(DATASETS).map(([key, ds]) => (
            <option key={key} value={key}>{ds.label}</option>
          ))}
        </select>
      </div>

      {/* Read-only data table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #E5E5EA' }}>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px' }}>Garbage Type</th>
            <th style={{ ...cell, textAlign: 'right', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '60px' }}>Weight</th>
          </tr>
        </thead>
        <tbody>
          {layers.map((layer, i) => (
            <tr
              key={layer.id}
              style={{ borderBottom: '1px solid #F2F2F7', background: i % 2 === 0 ? 'transparent' : '#FAFAFA' }}
            >
              <td style={cell}>{layer.name}</td>
              <td style={{ ...cell, textAlign: 'right', color: '#6C6C70' }}>{layer.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
