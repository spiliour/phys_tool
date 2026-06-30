"""
shatter.py  —  Blender 4.x headless fracture
Supports two methods:
  bisect  — sequential random-plane cuts (fast, good for many pieces)
  voronoi — proper Voronoi tessellation via half-plane intersection + boolean (natural looking)
Usage: blender --background --python shatter.py -- <input|SPHERE|CUBE> <output.glb> [pieces] [spread] [voxelDiv] [strategy] [adaptivity] [method]
"""

import bpy
import bmesh
import mathutils
import random
import math
import sys

# ── Args ──────────────────────────────────────────────────────────────────────

argv = sys.argv
try:
    args = argv[argv.index('--') + 1:]
except ValueError:
    print("ERROR: no args after '--'"); sys.exit(1)

input_path      = args[0]
output_path     = args[1]
n_pieces        = int(args[2])   if len(args) > 2 else 10
cut_spread      = float(args[3]) if len(args) > 3 else 0.5
voxel_div       = int(args[4])   if len(args) > 4 else 30
cut_strategy    = args[5]        if len(args) > 5 else 'random'
adaptivity      = float(args[6]) if len(args) > 6 else 0.0
fracture_method = args[7]        if len(args) > 7 else 'bisect'   # 'bisect' | 'voronoi'

print(f"[shatter] method={fracture_method} pieces={n_pieces} spread={cut_spread} strategy={cut_strategy}")

# ── Clear scene ───────────────────────────────────────────────────────────────

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# ── Create or import source ───────────────────────────────────────────────────

if input_path == 'SPHERE':
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1.0, segments=32, ring_count=16)
elif input_path == 'CUBE':
    bpy.ops.mesh.primitive_cube_add(size=2.0)
else:
    bpy.ops.import_scene.gltf(filepath=input_path)
    meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
    if not meshes:
        print("ERROR: no meshes in GLB"); sys.exit(1)
    bpy.ops.object.select_all(action='DESELECT')
    for m in meshes: m.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.join()

source = bpy.context.active_object
source.name = 'Source'

# Normalise to 2 units, centred at origin
bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
bbox    = [source.matrix_world @ mathutils.Vector(c) for c in source.bound_box]
xs      = [v.x for v in bbox]; ys = [v.y for v in bbox]; zs = [v.z for v in bbox]
max_dim = max(max(xs)-min(xs), max(ys)-min(ys), max(zs)-min(zs), 0.001)
source.scale = (2/max_dim,)*3
bpy.ops.object.transform_apply(scale=True)
bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
source.location = (0, 0, 0)
bpy.ops.object.transform_apply(location=True)

# Voxel remesh for file imports (makes mesh solid/manifold for clean cuts)
if input_path not in ('SPHERE', 'CUBE'):
    mod = source.modifiers.new('Remesh', type='REMESH')
    mod.mode         = 'VOXEL'
    mod.voxel_size   = 2.0 / voxel_div
    mod.adaptivity   = max(0.0, min(1.0, adaptivity))
    mod.use_smooth_shade = False
    bpy.ops.object.modifier_apply(modifier=mod.name)
    print(f"[shatter] After remesh: {len(source.data.vertices)} verts")

print(f"[shatter] Source ready: {len(source.data.vertices)} verts")

# ─────────────────────────────────────────────────────────────────────────────
# METHOD 1 — BISECT
# Sequential plane cuts: each cut duplicates a piece and keeps opposite halves.
# Fast. Good for large piece counts.
# ─────────────────────────────────────────────────────────────────────────────

def cut_object(obj, plane_co, plane_no):
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.duplicate()
    inner = bpy.context.active_object

    for half, clear_inner, clear_outer in [(obj, True, False), (inner, False, True)]:
        bpy.context.view_layer.objects.active = half
        bpy.ops.object.mode_set(mode='EDIT')
        bm = bmesh.from_edit_mesh(half.data)
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:]+bm.edges[:]+bm.faces[:],
                               plane_co=plane_co, plane_no=plane_no,
                               clear_inner=clear_inner, clear_outer=clear_outer)
        boundary = [e for e in bm.edges if e.is_boundary]
        if boundary:
            bmesh.ops.triangle_fill(bm, edges=boundary, use_beauty=True)
        bmesh.update_edit_mesh(half.data)
        bpy.ops.object.mode_set(mode='OBJECT')

    if len(obj.data.vertices) == 0:
        bpy.data.objects.remove(obj); return inner, None
    if len(inner.data.vertices) == 0:
        bpy.data.objects.remove(inner); return obj, None
    return obj, inner


