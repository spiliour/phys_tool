import { useState, useEffect, useRef, useMemo } from 'react'
import { LayerData } from './types'
import { MODEL_COLLECTION_NAMES, collectionLabel, MASTER_COLLECTION } from './models'

interface LeftDataPanelProps {
  layers:               LayerData[]
  onChange:             (layers: LayerData[]) => void
  onDatasetChange?:     (key: string) => void
  selectedDataset?:     string
  modelCollection?:     string
  onModelCollectionChange?: (c: string) => void
}

// A dataset may carry a reference — a title, an image and a source link. Images
// live in public/assets/references/.
export interface DatasetReference { title: string; image: string; link: string }

const REF_ASSET_BASE = import.meta.env.BASE_URL + 'assets/references/'
/** Resolve a stored image (bare filename → references folder; full URL → as-is). */
function refImageSrc(image: string) {
  return /^(https?:)?\/\//.test(image) || image.startsWith('/') ? image : REF_ASSET_BASE + image
}

// ── Preset datasets ───────────────────────────────────────────────────────────

const DATASETS: Record<string, {
  label:           string
  categoricalCol:  string
  numericalCol:    string
  layers:          LayerData[]
  reference?:      DatasetReference
  modelCollection?: string   // auto-selected model collection for this dataset
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
    modelCollection: 'malhers orchestra',
    layers: [
      { id: '1', name: 'Strings',      percentage: 80, color: '#C8A882' },
      { id: '2', name: 'Brass',        percentage: 28, color: '#D4A017' },
      { id: '3', name: 'Woodwinds',    percentage: 20, color: '#4A7C59' },
      { id: '4', name: 'Percussion',   percentage: 10, color: '#5C6B7A' },
      { id: '5', name: 'Piano & Harp', percentage:  4, color: '#8B7BAB' },
    ],
    reference: {
      title: "Mahler's Symphony No. 8 Orchestra",
      image: 'malher.png',
      link:  'https://www.mahlerfoundation.org/mahler/compositions/symphony-no-8/symphony-no-8-orchestration/',
    },
  },
  co2Emissions: {
    label:          'CO₂ Emissions by Country',
    categoricalCol: 'Country',
    numericalCol:   'CO₂ Emissions (Mt)',
    modelCollection: 'CO2',
    layers: [
      { id: '1',  name: 'Germany',        percentage: 572.32, color: '#E63946' },
      { id: '2',  name: 'Canada',         percentage: 533.34, color: '#F4A261' },
      { id: '3',  name: 'Turkey',         percentage: 513.03, color: '#E9C46A' },
      { id: '4',  name: 'Brazil',         percentage: 483.01, color: '#2A9D8F' },
      { id: '5',  name: 'South Africa',   percentage: 439.83, color: '#264653' },
      { id: '6',  name: 'Australia',      percentage: 386.73, color: '#E76F51' },
      { id: '7',  name: 'Vietnam',        percentage: 370.93, color: '#8AB17D' },
      { id: '8',  name: 'United Kingdom', percentage: 312.91, color: '#457B9D' },
      { id: '9',  name: 'France',         percentage: 264.16, color: '#6A4C93' },
      { id: '10', name: 'Qatar',          percentage: 125.81, color: '#B5838D' },
      { id: '11', name: 'Greece',         percentage:  53.36, color: '#1D3557' },
      { id: '12', name: 'Denmark',        percentage:  24.40, color: '#A8DADC' },
    ],
    reference: {
      title: 'Annual CO₂ emissions 2024',
      image: '',
      link:  'https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL&tab=map&time=latest',
    },
  },
  mushroomToxicity: {
    label:          'Mushroom danger score',
    categoricalCol: 'Name',
    numericalCol:   'Danger Score',
    modelCollection: 'mushrooms',
    layers: [
      { id: '1',  name: 'Amanita phalloides',       percentage: 10, color: '#7C8C4E' },
      { id: '2',  name: 'Amanita virosa',    percentage: 10, color: '#F0ECE0' },
      { id: '3',  name: 'Galerina marginata',    percentage:  9, color: '#6B4E31' },
      { id: '4',  name: 'Cortinarius rubellus', percentage:  8, color: '#A0522D' },
      { id: '5',  name: 'Gyromitra esculenta',    percentage:  6, color: '#8B4A2F' },
      { id: '6',  name: 'Amanita pantherina',     percentage:  5, color: '#C2A878' },
      { id: '7',  name: 'Amanita muscaria',        percentage:  3, color: '#D62828' },
      { id: '8',  name: 'Rubroboletus satanas', percentage:  4, color: '#C77B7B' },
      { id: '9',  name: 'Omphalotus olearius', percentage:  4, color: '#E68A00' },
      { id: '10', name: 'Clitocybe dealbata',    percentage:  7, color: '#E4DAC4' },
      { id: '11', name: 'Clitocybe rivulosa',   percentage:  7, color: '#CFC8B8' },
      { id: '12', name: 'Russula emetica',       percentage:  2, color: '#E0455E' },
    ],
    reference: {
      title: 'Mushroom Danger Score',
      image: '',
      link:  'https://namyco.org/interests/toxicology/mushroom-poisoning-syndromes/',
    },
  },
  oceanPlastic: {
    label:          "Surface Plastic Mass across the world's Oceans",
    categoricalCol: 'Ocean',
    numericalCol:   'Plastic Pieces (billions)',
    modelCollection: 'sea pollution',
    layers: [
      { id: '1', name: 'North Pacific',     percentage: 1990, color: '#023E8A' },
      { id: '2', name: 'Indian Ocean',      percentage: 1300, color: '#0077B6' },
      { id: '3', name: 'North Atlantic',    percentage:  930, color: '#0096C7' },
      { id: '4', name: 'South Pacific',     percentage:  491, color: '#00B4D8' },
      { id: '5', name: 'Mediterranean Sea', percentage:  247, color: '#48CAE4' },
      { id: '6', name: 'South Atlantic',    percentage:  297, color: '#90E0EF' },
    ],
    reference: {
      title: "Surface Plastic Mass across the world's Oceans",
      image: '',
      link:  'https://ourworldindata.org/grapher/surface-plastic-mass-by-ocean',
    },
  },
  nantesHousing: {
    label:          'Nantes Metropolitan Area Housing',
    categoricalCol: 'Tenure Type',
    numericalCol:   'Share (%)',
    modelCollection: 'nantes logements',
    layers: [
      { id: '1', name: 'Homeowners',                     percentage: 52.2, color: '#E76F51' },
      { id: '2', name: 'Private-sector tenants',         percentage: 28.0, color: '#2A9D8F' },
      { id: '3', name: 'Social housing tenants (SRU law)', percentage: 17.5, color: '#457B9D' },
    ],
    reference: {
      title: 'Nantes Metropolitan Area — 298,700 housing units',
      image: 'nantes-housing.png',
      link:  'http://rokovoko.fr/realisations/la-cantine',
    },
  },
  whoAirQuality: {
    label:          'WHO Ambient Air Quality Database',
    categoricalCol: 'City',
    numericalCol:   'Pollution concentration (PM2.5)',
    modelCollection: 'Air Pollution',
    // Colours follow air-quality severity: clean green → hazardous maroon, by value.
    layers: [
      { id: '1',  name: 'Copenhagen',  percentage:  9, color: '#43A047' },
      { id: '2',  name: 'Stockholm',   percentage:  8, color: '#2E7D32' },
      { id: '3',  name: 'Paris',       percentage: 14, color: '#C0CA33' },
      { id: '4',  name: 'London',      percentage: 13, color: '#9CCC3C' },
      { id: '5',  name: 'Berlin',      percentage: 12, color: '#7CB342' },
      { id: '6',  name: 'Athens',      percentage: 22, color: '#FBC02D' },
      { id: '7',  name: 'Istanbul',    percentage: 41, color: '#F4511E' },
      { id: '8',  name: 'Mexico City', percentage: 24, color: '#FB8C00' },
      { id: '9',  name: 'São Paulo',   percentage: 19, color: '#FDD835' },
      { id: '10', name: 'Beijing',     percentage: 55, color: '#E53935' },
      { id: '11', name: 'Delhi',       percentage: 92, color: '#8E0000' },
      { id: '12', name: 'Cairo',       percentage: 67, color: '#C62828' },
    ],
    reference: {
      title: 'WHO Ambient Air Quality Database, annual mean PM2.5 (µg/m³)',
      image: 'city.png',
      link:  'https://www.who.int/data/gho/data/themes/air-pollution/who-air-quality-database',
    },
  },
}

