import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";


const router = createBrowserRouter([{
    path: "/",
    children: [
        { path: "", element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "users/:id", element: <Users /> }
    ]

}])

export default router