/**
 * MarkInstances.tsx — THE shared mark renderer.
 *
 * Every arrangement (scattering, adjacent grid, surface placement, …) reduces to
 * "a list of placements"; this component turns those placements into rendered
 * marks and applies every per-instance encoding in ONE place:
 *   size / scale · colour (replace or tint) · geometry (primitive or GLB) · labels
 *
 * Add a new encoding here and every arrangement that renders through
 * MarkInstances gets it automatically. Add a new arrangement by producing
 * placements and rendering <MarkInstances> — all encodings come for free.
 */
import { useRef, useMemo, useEffect, useReducer, useContext, createContext, Suspense, CSSProperties } from 'react'
import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3, LabelOccludeMode, MarkPart } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MarkMaterialElement, MaterialParams, DEFAULT_MATERIAL_PARAMS, MaterialParamsContext, TOON_GRADIENT } from './MarkMaterial'

// ── Shared constants ──────────────────────────────────────────────────────────

export const SCATTER_SCALE = 5  // collection marks are 5× larger than the base mark size

const UP = new THREE.Vector3(0, 1, 0)

// ── Label occlusion (context shared by every floating label) ──────────────────

export type OccluderRef = { current: THREE.Object3D | null }
export interface LabelOccludeValue {
  mode:      LabelOccludeMode
  occluders: OccluderRef[]
}
export const LabelOccludeContext = createContext<LabelOccludeValue>({ mode: 'off', occluders: [] })

// Shared label style (text size + extra distance from the object), provided at the
// canvas root so every label renderer honours the Labels-panel controls.
export interface LabelStyle { fontSize: number; distance: number; bold: boolean; italic: boolean; color: string }
export const DEFAULT_LABEL_STYLE: LabelStyle = { fontSize: 11, distance: 0, bold: false, italic: false, color: '#e8e8e8' }
export const LabelStyleContext    = createContext<LabelStyle>(DEFAULT_LABEL_STYLE)   // mark labels
export const ColLabelStyleContext = createContext<LabelStyle>(DEFAULT_LABEL_STYLE)   // collection labels

// Translate the occlusion config into drei's <Html occlude> prop.
export function occludeProp(v: LabelOccludeValue): true | OccluderRef[] | undefined {
  if (v.mode === 'off')  return undefined
  if (v.mode === 'full') return true
  return v.occluders.length ? v.occluders : undefined   // optimized: decorations only
}

// ── Placement + label types ───────────────────────────────────────────────────

/** One mark's placement. `pos` is the mark centre — unless `standOnAnchor` is
 * set on MarkInstances, in which case `pos` is the anchor point (e.g. a surface
 * sample) and the mark is offset along `normal` by its own half-height so its
 * base touches the anchor. `normal` also orients the mark's +Y. */
export interface MarkPlacement {
  pos:     [number, number, number]
  rot?:    [number, number, number]   // euler (scatter's random orientation)
  normal?: [number, number, number]   // unit vector; +Y aligns to it when present
}

/** Text floating above and/or below a mark (each side may hold joined values). */
export interface MarkLabelPair {
  above: string | null
  below: string | null
}

// ── Small shared helpers ──────────────────────────────────────────────────────

/** Half-height of a primitive mark's base geometry (before any scaling). */
function primitiveHalfY(shape: MarkShape): number {
  if (shape === 'sphere') return MARK_BASE * 0.52
  if (shape === 'star')   return MARK_BASE * 0.64
  return MARK_BASE * 0.5   // box / custom fallback
}

/** Per-model tweaks on top of automatic normalisation (matches CustomModelMesh). */
function glbScaleOverride(url: string): number {
  return url.includes('drum') ? 0.63
    : url.includes('clarinet') ? 1.2
    : url.includes('harp') ? 0.825
    : 1
}

/** Imperative material for GLB clones (mirrors MarkMaterialElement's presets). */
export function buildMaterial(material: MarkMaterial, color: string, params: MaterialParams = DEFAULT_MATERIAL_PARAMS): THREE.Material {
  const col = new THREE.Color(color)
  const alpha = { transparent: params.opacity < 1, opacity: params.opacity }
  switch (material) {
    case 'custom':
      return new THREE.MeshStandardMaterial({ color: col, roughness: params.roughness, metalness: params.metalness, ...alpha })
    case 'fluid':
      return new THREE.MeshPhysicalMaterial({
        color: col, transmission: 0.92, roughness: 0.04,
        metalness: 0, ior: 1.5, thickness: 0.5, envMapIntensity: 1.0, ...alpha,
      })
    case 'glass':
      return new THREE.MeshPhysicalMaterial({
        color: col, transmission: 1, roughness: 0, metalness: 0,
        ior: 1.52, thickness: 0.6, specularIntensity: 1, envMapIntensity: 1, ...alpha,
      })
    case 'metal':
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.06, metalness: 0.95, envMapIntensity: 2.0, ...alpha })
    case 'iridescent':
      return new THREE.MeshPhysicalMaterial({
        color: col, metalness: 0, roughness: 0.2,
        iridescence: 1, iridescenceIOR: 1.3, iridescenceThicknessRange: [100, 400], envMapIntensity: 1.2, ...alpha,
      })
    case 'emissive':
      return new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2.2, roughness: 0.55, ...alpha })
    case 'toon':
      return new THREE.MeshToonMaterial({ color: col, gradientMap: TOON_GRADIENT, ...alpha })
    case 'wireframe':
      return new THREE.MeshBasicMaterial({ color: col, wireframe: true, ...alpha })
    default:
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.65, metalness: 0.05, ...alpha })
  }
}

/** Clone a GLB's own material and recolour it (keeps maps / surface props) —
 * the "tint" colour-encoding option. */
export function tintMaterial(src: THREE.Material, color: string): THREE.Material {
  const m = src.clone() as THREE.MeshStandardMaterial
  if (m.color) m.color = new THREE.Color(color)
  return m
}

// ── Per-mark floating labels ──────────────────────────────────────────────────

const shadow = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'
const markLabelSpan: CSSProperties = {
  display: 'block', fontSize: '11px', color: '#e8e8e8',
  fontFamily: 'Courier New, monospace', textShadow: shadow,
  whiteSpace: 'nowrap', userSelect: 'none',
}

/** Tags hugging a mark's top/bottom. `center` is the mark centre; `dir` its
 * local up (surface normal or world up); `halfY` its rendered half-height.
 * `gapFactor` adds a little extra clearance (× halfY) past the surface. */
