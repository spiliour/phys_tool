/**
 * LabShared.tsx
 * Single source of truth for all shared layout, types, constants, and UI
 * across every physics lab (Deform, Shatter, Particles, Fluid…).
 * Change here → changes everywhere.
 */

import { useState, useEffect, useRef } from 'react'
import { type SceneSave } from './SaveLoadModal'

// ── Server fetch (adds ngrok bypass header) ───────────────────────────────────

export function serverFetch(url: string, init?: RequestInit): Promise<Response> {
  return fetch(url, {
    ...init,
    headers: { 'ngrok-skip-browser-warning': '1', ...(init?.headers ?? {}) },
  })
}

// ── Types ─────────────────────────────────────────────────────────────────────

export type { SceneSave }
export type Shape     = 'model' | 'sphere' | 'cube'
export type ViewType  = 'effect' | 'static' | 'dynamic'
export type DataField = 'value' | 'category' | 'percentage'
export interface DataRow { category: string; value: number; percentage: number }

export type ColType = 'text' | 'number' | 'percent'
export interface ColumnMeta { field: DataField; label: string; type: ColType }

// ── Constants ─────────────────────────────────────────────────────────────────

export const DEFAULT_DATA: DataRow[] = [
  { category: 'Category A', value: 3,   percentage: 35 },
  { category: 'Category B', value: 45,  percentage: 25 },
  { category: 'Category C', value: 60,  percentage: 20 },
  { category: 'Category D', value: 88,  percentage: 15 },
  { category: 'Category E', value: 100, percentage: 5  },
]

export const ALL_LAB_LINKS = [
  { label: 'Deform Lab',    href: '/deform'    },
  { label: 'Shatter Lab',   href: '/shatter'   },
  { label: 'Particles Lab', href: '/particles' },
  { label: 'Fluid Lab',     href: '/fluid'     },
]

// ── Cross-lab presets ─────────────────────────────────────────────────────────
// Presets are stored per-lab under their own localStorage key. These helpers let
// the hub read/aggregate every lab's presets into one global dropdown.

export type LabId = 'deform' | 'shatter' | 'particles' | 'fluid'

export const LAB_PRESET_KEYS: Record<LabId, string> = {
  deform:    'phys_tool_deform_presets',
  shatter:   'phys_tool_shatter_presets',
  particles: 'phys_tool_particle_presets',
  fluid:     'phys_tool_fluid_presets',
}

export const LAB_LABELS: Record<LabId, string> = {
  deform: 'Deform', shatter: 'Shatter', particles: 'Particles', fluid: 'Fluid',
}

export interface GlobalPreset { lab: LabId; id: string; name: string; createdAt: string }

export function readLabPresets(lab: LabId): SceneSave[] {
  try { return JSON.parse(localStorage.getItem(LAB_PRESET_KEYS[lab]) ?? '[]') } catch { return [] }
}

/** Every preset across every lab, tagged with which lab it belongs to. */
export function readAllPresets(): GlobalPreset[] {
  const out: GlobalPreset[] = []
  ;(Object.keys(LAB_PRESET_KEYS) as LabId[]).forEach(lab => {
    readLabPresets(lab).forEach(p => out.push({ lab, id: p.id, name: p.name, createdAt: p.createdAt }))
  })
  return out
}

/**
 * Handle a lab exposes to the hub so the hub's global preset row can save/delete
 * against whichever lab is currently active. `save` returns the created preset so
 * the hub can select it.
 */
export interface LabPresetHandle {
  save:   (name: string) => SceneSave
  remove: (id: string) => void
}

export const VIEW_LABELS: Record<ViewType, string> = {
  effect: 'Effect', static: 'Static', dynamic: 'Dynamic',
}
const VIEW_OPTIONS: ViewType[] = ['effect', 'static', 'dynamic']

const _datasetMods = import.meta.glob<{ default: Record<string, unknown>[] }>('./datasets/*.json', { eager: true })

