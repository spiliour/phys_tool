import * as THREE from 'three'
import { MarkShape } from './types'

export const MARK_BASE = 0.072

export function makeMarkGeometry(shape: MarkShape): THREE.BufferGeometry {
  switch (shape) {
    case 'sphere':
      return new THREE.SphereGeometry(MARK_BASE * 0.52, 8, 6)

    case 'star': {
      const outer = MARK_BASE * 0.64
      const inner = MARK_BASE * 0.25
      const depth = MARK_BASE * 0.42
      const sh = new THREE.Shape()
      for (let i = 0; i < 10; i++) {
        const a = (i * Math.PI * 2) / 10 - Math.PI / 2
        const r = i % 2 === 0 ? outer : inner
        if (i === 0) sh.moveTo(Math.cos(a) * r, Math.sin(a) * r)
        else sh.lineTo(Math.cos(a) * r, Math.sin(a) * r)
      }
      sh.closePath()
      const geo = new THREE.ExtrudeGeometry(sh, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.004,
        bevelSize: 0.004,
        bevelSegments: 1,
      })
      geo.translate(0, 0, -depth / 2)
      return geo
    }

    default: // 'box' | 'custom' (custom uses GLTF separately; this box is a placeholder)
      return new THREE.BoxGeometry(MARK_BASE, MARK_BASE, MARK_BASE)
  }
}
