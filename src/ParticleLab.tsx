import { useRef, useState, useCallback, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { useThree } from '@react-three/fiber'
import { EffectComposer }  from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass }      from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass }      from 'three/examples/jsm/postprocessing/OutputPass.js'
import * as THREE from 'three'
import {
  type SceneSave, type ViewType, type DataRow, type DataField,
  DEFAULT_DATA, Sec, SLabel, RowLabel, secBtnSt,
  LabNavTitle, LabPresetRow, LabDataPanel,
  LabAdvancedToggle, LabAdvancedPanel, LabViewSelector, SpreadsheetModal,
} from './LabShared'

// ── Types ─────────────────────────────────────────────────────────────────────

type ColorMode = 'speed' | 'heat' | 'rainbow' | 'solid'
type ParticleShape = 'sphere' | 'cube' | 'model'

interface Forces {
  gravity: number; turbulence: number; vortex: number
  attraction: number; damping: number; emitSpeed: number
}

interface RenderOpts {
  colorMode: ColorMode; blending: 'standard' | 'additive'
  brightness: number; solidColor: string
  trailOn: boolean; trailLen: number; trailSize: number
  bloomOn: boolean; bloomInt: number
}

type SimData = { pos: Float32Array; vel: Float32Array; origin: Float32Array; normal: Float32Array }

// ── Presets ───────────────────────────────────────────────────────────────────

const FORCE_PRESETS: Record<string, Forces> = {
  Swarm:    { gravity: 0,    turbulence: 1.5, vortex: 0,   attraction: 3,   damping: 3,   emitSpeed: 0.2 },
  Storm:    { gravity: 0.5,  turbulence: 4,   vortex: 1.5, attraction: 0.3, damping: 0.8, emitSpeed: 0.5 },
  Fountain: { gravity: 2,    turbulence: 0.5, vortex: 0.5, attraction: 0,   damping: 0.5, emitSpeed: 2.0 },
  Orbit:    { gravity: 0,    turbulence: 0.3, vortex: 3,   attraction: 1.5, damping: 1,   emitSpeed: 0.3 },
  Drift:    { gravity: 0.15, turbulence: 0.8, vortex: 0,   attraction: 1,   damping: 2,   emitSpeed: 0.1 },
}
const FORCE_PRESET_KEYS = Object.keys(FORCE_PRESETS)

const DEFAULT_FORCES: Forces = { ...FORCE_PRESETS.Drift }

const DEFAULT_RENDER: RenderOpts = {
  colorMode: 'speed', blending: 'additive',
  brightness: 1.5, solidColor: '#5566ff',
  trailOn: false, trailLen: 50, trailSize: 1.0,
  bloomOn: false, bloomInt: 0.8,
}

const PARTICLE_PRESETS_KEY = 'phys_tool_particle_presets'
function loadPresets(): SceneSave[] {
  try { return JSON.parse(localStorage.getItem(PARTICLE_PRESETS_KEY) ?? '[]') } catch { return [] }
}
function persistPresets(saves: SceneSave[]) {
  localStorage.setItem(PARTICLE_PRESETS_KEY, JSON.stringify(saves))
}

// ── Color utility ─────────────────────────────────────────────────────────────

const _hsl = new THREE.Color()

function getColor(
  vx: number, vy: number, vz: number, py: number,
  mode: ColorMode, brightness: number, solidHex: string,
): [number, number, number] {
  const spd = Math.sqrt(vx * vx + vy * vy + vz * vz)
  const t = Math.min(spd * 0.4, 1)
  let r: number, g: number, b: number

  if (mode === 'speed') {
    r = 0.3 + t * 0.65; g = 0.45 + t * 0.5; b = 1
  } else if (mode === 'heat') {
    if (t < 0.33)      { r = t * 3;         g = 0;              b = 0 }
    else if (t < 0.67) { r = 1;             g = (t - 0.33) * 3; b = 0 }
    else               { r = 1;             g = 1;              b = (t - 0.67) * 3 }
  } else if (mode === 'rainbow') {
    _hsl.setHSL(((py + 2) / 4 + 1) % 1, 1, 0.6)
    r = _hsl.r; g = _hsl.g; b = _hsl.b
  } else {
    _hsl.set(solidHex); r = _hsl.r; g = _hsl.g; b = _hsl.b
  }

  return [r * brightness, g * brightness, b * brightness]
}

