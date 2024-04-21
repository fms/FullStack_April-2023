import { createBrowserRouter } from 'react-router-dom'
import MainNavBar from '../layout/MainNavBar'
import Settings from '../pages/settings/Settings'
import Home from '../pages/home/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainNavBar />,
        children: [
            { path: "", element: <Home />},
            { path: "settings", element:<Settings />},
            { path: "*", element: <div>Page Not Found</div>},
        ]
    },
    {
        path: "/settings",
        children:[
            { path: "", element: <Settings />},
            { path: "*", element: <div>Page Not Found</div>}
        ]
    }
])

export default router