// ── Dataset reference card ────────────────────────────────────────────────────
// Extra info about the loaded dataset: a title, a reference image and a link.

// Shows the reference image only if it actually loads. Tracking failure in state
// (reset when the src changes) means a missing image for one dataset never leaves
// a later dataset's valid image hidden.
function RefImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  useEffect(() => { setOk(true) }, [src])
  if (!ok) return null
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setOk(false)}
      style={{ width: '100%', borderRadius: '8px', display: 'block', background: '#F2F2F7', border: '1px solid #E5E5EA' }}
    />
  )
}

export function DatasetReferenceCard({ datasetKey }: { datasetKey: string }) {
  const ref = DATASETS[datasetKey]?.reference
  if (!ref) return null
  return (
    <div style={{
      borderTop: '1px solid #E5E5EA', padding: '14px', flexShrink: 0,
      maxHeight: '46%', overflowY: 'auto',
      display: 'flex', flexDirection: 'column', gap: '8px',
    }}>
      <span style={{ fontSize: '10px', color: '#AEAEB2', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
        About this dataset
      </span>
      <div style={{ fontSize: '13px', fontWeight: '600', color: '#1D1D1F', lineHeight: 1.3 }}>
        {ref.title}
      </div>
      {ref.image && <RefImage src={refImageSrc(ref.image)} alt={ref.title} />}
      {ref.link && (
        <a
          href={ref.link}
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: '11px', color: '#007AFF', textDecoration: 'none', wordBreak: 'break-all', lineHeight: 1.5 }}
        >
          {ref.link} ↗
        </a>
      )}
    </div>
  )
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
        borderRadius: '7px', padding: '6px 11px',
        fontSize: '12.5px', color: '#1D1D1F', fontWeight: '600',
        cursor: 'grab', userSelect: 'none', whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '10px', color: '#8E8E93', fontWeight: '700' }}>{type === 'numerical' ? '#' : 'Aa'}</span>
      {label}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