function MarkLabelTags({ center, dir, halfY, gapFactor, above, below }: {
  center:    [number, number, number]
  dir:       [number, number, number]
  halfY:     number
  gapFactor: number
  above:     string | null
  below:     string | null
}) {
  const occ = occludeProp(useContext(LabelOccludeContext))
  const { fontSize, distance, bold, italic, color } = useContext(LabelStyleContext)
  const off = halfY * (1 + gapFactor) + distance
  const weight = bold ? 700 : 400
  const fstyle = italic ? 'italic' : 'normal'
  const abovePos: [number, number, number] = [center[0] + dir[0] * off, center[1] + dir[1] * off, center[2] + dir[2] * off]
  const belowPos: [number, number, number] = [center[0] - dir[0] * off, center[1] - dir[1] * off, center[2] - dir[2] * off]
  return (
    <>
      {above && (
        <group position={abovePos}>
          <group userData={{ isLabel: true, labelText: above, labelPos: 'top' }} />
          <Html center occlude={occ} style={{ pointerEvents: 'none' }}>
            <span data-phys-label="" style={{ ...markLabelSpan, fontSize: `${fontSize}px`, fontWeight: weight, fontStyle: fstyle, color, transform: 'translateY(-100%)' }}>{above}</span>
          </Html>
        </group>
      )}
      {below && (
        <group position={belowPos}>
          <group userData={{ isLabel: true, labelText: below, labelPos: 'bottom' }} />
          <Html center occlude={occ} style={{ pointerEvents: 'none' }}>
            <span data-phys-label="" style={{ ...markLabelSpan, fontSize: `${fontSize}px`, fontWeight: weight, fontStyle: fstyle, color, transform: 'translateY(0)' }}>{below}</span>
          </Html>
        </group>
      )}
    </>
  )
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface MarkInstancesProps {
  placements:      MarkPlacement[]
  markShape:       MarkShape
  markMaterial:    MarkMaterial
  markSize:        Vec3
  color:           string
  structural:      StructuralConfig
  customModelUrl?: string          // renders GLB clones when markShape === 'custom'
  scaleBoost?:     number          // world scale multiplier (default SCATTER_SCALE)
  standOnAnchor?:  boolean         // pos = anchor point; offset mark by halfY along normal
  stack?:          boolean         // stack marks vertically at pos: base of i on top of i-1
  labelGapFactor?: number          // extra label clearance × halfY (default 0)
  // Per-instance encodings (index i ← data row i, cycling):
  instanceSizes?:  Vec3[]
  instanceColors?: string[]
  colorTint?:      boolean         // tint GLB material instead of replacing it
  markLabels?:     MarkLabelPair[]
  parts?:          MarkPart[]      // compound mark: render each sub-shape per placement
}

const instSize = (instanceSizes: Vec3[] | undefined, fallback: Vec3, i: number): Vec3 =>
  instanceSizes ? instanceSizes[i % instanceSizes.length] : fallback

// Mark centre for a placement: pos, or pos offset along the normal by halfY.
function markCenter(p: MarkPlacement, halfY: number, standOnAnchor: boolean): [number, number, number] {
  if (!standOnAnchor || !p.normal) return p.pos
  return [p.pos[0] + p.normal[0] * halfY, p.pos[1] + p.normal[1] * halfY, p.pos[2] + p.normal[2] * halfY]
}

// Vertical stack: given each mark's rendered (post-encoding) half-height, return
// each mark's CENTRE-Y offset so mark i's base rests exactly on mark i-1's top.
// (Random-orientation stacks spin marks about Y only, which leaves the height
// unchanged, so this tight spacing stays correct.)
function stackedCenterYs(halfYs: number[]): number[] {
  const out: number[] = []
  let base = 0
  for (const h of halfYs) { out.push(base + h); base += 2 * h }
  return out
}

// ── Primitive marks: one InstancedMesh ────────────────────────────────────────

function PrimitiveInstances({
  placements, markShape, markMaterial, markSize, color, structural,
  scaleBoost, standOnAnchor, stack, labelGapFactor,
  instanceSizes, instanceColors, markLabels,
}: MarkInstancesProps & { scaleBoost: number; standOnAnchor: boolean; stack: boolean; labelGapFactor: number }) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const geo = useMemo(() => makeMarkGeometry(markShape), [markShape])
  useEffect(() => () => { geo.dispose() }, [geo])

  const halfBase = primitiveHalfY(markShape) * scaleBoost
  const halfYs   = useMemo(
    () => placements.map((_, i) => halfBase * instSize(instanceSizes, markSize, i).y),
    [placements, halfBase, instanceSizes, markSize.y],
  )
  const stackYs  = useMemo(() => (stack ? stackedCenterYs(halfYs) : null), [stack, halfYs])
  // Centre of mark i: stacked column, surface anchor, or plain position.
  const centerOf = (p: MarkPlacement, i: number): [number, number, number] =>
    stackYs ? [p.pos[0], p.pos[1] + stackYs[i], p.pos[2]] : markCenter(p, halfYs[i], standOnAnchor)

  useEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    const dummy = new THREE.Object3D()
    const q = new THREE.Quaternion()
    const n = new THREE.Vector3()
    const col = new THREE.Color()
    placements.forEach((p, i) => {
      const msz = instSize(instanceSizes, markSize, i)
      dummy.position.set(...centerOf(p, i))
      if (p.normal && !stack) {
        q.setFromUnitVectors(UP, n.set(...p.normal))
        dummy.quaternion.copy(q)
      } else {
        dummy.rotation.set(...(p.rot ?? [0, 0, 0]))   // stacks stay upright
      }
      dummy.scale.set(msz.x * scaleBoost, msz.y * scaleBoost, msz.z * scaleBoost)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      if (instanceColors) mesh.setColorAt(i, col.set(instanceColors[i % instanceColors.length]))
    })
    mesh.instanceMatrix.needsUpdate = true
    if (instanceColors && mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [placements, markShape, markSize.x, markSize.y, markSize.z, scaleBoost, standOnAnchor, stack, instanceSizes, instanceColors])

  return (
    <>
      {/* With a colour encoding the base colour is white so the per-instance
          instanceColor shows through exactly (three multiplies the two). */}
      <instancedMesh
        key={`${placements.length}-${markShape}-${instanceColors ? 'col' : 'plain'}`}
        ref={ref}
        args={[geo, undefined, placements.length]}
      >
        <MarkMaterialElement material={markMaterial} structural={structural} color={instanceColors ? '#ffffff' : color} />
      </instancedMesh>

      {markLabels && placements.map((p, i) => {
        const lbl = markLabels[i]
        if (!lbl || (!lbl.above && !lbl.below)) return null
        const halfY = halfYs[i]
        return (
          <MarkLabelTags key={`lbl-${i}`}
            center={centerOf(p, i)}
            dir={stack ? [0, 1, 0] : (p.normal ?? [0, 1, 0])}
            halfY={halfY} gapFactor={labelGapFactor}
            above={lbl.above} below={lbl.below}
          />
        )
      })}
    </>
  )
}

// ── GLB marks: individual clones per instance ─────────────────────────────────
// instancedMesh can't handle multi-material GLBs; we clone the scene per
// instance and override materials imperatively.

function GLBInstances({
  placements, markMaterial, markSize, color,
  scaleBoost, standOnAnchor, stack, labelGapFactor,
  instanceSizes, instanceColors, colorTint, markLabels,
  url,
}: MarkInstancesProps & { url: string; scaleBoost: number; standOnAnchor: boolean; stack: boolean; labelGapFactor: number }) {
  const { scene: gltfScene } = useGLTF(url)
  const matParams = useContext(MaterialParamsContext)

  // Normalise scale AND compute centre so every model is centred at its
  // instance position regardless of where the GLB's origin sits.
  const { normScale, center, halfYUnit } = useMemo(() => {
    gltfScene.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(gltfScene)
    const size = new THREE.Vector3()
    const c    = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(c)
    const maxDim = Math.max(size.x, size.y, size.z, 0.001)
    const ns = (MARK_BASE / maxDim) * glbScaleOverride(url)
    // actual half-height of the (normalised) model — labels hug the model.
    return { normScale: ns, center: c, halfYUnit: (size.y * ns) / 2 }
  }, [gltfScene, url])

  const clones = useMemo(() => placements.map(() => gltfScene.clone(true)), [gltfScene, placements])
  useEffect(() => () => {
    clones.forEach(clone => clone.traverse(child => {
      if (child instanceof THREE.Mesh) child.geometry.dispose()
    }))
  }, [clones])

  // Shared material for non-original mode; rebuild when selection changes.
  const mat = useMemo(
    () => (markMaterial !== 'original' ? buildMaterial(markMaterial, color, matParams) : null),
    [markMaterial, color, matParams],
  )
  useEffect(() => () => { mat?.dispose() }, [mat])

  // Replace-mode per-instance materials — one per data-driven colour. 'original'
  // models have no base colour, so treat them as plastic. (Not used when tinting.)
  const colorMats = useMemo(
    () => (instanceColors && !colorTint
      ? instanceColors.map(c => buildMaterial(markMaterial === 'original' ? 'plastic' : markMaterial, c, matParams))
      : null),
    [instanceColors, colorTint, markMaterial, matParams],
  )
  useEffect(() => () => { colorMats?.forEach(m => m.dispose()) }, [colorMats])

  // Apply materials to every clone. Tint mode clones each mesh's own material and
  // recolours it (keeps textures); otherwise replace with the encoded/shared one.
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

  const halfYs = useMemo(
    () => placements.map((_, i) => halfYUnit * scaleBoost * instSize(instanceSizes, markSize, i).y),
    [placements, halfYUnit, scaleBoost, instanceSizes, markSize.y],
  )
  const stackYs = useMemo(() => (stack ? stackedCenterYs(halfYs) : null), [stack, halfYs])

  const q = new THREE.Quaternion()
  const n = new THREE.Vector3()
  return (
    <>
      {clones.map((clone, i) => {
        const p   = placements[i]
        const msz = instSize(instanceSizes, markSize, i)
        const sx = normScale * msz.x * scaleBoost
        const sy = normScale * msz.y * scaleBoost
        const sz = normScale * msz.z * scaleBoost
        const halfY = halfYs[i]
        const c: [number, number, number] = stackYs
          ? [p.pos[0], p.pos[1] + stackYs[i], p.pos[2]]
          : markCenter(p, halfY, standOnAnchor)
        // Centering offset in the primitive's pre-scale space: after scale is
        // applied it cancels the GLB's own origin, centring geometry at the group.
        const ox = -center.x * sx, oy = -center.y * sy, oz = -center.z * sz
        let quat: [number, number, number, number] | undefined
        if (p.normal && !stack) {   // stacks stay upright
          q.setFromUnitVectors(UP, n.set(...p.normal))
          quat = [q.x, q.y, q.z, q.w]
        }
        const lbl = markLabels?.[i]
        return (
          <group key={i}>
            {/* Outer group carries placement position + orientation; inner
                primitive carries only the centering offset + scale. */}
            {quat
              ? <group position={c} quaternion={quat}><primitive object={clone} position={[ox, oy, oz]} scale={[sx, sy, sz]} /></group>
              : <group position={c} rotation={p.rot ?? [0, 0, 0]}><primitive object={clone} position={[ox, oy, oz]} scale={[sx, sy, sz]} /></group>}
            {lbl && (lbl.above || lbl.below) && (
              <MarkLabelTags
                center={c} dir={p.normal ?? [0, 1, 0]}
                halfY={halfY} gapFactor={labelGapFactor}
                above={lbl.above} below={lbl.below}
              />
            )}
          </group>
        )
      })}
    </>
  )
}

