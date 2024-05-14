import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavbarWrapper from "../layout/NavbarWrapper/NavbarWrapper";
import InnerDogCard from "../pages/InnerDogCard/InnerDogCard";

const router = createBrowserRouter([{
    path: "/",
    element: <NavbarWrapper />,
    children: [
        { path: "", element: <Home /> },
        { path: "dogs/:breed", element: <InnerDogCard /> }
    ]
}])

export default router