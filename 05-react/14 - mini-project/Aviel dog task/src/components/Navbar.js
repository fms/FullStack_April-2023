import { Link, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Nav";
import { FcShop } from "react-icons/fc";



export default function Navbar() {


  return (
    <>

{/* <div className="logo-icon">
        <a href="#">
          <FcShop className="nav-icons" />
        </a>
        
      </div> */}

      {/* <header className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="blogs">Blogs</Link>
            </li>
            <li>
              <Link to="contact">Contacts</Link>
            </li>
            <li>
              <Link to="Shop-Runing">Shop-Runing</Link>
            </li>
            <li>
              <Link to="Shop-Football">Shop-Football</Link>
            </li>
            <li>
              <Link to="Shop-Training">Shop-Training</Link>
            </li>
          </ul>
          
       
        </nav>
      </header> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
