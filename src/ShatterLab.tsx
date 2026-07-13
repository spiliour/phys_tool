import { useRef, useState, useCallback, useMemo, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader }        from '@react-three/fiber'
import { OrbitControls, Environment, Bounds, useBounds, Html } from '@react-three/drei'
import { GLTFLoader }       from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import type { RapierRigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import {
  type SceneSave, type Shape, type ViewType, type DataRow, type DataField,
  secBtnSt, Sec, SLabel, RowLabel,
  LabNavTitle, LabPresetRow, LabModelSection, LabDataPanel,
  LabAdvancedToggle, LabAdvancedPanel, LabViewSelector, LabViewToggle,
} from './LabShared'

const SERVER = import.meta.env.VITE_SERVER ?? 'http://localhost:3001'

type FractureMethod = 'bisect' | 'voronoi'
type CutStrategy   = 'random' | 'largest'

// ShatterLab-specific data: 4 piece-count categories for the comparison view
const SHATTER_DATA: DataRow[] = [
  { category: 'Fine',   value: 1,  percentage: 25 },
  { category: 'Low',    value: 5,  percentage: 25 },
  { category: 'Medium', value: 15, percentage: 25 },
  { category: 'High',   value: 50, percentage: 25 },
]

// Piece counts and X positions for the static comparison view
const COMPARE_PIECES = [1, 5, 15, 50]
const COMPARE_X      = [-4.5, -1.5, 1.5, 4.5]

const SHATTER_PRESETS_KEY = 'phys_tool_shatter_presets'
function loadPresets(): SceneSave[] {
  try { return JSON.parse(localStorage.getItem(SHATTER_PRESETS_KEY) ?? '[]') } catch { return [] }
}
function persistPresets(saves: SceneSave[]) {
  localStorage.setItem(SHATTER_PRESETS_KEY, JSON.stringify(saves))
}

// ── Camera fit ────────────────────────────────────────────────────────────────

function FitCamera() {
  const api = useBounds()
  useEffect(() => { api.refresh().fit() }, [api])
  return null
}

// ── Effect view (animated pieces flying out) ──────────────────────────────────

interface FragAnim { mesh: THREE.Object3D; origin: THREE.Vector3; dir: THREE.Vector3 }

function ExplodedView({ url }: { url: string }) {
  const gltf      = useLoader(GLTFLoader, url)
  const fragments = useRef<FragAnim[]>([])
  const elapsed   = useRef(0)

  useEffect(() => {
    const meshes: THREE.Object3D[] = []
    gltf.scene.updateWorldMatrix(true, true)
    gltf.scene.traverse(n => { if ((n as THREE.Mesh).isMesh) meshes.push(n) })

    const center = new THREE.Vector3()
    meshes.forEach(m => { const p = new THREE.Vector3(); m.getWorldPosition(p); center.add(p) })
    if (meshes.length) center.divideScalar(meshes.length)

    fragments.current = meshes.map(mesh => {
      const origin = new THREE.Vector3(); mesh.getWorldPosition(origin)
      const dir = origin.clone().sub(center)
      if (dir.length() < 0.001) dir.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      return { mesh, origin: origin.clone(), dir: dir.normalize() }
    })
    elapsed.current = 0
  }, [gltf])

  useFrame((_, delta) => {
    elapsed.current += delta
    const t = (Math.sin(elapsed.current * 1.0 - Math.PI / 2) + 1) / 2
    fragments.current.forEach(({ mesh, origin, dir }) => {
      mesh.position.copy(origin).addScaledVector(dir, t * 1.5)
    })
  })

  return (
    <Bounds fit clip observe margin={1.4}>
      <FitCamera />
      <primitive object={gltf.scene} />
    </Bounds>
  )
}

// ── Static view (fragments at rest positions) ─────────────────────────────────

function StaticView({ url }: { url: string }) {
  const gltf  = useLoader(GLTFLoader, url)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf])
  return (
    <Bounds fit clip observe margin={1.4}>
      <FitCamera />
      <primitive object={scene} />
    </Bounds>
  )
}

// ── One exploded group from a single fracture GLB ────────────────────────────
// Each fragment's geometry bbox center gives its centroid in local space —
// push it outward from the group centroid to create a static exploded look.

const EXPLODE_DIST = 0.45

