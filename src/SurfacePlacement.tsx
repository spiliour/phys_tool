import { useMemo, useRef, useEffect, useContext, Suspense, CSSProperties } from 'react'
import * as THREE from 'three'
import { useGLTF, Html } from '@react-three/drei'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3, DecorationConfig } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MarkMaterialElement } from './MarkMaterial'
import { LabelOccludeContext, occludeProp, tintMaterial } from './Layer'

// Must match CompositionCanvas: decorations are drawn at L1_MARK_SCALE × size,
// marks scattered on the surface use the same 5× boost as normal scattering.
const L1_MARK_SCALE = 14
const SURFACE_SCALE = 5
const UP = new THREE.Vector3(0, 1, 0)

// Same per-model tweaks CustomModelMesh applies, so the sampled surface matches
// the decoration you actually see.
function modelScaleOverride(url: string): number {
  return url.includes('drum') ? 0.63
    : url.includes('clarinet') ? 1.2
    : url.includes('harp') ? 0.825
    : 1
}

// Local half-height of a primitive mark's base geometry (before scale).
function primitiveHalfY(shape: MarkShape): number {
  if (shape === 'sphere') return MARK_BASE * 0.52
  if (shape === 'star')   return MARK_BASE * 0.64
  return MARK_BASE * 0.5
}

function buildMaterial(material: MarkMaterial, color: string): THREE.Material {
  const col = new THREE.Color(color)
  switch (material) {
    case 'fluid':
      return new THREE.MeshPhysicalMaterial({ color: col, transmission: 0.92, roughness: 0.04, metalness: 0, ior: 1.5, thickness: 0.5, envMapIntensity: 1.0 })
    case 'metal':
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.06, metalness: 0.95, envMapIntensity: 2.0 })
    case 'emissive':
      return new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2.2, roughness: 0.55 })
    default:
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.65, metalness: 0.05 })
  }
}

// One placement: world position of the surface point and its (unit) normal.
interface SurfaceSample { pos: THREE.Vector3; normal: THREE.Vector3 }

// Rebuild the decoration's rendered transform (normalise → size → orient →
// position) and bake it into a merged world-space geometry, so surface samples
// land on the visible model.
function buildSurfaceGeometry(source: THREE.Object3D, url: string | null, dec: DecorationConfig): THREE.BufferGeometry | null {
  const DEG = Math.PI / 180
  const s = L1_MARK_SCALE

  const clone = source.clone(true)
  clone.position.set(0, 0, 0)
  clone.rotation.set(0, 0, 0)
  clone.scale.set(1, 1, 1)
  clone.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(clone)
  if (!box.isEmpty()) {
    const dims = new THREE.Vector3(); box.getSize(dims)
    const maxDim = Math.max(dims.x, dims.y, dims.z, 0.001)
    const ns = (MARK_BASE / maxDim) * (url ? modelScaleOverride(url) : 1)
    const center = new THREE.Vector3(); box.getCenter(center)
    clone.scale.setScalar(ns)
    clone.position.set(-center.x * ns, -center.y * ns, -center.z * ns)
  }

  const szGroup = new THREE.Group()
  szGroup.scale.set(s * dec.size.x, s * dec.size.y, s * dec.size.z)
  szGroup.add(clone)
  const root = new THREE.Group()
  root.position.set(dec.position.x, dec.position.y, dec.position.z)
  root.rotation.set(dec.orientation.x * DEG, dec.orientation.y * DEG, dec.orientation.z * DEG)
  root.add(szGroup)
  root.updateMatrixWorld(true)

  const geoms: THREE.BufferGeometry[] = []
  root.traverse(o => {
    const m = o as THREE.Mesh
    if (!m.isMesh || !m.geometry) return
    const src = m.geometry
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', (src.getAttribute('position') as THREE.BufferAttribute).clone())
    const n = src.getAttribute('normal')
    if (n) g.setAttribute('normal', (n as THREE.BufferAttribute).clone())
    if (src.index) g.setIndex(src.index.clone())
    g.applyMatrix4(m.matrixWorld)
    const nonIdx = g.toNonIndexed()
    if (!nonIdx.getAttribute('normal')) nonIdx.computeVertexNormals()
    geoms.push(nonIdx)
  })
  if (geoms.length === 0) return null
  return geoms.length === 1 ? geoms[0] : (mergeGeometries(geoms, false) ?? geoms[0])
}

