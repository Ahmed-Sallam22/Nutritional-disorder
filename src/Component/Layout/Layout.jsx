import React from 'react'
import NavBAr from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'


export default function Layout() {
  return <>
  <Navbar/>
  <div className="container-fluid mt-5">
    
  <Outlet></Outlet>
  </div>
  <Footer/>
  </>
}
