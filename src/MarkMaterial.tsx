import { MarkMaterial, StructuralConfig } from './types'

interface MarkMaterialProps {
  material:   MarkMaterial
  structural: StructuralConfig  // reserved for future animated deformation
  color:      string
}

export function MarkMaterialElement({ material, color }: MarkMaterialProps) {
  // 'original' is only for custom GLTF models — fall back to plastic
  if (material === 'original')
    return <meshStandardMaterial color={color} roughness={0.65} metalness={0.05} />

  if (material === 'fluid')
    return (
      <meshPhysicalMaterial
        color={color}
        transmission={0.92}
        roughness={0.04}
        metalness={0}
        ior={1.5}
        thickness={0.5}
        envMapIntensity={1.0}
      />
    )

  if (material === 'metal')
    return <meshStandardMaterial color={color} roughness={0.06} metalness={0.95} envMapIntensity={2.0} />

  if (material === 'emissive')
    return <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} roughness={0.55} metalness={0} />

  // plastic (default)
  return <meshStandardMaterial color={color} roughness={0.65} metalness={0.05} />
}
