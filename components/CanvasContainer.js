import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll } from '@react-three/drei'

export default function CanvasContainer({ children }) {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={3}>
          {children}
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
