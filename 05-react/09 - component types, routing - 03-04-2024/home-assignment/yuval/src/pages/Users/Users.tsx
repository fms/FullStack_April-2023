import { Link } from "react-router-dom";
import './App.css'

export default function Users() {
    return (
        <>
            <h1>User Select</h1>
            <Link to="/user/1"></Link>
            <Link to="/user/2"></Link>
            <Link to="/user/3"></Link>
            <Link to="/user/4"></Link>
            <Link to="/user/5"></Link>
        </>
    );
}