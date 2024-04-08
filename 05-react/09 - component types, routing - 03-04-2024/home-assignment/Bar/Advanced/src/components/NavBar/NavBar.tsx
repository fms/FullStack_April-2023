import "./navbar.scss"
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className='navBar'>
                <Link to={"/"}>Home</Link>
                <Link to={"/settings"}>Settings</Link>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar