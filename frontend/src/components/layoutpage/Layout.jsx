import React from 'react'
import Header from '../layout/Header'
import ScrollDown from '../layout/ScrollDown'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>
        <ScrollDown/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout