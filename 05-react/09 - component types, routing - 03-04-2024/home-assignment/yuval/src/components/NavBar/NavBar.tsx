import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink> <br/>
                <NavLink to="/user/1">User 1</NavLink> {" "}
                <NavLink to="/user/2">User 2</NavLink> {" "}
                <NavLink to="/user/3">User 3</NavLink> {" "}
                <NavLink to="/user/4">User 4</NavLink> {" "}
                <NavLink to="/user/5">User 5</NavLink>
            </div>
        </>
    );
}