function ExplodedGroup({ url }: { url: string }) {
  const gltf  = useLoader(GLTFLoader, url)
  const scene = useMemo(() => {
    const s = gltf.scene.clone(true)

    const meshes: THREE.Mesh[] = []
    s.traverse(n => { if ((n as THREE.Mesh).isMesh) meshes.push(n as THREE.Mesh) })

    // Compute centroid of all fragment centres (local geometry bbox centres)
    const groupCenter = new THREE.Vector3()
    meshes.forEach(m => {
      m.geometry.computeBoundingBox()
      const lc = new THREE.Vector3()
      m.geometry.boundingBox!.getCenter(lc)
      groupCenter.add(lc)
    })
    if (meshes.length > 0) groupCenter.divideScalar(meshes.length)

    // Push each fragment away from the group centroid
    meshes.forEach(mesh => {
      mesh.geometry.computeBoundingBox()
      const lc = new THREE.Vector3()
      mesh.geometry.boundingBox!.getCenter(lc)
      const dir = lc.clone().sub(groupCenter)
      if (dir.length() < 0.001) dir.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      dir.normalize()
      mesh.position.addScaledVector(dir, EXPLODE_DIST)
    })

    return s
  }, [gltf])

  return <primitive object={scene} />
}

// ── Compare static view — 4 groups side by side, each statically exploded ────
// All 4 group slots always render (labels appear immediately); geometry fills in
// when the URL for that slot is ready.