// ── Compound marks: many sub-shapes rendered per placement ────────────────────
// A compound mark is a small set of parts. Each placement's mark transform is
// computed ONCE (position/orientation/scale, incl. stacking + surface normal) and
// every part is instanced/cloned at markTransform · partLocalTransform, so the
// arrangement layer stays identical — a compound still occupies one placement.

const DEG = Math.PI / 180

interface MarkTransform { matrix: THREE.Matrix4; center: [number, number, number]; halfY: number; normal?: [number, number, number] }

// Part transform in the compound's *centred* frame: its authored offset minus the
// compound centre, so the whole mark sits on its origin (fixes off-centre scaling,
// surface stand-on and stacking).
function partLocalMatrix(part: MarkPart, center: Vec3): THREE.Matrix4 {
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(part.orientation.x * DEG, part.orientation.y * DEG, part.orientation.z * DEG))
  return new THREE.Matrix4().compose(
    new THREE.Vector3(part.offset.x - center.x, part.offset.y - center.y, part.offset.z - center.z),
    q,
    new THREE.Vector3(part.size.x, part.size.y, part.size.z),
  )
}

// ── Measured model half-extents ───────────────────────────────────────────────
// A primitive's extent is known from its shape, but a custom GLB's isn't until the
// model loads (a flat leaf is far shorter than the cube fallback). GLB parts report
// their measured normalised half-extents (mark-unit, before part.size) into this
// shared cache; compoundBounds reads it so the compound's true height is used for
// centring + surface stand-on. A subscription re-runs bounds once a model loads.
const modelHalfCache = new Map<string, Vec3>()
const modelHalfListeners = new Set<() => void>()
export function reportModelHalf(url: string, half: Vec3) {
  const ex = modelHalfCache.get(url)
  if (ex && ex.x === half.x && ex.y === half.y && ex.z === half.z) return
  modelHalfCache.set(url, half)
  modelHalfListeners.forEach(fn => fn())
}
// Subscribe a component to model-measurement updates; returns a version that bumps
// whenever a model reports, so callers of compoundBounds recompute.
export function useModelHalvesVersion(): number {
  const [v, bump] = useReducer((x: number) => x + 1, 0)
  useEffect(() => { modelHalfListeners.add(bump); return () => { modelHalfListeners.delete(bump) } }, [])
  return v
}

