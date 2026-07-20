import { useRef, useState, useEffect, useCallback, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Bounds, useBounds, Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'
import {
  type SceneSave, type Shape, type ViewType, type DataField, type DataRow,
  type LabPresetHandle,
  DEFAULT_DATA, VIEW_LABELS, secBtnSt, priBtnSt, floatSelSt, floatIcoSt,
  Sec, SLabel, RowLabel,
  LabNavTitle, LabPresetRow, LabModelSection, LabDataPanel,
  LabAdvancedToggle, LabAdvancedPanel, LabViewSelector, LabViewToggle,
  serverFetch,
} from './LabShared'

const SERVER = import.meta.env.VITE_SERVER ?? 'http://localhost:3001'

type DeformMode = 'STRETCH' | 'TWIST' | 'SLICE'
// | 'BEND' | 'TAPER' | 'TWIST_STRETCH' | 'INFLATE'
type Axis      = 'X' | 'Y' | 'Z'
type BindingMap = Partial<Record<'factor', DataField>>

interface BindingRange { outMin: number; outMax: number }

const texLabel = (f: string) => f.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')

const MODE_INFO = {
  STRETCH: { label: 'Stretch', factorLabel: 'Amount',   factorMin: 0,    factorMax: 3,   factorStep: 0.05, hint: 'Elongates along axis, squishes perpendicular.' },
  TWIST:   { label: 'Twist',   factorLabel: 'Angle °',  factorMin: -720, factorMax: 720, factorStep: 5,    hint: 'Twists around the deform axis. Up to ±720°.' },
  SLICE:   { label: 'Slice',   factorLabel: 'Cut pos %', factorMin: 1,   factorMax: 99,  factorStep: 1,    hint: 'Cuts the mesh at a data-driven position along the axis. Bind "value" to drive each instance.' },
}

// ── Deformation "stress" effects ──────────────────────────────────────────────
// Material effects that grow with the deformation amount (morph influence, 0→1)
// so they read as the surface reacting to being deformed. Controlled from the
// Advanced panel and work on any geometry. Colour-based effects (tint, glow,
// cracks) share the single chosen `tintColor`.

const STRESS_PRESET_NAME = 'stretch - earth'   // compared case-insensitively; seeds earth defaults

const FX_TINT_STRENGTH = 0.85   // max colour blend at full deform
const FX_DISTORT_AMP   = 0.05   // max surface wobble (object-space)
const FX_DISTORT_FREQ  = 8.0    // spatial ripple frequency
const FX_DISTORT_SPEED = 2.5    // ripple animation speed
const FX_GLOW_MAX      = 1.6    // max emissive intensity
const FX_CRACK_FREQ    = 5.5    // crack network density

export interface StressFx {
  tint:       boolean
  tintColor:  string
  distort:    boolean
  glow:       boolean
  cracks:     boolean
  desaturate: boolean
}

export const FX_OFF: StressFx = {
  tint: false, tintColor: '#d62828', distort: false, glow: false, cracks: false, desaturate: false,
}
// Seeded when the legacy "Stretch - earth" preset is loaded without saved fx.
const FX_EARTH: StressFx = { ...FX_OFF, tint: true, distort: true }

// ── Preset reference (optional side panel) ─────────────────────────────────────
// A preset may carry a reference — a dataset title, an image and a source link —
// shown in a side panel on demand. Images live in public/assets/references/.

export interface PresetReference { title: string; image: string; link: string }

const REF_ASSET_BASE = import.meta.env.BASE_URL + 'assets/references/'
// Resolve a stored image (bare filename → references folder; full URL → as-is).
function refImageSrc(image: string) {
  return /^(https?:)?\/\//.test(image) || image.startsWith('/') ? image : REF_ASSET_BASE + image
}

// ── "Stretch - earth" seed dataset + reference ────────────────────────────────
// Earth Overshoot Day per year, with Number of Earths ≈ 365 / (day-of-year of the
// overshoot day) — i.e. how many Earths humanity's demand would need that year.
const EARTH_DATA: DataRow[] = [
  { category: '1972', value: 1.0, percentage: 0  },   // Dec 31 → ~1.0 Earths
  { category: '1990', value: 1.2, percentage: 20 },   // Oct 23 → 1.2
  { category: '2000', value: 1.4, percentage: 40 },   // Sep 23 → 1.4
  { category: '2010', value: 1.7, percentage: 70 },   // Aug 8  → 1.7
  { category: '2026', value: 1.9, percentage: 90 },   // → 1.9
]

const EARTH_REFERENCE: PresetReference = {
  title: 'How many Earths needed in a year?',
  image: 'earth-overshoot.png',   // drop this file in public/assets/references/
  link:  'https://overshoot.footprintnetwork.org/newsroom/past-earth-overshoot-days-/',
}

function fxAnyOn(fx?: StressFx | null): fx is StressFx {
  return !!fx && (fx.tint || fx.distort || fx.glow || fx.cracks || fx.desaturate)
}

const _fxColor = new THREE.Color()

type FxUniforms = {
  uTime:       { value: number }
  uAmp:        { value: number }
  uCrack:      { value: number }
  uDesat:      { value: number }
  uCrackColor: { value: THREE.Color }
}
type FxMat = THREE.MeshStandardMaterial & {
  __fxU?:    FxUniforms
  __fxBase?: { color: THREE.Color; emissive: THREE.Color; emissiveIntensity: number }
}

// Give a cloned subtree its own material instances so per-clone effects don't
// leak across clones (three's clone(true) shares material references).
function ensureUniqueMaterials(root: THREE.Object3D) {
  root.traverse(n => {
    const m = n as THREE.Mesh
    if (!m.isMesh || !m.material) return
    m.material = Array.isArray(m.material)
      ? m.material.map(x => x.clone())
      : (m.material as THREE.Material).clone()
  })
}

// Inject the shader-based effects (vertex distortion + fragment cracks/desaturate)
// once per material, and cache the base look for the CPU-driven tint/glow. three
// includes onBeforeCompile.toString() in its program cache key, so distinct
// materials still compile their own programs.
function installFxShader(root: THREE.Object3D) {
  const f  = FX_DISTORT_FREQ.toFixed(1)
  const cf = FX_CRACK_FREQ.toFixed(1)
  root.traverse(n => {
    const m = n as THREE.Mesh
    if (!m.isMesh || !m.material) return
    const mats = Array.isArray(m.material) ? m.material : [m.material]
    mats.forEach(mat => {
      const mm = mat as FxMat
      if (mm.__fxU) return
      const u: FxUniforms = {
        uTime: { value: 0 }, uAmp: { value: 0 }, uCrack: { value: 0 }, uDesat: { value: 0 },
        uCrackColor: { value: new THREE.Color('#d62828') },
      }
      mm.__fxU = u
      mm.__fxBase = {
        color:             mm.color ? mm.color.clone() : new THREE.Color(1, 1, 1),
        emissive:          mm.emissive ? mm.emissive.clone() : new THREE.Color(0, 0, 0),
        emissiveIntensity: mm.emissiveIntensity ?? 1,
      }
      mm.onBeforeCompile = shader => {
        shader.uniforms.uTime       = u.uTime
        shader.uniforms.uAmp        = u.uAmp
        shader.uniforms.uCrack      = u.uCrack
        shader.uniforms.uDesat      = u.uDesat
        shader.uniforms.uCrackColor = u.uCrackColor

        // Vertex: animated displacement along the normal + object-space position varying.
        shader.vertexShader = 'uniform float uTime;\nuniform float uAmp;\nvarying vec3 vFxPos;\n' + shader.vertexShader
        shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          vFxPos = position;
          float fxD = sin(position.x * ${f} + uTime * ${FX_DISTORT_SPEED.toFixed(1)})
                    * cos(position.y * ${f} + uTime * ${(FX_DISTORT_SPEED * 0.8).toFixed(1)})
                    * sin(position.z * ${f} + uTime * ${(FX_DISTORT_SPEED * 0.9).toFixed(1)});
          transformed += normalize(normal) * fxD * uAmp;`
        )

        // Fragment: desaturate the diffuse, then add glowing cracks to the emissive.
        shader.fragmentShader = 'uniform float uCrack;\nuniform float uDesat;\nuniform vec3 uCrackColor;\nvarying vec3 vFxPos;\n' + shader.fragmentShader
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <map_fragment>',
          `#include <map_fragment>
          {
            float fxLum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(fxLum), uDesat);
          }`
        )
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <emissivemap_fragment>',
          `#include <emissivemap_fragment>
          {
            float fxField = sin(vFxPos.x * ${cf} + 1.3)
                          + sin(vFxPos.y * ${cf} * 1.1)
                          + sin(vFxPos.z * ${cf} + 2.1);
            float fxLine = 1.0 - smoothstep(0.0, 0.08 + 0.25 * uCrack, abs(fxField));
            totalEmissiveRadiance += uCrackColor * fxLine * uCrack * 2.0;
          }`
        )
      }
      mm.needsUpdate = true
    })
  })
}

// Clone materials + install the effect shader — one-time setup per subtree.
function prepareFx(root: THREE.Object3D) {
  ensureUniqueMaterials(root)
  installFxShader(root)
}

// Per-frame effect update. `t` is the deform amount (0→1); `time` the clock. Tint
// and glow are applied on the CPU (so they compose with textures); distortion,
// cracks and desaturate are driven through the shader uniforms.
function applyFx(root: THREE.Object3D, fx: StressFx, t: number, time: number) {
  const amt  = Math.min(1, Math.max(0, t))
  const tint = _fxColor.set(fx.tintColor)
  root.traverse(n => {
    const m = n as THREE.Mesh
    if (!m.isMesh || !m.material) return
    const mats = Array.isArray(m.material) ? m.material : [m.material]
    mats.forEach(mat => {
      const mm   = mat as FxMat
      const base = mm.__fxBase
      if (base && mm.color) {
        if (fx.tint) mm.color.copy(base.color).lerp(tint, amt * FX_TINT_STRENGTH)
        else         mm.color.copy(base.color)
      }
      if (base && mm.emissive) {
        if (fx.glow) { mm.emissive.copy(tint); mm.emissiveIntensity = amt * FX_GLOW_MAX }
        else         { mm.emissive.copy(base.emissive); mm.emissiveIntensity = base.emissiveIntensity }
      }
      const u = mm.__fxU
      if (u) {
        u.uTime.value  = time
        u.uAmp.value   = fx.distort ? amt * FX_DISTORT_AMP : 0
        u.uCrack.value = fx.cracks ? amt : 0
        u.uDesat.value = fx.desaturate ? amt : 0
        u.uCrackColor.value.copy(tint)
      }
    })
  })
}

const SPACING       = 3.0
const SLICE_GAP     = 0.15   // must match slice.py GAP constant
const ANIM_PAUSE    = 0.5    // s — hold collapsed before exploding
const ANIM_EXPLODE  = 1.5    // s — duration of explode animation
const ANIM_HOLD     = 2.5    // s — hold exploded with labels before reset
const ANIM_CYCLE    = ANIM_PAUSE + ANIM_EXPLODE + ANIM_HOLD

// ── Preset storage (keyed per-lab so each lab keeps its own saves) ─────────────

const DEFORM_PRESETS_KEY = 'phys_tool_deform_presets'

function loadDeformPresets(): SceneSave[] {
  try { return JSON.parse(localStorage.getItem(DEFORM_PRESETS_KEY) ?? '[]') } catch { return [] }
}

function persistDeformPresets(saves: SceneSave[]) {
  localStorage.setItem(DEFORM_PRESETS_KEY, JSON.stringify(saves))
}

// ── Camera fit ────────────────────────────────────────────────────────────────

function FitCamera() {
  const api = useBounds()
  useEffect(() => { api.refresh().fit() }, [api])
  return null
}

// ── Effect view ───────────────────────────────────────────────────────────────

function EffectView({ url, speed, fx, data, playData }: {
  url: string; speed: number; fx?: StressFx | null
  data?: DataRow[]; playData?: boolean
}) {
  const gltf   = useLoader(GLTFLoader, url)
  const active = fxAnyOn(fx)
  const scene = useMemo(() => {
    const s = gltf.scene.clone(true)
    if (active) prepareFx(s)
    return s
  }, [gltf, active])

  // Data mode: as the effect plays, label the data point whose (normalised) value
  // matches the current stretch, so the label steps through the categories.
  const dataMode = !!playData && !!data && data.length > 0
  const tValues = useMemo(() => {
    if (!data || !data.length) return []
    const vs = data.map(r => r.value)
    const mn = Math.min(...vs), mx = Math.max(...vs)
    return data.map(r => (r.value - mn) / Math.max(mx - mn, 0.001))
  }, [data])

  const [activeIdx, setActiveIdx] = useState(0)
  const activeIdxRef = useRef(0)
  const labelRef     = useRef<THREE.Group>(null)
  const boxRef       = useRef(new THREE.Box3())
  const ctrRef       = useRef(new THREE.Vector3())

  useFrame(({ clock }) => {
    const el = clock.getElapsedTime()
    const t  = (Math.sin(el * speed) + 1) / 2
    scene.traverse(n => {
      const m = n as THREE.Mesh
      if (m.isMesh && m.morphTargetInfluences?.length) m.morphTargetInfluences[0] = t
    })
    if (fxAnyOn(fx)) applyFx(scene, fx, t, el)
    if (dataMode) {
      // Nearest data point to the current stretch level.
      let best = 0, bestD = Infinity
      for (let i = 0; i < tValues.length; i++) {
        const d = Math.abs(tValues[i] - t)
        if (d < bestD) { bestD = d; best = i }
      }
      if (best !== activeIdxRef.current) { activeIdxRef.current = best; setActiveIdx(best) }
      // Keep the label pinned just above the (stretching) object.
      if (labelRef.current) {
        boxRef.current.setFromObject(scene)
        const c = boxRef.current.getCenter(ctrRef.current)
        labelRef.current.position.set(c.x, boxRef.current.max.y + 0.15, c.z)
      }
    }
  })

  const row = dataMode && data ? data[activeIdx] : null

  return (
    <Bounds fit clip observe margin={1.2}>
      <FitCamera />
      <primitive object={scene} />
      {row && (
        <group ref={labelRef}>
          <Html center style={{ pointerEvents: 'none', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap',
              background: 'rgba(0,0,0,0.52)', padding: '4px 14px', borderRadius: 4,
            }}>
              <div style={{ fontSize: 13, color: '#e0e0f0', fontWeight: 600, letterSpacing: 0.4 }}>{row.category}</div>
              <div style={{ fontSize: 12, color: '#a090e8', fontVariantNumeric: 'tabular-nums' }}>{row.value}</div>
            </div>
          </Html>
        </group>
      )}
    </Bounds>
  )
}

// ── Static view ───────────────────────────────────────────────────────────────

function StaticView({ url, data, range, fx }: {
  url: string; data: DataRow[]; range: BindingRange; fx?: StressFx | null
}) {
  const gltf    = useLoader(GLTFLoader, url)
  const dataMin = Math.min(...data.map(r => r.value))
  const dataMax = Math.max(...data.map(r => r.value))

  // Per-instance stretch amount (morph influence). The static view compares data
  // categories, so each instance is always deformed by its own (normalised) value;
  // an explicit `value` binding just lets the user remap the output range. This
  // drives both the mesh shape and the stress tint / distortion amplitude.
  const ts = useMemo(() => data.map(row => {
    const norm = (row.value - dataMin) / Math.max(dataMax - dataMin, 0.001)
    return Math.max(0, Math.min(1, range.outMin + norm * (range.outMax - range.outMin)))
  }), [data, range, dataMin, dataMax])

  const active = fxAnyOn(fx)
  const clones = useMemo(() => data.map((_row, i) => {
    const clone = gltf.scene.clone(true)
    const t = ts[i]
    clone.traverse(n => {
      const m = n as THREE.Mesh
      if (m.isMesh && m.morphTargetInfluences?.length) m.morphTargetInfluences[0] = t
    })
    if (active) prepareFx(clone)
    return clone
  }), [gltf, data, ts, active])

  // Animate each instance's effects (intensity ∝ its own stretch amount).
  useFrame(({ clock }) => {
    if (!fxAnyOn(fx)) return
    const el = clock.getElapsedTime()
    clones.forEach((clone, i) => applyFx(clone, fx, ts[i], el))
  })

  // Per-clone bounding boxes — used for spacing and label Y position.
  // `precise` (2nd arg) walks actual vertices via getVertexPosition, which applies
  // the morph influence, so a stretched (X-squished) instance reports its true
  // narrower width — essential for even edge-to-edge spacing below.
  const boxes = useMemo(
    () => clones.map(c => new THREE.Box3().setFromObject(c, true)),
    [clones]
  )

  // Lay the objects out left→right using each one's ACTUAL width, so the gap
  // between neighbours is constant even though stretched objects are narrower.
  // Result is centred around x=0.
  const positions = useMemo(() => {
    const widths = boxes.map(b => b.max.x - b.min.x)
    const avgW   = widths.reduce((a, c) => a + c, 0) / Math.max(widths.length, 1)
    const gap    = avgW * 0.12
    const xs: number[] = []
    let cursor = 0                       // world-x where the next object's left edge goes
    boxes.forEach(b => {
      xs.push(cursor - b.min.x)          // group x so this object's left edge sits at cursor
      cursor += (b.max.x - b.min.x) + gap
    })
    const span = cursor - gap            // world-x of the last object's right edge (left edge started at 0)
    return xs.map(x => x - span / 2)     // centre the whole row on x=0
  }, [boxes])

  return (
    <Bounds fit clip observe margin={1.2}>
      <FitCamera />
      {clones.map((clone, i) => {
        const box = boxes[i]
        const cx  = (box.min.x + box.max.x) / 2   // visual centre X of this clone
        const ly  = box.min.y - 0.12
        return (
          <group key={i} position={[positions[i], 0, 0]}>
            <primitive object={clone} />
            <Html center position={[cx, ly, 0]}
              style={{ pointerEvents: 'none', textAlign: 'center' }}>
              <div style={{
                fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap',
                background: 'rgba(0,0,0,0.52)', padding: '2px 8px', borderRadius: 4,
              }}>
                <div style={{ fontSize: 11, color: '#e0e0f0', fontWeight: 600, letterSpacing: 0.4 }}>{data[i].category}</div>
                <div style={{ fontSize: 11, color: '#a090e8', fontVariantNumeric: 'tabular-nums' }}>{data[i].value}</div>
              </div>
            </Html>
          </group>
        )
      })}
    </Bounds>
  )
}

// ── Slice view ────────────────────────────────────────────────────────────────
// The baked GLB contains N mesh objects already positioned by Blender.
// In static mode we sort them along the cut axis and overlay data labels.

function SliceView({ url, data, axis, showLabels }: {
  url: string; data: DataRow[]; axis: Axis; showLabels: boolean
}) {
  const gltf  = useLoader(GLTFLoader, url)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf])

  // Resolve which Three.js component corresponds to the cut axis.
  // UI Y → Blender Z → Three.js Y (GLTF Y-up); X and Z map directly.
  const axisComp: 'x' | 'y' | 'z' = axis === 'X' ? 'x' : axis === 'Z' ? 'z' : 'y'
  const axisVal = (v: THREE.Vector3) => axisComp === 'x' ? v.x : axisComp === 'y' ? v.y : v.z

  // One entry per segment object exported by Blender.
  // Filter out non-geometry nodes (cameras, lights) that some GLB exporters include.
  // Sort ascending along the cut axis so index 0 = lowest boundary = data[0].
  const segments = useMemo(() => {
    // If Blender wrapped everything in one root group, descend one level.
    let candidates = [...scene.children]
    if (candidates.length === 1 && candidates[0].children.length > 1)
      candidates = [...candidates[0].children]

    return candidates
      .map(obj => {
        const box    = new THREE.Box3().setFromObject(obj)
        const center = box.getCenter(new THREE.Vector3())
        return { obj, center, box }
      })
      .filter(s => !s.box.isEmpty())          // drop cameras / lights
      // Blender Y → Three.js −Z, so Z-axis cuts are inverted; flip sort for Z only.
      .sort((a, b) => {
        const d = axisVal(a.center) - axisVal(b.center)
        return axis === 'Z' ? -d : d
      })
  }, [scene, axisComp]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Bounds fit clip observe margin={1.4}>
      <FitCamera />
      <primitive object={scene} />
      {showLabels && segments.map((seg, i) => {
        const row = data[i]
        if (!row) return null
        // Y/Z cuts: segments stacked along the cut axis → label to the right of each piece.
        // X cuts: segments arranged left-to-right → label centred below each piece.
        const lx = axis === 'X' ? seg.center.x           : seg.box.max.x + 0.12
        const ly = axis === 'X' ? seg.box.min.y - 0.14   : seg.center.y
        const lz = seg.center.z
        return (
          <Html key={i} center
            position={[lx, ly, lz]}
            style={{ pointerEvents: 'none', textAlign: axis === 'X' ? 'center' : 'left' }}
          >
            <div style={{
              fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap',
              background: 'rgba(0,0,0,0.52)', padding: '2px 8px', borderRadius: 4,
            }}>
              <div style={{ fontSize: 11, color: '#e0e0f0', fontWeight: 600, letterSpacing: 0.4 }}>{row.category}</div>
              <div style={{ fontSize: 11, color: '#a090e8', fontVariantNumeric: 'tabular-nums' }}>{row.percentage}%</div>
            </div>
          </Html>
        )
      })}
    </Bounds>
  )
}

// ── Dynamic slice view ────────────────────────────────────────────────────────
// Segments start collapsed (all at origin) then animate to their exploded
// positions. Labels fade in once the pieces are fully spread apart, then the
// whole cycle repeats automatically.
//
// The baked GLB stores each segment with obj.position = pure gap-offset vector
// (geometry lives at world origin). Animating from (0,0,0) → obj.position gives
// the collapse-to-explode effect without any extra computation.

function DynamicSliceView({ url, data, axis }: {
  url: string; data: DataRow[]; axis: Axis
}) {
  const gltf  = useLoader(GLTFLoader, url)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf])

  const axisComp: 'x' | 'y' | 'z' = axis === 'X' ? 'x' : axis === 'Y' ? 'y' : 'z'
  const axisVal = (v: THREE.Vector3) => axisComp === 'x' ? v.x : axisComp === 'y' ? v.y : v.z

  const segments = useMemo(() => {
    let candidates = [...scene.children]
    if (candidates.length === 1 && candidates[0].children.length > 1)
      candidates = [...candidates[0].children]
    return candidates
      .map(obj => {
        const box    = new THREE.Box3().setFromObject(obj)
        const center = box.getCenter(new THREE.Vector3())
        return { obj, center, box }
      })
      .filter(s => !s.box.isEmpty())
      .sort((a, b) => {
        const d = axisVal(a.center) - axisVal(b.center)
        return axis === 'Z' ? -d : d
      })
  }, [scene, axisComp]) // eslint-disable-line react-hooks/exhaustive-deps

  // Exploded positions as loaded from the GLB (= the gap-offset vectors).
  const explodedPos = useMemo(
    () => segments.map(s => s.obj.position.clone()),
    [segments]
  )

  // ── Verify SLICE_GAP matches runtime positions ────────────────────────────
  // (If the user changes GAP in slice.py they'd re-bake; this is only for safety.)
  void SLICE_GAP

  const [labelsOn, setLabelsOn] = useState(false)
  const labelsRef = useRef(false)

  useFrame(({ clock }) => {
    const t    = clock.getElapsedTime() % ANIM_CYCLE
    const raw  = t <= ANIM_PAUSE              ? 0
               : t <= ANIM_PAUSE + ANIM_EXPLODE ? (t - ANIM_PAUSE) / ANIM_EXPLODE
               : 1
    const eased = 1 - Math.pow(1 - raw, 3)   // ease-out cubic
    const hold  = t >= ANIM_PAUSE + ANIM_EXPLODE

    if (hold !== labelsRef.current) {
      labelsRef.current = hold
      setLabelsOn(hold)
    }

    // Lerp each segment from origin (collapsed) to its exploded position.
    segments.forEach((seg, i) => {
      const e = explodedPos[i]
      seg.obj.position.set(e.x * eased, e.y * eased, e.z * eased)
    })
  })

  return (
    <Bounds fit margin={1.4}>
      <FitCamera />
      <primitive object={scene} />
      {segments.map((seg, i) => {
        const row = data[i]
        if (!row) return null
        const lx = axis === 'X' ? seg.center.x         : seg.box.max.x + 0.12
        const ly = axis === 'X' ? seg.box.min.y - 0.14 : seg.center.y
        return (
          <Html key={i} center
            position={[lx, ly, seg.center.z]}
            style={{ pointerEvents: 'none', textAlign: axis === 'X' ? 'center' : 'left' }}
          >
            <div style={{
              fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap',
              background: 'rgba(0,0,0,0.52)', padding: '2px 8px', borderRadius: 4,
              opacity: labelsOn ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}>
              <div style={{ fontSize: 11, color: '#e0e0f0', fontWeight: 600, letterSpacing: 0.4 }}>{row.category}</div>
              <div style={{ fontSize: 11, color: '#a090e8', fontVariantNumeric: 'tabular-nums' }}>{row.percentage}%</div>
            </div>
          </Html>
        )
      })}
    </Bounds>
  )
}

// ── Dynamic deform view (TWIST / STRETCH) ────────────────────────────────────
// Cycles through each data category, morphing the object to that category's
// deformation level, holding with a label, then transitioning to the next.

const DYNA_HOLD  = 1.2   // seconds to hold each category (label visible)
const DYNA_TRANS = 0.7   // seconds to animate between categories
const DYNA_SLOT  = DYNA_HOLD + DYNA_TRANS

function DynamicDeformView({ url, data, fx }: { url: string; data: DataRow[]; fx?: StressFx | null }) {
  const gltf   = useLoader(GLTFLoader, url)
  const active = fxAnyOn(fx)
  const scene = useMemo(() => {
    const s = gltf.scene.clone(true)
    if (active) prepareFx(s)
    return s
  }, [gltf, active])

  const meshes = useMemo(() => {
    const r: THREE.Mesh[] = []
    scene.traverse(n => { const m = n as THREE.Mesh; if (m.isMesh && m.morphTargetInfluences?.length) r.push(m) })
    return r
  }, [scene])

  const dataMin = Math.min(...data.map(r => r.value))
  const dataMax = Math.max(...data.map(r => r.value))
  const tValues = useMemo(() =>
    data.map(row => (row.value - dataMin) / Math.max(dataMax - dataMin, 0.001)),
  [data, dataMin, dataMax])

  const N = data.length

  const [activeIdx, setActiveIdx] = useState(0)
  const [showLabel, setShowLabel] = useState(true)
  const activeIdxRef = useRef(0)
  const showLabelRef = useRef(true)
  const startRef     = useRef<number | null>(null)

  // Center of the Basis (undeformed) bounding box
  const labelCenter = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const c = new THREE.Vector3()
    box.getCenter(c)
    return c
  }, [scene])

  useFrame(({ clock }) => {
    if (startRef.current === null) startRef.current = clock.getElapsedTime()
    // Offset so that we start inside slot 0's hold phase (skip the initial transition)
    const t      = clock.getElapsedTime() - startRef.current + DYNA_TRANS
    const slotRaw = Math.floor(t / DYNA_SLOT)
    const slotIdx = slotRaw % N
    const phase   = t % DYNA_SLOT
    const inHold  = phase >= DYNA_TRANS

    if (slotIdx !== activeIdxRef.current) { activeIdxRef.current = slotIdx; setActiveIdx(slotIdx) }
    if (inHold  !== showLabelRef.current) { showLabelRef.current = inHold;  setShowLabel(inHold)  }

    let morphVal: number
    if (inHold) {
      morphVal = tValues[slotIdx]
    } else {
      const prevIdx = (slotIdx - 1 + N) % N
      const eased   = 1 - Math.pow(1 - phase / DYNA_TRANS, 3)
      morphVal = tValues[prevIdx] + (tValues[slotIdx] - tValues[prevIdx]) * eased
    }

    meshes.forEach(m => { if (m.morphTargetInfluences) m.morphTargetInfluences[0] = morphVal })
    if (fxAnyOn(fx)) applyFx(scene, fx, morphVal, clock.getElapsedTime())
  })

  const row = data[activeIdx] ?? data[0]

  return (
    <Bounds fit margin={1.6}>
      <FitCamera />
      <primitive object={scene} />
      <Html center position={[labelCenter.x, labelCenter.y, labelCenter.z]} style={{ pointerEvents: 'none' }}>
        <div style={{
          fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap', textAlign: 'center',
          background: 'rgba(0,0,0,0.52)', padding: '4px 14px', borderRadius: 4,
          opacity: showLabel ? 1 : 0, transition: 'opacity 0.35s ease',
        }}>
          <div style={{ fontSize: 13, color: '#e0e0f0', fontWeight: 600, letterSpacing: 0.4 }}>{row.category}</div>
          <div style={{ fontSize: 12, color: '#a090e8', fontVariantNumeric: 'tabular-nums' }}>{row.value}</div>
        </div>
      </Html>
    </Bounds>
  )
}

// ── Per-view canvas ───────────────────────────────────────────────────────────

function ViewCanvas({ viewType, resultUrl, animSpeed, data, bindingRange, deformMode, axis, fx, playData }: {
  viewType: ViewType; resultUrl: string | null; animSpeed: number
  data: DataRow[]; bindingRange: BindingRange; deformMode: DeformMode; axis: Axis
  fx?: StressFx | null; playData?: boolean
}) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Canvas camera={{ fov: 35 }} gl={{ antialias: true }} style={{ background: '#000000' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.4} />
        <Environment preset="city" />
        <OrbitControls makeDefault />
        {resultUrl && (
          <Suspense fallback={null}>
            {deformMode === 'SLICE'
              ? viewType === 'dynamic'
                ? <DynamicSliceView key={resultUrl} url={resultUrl!} data={data} axis={axis} />
                : <SliceView key={resultUrl} url={resultUrl!} data={data} axis={axis} showLabels={viewType === 'static'} />
              : viewType === 'static'
                ? <StaticView key={resultUrl} url={resultUrl!} data={data} range={bindingRange} fx={fx} />
                : viewType === 'dynamic'
                  ? <DynamicDeformView key={resultUrl} url={resultUrl!} data={data} fx={fx} />
                  : <EffectView key={resultUrl} url={resultUrl!} speed={animSpeed} fx={fx} data={data} playData={playData} />}
          </Suspense>
        )}
      </Canvas>
      {!resultUrl && viewType !== 'dynamic' && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5a5a60', fontSize: 13, pointerEvents: 'none' }}>
          Bake a shape to begin
        </div>
      )}
    </div>
  )
}

// ── Small UI helpers ──────────────────────────────────────────────────────────

function ModeBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} style={{
      flex: 1, padding: '7px 0', fontSize: 10, borderRadius: 6, cursor: 'pointer',
      background: active ? 'var(--lab-accent-soft)' : 'var(--lab-fill)',
      color:      active ? 'var(--lab-accent)' : 'var(--lab-text-2)',
      border:     active ? '1px solid var(--lab-accent)' : '1px solid var(--lab-border)',
      fontWeight: active ? 600 : 400,
      transition: 'background 0.1s, color 0.1s, border-color 0.1s',
    }}>{children}</button>
  )
}

// Effect on/off row with an optional trailing control (e.g. the tint colour).
function FxToggle({ label, on, onToggle, children }: {
  label: string; on: boolean; onToggle: () => void; children?: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
      <span style={{ fontSize: 11, color: on ? 'var(--lab-text)' : 'var(--lab-text-3)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {children}
        <button onClick={onToggle} title={on ? 'On' : 'Off'} style={{
          width: 34, height: 18, borderRadius: 10, padding: 0, cursor: 'pointer',
          border: `1px solid ${on ? 'var(--lab-accent)' : 'var(--lab-border)'}`,
          background: on ? 'var(--lab-accent)' : 'var(--lab-divider)', position: 'relative',
          transition: 'background 0.12s, border-color 0.12s',
        }}>
          <span style={{
            position: 'absolute', top: 1, left: on ? 17 : 1, width: 14, height: 14,
            borderRadius: '50%', background: 'var(--lab-surface)', transition: 'left 0.15s',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
          }} />
        </button>
      </div>
    </div>
  )
}

// Side panel showing a preset's reference (dataset title, image, source link).
function ReferencePanel({ reference, onClose }: { reference: PresetReference; onClose: () => void }) {
  return (
    <div style={{
      position: 'absolute', right: 12, bottom: 12, width: 300, maxHeight: '52%', zIndex: 20,
      background: 'rgba(255,255,255,0.97)', border: '1px solid var(--lab-border)', borderRadius: 12,
      boxShadow: '0 12px 40px rgba(0,0,0,0.22)', backdropFilter: 'blur(6px)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, padding: '14px 14px 10px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--lab-text)', lineHeight: 1.3 }}>{reference.title}</div>
        <button onClick={onClose} title="Hide reference"
          style={{ background: 'none', border: 'none', color: 'var(--lab-text-3)', cursor: 'pointer', fontSize: 16, lineHeight: 1, flexShrink: 0 }}>✕</button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {reference.image && (
          <img src={refImageSrc(reference.image)} alt={reference.title}
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            style={{ width: '100%', borderRadius: 8, display: 'block', background: 'var(--lab-fill)' }} />
        )}
        {reference.link && (
          <a href={reference.link} target="_blank" rel="noreferrer"
            style={{ fontSize: 11, color: 'var(--lab-accent)', textDecoration: 'none', wordBreak: 'break-all', lineHeight: 1.5 }}>
            {reference.link} ↗
          </a>
        )}
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function DeformLab({ embedded, initialPresetId, presetHandleRef, presetSlot }: {
  embedded?: boolean
  initialPresetId?: string
  presetHandleRef?: { current: LabPresetHandle | null }
  presetSlot?: React.ReactNode
} = {}) {
  const [status,    setStatus]    = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message,   setMessage]   = useState('')
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [fileName,  setFileName]  = useState('')

  const [deformMode, setDeformMode] = useState<DeformMode>('STRETCH')
  const [factor,     setFactor]     = useState(1.0)
  const [axis,       setAxis]       = useState<Axis>('Y')
  const [limitMin,   setLimitMin]   = useState(0)
  const [limitMax,   setLimitMax]   = useState(1)
  const [animSpeed,  setAnimSpeed]  = useState(0.8)
  const [subdivs,    setSubdivs]    = useState(0)

  const [data,          setData]        = useState<DataRow[]>(DEFAULT_DATA)
  const [bindings,     setBindings]     = useState<BindingMap>({})
  const [bindingRange, setBindingRange] = useState<BindingRange>({ outMin: 0, outMax: 1 })

  const [cutColor,         setCutColor]         = useState('#cc2222')
  const [cutFaceMode,      setCutFaceMode]      = useState<'color' | 'texture'>('color')
  const [cutTextures,      setCutTextures]      = useState<string[]>([])
  const [cutTextureName,   setCutTextureName]   = useState('')
  const [cutTextureTiling, setCutTextureTiling] = useState(1)

  useEffect(() => {
    serverFetch(`${SERVER}/textures`).then(r => r.json()).then((files: string[]) => {
      setCutTextures(files)
      setCutTextureName(prev => prev || files[0] || '')
    }).catch(() => {})
  }, [])

  const [presets,        setPresets]        = useState<SceneSave[]>(() => loadDeformPresets())
  const [selPresetId,    setSelPresetId]    = useState('')
  const [saveName,       setSaveName]       = useState<string | null>(null)  // null = hidden, string = editing
  const [lastShape,      setLastShape]      = useState<Shape | null>(null)
  const [pendingAutoRun, setPendingAutoRun] = useState<Shape | null>(null)
  const [fx,             setFx]             = useState<StressFx>(FX_OFF)  // deformation stress effects
  const [reference,      setReference]      = useState<PresetReference | null>(null)  // optional preset reference
  const [showReference,  setShowReference]  = useState(false)
  const [effectData,     setEffectData]     = useState(false)  // effect view steps through data labels (preset-only)

  const [draggingField,   setDraggingField]   = useState<DataField | null>(null)
  const [dragOverProp,    setDragOverProp]    = useState<string | null>(null)
  const [showAdvanced,    setShowAdvanced]    = useState(false)

  const [view1, setView1] = useState<ViewType>('effect')
  // const [view2, setView2] = useState<ViewType | null>(null)

  const fileRef   = useRef<File | null>(null)
  const info      = MODE_INFO[deformMode]
  const isAngle   = deformMode === 'TWIST'
  const isSlice   = deformMode === 'SLICE'
  const isLoading = status === 'loading'
  const dataMin   = Math.min(...data.map(r => r.value))
  const dataMax   = Math.max(...data.map(r => r.value))


  const handleModeChange = useCallback((mode: DeformMode) => {
    setDeformMode(mode)
    setFactor(mode === 'TWIST' ? 180 : mode === 'SLICE' ? 50 : 1.0)
    // Auto-bind percentage when entering SLICE so baking uses proportional cuts by default.
    setBindings(mode === 'SLICE' ? { factor: 'percentage' } : {})
    setBindingRange({ outMin: 0, outMax: 1 })
  }, [])

  const savePreset = useCallback((name: string) => {
    const save: SceneSave = {
      id: Date.now().toString(), name,
      createdAt: new Date().toISOString(),
      // Store the shape identifier so loading can re-run automatically.
      // No blob data — the shape is always re-generatable.
      data: { shape: lastShape, fileName, deformMode, factor, axis, limitMin, limitMax, animSpeed, subdivs, bindings, bindingRange, cutColor, fx, dataRows: data, reference, effectData },
    }
    const next = [save, ...presets]
    setPresets(next); persistDeformPresets(next)
    setSelPresetId(save.id); setSaveName(null)
    return save
  }, [lastShape, fileName, deformMode, factor, axis, limitMin, limitMax, animSpeed, subdivs, bindings, bindingRange, cutColor, fx, data, reference, effectData, presets])

  const loadPreset = useCallback((id: string) => {
    const save = presets.find(p => p.id === id)
    if (!save) return
    const d = save.data as Record<string, unknown>
    // Legacy "Stretch - earth" preset (saved before fx / dataset / reference existed)
    // gets seeded with the earth defaults; newer presets restore their saved values.
    const isEarth = save.name.trim().toLowerCase() === STRESS_PRESET_NAME
    const savedFx = d.fx as StressFx | undefined
    setFx(savedFx ?? (isEarth ? FX_EARTH : FX_OFF))
    const savedRows = d.dataRows as DataRow[] | undefined
    if (savedRows)     setData(savedRows)
    else if (isEarth)  setData(EARTH_DATA)
    const savedRef = d.reference as PresetReference | undefined
    const ref = savedRef ?? (isEarth ? EARTH_REFERENCE : null)
    setReference(ref)
    setShowReference(!!ref)   // open by default when the preset has a reference
    setEffectData((d.effectData as boolean | undefined) ?? isEarth)
    if (d.deformMode)        setDeformMode(d.deformMode as DeformMode)
    if (d.factor != null)    setFactor(d.factor as number)
    if (d.axis)              setAxis(d.axis as Axis)
    if (d.limitMin != null)  setLimitMin(d.limitMin as number)
    if (d.limitMax != null)  setLimitMax(d.limitMax as number)
    if (d.animSpeed != null) setAnimSpeed(d.animSpeed as number)
    if (d.subdivs != null)   setSubdivs(d.subdivs as number)
    if (d.bindings)          setBindings(d.bindings as BindingMap)
    if (d.bindingRange)      setBindingRange(d.bindingRange as BindingRange)
    if (d.cutColor)          setCutColor(d.cutColor as string)
    // Clear old result, then re-run automatically.
    setResultUrl(prev => { if (prev) URL.revokeObjectURL(prev); return null })
    const shape     = d.shape    as Shape  | null
    const savedFile = d.fileName as string | null | undefined
    if (shape === 'sphere' || shape === 'cube') {
      setPendingAutoRun(shape)
    } else if (savedFile) {
      // Try to fetch any saved filename from the server's /models static route.
      // Falls back to "re-upload" only if the server returns a non-OK response.
      setStatus('loading'); setMessage(`Loading ${savedFile}…`)
      serverFetch(`${SERVER}/models/${encodeURIComponent(savedFile)}`)
        .then(r => { if (!r.ok) throw new Error('not found'); return r.blob() })
        .then(blob => {
          const file = new File([blob], savedFile, { type: 'model/gltf-binary' })
          fileRef.current = file
          setFileName(savedFile)
          setStatus('idle'); setMessage('')
          setPendingAutoRun('model')
        })
        .catch(() => { setStatus('idle'); setMessage(`Re-upload ${savedFile} to run`) })
    } else {
      setStatus('idle'); setMessage('')
    }
  }, [presets])

  const deletePreset = useCallback((id: string) => {
    const next = presets.filter(p => p.id !== id)
    setPresets(next); persistDeformPresets(next)
    if (selPresetId === id) setSelPresetId('')
  }, [presets, selPresetId])

  // Hub-driven preset load: when the global dropdown picks one of this lab's presets.
  useEffect(() => {
    if (initialPresetId) loadPreset(initialPresetId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPresetId])

  // Expose save/delete to the hub's global preset row while this lab is active.
  useEffect(() => {
    if (!presetHandleRef) return
    presetHandleRef.current = { save: savePreset as (n: string) => SceneSave, remove: deletePreset }
    return () => { if (presetHandleRef.current?.save === savePreset) presetHandleRef.current = null }
  }, [presetHandleRef, savePreset, deletePreset])

  const handleFile = useCallback((file: File) => {
    if (!file.name.endsWith('.glb') && !file.name.endsWith('.gltf')) return
    fileRef.current = file
    setFileName(file.name)
    setResultUrl(null); setStatus('idle'); setMessage('')
  }, [])

  const run = useCallback(async (shape: Shape) => {
    if (shape === 'model' && !fileRef.current) { setMessage('Drop a GLB first'); return }
    setStatus('loading'); setMessage('Blender is running…')
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setResultUrl(null)
    try {
      let res: Response
      if (isSlice) {
        // Build N+1 boundary values; Blender isolates each segment [b[i], b[i+1]]
        let cutBoundaries: number[]
        // Effect view always uses equal segments regardless of binding.
        const applyBinding = view1 !== 'effect'
        if (applyBinding && bindings.factor === 'percentage') {
          // Cumulative sum of percentages → each segment width ∝ percentage value.
          // e.g. [35,25,20,15,5] → [0, 0.35, 0.60, 0.80, 0.95, 1.0]
          let cum = 0
          const bds = [0]
          for (const row of data) { cum += row.percentage; bds.push(cum / 100) }
          cutBoundaries = bds
        } else if (applyBinding && bindings.factor === 'value') {
          // Each value mapped to a cumulative boundary via outMin/outMax range.
          const perRow = data.map(row => {
            const norm = (row.value - dataMin) / Math.max(dataMax - dataMin, 0.001)
            return Math.max(0.005, Math.min(0.995, bindingRange.outMin + norm * (bindingRange.outMax - bindingRange.outMin)))
          })
          cutBoundaries = [0, ...perRow]
        } else {
          // Equal segments: [0, 1/n, 2/n, ..., 1]
          const n = data.length
          cutBoundaries = Array.from({ length: n + 1 }, (_, k) => k / n)
        }
        const fd = new FormData()
        fd.append('shape', shape === 'model' ? 'model' : shape)
        if (shape === 'model') fd.append('model', fileRef.current!)
        fd.append('cutPositions', JSON.stringify(cutBoundaries))
        fd.append('axis', axis)
        fd.append('cutColor', cutColor)
        fd.append('cutTextureName', cutFaceMode === 'texture' ? cutTextureName : '')
        fd.append('cutTextureTiling', cutTextureTiling.toString())
        res = await serverFetch(`${SERVER}/slice`, { method: 'POST', body: fd })
      } else {
        const bf = isAngle ? (factor * Math.PI) / 180 : factor
        const qs = `deformMode=${deformMode}&factor=${bf}&axis=${axis}&limitMin=${limitMin}&limitMax=${limitMax}&subdivs=${subdivs}`
        if (shape === 'sphere')    res = await serverFetch(`${SERVER}/deform/sphere?${qs}`)
        else if (shape === 'cube') res = await serverFetch(`${SERVER}/deform/cube?${qs}`)
        else {
          const fd = new FormData()
          fd.append('model', fileRef.current!)
          fd.append('deformMode', deformMode); fd.append('factor', bf.toString())
          fd.append('axis', axis); fd.append('limitMin', limitMin.toString())
          fd.append('limitMax', limitMax.toString()); fd.append('subdivs', subdivs.toString())
          res = await serverFetch(`${SERVER}/deform`, { method: 'POST', body: fd })
        }
      }
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }))
        throw new Error(err.error ?? res.statusText)
      }
      setResultUrl(URL.createObjectURL(await res.blob()))
      setStatus('done'); setMessage(''); setLastShape(shape)
    } catch (e: unknown) {
      setStatus('error'); setMessage(e instanceof Error ? e.message : 'Unknown error')
    }
  }, [isSlice, deformMode, factor, isAngle, axis, limitMin, limitMax, subdivs, resultUrl,
      bindings, bindingRange, data, dataMin, dataMax, cutColor, cutFaceMode, cutTextureName, cutTextureTiling, view1])

  useEffect(() => () => { if (resultUrl) URL.revokeObjectURL(resultUrl) }, [resultUrl])

  // Always keep a ref to the latest `run` so the auto-run effect can call it
  // after state has already been updated by loadPreset (avoids stale closure).
  const runLatestRef = useRef(run)
  useEffect(() => { runLatestRef.current = run })  // after every render

  useEffect(() => {
    if (!pendingAutoRun) return
    setPendingAutoRun(null)
    runLatestRef.current(pendingAutoRun)
  }, [pendingAutoRun])

  const handleDrop = (e: React.DragEvent, prop: 'factor') => {
    e.preventDefault(); setDragOverProp(null)
    const field = e.dataTransfer.getData('dataField') as DataField
    if (!field) return
    setBindings(prev => ({ ...prev, [prop]: field }))
    // For SLICE + value binding: initialise outMin to dataMin/dataMax so values
    // map directly as percentages (e.g. value=3 → 3% of the object's extent).
    const initMin = isSlice && field === 'value' ? dataMin / Math.max(dataMax, 1) : 0
    setBindingRange({ outMin: initMin, outMax: 1 })
  }

  const removeBinding = (prop: keyof BindingMap) => {
    setBindings(prev => { const n = { ...prev }; delete n[prop]; return n })
    setBindingRange({ outMin: 0, outMax: 1 })
  }

  const sl: React.CSSProperties = { width: '100%', accentColor: 'var(--lab-accent)' }
  const factorDropping  = dragOverProp === 'factor'
  const factorHighlight = draggingField !== null

  return (
    <div style={{ display: 'flex', height: embedded ? '100%' : '100vh', fontFamily: 'system-ui, sans-serif', background: 'var(--lab-fill)', color: 'var(--lab-text)', position: 'relative' }}>



      {/* ── Left panel ── */}
      <div style={{ width: 268, flexShrink: 0, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--lab-border)', background: 'var(--lab-surface)', position: 'relative' }}>

        <LabAdvancedToggle open={showAdvanced} onToggle={() => setShowAdvanced(v => !v)} />

        <div style={{ flex: 1, padding: embedded ? '52px 16px 18px' : '18px 16px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>

          {!embedded && <LabNavTitle name="Deform Lab" href="/deform" />}

          {/* Embedded in the hub, the global preset dropdown replaces this row. */}
          {!embedded && (
            <LabPresetRow
              presets={presets} selPresetId={selPresetId} saveName={saveName}
              defaultSaveName={`${MODE_INFO[deformMode].label} ${new Date().toLocaleDateString()}`}
              onSelect={loadPreset} onSave={savePreset} onDelete={() => deletePreset(selPresetId)}
              setSaveName={setSaveName} setSelPresetId={setSelPresetId}
            />
          )}

          {/* Effect */}
          <Sec>
            <SLabel>Effect</SLabel>
            <div style={{ display: 'flex', gap: 6 }}>
              {(['STRETCH','TWIST','SLICE'] as DeformMode[]).map(m => (
                <ModeBtn key={m} active={deformMode===m} onClick={() => handleModeChange(m)}>{MODE_INFO[m].label}</ModeBtn>
              ))}
            </div>
            <div style={{ fontSize: 10, color: 'var(--lab-text-3)', lineHeight: 1.5 }}>{info.hint}</div>

            {/* Factor — drop target */}
            <div
              onDragOver={e => { e.preventDefault(); setDragOverProp('factor') }}
              onDragLeave={() => setDragOverProp(null)}
              onDrop={e => handleDrop(e, 'factor')}
              style={{
                borderRadius: 8, padding: '10px',
                border: factorDropping
                  ? '1px solid var(--lab-accent)'
                  : factorHighlight ? '1px dashed var(--lab-accent-border)' : '1px solid var(--lab-divider)',
                background: factorDropping
                  ? 'var(--lab-accent-soft)'
                  : factorHighlight ? 'var(--lab-accent-soft)' : 'var(--lab-fill)',
                transition: 'border-color 0.12s, background 0.12s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <RowLabel>
                  {isSlice ? info.factorLabel : `${info.factorLabel}: ${isAngle ? Math.round(factor) + '°' : factor.toFixed(2)}`}
                </RowLabel>
                {bindings.factor ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px 2px 10px', borderRadius: 12, fontSize: 10, background: 'var(--lab-accent-soft)', border: '1px solid var(--lab-accent-border)', color: 'var(--lab-accent)' }}>
                    ⬡ {bindings.factor}
                    <button onClick={() => removeBinding('factor')} style={{ background: 'none', border: 'none', color: 'var(--lab-text-3)', cursor: 'pointer', padding: '0 0 0 2px', fontSize: 12, lineHeight: 1 }}>×</button>
                  </span>
                ) : factorHighlight ? (
                  <span style={{ fontSize: 9, color: 'var(--lab-text-4)', letterSpacing: 0.5 }}>drop here</span>
                ) : null}
              </div>
              {!isSlice && (
                <input type="range" min={info.factorMin} max={info.factorMax} step={info.factorStep}
                  value={factor} onChange={e => setFactor(Number(e.target.value))}
                  disabled={!!bindings.factor}
                  style={{ ...sl, opacity: bindings.factor ? 0.28 : 1 }} />
              )}

              {/* Mapping range fields hidden for now
              {bindings.factor && bindings.factor !== 'percentage' && (
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontSize: 9, color: 'var(--lab-text-3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>Mapping</div>
                  {(['outMin','outMax'] as const).map((key, ki) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#6a6a7a', width: 28, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontSize: 10 }}>{ki === 0 ? dataMin : dataMax}</span>
                      <span style={{ color: '#303042', fontSize: 12 }}>→</span>
                      <input type="number" step={0.01} min={0} max={1}
                        value={bindingRange[key]}
                        onChange={e => setBindingRange(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                        style={numInp} />
                      <span style={{ fontSize: 10, color: '#3c3c50' }}>{ki === 0 ? 'min' : 'max'}</span>
                    </div>
                  ))}
                </div>
              )}
              */}
              {bindings.factor === 'percentage' && (
                <div style={{ marginTop: 8, fontSize: 9, color: '#505068', lineHeight: 1.6 }}>
                  Slice widths proportional to percentage values
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RowLabel>Axis</RowLabel>
              <div style={{ display: 'flex', gap: 6 }}>
                {(['X','Y','Z'] as Axis[]).map(a => (
                  <ModeBtn key={a} active={axis===a} onClick={() => setAxis(a)}>{a}</ModeBtn>
                ))}
              </div>
            </div>

            {/* Cut-face material — SLICE only */}
            {isSlice && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <SLabel>Cut face</SLabel>
                {/* Mode toggle */}
                <div style={{ display: 'flex', background: 'var(--lab-fill)', borderRadius: 6, padding: 2, gap: 2 }}>
                  {(['color', 'texture'] as const).map(m => (
                    <button key={m} onClick={() => setCutFaceMode(m)} style={{
                      flex: 1, padding: '4px 0', borderRadius: 4, border: 'none', cursor: 'pointer',
                      background: cutFaceMode === m ? 'var(--lab-surface)' : 'transparent',
                      color: cutFaceMode === m ? 'var(--lab-text)' : 'var(--lab-text-3)',
                      fontSize: 10, fontFamily: 'inherit', textTransform: 'capitalize',
                    }}>{m}</button>
                  ))}
                </div>
                {cutFaceMode === 'color' ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="color" value={cutColor} onChange={e => setCutColor(e.target.value)}
                      style={{ width: 34, height: 28, padding: 2, background: 'none', border: '1px solid var(--lab-border)', borderRadius: 5, cursor: 'pointer' }} />
                    <span style={{ fontSize: 11, color: 'var(--lab-text-2)' }}>{cutColor}</span>
                  </div>
                ) : (
                  <>
                    <select value={cutTextureName} onChange={e => setCutTextureName(e.target.value)}
                      style={{ width: '100%', background: 'var(--lab-surface)', border: '1px solid var(--lab-border)', borderRadius: 6, color: 'var(--lab-text)', fontSize: 10, padding: '5px 7px', outline: 'none', fontFamily: 'inherit' }}>
                      {cutTextures.map(t => <option key={t} value={t}>{texLabel(t)}</option>)}
                    </select>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <RowLabel>Tiling: {cutTextureTiling.toFixed(1)}×</RowLabel>
                      <input type="range" min={0.5} max={10} step={0.5} value={cutTextureTiling}
                        onChange={e => setCutTextureTiling(Number(e.target.value))} style={sl} />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Limit + anim speed — not applicable for SLICE */}
            {!isSlice && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <RowLabel>Limit: {Math.round(limitMin*100)}% → {Math.round(limitMax*100)}%</RowLabel>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: '#555566' }}>From</span>
                    <input type="range" min={0} max={0.99} step={0.01} value={limitMin}
                      onChange={e => setLimitMin(Math.min(Number(e.target.value), limitMax - 0.01))}
                      style={{ ...sl, flex: 1 }} />
                    <span style={{ fontSize: 10, color: '#555566' }}>To</span>
                    <input type="range" min={0.01} max={1} step={0.01} value={limitMax}
                      onChange={e => setLimitMax(Math.max(Number(e.target.value), limitMin + 0.01))}
                      style={{ ...sl, flex: 1 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <RowLabel>Anim speed: {animSpeed.toFixed(1)}×</RowLabel>
                  <input type="range" min={0.1} max={3} step={0.1} value={animSpeed}
                    onChange={e => setAnimSpeed(Number(e.target.value))} style={sl} />
                </div>
              </>
            )}
          </Sec>

          <LabModelSection
            fileName={fileName} onFile={handleFile} onRun={() => run('model')}
            isLoading={isLoading} message={message} status={status} inputId="glb-deform-input"
          />

        </div>

        {/* Global preset row (hub) sits just above the data panel when embedded. */}
        {embedded && presetSlot && (
          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--lab-border)', background: 'var(--lab-surface)' }}>
            {presetSlot}
          </div>
        )}

        <LabDataPanel
          data={data} draggingField={draggingField}
          onDragStart={setDraggingField} onDragEnd={() => setDraggingField(null)}
          onDataChange={setData}
        />
      </div>

      <LabAdvancedPanel open={showAdvanced}>
        <Sec>
          <SLabel>Stress Effects</SLabel>
          <div style={{ fontSize: 9, color: 'var(--lab-text-3)', lineHeight: 1.5, marginBottom: 2 }}>
            Grow with the deformation amount. Work on any geometry.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FxToggle label="Tint" on={fx.tint} onToggle={() => setFx(f => ({ ...f, tint: !f.tint }))}>
              <input type="color" value={fx.tintColor}
                onChange={e => setFx(f => ({ ...f, tintColor: e.target.value }))}
                title="Effect colour (tint / glow / cracks)"
                style={{ width: 26, height: 18, padding: 0, border: '1px solid var(--lab-border)', borderRadius: 4, background: 'none', cursor: 'pointer' }} />
            </FxToggle>
            <FxToggle label="Distortion"    on={fx.distort}    onToggle={() => setFx(f => ({ ...f, distort: !f.distort }))} />
            <FxToggle label="Emissive glow" on={fx.glow}       onToggle={() => setFx(f => ({ ...f, glow: !f.glow }))} />
            <FxToggle label="Cracks"        on={fx.cracks}     onToggle={() => setFx(f => ({ ...f, cracks: !f.cracks }))} />
            <FxToggle label="Desaturate"    on={fx.desaturate} onToggle={() => setFx(f => ({ ...f, desaturate: !f.desaturate }))} />
          </div>
        </Sec>
        <Sec>
          <SLabel>Mesh</SLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <RowLabel>Remesh detail: {subdivs === 0 ? 'off' : subdivs}</RowLabel>
            <input type="range" min={0} max={4} step={1} value={subdivs}
              onChange={e => setSubdivs(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--lab-accent)' }} />
            <div style={{ fontSize: 9, color: 'var(--lab-text-3)', lineHeight: 1.5 }}>
              Adds edge loops before deforming. Try 2–3 for smoother curves.
            </div>
          </div>
        </Sec>
        <Sec>
          <SLabel>Quick Shapes</SLabel>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => run('sphere')} disabled={isLoading} style={secBtnSt(isLoading)}>Sphere</button>
            <button onClick={() => run('cube')}   disabled={isLoading} style={secBtnSt(isLoading)}>Cube</button>
          </div>
          <div style={{ fontSize: 9, color: 'var(--lab-text-3)', lineHeight: 1.5 }}>
            Run the simulation on a built-in shape without uploading a model.
          </div>
        </Sec>
      </LabAdvancedPanel>

      {/* ── Viewport ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

        <div style={{ flex: 1, position: 'relative' }}>
          <ViewCanvas viewType={view1} resultUrl={resultUrl} animSpeed={animSpeed}
            data={data} bindingRange={bindingRange} deformMode={deformMode} axis={axis} fx={fx} playData={effectData} />
        </div>

        {/* LEGACY two-view split — commented out
        {view2 !== null && (
          <div style={{ flex: 1, position: 'relative', borderTop: '1px solid #1e1e2a' }}>
            <ViewCanvas viewType={view2} resultUrl={resultUrl} animSpeed={animSpeed}
              data={data} bindings={bindings} bindingRange={bindingRange} deformMode={deformMode} axis={axis} />
          </div>
        )}
        <LabViewSelector
          view1={view1} view2={view2}
          onView1={v => setView1(v)} onView2={v => setView2(v)}
          onAdd={() => setView2(view1 === 'effect' ? 'static' : 'effect')}
          onRemove={() => setView2(null)}
        />
        */}

        <LabViewToggle view={view1} onChange={setView1} />

        {/* Reference — only offered when the loaded preset carries one. */}
        {reference && !showReference && (
          <button onClick={() => setShowReference(true)} title="Show reference"
            style={{
              position: 'absolute', top: 12, right: 12, zIndex: 20,
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.95)', border: '1px solid var(--lab-border)', borderRadius: 8,
              color: 'var(--lab-accent)', fontSize: 11, fontFamily: 'inherit', padding: '6px 10px', cursor: 'pointer',
            }}>
            ⓘ Reference
          </button>
        )}
        {reference && showReference && (
          <ReferencePanel reference={reference} onClose={() => setShowReference(false)} />
        )}

      </div>
    </div>
  )
}

// ── Style constants ───────────────────────────────────────────────────────────

const numInp: React.CSSProperties = {
  background: 'var(--lab-surface)', border: '1px solid var(--lab-border)', borderRadius: 5,
  color: 'var(--lab-text)', padding: '3px 7px', fontSize: 11, outline: 'none', width: 54,
}

