import { useRef, useMemo, useEffect, Suspense, createContext, useContext } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Sky, Html, useGLTF } from '@react-three/drei'
import {
  PathTracingRenderer, PhysicalPathTracingMaterial, DynamicPathTracingSceneGenerator,
} from 'three-gpu-pathtracer'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import * as THREE from 'three'
import {
  CompositionLevel, MarkConfig, CollectionConfig, SceneConfig, LayerData,
  DataBindings, DataVariable, LabelConfig, LabelSlots, DecorationConfig,
  MarkShape, MarkMaterial, StructuralConfig,
} from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MODEL_PRESETS, MODEL_SCALE_OVERRIDES } from './models'

// ── Color context (avoids prop-drilling colorMode/colorGradient) ──────────────

interface ColorCtx {
  colorMode:     'distinct' | 'continuous'
  colorGradient: { from: string; to: string }
}
const ColorContext = createContext<ColorCtx>({
  colorMode: 'distinct',
  colorGradient: { from: '#EE6655', to: '#4488EE' },
})

function lerpHex(from: string, to: string, t: number): string {
  return '#' + new THREE.Color(from).lerp(new THREE.Color(to), Math.max(0, Math.min(1, t))).getHexString()
}

function resolveMarkColor(
  i: number, bindings: DataBindings, layers: LayerData[],
  fallback: string, colorMode: ColorCtx['colorMode'], colorGradient: ColorCtx['colorGradient']
): string {
  if (bindings.markColor === null) return fallback
  if (colorMode === 'continuous') {
    const pcts = layers.map(l => l.percentage)
    const minP = Math.min(...pcts)
    const maxP = Math.max(...pcts)
    const pct  = layers[i % Math.max(1, layers.length)]?.percentage ?? 0
    const t    = maxP > minP ? (pct - minP) / (maxP - minP) : 0.5
    return lerpHex(colorGradient.from, colorGradient.to, t)
  }
  return layers[i % Math.max(1, layers.length)]?.color ?? fallback
}
import { MarkMaterialElement } from './MarkMaterial'
import { Layer, LayerLabelData } from './Layer'
import { PilingLayer } from './PilingLayer'
import { Physics } from '@react-three/rapier'

// ── Focal length → vertical FOV ───────────────────────────────────────────────
export function focalLengthToFov(mm: number): number {
  return (2 * Math.atan(12 / mm) * 180) / Math.PI
}

// ── Camera controller: repositions on level change, compensates on FL change ──

const CAMERA_POSITIONS: Record<CompositionLevel, [number, number, number]> = {
  1: [0, 0.5, 18],
  2: [0, 2,   26],
  3: [0, 4,   64],
}

function CameraController({
  level, fov, focalLength,
}: { level: CompositionLevel; fov: number; focalLength: number }) {
  const { camera, controls } = useThree()
  const prevLevel = useRef<CompositionLevel>(level)
  const prevFL    = useRef(focalLength)

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return

    if (prevLevel.current !== level) {
      const [x, y, z] = CAMERA_POSITIONS[level]
      camera.position.set(x, y, z)
      camera.lookAt(0, 0, 0)
      const ctrl = controls as any
      ctrl?.target?.set(0, 0, 0)
      ctrl?.update?.()
      prevLevel.current = level
    }

    if (prevFL.current !== focalLength && prevFL.current > 0) {
      const ratio = focalLength / prevFL.current
      const ctrl  = controls as any
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
  }, [camera, controls, level, fov, focalLength])

  return null
}

// ── Level 1: single mark ──────────────────────────────────────────────────────

const L1_MARK_SCALE = 14

// ── Custom GLTF model mesh ────────────────────────────────────────────────────

function CustomModelMesh({
  url, material, color, sz,
}: {
  url:      string
  material: string
  color:    string
  sz:       [number, number, number]
}) {
  const { scene } = useGLTF(url)

  const normalizedObj = useMemo(() => {
    const c = scene.clone(true)
    // Reset root transform so world space == model space when measuring
    c.position.set(0, 0, 0)
    c.rotation.set(0, 0, 0)
    c.scale.set(1, 1, 1)
    c.updateMatrixWorld(true)

    const scaleOverride = url.includes('drum') ? 0.63
      : url.includes('clarinet') ? 1.2
      : url.includes('harp') ? 0.825
      : 1

    const box = new THREE.Box3().setFromObject(c)
    if (!box.isEmpty()) {
      const dims   = new THREE.Vector3()
      box.getSize(dims)
      const maxDim = Math.max(dims.x, dims.y, dims.z, 0.001)
      const ns     = (MARK_BASE / maxDim) * scaleOverride
      const center = new THREE.Vector3()
      box.getCenter(center)
      c.scale.setScalar(ns)
      c.position.set(-center.x * ns, -center.y * ns, -center.z * ns)
    }

    if (material !== 'original') {
      const mat = material === 'fluid'
        ? new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(color),
            transmission: 0.92, roughness: 0.04, metalness: 0, ior: 1.5, thickness: 0.5,
          })
        : new THREE.MeshStandardMaterial({
            color:             new THREE.Color(color),
            roughness:         material === 'metal' ? 0.06 : material === 'emissive' ? 0.55 : 0.65,
            metalness:         material === 'metal' ? 0.95 : 0,
            emissive:          material === 'emissive' ? new THREE.Color(color) : new THREE.Color(0, 0, 0),
            emissiveIntensity: material === 'emissive' ? 2.2 : 0,
          })
      c.traverse((child) => {
        if (child instanceof THREE.Mesh) child.material = mat
      })
    }

    return c
  }, [scene, url, material, color])

  return (
    <group scale={sz}>
      <primitive object={normalizedObj} />
    </group>
  )
}

