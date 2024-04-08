import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <ul className = {style.navWrapper}>
            <li><NavLink to= "/"> Home</NavLink></li>
            <li><NavLink to= "/settings"> Settings</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar