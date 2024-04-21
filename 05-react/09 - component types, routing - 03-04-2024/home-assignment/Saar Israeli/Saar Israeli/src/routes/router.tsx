import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import NavBarWrapper from "../layout/NavBarWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      { path: "", element: <Home /> },
      { path: "user/:id", element: <User /> },
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);
export default router;
