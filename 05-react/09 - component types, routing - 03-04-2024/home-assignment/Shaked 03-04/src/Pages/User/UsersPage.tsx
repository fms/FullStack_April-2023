import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserI } from './UserI';
import NavBar from '../NavBar/NavBar';
import './UserPage.scss';

function UsersPage() {
  const [users, setUsers] = useState<UserI[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://dummyjson.com/users?limit=5');
      if (!res.ok) {
        throw new Error('Error: Fetch request failed');
      }
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Users</h1>
      <ul>
        <table>
          <tr>
            {users.map(user => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </Link>
                <hr />
              </li>
            ))}
          </tr>

        </table>

      </ul>

    </div>
  );
}

export default UsersPage;
