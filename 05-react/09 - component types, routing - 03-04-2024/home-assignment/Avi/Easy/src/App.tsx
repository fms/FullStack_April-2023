import React from 'react'
import { BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom'
import UserPage from './components/UserPage/UserPage'
import Users from './components/UsersNavBar/UsersNavBar'

function App() {
  const router = createBrowserRouter([
    { path: "/user/:id", element: <UserPage /> }
  ])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Users />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App