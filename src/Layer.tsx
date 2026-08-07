/**
 * Layer.tsx — volume arrangements (scattering / stacking / adjacent grid).
 *
 * Owns the LAYOUT: where marks go inside a bounding volume (random scatter with
 * exclusion + overlap avoidance, jittered even spread, or a relaxed 2D grid).
 * Rendering + encodings are delegated to the shared <MarkInstances> renderer.
 */
import { useMemo, useEffect, useContext } from 'react'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3, MarkPart } from './types'
import { MARK_BASE } from './markGeometry'
import {
  MarkInstances, MarkPlacement, MarkLabelPair,
  LabelOccludeContext, occludeProp, SCATTER_SCALE, ColLabelStyleContext,
} from './MarkInstances'

// Re-export shared names so existing importers (CompositionCanvas, …) keep working.
export { SCATTER_SCALE, LabelOccludeContext, occludeProp, tintMaterial } from './MarkInstances'
export type { OccluderRef, LabelOccludeValue, MarkLabelPair, MarkPlacement } from './MarkInstances'

export interface LayerLabelData {
  top?:    string
  bottom?: string
  left?:   string
  right?:  string
}

interface LayerProps {
  width:                number
  depth:                number
  height:               number
  color:                string
  position:             [number, number, number]
  particleCount:        number
  markShape:            MarkShape
  markMaterial:         MarkMaterial
  markSize?:            Vec3
  structural?:          StructuralConfig
  customModelUrl?:      string
  parts?:               MarkPart[]
  labelShow:            boolean
  labelData:            LayerLabelData
  seed?:                number
  boundingVolume?:      'box' | 'sphere'
  showBounds?:          boolean
  orientation?:         'random' | 'static'
  exclusionZone?:       ExclusionZone
  evenDistribution?:    boolean
  adjacent?:            boolean  // adjacent placement: scatter on a flat surface, bottom-aligned
  showGrid?:            boolean  // adjacent: show a reference grid on the surface
  stacking?:            boolean  // stacking: marks piled in a vertical column, base on base
  stackRandomOrient?:   boolean  // stacking: give each mark a random tumble
  instanceSizes?:       Vec3[]   // per-instance size override (data-driven scale encoding)
  instanceColors?:      string[] // per-instance colour override (data-driven colour encoding)
  colorTint?:           boolean  // tint GLB material instead of replacing it
  markLabels?:          MarkLabelPair[]  // per-instance labels shown above / below each mark
}

const DEFAULT_SIZE: Vec3 = { x: 1, y: 1, z: 1 }
const DEFAULT_STRUCTURAL: StructuralConfig = { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 }
const shadow = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'

// ── Layout: scatter sampling ──────────────────────────────────────────────────

const SCATTER_FILL = 0.47       // marks fill ~94% of the bounding box (half-extent factor)

function sampleScatterPos(hw: number, hh: number, hd: number, vol: 'box' | 'sphere'): [number, number, number] {
  if (vol === 'sphere') {
    const r     = (hw + hh + hd) / 3
    const phi   = Math.acos(2 * Math.random() - 1)
    const theta = 2 * Math.PI * Math.random()
    const rs    = r * Math.cbrt(Math.random())
    return [rs * Math.sin(phi) * Math.cos(theta), rs * Math.sin(phi) * Math.sin(theta), rs * Math.cos(phi)]
  }
  return [(Math.random() - 0.5) * 2 * hw, (Math.random() - 0.5) * 2 * hh, (Math.random() - 0.5) * 2 * hd]
}

// Exclusion zone matches the decoration's shape: sphere for sphere decorations,
// axis-aligned box for everything else (a circumscribed sphere around a tall,
// narrow model would blot out the whole scatter volume).
export type ExclusionZone =
  | { kind: 'sphere'; center: [number, number, number]; radius: number }
  | { kind: 'box';    center: [number, number, number]; half:   [number, number, number] }

function insideExclusion(pos: [number, number, number], zone: ExclusionZone): boolean {
  const dx = pos[0] - zone.center[0]
  const dy = pos[1] - zone.center[1]
  const dz = pos[2] - zone.center[2]
  if (zone.kind === 'sphere') return dx * dx + dy * dy + dz * dz < zone.radius * zone.radius
  return Math.abs(dx) < zone.half[0] && Math.abs(dy) < zone.half[1] && Math.abs(dz) < zone.half[2]
}

function sampleWithExclusion(
  hw: number, hh: number, hd: number,
  vol: 'box' | 'sphere',
  exclusionZone?: ExclusionZone,
): [number, number, number] {
  let pos = sampleScatterPos(hw, hh, hd, vol)
  if (!exclusionZone) return pos
  for (let attempt = 0; attempt < 80; attempt++) {
    if (!insideExclusion(pos, exclusionZone)) return pos
    pos = sampleScatterPos(hw, hh, hd, vol)
  }
  return pos
}

