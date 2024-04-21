import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <h1>Welcome!</h1>
      <Link to="/users">Fetch Users</Link>
    </div>
  );
}
