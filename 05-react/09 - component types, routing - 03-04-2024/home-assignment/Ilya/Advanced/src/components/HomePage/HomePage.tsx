import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/settings">Go to Settings</Link>
    </div>
  );
}

export default HomePage;