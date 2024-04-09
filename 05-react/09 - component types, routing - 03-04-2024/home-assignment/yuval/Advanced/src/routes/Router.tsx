import { createBrowserRouter } from "react-router-dom";
import Settings from "../pages/Settings/Settings";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/settings", element: <Settings /> },
    { path: "*", element: <div>Not found</div> },
]);

export default router;