function detectColType(key: string, sample: unknown): ColType {
  if (typeof sample === 'string') return 'text'
  if (/percent|pct|%|ratio|proportion/i.test(key)) return 'percent'
  return 'number'
}

function normalizeDataset(rows: Record<string, unknown>[]): { rows: DataRow[]; columns: ColumnMeta[] } {
  if (!rows.length) return { rows: [], columns: [] }
  const keys = Object.keys(rows[0])
  const types = keys.map(k => detectColType(k, rows[0][k]))

  const catKey = keys.find((_, i) => types[i] === 'text')
  const numKeys = keys.filter((_, i) => types[i] === 'number')
  const pctKeys = keys.filter((_, i) => types[i] === 'percent')

  const valKey = numKeys[0]
  const pctKey = pctKeys[0] ?? numKeys[1]

  const columns: ColumnMeta[] = []
  if (catKey) columns.push({ field: 'category',   label: catKey, type: 'text'    })
  if (valKey) columns.push({ field: 'value',      label: valKey, type: types[keys.indexOf(valKey)] as ColType })
  if (pctKey && pctKey !== valKey)
              columns.push({ field: 'percentage',  label: pctKey, type: types[keys.indexOf(pctKey)] as ColType })

  return {
    columns,
    rows: rows.map(r => ({
      category:   catKey ? String(r[catKey] ?? '') : '',
      value:      valKey ? Number(r[valKey]  ?? 0) : 0,
      percentage: (pctKey && pctKey !== valKey) ? Number(r[pctKey] ?? 0) : 0,
    })),
  }
}

export const DEFAULT_COLUMNS: ColumnMeta[] = [
  { field: 'category',   label: 'category',   type: 'text'    },
  { field: 'value',      label: 'value',       type: 'number'  },
  { field: 'percentage', label: 'percentage',  type: 'percent' },
]

export const DATASETS: { name: string; data: DataRow[]; columns: ColumnMeta[] }[] =
  Object.entries(_datasetMods).map(([path, mod]) => {
    const raw = path.replace('./datasets/', '').replace('.json', '')
    const name = raw.charAt(0).toUpperCase() + raw.slice(1)
    const { rows, columns } = normalizeDataset(mod.default)
    return { name, data: rows, columns }
  })

// ── Style constants ───────────────────────────────────────────────────────────

// Light "Apple/iOS" theme to match the main composition interface. The 3D
// viewport stays dark; only the chrome (sidebar, panels, controls) is light.

export const floatSelSt: React.CSSProperties = {
  background: 'transparent', color: 'var(--lab-text)', border: 'none',
  fontSize: 11, cursor: 'pointer', outline: 'none', padding: '2px 4px',
}

export const floatIcoSt: React.CSSProperties = {
  width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'var(--lab-fill)', color: 'var(--lab-text-2)', border: '1px solid var(--lab-border)',
  borderRadius: 8, cursor: 'pointer', fontSize: 16, padding: 0,
}

export function secBtnSt(disabled: boolean): React.CSSProperties {
  return {
    flex: 1, padding: '8px 0', fontSize: 11, borderRadius: 6,
    cursor: disabled ? 'default' : 'pointer',
    background: disabled ? 'var(--lab-fill)' : 'var(--lab-surface)',
    color:      disabled ? '#c7c7cc' : 'var(--lab-text)',
    border: disabled ? '1px solid var(--lab-divider)' : '1px solid var(--lab-border)',
    opacity: disabled ? 0.7 : 1, fontFamily: 'inherit',
  }
}

export function priBtnSt(disabled: boolean): React.CSSProperties {
  return {
    width: '100%', padding: '9px 0', fontSize: 12, borderRadius: 6,
    cursor: disabled ? 'default' : 'pointer',
    background: disabled ? 'var(--lab-divider)' : 'var(--lab-accent)',
    color: disabled ? 'var(--lab-text-4)' : '#fff',
    border: 'none', opacity: disabled ? 1 : 1, fontWeight: 600, fontFamily: 'inherit',
  }
}

