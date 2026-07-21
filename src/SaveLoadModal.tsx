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

// ── Viewport thumbnail ────────────────────────────────────────────────────────

// Grab the WebGL canvas and return a small JPEG data URL for the scene preview.
// (The Canvas is created with preserveDrawingBuffer so its last frame is readable.)
export function captureThumbnail(maxW = 320): string | undefined {
  const canvas = document.querySelector('canvas')
  if (!canvas) return undefined
  try {
    const srcW  = canvas.width || maxW
    const srcH  = canvas.height || maxW
    const scale = Math.min(1, maxW / srcW)
    const w = Math.max(1, Math.round(srcW * scale))
    const h = Math.max(1, Math.round(srcH * scale))
    const off = document.createElement('canvas')
    off.width = w; off.height = h
    const ctx = off.getContext('2d')
    if (!ctx) return undefined
    ctx.drawImage(canvas, 0, 0, w, h)
    return off.toDataURL('image/jpeg', 0.72)
  } catch {
    return undefined   // e.g. a tainted canvas — just skip the preview
  }
}

// ── Export helper ─────────────────────────────────────────────────────────────

export function exportScene(name: string, data: Record<string, unknown>) {
  // Embed a fresh viewport screenshot so the exported preset shows a preview.
  const withThumb = { ...data, thumbnail: captureThumbnail() ?? data.thumbnail }
  const payload = JSON.stringify(withThumb, null, 2)
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
  onLoad:      (save: SceneSave) => void
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

export function LoadDialog({ onLoad, onClose, currentName, currentData }: LoadDialogProps) {
  const [hoverId, setHoverId] = useState<string | null>(null)

  function row(s: SceneSave, last: boolean) {
    const thumb = s.data?.thumbnail as string | undefined
    return (
      <div
        key={s.id}
        style={{
          display: 'flex', alignItems: 'center', gap: '11px',
          padding: '10px 20px', cursor: 'pointer',
          background: hoverId === s.id ? '#F8F8FA' : 'transparent',
          borderBottom: last ? 'none' : '1px solid #F2F2F7',
          transition: 'background 0.08s',
        }}
        onClick={() => onLoad(s)}
        onMouseEnter={() => setHoverId(s.id)}
        onMouseLeave={() => setHoverId(null)}
      >
        <div style={{
          width: '62px', height: '44px', flexShrink: 0,
          borderRadius: '6px', overflow: 'hidden', background: '#F2F2F7',
          border: '1px solid #E5E5EA',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {thumb
            ? <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : <span style={{ fontSize: '15px', color: '#C7C7CC' }}>▦</span>}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#1D1D1F', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
          {s.createdAt && (
            <div style={{ fontSize: '10px', color: '#8E8E93', marginTop: '2px' }}>
              {new Date(s.createdAt).toLocaleString()}
            </div>
          )}
        </div>
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
          {PRESETS.length > 0 ? (
            <>
              <SectionLabel>Presets</SectionLabel>
              {PRESETS.map((s, i) => row(s, i === PRESETS.length - 1))}
            </>
          ) : (
            <div style={{ padding: '36px 20px', textAlign: 'center', color: '#8E8E93', fontSize: '13px' }}>
              No scenes yet
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
