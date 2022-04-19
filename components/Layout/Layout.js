
import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <>
      <Navbar/>
      <main>{loadGetInitialProps.children}</main>
    </>
  )
}

export default Layout