// ── Layout helpers ────────────────────────────────────────────────────────────

export function Sec({ children }: { children: React.ReactNode }) {
  return <div style={{ borderTop: '1px solid var(--lab-divider)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
}
export function SLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 9, color: 'var(--lab-text-3)', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>{children}</div>
}
export function RowLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, color: '#3a3a3c' }}>{children}</div>
}

// ── Spreadsheet modal ─────────────────────────────────────────────────────────

function SpreadsheetModalInner({ data, columns, onClose }: { data: DataRow[]; columns: ColumnMeta[]; onClose: () => void }) {
  const cellColor = (type: ColType) =>
    type === 'text' ? 'var(--lab-text-2)' : type === 'percent' ? '#5e5ce6' : 'var(--lab-text)'

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: 'var(--lab-surface)', border: '1px solid var(--lab-divider)', borderRadius: 12, padding: 24, minWidth: 300, boxShadow: '0 16px 48px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--lab-text)' }}>Dataset</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--lab-text-3)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 12 }}>
            <thead>
              <tr>{columns.map(col => (
                <th key={col.field} style={{ textAlign: 'left', padding: '6px 14px', borderBottom: '1px solid var(--lab-divider)', color: 'var(--lab-text-3)', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, whiteSpace: 'nowrap' }}>{col.label}</th>
              ))}</tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : '#f8f8fa' }}>
                  {columns.map(col => (
                    <td key={col.field} style={{ padding: '8px 14px', borderBottom: '1px solid var(--lab-fill)', color: cellColor(col.type), fontVariantNumeric: col.type !== 'text' ? 'tabular-nums' : undefined, whiteSpace: 'nowrap' }}>
                      {col.type === 'text' ? row[col.field] : col.type === 'percent' ? `${row[col.field]}%` : row[col.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: 10, color: 'var(--lab-text-3)' }}>{data.length} rows · {columns.length} columns</div>
      </div>
    </div>
  )
}

export { SpreadsheetModalInner as SpreadsheetModal }

// ── Lab nav title ─────────────────────────────────────────────────────────────

export function LabNavTitle({ name, href }: { name: string; href: string }) {
  const [showNav, setShowNav] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showNav) return
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setShowNav(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [showNav])

  const links = ALL_LAB_LINKS.filter(l => l.href !== href)

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setShowNav(v => !v)}
        style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--lab-text)' }}>{name}</span>
        <span style={{ fontSize: 9, color: showNav ? 'var(--lab-accent)' : 'var(--lab-text-4)', marginTop: 1 }}>{showNav ? '▴' : '▾'}</span>
      </button>
      {showNav && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 100,
          background: 'var(--lab-surface)', border: '1px solid var(--lab-divider)', borderRadius: 10,
          padding: 4, minWidth: 190, boxShadow: '0 10px 32px rgba(0,0,0,0.18)',
        }}>
          {links.map(({ label, href: lhref }) => (
            <a key={lhref} href={lhref} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px', borderRadius: 7, fontSize: 12,
              color: 'var(--lab-text-2)', textDecoration: 'none',
            }}>
              <span style={{ color: 'var(--lab-text-4)', fontSize: 11 }}>→</span>
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Preset row ────────────────────────────────────────────────────────────────

export interface LabPresetRowProps {
  presets:        SceneSave[]
  selPresetId:    string
  saveName:       string | null
  defaultSaveName: string
  onSelect:       (id: string) => void
  onSave:         (name: string) => void
  onDelete:       () => void
  setSaveName:    (v: string | null) => void
  setSelPresetId: (v: string) => void
}

export function LabPresetRow({ presets, selPresetId, saveName, defaultSaveName, onSelect, onSave, onDelete, setSaveName, setSelPresetId }: LabPresetRowProps) {
  if (saveName !== null) {
    return (
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <input
          autoFocus type="text" value={saveName}
          onChange={e => setSaveName(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && saveName.trim()) onSave(saveName.trim())
            if (e.key === 'Escape') setSaveName(null)
          }}
          placeholder="Preset name…"
          style={{ flex: 1, background: 'var(--lab-surface)', border: '1px solid var(--lab-accent)', borderRadius: 6, color: 'var(--lab-text)', fontSize: 10, padding: '5px 7px', outline: 'none', fontFamily: 'inherit' }}
        />
        <button onClick={() => { if (saveName.trim()) onSave(saveName.trim()) }} disabled={!saveName.trim()}
          style={{ background: 'var(--lab-accent)', border: '1px solid var(--lab-accent)', borderRadius: 6, cursor: 'pointer', color: '#fff', fontSize: 11, padding: '4px 9px', fontFamily: 'inherit', opacity: saveName.trim() ? 1 : 0.4 }}>✓</button>
        <button onClick={() => setSaveName(null)}
          style={{ background: 'none', border: '1px solid var(--lab-border)', borderRadius: 6, cursor: 'pointer', color: 'var(--lab-text-3)', fontSize: 12, padding: '4px 7px', fontFamily: 'inherit' }}>✕</button>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
      <select value={selPresetId}
        onChange={e => { setSelPresetId(e.target.value); onSelect(e.target.value) }}
        style={{ flex: 1, background: 'var(--lab-surface)', border: '1px solid var(--lab-border)', color: selPresetId ? 'var(--lab-text)' : 'var(--lab-text-3)', borderRadius: 6, fontSize: 10, padding: '5px 7px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
        <option value="">Presets…</option>
        {presets.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>
      {selPresetId && (
        <button onClick={onDelete} title="Delete preset"
          style={{ background: 'none', border: '1px solid var(--lab-border)', borderRadius: 6, cursor: 'pointer', color: 'var(--lab-danger)', fontSize: 12, padding: '4px 7px', fontFamily: 'inherit' }}>×</button>
      )}
      <button onClick={() => setSaveName(defaultSaveName)}
        style={{ background: 'var(--lab-surface)', border: '1px solid var(--lab-border)', borderRadius: 6, cursor: 'pointer', color: 'var(--lab-accent)', fontSize: 10, padding: '5px 9px', whiteSpace: 'nowrap', fontFamily: 'inherit' }}>Save</button>
    </div>
  )
}

// ── Model section ─────────────────────────────────────────────────────────────

export function LabModelSection({ fileName, onFile, onRun, isLoading, message, status, inputId }: {
  fileName: string; onFile: (f: File) => void; onRun: () => void
  isLoading: boolean; message: string; status: string; inputId: string
}) {
  return (
    <Sec>
      <SLabel>Model</SLabel>
      <div
        onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) onFile(f) }}
        onDragOver={e => e.preventDefault()}
        onClick={() => document.getElementById(inputId)!.click()}
        style={{ border: '1px dashed #c7c7cc', borderRadius: 8, padding: '14px 10px', textAlign: 'center', cursor: 'pointer', fontSize: 11, color: 'var(--lab-text-3)', background: 'var(--lab-fill)' }}
      >
        {fileName || 'Drop GLB or click to browse'}
      </div>
      <input id={inputId} type="file" accept=".glb,.gltf" style={{ display: 'none' }}
        onChange={e => { const f = e.target.files?.[0]; if (f) onFile(f) }} />
      <button onClick={onRun} disabled={isLoading || !fileName} style={priBtnSt(isLoading || !fileName)}>
        {isLoading ? 'Running…' : 'Run Simulation'}
      </button>
      {message && (
        <div style={{ fontSize: 10, color: status === 'error' ? 'var(--lab-danger)' : 'var(--lab-text-3)', lineHeight: 1.5 }}>{message}</div>
      )}
    </Sec>
  )
}

// ── Data panel ────────────────────────────────────────────────────────────────

function ColTypeIcon({ type }: { type: ColType }) {
  if (type === 'text') return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor">
      <text x="0" y="9" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Aa</text>
    </svg>
  )
  if (type === 'percent') return (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="currentColor">
      <text x="0" y="9" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">%</text>
    </svg>
  )
  return (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="currentColor">
      <text x="0" y="9" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">#</text>
    </svg>
  )
}

export function LabDataPanel({ data, draggingField, onDragStart, onDragEnd, onDataChange }: {
  data: DataRow[]; draggingField: DataField | null
  onDragStart: (f: DataField) => void; onDragEnd: () => void
  onDataChange?: (d: DataRow[]) => void
}) {
  const [selIdx, setSelIdx] = useState('')
  const [showTable, setShowTable] = useState(false)
  const columns = selIdx !== '' ? DATASETS[Number(selIdx)].columns : DEFAULT_COLUMNS

  return (
    <div style={{ borderTop: '1px solid var(--lab-divider)', padding: '12px 16px 14px', background: 'var(--lab-surface)' }}>
      {showTable && <SpreadsheetModalInner data={data} columns={columns} onClose={() => setShowTable(false)} />}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <SLabel>Data</SLabel>
        <button onClick={() => setShowTable(true)}
          style={{ padding: '3px 9px', fontSize: 9, borderRadius: 5, cursor: 'pointer', background: 'var(--lab-fill)', color: 'var(--lab-text-2)', border: '1px solid var(--lab-border)' }}>
          ⊞ Table
        </button>
      </div>
      <select
        value={selIdx}
        onChange={e => {
          const idx = e.target.value
          setSelIdx(idx)
          if (idx !== '' && onDataChange) onDataChange(DATASETS[Number(idx)].data)
        }}
        style={{ width: '100%', background: 'var(--lab-surface)', border: '1px solid var(--lab-border)', color: selIdx !== '' ? 'var(--lab-text)' : 'var(--lab-text-3)', borderRadius: 6, fontSize: 10, padding: '5px 7px', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', marginBottom: 8 }}
      >
        <option value="">Select dataset…</option>
        {DATASETS.map((d, i) => <option key={i} value={i}>{d.name}</option>)}
      </select>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {columns.map(col => (
          <div key={col.field} draggable
            onDragStart={e => { e.dataTransfer.setData('dataField', col.field); onDragStart(col.field) }}
            onDragEnd={onDragEnd}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '4px 10px', borderRadius: 12, cursor: 'grab', userSelect: 'none',
              background: draggingField === col.field ? 'var(--lab-accent-soft)' : 'var(--lab-fill)',
              border: `1px solid ${draggingField === col.field ? 'var(--lab-accent)' : 'var(--lab-border)'}`,
              color: draggingField === col.field ? 'var(--lab-accent)' : '#3a3a3c',
              fontSize: 10, transition: 'background 0.1s, border-color 0.1s, color 0.1s',
            }}>
            <ColTypeIcon type={col.type} />
            {col.label}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 9, color: 'var(--lab-text-3)', marginTop: 8 }}>Drag a variable onto a property to bind it</div>
    </div>
  )
}

// ── Advanced panel toggle (side arrow on left panel edge) ─────────────────────

export function LabAdvancedToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} title={open ? 'Close advanced' : 'Open advanced'} style={{
      position: 'absolute', right: -14, top: '50%', transform: 'translateY(-50%)',
      zIndex: 40, width: 14, height: 52,
      background: 'var(--lab-surface)', border: '1px solid var(--lab-border)', borderLeft: 'none',
      borderRadius: '0 6px 6px 0', cursor: 'pointer',
      color: open ? 'var(--lab-accent)' : 'var(--lab-text-4)',
      fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 0, lineHeight: 1,
    }}>{open ? '‹' : '›'}</button>
  )
}