function CompareStaticView({ urls }: { urls: (string | null)[] }) {
  return (
    <>
      {SHATTER_DATA.map((row, i) => (
        <group key={i} position={[COMPARE_X[i], 0, 0]}>
          {urls[i] && (
            <Suspense fallback={null}>
              <ExplodedGroup url={urls[i]!} />
            </Suspense>
          )}
          <Html center position={[0, -1.8, 0]} style={{ pointerEvents: 'none' }}>
            <div style={{ textAlign: 'center', whiteSpace: 'nowrap', userSelect: 'none' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#c0c0e0', letterSpacing: 0.3 }}>
                {row.category}
              </div>
              <div style={{ fontSize: 9, color: '#60608a', marginTop: 2 }}>
                {row.value} {row.value === 1 ? 'piece' : 'pieces'}
              </div>
            </div>
          </Html>
        </group>
      ))}
    </>
  )
}

// ── Dynamic view (physics simulation) ────────────────────────────────────────

interface FragData {
  geometry:   THREE.BufferGeometry
  material:   THREE.Material | THREE.Material[]
  position:   THREE.Vector3
  quaternion: THREE.Quaternion
}

function PhysicsFragment({ data, center, impulse }: { data: FragData; center: THREE.Vector3; impulse: number }) {
  const rbRef = useRef<RapierRigidBody>(null)
  useEffect(() => {
    if (!rbRef.current) return
    const dir = data.position.clone().sub(center)
    if (dir.length() < 0.001) dir.set(Math.random() - 0.5, 0.5, Math.random() - 0.5)
    dir.normalize().multiplyScalar(impulse)
    rbRef.current.applyImpulse({ x: dir.x, y: dir.y + impulse * 0.3, z: dir.z }, true)
    rbRef.current.applyTorqueImpulse({
      x: (Math.random() - 0.5) * impulse * 0.3,
      y: (Math.random() - 0.5) * impulse * 0.3,
      z: (Math.random() - 0.5) * impulse * 0.3,
    }, true)
  }, [])

  return (
    <RigidBody
      ref={rbRef}
      position={data.position.toArray() as [number, number, number]}
      quaternion={[data.quaternion.x, data.quaternion.y, data.quaternion.z, data.quaternion.w]}
      colliders="hull" restitution={0.3} friction={0.8} linearDamping={0.1} angularDamping={0.15}
    >
      <mesh geometry={data.geometry} material={data.material} />
    </RigidBody>
  )
}

function PhysicsSceneContent({ url, impulse }: { url: string; impulse: number }) {
  const gltf = useLoader(GLTFLoader, url)
  const { fragments, center } = useMemo(() => {
    const frags: FragData[] = []
    gltf.scene.updateWorldMatrix(true, true)
    gltf.scene.traverse(n => {
      if (!(n as THREE.Mesh).isMesh) return
      const mesh = n as THREE.Mesh
      const pos = new THREE.Vector3(); const quat = new THREE.Quaternion()
      mesh.getWorldPosition(pos); mesh.getWorldQuaternion(quat)
      frags.push({ geometry: mesh.geometry, material: mesh.material, position: pos, quaternion: quat })
    })
    const c = new THREE.Vector3()
    frags.forEach(f => c.add(f.position))
    if (frags.length) c.divideScalar(frags.length)
    return { fragments: frags, center: c }
  }, [gltf])

  return (
    <>
      <RigidBody type="fixed" position={[0, -3, 0]}>
        <CuboidCollider args={[15, 0.1, 15]} />
      </RigidBody>
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
      {fragments.map((frag, i) => (
        <PhysicsFragment key={i} data={frag} center={center} impulse={impulse} />
      ))}
    </>
  )
}

// ── Per-view canvas ───────────────────────────────────────────────────────────
// Canvas is keyed by runId + viewType so it remounts once per run (or view switch),
// never mid-run as individual compare URLs trickle in.

function ViewCanvas({ viewType, resultUrl, compareUrls, compareLoading, impulse, physicsKey, runId }: {
  viewType: ViewType; resultUrl: string | null; compareUrls: (string | null)[]
  compareLoading: boolean; impulse: number; physicsKey: number; runId: number
}) {
  const hasAnyCompare    = compareUrls.some(u => u !== null)
  const showCompare      = viewType === 'static' && (hasAnyCompare || compareLoading)
  const nothingYet       = !resultUrl && !hasAnyCompare && !compareLoading

  // Static view always gets the wide camera so it never jumps when URLs arrive
  const fov = viewType === 'static' ? 60 : 40
  const pos = viewType === 'static' ? [0, 2, 14] as const : [0, 1, 6] as const

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        key={`${runId}-${viewType}`}
        camera={{ fov, position: pos }}
        gl={{ antialias: true }} style={{ background: '#000000' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.4} castShadow />
        <Environment preset="city" />
        <OrbitControls makeDefault />

        {showCompare ? (
          <CompareStaticView urls={compareUrls} />
        ) : resultUrl ? (
          <Suspense fallback={null}>
            {viewType === 'dynamic'
              ? <Physics gravity={[0, -9.81, 0]} timeStep="vary" key={`${physicsKey}-${resultUrl}`}>
                  <PhysicsSceneContent url={resultUrl} impulse={impulse} />
                </Physics>
              : viewType === 'static'
                ? <StaticView key={resultUrl} url={resultUrl} />
                : <ExplodedView key={resultUrl} url={resultUrl} />
            }
          </Suspense>
        ) : null}
      </Canvas>

      {nothingYet && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2a2a3a', fontSize: 13, pointerEvents: 'none' }}>
          Shatter a shape to begin
        </div>
      )}
    </div>
  )
}

// ── ShatterLab ────────────────────────────────────────────────────────────────

export default function ShatterLab({ embedded }: { embedded?: boolean } = {}) {
  const [status,    setStatus]    = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message,   setMessage]   = useState('')
  const [fileName,  setFileName]  = useState('')
  const [resultUrl, setResultUrl] = useState<string | null>(null)

  const [pieces,         setPieces]         = useState(10)
  const [cutSpread,      setCutSpread]      = useState(0.5)
  const [fractureMethod, setFractureMethod] = useState<FractureMethod>('bisect')
  const [cutStrategy,    setCutStrategy]    = useState<CutStrategy>('random')
  const [voxelDiv,       setVoxelDiv]       = useState(30)
  const [adaptivity,     setAdaptivity]     = useState(0)
  const [impulse,        setImpulse]        = useState(1.5)

  const [view1, setView1] = useState<ViewType>('effect')
  // const [view2, setView2] = useState<ViewType | null>(null)
  const [physicsKey,    setPhysicsKey]    = useState(0)
  const [showAdvanced,  setShowAdvanced]  = useState(false)


  const [data,      setData]   = useState<DataRow[]>(SHATTER_DATA)
  const [draggingField,  setDraggingField]  = useState<DataField | null>(null)
  // 4 separate GLB URLs for the static comparison view (one per piece count)
  const [compareUrls,    setCompareUrls]    = useState<(string | null)[]>([null, null, null, null])
  const [compareLoading, setCompareLoading] = useState(false)
  const [runId,          setRunId]          = useState(0)
  const [presets,       setPresets]       = useState<SceneSave[]>(() => loadPresets())
  const [selPresetId,   setSelPresetId]   = useState('')
  const [saveName,      setSaveName]      = useState<string | null>(null)

  const fileRef   = useRef<File | null>(null)
  const isLoading = status === 'loading'

  const handleFile = useCallback((file: File) => {
    if (!file.name.endsWith('.glb') && !file.name.endsWith('.gltf')) return
    fileRef.current = file
    setFileName(file.name)
    setResultUrl(null); setStatus('idle'); setMessage('')
  }, [])

  useEffect(() => () => { if (resultUrl) URL.revokeObjectURL(resultUrl) }, [resultUrl])
  // Revoke old compare URLs when replaced (not on mount, only on cleanup)
  const prevCompareUrls = useRef<(string | null)[]>([null, null, null, null])
  useEffect(() => {
    const prev = prevCompareUrls.current
    prevCompareUrls.current = compareUrls
    prev.forEach(u => { if (u) URL.revokeObjectURL(u) })
  }, [compareUrls])

  const run = useCallback(async (shape: Shape) => {
    if (shape === 'model' && !fileRef.current) { setMessage('Drop a GLB first'); return }
    setStatus('loading'); setMessage('Blender is running…')
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setResultUrl(null)
    setCompareUrls([null, null, null, null])
    setCompareLoading(true)
    setRunId(id => id + 1)

    const fileForCompare = fileRef.current

    // Fire 4 fracture jobs in parallel and set ALL results at once — no incremental
    // state updates so the canvas never remounts mid-run.
    Promise.all(
      COMPARE_PIECES.map(async (pc) => {
        try {
          const p = { pieces: pc, cutSpread, cutStrategy, fractureMethod, voxelDiv, adaptivity }
          const qs = new URLSearchParams(Object.fromEntries(Object.entries(p).map(([k, v]) => [k, String(v)]))).toString()
          let res: Response
          if (shape === 'sphere')    res = await fetch(`${SERVER}/shatter/sphere?${qs}`)
          else if (shape === 'cube') res = await fetch(`${SERVER}/shatter/cube?${qs}`)
          else {
            const fd = new FormData()
            fd.append('model', fileForCompare!)
            Object.entries(p).forEach(([k, v]) => fd.append(k, String(v)))
            res = await fetch(`${SERVER}/shatter`, { method: 'POST', body: fd })
          }
          if (res.ok) return URL.createObjectURL(await res.blob())
          console.error(`[compare ${pc}] server error:`, res.status)
          return null
        } catch (e) {
          console.error(`[compare ${pc}] failed:`, e)
          return null
        }
      })
    ).then(urls => setCompareUrls(urls)).finally(() => setCompareLoading(false))

    // Main single-run job (used by effect and dynamic views)
    try {
      const params = { pieces, cutSpread, cutStrategy, fractureMethod, voxelDiv, adaptivity }
      const qs = new URLSearchParams(Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))).toString()
      let res: Response
      if (shape === 'sphere') {
        res = await fetch(`${SERVER}/shatter/sphere?${qs}`)
      } else if (shape === 'cube') {
        res = await fetch(`${SERVER}/shatter/cube?${qs}`)
      } else {
        const fd = new FormData()
        fd.append('model', fileRef.current!)
        Object.entries(params).forEach(([k, v]) => fd.append(k, String(v)))
        res = await fetch(`${SERVER}/shatter`, { method: 'POST', body: fd })
      }
      if (!res.ok) { const e = await res.json().catch(() => ({ error: res.statusText })); throw new Error(e.error ?? res.statusText) }
      setResultUrl(URL.createObjectURL(await res.blob()))
      setStatus('done'); setMessage('')
      setPhysicsKey(k => k + 1)
    } catch (e) {
      setStatus('error'); setMessage(e instanceof Error ? e.message : 'Unknown error')
    }
  }, [pieces, cutSpread, cutStrategy, fractureMethod, voxelDiv, adaptivity, resultUrl])

  const savePreset = useCallback((name: string) => {
    const save: SceneSave = {
      id: Date.now().toString(), name, createdAt: new Date().toISOString(),
      data: { fileName, pieces, cutSpread, fractureMethod, cutStrategy, voxelDiv, adaptivity, impulse },
    }
    const next = [save, ...presets]
    setPresets(next); persistPresets(next); setSelPresetId(save.id); setSaveName(null)
  }, [fileName, pieces, cutSpread, fractureMethod, cutStrategy, voxelDiv, adaptivity, impulse, presets])

  const loadPreset = useCallback((id: string) => {
    const p = presets.find(x => x.id === id); if (!p) return
    const d = p.data as Record<string, unknown>
    if (d.pieces        != null) setPieces(d.pieces as number)
    if (d.cutSpread     != null) setCutSpread(d.cutSpread as number)
    if (d.fractureMethod)        setFractureMethod(d.fractureMethod as FractureMethod)
    if (d.cutStrategy)           setCutStrategy(d.cutStrategy as CutStrategy)
    if (d.voxelDiv      != null) setVoxelDiv(d.voxelDiv as number)
    if (d.adaptivity    != null) setAdaptivity(d.adaptivity as number)
    if (d.impulse       != null) setImpulse(d.impulse as number)
    setStatus('idle'); setMessage('')
  }, [presets])

  const deletePreset = useCallback((id: string) => {
    const next = presets.filter(p => p.id !== id)
    setPresets(next); persistPresets(next)
    if (selPresetId === id) setSelPresetId('')
  }, [presets, selPresetId])

  const sl: React.CSSProperties = { width: '100%', accentColor: '#7070f5' }

  function SegBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
      <button onClick={onClick} style={{
        flex: 1, padding: '7px 0', fontSize: 10, borderRadius: 6, cursor: 'pointer',
        background: active ? '#22224a' : '#232330',
        color:      active ? '#a0a0ff' : '#666678',
        border:     active ? '1px solid #5050cc' : '1px solid #2c2c3c',
        fontWeight: active ? 600 : 400, fontFamily: 'inherit',
        transition: 'background 0.1s, color 0.1s, border-color 0.1s',
      }}>{children}</button>
    )
  }

  return (
    <div style={{ display: 'flex', height: embedded ? '100%' : '100vh', fontFamily: 'system-ui, sans-serif', background: '#000000', color: '#e0e0f0', position: 'relative' }}>



      {/* ── Left panel ── */}
      <div style={{ width: 268, flexShrink: 0, display: 'flex', flexDirection: 'column', borderRight: '1px solid #2c2c3c', background: '#383858', position: 'relative' }}>

        <LabAdvancedToggle open={showAdvanced} onToggle={() => setShowAdvanced(v => !v)} />

        <div style={{ flex: 1, padding: embedded ? '52px 16px 18px' : '18px 16px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>

          {!embedded && <LabNavTitle name="Shatter Lab" href="/shatter" />}

          <LabPresetRow
            presets={presets} selPresetId={selPresetId} saveName={saveName}
            defaultSaveName={`Shatter ${new Date().toLocaleDateString()}`}
            onSelect={loadPreset} onSave={savePreset} onDelete={() => deletePreset(selPresetId)}
            setSaveName={setSaveName} setSelPresetId={setSelPresetId}
          />

          {/* Main parameters */}
          <Sec>
            <SLabel>Effect</SLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RowLabel>Fracture method</RowLabel>
              <div style={{ display: 'flex', gap: 6 }}>
                <SegBtn active={fractureMethod === 'bisect'}  onClick={() => setFractureMethod('bisect')}>Bisect</SegBtn>
                <SegBtn active={fractureMethod === 'voronoi'} onClick={() => setFractureMethod('voronoi')}>Voronoi</SegBtn>
              </div>
              <div style={{ fontSize: 10, color: '#9898b8', lineHeight: 1.5 }}>
                {fractureMethod === 'voronoi' ? 'Natural crack patterns — best ≤ 50 pieces' : 'Sequential plane cuts — fast, any count'}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RowLabel>Pieces: {pieces}</RowLabel>
              <input
                type="range" min={2} max={200} step={1} value={pieces}
                onChange={e => setPieces(Number(e.target.value))}
                style={sl}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RowLabel>Size variation: {cutSpread.toFixed(2)}</RowLabel>
              <input type="range" min={0.05} max={1} step={0.05} value={cutSpread}
                onChange={e => setCutSpread(Number(e.target.value))} style={sl} />
              <div style={{ fontSize: 10, color: '#9898b8', lineHeight: 1.5 }}>0 = equal sizes · 1 = random sizes</div>
            </div>
          </Sec>

          <LabModelSection
            fileName={fileName} onFile={handleFile} onRun={() => run('model')}
            isLoading={isLoading} message={message} status={status} inputId="glb-shatter-input"
          />

        </div>

        <LabDataPanel
          data={data} draggingField={draggingField}
          onDragStart={setDraggingField} onDragEnd={() => setDraggingField(null)}
          onDataChange={setData}
        />
      </div>

      {/* ── Advanced panel (slides in over viewport) ── */}
      <LabAdvancedPanel open={showAdvanced}>
        <Sec>
          <SLabel>Quick Shapes</SLabel>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => run('sphere')} disabled={isLoading} style={secBtnSt(isLoading)}>Sphere</button>
            <button onClick={() => run('cube')}   disabled={isLoading} style={secBtnSt(isLoading)}>Cube</button>
          </div>
          <div style={{ fontSize: 9, color: '#9090b8', lineHeight: 1.5 }}>
            Run on a built-in shape without uploading a model.
          </div>
        </Sec>

        <Sec>
          <SLabel>Remesh (file only)</SLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <RowLabel>Voxel detail: {voxelDiv}</RowLabel>
            <input type="range" min={10} max={60} step={5} value={voxelDiv}
              onChange={e => setVoxelDiv(Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
            <div style={{ fontSize: 9, color: '#9090b8', lineHeight: 1.5 }}>Higher = sharper cuts, slower</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <RowLabel>Adaptivity: {adaptivity.toFixed(2)}</RowLabel>
            <input type="range" min={0} max={1} step={0.05} value={adaptivity}
              onChange={e => setAdaptivity(Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
            <div style={{ fontSize: 9, color: '#9090b8', lineHeight: 1.5 }}>Reduces polygons in flat areas</div>
          </div>
        </Sec>

        <Sec>
          <SLabel>Cut Strategy</SLabel>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['random', 'largest'] as const).map(s => (
              <button key={s} onClick={() => setCutStrategy(s)} style={{
                flex: 1, padding: '7px 0', fontSize: 10, borderRadius: 6, cursor: 'pointer',
                background: cutStrategy === s ? '#22224a' : '#232330',
                color:      cutStrategy === s ? '#a0a0ff' : '#666678',
                border:     cutStrategy === s ? '1px solid #5050cc' : '1px solid #2c2c3c',
                fontWeight: cutStrategy === s ? 600 : 400, fontFamily: 'inherit',
              }}>{s === 'random' ? 'Random' : 'Largest first'}</button>
            ))}
          </div>
          <div style={{ fontSize: 9, color: '#9090b8', lineHeight: 1.5 }}>Largest first → more uniform pieces</div>
        </Sec>

        <Sec>
          <SLabel>Physics (Dynamic view)</SLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <RowLabel>Impulse: {impulse.toFixed(1)}</RowLabel>
            <input type="range" min={0} max={5} step={0.1} value={impulse}
              onChange={e => setImpulse(Number(e.target.value))} style={{ width: '100%', accentColor: '#7070f5' }} />
            <div style={{ fontSize: 9, color: '#9090b8', lineHeight: 1.5 }}>How hard pieces fly apart</div>
          </div>
          {resultUrl && (
            <button onClick={() => setPhysicsKey(k => k + 1)} style={secBtnSt(false)}>↺ Restart physics</button>
          )}
        </Sec>
      </LabAdvancedPanel>

      {/* ── Viewport ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

        <div style={{ flex: 1, position: 'relative' }}>
          <ViewCanvas
            viewType={view1} resultUrl={resultUrl} compareUrls={compareUrls}
            compareLoading={compareLoading} impulse={impulse} physicsKey={physicsKey} runId={runId}
          />
        </div>

        {/* LEGACY two-view split — commented out
        {view2 !== null && (
          <div style={{ flex: 1, position: 'relative', borderTop: '1px solid #1e1e2a' }}>
            <ViewCanvas
              viewType={view2} resultUrl={resultUrl} compareUrls={compareUrls}
              compareLoading={compareLoading} impulse={impulse} physicsKey={physicsKey} runId={runId}
            />
          </div>
        )}
        <LabViewSelector
          view1={view1} view2={view2}
          onView1={v => setView1(v)} onView2={v => setView2(v)}
          onAdd={() => setView2(view1 === 'effect' ? 'dynamic' : 'effect')}
          onRemove={() => setView2(null)}
        />
        */}

        <LabViewToggle view={view1} onChange={setView1} />
      </div>
    </div>
  )
}
