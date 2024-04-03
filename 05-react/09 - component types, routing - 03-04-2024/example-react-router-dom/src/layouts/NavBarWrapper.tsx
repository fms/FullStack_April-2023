import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function NavBarWrapper() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