// ── Advanced panel overlay ────────────────────────────────────────────────────

export function LabAdvancedPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  if (!open) return null
  return (
    <div style={{ position: 'absolute', left: 268, top: 0, bottom: 0, width: 200, zIndex: 30, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--lab-border)', background: 'var(--lab-surface)', boxShadow: '4px 0 24px rgba(0,0,0,0.12)' }}>
      <div style={{ flex: 1, padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--lab-text)', letterSpacing: 0.2 }}>Advanced</div>
        {children}
      </div>
    </div>
  )
}

// ── Floating view selector (legacy two-view; kept for reference) ──────────────

export function LabViewSelector({ view1, view2, onView1, onView2, onAdd, onRemove }: {
  view1: ViewType; view2: ViewType | null
  onView1: (v: ViewType) => void; onView2: (v: ViewType) => void
  onAdd: () => void; onRemove: () => void
}) {
  return (
    <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 10 }}>
      <div style={{
        pointerEvents: 'all', display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 6px 5px 14px', borderRadius: 24,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)', border: '1px solid var(--lab-border)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
      }}>
        <select value={view1} onChange={e => onView1(e.target.value as ViewType)} style={floatSelSt}>
          {VIEW_OPTIONS.map(v => <option key={v} value={v}>{VIEW_LABELS[v]}</option>)}
        </select>
        {view2 !== null ? (
          <>
            <div style={{ width: 1, height: 16, background: 'var(--lab-divider)' }} />
            <select value={view2} onChange={e => onView2(e.target.value as ViewType)} style={floatSelSt}>
              {VIEW_OPTIONS.map(v => <option key={v} value={v}>{VIEW_LABELS[v]}</option>)}
            </select>
            <button onClick={onRemove} title="Remove second view" style={floatIcoSt}>×</button>
          </>
        ) : (
          <button onClick={onAdd} title="Add second view" style={floatIcoSt}>+</button>
        )}
      </div>
    </div>
  )
}

