import { useState, useRef } from 'react'
import { CompositionLevel, ActiveElement, DecorationConfig } from './types'

// ── Static metadata per element type ─────────────────────────────────────────

interface ElementMeta {
  label: string
  badge: string
}

const META: Record<ActiveElement, ElementMeta> = {
  mark:        { label: 'Mark',       badge: 'L1'  },
  collection1: { label: 'Collection', badge: 'L2'  },
  collection2: { label: 'Collection', badge: 'L3'  },
  scene:       { label: 'Scene',      badge: 'Env' },
}

// Which elements are visible at each composition level
const LEVEL_ELEMENTS: Record<CompositionLevel, ActiveElement[]> = {
  1: ['mark', 'scene'],
  2: ['mark', 'collection1', 'scene'],
  3: ['mark', 'collection1', 'collection2', 'scene'],
}

// ── Shared button styles ──────────────────────────────────────────────────────

const levelBtnBase: React.CSSProperties = {
  padding: '8px 12px', borderRadius: '10px',
  fontSize: '12px', fontWeight: '500',
  cursor: 'pointer', fontFamily: 'inherit',
  transition: 'border-color 0.15s, color 0.15s',
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
  width: '100%',
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface HierarchyPanelProps {
  level: CompositionLevel
  activeElement: ActiveElement
  onSelectElement: (el: ActiveElement) => void
  onAdvanceLevel: () => void
  onDowngradeLevel: () => void
  decorations: DecorationConfig[]
  activeDecorationId: string | null
  onSelectDecoration: (id: string) => void
  onAddDecoration: () => void
  onRemoveDecoration: (id: string) => void
  onRenameDecoration: (id: string, name: string) => void
}

// ── Component ─────────────────────────────────────────────────────────────────

export function HierarchyPanel({
  level, activeElement,
  onSelectElement, onAdvanceLevel, onDowngradeLevel,
  decorations, activeDecorationId,
  onSelectDecoration, onAddDecoration, onRemoveDecoration, onRenameDecoration,
}: HierarchyPanelProps) {
  const elements = LEVEL_ELEMENTS[level]
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function startEdit(dec: DecorationConfig, idx: number) {
    setEditingId(dec.id)
    setEditingName(dec.name ?? `Decoration ${idx + 1}`)
    setTimeout(() => inputRef.current?.select(), 0)
  }

  function commitEdit() {
    if (editingId) onRenameDecoration(editingId, editingName.trim() || editingId)
    setEditingId(null)
  }

  function cancelEdit() {
    setEditingId(null)
  }

  return (
    <div style={{
      padding: '14px 14px 14px',
      display: 'flex', flexDirection: 'column', gap: '8px',
    }}>

      {/* Header */}
      <div style={{ paddingTop: '12px' }}>
        <div style={{ fontSize: '16px', color: '#1D1D1F', fontWeight: '700' }}>
          Visualization Hierarchy
        </div>
      </div>

      {/* Element boxes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {elements.map((el) => {
          const m = META[el]
          const isActive = el === activeElement && activeDecorationId === null
          return (
            <button
              key={el}
              onClick={() => onSelectElement(el)}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '9px 12px', width: '100%', textAlign: 'left',
                background: isActive ? '#F2F2F7' : '#FAFAFA',
                border: `1.5px solid ${isActive ? '#1D1D1F' : '#E5E5EA'}`,
                borderRadius: '10px', cursor: 'pointer',
                transition: 'border-color 0.15s, background 0.15s',
                fontFamily: 'inherit',
              }}
            >
              {/* Labels */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '12px', color: '#1D1D1F',
                  fontWeight: isActive ? '600' : '500', lineHeight: 1.2,
                }}>
                  {m.label}
                </div>
              </div>

              {/* Level badge */}
              <span style={{
                fontSize: '9px', letterSpacing: '0.06em', fontWeight: '500',
                color: isActive ? '#1D1D1F' : '#8E8E93',
                border: `1px solid ${isActive ? '#1D1D1F' : '#D1D1D6'}`,
                borderRadius: '4px', padding: '1px 5px', flexShrink: 0,
                transition: 'color 0.15s, border-color 0.15s',
              }}>
                {m.badge}
              </span>
            </button>
          )
        })}
      </div>

      {/* Level transition buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingTop: '2px' }}>

        {level < 3 && (
          <button
            onClick={onAdvanceLevel}
            style={{
              ...levelBtnBase,
              background: 'transparent',
              border: '1.5px dashed #C7C7CC',
              color: '#8E8E93',
            }}
          >
            + Add Collection
          </button>
        )}

        {level > 1 && (
          <button
            onClick={onDowngradeLevel}
            style={{
              ...levelBtnBase,
              background: 'transparent',
              border: '1.5px dashed #C7C7CC',
              color: '#8E8E93',
            }}
          >
            − Remove Collection
          </button>
        )}

      </div>

      {/* Decorations */}
      <div style={{ borderTop: '1px solid #E5E5EA', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{
          fontSize: '10px', color: '#AEAEB2',
          textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600',
          marginBottom: '2px',
        }}>
          Decorations
        </div>

        {decorations.map((dec, idx) => {
          const isActive  = dec.id === activeDecorationId
          const isEditing = dec.id === editingId
          const label     = dec.name ?? `Decoration ${idx + 1}`
          return (
            <div key={dec.id} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div
                onClick={() => { if (!isEditing) onSelectDecoration(dec.id) }}
                onDoubleClick={() => startEdit(dec, idx)}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '7px 10px',
                  background: isActive ? '#F2F2F7' : '#FAFAFA',
                  border: `1.5px solid ${isActive ? '#1D1D1F' : '#E5E5EA'}`,
                  borderRadius: '8px', cursor: isEditing ? 'default' : 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                  minWidth: 0,
                }}
              >
                {isEditing ? (
                  <input
                    ref={inputRef}
                    value={editingName}
                    onChange={e => setEditingName(e.target.value)}
                    onBlur={commitEdit}
                    onKeyDown={e => { if (e.key === 'Enter') commitEdit(); if (e.key === 'Escape') cancelEdit() }}
                    style={{
                      flex: 1, border: 'none', outline: 'none', background: 'transparent',
                      fontSize: '12px', color: '#1D1D1F', fontFamily: 'inherit', fontWeight: '600',
                      minWidth: 0,
                    }}
                    onClick={e => e.stopPropagation()}
                    autoFocus
                  />
                ) : (
                  <span style={{
                    fontSize: '12px', color: '#1D1D1F',
                    fontWeight: isActive ? '600' : '400', flex: 1,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {label}
                  </span>
                )}
                {!isEditing && (
                  <span style={{
                    fontSize: '9px', color: isActive ? '#1D1D1F' : '#8E8E93',
                    border: `1px solid ${isActive ? '#1D1D1F' : '#D1D1D6'}`,
                    borderRadius: '4px', padding: '1px 5px', flexShrink: 0,
                  }}>
                    Dec
                  </span>
                )}
              </div>
              <button
                onClick={() => onRemoveDecoration(dec.id)}
                title="Remove decoration"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#AEAEB2', fontSize: '16px', lineHeight: 1,
                  padding: '4px 6px', flexShrink: 0, fontFamily: 'inherit',
                }}
              >
                ×
              </button>
            </div>
          )
        })}

        <button
          onClick={onAddDecoration}
          style={{
            ...levelBtnBase,
            background: 'transparent',
            border: '1.5px dashed #C7C7CC',
            color: '#8E8E93',
          }}
        >
          + Add Decoration
        </button>
      </div>

    </div>
  )
}
