import React from 'react'
import NavBarSettings from '../components/NavBarSettings/NavBarSettings'
import { Outlet } from 'react-router-dom'

function SettingsNavBar() {
  return (
    <>
    <NavBarSettings />
    <Outlet />
    </>
  )
}

export default SettingsNavBar