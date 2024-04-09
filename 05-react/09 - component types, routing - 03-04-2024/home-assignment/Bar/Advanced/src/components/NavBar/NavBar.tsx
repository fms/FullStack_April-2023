import { useEffect, useState } from "react"
import "./navbar.scss"
import { Link, Outlet, useNavigate } from 'react-router-dom'

function NavBar() {

    const [counter, setCounter] = useState(1)
    const navigate = useNavigate();

    useEffect(() => {
        if (counter > 0) {
            navigate(`/users/${counter}`, { replace: true });
        }
    }, [counter]);

    function prevUser() {
        setCounter(prevCounter => prevCounter <= 1 ? 1 : prevCounter - 1);
    }

    function nextUser() {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <>
            <div className='navBar'>
                <Link to={"/"}>Home</Link>
                <Link to={"/settings"}>Settings</Link>
                <Link onClick={() => nextUser()} to={`/users/${counter}`}>Next User</Link>
                <Link onClick={() => prevUser()} to={`/users/${counter}`} >Previous User</Link >
            </div>
            <Outlet />
        </>
    )
}

export default NavBar