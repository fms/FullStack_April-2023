import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function MainNavBar() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default MainNavBar