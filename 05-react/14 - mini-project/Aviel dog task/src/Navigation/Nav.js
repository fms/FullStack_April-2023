import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search dog"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons-FiHeart" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons-AiOutlineShoppingCart" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons-AiOutlineUserAdd" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
