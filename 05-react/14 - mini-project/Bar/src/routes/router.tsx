import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavbarWrapper from "../layout/NavbarWrapper/NavbarWrapper";

const router = createBrowserRouter([{
    path: "/",
    element: <NavbarWrapper />,
    children: [
        { path: "", element: <Home /> }
    ]
}])

export default router