import { useMemo, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3 } from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MarkMaterialElement } from './MarkMaterial'

export interface PilingLayerProps {
  position:        [number, number, number]
  count:           number
  markShape:       MarkShape
  markMaterial:    MarkMaterial
  markSize:        Vec3
  color:           string
  structural:      StructuralConfig
  customModelUrl?: string
}

// ── Imperative material helper ────────────────────────────────────────────────

function buildMaterial(material: MarkMaterial, color: string): THREE.Material {
  const col = new THREE.Color(color)
  switch (material) {
    case 'fluid':
      return new THREE.MeshPhysicalMaterial({
        color: col, transmission: 0.92, roughness: 0.04,
        metalness: 0, ior: 1.5, thickness: 0.5,
      })
    case 'metal':
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.06, metalness: 0.95 })
    case 'emissive':
      return new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2.2, roughness: 0.55 })
    default:
      return new THREE.MeshStandardMaterial({ color: col, roughness: 0.65, metalness: 0.05 })
  }
}

// ── GLB mark (single instance for use inside a RigidBody) ────────────────────

function GLBMark({
  url, markMaterial, markSize, color,
}: {
  url:          string
  markMaterial: MarkMaterial
  markSize:     Vec3
  color:        string
}) {
  const { scene: gltfScene } = useGLTF(url)

  const { clone, sx, sy, sz, ox, oy, oz } = useMemo(() => {
    gltfScene.updateMatrixWorld(true)
    const box    = new THREE.Box3().setFromObject(gltfScene)
    const dims   = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(dims)
    box.getCenter(center)
    const maxDim = Math.max(dims.x, dims.y, dims.z, 0.001)
    const ns     = MARK_BASE / maxDim
    const sx = ns * markSize.x
    const sy = ns * markSize.y
    const sz = ns * markSize.z
    return {
      clone: gltfScene.clone(true),
      sx, sy, sz,
      ox: -center.x * sx,
      oy: -center.y * sy,
      oz: -center.z * sz,
    }
  }, [gltfScene, markSize.x, markSize.y, markSize.z])

  const mat = useMemo(
    () => markMaterial !== 'original' ? buildMaterial(markMaterial, color) : null,
    [markMaterial, color],
  )
  useEffect(() => () => { mat?.dispose() }, [mat])

  useEffect(() => {
    if (!mat) return
    clone.traverse(child => {
      if (child instanceof THREE.Mesh) child.material = mat
    })
  }, [mat, clone])

  return <primitive object={clone} position={[ox, oy, oz]} scale={[sx, sy, sz]} />
}

// ── PilingLayer ───────────────────────────────────────────────────────────────

export function PilingLayer({
  position, count, markShape, markMaterial, markSize, color, structural, customModelUrl,
}: PilingLayerProps) {
  const geo = useMemo(() => makeMarkGeometry(markShape), [markShape])
  useEffect(() => () => { geo.dispose() }, [geo])

  // XZ spread grows with count so larger piles don't stack too tall
  const spread = Math.sqrt(count) * MARK_BASE * Math.max(markSize.x, markSize.y, markSize.z) * 2.2

  // Stagger drop heights so marks don't all collide at the same instant
  const spawns = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x:  (Math.random() - 0.5) * spread,
    y:  MARK_BASE * 2 + i * MARK_BASE * 1.2 + Math.random() * MARK_BASE * 0.5,
    z:  (Math.random() - 0.5) * spread,
    rx: Math.random() * Math.PI * 2,
    ry: Math.random() * Math.PI * 2,
    rz: Math.random() * Math.PI * 2,
  })), [count, spread])

  const floorY = -MARK_BASE * 0.7

  return (
    <group position={position}>
      {/* Static invisible floor */}
      <RigidBody type="fixed">
        <CuboidCollider args={[3, 0.05, 3]} position={[0, floorY, 0]} />
      </RigidBody>

      {/* Dynamic marks — each gets its own rigid body */}
      {spawns.map((s, i) => (
        <RigidBody
          key={i}
          position={[s.x, s.y, s.z]}
          rotation={[s.rx, s.ry, s.rz]}
          colliders="hull"
          restitution={0.1}
          friction={0.8}
          linearDamping={0.4}
          angularDamping={0.5}
        >
          {markShape === 'custom' && customModelUrl ? (
            <Suspense fallback={null}>
              <GLBMark
                url={customModelUrl}
                markMaterial={markMaterial}
                markSize={markSize}
                color={color}
              />
            </Suspense>
          ) : (
            <mesh geometry={geo} scale={[markSize.x, markSize.y, markSize.z]}>
              <MarkMaterialElement material={markMaterial} structural={structural} color={color} />
            </mesh>
          )}
        </RigidBody>
      ))}
    </group>
  )
}
