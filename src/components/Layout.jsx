import React from 'react'
import Nav from './Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}

export default Layout