const _dummy  = new THREE.Object3D()
const _icolor = new THREE.Color()

// ── Trail shaders ─────────────────────────────────────────────────────────────

const TRAIL_VERT = /* glsl */`
  uniform float uSize;
  attribute float aAlpha;
  attribute vec3  aColor;
  varying   float vAlpha;
  varying   vec3  vColor;
  void main() {
    vAlpha = aAlpha; vColor = aColor;
    vec4 mvPos  = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPos;
    gl_PointSize = max(0.5, uSize * aAlpha * (80.0 / -mvPos.z));
  }
`
const TRAIL_FRAG = /* glsl */`
  varying float vAlpha;
  varying vec3  vColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    gl_FragColor = vec4(vColor, vAlpha * smoothstep(0.5, 0.1, dist));
  }
`

// ── Trail renderer ────────────────────────────────────────────────────────────

function TrailRenderer({ simRef, count, trailLen, renderOptsRef }: {
  simRef: React.MutableRefObject<SimData | null>
  count: number; trailLen: number
  renderOptsRef: React.MutableRefObject<RenderOpts>
}) {
  const totalPts = count * trailLen
  const geoRef   = useRef<THREE.BufferGeometry | null>(null)
  const bufHead  = useRef(new Int32Array(count))
  const bufTrail = useRef(new Float32Array(totalPts * 3))

  const [geo, mat] = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(totalPts * 3).fill(-1e4), 3))
    g.setAttribute('aAlpha',   new THREE.BufferAttribute(new Float32Array(totalPts), 1))
    g.setAttribute('aColor',   new THREE.BufferAttribute(new Float32Array(totalPts * 3), 3))
    const m = new THREE.ShaderMaterial({
      uniforms: { uSize: { value: 0.8 } },
      vertexShader: TRAIL_VERT, fragmentShader: TRAIL_FRAG,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    })
    geoRef.current = g
    return [g, m]
  }, [totalPts])

  useFrame(() => {
    const sim = simRef.current; const geo = geoRef.current
    if (!sim || !geo) return
    const { colorMode, brightness, solidColor, trailSize } = renderOptsRef.current
    ;(mat as THREE.ShaderMaterial).uniforms.uSize.value = trailSize * 0.8
    const heads = bufHead.current; const trail = bufTrail.current
    const posAttr = geo.attributes.position as THREE.BufferAttribute
    const alpAttr = geo.attributes.aAlpha   as THREE.BufferAttribute
    const colAttr = geo.attributes.aColor   as THREE.BufferAttribute

    for (let i = 0; i < count; i++) {
      const h = (heads[i] + 1) % trailLen
      heads[i] = h
      const tb = (i * trailLen + h) * 3
      trail[tb] = sim.pos[i*3]; trail[tb+1] = sim.pos[i*3+1]; trail[tb+2] = sim.pos[i*3+2]
      const vx = sim.vel[i*3], vy = sim.vel[i*3+1], vz = sim.vel[i*3+2]
      for (let t = 0; t < trailLen; t++) {
        const age = (trailLen - 1 - t) / (trailLen - 1)
        const src = (i * trailLen + ((h - t + trailLen) % trailLen)) * 3
        const dst = (i * trailLen + t) * 3
        posAttr.array[dst] = trail[src]; posAttr.array[dst+1] = trail[src+1]; posAttr.array[dst+2] = trail[src+2]
        alpAttr.array[i * trailLen + t] = age * age
        const py = trail[src + 1]
        const [cr, cg, cb] = getColor(vx*age, vy*age, vz*age, py, colorMode, brightness*0.7, solidColor)
        colAttr.array[dst] = cr; colAttr.array[dst+1] = cg; colAttr.array[dst+2] = cb
      }
    }
    posAttr.needsUpdate = true; alpAttr.needsUpdate = true; colAttr.needsUpdate = true
  })

  return <points geometry={geo} material={mat} />
}

// ── Particle simulation ───────────────────────────────────────────────────────

function ParticleSystem({ simRef, sourceMesh, count, size, forcesRef, renderOptsRef, paused }: {
  simRef: React.MutableRefObject<SimData | null>
  sourceMesh: THREE.Mesh; count: number; size: number
  forcesRef: React.MutableRefObject<Forces>
  renderOptsRef: React.MutableRefObject<RenderOpts>
  paused?: boolean
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const matRef  = useRef<THREE.MeshStandardMaterial | null>(null)

  useEffect(() => {
    const pos = new Float32Array(count * 3); const vel = new Float32Array(count * 3)
    const origin = new Float32Array(count * 3); const normal = new Float32Array(count * 3)
    sourceMesh.updateWorldMatrix(true, false)
    const sampler = new MeshSurfaceSampler(sourceMesh).build()
    const p3 = new THREE.Vector3(); const n3 = new THREE.Vector3()
    const nmat = new THREE.Matrix3().getNormalMatrix(sourceMesh.matrixWorld)
    const es = forcesRef.current.emitSpeed
    for (let i = 0; i < count; i++) {
      sampler.sample(p3, n3)
      p3.applyMatrix4(sourceMesh.matrixWorld); n3.applyMatrix3(nmat).normalize()
      const i3 = i * 3
      origin[i3]=p3.x; origin[i3+1]=p3.y; origin[i3+2]=p3.z
      normal[i3]=n3.x; normal[i3+1]=n3.y; normal[i3+2]=n3.z
      pos[i3]=p3.x; pos[i3+1]=p3.y; pos[i3+2]=p3.z
      const j = 0.08
      vel[i3]=n3.x*es+(Math.random()-.5)*j; vel[i3+1]=n3.y*es+(Math.random()-.5)*j; vel[i3+2]=n3.z*es+(Math.random()-.5)*j
      const age = Math.random() * 2
      pos[i3]+=vel[i3]*age; pos[i3+1]+=vel[i3+1]*age; pos[i3+2]+=vel[i3+2]*age
    }
    simRef.current = { pos, vel, origin, normal }
  }, [sourceMesh, count]) // eslint-disable-line

  useFrame(({ clock }, delta) => {
    const mesh = meshRef.current; const sim = simRef.current
    if (!mesh || !sim) return
    if (paused) return

    const dt = Math.min(delta, 0.05); const t = clock.getElapsedTime()
    const { pos, vel, origin, normal } = sim
    const { gravity, turbulence, vortex, attraction, damping, emitSpeed } = forcesRef.current
    const { colorMode, blending, brightness, solidColor } = renderOptsRef.current

    if (matRef.current) {
      const wantAdd = blending === 'additive'
      const curAdd  = matRef.current.blending === THREE.AdditiveBlending
      if (wantAdd !== curAdd) {
        matRef.current.blending   = wantAdd ? THREE.AdditiveBlending : THREE.NormalBlending
        matRef.current.depthWrite = !wantAdd
        matRef.current.needsUpdate = true
      }
    }

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      let px=pos[i3], py=pos[i3+1], pz=pos[i3+2]
      let vx=vel[i3], vy=vel[i3+1], vz=vel[i3+2]
      const ox=origin[i3], oy=origin[i3+1], oz=origin[i3+2]
      const nx=normal[i3], ny=normal[i3+1], nz=normal[i3+2]

      vy -= gravity * dt * 3
      if (turbulence > 0.01) {
        const sc = 1.2
        vx += (Math.sin(px*sc + t*.71) * Math.cos(pz*sc*.83 + t*.44)) * turbulence * dt * 4
        vy += (Math.sin(py*sc + t*.53) * Math.cos(px*sc*.91 + t*.37)) * turbulence * dt * 4
        vz += (Math.sin(pz*sc + t*.67) * Math.cos(py*sc*.79 + t*.58)) * turbulence * dt * 4
      }
      if (Math.abs(vortex) > 0.001) { vx -= pz * vortex * dt * 2; vz += px * vortex * dt * 2 }
      if (attraction > 0.001) {
        const k = attraction * dt * 8
        vx += (ox-px)*k; vy += (oy-py)*k; vz += (oz-pz)*k
      }
      const dmp = 1 - Math.min(damping * dt * 0.4, 0.95)
      vx*=dmp; vy*=dmp; vz*=dmp
      px+=vx*dt; py+=vy*dt; pz+=vz*dt
      const dx=px-ox, dy=py-oy, dz=pz-oz
      if (py < -10 || dx*dx+dy*dy+dz*dz > 144) {
        px=ox; py=oy; pz=oz
        const j=.08
        vx=nx*emitSpeed+(Math.random()-.5)*j; vy=ny*emitSpeed+(Math.random()-.5)*j; vz=nz*emitSpeed+(Math.random()-.5)*j
      }
      pos[i3]=px; pos[i3+1]=py; pos[i3+2]=pz
      vel[i3]=vx; vel[i3+1]=vy; vel[i3+2]=vz

      _dummy.position.set(px, py, pz); _dummy.updateMatrix(); mesh.setMatrixAt(i, _dummy.matrix)
      const [cr, cg, cb] = getColor(vx, vy, vz, py, colorMode, brightness, solidColor)
      _icolor.setRGB(cr, cg, cb); mesh.setColorAt(i, _icolor)
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial ref={matRef} roughness={0.05} metalness={0.4} toneMapped={false} transparent />
    </instancedMesh>
  )
}

// ── Shape wrappers ────────────────────────────────────────────────────────────

function BuiltinParticles({ shape, simRef, count, size, forcesRef, renderOptsRef, paused }: {
  shape: 'sphere' | 'cube'; simRef: React.MutableRefObject<SimData | null>
  count: number; size: number; forcesRef: React.MutableRefObject<Forces>
  renderOptsRef: React.MutableRefObject<RenderOpts>; paused?: boolean
}) {
  const mesh = useMemo(() => {
    const geo = shape === 'sphere' ? new THREE.SphereGeometry(1, 32, 16) : new THREE.BoxGeometry(2, 2, 2, 8, 8, 8)
    return new THREE.Mesh(geo)
  }, [shape])

  return <ParticleSystem key={shape+count} simRef={simRef} sourceMesh={mesh} count={count} size={size} forcesRef={forcesRef} renderOptsRef={renderOptsRef} paused={paused} />
}

function ModelParticles({ url, simRef, count, size, forcesRef, renderOptsRef, paused }: {
  url: string; simRef: React.MutableRefObject<SimData | null>
  count: number; size: number; forcesRef: React.MutableRefObject<Forces>
  renderOptsRef: React.MutableRefObject<RenderOpts>; paused?: boolean
}) {
  const gltf = useLoader(GLTFLoader, url)
  const mesh = useMemo<THREE.Mesh | null>(() => {
    let best: THREE.Mesh | null = null; let maxV = 0
    gltf.scene.traverse(n => {
      const m = n as THREE.Mesh
      if (m.isMesh && m.geometry.attributes.position.count > maxV) { maxV = m.geometry.attributes.position.count; best = m }
    })
    return best
  }, [gltf])

  if (!mesh) return null
  return <ParticleSystem key={mesh.uuid+count} simRef={simRef} sourceMesh={mesh} count={count} size={size} forcesRef={forcesRef} renderOptsRef={renderOptsRef} paused={paused} />
}

// ── Bloom ─────────────────────────────────────────────────────────────────────

function NativeBloom({ strength, threshold }: { strength: number; threshold: number }) {
  const { gl, scene, camera, size } = useThree()
  const composerRef = useRef<EffectComposer | null>(null)
  const bloomRef    = useRef<UnrealBloomPass | null>(null)

  useEffect(() => {
    const composer = new EffectComposer(gl)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(new THREE.Vector2(size.width, size.height), strength, 0.5, threshold)
    composer.addPass(bloom); composer.addPass(new OutputPass())
    composerRef.current = composer; bloomRef.current = bloom
    return () => { composer.dispose() }
  }, [gl, scene, camera]) // eslint-disable-line

  useEffect(() => { composerRef.current?.setSize(size.width, size.height) }, [size])
  useEffect(() => { if (bloomRef.current) { bloomRef.current.strength = strength; bloomRef.current.threshold = threshold } }, [strength, threshold])
  useFrame(() => { composerRef.current?.render() }, 1)
  return null
}

// ── Bloom controller (reads from ref to avoid full Canvas remount) ─────────────

function BloomController({ renderOptsRef }: { renderOptsRef: React.MutableRefObject<RenderOpts> }) {
  const [on,  setOn]  = useState(renderOptsRef.current.bloomOn)
  const [int, setInt] = useState(renderOptsRef.current.bloomInt)
  useFrame(() => {
    const { bloomOn, bloomInt } = renderOptsRef.current
    if (bloomOn !== on)  setOn(bloomOn)
    if (bloomInt !== int) setInt(bloomInt)
  })
  if (!on) return null
  return <NativeBloom strength={int} threshold={0.15} />
}

// ── Dynamic preset cycler (auto-cycles force presets for Dynamic view) ─────────

function DynamicForcesCycler({ forcesRef }: { forcesRef: React.MutableRefObject<Forces> }) {
  const elapsed = useRef(0)
  const idx     = useRef(0)
  useFrame((_, delta) => {
    elapsed.current += delta
    if (elapsed.current > 3.5) {
      elapsed.current = 0
      idx.current = (idx.current + 1) % FORCE_PRESET_KEYS.length
      Object.assign(forcesRef.current, FORCE_PRESETS[FORCE_PRESET_KEYS[idx.current]])
    }
  })
  return null
}

// ── Scene assembly ────────────────────────────────────────────────────────────

function SceneContent({ shape, modelUrl, count, size, forcesRef, renderOptsRef, paused }: {
  shape: ParticleShape; modelUrl: string | null
  count: number; size: number
  forcesRef: React.MutableRefObject<Forces>
  renderOptsRef: React.MutableRefObject<RenderOpts>
  paused?: boolean
}) {
  const simRef   = useRef<SimData | null>(null)
  const trailKey = `${shape}-${modelUrl ?? ''}-${count}`
  const [trailOn,  setTrailOn]  = useState(renderOptsRef.current.trailOn)
  const [trailLen, setTrailLen] = useState(renderOptsRef.current.trailLen)
  useFrame(() => {
    const { trailOn: to, trailLen: tl } = renderOptsRef.current
    if (to !== trailOn)  setTrailOn(to)
    if (tl !== trailLen) setTrailLen(tl)
  })

  return (
    <>
      {(shape === 'sphere' || shape === 'cube') && (
        <BuiltinParticles shape={shape} simRef={simRef} count={count} size={size} forcesRef={forcesRef} renderOptsRef={renderOptsRef} paused={paused} />
      )}
      {shape === 'model' && modelUrl && (
        <Suspense fallback={null}>
          <ModelParticles url={modelUrl} simRef={simRef} count={count} size={size} forcesRef={forcesRef} renderOptsRef={renderOptsRef} paused={paused} />
        </Suspense>
      )}
      {trailOn && !paused && (
        <TrailRenderer key={trailKey+trailLen} simRef={simRef} count={count} trailLen={trailLen} renderOptsRef={renderOptsRef} />
      )}
    </>
  )
}

// ── Per-view canvas ───────────────────────────────────────────────────────────

function ViewCanvas({ viewType, shape, modelUrl, count, size, forcesRef, renderOptsRef }: {
  viewType: ViewType; shape: ParticleShape; modelUrl: string | null
  count: number; size: number
  forcesRef: React.MutableRefObject<Forces>
  renderOptsRef: React.MutableRefObject<RenderOpts>
}) {
  const dynamicForcesRef = useRef<Forces>({ ...FORCE_PRESETS.Swarm })
  const activeForcesRef  = viewType === 'effect' ? forcesRef : dynamicForcesRef

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        style={{ background: '#04040c' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0,  4,  0]} intensity={1.2} color="#6666ff" />
        <pointLight position={[4, -2,  2]} intensity={0.7} color="#ff8844" />
        <pointLight position={[-4, 0, -3]} intensity={0.5} color="#44ffaa" />
        <OrbitControls makeDefault />
        <SceneContent
          shape={shape} modelUrl={modelUrl} count={count} size={size}
          forcesRef={activeForcesRef} renderOptsRef={renderOptsRef}
          paused={viewType === 'static'}
        />
        {viewType === 'dynamic' && <DynamicForcesCycler forcesRef={dynamicForcesRef} />}
        <BloomController renderOptsRef={renderOptsRef} />
      </Canvas>
    </div>
  )
}

// ── Local UI helpers ──────────────────────────────────────────────────────────

function SegBtn({ active, onClick, children, small }: {
  active?: boolean; onClick: () => void; children: React.ReactNode; small?: boolean
}) {
  return (
    <button onClick={onClick} style={{
      flex: 1, padding: small ? '5px 0' : '7px 0',
      fontSize: small ? 10 : 10, borderRadius: 6, cursor: 'pointer',
      background: active ? '#22224a' : '#232330',
      color:      active ? '#a0a0ff' : '#666678',
      border:     active ? '1px solid #5050cc' : '1px solid #2c2c3c',
      fontWeight: active ? 600 : 400, fontFamily: 'inherit',
      transition: 'background 0.1s, color 0.1s, border-color 0.1s',
    }}>{children}</button>
  )
}

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', userSelect: 'none' }}>
      <div style={{ width: 28, height: 16, borderRadius: 8, position: 'relative', background: on ? '#5050cc' : '#1e1e2a', border: '1px solid #333', transition: 'background .2s' }}>
        <div style={{ position: 'absolute', top: 2, left: on ? 11 : 2, width: 10, height: 10, borderRadius: '50%', background: on ? '#fff' : '#444', transition: 'left .2s' }} />
      </div>
      <span style={{ fontSize: 11, color: on ? '#a0a0ff' : '#666678' }}>{label}</span>
    </div>
  )
}

// ── Force sliders config ──────────────────────────────────────────────────────

const FORCE_SLIDERS: [string, keyof Forces, number, number, number][] = [
  ['Gravity',    'gravity',    0,  4, 0.05],
  ['Turbulence', 'turbulence', 0,  5, 0.1 ],
  ['Vortex',     'vortex',    -4,  4, 0.1 ],
  ['Attraction', 'attraction', 0,  5, 0.1 ],
  ['Damping',    'damping',    0,  5, 0.1 ],
  ['Emit Speed', 'emitSpeed',  0,  3, 0.05],
]

// ── ParticleLab ───────────────────────────────────────────────────────────────

export default function ParticleLab() {
  const [shape,    setShape]    = useState<ParticleShape>('sphere')
  const [fileName, setFileName] = useState('')
  const [modelUrl, setModelUrl] = useState<string | null>(null)
  const [count,    setCount]    = useState(3000)
  const [size,     setSize]     = useState(0.04)
  const [forces,   setForces]   = useState<Forces>(DEFAULT_FORCES)
  const [render,   setRender]   = useState<RenderOpts>(DEFAULT_RENDER)

  const forcesRef     = useRef<Forces>(forces)
  const renderOptsRef = useRef<RenderOpts>(render)
  useEffect(() => { forcesRef.current = forces },     [forces])
  useEffect(() => { renderOptsRef.current = render }, [render])

  const [view1, setView1] = useState<ViewType>('effect')
  const [view2, setView2] = useState<ViewType | null>(null)
  const [showAdvanced,    setShowAdvanced]    = useState(false)
  const [showSpreadsheet, setShowSpreadsheet] = useState(false)

  const [data]          = useState<DataRow[]>(DEFAULT_DATA)
  const [draggingField, setDraggingField] = useState<DataField | null>(null)
  const [presets,       setPresets]       = useState<SceneSave[]>(() => loadPresets())
  const [selPresetId,   setSelPresetId]   = useState('')
  const [saveName,      setSaveName]      = useState<string | null>(null)

  const handleFile = useCallback((file: File) => {
    if (!file.name.endsWith('.glb') && !file.name.endsWith('.gltf')) return
    if (modelUrl) URL.revokeObjectURL(modelUrl)
    setModelUrl(URL.createObjectURL(file))
    setFileName(file.name); setShape('model')
  }, [modelUrl])

  const setF = (k: keyof Forces) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForces(f => ({ ...f, [k]: Number(e.target.value) }))
  const setR = <K extends keyof RenderOpts>(k: K, v: RenderOpts[K]) =>
    setRender(r => ({ ...r, [k]: v }))

  const savePreset = useCallback((name: string) => {
    const save: SceneSave = {
      id: Date.now().toString(), name, createdAt: new Date().toISOString(),
      data: { shape, fileName, count, size, forces: { ...forces }, render: { ...render } },
    }
    const next = [save, ...presets]
    setPresets(next); persistPresets(next); setSelPresetId(save.id); setSaveName(null)
  }, [shape, fileName, count, size, forces, render, presets])

  const loadPreset = useCallback((id: string) => {
    const p = presets.find(x => x.id === id); if (!p) return
    const d = p.data as Record<string, unknown>
    if (d.shape) setShape(d.shape as ParticleShape)
    if (d.count  != null) setCount(d.count as number)
    if (d.size   != null) setSize(d.size as number)
    if (d.forces) setForces({ ...DEFAULT_FORCES, ...(d.forces as Partial<Forces>) })
    if (d.render) setRender({ ...DEFAULT_RENDER, ...(d.render as Partial<RenderOpts>) })
    if (d.fileName) setFileName(d.fileName as string)
  }, [presets])

  const deletePreset = useCallback((id: string) => {
    const next = presets.filter(p => p.id !== id)
    setPresets(next); persistPresets(next)
    if (selPresetId === id) setSelPresetId('')
  }, [presets, selPresetId])

  const sl: React.CSSProperties = { width: '100%', accentColor: '#7070f5' }

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, sans-serif', background: '#131318', color: '#e0e0f0', position: 'relative' }}>

      {showSpreadsheet && <SpreadsheetModal data={data} onClose={() => setShowSpreadsheet(false)} />}

      {/* ── Left panel ── */}
      <div style={{ width: 268, flexShrink: 0, display: 'flex', flexDirection: 'column', borderRight: '1px solid #2c2c3c', background: '#1f1f28', position: 'relative' }}>

        <LabAdvancedToggle open={showAdvanced} onToggle={() => setShowAdvanced(v => !v)} />

        <div style={{ flex: 1, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>

          <LabNavTitle name="Particle Lab" href="/particles" />

          <LabPresetRow
            presets={presets} selPresetId={selPresetId} saveName={saveName}
            defaultSaveName={`Particles ${new Date().toLocaleDateString()}`}
            onSelect={loadPreset} onSave={savePreset} onDelete={() => deletePreset(selPresetId)}
            setSaveName={setSaveName} setSelPresetId={setSelPresetId}
          />

          {/* Effect / quick force presets */}
          <Sec>
            <SLabel>Effect</SLabel>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {FORCE_PRESET_KEYS.map(name => (
                <button key={name} onClick={() => setForces({ ...FORCE_PRESETS[name] })} style={{
                  padding: '5px 11px', fontSize: 10, borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit',
                  background: '#1c1c2e', color: '#6868a0', border: '1px solid #2c2c4a',
                }}>{name}</button>
              ))}
            </div>
          </Sec>

          {/* Source */}
          <Sec>
            <SLabel>Source</SLabel>
            <div style={{ display: 'flex', gap: 6 }}>
              <SegBtn active={shape==='sphere'} onClick={() => setShape('sphere')}>Sphere</SegBtn>
              <SegBtn active={shape==='cube'}   onClick={() => setShape('cube')}>Cube</SegBtn>
            </div>
            <div
              onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
              onDragOver={e => e.preventDefault()}
              onClick={() => document.getElementById('glb-particle-input')!.click()}
              style={{
                border: `1px dashed ${shape === 'model' ? '#5050cc' : '#2a2a3a'}`,
                borderRadius: 8, padding: '14px 10px', textAlign: 'center',
                cursor: 'pointer', fontSize: 11,
                color: shape === 'model' ? '#8080d8' : '#505060', background: '#181824',
              }}
            >
              {fileName || 'Drop GLB or click to browse'}
            </div>
            <input id="glb-particle-input" type="file" accept=".glb,.gltf" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
          </Sec>

          {/* Particles */}
          <Sec>
            <SLabel>Particles</SLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RowLabel>Count: {count.toLocaleString()}</RowLabel>
              <input type="range" min={200} max={8000} step={100} value={count} onChange={e => setCount(Number(e.target.value))} style={sl} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RowLabel>Size: {size.toFixed(3)}</RowLabel>
              <input type="range" min={0.01} max={0.15} step={0.005} value={size} onChange={e => setSize(Number(e.target.value))} style={sl} />
            </div>
          </Sec>

          {/* Forces */}
          <Sec>
            <SLabel>Forces</SLabel>
            {FORCE_SLIDERS.map(([label, key, min, max, step]) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <RowLabel>{label}: {forces[key].toFixed(2)}</RowLabel>
                <input type="range" min={min} max={max} step={step} value={forces[key]} onChange={setF(key)} style={sl} />
              </div>
            ))}
          </Sec>

        </div>

        <LabDataPanel
          data={data} draggingField={draggingField}
          onDragStart={setDraggingField} onDragEnd={() => setDraggingField(null)}
          onShowSpreadsheet={() => setShowSpreadsheet(true)}
        />
      </div>

      {/* ── Advanced panel ── */}
      <LabAdvancedPanel open={showAdvanced}>
        <Sec>
          <SLabel>Color</SLabel>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {(['speed','heat','rainbow','solid'] as ColorMode[]).map(m => (
              <SegBtn key={m} small active={render.colorMode===m} onClick={() => setR('colorMode', m)}>
                {m[0].toUpperCase()+m.slice(1)}
              </SegBtn>
            ))}
          </div>
          {render.colorMode === 'solid' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="color" value={render.solidColor} onChange={e => setR('solidColor', e.target.value)}
                style={{ width: 32, height: 22, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }} />
              <span style={{ fontSize: 10, color: '#6868a0' }}>{render.solidColor}</span>
            </div>
          )}
        </Sec>

        <Sec>
          <SLabel>Blending</SLabel>
          <div style={{ display: 'flex', gap: 6 }}>
            <SegBtn active={render.blending==='standard'} onClick={() => setR('blending','standard')}>Standard</SegBtn>
            <SegBtn active={render.blending==='additive'} onClick={() => setR('blending','additive')}>Additive ✦</SegBtn>
          </div>
        </Sec>

        <Sec>
          <SLabel>Brightness</SLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <RowLabel>×{render.brightness.toFixed(1)}</RowLabel>
            <input type="range" min={0.3} max={5} step={0.05} value={render.brightness}
              onChange={e => setR('brightness', Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
          </div>
        </Sec>

        <Sec>
          <SLabel>Trails</SLabel>
          <Toggle on={render.trailOn} onClick={() => setR('trailOn', !render.trailOn)} label="Enable trails" />
          {render.trailOn && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <RowLabel>Length: {render.trailLen}</RowLabel>
                <input type="range" min={3} max={150} step={1} value={render.trailLen}
                  onChange={e => setR('trailLen', Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <RowLabel>Size: {render.trailSize.toFixed(2)}</RowLabel>
                <input type="range" min={0.1} max={3} step={0.05} value={render.trailSize}
                  onChange={e => setR('trailSize', Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
              </div>
            </>
          )}
        </Sec>

        <Sec>
          <SLabel>Bloom</SLabel>
          <Toggle on={render.bloomOn} onClick={() => setR('bloomOn', !render.bloomOn)} label="Enable bloom" />
          {render.bloomOn && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <RowLabel>Intensity: {render.bloomInt.toFixed(2)}</RowLabel>
              <input type="range" min={0.1} max={3} step={0.05} value={render.bloomInt}
                onChange={e => setR('bloomInt', Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
            </div>
          )}
        </Sec>
      </LabAdvancedPanel>

      {/* ── Viewport ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

        <div style={{ flex: 1, position: 'relative' }}>
          <ViewCanvas viewType={view1} shape={shape} modelUrl={modelUrl} count={count} size={size} forcesRef={forcesRef} renderOptsRef={renderOptsRef} />
        </div>

        {view2 !== null && (
          <div style={{ flex: 1, position: 'relative', borderTop: '1px solid #1e1e2a' }}>
            <ViewCanvas viewType={view2} shape={shape} modelUrl={modelUrl} count={count} size={size} forcesRef={forcesRef} renderOptsRef={renderOptsRef} />
          </div>
        )}

        <LabViewSelector
          view1={view1} view2={view2}
          onView1={v => setView1(v)} onView2={v => setView2(v)}
          onAdd={() => setView2(view1 === 'effect' ? 'dynamic' : 'effect')}
          onRemove={() => setView2(null)}
        />
      </div>
    </div>
  )
}
