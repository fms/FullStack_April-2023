import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../../types/user";

export default function UserPage() {
    const [user, setUser] = useState<User>();
    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://dummyjson.com/users/${id}`, {
        signal: controller.signal,
        })
        .then((res) => res.json())
        .then((obj) => setUser(obj))

        return () => {
        controller.abort();
        };
    })
    return (
        <>
            {!user ? "" : 
                <div>
                    <h1>{user.firstName} {user.lastName} - {user.username}</h1>
                    <img src={user.image} alt={user.username} />
                    <p>Gender: {(user.gender) == 0 ? "Male" : "Female"}, Age: {user.age}</p>
                    <p>Email: {user.email}, Phone Number: {user.phone}</p>
                </div>
            }
        </>
    )
}