// ── Label helpers ─────────────────────────────────────────────────────────────

const MARK_BASE_D = L1_MARK_SCALE * MARK_BASE   // ≈1 world unit for size=1

function computeLabelValues(slots: LabelSlots, layers: LayerData[], layerIndex: number): LayerLabelData {
  const layer  = layers[layerIndex % Math.max(1, layers.length)]
  const result: LayerLabelData = {}
  const entries = Object.entries(slots) as [keyof LabelSlots, DataVariable | null][]
  for (const [pos, variable] of entries) {
    if (!variable) continue
    if (variable === 'numerical' || variable === 'weight' || variable === 'count')
      result[pos] = `${layer?.percentage ?? '?'}`
    if (variable === 'categorical' || variable === 'garbageType' || variable === 'section')
      result[pos] = layer?.name ?? '?'
  }
  return result
}

const LABEL_SHADOW = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'

function MarkLabel({ pos, text }: { pos: 'top'|'bottom'|'left'|'right'; text: string }) {
  const transform =
    pos === 'top'    ? 'translate(-50%, -100%)' :
    pos === 'bottom' ? 'translate(-50%, 0)'     :
    pos === 'left'   ? 'translate(-100%, -50%)' :
                       'translateY(-50%)'
  return (
    <span data-phys-label="" style={{
      display: 'block', fontSize: '12px', color: '#e0e0e0',
      fontFamily: 'Courier New, monospace', textShadow: LABEL_SHADOW,
      whiteSpace: 'nowrap', userSelect: 'none', transform,
    }}>
      {text}
    </span>
  )
}

// ── Mark size binding multiplier ───────────────────────────────────────────────

// Returns true for any numerical variable binding (old dataset-specific keys + universal key)
function isNumericalVar(v: DataVariable | null): boolean {
  return v === 'numerical' || v === 'weight' || v === 'count'
}

function markSizeMultiplier(variable: DataVariable, layerIdx: number, layers: LayerData[]): number {
  const maxPct = Math.max(...layers.map(l => l.percentage), 1)
  const pct = layers[layerIdx % Math.max(1, layers.length)]?.percentage ?? maxPct
  return 0.2 + 1.8 * (pct / maxPct)
}

// ── Anchor offset helpers ──────────────────────────────────────────────────────

function anchorOffset(
  anchor: 'start' | 'center' | 'end',
  axis: 'X' | 'Y',
  halfPerp: number,
): [number, number, number] {
  if (anchor === 'center') return [0, 0, 0]
  if (axis === 'X') {
    // Perpendicular = Y
    // start = top (all tops at y=0 → centers at -halfPerp)
    // end   = bottom (all bottoms at y=0 → centers at +halfPerp)
    return [0, anchor === 'start' ? -halfPerp : halfPerp, 0]
  } else {
    // Perpendicular = X
    // start = left (all lefts at x=0 → centers at +halfPerp)
    // end   = right (all rights at x=0 → centers at -halfPerp)
    return [anchor === 'start' ? halfPerp : -halfPerp, 0, 0]
  }
}

// ── Single mark mesh ──────────────────────────────────────────────────────────