function sampleSurface(geo: THREE.BufferGeometry, count: number): SurfaceSample[] {
  const sampler = new MeshSurfaceSampler(new THREE.Mesh(geo)).build()
  const out: SurfaceSample[] = []
  for (let i = 0; i < count; i++) {
    const pos = new THREE.Vector3(), normal = new THREE.Vector3()
    sampler.sample(pos, normal)
    if (normal.lengthSq() < 1e-8) normal.set(0, 1, 0)
    normal.normalize()
    out.push({ pos, normal })
  }
  return out
}

// ── Mark renderers ────────────────────────────────────────────────────────────

interface MarkCommon {
  markMaterial:   MarkMaterial
  markSize:       Vec3
  color:          string
  surfaceScale:   number
  instanceSizes?: Vec3[]    // per-instance size override (data-driven size/scale encoding)
  instanceColors?: string[] // per-instance colour override (data-driven colour encoding)
  colorTint?:     boolean   // tint GLB material instead of replacing it
  markLabels?:    (string | null)[] // per-instance label text (joined variables)
}

const surfaceLabelSpan: CSSProperties = {
  display: 'block', fontSize: '11px', color: '#e8e8e8',
  fontFamily: 'Courier New, monospace',
  textShadow: '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)',
  whiteSpace: 'nowrap', userSelect: 'none',
  transform: 'translateY(-100%)',
}

// Labels sit along each mark's local +Y (the surface normal), just past its top —
// so a mark lying on a slanted surface has its label leaning the same way, not
// floating straight up in the viewer's frame.
function SurfaceLabelTags({ samples, halfHeights, markLabels }: {
  samples:     SurfaceSample[]
  halfHeights: number[]
  markLabels?: (string | null)[]
}) {
  const occ = occludeProp(useContext(LabelOccludeContext))
  if (!markLabels) return null
  return (
    <>
      {samples.map((sp, i) => {
        const text = markLabels[i]
        if (!text) return null
        const half = halfHeights[i]
        const dist = half * 2 + half * 0.08   // just past the top of the mark
        const p = sp.pos.clone().addScaledVector(sp.normal, dist)
        return (
          <group key={`lbl-${i}`} position={[p.x, p.y, p.z]}>
            <group userData={{ isLabel: true, labelText: text, labelPos: 'top' }} />
            <Html center occlude={occ} style={{ pointerEvents: 'none' }}>
              <span data-phys-label="" style={surfaceLabelSpan}>{text}</span>
            </Html>
          </group>
        )
      })}
    </>
  )
}

function SurfacePrimitiveMarks({
  samples, markShape, markMaterial, markSize, color, structural, surfaceScale, instanceSizes, instanceColors, markLabels,
}: MarkCommon & { samples: SurfaceSample[]; markShape: MarkShape; structural: StructuralConfig }) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const geo = useMemo(() => makeMarkGeometry(markShape), [markShape])
  useEffect(() => () => { geo.dispose() }, [geo])

  const scaleF   = SURFACE_SCALE * surfaceScale
  const halfBase = primitiveHalfY(markShape) * scaleF
  const halfHeights = samples.map((_, i) => halfBase * (instanceSizes ? instanceSizes[i % instanceSizes.length].y : markSize.y))

  useEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    const dummy = new THREE.Object3D()
    const q = new THREE.Quaternion()
    const col = new THREE.Color()
    samples.forEach((sp, i) => {
      const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : markSize
      q.setFromUnitVectors(UP, sp.normal)
      dummy.position.copy(sp.pos).addScaledVector(sp.normal, halfBase * msz.y)
      dummy.quaternion.copy(q)
      dummy.scale.set(scaleF * msz.x, scaleF * msz.y, scaleF * msz.z)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      if (instanceColors) mesh.setColorAt(i, col.set(instanceColors[i % instanceColors.length]))
    })
    mesh.instanceMatrix.needsUpdate = true
    if (instanceColors && mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [samples, markShape, markSize.x, markSize.y, markSize.z, scaleF, halfBase, instanceSizes, instanceColors])

  return (
    <>
      <instancedMesh key={`${samples.length}-${markShape}-${instanceColors ? 'col' : 'plain'}`} ref={ref} args={[geo, undefined, samples.length]}>
        <MarkMaterialElement material={markMaterial} structural={structural} color={instanceColors ? '#ffffff' : color} />
      </instancedMesh>
      <SurfaceLabelTags samples={samples} halfHeights={halfHeights} markLabels={markLabels} />
    </>
  )
}

