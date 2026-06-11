import { Layer } from './Layer'
import { LayerData, MarkShape, MarkMaterial } from './types'

interface LayersProps {
  layers:       LayerData[]
  density:      number
  markShape:    MarkShape
  markMaterial: MarkMaterial
  showLabels:   boolean
}

const SCENE_WIDTH = 6.5
const SCENE_DEPTH = 4.0
const TOTAL_HEIGHT = 9.0
const GAP = 0.1
const BASE_PARTICLES_PER_UNIT = 140

export function Layers({ layers, density, markShape, markMaterial, showLabels }: LayersProps) {
  if (layers.length === 0) return null
  const totalWeight = layers.reduce((s, l) => s + Math.max(0, l.percentage), 0)
  if (totalWeight === 0) return null

  const usableHeight = TOTAL_HEIGHT - GAP * (layers.length - 1)

  const reversed = [...layers].reverse()
  let currentY = -TOTAL_HEIGHT / 2
  const computed = reversed.map((layer) => {
    const h   = (Math.max(0, layer.percentage) / totalWeight) * usableHeight
    const y   = currentY + h / 2
    currentY += h + GAP
    const pct = (Math.max(0, layer.percentage) / totalWeight) * 100
    return { layer, height: h, y, pct }
  })

  return (
    <group>
      {computed.map(({ layer, height, y, pct }) => (
        <Layer
          key={layer.id}
          width={SCENE_WIDTH}
          depth={SCENE_DEPTH}
          height={height}
          color={layer.color}
          position={[0, y, 0]}
          particleCount={Math.max(10, Math.round(layer.percentage * BASE_PARTICLES_PER_UNIT * density))}
          markShape={markShape}
          markMaterial={markMaterial}
          labelShow={showLabels}
          labelData={showLabels ? { left: layer.name, right: `${pct.toFixed(1)}%` } : {}}
        />
      ))}
    </group>
  )
}
