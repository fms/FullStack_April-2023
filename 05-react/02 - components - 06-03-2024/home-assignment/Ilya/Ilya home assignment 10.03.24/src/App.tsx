import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import myImage from './assets/maxresdefault (1).jpg'
import LikeCounter from "./components/LikeCounter/LikeCounter";
import CursorFollower from "./components/CursorFollower/CursorFollower";
import "./App.css";


function App() {

  return (
    <>
        <div className="product-page">
            <div className="product-image">
                <img src={myImage} alt="Product" />
            </div>
        
                
            <div className="product-details">
                <h1>Smart Glasses</h1>
                <p>Description of the product goes here...</p>
                <LikeCounter />
            
                <div className="Cursor-Follower">
                  <CursorFollower />
                </div>
            </div>
        </div>
    </>
  );
}


export default App;