// ── Layout: jittered even spread ──────────────────────────────────────────────

function jitteredPositions(
  count: number,
  hw: number, hh: number, hd: number,
  vol: 'box' | 'sphere',
): [number, number, number][] {
  const cbrtGeom = Math.cbrt(hw * hh * hd)
  const N        = Math.ceil(Math.cbrt(count * 2))
  const nx = Math.max(1, Math.round(N * hw / cbrtGeom))
  const ny = Math.max(1, Math.round(N * hh / cbrtGeom))
  const nz = Math.max(1, Math.round(N * hd / cbrtGeom))
  const cellW = (2 * hw) / nx
  const cellH = (2 * hh) / ny
  const cellD = (2 * hd) / nz
  const r = (hw + hh + hd) / 3
  const r2 = r * r

  const valid: number[] = []
  for (let iz = 0; iz < nz; iz++) {
    for (let iy = 0; iy < ny; iy++) {
      for (let ix = 0; ix < nx; ix++) {
        if (vol === 'sphere') {
          const cx = -hw + (ix + 0.5) * cellW
          const cy = -hh + (iy + 0.5) * cellH
          const cz = -hd + (iz + 0.5) * cellD
          if (cx * cx + cy * cy + cz * cz > r2) continue
        }
        valid.push(ix + iy * nx + iz * nx * ny)
      }
    }
  }

  // Fisher-Yates shuffle
  for (let i = valid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[valid[i], valid[j]] = [valid[j], valid[i]]
  }

  const out: [number, number, number][] = []
  for (let i = 0; i < count; i++) {
    const cell = valid[i % Math.max(1, valid.length)]
    const ix = cell % nx
    const iy = Math.floor(cell / nx) % ny
    const iz = Math.floor(cell / (nx * ny))
    const cx = -hw + (ix + 0.5) * cellW
    const cy = -hh + (iy + 0.5) * cellH
    const cz = -hd + (iz + 0.5) * cellD
    let px = Math.max(-hw, Math.min(hw, cx + (Math.random() - 0.5) * cellW * 0.7))
    let py = Math.max(-hh, Math.min(hh, cy + (Math.random() - 0.5) * cellH * 0.7))
    let pz = Math.max(-hd, Math.min(hd, cz + (Math.random() - 0.5) * cellD * 0.7))
    if (vol === 'sphere') {
      const d = Math.sqrt(px * px + py * py + pz * pz)
      if (d > r) { px = px * r / d * 0.97; py = py * r / d * 0.97; pz = pz * r / d * 0.97 }
    }
    out.push([px, py, pz])
  }
  return out
}

// ── Layout: assembled scatter (with exclusion + orientation) ──────────────────

function computeScatterLayout(
  count: number,
  width: number, height: number, depth: number,
  vol: 'box' | 'sphere',
  orient: 'random' | 'static',
  exclusionZone?: ExclusionZone,
  even = false,
): MarkPlacement[] {
  const hw = width  * SCATTER_FILL
  const hh = height * SCATTER_FILL
  const hd = depth  * SCATTER_FILL
  const evenPos = even ? jitteredPositions(count, hw, hh, hd, vol) : null
  const out: MarkPlacement[] = []
  for (let i = 0; i < count; i++) {
    let pos: [number, number, number]
    if (evenPos) {
      pos = evenPos[i]
      if (exclusionZone && insideExclusion(pos, exclusionZone)) {
        pos = sampleWithExclusion(hw, hh, hd, vol, exclusionZone)
      }
    } else {
      pos = sampleWithExclusion(hw, hh, hd, vol, exclusionZone)
    }
    const rot: [number, number, number] = orient === 'random'
      ? [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2]
      : [0, 0, 0]
    out.push({ pos, rot })
  }
  return out
}

// Count how many pairs of marks overlap, treating each as a sphere of radii[i].
function countOverlaps(layout: MarkPlacement[], radii: number[]): number {
  let count = 0
  for (let i = 0; i < layout.length; i++) {
    const a = layout[i].pos
    for (let j = i + 1; j < layout.length; j++) {
      const b = layout[j].pos
      const dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2]
      const minD = radii[i] + radii[j]
      if (dx * dx + dy * dy + dz * dz < minD * minD) count++
    }
  }
  return count
}

const OVERLAP_ATTEMPTS_MAX = 100