def fracture_bisect(source, n_pieces, cut_spread, cut_strategy):
    pieces = [source]
    n_cuts = n_pieces - 1
    sigma  = cut_spread * 0.5

    for i in range(n_cuts):
        target = (max(pieces, key=lambda o: len(o.data.vertices))
                  if cut_strategy == 'largest' else random.choice(pieces))
        pieces.remove(target)

        phi    = random.uniform(0, 2 * math.pi)
        theta  = random.uniform(0, math.pi)
        normal = mathutils.Vector((
            math.sin(theta) * math.cos(phi),
            math.sin(theta) * math.sin(phi),
            math.cos(theta),
        )).normalized()
        plane_co = mathutils.Vector((
            random.gauss(0, sigma),
            random.gauss(0, sigma),
            random.gauss(0, sigma),
        ))

        outer, inner = cut_object(target, plane_co, normal)
        pieces.append(outer)
        if inner: pieces.append(inner)
        print(f"  cut {i+1}/{n_cuts}: {len(pieces)} pieces")

    return pieces


# ─────────────────────────────────────────────────────────────────────────────
# METHOD 2 — VORONOI
# For each seed point, build its Voronoi cell by clipping a large cube with
# all perpendicular-bisector half-planes, then boolean-intersect with source.
# Produces natural, organic crack patterns.
# Slower than bisect (O(N²) clips + N booleans). Recommended for ≤ 50 pieces.
# ─────────────────────────────────────────────────────────────────────────────

def voronoi_cell_mesh(seed_idx, seeds):
    """
    Build the Voronoi cell for seeds[seed_idx] as a bmesh cube clipped by
    perpendicular-bisector planes from all other seeds.
    """
    # Start with a cube large enough to cover the whole normalised object
    bpy.ops.mesh.primitive_cube_add(size=6.0, location=(0, 0, 0))
    cell_obj = bpy.context.active_object
    cell_obj.name = f'VCell_{seed_idx}'

    bpy.ops.object.mode_set(mode='EDIT')
    bm = bmesh.from_edit_mesh(cell_obj.data)

    seed = seeds[seed_idx]
    for j, other in enumerate(seeds):
        if j == seed_idx:
            continue
        # Perpendicular bisector plane: midpoint + normal pointing toward 'other'
        mid    = (seed + other) / 2.0
        normal = other - seed          # points away from our seed
        bmesh.ops.bisect_plane(
            bm,
            geom=bm.verts[:] + bm.edges[:] + bm.faces[:],
            plane_co=mathutils.Vector(mid),
            plane_no=mathutils.Vector(normal),
            clear_outer=True,          # remove the half closer to 'other'
            clear_inner=False,
        )
        boundary = [e for e in bm.edges if e.is_boundary]
        if boundary:
            bmesh.ops.triangle_fill(bm, edges=boundary, use_beauty=True)

    bmesh.update_edit_mesh(cell_obj.data)
    bpy.ops.object.mode_set(mode='OBJECT')
    return cell_obj


def fracture_voronoi(source, n_pieces, cut_spread):
    # Generate seed points.
    # cut_spread controls distribution: 0 = clustered at centre, 1 = spread across full object.
    spread = 0.1 + cut_spread * 0.85   # map [0,1] → [0.1, 0.95]
    seeds  = [mathutils.Vector((
        random.uniform(-spread, spread),
        random.uniform(-spread, spread),
        random.uniform(-spread, spread),
    )) for _ in range(n_pieces)]

    fragments = []

    for i, seed in enumerate(seeds):
        print(f"  Voronoi cell {i+1}/{n_pieces}…")

        cell_obj = voronoi_cell_mesh(i, seeds)

        if len(cell_obj.data.vertices) == 0:
            bpy.data.objects.remove(cell_obj)
            continue

        # Boolean INTERSECT: cell ∩ source  →  one fragment
        bool_mod            = cell_obj.modifiers.new('Bool', type='BOOLEAN')
        bool_mod.operation  = 'INTERSECT'
        bool_mod.object     = source
        bool_mod.solver     = 'FAST'

        bpy.context.view_layer.objects.active = cell_obj
        try:
            bpy.ops.object.modifier_apply(modifier=bool_mod.name)
        except Exception as e:
            print(f"  Boolean failed for cell {i}: {e}")
            bpy.data.objects.remove(cell_obj)
            continue

        if len(cell_obj.data.vertices) > 0:
            fragments.append(cell_obj)
        else:
            bpy.data.objects.remove(cell_obj)

    # Remove the original source (cells hold the fragments now)
    bpy.data.objects.remove(source)

    print(f"[shatter] Voronoi: {len(fragments)} valid cells from {n_pieces} seeds")
    return fragments


# ── Run chosen method ─────────────────────────────────────────────────────────

if fracture_method == 'voronoi':
    pieces = fracture_voronoi(source, n_pieces, cut_spread)
else:
    pieces = fracture_bisect(source, n_pieces, cut_spread, cut_strategy)

if not pieces:
    print("ERROR: no fragments produced"); sys.exit(1)

print(f"[shatter] DONE: {len(pieces)} pieces")

# ── Export ────────────────────────────────────────────────────────────────────

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)

bpy.ops.export_scene.gltf(
    filepath=output_path,
    export_format='GLB',
    use_selection=True,
    export_animations=False,
)

print(f"[shatter] SUCCESS → {output_path}")
