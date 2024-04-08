import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NavBar from '../components/NavBar/NavBar'
import Settings from '../pages/Settings/Settings'

const router = createBrowserRouter([{
    path: "/",
    element: <NavBar />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/settings", element: <Settings /> },
    ]
}])

export default router