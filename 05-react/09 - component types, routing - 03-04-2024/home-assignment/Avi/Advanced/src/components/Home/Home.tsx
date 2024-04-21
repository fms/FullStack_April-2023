import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='MainDiv'>
                <h3>Home</h3>
                <Link to="/settings">Settings</Link><br />
            </div>
        </>

    )
}

export default Home