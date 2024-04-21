import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./navBar.module.scss";

function NavBar() {
  return (
    <div>
        <ul className={style.NavBarWrapper}>
            <li><NavLink to= "/" > Home </NavLink></li>
            <li><NavLink to= "/user/1"> User 1</NavLink></li>
            <li><NavLink to= "/user/2"> User 2</NavLink></li>
            <li><NavLink to= "/user/3"> User 3</NavLink></li>
            <li><NavLink to= "/user/4"> User 4</NavLink></li>
            <li><NavLink to= "/user/5"> User 5</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar