import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { MarkShape, MarkMaterial, StructuralConfig, Vec3 } from './types'
import { makeMarkGeometry } from './markGeometry'
import { MarkMaterialElement } from './MarkMaterial'

export interface LayerLabelData {
  top?:    string
  bottom?: string
  left?:   string
  right?:  string
}

interface LayerProps {
  width:        number
  depth:        number
  height:       number
  color:        string
  position:     [number, number, number]
  particleCount: number
  markShape:    MarkShape
  markMaterial: MarkMaterial
  markSize?:    Vec3             // size multiplier (1,1,1 = default)
  structural?:  StructuralConfig // deformation settings
  labelShow:    boolean
  labelData:    LayerLabelData
}

const DEFAULT_SIZE: Vec3             = { x: 1, y: 1, z: 1 }
const DEFAULT_STRUCTURAL: StructuralConfig = { deformation: 'none', fluidDistort: 0.35, fluidSpeed: 1.5 }

const shadow = '0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)'

export function Layer({
  width, depth, height, color, position,
  particleCount, markShape, markMaterial,
  markSize = DEFAULT_SIZE, structural = DEFAULT_STRUCTURAL,
  labelShow, labelData,
}: LayerProps) {
  const instanceRef = useRef<THREE.InstancedMesh>(null)

  const geo = useMemo(() => makeMarkGeometry(markShape), [markShape])

  const edgesGeo = useMemo(() => {
    const box   = new THREE.BoxGeometry(width, height, depth)
    const edges = new THREE.EdgesGeometry(box)
    box.dispose()
    return edges
  }, [width, height, depth])

  // Scatter instance matrices when count, bounds, shape, or size change.
  // The instancedMesh remounts via key when count/shape/deformation change.
  useEffect(() => {
    const mesh = instanceRef.current
    if (!mesh) return
    const dummy = new THREE.Object3D()
    const hw = width  * 0.47
    const hh = height * 0.46
    const hd = depth  * 0.47
    for (let i = 0; i < particleCount; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 2 * hw,
        (Math.random() - 0.5) * 2 * hh,
        (Math.random() - 0.5) * 2 * hd,
      )
      dummy.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      )
      // Random base scale × user size multiplier
      dummy.scale.set(
        (0.5 + Math.random() * 1.1) * markSize.x,
        (0.4 + Math.random() * 1.2) * markSize.y,
        (0.5 + Math.random() * 1.1) * markSize.z,
      )
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  }, [particleCount, width, depth, height, markShape, markSize.x, markSize.y, markSize.z])

  useEffect(() => () => { geo.dispose() },     [geo])
  useEffect(() => () => { edgesGeo.dispose() }, [edgesGeo])

  const dash = `${color}5a`

  return (
    <group position={position}>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#666666" transparent opacity={0.7} />
      </lineSegments>

      {/*
        key drives instancedMesh remount when particle count, shape, or
        deformation mode changes — ensures the constructor gets the right count
        and the material reconciles cleanly between deformation types.
      */}
      <instancedMesh
        key={`${particleCount}-${markShape}-${structural.deformation}`}
        ref={instanceRef}
        args={[geo, undefined, particleCount]}
      >
        <MarkMaterialElement
          material={markMaterial}
          structural={structural}
          color={color}
        />
      </instancedMesh>

      {labelShow && (
        <>
          {labelData.top    && (
            <>
              <group position={[0, height / 2 + 0.3, 0]} userData={{ isLabel: true, labelText: labelData.top,    labelPos: 'top'    }} />
              <Html position={[0, height / 2 + 0.3, 0]} center style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.top}
                </span>
              </Html>
            </>
          )}
          {labelData.bottom && (
            <>
              <group position={[0, -(height / 2 + 0.3), 0]} userData={{ isLabel: true, labelText: labelData.bottom, labelPos: 'bottom' }} />
              <Html position={[0, -(height / 2 + 0.3), 0]} center style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none' }}>
                  {labelData.bottom}
                </span>
              </Html>
            </>
          )}
          {labelData.left   && (
            <>
              <group position={[-(width / 2 + 0.2), 0, 0]} userData={{ isLabel: true, labelText: labelData.left,   labelPos: 'left'   }} />
              <Html position={[-(width / 2 + 0.2), 0, 0]} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', textAlign: 'right', transform: 'translate(-100%, -50%)' }}>
                  {labelData.left}
                </span>
              </Html>
            </>
          )}
          {labelData.right  && (
            <>
              <group position={[width / 2 + 0.2, 0, 0]} userData={{ isLabel: true, labelText: labelData.right,  labelPos: 'right'  }} />
              <Html position={[width / 2 + 0.2, 0, 0]} style={{ pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', color: '#e0e0e0', fontFamily: 'Courier New, monospace', textShadow: shadow, whiteSpace: 'nowrap', userSelect: 'none', display: 'block', transform: 'translateY(-50%)' }}>
                  {labelData.right}
                </span>
              </Html>
            </>
          )}
        </>
      )}
    </group>
  )
}