// How many candidate arrangements to try. Aim for OVERLAP_ATTEMPTS_MAX, but cap
// total pairwise work (~2M comparisons ≈ a few ms) so huge counts don't stall —
// the early-exit below already makes the common (no-overlap) case cost one try.
function overlapAttempts(count: number): number {
  const perAttempt = Math.max(1, (count * count) / 2)
  return Math.max(8, Math.min(OVERLAP_ATTEMPTS_MAX, Math.floor(2_000_000 / perAttempt)))
}

// Generate several candidate arrangements and keep the one with the fewest
// overlapping pairs — so sizeable marks don't visibly collide.
function bestScatterLayout(
  count: number,
  width: number, height: number, depth: number,
  vol: 'box' | 'sphere',
  orient: 'random' | 'static',
  radii: number[],
  exclusionZone?: ExclusionZone,
  even = false,
): MarkPlacement[] {
  const attempts = overlapAttempts(count)
  let best = computeScatterLayout(count, width, height, depth, vol, orient, exclusionZone, even)
  let bestOverlaps = countOverlaps(best, radii)
  for (let a = 1; a < attempts && bestOverlaps > 0; a++) {
    const cand = computeScatterLayout(count, width, height, depth, vol, orient, exclusionZone, even)
    const ov   = countOverlaps(cand, radii)
    if (ov < bestOverlaps) { best = cand; bestOverlaps = ov }
  }
  return best
}

// ── Layout: adjacent placement (random points on a flat surface) ──────────────

// Marks are scattered randomly across the X-Z plane, spread out via the same
// overlap-avoidance as scattering (so they read as adjacent, not clumped). Each
// carries an up-normal so the shared renderer stands it upright on the surface.
function surfaceScatterLayout(count: number, width: number, depth: number, radii: number[]): MarkPlacement[] {
  const hw = width * SCATTER_FILL
  const hd = depth * SCATTER_FILL
  const sample = (): MarkPlacement[] => Array.from({ length: count }, () => ({
    pos:    [(Math.random() - 0.5) * 2 * hw, 0, (Math.random() - 0.5) * 2 * hd] as [number, number, number],
    normal: [0, 1, 0] as [number, number, number],
  }))
  const attempts = overlapAttempts(count)
  let best = sample()
  let bestOverlaps = countOverlaps(best, radii)
  for (let a = 1; a < attempts && bestOverlaps > 0; a++) {
    const cand = sample()
    const ov   = countOverlaps(cand, radii)
    if (ov < bestOverlaps) { best = cand; bestOverlaps = ov }
  }
  return best
}

// ── Layout: stacking (vertical column, base at origin) ────────────────────────

// Every mark shares the X-Z origin; the shared renderer (stack mode) piles them
// vertically using each mark's post-encoding height, so the column grows upward
// from the surface regardless of a size/scale encoding. With randomOrient each
// mark is spun a random amount about the vertical (Y) axis — this varies the
// look without changing any mark's height, so the tight stacking is preserved.
function stackLayout(count: number, randomOrient: boolean): MarkPlacement[] {
  const TAU = Math.PI * 2
  return Array.from({ length: count }, () => (
    randomOrient
      ? { pos: [0, 0, 0] as [number, number, number], rot: [0, Math.random() * TAU, 0] as [number, number, number] }
      : { pos: [0, 0, 0] as [number, number, number] }
  ))
}

// ── Layer ─────────────────────────────────────────────────────────────────────

export function Layer({
  width, depth, height, color, position,
  particleCount, markShape, markMaterial,
  markSize = DEFAULT_SIZE, structural = DEFAULT_STRUCTURAL,
  customModelUrl, parts,
  labelShow, labelData, seed = 0, boundingVolume = 'box',
  showBounds = true, orientation = 'random', exclusionZone, evenDistribution = false,
  adjacent = false, showGrid = false, stacking = false, stackRandomOrient = false,
  instanceSizes, instanceColors, colorTint, markLabels,
}: LayerProps) {
  const occ = occludeProp(useContext(LabelOccludeContext))
  const { fontSize: labelFs, distance: labelDist, bold: labelBold, italic: labelItalic, color: labelColor } = useContext(ColLabelStyleContext)
  const labelWeight = labelBold ? 700 : 400
  const labelFStyle = labelItalic ? 'italic' : 'normal'
  const hOff = height / 2 + 0.8 + labelDist   // top/bottom label offset (+ custom distance)
  const wOff = width  / 2 + 0.2 + labelDist   // left/right label offset

  const useCustom = markShape === 'custom' && !!customModelUrl
  // GLB scatter historically renders at least 5 marks; a per-row encoding uses the exact count.
  const perRow = !!instanceSizes || !!instanceColors
  const renderCount = useCustom && !perRow ? Math.max(5, particleCount) : particleCount

  // Placements for every instance. Scatter tries several seeds and keeps the
  // arrangement with the fewest overlapping marks (each approximated as a
  // sphere sized from its scale); the adjacent grid needs no search.
  const layout = useMemo(() => {
    if (stacking) return stackLayout(renderCount, stackRandomOrient)
    const radii = Array.from({ length: renderCount }, (_, i) => {
      const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : markSize
      // Adjacent packs on a plane, so spread by footprint (x-z); scatter uses the full radius.
      const extent = adjacent ? Math.max(msz.x, msz.z) : Math.max(msz.x, msz.y, msz.z)
      return 0.5 * MARK_BASE * SCATTER_SCALE * extent
    })
    if (adjacent) return surfaceScatterLayout(renderCount, width, depth, radii)
    return bestScatterLayout(renderCount, width, height, depth, boundingVolume, orientation, radii, exclusionZone, evenDistribution)
  }, [
    adjacent, stacking, stackRandomOrient,
    renderCount, width, height, depth, seed, boundingVolume, orientation,
    exclusionZone, evenDistribution, instanceSizes,
    markSize.x, markSize.y, markSize.z,
  ])

  const edgesGeo = useMemo(() => {
    if (boundingVolume === 'sphere') {
      const r      = (width + height + depth) / 3 * SCATTER_FILL
      const sphere = new THREE.SphereGeometry(r, 12, 8)
      const wire   = new THREE.EdgesGeometry(sphere)
      sphere.dispose()
      return wire
    }
    const box   = new THREE.BoxGeometry(width, height, depth)
    const edges = new THREE.EdgesGeometry(box)
    box.dispose()
    return edges
  }, [width, height, depth, boundingVolume])

  useEffect(() => () => { edgesGeo.dispose() }, [edgesGeo])

  return (
    <group position={position}>
      {/* Adjacent shows an optional reference grid on the surface (marks sit on it);
          volume arrangements show the bounding box / sphere wireframe; stacking
          shows neither (the column speaks for itself). */}
      {stacking ? null : adjacent
        ? (showGrid && (
            <gridHelper args={[2, 12, '#777777', '#4a4a4a']} scale={[width * SCATTER_FILL, 1, depth * SCATTER_FILL]} />
          ))
        : (showBounds && (
            <lineSegments geometry={edgesGeo}>
              <lineBasicMaterial color="#666666" transparent opacity={0.7} />
            </lineSegments>
          ))
      }

      {/* All rendering + per-instance encodings live in the shared renderer.
          Adjacent stands each mark on the surface; stacking piles them vertically. */}
      <MarkInstances
        placements={layout}
        markShape={markShape}
        markMaterial={markMaterial}
        markSize={markSize}
        color={color}
        structural={structural}
        customModelUrl={useCustom ? customModelUrl : undefined}
        parts={parts}
        standOnAnchor={adjacent}
        stack={stacking}
        instanceSizes={instanceSizes}
        instanceColors={instanceColors}
        colorTint={colorTint}
        markLabels={markLabels}
      />

      {labelShow && (
        <>
          {labelData.top    && (
            <>
              <group position={[0, hOff, 0]} userData={{ isLabel: true, labelText: labelData.top,    labelPos: 'top'    }} />
              <Html position={[0, hOff, 0]} center occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: `${labelFs}px`, fontWeight: labelWeight, fontStyle: labelFStyle, color: labelColor, fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.top}
                </span>
              </Html>
            </>
          )}
          {labelData.bottom && (
            <>
              <group position={[0, -(hOff), 0]} userData={{ isLabel: true, labelText: labelData.bottom, labelPos: 'bottom' }} />
              <Html position={[0, -(hOff), 0]} center occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: `${labelFs}px`, fontWeight: labelWeight, fontStyle: labelFStyle, color: labelColor, fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.bottom}
                </span>
              </Html>
            </>
          )}
          {labelData.left   && (
            <>
              <group position={[-(wOff), 0, 0]} userData={{ isLabel: true, labelText: labelData.left,   labelPos: 'left'   }} />
              <Html position={[-(wOff), 0, 0]} occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: `${labelFs}px`, fontWeight: labelWeight, fontStyle: labelFStyle, color: labelColor, fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', textAlign: 'right', transform: 'translate(-100%, -50%)' }}>
                  {labelData.left}
                </span>
              </Html>
            </>
          )}
          {labelData.right  && (
            <>
              <group position={[wOff, 0, 0]} userData={{ isLabel: true, labelText: labelData.right,  labelPos: 'right'  }} />
              <Html position={[wOff, 0, 0]} occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: `${labelFs}px`, fontWeight: labelWeight, fontStyle: labelFStyle, color: labelColor, fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', transform: 'translateY(-50%)' }}>
                  {labelData.right}
                </span>
              </Html>
            </>
          )}
        </>
      )}
    </group>
  )
}
