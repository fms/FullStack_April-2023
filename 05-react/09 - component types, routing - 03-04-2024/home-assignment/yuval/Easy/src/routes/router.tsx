import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Users/Users";
import UserPage from "../pages/UserPage/UserPage";

const router = createBrowserRouter([
    { path: "/", element: <Users /> },
    { path: "user/:id", element: <UserPage /> },
    { path: "*", element: <div>Not found</div> },
]);

export default router;