/** The model collection a dataset auto-loads (master if it doesn't specify one). */
export function datasetModelCollection(key: string): string {
  return DATASETS[key]?.modelCollection ?? MASTER_COLLECTION
}

export function LeftDataPanel({ layers, onChange, onDatasetChange, selectedDataset = 'garbageInOcean', modelCollection = MASTER_COLLECTION, onModelCollectionChange }: LeftDataPanelProps) {
  const ds = DATASETS[selectedDataset] ?? DATASETS.garbageInOcean

  // The full row list for this dataset, plus any active rows that aren't part of
  // it (e.g. a loaded preset's custom layers) so nothing on screen is lost.
  const fullRows = useMemo(() => {
    const dsRows = DATASETS[selectedDataset]?.layers ?? []
    const extra  = layers.filter(l => !dsRows.some(r => r.id === l.id))
    return dsRows.length ? [...dsRows, ...extra] : layers
  }, [selectedDataset, layers])
  const total = fullRows.length

  // Which rows are currently in use (drive the visualization).
  const selectedIds = useMemo(() => new Set(layers.map(l => l.id)), [layers])

  const wrapRef = useRef<HTMLDivElement>(null)
  const [preview,  setPreview]  = useState<Set<string> | null>(null)  // live selection while dragging
  const [dragRect, setDragRect] = useState<{ top: number; height: number } | null>(null)

  // Emit the subset of full rows whose ids are selected (keeps dataset order).
  // Never commit an empty set — the scene always keeps at least one row.
  const commit = (ids: Set<string>) => {
    if (ids.size === 0) return
    onChange(fullRows.filter(r => ids.has(r.id)))
  }

  function handleDatasetChange(key: string) {
    onChange(DATASETS[key].layers)   // new dataset starts with every row in use
    onDatasetChange?.(key)
    // Auto-load the dataset's matching model collection (the user can still
    // override afterwards via the Models dropdown).
    onModelCollectionChange?.(DATASETS[key].modelCollection ?? MASTER_COLLECTION)
  }

  const setTopN = (n: number) => commit(new Set(fullRows.slice(0, n).map(r => r.id)))

  // Ids of rows whose vertical band overlaps the client-Y range [a, b].
  const rowsBetween = (a: number, b: number): Set<string> => {
    const top = Math.min(a, b), bot = Math.max(a, b)
    const ids = new Set<string>()
    wrapRef.current?.querySelectorAll<HTMLElement>('[data-rowid]').forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.bottom >= top && r.top <= bot) ids.add(el.dataset.rowid!)
    })
    return ids
  }

  // Mouse-down on the table starts a rubber-band selection; a click with no drag
  // toggles the single row under the cursor.
  const beginDrag = (e: React.MouseEvent) => {
    const startY = e.clientY
    let moved = false
    setPreview(rowsBetween(startY, startY))
    const move = (ev: MouseEvent) => {
      if (Math.abs(ev.clientY - startY) > 4) moved = true
      setPreview(rowsBetween(startY, ev.clientY))
      const w = wrapRef.current
      if (w) {
        const r = w.getBoundingClientRect()
        setDragRect({ top: Math.min(startY, ev.clientY) - r.top, height: Math.abs(ev.clientY - startY) })
      }
    }
    const up = (ev: MouseEvent) => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      if (moved) {
        commit(rowsBetween(startY, ev.clientY))
      } else {
        const next = new Set(selectedIds)
        rowsBetween(ev.clientY, ev.clientY).forEach(id => (next.has(id) ? next.delete(id) : next.add(id)))
        commit(next)
      }
      setPreview(null); setDragRect(null)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    e.preventDefault()
  }

  const active = preview ?? selectedIds
  const cell: React.CSSProperties = { padding: '6px 8px', verticalAlign: 'middle', fontSize: '12px', color: '#1D1D1F' }
  const capLabel: React.CSSProperties = { fontSize: '10px', color: '#AEAEB2', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }

  return (
    <div style={{ padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Dataset selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={capLabel}>Dataset</span>
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

      {/* Model collection selector — auto-set by the dataset, freely overridable */}
      {MODEL_COLLECTION_NAMES.length > 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={capLabel}>Models</span>
          <select
            value={MODEL_COLLECTION_NAMES.includes(modelCollection) ? modelCollection : MASTER_COLLECTION}
            onChange={(e) => onModelCollectionChange?.(e.target.value)}
            style={{
              background: '#F2F2F7', border: '1px solid #D1D1D6', borderRadius: '8px',
              color: '#1D1D1F', fontSize: '13px', padding: '7px 10px',
              fontFamily: 'inherit', cursor: 'pointer', outline: 'none', width: '100%',
            }}
          >
            {MODEL_COLLECTION_NAMES.map(name => (
              <option key={name} value={name}>{collectionLabel(name)}</option>
            ))}
          </select>
        </div>
      )}

      {/* Row-count control (use the first N rows) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={capLabel}>Rows used</span>
          <span style={{ fontSize: '12px', color: '#6C6C70', fontWeight: '600' }}>{selectedIds.size} / {total}</span>
        </div>
        <input
          type="range" min={1} max={Math.max(1, total)} value={Math.min(selectedIds.size || 1, total)}
          onChange={(e) => setTopN(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#007AFF', cursor: 'pointer' }}
        />
      </div>

      {/* Interactive data table with rubber-band row selection */}
      <div ref={wrapRef} onMouseDown={beginDrag} style={{ position: 'relative', userSelect: 'none', cursor: 'crosshair' }}>
        {dragRect && (
          <div style={{
            position: 'absolute', left: 0, right: 0, top: dragRect.top, height: dragRect.height,
            background: 'rgba(0,122,255,0.12)', border: '1px solid rgba(0,122,255,0.5)',
            borderRadius: '4px', pointerEvents: 'none', zIndex: 2,
          }} />
        )}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #E5E5EA' }}>
              <th style={{ ...cell, textAlign: 'left',  color: '#8E8E93', fontWeight: '500', fontSize: '11px' }}>{ds.categoricalCol}</th>
              <th style={{ ...cell, textAlign: 'right', color: '#8E8E93', fontWeight: '500', fontSize: '11px', width: '60px' }}>{ds.numericalCol}</th>
            </tr>
          </thead>
          <tbody>
            {fullRows.map((row, i) => {
              const on = active.has(row.id)
              return (
                <tr
                  key={row.id}
                  data-rowid={row.id}
                  style={{
                    borderBottom: '1px solid #F2F2F7',
                    background: i % 2 === 0 ? 'transparent' : '#FAFAFA',
                    opacity: on ? 1 : 0.32, transition: 'opacity 0.1s',
                  }}
                >
                  <td style={cell}>{row.name}</td>
                  <td style={{ ...cell, textAlign: 'right', color: '#6C6C70' }}>{row.percentage}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}
