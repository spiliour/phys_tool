import { useRef, useMemo, useEffect, useContext, createContext, Suspense, CSSProperties } from 'react'
import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3, LabelOccludeMode } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MODEL_SCALE_OVERRIDES } from './models'
import { MarkMaterialElement } from './MarkMaterial'

// Label occlusion config shared with every label. 'optimized' raycasts only the
// registered occluders (decorations) instead of the whole scene.
export type OccluderRef = { current: THREE.Object3D | null }
export interface LabelOccludeValue {
  mode:      LabelOccludeMode
  occluders: OccluderRef[]
}
export const LabelOccludeContext = createContext<LabelOccludeValue>({ mode: 'off', occluders: [] })

// Translate the occlusion config into drei's <Html occlude> prop.
export function occludeProp(v: LabelOccludeValue): true | OccluderRef[] | undefined {
  if (v.mode === 'off')  return undefined
  if (v.mode === 'full') return true
  return v.occluders.length ? v.occluders : undefined   // optimized: decorations only
}

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
  labelShow:            boolean
  labelData:            LayerLabelData
  seed?:                number
  boundingVolume?:      'box' | 'sphere'
  showBounds?:          boolean
  orientation?:         'random' | 'static'
  exclusionZone?:       ExclusionZone
  evenDistribution?:    boolean
  instanceSizes?:       Vec3[]   // per-instance size override (data-driven scale encoding)
  instanceColors?:      string[] // per-instance colour override (data-driven colour encoding)
  colorTint?:           boolean  // tint GLB material instead of replacing it
  markLabels?:          MarkLabelPair[]  // per-instance labels shown above / below each scattered mark
}

// Text to float above and/or below a scattered mark (each may hold two joined values).
export interface MarkLabelPair {
  above: string | null
  below: string | null
}

const DEFAULT_SIZE: Vec3 = { x: 1, y: 1, z: 1 }
const DEFAULT_STRUCTURAL: StructuralConfig = { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 }
const shadow = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'

const markLabelSpan: CSSProperties = {
  display: 'block', fontSize: '11px', color: '#e8e8e8',
  fontFamily: 'Courier New, monospace', textShadow: shadow,
  whiteSpace: 'nowrap', userSelect: 'none',
}

// Half-height of a primitive mark's base geometry (before scatter scale / size).
function primitiveHalfY(shape: MarkShape): number {
  if (shape === 'sphere') return MARK_BASE * 0.52
  if (shape === 'star')   return MARK_BASE * 0.64
  return MARK_BASE * 0.5   // box / custom fallback
}

// Floating text tags hugging the top and/or bottom of a single scattered mark.
// halfY is the mark's rendered half-height in world units, so the tags sit right
// at its surface regardless of per-instance scale.
function MarkLabelTags({ pos, halfY, above, below }: {
  pos:   [number, number, number]
  halfY: number
  above: string | null
  below: string | null
}) {
  const occ = occludeProp(useContext(LabelOccludeContext))
  return (
    <group position={pos}>
      {above && (
        <>
          <group position={[0, halfY, 0]} userData={{ isLabel: true, labelText: above, labelPos: 'top' }} />
          <Html position={[0, halfY, 0]} center occlude={occ} style={{ pointerEvents: 'none' }}>
            <span data-phys-label="" style={{ ...markLabelSpan, transform: 'translateY(-100%)' }}>{above}</span>
          </Html>
        </>
      )}
      {below && (
        <>
          <group position={[0, -halfY, 0]} userData={{ isLabel: true, labelText: below, labelPos: 'bottom' }} />
          <Html position={[0, -halfY, 0]} center occlude={occ} style={{ pointerEvents: 'none' }}>
            <span data-phys-label="" style={{ ...markLabelSpan, transform: 'translateY(0)' }}>{below}</span>
          </Html>
        </>
      )}
    </group>
  )
}

// ── Imperative material helper (used only for GLB clones) ─────────────────────

function buildMaterial(material: MarkMaterial, color: string): THREE.Material {
  const col = new THREE.Color(color)
  switch (material) {
    case 'fluid':
      return new THREE.MeshPhysicalMaterial({
        color: col, transmission: 0.92, roughness: 0.04,
        metalness: 0, ior: 1.5, thickness: 0.5, envMapIntensity: 1.0,
      })
    case 'metal':
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.06, metalness: 0.95, envMapIntensity: 2.0 })
    case 'emissive':
      return new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2.2, roughness: 0.55 })
    default:
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.65, metalness: 0.05 })
  }
}

