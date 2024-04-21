import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserI } from './UserI';
import NavBar from '../NavBar/NavBar';

export default function UserPage() {
    const { id } = useParams();    
    const [user, setUser] = useState<UserI | null>(null);

    useEffect(() => {
        if (id) {
            fetchUser(id); 
        }
    }, [id]);

    const fetchUser = async (userId: string) => {
        try {
            if (!userId) {
                throw new Error('Error: User ID is undefined');
            }
        
            const res = await fetch(`https://dummyjson.com/user/${userId}`);
            if (!res.ok) {
                throw new Error('Error: Fetch request failed');
            }
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
      <NavBar/>
            {user ? (
                <div>
                    <img src={user.image} alt="User Image" />
                    <h2>{user.firstName} {user.lastName} Details:</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Gender: {user.gender}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
