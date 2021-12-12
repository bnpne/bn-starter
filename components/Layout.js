import MetaTags from './MetaTags'
import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <MetaTags title="" desc="" />
      <main className="w-full">{children}</main>
    </>
  )
}
