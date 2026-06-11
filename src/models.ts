import { MarkShape } from './types'

// Auto-discovers GLB/GLTF files dropped into src/assets/models/.
// Vite HMR picks up new files without a full restart.
const glbMap = import.meta.glob('./assets/models/*.{glb,gltf}', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

export interface ModelPreset {
  name: string
  url:  string
}

export const MODEL_PRESETS: ModelPreset[] = Object.entries(glbMap)
  .map(([path, url]) => ({
    name: path.replace(/^.*\//, '').replace(/\.(glb|gltf)$/i, ''),
    url,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

// Re-resolve a custom model config after loading from a save.
// Blob URLs expire when the page is closed, so user-imported files fall back to box.
// Preset models are re-resolved by name from the current MODEL_PRESETS list.
export function resolveCustomModel<T extends {
  shape: MarkShape
  customModelUrl?:    string
  customModelHasMat?: boolean
  customModelName?:   string
}>(config: T): T {
  if (config.shape !== 'custom') return config
  const preset = MODEL_PRESETS.find(p => p.name === config.customModelName)
  if (preset) return { ...config, customModelUrl: preset.url }
  // Blob URLs are session-only — fall back to box
  if (!config.customModelUrl || config.customModelUrl.startsWith('blob:')) {
    return { ...config, shape: 'box' as MarkShape, customModelUrl: undefined, customModelHasMat: undefined }
  }
  return config
}
