import { useRef, useMemo, useEffect, useState, useCallback, Suspense, createContext, useContext } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Sky, Stars, Grid, Html, useGLTF, PivotControls } from '@react-three/drei'
import {
  PathTracingRenderer, PhysicalPathTracingMaterial, DynamicPathTracingSceneGenerator,
} from 'three-gpu-pathtracer'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import * as THREE from 'three'
import {
  CompositionLevel, MarkConfig, CollectionConfig, SceneConfig, LayerData,
  DataBindings, DataVariable, LabelConfig, LabelSlots, DecorationConfig,
  MarkShape, MarkMaterial, StructuralConfig, Vec3, ActiveElement, BindingScale, MarkPart,
} from './types'
import { makeMarkGeometry, MARK_BASE } from './markGeometry'
import { MODEL_PRESETS, MODEL_SCALE_OVERRIDES } from './models'

// ── Color context (avoids prop-drilling colorMode/colorGradient) ──────────────

interface ColorCtx {
  colorMode:     'distinct' | 'continuous'
  colorGradient: { from: string; to: string }
  colorTint:     boolean   // tint the GLB material instead of replacing it
}
const ColorContext = createContext<ColorCtx>({
  colorMode: 'distinct',
  colorGradient: { from: '#EE6655', to: '#4488EE' },
  colorTint: false,
})

// Per-encoding numeric multiplier (e.g. ×2, ÷2), provided at the canvas root and
// read wherever a numeric binding turns into a value.
const BindingScaleContext = createContext<BindingScale>({})
const bScaleOf = (scale: BindingScale, key: keyof DataBindings): number => scale[key] ?? 1

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
import { MarkMaterialElement, MaterialParamsContext, resolveMaterialParams } from './MarkMaterial'
import { Layer, LayerLabelData, SCATTER_SCALE, ExclusionZone, MarkLabelPair, LabelOccludeContext, occludeProp } from './Layer'
import { compoundBounds, reportModelHalf, useModelHalvesVersion, buildMaterial, LabelStyleContext, ColLabelStyleContext } from './MarkInstances'
import { SurfacePlacement } from './SurfacePlacement'
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

// Per-axis extent of each custom model relative to ws × size (largest axis ≈ 1).
// Populated when CustomModelMesh measures the GLB; read by the exclusion zone.
type ModelAspect = { x: number; y: number; z: number }
const modelAspectCache = new Map<string, ModelAspect>()

// Reactive mirror of modelAspectCache so the exclusion zone recomputes once a
// custom-model decoration has actually been measured (e.g. right after a reload,
// where the exclusion is restored before its GLB finishes loading).
const ModelAspectContext = createContext<{
  aspects: Record<string, ModelAspect>
  report:  (url: string, a: ModelAspect) => void
}>({ aspects: {}, report: () => {} })

// ── Viewport transform handles ────────────────────────────────────────────────
// Anything with a spatial property (the L1 mark, a decoration, a collection's
// object) can be clicked in the viewport to select it and get a move gizmo.
// Scattered marks inside a collection are instanced and deliberately NOT wired,
// so you can't grab an individual one.

export type HandleTarget =
  | { kind: 'mark' }
  | { kind: 'markPart'; id: string }   // one sub-shape of a compound mark (L1 only)
  | { kind: 'decoration'; id: string }
  | { kind: 'object'; owner: 'col1' | 'col2' }

const handleKey = (t: HandleTarget) =>
  t.kind === 'decoration' ? `decoration:${t.id}` : t.kind === 'markPart' ? `markPart:${t.id}` : t.kind === 'object' ? `object:${t.owner}` : 'mark'

interface HandleValue {
  enabled:    boolean
  isSelected: (t: HandleTarget) => boolean
  select:     (t: HandleTarget) => void
  commit:     (t: HandleTarget, pos: Vec3, orient: Vec3, scale: Vec3) => void
}
const HandleContext = createContext<HandleValue>({
  enabled: false, isSelected: () => false, select: () => {}, commit: () => {},
})

const DEG_TO_RAD = Math.PI / 180
const ONE_SCALE  = new THREE.Vector3(1, 1, 1)

// Wraps a spatial mesh in the handle system. Clicking it selects the object; while
// selected it gets a PivotControls gizmo — axis arrows (move) + rotation rings
// (orient), no plane/scale handles. On release it commits position + orientation.
// `target` undefined (or handles disabled) → an inert plain group. `groupRef`
// forwards the inner group (used e.g. for label-occluder registration).
// A single uniform-scale handle at the gizmo centre. Drag it up/down to scale the
// object about its centre; disables orbit while dragging and stays a constant
// screen size. Reports the live factor (for preview) and the final factor.
function CenterScaleHandle({ onScale, onScaleEnd }: {
  onScale:    (factor: number) => void
  onScaleEnd: (factor: number) => void
}) {
  const controls = useThree((s) => s.controls) as { enabled: boolean } | null
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Keep the handle a constant on-screen size, and push it toward the camera so it
  // always sits in front of the gizmo's own arrows/rings (winning the raycast at
  // the centre) while still projecting to the object's centre on screen.
  // The knob may live inside a scaled frame (a compound mark's ×14 unit group), so
  // divide out the parent's world scale to keep both the offset and size in world
  // units regardless of that frame.
  useFrame(({ camera }) => {
    const m = ref.current
    if (!m || !m.parent) return
    const origin = new THREE.Vector3(); m.parent.getWorldPosition(origin)
    const dist = camera.position.distanceTo(origin)
    const ps = new THREE.Vector3().setFromMatrixScale(m.parent.matrixWorld)
    const avg = (ps.x + ps.y + ps.z) / 3 || 1
    const camLocal = m.parent.worldToLocal(camera.position.clone()).normalize()
    m.position.copy(camLocal.multiplyScalar((dist * 0.16) / avg))
    m.scale.setScalar((dist * 0.0021) / avg)
  })

  return (
    <mesh
      ref={ref}
      renderOrder={1000}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
      onPointerOut={() => setHovered(false)}
      onPointerDown={(e) => {
        e.stopPropagation()
        const startY = e.nativeEvent.clientY
        if (controls) controls.enabled = false
        let factor = 1
        const move = (ev: PointerEvent) => { factor = Math.max(0.05, 1 + (startY - ev.clientY) / 160); onScale(factor) }
        const up = () => {
          window.removeEventListener('pointermove', move)
          window.removeEventListener('pointerup', up)
          if (controls) controls.enabled = true
          onScaleEnd(factor)
        }
        window.addEventListener('pointermove', move)
        window.addEventListener('pointerup', up)
      }}
    >
      <sphereGeometry args={[1, 20, 20]} />
      <meshBasicMaterial color={hovered ? '#ffe066' : '#ffcc33'} depthTest={false} transparent opacity={0.95} />
    </mesh>
  )
}

