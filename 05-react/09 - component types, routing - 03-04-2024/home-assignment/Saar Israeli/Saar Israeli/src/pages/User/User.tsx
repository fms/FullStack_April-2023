import React, { useEffect, useState } from 'react'
import style from './User.module.scss'
import { useParams } from 'react-router-dom';


function User() {
  const [user,setUser] = useState<User>();
  const {id} = useParams();


  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://dummyjson.com/users/${id}`, {
      signal: controller.signal,
    })
    .then((res) => res.json())
    .then(setUser)
    
    return() => {
      controller.abort();
    };
  },[id])

  return (
    <>
    {!user ? <div>User Not Found</div> : 
    <div className = {style.userWrapper}>
      <h1>{user.firstName} {user.lastName}</h1>
      <img src={user.image} alt={user.email} />
      <h2>Gender: {user.gender}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.address.city}, Adress: {user.address.address}</h2>
      <h2>Email: {user.email}</h2>
      </div>}
    </>
  )
}

export default User