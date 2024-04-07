import { NavLink } from "react-router-dom";
import HiddenNavLink from "../HiddenNavLink/HiddenNavLink";

export default function NavBar() {
  return (
    <div>
      NavBar
      <NavLink to="/" className="Link">
        Home
      </NavLink>
      <NavLink to="/about" className="Link">
        About
      </NavLink>
      <NavLink to="/user/1" className="Link">
        User 1
      </NavLink>
      <NavLink to="/user/2" className="Link">
        User 2
      </NavLink>
      <NavLink to="/user/3" className="Link">
        User 3
      </NavLink>
      <HiddenNavLink to="/about">Hidden when active</HiddenNavLink>
    </div>
  );
}
