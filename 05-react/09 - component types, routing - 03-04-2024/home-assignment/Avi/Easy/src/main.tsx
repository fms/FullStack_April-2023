import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'
import App from './App'
import UsersNavBar from './components/UsersNavBar/UsersNavBar'
import router from './components/Router/UserRouter'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <RouterProvider router={router} />
      {/* <UsersNavBar /> */}
    {/* </BrowserRouter> */}
    {/* <UserRouter /> */}
  </React.StrictMode>,
)