function SurfaceGLBMarks({
  url, samples, markMaterial, markSize, color, surfaceScale, instanceSizes, instanceColors, colorTint, markLabels,
}: MarkCommon & { url: string; samples: SurfaceSample[] }) {
  const { scene } = useGLTF(url)

  const { normScale, center, halfYUnit } = useMemo(() => {
    scene.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3(), c = new THREE.Vector3()
    box.getSize(size); box.getCenter(c)
    const maxDim = Math.max(size.x, size.y, size.z, 0.001)
    const nrm = (MARK_BASE / maxDim) * modelScaleOverride(url)
    return { normScale: nrm, center: c, halfYUnit: (size.y * nrm) / 2 }
  }, [scene, url])

  const clones = useMemo(() => samples.map(() => scene.clone(true)), [scene, samples])
  useEffect(() => () => {
    clones.forEach(c => c.traverse(ch => { if (ch instanceof THREE.Mesh) ch.geometry.dispose() }))
  }, [clones])

  const mat = useMemo(() => (markMaterial !== 'original' ? buildMaterial(markMaterial, color) : null), [markMaterial, color])
  useEffect(() => () => { mat?.dispose() }, [mat])

  // Replace-mode per-instance materials for a colour encoding ('original' has no
  // base colour, so treat it as plastic). Not used when tinting.
  const colorMats = useMemo(
    () => (instanceColors && !colorTint ? instanceColors.map(c => buildMaterial(markMaterial === 'original' ? 'plastic' : markMaterial, c)) : null),
    [instanceColors, colorTint, markMaterial],
  )
  useEffect(() => () => { colorMats?.forEach(m => m.dispose()) }, [colorMats])

  // Tint mode clones each mesh's own material and recolours it (keeps textures);
  // otherwise replace with the encoded/shared material.
  const tintMats = useRef<THREE.Material[]>([])
  useEffect(() => {
    clones.forEach((clone, i) => {
      clone.traverse(ch => {
        if (!(ch instanceof THREE.Mesh)) return
        if (!ch.userData.__origMat) ch.userData.__origMat = ch.material
        const orig = ch.userData.__origMat as THREE.Material | THREE.Material[]
        if (instanceColors && colorTint) {
          const c = instanceColors[i % instanceColors.length]
          const make = (m: THREE.Material) => { const t = tintMaterial(m, c); tintMats.current.push(t); return t }
          ch.material = Array.isArray(orig) ? orig.map(make) : make(orig)
        } else if (colorMats) {
          ch.material = colorMats[i % colorMats.length]
        } else if (mat) {
          ch.material = mat
        } else {
          ch.material = orig
        }
      })
    })
    return () => { tintMats.current.forEach(m => m.dispose()); tintMats.current = [] }
  }, [mat, colorMats, clones, instanceColors, colorTint])

  const scaleF = SURFACE_SCALE * surfaceScale
  const halfHeights = clones.map((_, i) => halfYUnit * scaleF * (instanceSizes ? instanceSizes[i % instanceSizes.length].y : markSize.y))
  const q = new THREE.Quaternion()
  return (
    <>
      {clones.map((clone, i) => {
        const sp  = samples[i]
        const msz = instanceSizes ? instanceSizes[i % instanceSizes.length] : markSize
        const sx = normScale * msz.x * scaleF
        const sy = normScale * msz.y * scaleF
        const sz = normScale * msz.z * scaleF
        const half = halfYUnit * scaleF * msz.y
        const ox = -center.x * sx, oy = -center.y * sy, oz = -center.z * sz
        q.setFromUnitVectors(UP, sp.normal)
        const p = sp.pos.clone().addScaledVector(sp.normal, half)
        return (
          <group key={i} position={[p.x, p.y, p.z]} quaternion={[q.x, q.y, q.z, q.w]}>
            <primitive object={clone} position={[ox, oy, oz]} scale={[sx, sy, sz]} />
          </group>
        )
      })}
      <SurfaceLabelTags samples={samples} halfHeights={halfHeights} markLabels={markLabels} />
    </>
  )
}

// ── Sampling wrapper: turn a world geometry into placed marks ──────────────────

interface ScatterProps extends MarkCommon {
  worldGeo:       THREE.BufferGeometry
  count:          number
  seed:           number
  markShape:      MarkShape
  markUrl?:       string
  structural:     StructuralConfig
}

function SurfaceScatter({ worldGeo, count, seed, markShape, markUrl, structural, ...mark }: ScatterProps) {
  // seed is a dep so "Randomise" reshuffles the surface points.
  const samples = useMemo(() => sampleSurface(worldGeo, Math.max(1, count)), [worldGeo, count, seed])

  if (markShape === 'custom' && markUrl) {
    return (
      <Suspense fallback={null}>
        <SurfaceGLBMarks url={markUrl} samples={samples} {...mark} />
      </Suspense>
    )
  }
  return <SurfacePrimitiveMarks samples={samples} markShape={markShape} structural={structural} {...mark} />
}

// ── Entry points (surface source: custom GLB or primitive) ─────────────────────

function SurfaceFromGLB(props: Omit<ScatterProps, 'worldGeo'> & { dec: DecorationConfig; url: string }) {
  const { dec, url, ...rest } = props
  const { scene } = useGLTF(url)
  const worldGeo = useMemo(
    () => buildSurfaceGeometry(scene, url, dec),
    [scene, url, dec.position.x, dec.position.y, dec.position.z, dec.orientation.x, dec.orientation.y, dec.orientation.z, dec.size.x, dec.size.y, dec.size.z],
  )
  useEffect(() => () => { worldGeo?.dispose() }, [worldGeo])
  if (!worldGeo) return null
  return <SurfaceScatter worldGeo={worldGeo} {...rest} />
}

function SurfaceFromPrimitive(props: Omit<ScatterProps, 'worldGeo'> & { dec: DecorationConfig }) {
  const { dec, ...rest } = props
  const worldGeo = useMemo(() => {
    const g = makeMarkGeometry(dec.shape)
    const geo = buildSurfaceGeometry(new THREE.Mesh(g), null, dec)
    g.dispose()
    return geo
  }, [dec.shape, dec.position.x, dec.position.y, dec.position.z, dec.orientation.x, dec.orientation.y, dec.orientation.z, dec.size.x, dec.size.y, dec.size.z])
  useEffect(() => () => { worldGeo?.dispose() }, [worldGeo])
  if (!worldGeo) return null
  return <SurfaceScatter worldGeo={worldGeo} {...rest} />
}

export interface SurfacePlacementProps {
  dec:           DecorationConfig  // the surface to place marks on
  markShape:     MarkShape
  markMaterial:  MarkMaterial
  markSize:      Vec3
  color:         string
  count:         number
  surfaceScale:  number
  seed:          number
  structural:    StructuralConfig
  markUrl?:      string            // when the mark itself is a custom GLB
  instanceSizes?: Vec3[]           // data-driven per-mark size
  instanceColors?: string[]        // data-driven per-mark colour
  colorTint?:    boolean           // tint GLB material instead of replacing it
  markLabels?:   (string | null)[] // per-mark label text
}

export function SurfacePlacement({ dec, ...rest }: SurfacePlacementProps) {
  if (dec.shape === 'custom' && dec.customModelUrl) {
    return (
      <Suspense fallback={null}>
        <SurfaceFromGLB dec={dec} url={dec.customModelUrl} {...rest} />
      </Suspense>
    )
  }
  return <SurfaceFromPrimitive dec={dec} {...rest} />
}
