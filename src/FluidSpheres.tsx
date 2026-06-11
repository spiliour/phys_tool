import { MeshDistortMaterial } from '@react-three/drei'
import { SphereData } from './types'

interface FluidSpheresProps {
  spheres: SphereData[]
  distort: number
  speed: number
}

const MIN_R = 0.22
const MAX_R = 1.15
const GAP   = 0.28

export function valueToRadius(value: number) {
  return MIN_R + (Math.max(0, Math.min(100, value)) / 100) * (MAX_R - MIN_R)
}

export function FluidSpheres({ spheres, distort, speed }: FluidSpheresProps) {
  if (spheres.length === 0) return null

  const radii = spheres.map(s => valueToRadius(s.value))

  // Build center x-positions: spheres touch with a small gap
  const centers: number[] = []
  radii.forEach((r, i) => {
    centers.push(i === 0 ? r : centers[i - 1] + radii[i - 1] + GAP + r)
  })
  const totalWidth = centers[centers.length - 1] + radii[radii.length - 1]
  const offsetX = -totalWidth / 2

  return (
    <group>
      {spheres.map((s, i) => (
        // Scale a unit sphere — avoids geometry recreation when value changes
        <mesh key={s.id} position={[offsetX + centers[i], 0, 0]} scale={radii[i]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={s.color}
            distort={distort}
            speed={speed}
            roughness={0.06}
            metalness={0.04}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}
