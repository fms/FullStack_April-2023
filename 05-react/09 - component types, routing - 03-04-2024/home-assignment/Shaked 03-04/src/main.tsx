import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import Home from './Pages/Home'
import UserPage from './Pages/User/UserPage'
import UsersPage from './Pages/User/UsersPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/user/:id", element: <UserPage /> },

  { path: '*', element: <p>Sorry, Page not Found</p> }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
