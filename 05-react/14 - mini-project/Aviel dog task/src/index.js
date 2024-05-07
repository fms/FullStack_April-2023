import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
  } from "react-router-dom";

  import "./styles.css";
  
  // Components
  import Navbar from "./components/Navbar";
  
  // import Footer from './components/Footer';
  import Home from "./pages/Home";
  import Blogs from "./pages/Blogs";
  import Contact from "./pages/Contact";
  import Dogs from "./pages/Dogs";
  


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        
          <Route path="Shop-Football" element={<Dogs />} />
         
        </Route>
      </>
    )
  );
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );