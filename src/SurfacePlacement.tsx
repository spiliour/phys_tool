/**
 * SurfacePlacement.tsx — the "surface" arrangement.
 *
 * Owns the LAYOUT: sample points (position + normal) across a decoration's
 * rendered surface via MeshSurfaceSampler. Rendering + encodings are delegated
 * to the shared <MarkInstances> renderer (standOnAnchor mode: each mark's base
 * sits on the sampled point, oriented along the surface normal).
 */
import { useMemo, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3, DecorationConfig, MarkPart } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MarkInstances, MarkPlacement, MarkLabelPair, SCATTER_SCALE } from './MarkInstances'

// Must match CompositionCanvas: decorations are drawn at L1_MARK_SCALE × size.
const L1_MARK_SCALE = 14

// Same per-model tweaks CustomModelMesh applies, so the sampled surface matches
// the decoration you actually see. (MarkInstances applies the same overrides to
// the marks themselves.)
function modelScaleOverride(url: string): number {
  return url.includes('drum') ? 0.63
    : url.includes('clarinet') ? 1.2
    : url.includes('harp') ? 0.825
    : 1
}

// ── Surface geometry + sampling ───────────────────────────────────────────────

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

// Sample `count` placements across the surface: anchor point + unit normal.
function sampleSurface(geo: THREE.BufferGeometry, count: number): MarkPlacement[] {
  const sampler = new MeshSurfaceSampler(new THREE.Mesh(geo)).build()
  const out: MarkPlacement[] = []
  const pos = new THREE.Vector3(), normal = new THREE.Vector3()
  for (let i = 0; i < count; i++) {
    sampler.sample(pos, normal)
    if (normal.lengthSq() < 1e-8) normal.set(0, 1, 0)
    normal.normalize()
    out.push({ pos: [pos.x, pos.y, pos.z], normal: [normal.x, normal.y, normal.z] })
  }
  return out
}

// ── Sampling wrapper: turn a world geometry into placed marks ──────────────────

interface ScatterProps {
  worldGeo:        THREE.BufferGeometry
  count:           number
  seed:            number
  markShape:       MarkShape
  markUrl?:        string
  structural:      StructuralConfig
  markMaterial:    MarkMaterial
  markSize:        Vec3
  color:           string
  surfaceScale:    number
  instanceSizes?:  Vec3[]
  instanceColors?: string[]
  colorTint?:      boolean
  markLabels?:     MarkLabelPair[]
  parts?:          MarkPart[]
}

function SurfaceScatter({ worldGeo, count, seed, markShape, markUrl, surfaceScale, ...mark }: ScatterProps) {
  // seed is a dep so "Randomise" reshuffles the surface points.
  const placements = useMemo(() => sampleSurface(worldGeo, Math.max(1, count)), [worldGeo, count, seed])

  return (
    <MarkInstances
      placements={placements}
      markShape={markShape}
      customModelUrl={markShape === 'custom' ? markUrl : undefined}
      scaleBoost={SCATTER_SCALE * surfaceScale}
      standOnAnchor
      labelGapFactor={0.08}
      {...mark}
    />
  )
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
  markLabels?:   MarkLabelPair[]   // per-mark label text (above the mark, along its normal)
  parts?:        MarkPart[]        // compound mark: sub-shapes rendered together
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
