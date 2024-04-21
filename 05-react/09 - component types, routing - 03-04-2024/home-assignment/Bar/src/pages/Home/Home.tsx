import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <h3>Links:</h3>
            <Link to="/users">Go to users </Link >
        </>
    )
}

export default Home