import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/chat", element: <Chat /> },
    { path: "*", element: <div>Not found</div> },
]);

export default router;