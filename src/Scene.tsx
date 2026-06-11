import { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Sky } from '@react-three/drei'
import * as THREE from 'three'
import { Layers } from './Layers'
import { LayerData, MarkShape, MarkMaterial, HdriPreset } from './types'

export type { HdriPreset }  // re-export so existing importers still work

// 35mm full-frame vertical FOV: sensor half-height = 12mm
export function focalLengthToFov(mm: number) {
  return (2 * Math.atan(12 / mm) * 180) / Math.PI
}

// Syncs FOV and compensates camera distance so the subject stays the same apparent size.
// Compensation: apparent size ∝ 1/distance × tan(fov/2), so keeping the product constant
// gives: new_distance = old_distance × (new_fl / old_fl).
// We update controls.spherical.radius (OrbitControls' internal distance state) so that
// subsequent orbit interactions start from the correct position.
function CameraFov({ fov, focalLength }: { fov: number; focalLength: number }) {
  const { camera, controls } = useThree()
  const prevFL = useRef(focalLength)

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return

    if (prevFL.current !== focalLength && prevFL.current > 0) {
      const ratio = focalLength / prevFL.current
      const ctrl = controls as any

      if (ctrl?.spherical) {
        // Directly scale OrbitControls' internal spherical radius so its state
        // matches the new camera distance and future dolly/zoom still works.
        ctrl.spherical.radius *= ratio
        ctrl.update?.()
      } else {
        // Fallback for any controls implementation that doesn't expose spherical.
        camera.position.multiplyScalar(ratio)
      }
    }
    prevFL.current = focalLength

    camera.fov = fov
    camera.updateProjectionMatrix()
  }, [camera, controls, fov, focalLength])

  return null
}

interface SceneProps {
  layers: LayerData[]
  density: number
  markShape: MarkShape
  markMaterial: MarkMaterial
  seaBackground: boolean
  hdriPreset: HdriPreset
  showLabels: boolean
  focalLength: number
}

export function Scene({ layers, density, markShape, markMaterial, seaBackground, hdriPreset, showLabels, focalLength }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [9, 6, 10], fov: focalLengthToFov(focalLength), near: 0.1, far: 500 }}
      style={{ width: '100%', height: '100%' }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: seaBackground ? 0.95 : 1.35,
      }}
    >
      <CameraFov fov={focalLengthToFov(focalLength)} focalLength={focalLength} />

      {seaBackground
        ? <color attach="background" args={['#7ab8d4']} />
        : <color attach="background" args={['#050505']} />
      }

      <Environment preset={hdriPreset} background={false} />

      {seaBackground && (
        <>
          <Sky distance={450000} sunPosition={[5, 1.2, 8]} turbidity={9} rayleigh={3} mieCoefficient={0.005} mieDirectionalG={0.7} />
          <fog attach="fog" args={['#a8d4ea', 25, 140]} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -7.2, 0]}>
            <planeGeometry args={[400, 400, 1, 1]} />
            <meshPhysicalMaterial color="#0c3a58" roughness={0.06} metalness={0.65} reflectivity={0.9} />
          </mesh>
        </>
      )}

      <ambientLight intensity={seaBackground ? 0.5 : 0.18} />
      <directionalLight position={[8, 18, 6]}  intensity={seaBackground ? 1.4 : 1.8} color={seaBackground ? '#fff8e0' : '#fffaf0'} />
      <directionalLight position={[-6, 4, -8]} intensity={seaBackground ? 0.6 : 0.4}  color={seaBackground ? '#c0e8ff' : '#c0ccff'} />

      <Layers layers={layers} density={density} markShape={markShape} markMaterial={markMaterial} showLabels={showLabels} />

      <OrbitControls makeDefault dampingFactor={0.08} minDistance={4} maxDistance={60} target={[0, 0, 0]} />
    </Canvas>
  )
}