function SpatialHandle({ target, position, orientation, groupRef, children }: {
  target?:      HandleTarget
  position:     Vec3
  orientation:  Vec3   // degrees
  groupRef?:    (g: THREE.Group | null) => void
  children:     React.ReactNode
}) {
  const ctx      = useContext(HandleContext)
  const active   = !!target && ctx.enabled
  const selected = active && ctx.isSelected(target!)
  const onClick  = active
    ? (e: { stopPropagation: () => void }) => { e.stopPropagation(); ctx.select(target!) }
    : undefined

  const rot: [number, number, number] = [orientation.x * DEG_TO_RAD, orientation.y * DEG_TO_RAD, orientation.z * DEG_TO_RAD]

  // Initial gizmo transform (in the object's parent frame).
  const matrix = useMemo(() => {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rot[0], rot[1], rot[2]))
    return new THREE.Matrix4().compose(new THREE.Vector3(position.x, position.y, position.z), q, ONE_SCALE)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position.x, position.y, position.z, orientation.x, orientation.y, orientation.z])

  const latest       = useRef(new THREE.Matrix4())
  const liveScaleRef = useRef<THREE.Group>(null)

  // Decompose a matrix into config-shaped { pos, orient(deg), scale }.
  const decompose = (m: THREE.Matrix4) => {
    const p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3()
    m.decompose(p, q, s)
    const e = new THREE.Euler().setFromQuaternion(q)
    return {
      pos:    { x: p.x, y: p.y, z: p.z },
      orient: { x: e.x / DEG_TO_RAD, y: e.y / DEG_TO_RAD, z: e.z / DEG_TO_RAD },
      scale:  { x: s.x, y: s.y, z: s.z },
    }
  }

  if (!selected) {
    return (
      <group ref={groupRef} position={[position.x, position.y, position.z]} rotation={rot} onClick={onClick}>
        {children}
      </group>
    )
  }

  return (
    <PivotControls
      matrix={matrix}
      autoTransform
      fixed
      scale={95}
      lineWidth={2.5}
      disableSliders
      disableScaling
      depthTest={false}
      onDragStart={() => latest.current.copy(matrix)}
      onDrag={(l) => latest.current.copy(l)}
      onDragEnd={() => {
        // The gizmo starts at scale 1, so `scale` is exactly 1 for pure move/rotate.
        const t = decompose(latest.current)
        ctx.commit(target!, t.pos, t.orient, t.scale)
      }}
    >
      <group ref={liveScaleRef}>
        <group ref={groupRef} onClick={onClick}>{children}</group>
      </group>
      <CenterScaleHandle
        onScale={(f) => { liveScaleRef.current?.scale.setScalar(f) }}
        onScaleEnd={(f) => {
          liveScaleRef.current?.scale.setScalar(1)
          const t = decompose(matrix)   // position/orientation unchanged by a scale drag
          ctx.commit(target!, t.pos, t.orient, { x: f, y: f, z: f })
        }}
      />
    </PivotControls>
  )
}

function CustomModelMesh({
  url, material, color, sz, recolor = false, tint = false,
}: {
  url:      string
  material: string
  color:    string
  sz:       [number, number, number]
  recolor?: boolean   // a colour encoding is active → apply `color` even to 'original' models
  tint?:    boolean   // recolour the model's own material (keep textures) instead of replacing
}) {
  const { scene } = useGLTF(url)
  const matParams = useContext(MaterialParamsContext)

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
      modelAspectCache.set(url, {
        x: (dims.x / maxDim) * scaleOverride,
        y: (dims.y / maxDim) * scaleOverride,
        z: (dims.z / maxDim) * scaleOverride,
      })
      const ns     = (MARK_BASE / maxDim) * scaleOverride
      const center = new THREE.Vector3()
      box.getCenter(center)
      c.scale.setScalar(ns)
      c.position.set(-center.x * ns, -center.y * ns, -center.z * ns)
    }

    if (material !== 'original') {
      // Same preset set as primitives (incl. glass / iridescent / toon / wireframe /
      // custom) + opacity, so a custom-model object/mark honours every material.
      const mat = buildMaterial(material as MarkMaterial, color, matParams)
      c.traverse((child) => {
        if (child instanceof THREE.Mesh) child.material = mat
      })
    } else if (recolor) {
      // 'original' model + active colour encoding: tint (recolour its own material,
      // keeping textures) or replace with a flat colour — mirrors the scatter path.
      const col = new THREE.Color(color)
      c.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return
        if (tint) {
          const recolour = (m: THREE.Material) => {
            const t = m.clone() as THREE.MeshStandardMaterial
            if (t.color) t.color = col
            return t
          }
          child.material = Array.isArray(child.material) ? child.material.map(recolour) : recolour(child.material)
        } else {
          child.material = new THREE.MeshStandardMaterial({ color: col, roughness: 0.65, metalness: 0.05 })
        }
      })
    }

    return c
  }, [scene, url, material, color, recolor, tint, matParams])

  // Publish the measured aspect so the exclusion zone can react to it (the memo
  // above ran during render and populated modelAspectCache for this url).
  const { report } = useContext(ModelAspectContext)
  useEffect(() => {
    const a = modelAspectCache.get(url)
    if (a) {
      report(url, a)
      // Aspect is dims/maxDim (× override); the normalised model's half-extent is
      // aspect × MARK_BASE / 2. Publish it so compound bounds use the real height.
      reportModelHalf(url, { x: a.x * MARK_BASE / 2, y: a.y * MARK_BASE / 2, z: a.z * MARK_BASE / 2 })
    }
  }, [url, report, normalizedObj])

  return (
    <group scale={sz}>
      <primitive object={normalizedObj} />
    </group>
  )
}

// ── Label helpers ─────────────────────────────────────────────────────────────

const MARK_BASE_D = L1_MARK_SCALE * MARK_BASE   // ≈1 world unit for size=1

// One variable's value for a data row.
function labelVarValue(variable: DataVariable, layer: LayerData | undefined): string {
  if (variable === 'numerical' || variable === 'weight' || variable === 'count')
    return `${layer?.percentage ?? '?'}`
  return layer?.name ?? '?'   // categorical / garbageType / section
}

function computeLabelValues(slots: LabelSlots, layers: LayerData[], layerIndex: number): LayerLabelData {
  const layer  = layers[layerIndex % Math.max(1, layers.length)]
  const result: LayerLabelData = {}
  ;(['top', 'bottom', 'left', 'right'] as const).forEach((pos) => {
    const vars = slots[pos]
    // Multiple variables at the same position render joined with " · ".
    if (vars.length) result[pos] = vars.map((v) => labelVarValue(v, layer)).join(' · ')
  })
  return result
}

// Per-scattered-mark labels (mark i ← data row i, cycling), split by side.
// Top + Left slots float above the mark; Bottom + Right slots float below —
// so up to two values can share a side, joined into one tag.
function markLabelStrings(slots: LabelSlots, layers: LayerData[], count: number): MarkLabelPair[] {
  return Array.from({ length: count }, (_, i) => {
    const ld = computeLabelValues(slots, layers, i)
    const above = [ld.top, ld.left].filter(Boolean).join('  ·  ')
    const below = [ld.bottom, ld.right].filter(Boolean).join('  ·  ')
    return { above: above || null, below: below || null }
  })
}

// Surface-placement labels: every bound variable joined into one tag placed
// above the mark along its normal (no side split).
function surfaceLabelStrings(slots: LabelSlots, layers: LayerData[], count: number): MarkLabelPair[] {
  return Array.from({ length: count }, (_, i) => {
    const ld = computeLabelValues(slots, layers, i)
    const parts = [ld.top, ld.left, ld.right, ld.bottom].filter(Boolean)
    return { above: parts.length ? parts.join('  ·  ') : null, below: null }
  })
}

const LABEL_SHADOW = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'

function MarkLabel({ pos, text, fontSize, bold, italic, color }: { pos: 'top'|'bottom'|'left'|'right'; text: string; fontSize: number; bold?: boolean; italic?: boolean; color?: string }) {
  const transform =
    pos === 'top'    ? 'translate(-50%, -100%)' :
    pos === 'bottom' ? 'translate(-50%, 0)'     :
    pos === 'left'   ? 'translate(-100%, -50%)' :
                       'translateY(-50%)'
  return (
    <span data-phys-label="" style={{
      display: 'block', fontSize: `${fontSize}px`, fontWeight: bold ? 700 : 400,
      fontStyle: italic ? 'italic' : 'normal', color: color ?? '#e0e0e0',
      fontFamily: 'Courier New, monospace', textShadow: LABEL_SHADOW,
      whiteSpace: 'nowrap', userSelect: 'none', transform,
    }}>
      {text}
    </span>
  )
}

// Collection labels for one L3 group, floating at the group's edges. Scatter groups
// get these from <Layer> (sized to the volume); every other arrangement renders them
// here, since the label lives on the group as a whole, not per mark. `halfW`/`halfH`
// are the group's approximate half-extents so the tag clears the marks/object.
function CollectionGroupLabels({ data, halfW, halfH }: { data: LayerLabelData; halfW: number; halfH: number }) {
  const { fontSize: colFs, distance, bold: colBold, italic: colItalic, color: colColor } = useContext(ColLabelStyleContext)
  const hH = halfH + distance, hW = halfW + distance
  const tag = (pos: 'top' | 'bottom' | 'left' | 'right', p: [number, number, number], text: string) => (
    <>
      <group position={p} userData={{ isLabel: true, labelText: text, labelPos: pos }} />
      <Html zIndexRange={[1, 0]} position={p} style={{ pointerEvents: 'none' }}><MarkLabel pos={pos} text={text} fontSize={colFs} bold={colBold} italic={colItalic} color={colColor} /></Html>
    </>
  )
  return (
    <>
      {data.top    && tag('top',    [0,  hH, 0], data.top)}
      {data.bottom && tag('bottom', [0, -hH, 0], data.bottom)}
      {data.left   && tag('left',   [-hW, 0, 0], data.left)}
      {data.right  && tag('right',  [ hW, 0, 0], data.right)}
    </>
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

// Size multiplier for a bound size axis, with the per-encoding scale applied.
// Returns 1 (no effect) when the axis isn't bound.
function sizeMul(key: keyof DataBindings, i: number, bindings: DataBindings, layers: LayerData[], scale: BindingScale): number {
  const v = bindings[key]
  return v ? markSizeMultiplier(v, i, layers) * bScaleOf(scale, key) : 1
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

// One sub-shape of a compound mark, rendered in the mark's unit frame (the parent
// group applies the mark's overall size). Used at level 1. Wrapped in a
// SpatialHandle so each part is individually clickable → selectable → gets its own
// move/rotate/scale gizmo (offset+orientation live on the handle, size on the mesh).
function SingleMarkPart({ part, markMaterial, markColor, structural }: {
  part: MarkPart; markMaterial: MarkMaterial; markColor: string; structural: StructuralConfig
}) {
  const geo = useMemo(() => (part.shape === 'custom' ? null : makeMarkGeometry(part.shape)), [part.shape])
  useEffect(() => () => { geo?.dispose() }, [geo])
  return (
    <SpatialHandle target={{ kind: 'markPart', id: part.id }} position={part.offset} orientation={part.orientation}>
      {part.shape === 'custom' && part.customModelUrl ? (
        <Suspense fallback={null}>
          <CustomModelMesh url={part.customModelUrl} material={part.material ?? markMaterial} color={part.color ?? markColor} sz={[part.size.x, part.size.y, part.size.z]} />
        </Suspense>
      ) : (
        <mesh geometry={geo!} scale={[part.size.x, part.size.y, part.size.z]}>
          <MarkMaterialElement material={part.material ?? markMaterial} structural={structural} color={part.color ?? markColor} />
        </mesh>
      )}
    </SpatialHandle>
  )
}

// A compound part rendered without any handle — for collection marks (aligned,
// scattered, …) where individual parts aren't selectable. Same geometry as
// SingleMarkPart, just a plain group carrying the part's offset + orientation.
function PlainMarkPart({ part, markMaterial, markColor, structural }: {
  part: MarkPart; markMaterial: MarkMaterial; markColor: string; structural: StructuralConfig
}) {
  const geo = useMemo(() => (part.shape === 'custom' ? null : makeMarkGeometry(part.shape)), [part.shape])
  useEffect(() => () => { geo?.dispose() }, [geo])
  const rot: [number, number, number] = [part.orientation.x * DEG_TO_RAD, part.orientation.y * DEG_TO_RAD, part.orientation.z * DEG_TO_RAD]
  return (
    <group position={[part.offset.x, part.offset.y, part.offset.z]} rotation={rot}>
      {part.shape === 'custom' && part.customModelUrl ? (
        <Suspense fallback={null}>
          <CustomModelMesh url={part.customModelUrl} material={part.material ?? markMaterial} color={part.color ?? markColor} sz={[part.size.x, part.size.y, part.size.z]} />
        </Suspense>
      ) : (
        <mesh geometry={geo!} scale={[part.size.x, part.size.y, part.size.z]}>
          <MarkMaterialElement material={part.material ?? markMaterial} structural={structural} color={part.color ?? markColor} />
        </mesh>
      )}
    </group>
  )
}

// Compound parts as a self-contained group scaled into a collection mark's frame,
// centred on the compound's bounding box (so it sits/scales like one object).
function CompoundMarkGroup({ parts, scale, markMaterial, markColor, structural }: {
  parts: MarkPart[]; scale: [number, number, number]; markMaterial: MarkMaterial; markColor: string; structural: StructuralConfig
}) {
  useModelHalvesVersion()   // recompute the centre once a GLB part reports its height
  const c = compoundBounds(parts).center
  return (
    <group scale={scale}>
      <group position={[-c.x, -c.y, -c.z]}>
        {parts.map(part => (
          <PlainMarkPart key={part.id} part={part} markMaterial={markMaterial} markColor={markColor} structural={structural} />
        ))}
      </group>
    </group>
  )
}

function SingleMarkMesh({ config, layers, bindings, markLabelConfig }: {
  config:          MarkConfig
  layers:          LayerData[]
  bindings:        DataBindings
  markLabelConfig: LabelConfig
}) {
  const geo   = useMemo(() => makeMarkGeometry(config.shape), [config.shape])
  useEffect(() => () => { geo.dispose() }, [geo])
  const { colorMode, colorGradient, colorTint } = useContext(ColorContext)
  const bScale = useContext(BindingScaleContext)
  const { fontSize: labelFontSize, distance: labelDistance, bold: labelBold, italic: labelItalic, color: labelColor } = useContext(LabelStyleContext)

  const s     = L1_MARK_SCALE
  const color = resolveMarkColor(0, bindings, layers, config.color, colorMode, colorGradient)

  const sc = (config.scale ?? 1) * sizeMul('markScale', 0, bindings, layers, bScale)
  const sz = {
    x: config.size.x * sc * sizeMul('markSizeX', 0, bindings, layers, bScale),
    y: config.size.y * sc * sizeMul('markSizeY', 0, bindings, layers, bScale),
    z: config.size.z * sc * sizeMul('markSizeZ', 0, bindings, layers, bScale),
  }
  const halfH = s * sz.y * 0.036 + 0.8 + labelDistance
  const halfW = s * sz.x * 0.036 + 0.8 + labelDistance
  const ld    = computeLabelValues(markLabelConfig.slots, layers, 0)
  // Centre the compound on its bounding box so the mark's origin (its handle +
  // scale pivot) is the compound's true centre — matches how collections render it.
  // Subscribe to model measurements so the centre updates once a GLB part loads.
  useModelHalvesVersion()
  const partsCenter = config.parts && config.parts.length > 0 ? compoundBounds(config.parts).center : null

  return (
    <SpatialHandle target={{ kind: 'mark' }} position={config.position} orientation={config.orientation}>
      {config.parts && config.parts.length > 0 && partsCenter ? (
        <group scale={[s * sz.x, s * sz.y, s * sz.z]}>
          <group position={[-partsCenter.x, -partsCenter.y, -partsCenter.z]}>
            {config.parts.map(part => (
              <SingleMarkPart key={part.id} part={part} markMaterial={config.material} markColor={color} structural={config.structural} />
            ))}
          </group>
        </group>
      ) : config.shape === 'custom' && config.customModelUrl ? (
        <Suspense fallback={null}>
          <CustomModelMesh url={config.customModelUrl} material={config.material} color={color} sz={[s * sz.x, s * sz.y, s * sz.z]} recolor={bindings.markColor !== null} tint={colorTint} />
        </Suspense>
      ) : (
        <mesh geometry={geo} scale={[s * sz.x, s * sz.y, s * sz.z]}>
          <MarkMaterialElement material={config.material} structural={config.structural} color={color} />
        </mesh>
      )}
      {markLabelConfig.show && (
        <>
          {ld.top    && <><group position={[0,    halfH, 0]} userData={{ isLabel: true, labelText: ld.top,    labelPos: 'top'    }} /><Html zIndexRange={[1, 0]} position={[0,    halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="top"    text={ld.top}    fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
          {ld.bottom && <><group position={[0,   -halfH, 0]} userData={{ isLabel: true, labelText: ld.bottom, labelPos: 'bottom' }} /><Html zIndexRange={[1, 0]} position={[0,   -halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="bottom" text={ld.bottom} fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
          {ld.left   && <><group position={[-halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.left,   labelPos: 'left'   }} /><Html zIndexRange={[1, 0]} position={[-halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="left"   text={ld.left}   fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
          {ld.right  && <><group position={[ halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.right,  labelPos: 'right'  }} /><Html zIndexRange={[1, 0]} position={[ halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="right"  text={ld.right}  fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
        </>
      )}
    </SpatialHandle>
  )
}

// ── Per-mark geometry body (memoises geometry per shape) ─────────────────────

function AlignedMarkBody({ shape, customModelUrl, material, structural, color, scale, recolor, tint }: {
  shape:              MarkShape
  customModelUrl?:    string
  customModelHasMat?: boolean
  material:           MarkMaterial
  structural:         StructuralConfig
  color:              string
  scale:              [number, number, number]
  recolor?:           boolean   // colour encoding active → recolour custom models too
  tint?:              boolean
}) {
  const geo = useMemo(() => makeMarkGeometry(shape), [shape])
  useEffect(() => () => { geo.dispose() }, [geo])
  if (shape === 'custom' && customModelUrl) {
    return (
      <Suspense fallback={null}>
        <CustomModelMesh url={customModelUrl} material={material} color={color} sz={scale} recolor={recolor} tint={tint} />
      </Suspense>
    )
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
  const { colorMode, colorGradient, colorTint } = useContext(ColorContext)
  const bScale = useContext(BindingScaleContext)
  const { fontSize: labelFontSize, distance: labelDistance, bold: labelBold, italic: labelItalic, color: labelColor } = useContext(LabelStyleContext)
  const recolor = bindings.markColor !== null   // colour encoding active → recolour custom models too

  function getColor(i: number) {
    return resolveMarkColor(i, bindings, layers, color, colorMode, colorGradient)
  }

  const msc = markConfig.scale ?? 1
  function getScale(i: number): [number, number, number] {
    const uni = msc * sizeMul('markScale', i, bindings, layers, bScale)
    const sz = {
      x: markConfig.size.x * uni * sizeMul('markSizeX', i, bindings, layers, bScale),
      y: markConfig.size.y * uni * sizeMul('markSizeY', i, bindings, layers, bScale),
      z: markConfig.size.z * uni * sizeMul('markSizeZ', i, bindings, layers, bScale),
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

        const halfH = sc[1] * 0.036 + 0.8 + labelDistance
        const halfW = sc[0] * 0.036 + 0.8 + labelDistance
        const ld  = computeLabelValues(markLabelConfig.slots, layers, i)

        const layerName = layers[i % Math.max(1, layers.length)]?.name
        const catEntry  = markConfig.categoryShapes?.[layerName ?? '']
        const markShape = catEntry?.shape ?? markConfig.shape
        const markUrl   = catEntry ? catEntry.customModelUrl : markConfig.customModelUrl
        const markHasMat = catEntry ? catEntry.customModelHasMat : markConfig.customModelHasMat
        const effectiveMaterial = catEntry?.customModelHasMat ? 'original' as const : markConfig.material

        const isCompound = !!markConfig.parts && markConfig.parts.length > 0

        return (
          <group key={i} position={pos} rotation={rot}>
            {isCompound ? (
              <CompoundMarkGroup
                parts={markConfig.parts!}
                scale={sc}
                markMaterial={markConfig.material}
                markColor={getColor(i)}
                structural={markConfig.structural}
              />
            ) : (
              <AlignedMarkBody
                shape={markShape}
                customModelUrl={markUrl}
                customModelHasMat={markHasMat}
                material={effectiveMaterial}
                structural={markConfig.structural}
                color={getColor(i)}
                scale={sc}
                recolor={recolor}
                tint={colorTint}
              />
            )}
            {markLabelConfig.show && (
              <>
                {ld.top    && <><group position={[0,    halfH, 0]} userData={{ isLabel: true, labelText: ld.top,    labelPos: 'top'    }} /><Html zIndexRange={[1, 0]} position={[0,    halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="top"    text={ld.top}    fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
                {ld.bottom && <><group position={[0,   -halfH, 0]} userData={{ isLabel: true, labelText: ld.bottom, labelPos: 'bottom' }} /><Html zIndexRange={[1, 0]} position={[0,   -halfH, 0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="bottom" text={ld.bottom} fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
                {ld.left   && <><group position={[-halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.left,   labelPos: 'left'   }} /><Html zIndexRange={[1, 0]} position={[-halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="left"   text={ld.left}   fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
                {ld.right  && <><group position={[ halfW, 0,   0]} userData={{ isLabel: true, labelText: ld.right,  labelPos: 'right'  }} /><Html zIndexRange={[1, 0]} position={[ halfW, 0,   0]} style={{ pointerEvents: 'none' }}><MarkLabel pos="right"  text={ld.right}  fontSize={labelFontSize} bold={labelBold} italic={labelItalic} color={labelColor} /></Html></>}
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
  markLabelConfig, colLabelConfig, layerIndex, scatterSeed, objectHandle,
  singleCollection = false,
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
  objectHandle?:     HandleTarget   // handle descriptor for the collection object (L2 only)
  singleCollection?: boolean        // the lone L2 collection (not one of many L3 groups)
}) {
  const { colorMode, colorGradient, colorTint } = useContext(ColorContext)
  const { aspects } = useContext(ModelAspectContext)
  const bScale = useContext(BindingScaleContext)
  const msc = markConfig.scale ?? 1
  const scaledMarkSize = { x: markConfig.size.x * msc, y: markConfig.size.y * msc, z: markConfig.size.z * msc }

  // Per-row encodings (one mark per data row) apply to scattering and to
  // surface placement — both distribute one mark per row over a region/surface.
  const perRowArrangement = collection1Config.arrangement === 'scattering' || collection1Config.arrangement === 'surface' || collection1Config.arrangement === 'adjacent' || collection1Config.arrangement === 'stacking'
  // Per-instance sizes when a size/scale encoding is active: scaled by that row's value.
  const sizeEncActive = perRowArrangement && (
    bindings.markScale !== null || bindings.markSizeX !== null ||
    bindings.markSizeY !== null || bindings.markSizeZ !== null
  )
  // Per-instance colours when a colour encoding is active: coloured by that row's value.
  const colorEncActive = perRowArrangement && bindings.markColor !== null
  const perRowActive = sizeEncActive || colorEncActive

  const instanceSizes = useMemo<Vec3[] | undefined>(() => {
    if (!sizeEncActive) return undefined
    return layers.map((_, i) => {
      const uni = sizeMul('markScale', i, bindings, layers, bScale)
      return {
        x: scaledMarkSize.x * uni * sizeMul('markSizeX', i, bindings, layers, bScale),
        y: scaledMarkSize.y * uni * sizeMul('markSizeY', i, bindings, layers, bScale),
        z: scaledMarkSize.z * uni * sizeMul('markSizeZ', i, bindings, layers, bScale),
      }
    })
  }, [
    sizeEncActive, layers, bScale,
    bindings.markScale, bindings.markSizeX, bindings.markSizeY, bindings.markSizeZ,
    scaledMarkSize.x, scaledMarkSize.y, scaledMarkSize.z,
  ])

  const instanceColors = useMemo<string[] | undefined>(() => {
    if (!colorEncActive) return undefined
    return layers.map((_, i) => resolveMarkColor(i, bindings, layers, color, colorMode, colorGradient))
  }, [colorEncActive, layers, bindings, color, colorMode, colorGradient])

  // Scatter avoids the collection's own object (when "Exclude object" is on).
  // The object lives in the collection's local frame, so its position is used
  // directly (no world offset).
  const collectionObject = collection1Config.object ?? null
  const exclusionZone = useMemo<ExclusionZone | undefined>(() => {
    const dec = collectionObject
    if (!dec || !collection1Config.scatterExcludeObject) return undefined
    const ws = L1_MARK_SCALE * MARK_BASE
    // half the scatter mark's largest world dimension, so mark bodies clear the surface
    const maxMark = instanceSizes
      ? instanceSizes.reduce((m, sz) => Math.max(m, sz.x, sz.y, sz.z), 0)
      : Math.max(scaledMarkSize.x, scaledMarkSize.y, scaledMarkSize.z)
    const markR = (MARK_BASE * SCATTER_SCALE / 2) * maxMark
    const center: [number, number, number] = [dec.position.x, dec.position.y, dec.position.z]
    if (dec.shape === 'sphere') {
      const radius = ws * 0.52 * Math.max(dec.size.x, dec.size.y, dec.size.z) * 1.05 + markR
      return { kind: 'sphere', center, radius }
    }
    // Box zone hugging the object's bounding box. Custom models are normalised
    // to max-dim = ws × size, so scale each axis by the measured aspect ratio
    // (falls back to a cube until the GLB has been measured once).
    const aspect = dec.shape === 'custom' && dec.customModelUrl
      ? aspects[dec.customModelUrl] ?? modelAspectCache.get(dec.customModelUrl) ?? { x: 1, y: 1, z: 1 }
      : { x: 1, y: 1, z: 1 }
    return {
      kind: 'box',
      center,
      half: [
        (ws / 2) * dec.size.x * aspect.x * 1.05 + markR,
        (ws / 2) * dec.size.y * aspect.y * 1.05 + markR,
        (ws / 2) * dec.size.z * aspect.z * 1.05 + markR,
      ],
    }
  }, [
    collectionObject, collection1Config.scatterExcludeObject,
    scaledMarkSize.x, scaledMarkSize.y, scaledMarkSize.z, instanceSizes, aspects,
  ])

  // The object renders with the collection, offset by the collection's position.
  // Only the single (L2) instance gets a viewport handle — not per-instance L3 copies.
  const objectEl = collectionObject
    ? <group position={position}><DecorationMesh config={collectionObject} handleTarget={objectHandle} /></group>
    : null

  const marks = (() => {
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

  if (collection1Config.arrangement === 'surface') {
    const target = collectionObject
    if (!target) return null
    // Count precedence: a Population encoding (this group's data value) wins, so a
    // level-3 alignment of collections scatters a different number on each object's
    // surface. Otherwise: one mark per row (size/colour encoding), else the slider.
    const surfaceCount = bindings.scatterCount !== null
      ? Math.max(1, Math.round((layers[layerIndex % Math.max(1, layers.length)]?.percentage ?? (collection1Config.surfaceCount ?? 24)) * bScaleOf(bScale, 'scatterCount')))
      : perRowActive ? layers.length : (collection1Config.surfaceCount ?? 24)
    const surfaceLabels = markLabelConfig.show
      ? surfaceLabelStrings(markLabelConfig.slots, layers, surfaceCount)
      : undefined
    // Surface samples are in the object's local frame; offset by the group position
    // (like the object + scatter) so a level-3 alignment scatters on each copy.
    return (
      <group position={position}>
        <SurfacePlacement
          dec={target}
          markShape={markConfig.shape}
          markMaterial={markConfig.material}
          markSize={scaledMarkSize}
          color={color}
          count={surfaceCount}
          surfaceScale={collection1Config.surfaceScale ?? 1}
          seed={scatterSeed}
          structural={markConfig.structural}
          markUrl={markConfig.shape === 'custom' ? markConfig.customModelUrl : undefined}
          parts={markConfig.parts}
          instanceSizes={instanceSizes}
          instanceColors={instanceColors}
          colorTint={colorTint}
          markLabels={surfaceLabels}
        />
      </group>
    )
  }

  // Scattering / stacking / adjacent (surface scatter)
  const isAdjacent = collection1Config.arrangement === 'adjacent'
  const isStacking = collection1Config.arrangement === 'stacking'
  const noVolume   = isAdjacent || isStacking   // flat/columnar: no random volume, no exclusion
  const { scatterDimensions: dim, scatterCount, scatterDensity, scatterMode } = collection1Config
  // The Scatter-Size encoding value (heightOverride) grows only the chosen axes
  // (defaults to Y). Unselected axes keep their configured dimension.
  const sizeAxes = collection1Config.scatterSizeAxes ?? { x: false, y: true, z: false }
  const dimX = heightOverride != null && sizeAxes.x ? heightOverride : dim.x
  const dimY = heightOverride != null && sizeAxes.y ? heightOverride : dim.y
  const dimZ = heightOverride != null && sizeAxes.z ? heightOverride : dim.z
  const dataLayerCount = bindings.scatterCount !== null
    ? Math.max(1, Math.round((layers[layerIndex % Math.max(1, layers.length)]?.percentage ?? scatterCount) * bScaleOf(bScale, 'scatterCount')))
    : null
  const effectiveCount = dataLayerCount !== null
    ? dataLayerCount
    : perRowActive || (isStacking && singleCollection)
      // size / colour encoding, or a lone stack: one mark per data row
      ? Math.max(1, layers.length)
      : (scatterMode ?? 'count') === 'density' && !noVolume
        ? Math.max(5, Math.round(scatterDensity * dimX * dimY * dimZ))
        : scatterCount
  const labelData = computeLabelValues(colLabelConfig.slots, layers, layerIndex)
  const markLabels = markLabelConfig.show
    ? markLabelStrings(markLabelConfig.slots, layers, effectiveCount)
    : undefined
  return (
    <Layer
      width={dimX} depth={dimZ} height={dimY}
      color={color}
      position={position}
      particleCount={effectiveCount}
      markShape={markConfig.shape}
      markMaterial={markConfig.material}
      markSize={scaledMarkSize}
      structural={markConfig.structural}
      customModelUrl={markConfig.shape === 'custom' ? markConfig.customModelUrl : undefined}
      parts={markConfig.parts}
      labelShow={colLabelConfig.show}
      labelData={labelData}
      seed={scatterSeed}
      boundingVolume={collection1Config.scatterBoundingVolume ?? 'box'}
      showBounds={collection1Config.scatterShowBounds ?? true}
      orientation={noVolume ? 'static' : (collection1Config.scatterOrientation ?? 'random')}
      exclusionZone={noVolume ? undefined : exclusionZone}
      evenDistribution={collection1Config.scatterEven ?? false}
      adjacent={isAdjacent}
      showGrid={collection1Config.adjacentShowGrid ?? false}
      stacking={isStacking}
      stackRandomOrient={collection1Config.stackingRandomOrient ?? false}
      instanceSizes={instanceSizes}
      instanceColors={instanceColors}
      colorTint={colorTint}
      markLabels={markLabels}
    />
  )
  })()

  // Collection labels: scattering renders them inside <Layer> (sized to the volume).
  // Every other arrangement renders them here at the group's approximate edges, so a
  // level-3 grouping (e.g. alignment of surfaces) labels each group.
  const arr = collection1Config.arrangement
  const colLabelData = computeLabelValues(colLabelConfig.slots, layers, layerIndex)
  const hasColLabel = colLabelConfig.show && (colLabelData.top || colLabelData.bottom || colLabelData.left || colLabelData.right)
  const colLabelEl = hasColLabel && arr !== 'scattering'
    ? (() => {
        const wsObj = L1_MARK_SCALE * MARK_BASE           // ≈ one object unit (size 1)
        const mw    = MARK_BASE * SCATTER_SCALE            // one collection-mark unit
        let halfH = 1.5, halfW = 1.5
        if (arr === 'surface') {
          const d  = collectionObject
          const ss = collection1Config.surfaceScale ?? 1
          halfH = (d ? wsObj * d.size.y * 0.5 : 0.5) + mw * ss + 0.7
          halfW = (d ? wsObj * d.size.x * 0.5 : 0.5) + mw * ss + 0.5
        } else if (arr === 'adjacent') {
          halfH = mw * scaledMarkSize.y + 0.8
          halfW = collection1Config.scatterDimensions.x * 0.5 + 0.5
        } else if (arr === 'stacking') {
          halfH = mw * scaledMarkSize.y * Math.max(1, layers.length) + 0.7
          halfW = mw * scaledMarkSize.x + 0.5
        } else if (arr === 'piling') {
          halfH = mw * scaledMarkSize.y * 3 + 0.7
          halfW = mw * scaledMarkSize.x * 2 + 0.5
        } else if (arr === 'alignment') {
          const cnt   = layers.length || collection1Config.alignCount
          const spanX = collection1Config.alignAxis === 'X' ? (cnt - 1) * collection1Config.alignSpacing + wsObj * scaledMarkSize.x : wsObj * scaledMarkSize.x
          const spanY = collection1Config.alignAxis === 'Y' ? (cnt - 1) * collection1Config.alignSpacing + wsObj * scaledMarkSize.y : wsObj * scaledMarkSize.y
          halfH = spanY * 0.5 + 0.9
          halfW = spanX * 0.5 + 0.5
        }
        return <group position={position}><CollectionGroupLabels data={colLabelData} halfW={halfW} halfH={halfH} /></group>
      })()
    : null

  return <>{marks}{objectEl}{colLabelEl}</>
}

// ── Max scatter height when weight binding is active ──────────────────────────
const WEIGHT_MAX_H = 8

// ── Level 2: one collection ───────────────────────────────────────────────────

function Level2Content({
  markConfig, collection1Config, layers, bindings, markLabelConfig, colLabelConfig, scatterSeed,
}: {
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  layers:            LayerData[]
  bindings:          DataBindings
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  scatterSeed:       number
}) {
  // Base colour for the collection's marks is the mark's own colour (matches L1).
  // A colour encoding, when bound, still overrides this per-instance downstream.
  const color  = markConfig.color ?? collection1Config.color
  const bScale = useContext(BindingScaleContext)
  const maxPct = Math.max(...layers.map(l => l.percentage), 1)
  const heightOverride = isNumericalVar(bindings.scatterSize) && collection1Config.arrangement === 'scattering'
    ? Math.max(0.5, ((layers[0]?.percentage ?? 50) / maxPct) * WEIGHT_MAX_H * bScaleOf(bScale, 'scatterSize'))
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
      objectHandle={{ kind: 'object', owner: 'col1' }}
      singleCollection
    />
  )
}

// ── Level 3: collection2 arrangement applied to collection1 instances ─────────

function Level3Content({
  markConfig, collection1Config, collection2Config, layers, bindings,
  markLabelConfig, colLabelConfig, scatterSeed,
}: {
  markConfig:        MarkConfig
  collection1Config: CollectionConfig
  collection2Config: CollectionConfig
  layers:            LayerData[]
  bindings:          DataBindings
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  scatterSeed:       number
}) {
  const {
    arrangement, alignCount, alignAxis, alignSpacing, alignAnchor,
    scatterCount, scatterDimensions, color: col2Color,
  } = collection2Config
  const bScale = useContext(BindingScaleContext)
  const scatterSizeScale = bScaleOf(bScale, 'scatterSize')

  const groupCount = layers.length || alignCount

  const groups = useMemo(() => {
    if (arrangement === 'alignment') {
      const base = Array.from({ length: groupCount }, (_, i) => {
        const layer = layers[i % Math.max(1, layers.length)]
        return {
          // Base colour is the mark's own colour; per-category colour is applied
          // downstream by resolveMarkColor only when a markColor encoding is set.
          color: markConfig.color  ?? col2Color,
          name:  layer?.name       ?? `Group ${i + 1}`,
          pct:   layer?.percentage ?? 0,
        }
      })

      const maxPct = Math.max(...layers.map(l => l.percentage), 1)

      // Footprint of one collection-mark. Collection marks (scatter / stack /
      // adjacent) render at SCATTER_SCALE; aligned marks render at L1_MARK_SCALE.
      const c1     = collection1Config
      const msc2   = markConfig.scale ?? 1
      const cW     = MARK_BASE * SCATTER_SCALE * markConfig.size.x * msc2
      const cH     = MARK_BASE * SCATTER_SCALE * markConfig.size.y * msc2
      const alignW = markConfig.size.x * msc2 * MARK_BASE_D
      const alignH = markConfig.size.y * msc2 * MARK_BASE_D

      // Extent of each group ALONG the alignment axis — the actual footprint of
      // that collection given its own arrangement, so groups pack edge-to-edge.
      const extents = base.map((g) => {
        if (c1.arrangement === 'scattering') {
          const dim = c1.scatterDimensions
          if (alignAxis === 'X') return dim.x
          return isNumericalVar(bindings.scatterSize) ? Math.max(0.5, (g.pct / maxPct) * WEIGHT_MAX_H * scatterSizeScale) : dim.y
        }
        if (c1.arrangement === 'alignment') {
          if (alignAxis === 'X') return c1.alignAxis === 'X' ? (c1.alignCount - 1) * c1.alignSpacing + alignW : alignW
          return c1.alignAxis === 'Y' ? (c1.alignCount - 1) * c1.alignSpacing + alignH : alignH
        }
        if (c1.arrangement === 'adjacent') {
          return alignAxis === 'X' ? c1.scatterDimensions.x : cH
        }
        // stacking / piling / surface — a compact column/cluster, ~one mark wide
        return alignAxis === 'X' ? cW : cH
      })

      // Extent PERPENDICULAR to the alignment axis (for the anchor offset).
      const perpExtents = base.map((g) => {
        if (c1.arrangement === 'scattering') {
          const dim = c1.scatterDimensions
          if (alignAxis === 'X') return isNumericalVar(bindings.scatterSize) ? Math.max(0.5, (g.pct / maxPct) * WEIGHT_MAX_H * scatterSizeScale) : dim.y
          return dim.x
        }
        if (c1.arrangement === 'alignment') {
          if (alignAxis === 'X') return c1.alignAxis === 'Y' ? (c1.alignCount - 1) * c1.alignSpacing + alignH : alignH
          return c1.alignAxis === 'X' ? (c1.alignCount - 1) * c1.alignSpacing + alignW : alignW
        }
        if (c1.arrangement === 'adjacent') {
          return alignAxis === 'X' ? cH : c1.scatterDimensions.x
        }
        return alignAxis === 'X' ? cH : cW
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
        color:    markConfig.color  ?? col2Color,
        name:     layer?.name       ?? `Group ${i + 1}`,
        pct:      layer?.percentage ?? 0,
        perpExt:  0,
      }
    })
  }, [
    arrangement, groupCount, alignAxis, alignSpacing, alignAnchor,
    scatterCount, scatterDimensions.x, scatterDimensions.y, scatterDimensions.z,
    layers, col2Color, bindings.scatterSize, scatterSizeScale,
    collection1Config.arrangement, collection1Config.alignAxis,
    collection1Config.alignCount, collection1Config.alignSpacing,
    collection1Config.scatterDimensions.x, collection1Config.scatterDimensions.y,
    markConfig.size.x, markConfig.size.y, markConfig.scale, markConfig.color, scatterSeed,
  ])

  const maxPct = Math.max(...layers.map(l => l.percentage), 1)

  return (
    <group>
      {groups.map(({ position, color, name, pct }, i) => {
        const heightOverride = isNumericalVar(bindings.scatterSize) && collection1Config.arrangement === 'scattering'
          ? Math.max(0.5, (pct / maxPct) * WEIGHT_MAX_H * scatterSizeScale)
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
          />
        )
      })}
      {/* Collection-2's own object (a decoration for the whole L3 composition). */}
      {collection2Config.object && <DecorationMesh config={collection2Config.object} handleTarget={{ kind: 'object', owner: 'col2' }} />}
    </group>
  )
}

// ── Decoration mesh ───────────────────────────────────────────────────────────

function DecorationMesh({
  config, onRegister, onUnregister, handleTarget,
}: {
  config: DecorationConfig
  onRegister?:   (id: string, obj: THREE.Object3D) => void
  onUnregister?: (id: string) => void
  handleTarget?: HandleTarget   // when set, this object is selectable + gets a move gizmo
}) {
  const geo = useMemo(() => makeMarkGeometry(config.shape), [config.shape])
  useEffect(() => () => { geo.dispose() }, [geo])

  // The decoration's group doubles as a label occluder (used by 'optimized' mode).
  // Registering via the ref keeps it correct when SpatialHandle re-mounts the group
  // on select/deselect.
  const groupRef = useRef<THREE.Group | null>(null)
  const setDecGroup = useCallback((g: THREE.Group | null) => {
    groupRef.current = g
    if (g) onRegister?.(config.id, g)
    else   onUnregister?.(config.id)
  }, [config.id, onRegister, onUnregister])

  const s = L1_MARK_SCALE

  const decMatParams = useMemo(() => resolveMaterialParams(config), [config.opacity, config.roughness, config.metalness])

  return (
    <MaterialParamsContext.Provider value={decMatParams}>
    <SpatialHandle target={handleTarget} position={config.position} orientation={config.orientation} groupRef={setDecGroup}>
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
    </SpatialHandle>
    </MaterialParamsContext.Provider>
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

// Sun direction from elevation / azimuth angles.
function skySun(elevationDeg: number, azimuthDeg: number): [number, number, number] {
  const el = elevationDeg * Math.PI / 180
  const az = azimuthDeg * Math.PI / 180
  const d = 100
  return [d * Math.cos(el) * Math.sin(az), d * Math.sin(el), d * Math.cos(el) * Math.cos(az)]
}

// Vertical two-colour gradient set as the scene background.
function GradientBackground({ top, bottom }: { top: string; bottom: string }) {
  const scene = useThree(s => s.scene)
  const tex = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 2; c.height = 512
    const ctx = c.getContext('2d')!
    const g = ctx.createLinearGradient(0, 0, 0, 512)
    g.addColorStop(0, top); g.addColorStop(1, bottom)
    ctx.fillStyle = g; ctx.fillRect(0, 0, 2, 512)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [top, bottom])
  useEffect(() => {
    const prev = scene.background
    scene.background = tex
    return () => { if (scene.background === tex) scene.background = prev; tex.dispose() }
  }, [scene, tex])
  return null
}

// Keep tone-mapping exposure in sync with the scene config.
function ExposureControl({ value }: { value: number }) {
  const gl = useThree(s => s.gl)
  useEffect(() => { gl.toneMappingExposure = value }, [gl, value])
  return null
}

export function sceneExposure(config: SceneConfig): number {
  if (config.exposure != null) return config.exposure
  return config.background === 'ocean' ? 0.95 : config.background === 'dark' ? 1.35 : 1.2
}

function SceneEnvironment({ config }: { config: SceneConfig }) {
  const mode  = config.background
  const isSea = mode === 'ocean'
  const rot   = (config.envRotation ?? 0) * Math.PI / 180
  const envRotation: [number, number, number] = [0, rot, 0]

  return (
    <>
      {/* ── Background ── */}
      {mode === 'dark'     && <color attach="background" args={['#050505']} />}
      {mode === 'ocean'    && <color attach="background" args={['#7ab8d4']} />}
      {mode === 'color'    && <color attach="background" args={[config.bgColor ?? '#202024']} />}
      {mode === 'gradient' && <GradientBackground top={config.bgGradientTop ?? '#3a5f8a'} bottom={config.bgGradientBottom ?? '#0a0a12'} />}

      {/* HDRI: always lights the scene; shown as background only in 'hdri' mode */}
      <Environment
        preset={config.hdriPreset}
        background={mode === 'hdri'}
        backgroundBlurriness={config.hdriBlur ?? 0}
        backgroundIntensity={config.hdriIntensity ?? 1}
        environmentRotation={envRotation}
        backgroundRotation={envRotation}
      />

      <ExposureControl value={sceneExposure(config)} />

      {/* Procedural sky */}
      {mode === 'sky' && (
        <Sky
          distance={450000}
          sunPosition={skySun(config.skyElevation ?? 20, config.skyAzimuth ?? 140)}
          turbidity={8} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8}
        />
      )}

      {/* Ocean preset: sky + fog + reflective water */}
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

      {/* Optional atmosphere / ground */}
      {config.stars && <Stars radius={120} depth={50} count={4000} factor={4} saturation={0} fade speed={0.4} />}
      {config.fog && !isSea && (
        <fog attach="fog" args={[config.fogColor ?? '#8090a0', config.fogNear ?? 20, config.fogFar ?? 150]} />
      )}
      {config.grid && (
        <Grid
          position={[0, 0, 0]} args={[60, 60]} infiniteGrid
          cellSize={1} cellThickness={0.6} cellColor="#6b6b6b"
          sectionSize={5} sectionThickness={1} sectionColor="#9a9a9a"
          fadeDistance={70} fadeStrength={1}
        />
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
  bindingScale:      BindingScale
  markLabelConfig:   LabelConfig
  colLabelConfig:    LabelConfig
  decorations:       DecorationConfig[]
  colorMode:         'distinct' | 'continuous'
  colorGradient:     { from: string; to: string }
  colorTint:         boolean
  scatterSeed:       number
  datasetTitle?:     string
  // Viewport transform handles: selection writers + config writers
  onSelectElement:     (el: ActiveElement) => void
  onSelectDecoration:  (id: string | null) => void
  onSelectPart?:       (id: string | null) => void   // select a compound-mark sub-part
  onMarkChange:        (c: MarkConfig) => void
  onDecorationChange:  (c: DecorationConfig) => void
  onCollection1Change: (c: CollectionConfig) => void
  onCollection2Change: (c: CollectionConfig) => void
  // Path tracing
  pathTracingActive?:  boolean
  onSamplesUpdate?:    (n: number) => void
  downloadRenderRef?:  React.MutableRefObject<(() => void) | null>
}

export function CompositionCanvas({
  level, markConfig, collection1Config, collection2Config, sceneConfig, layers, bindings, bindingScale,
  markLabelConfig, colLabelConfig, decorations,
  colorMode, colorGradient, colorTint, scatterSeed, datasetTitle,
  onSelectElement, onSelectDecoration, onSelectPart,
  onMarkChange, onDecorationChange, onCollection1Change, onCollection2Change,
  pathTracingActive, onSamplesUpdate, downloadRenderRef,
}: CompositionCanvasProps) {
  const fov     = focalLengthToFov(sceneConfig.focalLength)
  const initPos = CAMERA_POSITIONS[level]
  const isSea   = sceneConfig.background === 'ocean'

  // Measured custom-model aspects, kept in state so the exclusion zone recomputes
  // once a decoration's GLB has loaded (matters after a reload).
  const [modelAspects, setModelAspects] = useState<Record<string, ModelAspect>>({})
  const reportAspect = useCallback((url: string, a: ModelAspect) => {
    setModelAspects(prev => {
      const ex = prev[url]
      if (ex && ex.x === a.x && ex.y === a.y && ex.z === a.z) return prev
      return { ...prev, [url]: a }
    })
  }, [])

  // Registered decoration groups — the occluder set for 'optimized' label hiding.
  const [occluderMap, setOccluderMap] = useState<Record<string, THREE.Object3D>>({})
  const registerOccluder = useCallback((id: string, obj: THREE.Object3D) => {
    setOccluderMap(prev => (prev[id] === obj ? prev : { ...prev, [id]: obj }))
  }, [])
  const unregisterOccluder = useCallback((id: string) => {
    setOccluderMap(prev => { const n = { ...prev }; delete n[id]; return n })
  }, [])
  const occludeValue = useMemo(() => ({
    mode: sceneConfig.sceneLabelOcclude ?? 'optimized',
    occluders: Object.values(occluderMap).map(o => ({ current: o })),
  }), [sceneConfig.sceneLabelOcclude, occluderMap])

  // Viewport handles: a spatial entity gets a move gizmo only after you click it
  // in the viewport — not merely by being the active panel element. Clicking empty
  // space (onPointerMissed) or changing level clears the selection.
  const [handleSel, setHandleSel] = useState<string | null>(null)
  useEffect(() => { setHandleSel(null) }, [level])
  const handleValue = useMemo<HandleValue>(() => ({
    enabled: !pathTracingActive,
    isSelected: (t) => handleKey(t) === handleSel,
    select: (t) => {
      setHandleSel(handleKey(t))
      if (t.kind === 'decoration') onSelectDecoration(t.id)
      else if (t.kind === 'markPart') onSelectPart?.(t.id)   // also focuses the Mark panel + that part's editor
      else if (t.kind === 'mark')  onSelectElement('mark')
      else onSelectElement(t.owner === 'col1' ? 'collection1' : 'collection2')
    },
    commit: (t, pos, orient, scale) => {
      const scl = (sz: Vec3): Vec3 => ({ x: sz.x * scale.x, y: sz.y * scale.y, z: sz.z * scale.z })
      if (t.kind === 'mark') onMarkChange({ ...markConfig, position: pos, orientation: orient, size: scl(markConfig.size) })
      else if (t.kind === 'markPart') {
        const parts = markConfig.parts ?? []
        onMarkChange({ ...markConfig, parts: parts.map(p => p.id === t.id ? { ...p, offset: pos, orientation: orient, size: scl(p.size) } : p) })
      }
      else if (t.kind === 'decoration') {
        const d = decorations.find(x => x.id === t.id)
        if (d) onDecorationChange({ ...d, position: pos, orientation: orient, size: scl(d.size) })
      } else if (t.owner === 'col1' && collection1Config.object) {
        onCollection1Change({ ...collection1Config, object: { ...collection1Config.object, position: pos, orientation: orient, size: scl(collection1Config.object.size) } })
      } else if (t.owner === 'col2' && collection2Config.object) {
        onCollection2Change({ ...collection2Config, object: { ...collection2Config.object, position: pos, orientation: orient, size: scl(collection2Config.object.size) } })
      }
    },
  }), [
    pathTracingActive, handleSel,
    markConfig, decorations, collection1Config, collection2Config,
    onSelectElement, onSelectDecoration, onSelectPart, onMarkChange, onDecorationChange, onCollection1Change, onCollection2Change,
  ])

  // Material params (alpha + custom PBR knobs) shared by every mark, provided via
  // context so all mark renderers pick them up. Decorations override with their own.
  const markMatParams = useMemo(
    () => resolveMaterialParams(markConfig),
    [markConfig.opacity, markConfig.roughness, markConfig.metalness],
  )

  return (
    <Canvas
      camera={{ position: initPos, fov, near: 0.1, far: 500 }}
      style={{ width: '100%', height: '100%' }}
      onPointerMissed={() => setHandleSel(null)}
      frameloop={pathTracingActive ? 'never' : 'always'}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: sceneExposure(sceneConfig),
        preserveDrawingBuffer: true,
      }}
    >
      <CameraController level={level} fov={fov} focalLength={sceneConfig.focalLength} />
      <SceneEnvironment config={sceneConfig} />

      <ModelAspectContext.Provider value={{ aspects: modelAspects, report: reportAspect }}>
      <ColorContext.Provider value={{ colorMode, colorGradient, colorTint }}>
      <LabelOccludeContext.Provider value={occludeValue}>
      <LabelStyleContext.Provider value={{ fontSize: markLabelConfig.fontSize ?? 11, distance: markLabelConfig.distance ?? 0, bold: markLabelConfig.bold ?? false, italic: markLabelConfig.italic ?? false, color: markLabelConfig.color ?? '#e8e8e8' }}>
      <ColLabelStyleContext.Provider value={{ fontSize: colLabelConfig.fontSize ?? 11, distance: colLabelConfig.distance ?? 0, bold: colLabelConfig.bold ?? false, italic: colLabelConfig.italic ?? false, color: colLabelConfig.color ?? '#e8e8e8' }}>
      <Physics gravity={[0, -9.81, 0]} timeStep="vary">
      <HandleContext.Provider value={handleValue}>

      <MaterialParamsContext.Provider value={markMatParams}>
      <BindingScaleContext.Provider value={bindingScale}>
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
        />
      )}
      </BindingScaleContext.Provider>
      </MaterialParamsContext.Provider>

      {/* Decorations rendered at all levels */}
      {decorations.map((dec) => (
        <DecorationMesh key={dec.id} config={dec} onRegister={registerOccluder} onUnregister={unregisterOccluder} handleTarget={{ kind: 'decoration', id: dec.id }} />
      ))}

      {/* Dataset title — floats above/below the scene */}
      {datasetTitle && (sceneConfig.sceneTitleShow ?? false) && (
        <Html
          zIndexRange={[1, 0]}
          position={[
            0,
            (sceneConfig.sceneTitleBelow ? -1 : 1) * (sceneConfig.sceneTitleOffset ?? 2.5),
            0,
          ]}
          center
          occlude={occludeProp(occludeValue)}
          style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}
        >
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>
            {datasetTitle}
          </span>
        </Html>
      )}

      </HandleContext.Provider>
      </Physics>
      </ColLabelStyleContext.Provider>
      </LabelStyleContext.Provider>
      </LabelOccludeContext.Provider>
      </ColorContext.Provider>
      </ModelAspectContext.Provider>

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
