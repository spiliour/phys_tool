// ── Composition hierarchy ─────────────────────────────────────────────────────
export type CompositionLevel = 1 | 2 | 3
export type ActiveElement = 'mark' | 'collection1' | 'collection2' | 'scene'

// ── Shared primitives ─────────────────────────────────────────────────────────
export interface Vec3 {
  x: number
  y: number
  z: number
}

// ── Mark ─────────────────────────────────────────────────────────────────────
export type MarkShape    = 'box' | 'sphere' | 'star' | 'custom'
export type MarkMaterial = 'plastic' | 'fluid' | 'metal' | 'emissive' | 'original'

// Structural deformation applied to mark geometry
export type StructuralDeformation = 'none' | 'fluid'

export interface StructuralConfig {
  deformation: StructuralDeformation
  fluidDistort: number  // wave amplitude  0.0 – 0.8
  fluidSpeed:   number  // wave speed      0.0 – 5.0
}

export interface MarkConfig {
  // Geometry
  shape: MarkShape
  // Material
  material: MarkMaterial
  color: string
  // Spatial (applied directly at Level 1; used as instance-scale multipliers at Levels 2–3)
  position:    Vec3   // scene-space offset from origin
  size:        Vec3   // scale multipliers (1 = default size)
  orientation: Vec3   // rotation in degrees
  // Structural deformation
  structural: StructuralConfig
  // Custom model (only when shape === 'custom')
  customModelUrl?:    string
  customModelHasMat?: boolean
  customModelName?:   string   // display name; also used as preset lookup key on load
}

// ── Collection ────────────────────────────────────────────────────────────────
export type CollectionArrangement = 'alignment' | 'scattering' | 'stacking' | 'piling'

export interface CollectionConfig {
  arrangement:       CollectionArrangement
  color:             string
  // Alignment — marks in a line
  alignCount:        number    // 2–20
  alignAxis:         'X' | 'Y'
  alignSpacing:      number    // center-to-center gap (world units)
  alignAnchor:       'start' | 'center' | 'end'  // edge alignment: start=top/left, end=bottom/right
  // Scattering — marks randomly distributed in a box
  scatterCount:      number    // mark count at Level 2
  scatterDimensions: Vec3      // bounding box
  scatterDensity:    number    // density multiplier (used for Level 3 layer bands)
  // Piling — physics-settled pile
  pilingCount:       number    // number of marks to drop (default 10)
}

// ── Scene ─────────────────────────────────────────────────────────────────────
export type HdriPreset =
  | 'city' | 'warehouse' | 'sunset' | 'dawn'
  | 'forest' | 'night' | 'studio' | 'apartment'

export type BackgroundMode = 'dark' | 'ocean'

export interface SceneConfig {
  background:  BackgroundMode
  hdriPreset:  HdriPreset
  focalLength: number
}

// ── Label configuration ───────────────────────────────────────────────────────
export type LabelPosition = 'top' | 'bottom' | 'left' | 'right'

export interface LabelSlots {
  top:    DataVariable | null
  bottom: DataVariable | null
  left:   DataVariable | null
  right:  DataVariable | null
}

// ── Data bindings ─────────────────────────────────────────────────────────────
export type DataVariable = 'weight' | 'garbageType' | 'count'

export interface DataBindings {
  markColor:    'garbageType' | null
  scatterSize:  'weight'      | null
  c1AlignCount: 'count'       | null
  c2AlignCount: 'count'       | null
  markSizeX:    DataVariable  | null
  markSizeY:    DataVariable  | null
  markSizeZ:    DataVariable  | null
}

export interface LabelConfig {
  show:  boolean
  slots: LabelSlots
}

// ── Decoration ────────────────────────────────────────────────────────────────
export interface DecorationConfig {
  id:           string
  shape:        MarkShape
  material:     MarkMaterial
  color:        string
  position:     Vec3
  size:         Vec3
  orientation:  Vec3
  structural:   StructuralConfig
  customModelUrl?:    string
  customModelHasMat?: boolean
  customModelName?:   string
}

// ── Legacy (kept for existing Scene / Layer components) ───────────────────────
export interface LayerData {
  id:         string
  name:       string
  percentage: number
  color:      string
}

export interface SphereData {
  id:    string
  label: string
  value: number
  color: string
}

export type ExampleMode = 'layers' | 'fluid'
