import MetaTags from './MetaTags'
import React from 'react'
import CanvasContainer from './CanvasContainer'
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Layout({ children }) {
  return (
    <div>
      <MetaTags title="" desc="" />
      <main>
        <CanvasContainer>
          <Scroll>{children}</Scroll>
        </CanvasContainer>
      </main>
    </div>
  )
}
