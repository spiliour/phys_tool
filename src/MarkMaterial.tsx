import { createContext, useContext } from 'react'
import * as THREE from 'three'
import { MarkMaterial, StructuralConfig } from './types'

// A tiny stepped gradient so MeshToonMaterial shows crisp cel-shading bands
// (a smooth gradient map would just look like plastic). Shared by both the
// declarative and the imperative (instanced GLB) toon paths.
export const TOON_GRADIENT: THREE.DataTexture = (() => {
  const steps = 4
  const data = new Uint8Array(steps)
  for (let i = 0; i < steps; i++) data[i] = Math.round((i / (steps - 1)) * 255)
  const tex = new THREE.DataTexture(data, steps, 1, THREE.RedFormat)
  tex.minFilter = THREE.NearestFilter
  tex.magFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  tex.needsUpdate = true
  return tex
})()

// ── Material params (opacity + custom PBR knobs) ──────────────────────────────
// Threaded via context so every mark renderer (declarative <MarkMaterialElement>
// and the instanced/imperative paths) picks them up without prop-drilling.
export interface MaterialParams {
  opacity:   number   // alpha, 0–1
  roughness: number   // 0–1 (custom material)
  metalness: number   // 0–1 (custom material)
}
export const DEFAULT_MATERIAL_PARAMS: MaterialParams = { opacity: 1, roughness: 0.5, metalness: 0 }
export const MaterialParamsContext = createContext<MaterialParams>(DEFAULT_MATERIAL_PARAMS)

/** Resolve stored (optionally undefined) config fields to concrete params. */
export function resolveMaterialParams(cfg: { opacity?: number; roughness?: number; metalness?: number }): MaterialParams {
  return {
    opacity:   cfg.opacity   ?? DEFAULT_MATERIAL_PARAMS.opacity,
    roughness: cfg.roughness ?? DEFAULT_MATERIAL_PARAMS.roughness,
    metalness: cfg.metalness ?? DEFAULT_MATERIAL_PARAMS.metalness,
  }
}

interface MarkMaterialProps {
  material:   MarkMaterial
  structural: StructuralConfig  // reserved for future animated deformation
  color:      string
}

export function MarkMaterialElement({ material, color }: MarkMaterialProps) {
  const { opacity, roughness, metalness } = useContext(MaterialParamsContext)
  // Alpha applies to every material; only flip `transparent` when it's needed.
  const transparent = opacity < 1
  const alpha = { transparent, opacity }
  // three.js won't honour toggling `transparent` on an existing material, so key
  // the element on it: crossing the boundary remounts a fresh (correctly-built)
  // material. Opacity changes while already transparent update live.
  const key = `${material}-${transparent ? 't' : 'o'}`

  // 'custom' — expose the two most common PBR knobs (roughness / metalness).
  if (material === 'custom')
    return <meshStandardMaterial key={key} color={color} roughness={roughness} metalness={metalness} {...alpha} />

  // 'original' is only for custom GLTF models — fall back to plastic
  if (material === 'original')
    return <meshStandardMaterial key={key} color={color} roughness={0.65} metalness={0.05} {...alpha} />

  if (material === 'fluid')
    return (
      <meshPhysicalMaterial
        key={key}
        color={color}
        transmission={0.92}
        roughness={0.04}
        metalness={0}
        ior={1.5}
        thickness={0.5}
        envMapIntensity={1.0}
        {...alpha}
      />
    )

  // clear refractive glass — cleaner / harder than the liquid-y 'fluid'
  if (material === 'glass')
    return (
      <meshPhysicalMaterial
        key={key}
        color={color}
        transmission={1}
        roughness={0}
        metalness={0}
        ior={1.52}
        thickness={0.6}
        specularIntensity={1}
        envMapIntensity={1}
        {...alpha}
      />
    )

  if (material === 'metal')
    return <meshStandardMaterial key={key} color={color} roughness={0.06} metalness={0.95} envMapIntensity={2.0} {...alpha} />

  // oil-slick / soap-bubble thin-film shimmer
  if (material === 'iridescent')
    return (
      <meshPhysicalMaterial
        key={key}
        color={color}
        metalness={0}
        roughness={0.2}
        iridescence={1}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 400]}
        envMapIntensity={1.2}
        {...alpha}
      />
    )

  if (material === 'emissive')
    return <meshStandardMaterial key={key} color={color} emissive={color} emissiveIntensity={2.2} roughness={0.55} metalness={0} {...alpha} />

  // flat cel-shaded bands — reads as illustration, good for diagrams
  if (material === 'toon')
    return <meshToonMaterial key={key} color={color} gradientMap={TOON_GRADIENT} {...alpha} />

  // schematic edges only (unlit so the lines stay crisp regardless of lighting)
  if (material === 'wireframe')
    return <meshBasicMaterial key={key} color={color} wireframe {...alpha} />

  // plastic (default)
  return <meshStandardMaterial key={key} color={color} roughness={0.65} metalness={0.05} {...alpha} />
}
