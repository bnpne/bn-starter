import React from 'react'
import CanvasContainer from '../components/CanvasContainer'
import Layout from '../components/Layout'
import { Preload, ScrollControls, Scroll, useScroll } from '@react-three/drei'

export default function Index() {
  return (
    <div>
      <Layout>
        <CanvasContainer>
          <Scroll html>Hello</Scroll>
        </CanvasContainer>
      </Layout>
    </div>
  )
}
