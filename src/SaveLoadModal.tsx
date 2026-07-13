import React, { useState } from 'react'

export interface SceneSave {
  id:        string
  name:      string
  createdAt: string
  data:      Record<string, unknown>
}

// ── Preset auto-discovery ─────────────────────────────────────────────────────

const _presetMods = import.meta.glob<{ default: Record<string, unknown> }>(
  './presets/*.json',
  { eager: true },
)

export const PRESETS: SceneSave[] = Object.entries(_presetMods).map(([path, mod]) => {
  const raw  = path.replace(/^.*\//, '').replace(/\.json$/, '')
  const name = raw.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return { id: `preset_${raw}`, name, createdAt: '', data: mod.default }
})

// ── Export helper ─────────────────────────────────────────────────────────────

export function exportScene(name: string, data: Record<string, unknown>) {
  const payload = JSON.stringify(data, null, 2)
  const blob    = new Blob([payload], { type: 'application/json' })
  const url     = URL.createObjectURL(blob)
  const a       = document.createElement('a')
  a.href        = url
  a.download    = name.trim().replace(/\s+/g, '_') + '.json'
  a.click()
  URL.revokeObjectURL(url)
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const btnBase: React.CSSProperties = {
  padding: '8px 16px', borderRadius: '8px',
  fontSize: '13px', fontWeight: '500', cursor: 'pointer',
  fontFamily: 'inherit', border: 'none', transition: 'opacity 0.1s',
}

// ── Modal overlay ─────────────────────────────────────────────────────────────

function ModalOverlay({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff', borderRadius: '14px',
          width: '340px', maxWidth: '90vw',
          boxShadow: '0 16px 48px rgba(0,0,0,0.28)',
          overflow: 'hidden', fontFamily: 'inherit',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

// ── Save dialog ───────────────────────────────────────────────────────────────

interface SaveDialogProps {
  initialName: string
  onSave:      (name: string) => void
  onClose:     () => void
}

export function SaveDialog({ initialName, onSave, onClose }: SaveDialogProps) {
  const [name, setName] = useState(initialName)

  function submit() {
    const t = name.trim()
    if (t) onSave(t)
  }

  return (
    <ModalOverlay onClose={onClose}>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ fontSize: '15px', fontWeight: '700', color: '#1D1D1F' }}>Save Scene</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') submit(); if (e.key === 'Escape') onClose() }}
          placeholder="Scene name…"
          autoFocus
          style={{
            background: '#F2F2F7', border: '1.5px solid #D1D1D6', borderRadius: '8px',
            padding: '9px 12px', fontSize: '13px', color: '#1D1D1F', outline: 'none',
            fontFamily: 'inherit', width: '100%', boxSizing: 'border-box',
          }}
        />
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ ...btnBase, background: '#F2F2F7', color: '#6C6C70' }}>
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={!name.trim()}
            style={{ ...btnBase, background: '#007AFF', color: '#fff', opacity: name.trim() ? 1 : 0.4 }}
          >
            Save
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}

// ── Load dialog ───────────────────────────────────────────────────────────────

interface LoadDialogProps {
  saves:       SceneSave[]
  onLoad:      (save: SceneSave) => void
  onDelete:    (id: string) => void
  onClose:     () => void
  currentName: string
  currentData: Record<string, unknown>
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: '8px 20px 4px', fontSize: '10px', fontWeight: '700',
      letterSpacing: '0.08em', textTransform: 'uppercase', color: '#AEAEB2',
    }}>
      {children}
    </div>
  )
}

export function LoadDialog({ saves, onLoad, onDelete, onClose, currentName, currentData }: LoadDialogProps) {
  const [hoverId, setHoverId] = useState<string | null>(null)

  function row(s: SceneSave, showDelete: boolean, last: boolean) {
    return (
      <div
        key={s.id}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '11px 20px', cursor: 'pointer',
          background: hoverId === s.id ? '#F8F8FA' : 'transparent',
          borderBottom: last ? 'none' : '1px solid #F2F2F7',
          transition: 'background 0.08s',
        }}
        onClick={() => onLoad(s)}
        onMouseEnter={() => setHoverId(s.id)}
        onMouseLeave={() => setHoverId(null)}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#1D1D1F' }}>{s.name}</div>
          {s.createdAt && (
            <div style={{ fontSize: '10px', color: '#8E8E93', marginTop: '2px' }}>
              {new Date(s.createdAt).toLocaleString()}
            </div>
          )}
        </div>
        {showDelete && (
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(s.id) }}
            title="Delete"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#FF3B30', fontSize: '17px', lineHeight: 1,
              padding: '4px 6px', flexShrink: 0,
            }}
          >
            ×
          </button>
        )}
      </div>
    )
  }

  return (
    <ModalOverlay onClose={onClose}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{
          padding: '16px 20px', borderBottom: '1px solid #E5E5EA',
          fontSize: '15px', fontWeight: '700', color: '#1D1D1F',
        }}>
          Load Scene
        </div>

        {/* Scrollable list */}
        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>

          {/* Presets */}
          {PRESETS.length > 0 && (
            <>
              <SectionLabel>Presets</SectionLabel>
              {PRESETS.map((s, i) => row(s, false, i === PRESETS.length - 1))}
            </>
          )}

          {/* User saves */}
          {saves.length > 0 && (
            <>
              <SectionLabel>My Saves</SectionLabel>
              {saves.map((s, i) => row(s, true, i === saves.length - 1))}
            </>
          )}

          {PRESETS.length === 0 && saves.length === 0 && (
            <div style={{ padding: '36px 20px', textAlign: 'center', color: '#8E8E93', fontSize: '13px' }}>
              No saved scenes yet
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '12px 20px', borderTop: '1px solid #E5E5EA',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button
            onClick={() => exportScene(currentName, currentData)}
            title="Export current scene as JSON"
            style={{ ...btnBase, background: '#F2F2F7', color: '#007AFF', padding: '7px 12px' }}
          >
            Export scene
          </button>
          <button onClick={onClose} style={{ ...btnBase, background: '#F2F2F7', color: '#6C6C70' }}>
            Close
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}

// ── localStorage helpers ──────────────────────────────────────────────────────

const STORAGE_KEY = 'phys_tool_saves'

export function loadSaves(): SceneSave[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') }
  catch { return [] }
}

export function persistSaves(saves: SceneSave[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saves))
}
