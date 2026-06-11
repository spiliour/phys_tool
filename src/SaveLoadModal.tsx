import React, { useState } from 'react'

export interface SceneSave {
  id:        string
  name:      string
  createdAt: string
  data:      Record<string, unknown>
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
  saves:    SceneSave[]
  onLoad:   (save: SceneSave) => void
  onDelete: (id: string) => void
  onClose:  () => void
}

export function LoadDialog({ saves, onLoad, onDelete, onClose }: LoadDialogProps) {
  const [hoverId, setHoverId] = useState<string | null>(null)

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

        {/* List */}
        <div style={{ maxHeight: '340px', overflowY: 'auto' }}>
          {saves.length === 0 ? (
            <div style={{ padding: '36px 20px', textAlign: 'center', color: '#8E8E93', fontSize: '13px' }}>
              No saved scenes yet
            </div>
          ) : saves.map((s, i) => (
            <div
              key={s.id}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px 20px', cursor: 'pointer',
                background: hoverId === s.id ? '#F8F8FA' : 'transparent',
                borderBottom: i < saves.length - 1 ? '1px solid #F2F2F7' : 'none',
                transition: 'background 0.08s',
              }}
              onClick={() => onLoad(s)}
              onMouseEnter={() => setHoverId(s.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1D1D1F' }}>{s.name}</div>
                <div style={{ fontSize: '10px', color: '#8E8E93', marginTop: '2px' }}>
                  {new Date(s.createdAt).toLocaleString()}
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onDelete(s.id) }}
                title="Delete save"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#FF3B30', fontSize: '17px', lineHeight: 1,
                  padding: '4px 6px', flexShrink: 0, fontFamily: 'inherit',
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '12px 20px', borderTop: '1px solid #E5E5EA', display: 'flex', justifyContent: 'flex-end' }}>
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