// ── Single-view bottom toggle ─────────────────────────────────────────────────

function EffectIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 0.5L8.3 5.7L13.5 7L8.3 8.3L7 13.5L5.7 8.3L0.5 7L5.7 5.7Z" />
    </svg>
  )
}

function StaticIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="1" y="1" width="5" height="5" rx="1.2" />
      <rect x="8" y="1" width="5" height="5" rx="1.2" />
      <rect x="1" y="8" width="5" height="5" rx="1.2" />
      <rect x="8" y="8" width="5" height="5" rx="1.2" />
    </svg>
  )
}

function DynamicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M1 7C2.5 4.5 4 9.5 5.5 7C7 4.5 8.5 9.5 10 7C11.2 5.2 12.2 8.5 13 7" />
    </svg>
  )
}

const VIEW_TOGGLE_CONFIG: { id: ViewType; label: string; Icon: () => JSX.Element }[] = [
  { id: 'effect',  label: 'Effect',  Icon: EffectIcon  },
  { id: 'static',  label: 'Static',  Icon: StaticIcon  },
  { id: 'dynamic', label: 'Dynamic', Icon: DynamicIcon },
]

export function LabViewToggle({ view, onChange }: {
  view: ViewType
  onChange: (v: ViewType) => void
}) {
  return (
    <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 10 }}>
      <div style={{
        pointerEvents: 'all', display: 'inline-flex', alignItems: 'center', gap: 2,
        padding: 4, borderRadius: 20,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)', border: '1px solid var(--lab-border)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
      }}>
        {VIEW_TOGGLE_CONFIG.map(({ id, label, Icon }) => {
          const on = view === id
          return (
            <button key={id} onClick={() => onChange(id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 14, border: 'none',
                background: on ? 'var(--lab-accent-soft)' : 'transparent',
                color: on ? 'var(--lab-accent)' : 'var(--lab-text-3)',
                cursor: 'pointer', fontSize: 12, fontFamily: 'inherit',
                fontWeight: on ? 600 : 400, letterSpacing: 0.3,
                transition: 'color 0.12s, background 0.12s',
              }}>
              <Icon />
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
