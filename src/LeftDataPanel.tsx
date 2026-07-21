import { useState, useEffect } from 'react'
import { LayerData } from './types'

interface LeftDataPanelProps {
  layers:           LayerData[]
  onChange:         (layers: LayerData[]) => void
  onDatasetChange?: (key: string) => void
  selectedDataset?: string
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
      image: 'co2-emissions.png',
      link:  'https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL&tab=map&time=latest',
    },
  },
  mushroomToxicity: {
    label:          'Mushroom danger score',
    categoricalCol: 'Name',
    numericalCol:   'Danger Score',
    layers: [
      { id: '1',  name: 'Death cap (Amanita phalloides)',       percentage: 10, color: '#7C8C4E' },
      { id: '2',  name: 'Destroying angel (Amanita virosa)',    percentage: 10, color: '#F0ECE0' },
      { id: '3',  name: 'Funeral bell (Galerina marginata)',    percentage:  9, color: '#6B4E31' },
      { id: '4',  name: 'Deadly webcap (Cortinarius rubellus)', percentage:  8, color: '#A0522D' },
      { id: '5',  name: 'False morel (Gyromitra esculenta)',    percentage:  6, color: '#8B4A2F' },
      { id: '6',  name: 'Panther cap (Amanita pantherina)',     percentage:  5, color: '#C2A878' },
      { id: '7',  name: 'Fly agaric (Amanita muscaria)',        percentage:  3, color: '#D62828' },
      { id: '8',  name: "Satan's bolete (Rubroboletus satanas)", percentage:  4, color: '#C77B7B' },
      { id: '9',  name: "Jack-o'-lantern (Omphalotus olearius)", percentage:  4, color: '#E68A00' },
      { id: '10', name: 'Ivory funnel (Clitocybe dealbata)',    percentage:  7, color: '#E4DAC4' },
      { id: '11', name: "Fool's funnel (Clitocybe rivulosa)",   percentage:  7, color: '#CFC8B8' },
      { id: '12', name: 'The sickener (Russula emetica)',       percentage:  2, color: '#E0455E' },
    ],
    reference: {
      title: 'Mushroom Danger Score',
      image: 'mushroom-danger.png',
      link:  'https://namyco.org/interests/toxicology/mushroom-poisoning-syndromes/',
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
        borderRadius: '7px', padding: '6px 10px',
        fontSize: '11px', color: '#1D1D1F', fontWeight: '600',
        cursor: 'grab', userSelect: 'none', whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '10px', color: '#8E8E93', fontWeight: '700' }}>{type === 'numerical' ? '#' : 'Aa'}</span>
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
