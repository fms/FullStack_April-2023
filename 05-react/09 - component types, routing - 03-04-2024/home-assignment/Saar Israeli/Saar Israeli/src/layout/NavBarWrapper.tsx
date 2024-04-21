import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function NavBarWrapper() {
  return (
    <>
    <NavBar ></NavBar>
    <Outlet ></Outlet>
    </>
  )
}

export default NavBarWrapper