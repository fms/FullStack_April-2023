import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function NavbarWrapper() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default NavbarWrapper