// Clone a GLB's own material and tint it (multiplies its texture), keeping maps
// and surface properties — used for the "tint" colour-encoding option.
export function tintMaterial(src: THREE.Material, color: string): THREE.Material {
  const m = src.clone() as THREE.MeshStandardMaterial
  if (m.color) m.color = new THREE.Color(color)
  return m
}

// ── Fill instance matrices ────────────────────────────────────────────────────

export const SCATTER_SCALE = 5  // scatter particles are 5× larger than the base mark size
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

// ── Jittered-grid: evenly spread count points with random offset per cell ─────

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

// A single scattered instance's placement (shared by the instanced mesh, the
// GLB clones, and the per-mark label layer so all three line up exactly).
export interface ScatterInstance {
  pos: [number, number, number]
  rot: [number, number, number]
}

function computeScatterLayout(
  count: number,
  width: number, height: number, depth: number,
  vol: 'box' | 'sphere',
  orient: 'random' | 'static',
  exclusionZone?: ExclusionZone,
  even = false,
): ScatterInstance[] {
  const hw = width  * SCATTER_FILL
  const hh = height * SCATTER_FILL
  const hd = depth  * SCATTER_FILL
  const evenPos = even ? jitteredPositions(count, hw, hh, hd, vol) : null
  const out: ScatterInstance[] = []
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
function countOverlaps(layout: ScatterInstance[], radii: number[]): number {
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
): ScatterInstance[] {
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

function fillInstanceMatrices(
  mesh: THREE.InstancedMesh,
  layout: ScatterInstance[],
  size: Vec3,
  instanceSizes?: Vec3[],
  instanceColors?: string[],
) {
  const dummy = new THREE.Object3D()
  const col = new THREE.Color()
  for (let i = 0; i < layout.length; i++) {
    dummy.position.set(...layout[i].pos)
    dummy.rotation.set(...layout[i].rot)
    const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : size
    dummy.scale.set(msz.x * SCATTER_SCALE, msz.y * SCATTER_SCALE, msz.z * SCATTER_SCALE)
    dummy.updateMatrix()
    mesh.setMatrixAt(i, dummy.matrix)
    if (instanceColors) mesh.setColorAt(i, col.set(instanceColors[i % instanceColors.length]))
  }
  if (instanceColors && mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  mesh.instanceMatrix.needsUpdate = true
}

// ── GLB scatter: individual primitives per instance ───────────────────────────
// instancedMesh can't handle multi-material GLBs. We clone the scene per
// instance and override materials imperatively.

function ScatteredGLBInstances({
  url, layout, markSize, markMaterial, color, instanceSizes, instanceColors, colorTint, markLabels,
}: {
  url:               string
  layout:            ScatterInstance[]
  markSize:          Vec3
  markMaterial:      MarkMaterial
  color:             string
  instanceSizes?:    Vec3[]
  instanceColors?:   string[]
  colorTint?:        boolean
  markLabels?:       MarkLabelPair[]
}) {
  const { scene: gltfScene } = useGLTF(url)

  // Normalise scale AND compute center so every model is centered at its
  // instance position regardless of where the GLB's origin sits.
  const { normScale, center, halfYUnit } = useMemo(() => {
    gltfScene.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(gltfScene)
    const size   = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    const maxDim = Math.max(size.x, size.y, size.z, 0.001)
    const scaleOverride = url.includes('drum') ? 0.63
      : url.includes('clarinet') ? 1.2
      : url.includes('harp') ? 0.825
      : 1
    const normScale = (MARK_BASE / maxDim) * scaleOverride
    // actual half-height of the (normalised) model — lets labels hug the model
    // top/bottom instead of a generic MARK_BASE cube.
    return { normScale, center, halfYUnit: (size.y * normScale) / 2 }
  }, [gltfScene, url])

  // Clone scene once per instance
  const clones = useMemo(
    () => layout.map(() => gltfScene.clone(true)),
    [gltfScene, layout],
  )

  useEffect(
    () => () => {
      clones.forEach(clone =>
        clone.traverse(child => {
          if (child instanceof THREE.Mesh) child.geometry.dispose()
        }),
      )
    },
    [clones],
  )

  // Shared material for non-original mode; rebuild when selection changes
  const mat = useMemo(
    () => (markMaterial !== 'original' ? buildMaterial(markMaterial, color) : null),
    [markMaterial, color],
  )
  useEffect(() => () => { mat?.dispose() }, [mat])

  // Replace-mode per-instance materials — one per data-driven colour. 'original'
  // models have no base colour, so treat them as plastic. (Not used when tinting.)
  const colorMats = useMemo(
    () => (instanceColors && !colorTint
      ? instanceColors.map(c => buildMaterial(markMaterial === 'original' ? 'plastic' : markMaterial, c))
      : null),
    [instanceColors, colorTint, markMaterial],
  )
  useEffect(() => () => { colorMats?.forEach(m => m.dispose()) }, [colorMats])

  // Apply materials to every clone. Tint mode clones each mesh's own material and
  // recolours it (keeps textures); otherwise replace with the encoded/shared material.
  const tintMats = useRef<THREE.Material[]>([])
  useEffect(() => {
    clones.forEach((clone, i) => {
      clone.traverse(child => {
        if (!(child instanceof THREE.Mesh)) return
        if (!child.userData.__origMat) child.userData.__origMat = child.material
        const orig = child.userData.__origMat as THREE.Material | THREE.Material[]
        if (instanceColors && colorTint) {
          const c = instanceColors[i % instanceColors.length]
          const make = (m: THREE.Material) => { const t = tintMaterial(m, c); tintMats.current.push(t); return t }
          child.material = Array.isArray(orig) ? orig.map(make) : make(orig)
        } else if (colorMats) {
          child.material = colorMats[i % colorMats.length]
        } else if (mat) {
          child.material = mat
        } else {
          child.material = orig
        }
      })
    })
    return () => { tintMats.current.forEach(m => m.dispose()); tintMats.current = [] }
  }, [mat, colorMats, clones, instanceColors, colorTint])

  return (
    <>
      {clones.map((clone, i) => {
        // Per-axis scale including user markSize (or the per-instance
        // data-driven size) and the scatter size boost
        const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : markSize
        const sx = normScale * msz.x * SCATTER_SCALE
        const sy = normScale * msz.y * SCATTER_SCALE
        const sz = normScale * msz.z * SCATTER_SCALE
        // Centering offset in the primitive's pre-scale space.
        // After scale is applied, scale ⊙ center cancels this, leaving geometry
        // centred at the group origin regardless of the GLB's own origin.
        const ox = -center.x * sx
        const oy = -center.y * sy
        const oz = -center.z * sz
        const lbl = markLabels?.[i]
        return (
          <group key={i}>
            {/* Outer group carries the scatter position + random rotation.
                Inner primitive carries only the centering offset + scale so that
                the model's geometric centre aligns with the group origin. */}
            <group position={layout[i].pos} rotation={layout[i].rot}>
              <primitive object={clone} position={[ox, oy, oz]} scale={[sx, sy, sz]} />
            </group>
            {lbl && (lbl.above || lbl.below) && (
              <MarkLabelTags
                pos={layout[i].pos}
                halfY={halfYUnit * SCATTER_SCALE * msz.y}
                above={lbl.above}
                below={lbl.below}
              />
            )}
          </group>
        )
      })}
    </>
  )
}

// ── Layer ─────────────────────────────────────────────────────────────────────

export function Layer({
  width, depth, height, color, position,
  particleCount, markShape, markMaterial,
  markSize = DEFAULT_SIZE, structural = DEFAULT_STRUCTURAL,
  customModelUrl,
  labelShow, labelData, seed = 0, boundingVolume = 'box',
  showBounds = true, orientation = 'random', exclusionZone, evenDistribution = false,
  instanceSizes, instanceColors, colorTint, markLabels,
}: LayerProps) {
  const instanceRef = useRef<THREE.InstancedMesh>(null)
  const occ = occludeProp(useContext(LabelOccludeContext))

  const useCustom = markShape === 'custom' && !!customModelUrl
  // GLB scatter historically renders at least 5 marks; a per-row encoding uses the exact count.
  const perRow = !!instanceSizes || !!instanceColors
  const renderCount = useCustom && !perRow ? Math.max(5, particleCount) : particleCount

  // Positions + rotations for every scattered instance, shared by the instanced
  // mesh, the GLB clones, and the per-mark labels so all three line up exactly.
  // Tries several seeds and keeps the arrangement with the fewest overlapping
  // marks (each mark approximated as a sphere sized from its scale).
  const layout = useMemo(() => {
    const radii = Array.from({ length: renderCount }, (_, i) => {
      const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : markSize
      return 0.5 * MARK_BASE * SCATTER_SCALE * Math.max(msz.x, msz.y, msz.z)
    })
    return bestScatterLayout(renderCount, width, height, depth, boundingVolume, orientation, radii, exclusionZone, evenDistribution)
  }, [
    renderCount, width, height, depth, seed, boundingVolume, orientation,
    exclusionZone, evenDistribution, instanceSizes,
    markSize.x, markSize.y, markSize.z,
  ])

  const geo = useMemo(() => makeMarkGeometry(markShape), [markShape])

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

  useEffect(() => {
    const mesh = instanceRef.current
    if (!mesh) return
    fillInstanceMatrices(mesh, layout, markSize, instanceSizes, instanceColors)
  }, [layout, markShape, markSize.x, markSize.y, markSize.z, instanceSizes, instanceColors])

  useEffect(() => () => { geo.dispose() },      [geo])
  useEffect(() => () => { edgesGeo.dispose() }, [edgesGeo])

  return (
    <group position={position}>
      {showBounds && <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#666666" transparent opacity={0.7} />
      </lineSegments>}

      {useCustom ? (
        <Suspense fallback={null}>
          <ScatteredGLBInstances
            url={customModelUrl!}
            layout={layout}
            markSize={markSize}
            markMaterial={markMaterial}
            color={color}
            instanceSizes={instanceSizes}
            instanceColors={instanceColors}
            colorTint={colorTint}
            markLabels={markLabels}
          />
        </Suspense>
      ) : (
        /* Basic shapes: original JSX-child material pattern — tested and working.
           With a colour encoding the base colour is white so the per-instance
           instanceColor shows through exactly (three multiplies the two). */
        <instancedMesh
          key={`${particleCount}-${markShape}-${instanceColors ? 'col' : 'plain'}`}
          ref={instanceRef}
          args={[geo, undefined, particleCount]}
        >
          <MarkMaterialElement material={markMaterial} structural={structural} color={instanceColors ? '#ffffff' : color} />
        </instancedMesh>
      )}

      {/* Per-mark labels for primitive marks (GLB marks render their own, measured). */}
      {!useCustom && markLabels && layout.map((inst, i) => {
        const lbl = markLabels[i]
        if (!lbl || (!lbl.above && !lbl.below)) return null
        const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : markSize
        // Sit right at the scaled mark's surface (msz already carries the per-instance scale).
        const halfY = primitiveHalfY(markShape) * SCATTER_SCALE * msz.y
        return (
          <MarkLabelTags key={`lbl-${i}`} pos={inst.pos} halfY={halfY} above={lbl.above} below={lbl.below} />
        )
      })}

      {labelShow && (
        <>
          {labelData.top    && (
            <>
              <group position={[0, height / 2 + 0.8, 0]} userData={{ isLabel: true, labelText: labelData.top,    labelPos: 'top'    }} />
              <Html position={[0, height / 2 + 0.8, 0]} center occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.top}
                </span>
              </Html>
            </>
          )}
          {labelData.bottom && (
            <>
              <group position={[0, -(height / 2 + 0.8), 0]} userData={{ isLabel: true, labelText: labelData.bottom, labelPos: 'bottom' }} />
              <Html position={[0, -(height / 2 + 0.8), 0]} center occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.bottom}
                </span>
              </Html>
            </>
          )}
          {labelData.left   && (
            <>
              <group position={[-(width / 2 + 0.2), 0, 0]} userData={{ isLabel: true, labelText: labelData.left,   labelPos: 'left'   }} />
              <Html position={[-(width / 2 + 0.2), 0, 0]} occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', textAlign: 'right', transform: 'translate(-100%, -50%)' }}>
                  {labelData.left}
                </span>
              </Html>
            </>
          )}
          {labelData.right  && (
            <>
              <group position={[width / 2 + 0.2, 0, 0]} userData={{ isLabel: true, labelText: labelData.right,  labelPos: 'right'  }} />
              <Html position={[width / 2 + 0.2, 0, 0]} occlude={occ} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', transform: 'translateY(-50%)' }}>
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
