import { useRef, useMemo, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3 } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MarkMaterialElement } from './MarkMaterial'

export interface LayerLabelData {
  top?:    string
  bottom?: string
  left?:   string
  right?:  string
}

interface LayerProps {
  width:           number
  depth:           number
  height:          number
  color:           string
  position:        [number, number, number]
  particleCount:   number
  markShape:       MarkShape
  markMaterial:    MarkMaterial
  markSize?:       Vec3
  structural?:     StructuralConfig
  customModelUrl?: string
  labelShow:       boolean
  labelData:       LayerLabelData
}

const DEFAULT_SIZE: Vec3 = { x: 1, y: 1, z: 1 }
const DEFAULT_STRUCTURAL: StructuralConfig = { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 }
const shadow = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'

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

// ── Fill instance matrices ────────────────────────────────────────────────────

function fillInstanceMatrices(
  mesh: THREE.InstancedMesh,
  count: number,
  width: number, height: number, depth: number,
  size: Vec3,
) {
  const dummy = new THREE.Object3D()
  const hw = width  * 0.47
  const hh = height * 0.46
  const hd = depth  * 0.47
  for (let i = 0; i < count; i++) {
    dummy.position.set(
      (Math.random() - 0.5) * 2 * hw,
      (Math.random() - 0.5) * 2 * hh,
      (Math.random() - 0.5) * 2 * hd,
    )
    dummy.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    )
    dummy.scale.set(size.x, size.y, size.z)
    dummy.updateMatrix()
    mesh.setMatrixAt(i, dummy.matrix)
  }
  mesh.instanceMatrix.needsUpdate = true
}

// ── GLB scatter: individual primitives per instance ───────────────────────────
// instancedMesh can't handle multi-material GLBs. We clone the scene per
// instance and override materials imperatively.

function ScatteredGLBInstances({
  url, count, width, height, depth, markSize, markMaterial, color,
}: {
  url:          string
  count:        number
  width:        number
  height:       number
  depth:        number
  markSize:     Vec3
  markMaterial: MarkMaterial
  color:        string
}) {
  const { scene: gltfScene } = useGLTF(url)

  // Normalise scale AND compute center so every model is centered at its
  // instance position regardless of where the GLB's origin sits.
  const { normScale, center } = useMemo(() => {
    gltfScene.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(gltfScene)
    const size   = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    const maxDim = Math.max(size.x, size.y, size.z, 0.001)
    return { normScale: MARK_BASE / maxDim, center }
  }, [gltfScene])

  // Stable random transforms — only reshuffle when count or volume changes
  const transforms = useMemo(() => {
    const hw = width * 0.47
    const hh = height * 0.46
    const hd = depth * 0.47
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 2 * hw,
        (Math.random() - 0.5) * 2 * hh,
        (Math.random() - 0.5) * 2 * hd,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ] as [number, number, number],
    }))
  }, [count, width, height, depth])

  // Clone scene once per instance
  const clones = useMemo(
    () => transforms.map(() => gltfScene.clone(true)),
    [gltfScene, transforms],
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

  // Apply material override on every clone
  useEffect(() => {
    clones.forEach(clone => {
      clone.traverse(child => {
        if (!(child instanceof THREE.Mesh) || !mat) return
        child.material = mat
      })
    })
  }, [mat, clones])

  // Per-axis scale including user markSize
  const sx = normScale * markSize.x
  const sy = normScale * markSize.y
  const sz = normScale * markSize.z
  // Centering offset in the primitive's pre-scale space.
  // After scale is applied, scale ⊙ center cancels this, leaving geometry
  // centred at the group origin regardless of the GLB's own origin.
  const ox = -center.x * sx
  const oy = -center.y * sy
  const oz = -center.z * sz

  return (
    <>
      {clones.map((clone, i) => (
        // Outer group carries the scatter position + random rotation.
        // Inner primitive carries only the centering offset + scale so that
        // the model's geometric centre aligns with the group origin.
        <group key={i} position={transforms[i].position} rotation={transforms[i].rotation}>
          <primitive object={clone} position={[ox, oy, oz]} scale={[sx, sy, sz]} />
        </group>
      ))}
    </>
  )
}

// ── Layer ─────────────────────────────────────────────────────────────────────

export function Layer({
  width, depth, height, color, position,
  particleCount, markShape, markMaterial,
  markSize = DEFAULT_SIZE, structural = DEFAULT_STRUCTURAL,
  customModelUrl,
  labelShow, labelData,
}: LayerProps) {
  const instanceRef = useRef<THREE.InstancedMesh>(null)

  const geo = useMemo(() => makeMarkGeometry(markShape), [markShape])

  const edgesGeo = useMemo(() => {
    const box   = new THREE.BoxGeometry(width, height, depth)
    const edges = new THREE.EdgesGeometry(box)
    box.dispose()
    return edges
  }, [width, height, depth])

  useEffect(() => {
    const mesh = instanceRef.current
    if (!mesh) return
    fillInstanceMatrices(mesh, particleCount, width, height, depth, markSize)
  }, [particleCount, width, depth, height, markShape, markSize.x, markSize.y, markSize.z])

  useEffect(() => () => { geo.dispose() },      [geo])
  useEffect(() => () => { edgesGeo.dispose() }, [edgesGeo])

  const useCustom = markShape === 'custom' && !!customModelUrl

  return (
    <group position={position}>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#666666" transparent opacity={0.7} />
      </lineSegments>

      {useCustom ? (
        <Suspense fallback={null}>
          <ScatteredGLBInstances
            url={customModelUrl!}
            count={Math.max(5, particleCount)}
            width={width} height={height} depth={depth}
            markSize={markSize}
            markMaterial={markMaterial}
            color={color}
          />
        </Suspense>
      ) : (
        /* Basic shapes: original JSX-child material pattern — tested and working */
        <instancedMesh
          key={`${particleCount}-${markShape}`}
          ref={instanceRef}
          args={[geo, undefined, particleCount]}
        >
          <MarkMaterialElement material={markMaterial} structural={structural} color={color} />
        </instancedMesh>
      )}

      {labelShow && (
        <>
          {labelData.top    && (
            <>
              <group position={[0, height / 2 + 0.3, 0]} userData={{ isLabel: true, labelText: labelData.top,    labelPos: 'top'    }} />
              <Html position={[0, height / 2 + 0.3, 0]} center style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.top}
                </span>
              </Html>
            </>
          )}
          {labelData.bottom && (
            <>
              <group position={[0, -(height / 2 + 0.3), 0]} userData={{ isLabel: true, labelText: labelData.bottom, labelPos: 'bottom' }} />
              <Html position={[0, -(height / 2 + 0.3), 0]} center style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.bottom}
                </span>
              </Html>
            </>
          )}
          {labelData.left   && (
            <>
              <group position={[-(width / 2 + 0.2), 0, 0]} userData={{ isLabel: true, labelText: labelData.left,   labelPos: 'left'   }} />
              <Html position={[-(width / 2 + 0.2), 0, 0]} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', textAlign: 'right', transform: 'translate(-100%, -50%)' }}>
                  {labelData.left}
                </span>
              </Html>
            </>
          )}
          {labelData.right  && (
            <>
              <group position={[width / 2 + 0.2, 0, 0]} userData={{ isLabel: true, labelText: labelData.right,  labelPos: 'right'  }} />
              <Html position={[width / 2 + 0.2, 0, 0]} style={{ pointerEvents: 'none' }}>
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
