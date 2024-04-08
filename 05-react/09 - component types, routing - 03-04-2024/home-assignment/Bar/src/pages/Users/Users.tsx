import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import UserType from "../../types/user"

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
                <div>
                    <h1>User Details</h1>
                    <p> {user.firstName}</p>
                    <p> {user.lastName}</p>
                    <p>{user.age}</p>
                </div>
            )}
        </>
    )
}

export default Users