// Half-extents of one part in mark-unit space (before part.size): a measured model
// height if known, else the primitive's exact half-height (cube fallback for a
// not-yet-measured / unknown model).
function partHalfExtents(p: MarkPart): Vec3 {
  const mh = p.shape === 'custom' && p.customModelUrl ? modelHalfCache.get(p.customModelUrl) : undefined
  if (mh) return { x: mh.x * p.size.x, y: mh.y * p.size.y, z: mh.z * p.size.z }
  const h = primitiveHalfY(p.shape)
  return { x: h * p.size.x, y: h * p.size.y, z: h * p.size.z }
}

// Axis-aligned bounds of the whole compound in mark-unit space (part rotation
// ignored — a good-enough approximation). `center` is the shift that puts the
// compound's geometric centre on the mark origin; `half` gives the per-axis
// half-extents (half.y drives stacking spacing + surface stand-on offset).
export function compoundBounds(parts: MarkPart[]): { center: Vec3; half: Vec3 } {
  let minX = Infinity, minY = Infinity, minZ = Infinity
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity
  for (const p of parts) {
    const h = partHalfExtents(p)
    minX = Math.min(minX, p.offset.x - h.x); maxX = Math.max(maxX, p.offset.x + h.x)
    minY = Math.min(minY, p.offset.y - h.y); maxY = Math.max(maxY, p.offset.y + h.y)
    minZ = Math.min(minZ, p.offset.z - h.z); maxZ = Math.max(maxZ, p.offset.z + h.z)
  }
  if (!isFinite(minX)) { minX = maxX = minY = maxY = minZ = maxZ = 0 }
  return {
    center: { x: (minX + maxX) / 2, y: (minY + maxY) / 2, z: (minZ + maxZ) / 2 },
    half:   { x: Math.max(0.001, (maxX - minX) / 2), y: Math.max(0.001, (maxY - minY) / 2), z: Math.max(0.001, (maxZ - minZ) / 2) },
  }
}

// One primitive part across all placements → a single InstancedMesh.
function CompoundPrimitivePart({ part, center, transforms, markMaterial, markColor, structural, instanceColors }: {
  part: MarkPart; center: Vec3; transforms: MarkTransform[]; markMaterial: MarkMaterial; markColor: string; structural: StructuralConfig; instanceColors?: string[]
}) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const geo = useMemo(() => makeMarkGeometry(part.shape), [part.shape])
  useEffect(() => () => { geo.dispose() }, [geo])
  const partLocal = useMemo(() => partLocalMatrix(part, center),
    [part.offset.x, part.offset.y, part.offset.z, part.orientation.x, part.orientation.y, part.orientation.z, part.size.x, part.size.y, part.size.z, center.x, center.y, center.z])

  useEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    const m = new THREE.Matrix4(), col = new THREE.Color()
    transforms.forEach((t, i) => {
      m.multiplyMatrices(t.matrix, partLocal)
      mesh.setMatrixAt(i, m)
      if (instanceColors) mesh.setColorAt(i, col.set(instanceColors[i % instanceColors.length]))
    })
    mesh.instanceMatrix.needsUpdate = true
    if (instanceColors && mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [transforms, partLocal, instanceColors])

  return (
    <instancedMesh
      key={`${transforms.length}-${part.shape}-${instanceColors ? 'col' : 'plain'}`}
      ref={ref}
      args={[geo, undefined, transforms.length]}
    >
      <MarkMaterialElement material={part.material ?? markMaterial} structural={structural} color={instanceColors ? '#ffffff' : (part.color ?? markColor)} />
    </instancedMesh>
  )
}