function SingleMarkMesh({ config, layers, bindings, markLabelConfig }: {
  config:          MarkConfig
  layers:          LayerData[]
  bindings:        DataBindings
  markLabelConfig: LabelConfig
}) {
  const geo   = useMemo(() => makeMarkGeometry(config.shape), [config.shape])
  useEffect(() => () => { geo.dispose() }, [geo])
  const { colorMode, colorGradient } = useContext(ColorContext)

  const DEG   = Math.PI / 180
  const s     = L1_MARK_SCALE
  const color = resolveMarkColor(0, bindings, layers, config.color, colorMode, colorGradient)

  const sc = config.scale ?? 1
  const sz = {
    x: config.size.x * sc * (bindings.markSizeX ? markSizeMultiplier(bindings.markSizeX, 0, layers) : 1),
    y: config.size.y * sc * (bindings.markSizeY ? markSizeMultiplier(bindings.markSizeY, 0, layers) : 1),
    z: config.size.z * sc * (bindings.markSizeZ ? markSizeMultiplier(bindings.markSizeZ, 0, layers) : 1),
  }
  const halfH = s * sz.y * 0.036 + 0.8
  const halfW = s * sz.x * 0.036 + 0.8
  const ld    = computeLabelValues(markLabelConfig.slots, layers, 0)
  const rot: [number, number, number] = [config.orientation.x * DEG, config.orientation.y * DEG, config.orientation.z * DEG]

  return (
    <group
      position={[config.position.x, config.position.y, config.position.z]}
      rotation={rot}
    >
      {config.shape === 'custom' && config.customModelUrl ? (
        <Suspense fallback={null}>
          <CustomModelMesh url={config.customModelUrl} material={config.material} color={color} sz={[s * sz.x, s * sz.y, s * sz.z]} />
        </Suspense>
      ) : (
        <mesh geometry={geo} scale={[s * sz.x, s * sz.y, s * sz.z]}>
          <MarkMaterialElement material={config.material} structural={config.structural} color={color} />
        </mesh>
      )}
      {markLabelConfig.show && (
        <>
          {ld.top    && <><group position={[0,    halfH, 0]} userData={{ isLabel: true, labelText: ld.top,    labelPos: 'top'    }} /><Html zIndexRange={[1, 0]} position={[0,    halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="top"    text={ld.top}    /></Html></>}
          {ld.bottom && <><group position={[0,   -halfH, 0]} userData={{ isLabel: true, labelText: ld.bottom, labelPos: 'bottom' }} /><Html zIndexRange={[1, 0]} position={[0,   -halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="bottom" text={ld.bottom} /></Html></>}
          {ld.left   && <><group position={[-halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.left,   labelPos: 'left'   }} /><Html zIndexRange={[1, 0]} position={[-halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="left"   text={ld.left}   /></Html></>}
          {ld.right  && <><group position={[ halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.right,  labelPos: 'right'  }} /><Html zIndexRange={[1, 0]} position={[ halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="right"  text={ld.right}  /></Html></>}
        </>
      )}
    </group>
  )
}

// ── Per-mark geometry body (memoises geometry per shape) ─────────────────────

function AlignedMarkBody({ shape, customModelUrl, customModelHasMat, material, structural, color, scale }: {
  shape:              MarkShape
  customModelUrl?:    string
  customModelHasMat?: boolean
  material:           MarkMaterial
  structural:         StructuralConfig
  color:              string
  scale:              [number, number, number]
}) {
  const geo = useMemo(() => makeMarkGeometry(shape), [shape])
  useEffect(() => () => { geo.dispose() }, [geo])
  if (shape === 'custom' && customModelUrl) {
    return <Suspense fallback={null}><CustomModelMesh url={customModelUrl} material={customModelHasMat ? material : material} color={color} sz={scale} /></Suspense>
  }
  return (
    <mesh geometry={geo} scale={scale}>
      <MarkMaterialElement material={material} structural={structural} color={color} />
    </mesh>
  )
}

// ── Level 2: aligned marks (line arrangement) ────────────────────────────────

function AlignedMarks({
  markConfig, collection1Config, color, layers, bindings, markLabelConfig,
}: {
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  color:             string
  layers:            LayerData[]
  bindings:          DataBindings
  markLabelConfig:   LabelConfig
}) {
  const count   = layers.length || collection1Config.alignCount
  const { alignAxis: axis, alignSpacing: spacing, alignAnchor: anchor } = collection1Config

  const s   = L1_MARK_SCALE
  const DEG = Math.PI / 180
  const offset = (count - 1) / 2
  const rot: [number, number, number] = [markConfig.orientation.x * DEG, markConfig.orientation.y * DEG, markConfig.orientation.z * DEG]
  const { colorMode, colorGradient } = useContext(ColorContext)

  function getColor(i: number) {
    return resolveMarkColor(i, bindings, layers, color, colorMode, colorGradient)
  }

  const msc = markConfig.scale ?? 1
  function getScale(i: number): [number, number, number] {
    const sz = {
      x: markConfig.size.x * msc * (bindings.markSizeX ? markSizeMultiplier(bindings.markSizeX, i, layers) : 1),
      y: markConfig.size.y * msc * (bindings.markSizeY ? markSizeMultiplier(bindings.markSizeY, i, layers) : 1),
      z: markConfig.size.z * msc * (bindings.markSizeZ ? markSizeMultiplier(bindings.markSizeZ, i, layers) : 1),
    }
    return [s * sz.x, s * sz.y, s * sz.z]
  }

  return (
    <group>
      {Array.from({ length: count }, (_, i) => {
        const t  = (i - offset) * spacing
        const sc = getScale(i)
        // Anchor offset shifts each mark perpendicular to alignment axis
        const halfPerp = axis === 'X' ? sc[1] * 0.036 : sc[0] * 0.036
        const ao = anchorOffset(anchor, axis, halfPerp)
        const pos: [number, number, number] = axis === 'X'
          ? [t + ao[0], ao[1], ao[2]]
          : [ao[0], t + ao[1], ao[2]]

        const halfH = sc[1] * 0.036 + 0.8
        const halfW = sc[0] * 0.036 + 0.8
        const ld  = computeLabelValues(markLabelConfig.slots, layers, i)

        const layerName = layers[i % Math.max(1, layers.length)]?.name
        const catEntry  = markConfig.categoryShapes?.[layerName ?? '']
        const markShape = catEntry?.shape ?? markConfig.shape
        const markUrl   = catEntry ? catEntry.customModelUrl : markConfig.customModelUrl
        const markHasMat = catEntry ? catEntry.customModelHasMat : markConfig.customModelHasMat
        const effectiveMaterial = catEntry?.customModelHasMat ? 'original' as const : markConfig.material

        return (
          <group key={i} position={pos} rotation={rot}>
            <AlignedMarkBody
              shape={markShape}
              customModelUrl={markUrl}
              customModelHasMat={markHasMat}
              material={effectiveMaterial}
              structural={markConfig.structural}
              color={getColor(i)}
              scale={sc}
            />
            {markLabelConfig.show && (
              <>
                {ld.top    && <><group position={[0,    halfH, 0]} userData={{ isLabel: true, labelText: ld.top,    labelPos: 'top'    }} /><Html zIndexRange={[1, 0]} position={[0,    halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="top"    text={ld.top}    /></Html></>}
                {ld.bottom && <><group position={[0,   -halfH, 0]} userData={{ isLabel: true, labelText: ld.bottom, labelPos: 'bottom' }} /><Html zIndexRange={[1, 0]} position={[0,   -halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="bottom" text={ld.bottom} /></Html></>}
                {ld.left   && <><group position={[-halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.left,   labelPos: 'left'   }} /><Html zIndexRange={[1, 0]} position={[-halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="left"   text={ld.left}   /></Html></>}
                {ld.right  && <><group position={[ halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.right,  labelPos: 'right'  }} /><Html zIndexRange={[1, 0]} position={[ halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="right"  text={ld.right}  /></Html></>}
              </>
            )}
          </group>
        )
      })}
    </group>
  )
}

// ── Collection instance: one Level-2 group at a given world position ─────────

function CollectionInstance({
  markConfig, collection1Config, color, position,
  layers, bindings, heightOverride,
  markLabelConfig, colLabelConfig, layerIndex, scatterSeed, decorations,
}: {
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  color:             string
  position:          [number, number, number]
  layers:            LayerData[]
  bindings:          DataBindings
  heightOverride?:   number
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  layerIndex:        number
  scatterSeed:       number
  decorations?:      DecorationConfig[]
}) {
  const msc = markConfig.scale ?? 1
  const scaledMarkSize = { x: markConfig.size.x * msc, y: markConfig.size.y * msc, z: markConfig.size.z * msc }

  const exclusionZone = useMemo(() => {
    const decId = collection1Config.scatterExclusionId
    if (!decId) return undefined
    const dec = decorations?.find(d => d.id === decId)
    if (!dec) return undefined
    const ws = L1_MARK_SCALE * MARK_BASE
    const radius = dec.shape === 'sphere'
      ? ws * 0.52 * Math.max(dec.size.x, dec.size.y, dec.size.z)
      : (ws / 2) * Math.sqrt(dec.size.x ** 2 + dec.size.y ** 2 + dec.size.z ** 2)
    return {
      center: [
        dec.position.x - position[0],
        dec.position.y - position[1],
        dec.position.z - position[2],
      ] as [number, number, number],
      radius,
    }
  }, [collection1Config.scatterExclusionId, decorations, position[0], position[1], position[2]])

  if (collection1Config.arrangement === 'alignment') {
    return (
      <group position={position}>
        <AlignedMarks
          markConfig={markConfig}
          collection1Config={collection1Config}
          color={color}
          layers={layers}
          bindings={bindings}
          markLabelConfig={markLabelConfig}
        />
      </group>
    )
  }

  if (collection1Config.arrangement === 'piling') {
    return (
      <PilingLayer
        key={collection1Config.pilingCount}
        position={position}
        count={collection1Config.pilingCount}
        markShape={markConfig.shape}
        markMaterial={markConfig.material}
        markSize={scaledMarkSize}
        color={color}
        structural={markConfig.structural}
        customModelUrl={markConfig.shape === 'custom' ? markConfig.customModelUrl : undefined}
      />
    )
  }

  // Scattering / stacking
  const { scatterDimensions: dim, scatterCount, scatterDensity, scatterMode } = collection1Config
  const dataLayerCount = bindings.scatterCount !== null
    ? Math.max(1, Math.round(layers[layerIndex % Math.max(1, layers.length)]?.percentage ?? scatterCount))
    : null
  const effectiveCount = dataLayerCount !== null
    ? dataLayerCount
    : (scatterMode ?? 'count') === 'density'
      ? Math.max(5, Math.round(scatterDensity * dim.x * (heightOverride ?? dim.y) * dim.z))
      : scatterCount
  const h        = heightOverride ?? dim.y
  const labelData = computeLabelValues(colLabelConfig.slots, layers, layerIndex)
  return (
    <Layer
      width={dim.x} depth={dim.z} height={h}
      color={color}
      position={position}
      particleCount={effectiveCount}
      markShape={markConfig.shape}
      markMaterial={markConfig.material}
      markSize={scaledMarkSize}
      structural={markConfig.structural}
      customModelUrl={markConfig.shape === 'custom' ? markConfig.customModelUrl : undefined}
      labelShow={colLabelConfig.show}
      labelData={labelData}
      seed={scatterSeed}
      boundingVolume={collection1Config.scatterBoundingVolume ?? 'box'}
      showBounds={collection1Config.scatterShowBounds ?? true}
      orientation={collection1Config.scatterOrientation ?? 'random'}
      exclusionZone={exclusionZone}
    />
  )
}

// ── Max scatter height when weight binding is active ──────────────────────────
const WEIGHT_MAX_H = 8

// ── Level 2: one collection ───────────────────────────────────────────────────

function Level2Content({
  markConfig, collection1Config, layers, bindings, markLabelConfig, colLabelConfig, scatterSeed, decorations,
}: {
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  layers:            LayerData[]
  bindings:          DataBindings
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  scatterSeed:       number
  decorations?:      DecorationConfig[]
}) {
  const color  = layers[0]?.color ?? collection1Config.color
  const maxPct = Math.max(...layers.map(l => l.percentage), 1)
  const heightOverride = isNumericalVar(bindings.scatterSize) && collection1Config.arrangement === 'scattering'
    ? Math.max(0.5, ((layers[0]?.percentage ?? 50) / maxPct) * WEIGHT_MAX_H)
    : undefined

  return (
    <CollectionInstance
      markConfig={markConfig}
      collection1Config={collection1Config}
      color={color}
      position={[0, 0, 0]}
      layers={layers}
      bindings={bindings}
      heightOverride={heightOverride}
      markLabelConfig={markLabelConfig}
      colLabelConfig={colLabelConfig}
      layerIndex={0}
      scatterSeed={scatterSeed}
      decorations={decorations}
    />
  )
}

// ── Level 3: collection2 arrangement applied to collection1 instances ─────────

function Level3Content({
  markConfig, collection1Config, collection2Config, layers, bindings,
  markLabelConfig, colLabelConfig, scatterSeed, decorations,
}: {
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  collection2Config: CollectionConfig
  layers:            LayerData[]
  bindings:          DataBindings
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  scatterSeed:       number
  decorations?:      DecorationConfig[]
}) {
  const {
    arrangement, alignCount, alignAxis, alignSpacing, alignAnchor,
    scatterCount, scatterDimensions, color: col2Color,
  } = collection2Config

  const groupCount = layers.length || alignCount

  const groups = useMemo(() => {
    if (arrangement === 'alignment') {
      const base = Array.from({ length: groupCount }, (_, i) => {
        const layer = layers[i % Math.max(1, layers.length)]
        return {
          color: layer?.color      ?? col2Color,
          name:  layer?.name       ?? `Group ${i + 1}`,
          pct:   layer?.percentage ?? 0,
        }
      })

      const maxPct = Math.max(...layers.map(l => l.percentage), 1)

      // Physical extent of each group along the alignment axis (edge-to-edge gap spacing)
      const extents = base.map((g) => {
        if (collection1Config.arrangement === 'scattering') {
          const dim = collection1Config.scatterDimensions
          if (alignAxis === 'X') return dim.x
          return isNumericalVar(bindings.scatterSize)
            ? Math.max(0.5, (g.pct / maxPct) * WEIGHT_MAX_H)
            : dim.y
        }
        const c1 = collection1Config
        const msc2 = markConfig.scale ?? 1
        const sizeAlongX = markConfig.size.x * msc2 * MARK_BASE_D
        const sizeAlongY = markConfig.size.y * msc2 * MARK_BASE_D
        if (alignAxis === 'X') {
          return c1.alignAxis === 'X'
            ? (c1.alignCount - 1) * c1.alignSpacing + sizeAlongX
            : sizeAlongX
        }
        return c1.alignAxis === 'Y'
          ? (c1.alignCount - 1) * c1.alignSpacing + sizeAlongY
          : sizeAlongY
      })

      // Perpendicular extent of each group (for anchor offset)
      const perpExtents = base.map((g) => {
        if (collection1Config.arrangement === 'scattering') {
          const dim = collection1Config.scatterDimensions
          if (alignAxis === 'X') {
            return isNumericalVar(bindings.scatterSize)
              ? Math.max(0.5, (g.pct / maxPct) * WEIGHT_MAX_H)
              : dim.y
          }
          return dim.x
        }
        const c1 = collection1Config
        const msc2 = markConfig.scale ?? 1
        if (alignAxis === 'X') {
          return c1.alignAxis === 'Y'
            ? (c1.alignCount - 1) * c1.alignSpacing + markConfig.size.y * msc2 * MARK_BASE_D
            : markConfig.size.y * msc2 * MARK_BASE_D
        }
        return c1.alignAxis === 'X'
          ? (c1.alignCount - 1) * c1.alignSpacing + markConfig.size.x * msc2 * MARK_BASE_D
          : markConfig.size.x * msc2 * MARK_BASE_D
      })

      const totalSpan = extents.reduce((a, b) => a + b, 0) + (groupCount - 1) * alignSpacing
      let cursor = -totalSpan / 2

      return base.map((g, i) => {
        const ext     = extents[i]
        const perpExt = perpExtents[i]
        const t       = cursor + ext / 2
        cursor       += ext + alignSpacing

        const ao = anchorOffset(alignAnchor, alignAxis, perpExt / 2)
        const position: [number, number, number] = alignAxis === 'X'
          ? [t + ao[0], ao[1], ao[2]]
          : [ao[0], t + ao[1], ao[2]]

        return { ...g, position, perpExt }
      })
    }

    // Scattering
    return Array.from({ length: scatterCount }, (_, i) => {
      const layer = layers[i % Math.max(1, layers.length)]
      return {
        position: [
          (Math.random() - 0.5) * scatterDimensions.x * 0.8,
          (Math.random() - 0.5) * scatterDimensions.y * 0.8,
          (Math.random() - 0.5) * scatterDimensions.z * 0.8,
        ] as [number, number, number],
        color:    layer?.color      ?? col2Color,
        name:     layer?.name       ?? `Group ${i + 1}`,
        pct:      layer?.percentage ?? 0,
        perpExt:  0,
      }
    })
  }, [
    arrangement, groupCount, alignAxis, alignSpacing, alignAnchor,
    scatterCount, scatterDimensions.x, scatterDimensions.y, scatterDimensions.z,
    layers, col2Color, bindings.scatterSize,
    collection1Config.arrangement, collection1Config.alignAxis,
    collection1Config.alignCount, collection1Config.alignSpacing,
    collection1Config.scatterDimensions.x, collection1Config.scatterDimensions.y,
    markConfig.size.x, markConfig.size.y, scatterSeed,
  ])

  const maxPct = Math.max(...layers.map(l => l.percentage), 1)

  return (
    <group>
      {groups.map(({ position, color, name, pct }, i) => {
        const heightOverride = isNumericalVar(bindings.scatterSize) && collection1Config.arrangement === 'scattering'
          ? Math.max(0.5, (pct / maxPct) * WEIGHT_MAX_H)
          : undefined
        // Apply per-category geometry override for this group's layer
        const catEntry = markConfig.categoryShapes?.[name]
        const groupMarkConfig = catEntry
          ? { ...markConfig, shape: catEntry.shape, customModelUrl: catEntry.customModelUrl, customModelHasMat: catEntry.customModelHasMat, customModelName: catEntry.customModelName, material: catEntry.customModelHasMat ? 'original' as const : markConfig.material }
          : markConfig
        return (
          <CollectionInstance
            key={i}
            markConfig={groupMarkConfig}
            collection1Config={collection1Config}
            color={color}
            position={position}
            layers={layers}
            bindings={bindings}
            heightOverride={heightOverride}
            markLabelConfig={markLabelConfig}
            colLabelConfig={colLabelConfig}
            layerIndex={i % Math.max(1, layers.length)}
            scatterSeed={scatterSeed}
            decorations={decorations}
          />
        )
      })}
    </group>
  )
}

// ── Decoration mesh ───────────────────────────────────────────────────────────

function DecorationMesh({ config }: { config: DecorationConfig }) {
  const geo = useMemo(() => makeMarkGeometry(config.shape), [config.shape])
  useEffect(() => () => { geo.dispose() }, [geo])

  const DEG = Math.PI / 180
  const s   = L1_MARK_SCALE
  const rot: [number, number, number] = [config.orientation.x * DEG, config.orientation.y * DEG, config.orientation.z * DEG]

  return (
    <group
      position={[config.position.x, config.position.y, config.position.z]}
      rotation={rot}
    >
      {config.shape === 'custom' && config.customModelUrl ? (
        <Suspense fallback={null}>
          <CustomModelMesh
            url={config.customModelUrl}
            material={config.material}
            color={config.color}
            sz={[s * config.size.x, s * config.size.y, s * config.size.z]}
          />
        </Suspense>
      ) : (
        <mesh geometry={geo} scale={[s * config.size.x, s * config.size.y, s * config.size.z]}>
          <MarkMaterialElement material={config.material} structural={config.structural} color={config.color} />
        </mesh>
      )}
    </group>
  )
}

// ── GPU Path Tracer ───────────────────────────────────────────────────────────

function PathTracerController({
  onSamplesUpdate,
  downloadRenderRef,
}: {
  onSamplesUpdate:   (n: number) => void
  downloadRenderRef: React.MutableRefObject<(() => void) | null>
}) {
  const { gl, scene, camera } = useThree()
  const cbRef = useRef(onSamplesUpdate)
  cbRef.current = onSamplesUpdate

  useEffect(() => {
    let cancelled = false
    let rafId: number | null = null
    let ptRenderer: PathTracingRenderer | null = null
    let fsQuad: FullScreenQuad | null = null

    async function init() {
      await new Promise<void>(resolve => setTimeout(resolve, 0))
      if (cancelled) return

      const ptMat = new PhysicalPathTracingMaterial()
      ptRenderer = new PathTracingRenderer(gl)
      ptRenderer.setSize(gl.domElement.width, gl.domElement.height)
      ptRenderer.camera = camera
      ptRenderer.material = ptMat

      // Build BVH from the live scene
      scene.updateMatrixWorld(true)
      const generator = new DynamicPathTracingSceneGenerator(scene)
      const { bvh, textures, materials, lights } = generator.generate()
      if (cancelled) { ptRenderer.dispose(); return }

      const { geometry } = generator
      ptMat.bvh.updateFrom(bvh)
      ptMat.attributesArray.updateFrom(
        geometry.attributes.normal as THREE.BufferAttribute,
        geometry.attributes.tangent as THREE.BufferAttribute,
        geometry.attributes.uv as THREE.BufferAttribute,
        geometry.attributes.color as THREE.BufferAttribute,
      )
      ptMat.materialIndexAttribute.updateFrom(geometry.attributes.materialIndex as THREE.BufferAttribute)
      ptMat.textures.setTextures(gl, 2048, 2048, textures)
      ptMat.materials.updateFrom(materials, textures)
      ptMat.lights.updateFrom(lights)

      if (scene.environment) {
        try { ptMat.envMapInfo.updateFrom(scene.environment as THREE.Texture) } catch (_) { /* unsupported format — skip */ }
      }

      // Use HDRI for lighting + reflections but render background as black
      ;(ptMat as unknown as { uniforms: Record<string, { value: unknown }> }).uniforms.backgroundAlpha.value = 0

      // Tone mapping is applied by the renderer — don't bypass it
      fsQuad = new FullScreenQuad(new THREE.MeshBasicMaterial({
        map: ptRenderer.target.texture,
      }))

      // Download: blit the path-traced frame then draw labels on top.
      // Labels are tracked as invisible Three.js groups (userData.isLabel) placed
      // at the same world position as each <Html> label. We project them through
      // the camera matrix — no DOM traversal, no coordinate-system guessing.
      downloadRenderRef.current = () => {
        const samples = ptRenderer!.samples

        gl.domElement.toBlob(async (webglBlob) => {
          if (!webglBlob) return

          const out    = document.createElement('canvas')
          out.width    = gl.domElement.width
          out.height   = gl.domElement.height
          const ctx    = out.getContext('2d')!

          // Path-traced image
          const webglImg = await createImageBitmap(webglBlob)
          ctx.drawImage(webglImg, 0, 0)

          // Collect label data from scene graph markers
          scene.updateMatrixWorld()
          const labelData: Array<{worldPos: THREE.Vector3, text: string, pos: string}> = []
          scene.traverse((obj) => {
            if (obj.userData.isLabel) {
              const wp = new THREE.Vector3()
              obj.getWorldPosition(wp)
              labelData.push({
                worldPos: wp,
                text: obj.userData.labelText as string,
                pos:  (obj.userData.labelPos  as string) ?? 'top',
              })
            }
          })

          if (labelData.length > 0) {
            const dpr      = window.devicePixelRatio || 1
            const fontSize = Math.round(12 * dpr)
            ctx.save()
            ctx.font          = `${fontSize}px 'Courier New', monospace`
            ctx.shadowColor   = 'rgba(0,0,0,1)'
            ctx.shadowBlur    = 6 * dpr
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = dpr
            ctx.fillStyle     = '#e0e0e0'

            for (const { worldPos, text, pos } of labelData) {
              // Project world → NDC → canvas pixels
              const ndc = worldPos.clone().project(camera)
              if (ndc.z > 1) continue  // behind far plane
              const x = (ndc.x  *  0.5 + 0.5) * out.width
              const y = (ndc.y  * -0.5 + 0.5) * out.height

              if (pos === 'top')         { ctx.textAlign = 'center'; ctx.textBaseline = 'bottom' }
              else if (pos === 'bottom') { ctx.textAlign = 'center'; ctx.textBaseline = 'top'    }
              else if (pos === 'left')   { ctx.textAlign = 'right';  ctx.textBaseline = 'middle' }
              else                       { ctx.textAlign = 'left';   ctx.textBaseline = 'middle' }

              ctx.fillText(text, x, y)
            }
            ctx.restore()
          }

          out.toBlob((blob) => {
            if (!blob) return
            const url = URL.createObjectURL(blob)
            const a   = document.createElement('a')
            a.download = `render_${samples}spp.png`
            a.href = url; a.click()
            URL.revokeObjectURL(url)
          }, 'image/png')
        }, 'image/png')
      }

      camera.updateMatrixWorld()

      function frame() {
        if (cancelled || !ptRenderer || !fsQuad) return
        camera.updateMatrixWorld()
        ptRenderer.update()
        ;(fsQuad.material as THREE.MeshBasicMaterial).map = ptRenderer.target.texture
        // Explicitly target the screen framebuffer before blitting
        gl.setRenderTarget(null)
        fsQuad.render(gl)
        cbRef.current(ptRenderer.samples)
        rafId = requestAnimationFrame(frame)
      }

      rafId = requestAnimationFrame(frame)
    }

    init().catch(console.error)

    return () => {
      cancelled = true
      if (rafId !== null) cancelAnimationFrame(rafId)
      ptRenderer?.dispose()
      fsQuad?.dispose()
      downloadRenderRef.current = null
    }
  }, [gl, scene, camera, downloadRenderRef])

  return null
}

// ── Scene environment ─────────────────────────────────────────────────────────

function SceneEnvironment({ config }: { config: SceneConfig }) {
  const isSea = config.background === 'ocean'
  return (
    <>
      {isSea
        ? <color attach="background" args={['#7ab8d4']} />
        : <color attach="background" args={['#050505']} />
      }
      <Environment preset={config.hdriPreset} background={false} />
      {isSea && (
        <>
          <Sky
            distance={450000} sunPosition={[5, 1.2, 8]}
            turbidity={9} rayleigh={3}
            mieCoefficient={0.005} mieDirectionalG={0.7}
          />
          <fog attach="fog" args={['#a8d4ea', 25, 140]} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -7.2, 0]}>
            <planeGeometry args={[400, 400, 1, 1]} />
            <meshPhysicalMaterial color="#0c3a58" roughness={0.06} metalness={0.65} reflectivity={0.9} />
          </mesh>
        </>
      )}
      <ambientLight    intensity={isSea ? 0.50 : 0.18} />
      <directionalLight position={[8,  18, 6]}  intensity={isSea ? 1.4 : 1.8} color={isSea ? '#fff8e0' : '#fffaf0'} />
      <directionalLight position={[-6,  4, -8]} intensity={isSea ? 0.6 : 0.4}  color={isSea ? '#c0e8ff' : '#c0ccff'} />
    </>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

interface CompositionCanvasProps {
  level:             CompositionLevel
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  collection2Config: CollectionConfig
  sceneConfig:       SceneConfig
  layers:            LayerData[]
  bindings:          DataBindings
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  decorations:       DecorationConfig[]
  colorMode:         'distinct' | 'continuous'
  colorGradient:     { from: string; to: string }
  scatterSeed:       number
  datasetTitle?:     string
  // Path tracing
  pathTracingActive?:  boolean
  onSamplesUpdate?:    (n: number) => void
  downloadRenderRef?:  React.MutableRefObject<(() => void) | null>
}

export function CompositionCanvas({
  level, markConfig, collection1Config, collection2Config, sceneConfig, layers, bindings,
  markLabelConfig, colLabelConfig, decorations,
  colorMode, colorGradient, scatterSeed, datasetTitle,
  pathTracingActive, onSamplesUpdate, downloadRenderRef,
}: CompositionCanvasProps) {
  const fov     = focalLengthToFov(sceneConfig.focalLength)
  const initPos = CAMERA_POSITIONS[level]
  const isSea   = sceneConfig.background === 'ocean'

  return (
    <Canvas
      camera={{ position: initPos, fov, near: 0.1, far: 500 }}
      style={{ width: '100%', height: '100%' }}
      frameloop={pathTracingActive ? 'never' : 'always'}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: isSea ? 0.95 : 1.35,
        preserveDrawingBuffer: true,
      }}
    >
      <CameraController level={level} fov={fov} focalLength={sceneConfig.focalLength} />
      <SceneEnvironment config={sceneConfig} />

      <ColorContext.Provider value={{ colorMode, colorGradient }}>
      <Physics gravity={[0, -9.81, 0]} timeStep="vary">

      {level === 1 && (
        <SingleMarkMesh
          config={markConfig} layers={layers} bindings={bindings}
          markLabelConfig={markLabelConfig}
        />
      )}
      {level === 2 && (
        <Level2Content
          markConfig={markConfig}
          collection1Config={collection1Config}
          layers={layers}
          bindings={bindings}
          markLabelConfig={markLabelConfig}
          colLabelConfig={colLabelConfig}
          scatterSeed={scatterSeed}
          decorations={decorations}
        />
      )}
      {level === 3 && (
        <Level3Content
          markConfig={markConfig}
          collection1Config={collection1Config}
          collection2Config={collection2Config}
          layers={layers}
          bindings={bindings}
          markLabelConfig={markLabelConfig}
          colLabelConfig={colLabelConfig}
          scatterSeed={scatterSeed}
          decorations={decorations}
        />
      )}

      {/* Decorations rendered at all levels */}
      {decorations.map((dec) => (
        <DecorationMesh key={dec.id} config={dec} />
      ))}

      {/* Dataset title — floats above the scene */}
      {datasetTitle && (
        <Html zIndexRange={[1, 0]} position={[0, 9, 0]} center style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}>
          <span style={{
            fontSize: '16px', fontWeight: '600',
            color: '#ffffff',
          }}>
            {datasetTitle}
          </span>
        </Html>
      )}

      </Physics>
      </ColorContext.Provider>

      <OrbitControls makeDefault dampingFactor={0.08} minDistance={1} maxDistance={400} target={[0, 0, 0]} />

      {pathTracingActive && onSamplesUpdate && downloadRenderRef && (
        <PathTracerController
          onSamplesUpdate={onSamplesUpdate}
          downloadRenderRef={downloadRenderRef}
        />
      )}
    </Canvas>
  )
}
