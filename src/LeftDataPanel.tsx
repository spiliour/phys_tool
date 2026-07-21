import { LayerData } from './types'

interface LeftDataPanelProps {
  layers:           LayerData[]
  onChange:         (layers: LayerData[]) => void
  onDatasetChange?: (key: string) => void
  selectedDataset?: string
}

// ── Preset datasets ───────────────────────────────────────────────────────────

const DATASETS: Record<string, {
  label:           string
  categoricalCol:  string
  numericalCol:    string
  layers:          LayerData[]
}> = {
  garbageInOcean: {
    label:          'Garbage in the Ocean',
    categoricalCol: 'Garbage Type',
    numericalCol:   'Weight',
    layers: [
      { id: '1', name: 'Microplastics',    percentage: 40, color: '#aaaaaa' },
      { id: '2', name: 'Synthetic Fibres', percentage: 35, color: '#3355cc' },
      { id: '3', name: 'Tyre Abrasion',    percentage: 28, color: '#bbbb33' },
      { id: '4', name: 'City Dust',        percentage: 24, color: '#cc4422' },
      { id: '5', name: 'Road Markings',    percentage:  7, color: '#2233aa' },
    ],
  },
  mahler: {
    label:          "Mahler's Symphony No. 8 Orchestra",
    categoricalCol: 'Orchestra Section',
    numericalCol:   'Number of Instruments',
    layers: [
      { id: '1', name: 'Strings',      percentage: 80, color: '#C8A882' },
      { id: '2', name: 'Brass',        percentage: 28, color: '#D4A017' },
      { id: '3', name: 'Woodwinds',    percentage: 20, color: '#4A7C59' },
      { id: '4', name: 'Percussion',   percentage: 10, color: '#5C6B7A' },
      { id: '5', name: 'Piano & Harp', percentage:  4, color: '#8B7BAB' },
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
  const mime = `phys-var/${type}`

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
        background: '#F2F2F7', border: '1px solid #D1D1D6',
        borderRadius: '7px', padding: '6px 10px',
        fontSize: '11px', color: '#1D1D1F', fontWeight: '600',
        cursor: 'grab', userSelect: 'none', whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '10px', color: '#8E8E93' }}>{type === 'numerical' ? '#' : '◈'}</span>
      {label}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function LeftDataPanel({ layers, onChange, onDatasetChange, selectedDataset = 'garbageInOcean' }: LeftDataPanelProps) {
  function handleDatasetChange(key: string) {
    onChange(DATASETS[key].layers)
    onDatasetChange?.(key)
  }

  const ds = DATASETS[selectedDataset] ?? DATASETS.garbageInOcean

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
          value={selectedDataset}
          onChange={(e) => handleDatasetChange(e.target.value)}
          style={{
            background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px',
            color: '#1D1D1F', fontSize: '13px', padding: '7px 10px',
            fontFamily: 'inherit', cursor: 'pointer', outline: 'none', width: '100%',
          }}
        >
          {Object.entries(DATASETS).map(([key, d]) => (
            <option key={key} value={key}>{d.label}</option>
          ))}
        </select>
      </div>

      {/* Read-only data table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #E5E5EA' }}>
            <th style={{ ...cell, textAlign: 'left', color: '#8E8E93', fontWeight: '500', fontSize: '11px' }}>{ds.categoricalCol}</th>
            <th style={{ ...cell, textAlign: 'right', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '60px' }}>{ds.numericalCol}</th>
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