// One GLB part across all placements → cloned per placement.
function CompoundGLBPart({ part, center, transforms, markMaterial, markColor, instanceColors, colorTint }: {
  part: MarkPart; center: Vec3; transforms: MarkTransform[]; markMaterial: MarkMaterial; markColor: string; instanceColors?: string[]; colorTint?: boolean
}) {
  const url = part.customModelUrl!
  const { scene: gltfScene } = useGLTF(url)
  const matParams = useContext(MaterialParamsContext)
  const material  = part.material ?? markMaterial
  const baseColor = part.color ?? markColor

  const { normScale, glbCenter, modelHalf } = useMemo(() => {
    gltfScene.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(gltfScene)
    const size = new THREE.Vector3(), c = new THREE.Vector3()
    box.getSize(size); box.getCenter(c)
    const maxDim = Math.max(size.x, size.y, size.z, 0.001)
    const ns = (MARK_BASE / maxDim) * glbScaleOverride(url)
    return { normScale: ns, glbCenter: c, modelHalf: { x: (size.x * ns) / 2, y: (size.y * ns) / 2, z: (size.z * ns) / 2 } }
  }, [gltfScene, url])
  // Publish the measured height so the compound's bounds use it (not the cube fallback).
  useEffect(() => { reportModelHalf(url, modelHalf) }, [url, modelHalf])

  const partLocal = useMemo(() => partLocalMatrix(part, center),
    [part.offset.x, part.offset.y, part.offset.z, part.orientation.x, part.orientation.y, part.orientation.z, part.size.x, part.size.y, part.size.z, center.x, center.y, center.z])

  const clones = useMemo(() => transforms.map(() => gltfScene.clone(true)), [gltfScene, transforms.length])
  useEffect(() => () => { clones.forEach(cl => cl.traverse(ch => { if (ch instanceof THREE.Mesh) ch.geometry.dispose() })) }, [clones])

  const sharedMat = useMemo(() => (material !== 'original' ? buildMaterial(material, baseColor, matParams) : null), [material, baseColor, matParams])
  useEffect(() => () => { sharedMat?.dispose() }, [sharedMat])
  const colorMats = useMemo(
    () => (instanceColors && !colorTint ? instanceColors.map(c => buildMaterial(material === 'original' ? 'plastic' : material, c, matParams)) : null),
    [instanceColors, colorTint, material, matParams],
  )
  useEffect(() => () => { colorMats?.forEach(m => m.dispose()) }, [colorMats])
  const tintMats = useRef<THREE.Material[]>([])
  useEffect(() => {
    clones.forEach((clone, i) => clone.traverse(ch => {
      if (!(ch instanceof THREE.Mesh)) return
      if (!ch.userData.__origMat) ch.userData.__origMat = ch.material
      const orig = ch.userData.__origMat as THREE.Material | THREE.Material[]
      if (instanceColors && colorTint) {
        const c = instanceColors[i % instanceColors.length]
        const mk = (m: THREE.Material) => { const t = tintMaterial(m, c); tintMats.current.push(t); return t }
        ch.material = Array.isArray(orig) ? orig.map(mk) : mk(orig)
      } else if (colorMats) ch.material = colorMats[i % colorMats.length]
      else if (sharedMat) ch.material = sharedMat
      else ch.material = orig
    }))
    return () => { tintMats.current.forEach(m => m.dispose()); tintMats.current = [] }
  }, [clones, sharedMat, colorMats, instanceColors, colorTint])

  const tmp = useMemo(() => new THREE.Matrix4(), [])
  return (
    <>
      {clones.map((clone, i) => {
        tmp.multiplyMatrices(transforms[i].matrix, partLocal)
        const pos = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3()
        tmp.decompose(pos, quat, scl)
        return (
          <group key={i} position={pos} quaternion={quat} scale={scl}>
            <primitive object={clone} position={[-glbCenter.x * normScale, -glbCenter.y * normScale, -glbCenter.z * normScale]} scale={normScale} />
          </group>
        )
      })}
    </>
  )
}

function CompoundInstances({
  placements, parts, markMaterial, markSize, color, structural,
  scaleBoost, standOnAnchor, stack, labelGapFactor, instanceSizes, instanceColors, colorTint, markLabels,
}: MarkInstancesProps & { parts: MarkPart[]; scaleBoost: number; standOnAnchor: boolean; stack: boolean; labelGapFactor: number }) {
  // Centre the compound on its bounding box so the origin is its true centre; then
  // half.y is a symmetric half-height and the standard stacking / stand-on math holds.
  // halvesV re-runs this once any GLB part reports its measured height.
  const halvesV = useModelHalvesVersion()
  const bounds = useMemo(() => compoundBounds(parts), [parts, halvesV])
  const transforms = useMemo<MarkTransform[]>(() => {
    const halfUnit = bounds.half.y
    const halfYs = placements.map((_, i) => halfUnit * scaleBoost * instSize(instanceSizes, markSize, i).y)
    const stackYs = stack ? stackedCenterYs(halfYs) : null
    const q = new THREE.Quaternion(), nv = new THREE.Vector3()
    return placements.map((p, i) => {
      const msz = instSize(instanceSizes, markSize, i)
      const center: [number, number, number] = stackYs ? [p.pos[0], p.pos[1] + stackYs[i], p.pos[2]] : markCenter(p, halfYs[i], standOnAnchor)
      if (p.normal && !stack) q.setFromUnitVectors(UP, nv.set(...p.normal))
      else q.setFromEuler(new THREE.Euler(...(p.rot ?? [0, 0, 0])))
      const matrix = new THREE.Matrix4().compose(new THREE.Vector3(...center), q, new THREE.Vector3(msz.x * scaleBoost, msz.y * scaleBoost, msz.z * scaleBoost))
      return { matrix, center, halfY: halfYs[i], normal: p.normal }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placements, bounds, scaleBoost, standOnAnchor, stack, instanceSizes, markSize.x, markSize.y, markSize.z])

  return (
    <>
      {parts.map(part => (part.shape === 'custom' && part.customModelUrl)
        ? <CompoundGLBPart key={part.id} part={part} center={bounds.center} transforms={transforms} markMaterial={markMaterial} markColor={color} instanceColors={instanceColors} colorTint={colorTint} />
        : <CompoundPrimitivePart key={part.id} part={part} center={bounds.center} transforms={transforms} markMaterial={markMaterial} markColor={color} structural={structural} instanceColors={instanceColors} />
      )}
      {markLabels && transforms.map((t, i) => {
        const lbl = markLabels[i]
        if (!lbl || (!lbl.above && !lbl.below)) return null
        return (
          <MarkLabelTags key={`lbl-${i}`}
            center={t.center} dir={stack ? [0, 1, 0] : (t.normal ?? [0, 1, 0])}
            halfY={t.halfY} gapFactor={labelGapFactor} above={lbl.above} below={lbl.below}
          />
        )
      })}
    </>
  )
}

// ── Entry point ───────────────────────────────────────────────────────────────

export function MarkInstances(props: MarkInstancesProps) {
  const {
    markShape, customModelUrl, parts,
    scaleBoost = SCATTER_SCALE, standOnAnchor = false, stack = false, labelGapFactor = 0,
  } = props
  const resolved = { ...props, scaleBoost, standOnAnchor, stack, labelGapFactor }
  if (parts && parts.length > 0) {
    return (
      <Suspense fallback={null}>
        <CompoundInstances {...resolved} parts={parts} />
      </Suspense>
    )
  }
  if (markShape === 'custom' && customModelUrl) {
    return (
      <Suspense fallback={null}>
        <GLBInstances {...resolved} url={customModelUrl} />
      </Suspense>
    )
  }
  return <PrimitiveInstances {...resolved} />
}
