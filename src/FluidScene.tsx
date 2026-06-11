import { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Sky } from '@react-three/drei'
import * as THREE from 'three'
import { FluidSpheres } from './FluidSpheres'
import { SphereData } from './types'
import { HdriPreset, focalLengthToFov } from './Scene'

function CameraFov({ fov, focalLength }: { fov: number; focalLength: number }) {
  const { camera, controls } = useThree()
  const prevFL = useRef(focalLength)

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return

    if (prevFL.current !== focalLength && prevFL.current > 0) {
      const ratio = focalLength / prevFL.current
      const ctrl = controls as any
      if (ctrl?.spherical) {
        ctrl.spherical.radius *= ratio
        ctrl.update?.()
      } else {
        camera.position.multiplyScalar(ratio)
      }
    }
    prevFL.current = focalLength

    camera.fov = fov
    camera.updateProjectionMatrix()
  }, [camera, controls, fov, focalLength])

  return null
}

interface FluidSceneProps {
  spheres: SphereData[]
  distort: number
  speed: number
  seaBackground: boolean
  hdriPreset: HdriPreset
  focalLength: number
}

export function FluidScene({ spheres, distort, speed, seaBackground, hdriPreset, focalLength }: FluidSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 13], fov: focalLengthToFov(focalLength), near: 0.1, far: 500 }}
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
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry args={[400, 400]} />
            <meshPhysicalMaterial color="#0c3a58" roughness={0.06} metalness={0.65} reflectivity={0.9} />
          </mesh>
        </>
      )}

      <ambientLight intensity={seaBackground ? 0.55 : 0.3} />
      <directionalLight position={[6, 14, 8]}  intensity={seaBackground ? 1.3 : 2.2} color="#fffaf0" />
      <directionalLight position={[-5, 3, -5]} intensity={seaBackground ? 0.6 : 0.45} color="#c0d8ff" />
      <pointLight       position={[0, -2, 4]}  intensity={0.3} color="#ffffff" />

      <FluidSpheres spheres={spheres} distort={distort} speed={speed} />

      <OrbitControls makeDefault dampingFactor={0.08} minDistance={2} maxDistance={40} target={[0, 0, 0]} />
    </Canvas>
  )
}
