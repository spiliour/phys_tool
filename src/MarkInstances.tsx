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
import { useRef, useMemo, useEffect, useContext, createContext, CSSProperties } from 'react'
import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3, LabelOccludeMode } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MarkMaterialElement } from './MarkMaterial'
import { SafeModel } from './ModelBoundary'

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
  const off = halfY * (1 + gapFactor)
  const abovePos: [number, number, number] = [center[0] + dir[0] * off, center[1] + dir[1] * off, center[2] + dir[2] * off]
  const belowPos: [number, number, number] = [center[0] - dir[0] * off, center[1] - dir[1] * off, center[2] - dir[2] * off]
  return (
    <>
      {above && (
        <group position={abovePos}>
          <group userData={{ isLabel: true, labelText: above, labelPos: 'top' }} />
          <Html center occlude={occ} style={{ pointerEvents: 'none' }}>
            <span data-phys-label="" style={{ ...markLabelSpan, transform: 'translateY(-100%)' }}>{above}</span>
          </Html>
        </group>
      )}
      {below && (
        <group position={belowPos}>
          <group userData={{ isLabel: true, labelText: below, labelPos: 'bottom' }} />
          <Html center occlude={occ} style={{ pointerEvents: 'none' }}>
            <span data-phys-label="" style={{ ...markLabelSpan, transform: 'translateY(0)' }}>{below}</span>
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

// ── Entry point ───────────────────────────────────────────────────────────────

export function MarkInstances(props: MarkInstancesProps) {
  const {
    markShape, customModelUrl,
    scaleBoost = SCATTER_SCALE, standOnAnchor = false, stack = false, labelGapFactor = 0,
  } = props
  const resolved = { ...props, scaleBoost, standOnAnchor, stack, labelGapFactor }
  if (markShape === 'custom' && customModelUrl) {
    // Missing model → fall back to primitive (box) instances instead of crashing.
    return (
      <SafeModel resetKey={customModelUrl} fallback={<PrimitiveInstances {...resolved} />}>
        <GLBInstances {...resolved} url={customModelUrl} />
      </SafeModel>
    )
  }
  return <PrimitiveInstances {...resolved} />
}
