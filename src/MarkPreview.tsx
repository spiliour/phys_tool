import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { MarkShape, MarkMaterial } from './types'
import { makeMarkGeometry } from './markGeometry'

interface SpinningMarkProps {
  shape: MarkShape
  material: MarkMaterial
  color: string
}

function SpinningMark({ shape, material, color }: SpinningMarkProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.75
    ref.current.rotation.x = 0.45
  })

  const geo = useMemo(() => makeMarkGeometry(shape), [shape])
  useEffect(() => () => { geo.dispose() }, [geo])

  return (
    <mesh ref={ref} geometry={geo} scale={2.3}>
      {material === 'fluid' ? (
        <MeshTransmissionMaterial
          color={color} backside samples={4} resolution={256}
          transmission={1} roughness={0.04} thickness={0.06} ior={1.5}
          chromaticAberration={0.025} clearcoat={0.8}
          attenuationDistance={0.35} attenuationColor={color}
        />
      ) : material === 'metal' ? (
        <meshStandardMaterial color={color} roughness={0.06} metalness={0.95} envMapIntensity={2.5} />
      ) : material === 'emissive' ? (
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} roughness={0.55} metalness={0} />
      ) : (
        <meshStandardMaterial color={color} roughness={0.82} metalness={0.08} />
      )}
    </mesh>
  )
}

interface MarkPreviewProps {
  shape: MarkShape
  material: MarkMaterial
  color?: string   // defaults to neutral grey for backward compat
}

export function MarkPreview({ shape, material, color = '#b8b8b8' }: MarkPreviewProps) {
  return (
    <div style={{
      width: '100%', height: '80px', borderRadius: '8px', overflow: 'hidden',
      border: '1px solid #E5E5EA',
    }}>
      <Canvas
        camera={{ position: [0, 0, 0.42], fov: 44 }}
        gl={{ antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <Environment preset="warehouse" background={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 3]}  intensity={2.0} color="#fffaf0" />
        <directionalLight position={[-2, -1, -2]} intensity={0.4} color="#8899cc" />
        <SpinningMark shape={shape} material={material} color={color} />
      </Canvas>
    </div>
  )
}
