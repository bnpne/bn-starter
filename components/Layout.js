import MetaTags from './MetaTags'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <MetaTags title="" desc="" />
      <main>{children}</main>
    </div>
  )
}
