import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
export default function NavBar() {
  return (
    <div className='wrapper'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
    </div>
  );
}
