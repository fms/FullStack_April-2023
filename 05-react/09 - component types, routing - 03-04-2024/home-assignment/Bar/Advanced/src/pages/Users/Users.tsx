import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import UserType from "../../types/userType"
import "./user.scss"

function Users() {
    const [user, setUser] = useState<UserType | null>(null);
    const { id } = useParams()

    async function userData(): Promise<void> {
        try {
            await fetch(`https://dummyjson.com/users/${id}`)
                .then(res => res.json())
                .then(setUser);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            userData()
        }
    }, [id])

    return (
        <>
            {user && (
                <div className='user'>
                    <h1>User Details</h1>
                    <p>First Name: <span> {user.firstName} </span></p>
                    <p>Last Name: <span> {user.lastName} </span></p>
                    <p>Age: <span> {user.age} </span></p>
                </div>
            )}
        </>
    )
}

export default Users