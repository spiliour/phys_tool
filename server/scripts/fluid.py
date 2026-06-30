"""
fluid.py — Blender 4.x headless Mantaflow liquid simulation
Usage: blender --background --python fluid.py -- <output.json> <resolution> <frame_end> <viscosity> [obstacle_glb]

viscosity: water | honey | lava
Prints: FLUID_BAKING, FLUID_BAKE_DONE, FLUID_PROGRESS:n/total, FLUID_DONE
"""

import bpy
import bmesh
import json
import sys
import os
import shutil
from mathutils import Vector

# ── Args ──────────────────────────────────────────────────────────────────────

argv = sys.argv
try:
    args = argv[argv.index('--') + 1:]
except ValueError:
    print("ERROR: no args after '--'"); sys.exit(1)

output_json   = args[0]
resolution    = int(args[1])   if len(args) > 1 else 24
frame_end     = int(args[2])   if len(args) > 2 else 60
viscosity     = args[3]        if len(args) > 3 else 'water'
obstacle_path = args[4]        if len(args) > 4 else None

print(f"[fluid] resolution={resolution}  frames={frame_end}  viscosity={viscosity}  obstacle={obstacle_path}", flush=True)

VISC = {
    'water': (1, 6),
    'honey': (2, 3),
    'lava':  (1, 0),
}
visc_val, visc_exp = VISC.get(viscosity, (1, 6))

cache_dir = output_json.replace('.json', '_cache')
os.makedirs(cache_dir, exist_ok=True)

# ── Helper: add fluid modifier via data API (avoids Blender 4.x operator enum bug) ──

def add_fluid(obj, fluid_type):
    """Add Mantaflow fluid modifier to obj and return it. fluid_type: DOMAIN | FLOW | EFFECTOR"""
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    mod = obj.modifiers.new(name='Fluid', type='FLUID')
    if mod is None:
        print(f"ERROR: could not add FLUID modifier to {obj.name} (type={obj.type})", flush=True)
        sys.exit(1)
    mod.fluid_type = fluid_type
    return mod

# ── Clear scene ───────────────────────────────────────────────────────────────

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

scene = bpy.context.scene
scene.frame_start = 1
scene.frame_end   = frame_end

# ── Domain ────────────────────────────────────────────────────────────────────

bpy.ops.mesh.primitive_cube_add(size=4.0, location=(0, 0, 0))
domain = bpy.context.active_object
domain.name = 'FluidDomain'

fluid_mod = add_fluid(domain, 'DOMAIN')
ds = fluid_mod.domain_settings
ds.domain_type        = 'LIQUID'
ds.resolution_max     = resolution
ds.use_adaptive_domain = False
ds.cache_directory    = cache_dir
ds.cache_type         = 'MODULAR'

if viscosity in ('honey', 'lava'):
    ds.use_viscosity      = True
    ds.viscosity_value    = visc_val
    ds.viscosity_exponent = visc_exp

print(f"[fluid] domain ready  cache={cache_dir}", flush=True)

# ── Inflow ────────────────────────────────────────────────────────────────────

bpy.ops.mesh.primitive_uv_sphere_add(radius=0.4, location=(0.2, 0.1, 1.5))
inflow = bpy.context.active_object
inflow.name = 'Inflow'

inflow_mod = add_fluid(inflow, 'FLOW')
fs = inflow_mod.flow_settings
fs.flow_type          = 'LIQUID'
fs.flow_behavior      = 'INFLOW'
fs.use_initial_velocity = True
fs.velocity_factor    = -2.0

print(f"[fluid] inflow ready", flush=True)

# ── Optional obstacle ─────────────────────────────────────────────────────────

if obstacle_path and os.path.exists(obstacle_path):
    # Record existing objects so we can identify imported ones
    before = {o.name for o in scene.objects}

    bpy.ops.import_scene.gltf(filepath=obstacle_path)

    # Collect newly imported MESH objects (GLTF root is often an EMPTY — skip it)
    imported_meshes = [
        o for o in scene.objects
        if o.name not in before and o.type == 'MESH'
    ]

    if not imported_meshes:
        print(f"WARNING: no mesh objects found in {obstacle_path}, skipping obstacle", flush=True)
    else:
        # Deselect all, select only the imported meshes, then join
        bpy.ops.object.select_all(action='DESELECT')
        for o in imported_meshes:
            o.select_set(True)
        bpy.context.view_layer.objects.active = imported_meshes[0]

        if len(imported_meshes) > 1:
            bpy.ops.object.join()

        obs = bpy.context.active_object
        obs.name = 'Obstacle'

        # Normalise scale
        bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        bbox = [obs.matrix_world @ Vector(c) for c in obs.bound_box]
        mn = Vector(map(min, zip(*bbox)))
        mx = Vector(map(max, zip(*bbox)))
        sz = mx - mn
        sc = 1.4 / max(sz.x, sz.y, sz.z, 0.001)
        obs.scale *= sc
        bpy.ops.object.transform_apply(scale=True)
        obs.location = (0, 0, -0.5)

        obs_mod = add_fluid(obs, 'EFFECTOR')
        obs_mod.effector_settings.effector_type = 'COLLISION'
        print(f"[fluid] obstacle ready  meshes={len(imported_meshes)}", flush=True)

# ── Bake ──────────────────────────────────────────────────────────────────────

print("FLUID_BAKING", flush=True)
bpy.context.view_layer.objects.active = domain
bpy.context.view_layer.update()

try:
    with bpy.context.temp_override(active_object=domain):
        result = bpy.ops.fluid.bake_all()
    print(f"[fluid] bake result: {result}", flush=True)
    if 'FINISHED' not in result:
        print(f"ERROR: bake returned {result}", flush=True)
        sys.exit(1)
except RuntimeError as e:
    print(f"ERROR: bpy.ops.fluid.bake_all() raised RuntimeError: {e}", flush=True)
    sys.exit(1)

print("FLUID_BAKE_DONE", flush=True)

# ── Export frames ─────────────────────────────────────────────────────────────

depsgraph = bpy.context.evaluated_depsgraph_get()
all_frames = []

for i, frame in enumerate(range(1, frame_end + 1)):
    scene.frame_set(frame)
    bpy.context.view_layer.update()
    depsgraph.update()

    eval_domain = domain.evaluated_get(depsgraph)
    mesh = eval_domain.to_mesh()

    if mesh is None or len(mesh.vertices) == 0:
        all_frames.append({'p': [], 'i': []})
        eval_domain.to_mesh_clear()
        print(f"FLUID_PROGRESS:{i+1}/{frame_end}", flush=True)
        continue

    bm = bmesh.new()
    bm.from_mesh(mesh)
    bmesh.ops.triangulate(bm, faces=bm.faces[:])
    bm.to_mesh(mesh)
    bm.free()
    mesh.update()

    positions = [round(c, 3) for v in mesh.vertices for c in (v.co.x, v.co.y, v.co.z)]
    indices   = [vi for poly in mesh.polygons if len(poly.vertices) == 3 for vi in poly.vertices]

    all_frames.append({'p': positions, 'i': indices})
    eval_domain.to_mesh_clear()
    print(f"FLUID_PROGRESS:{i+1}/{frame_end}", flush=True)

# ── Write output ──────────────────────────────────────────────────────────────

result = {
    'frameCount': len(all_frames),
    'fps':        24,
    'viscosity':  viscosity,
    'frames':     all_frames,
}

with open(output_json, 'w') as f:
    json.dump(result, f, separators=(',', ':'))

shutil.rmtree(cache_dir, ignore_errors=True)

print(f"FLUID_DONE:{output_json}", flush=True)
