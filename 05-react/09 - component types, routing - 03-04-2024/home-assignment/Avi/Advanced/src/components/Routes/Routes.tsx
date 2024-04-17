import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Settings from '../Settings/Settings'


function Routes() {
    const router = createBrowserRouter([{
        path: "/",
        element: <Home />
    },
    {
        path: "/settings",
        element: <Settings/>
    }
    ])
    return (
        <RouterProvider router={router}/>
    )
}


export default Routes