import "./navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return <nav>
        <ul className="navbar-list">
            <li><Link to="/" className="navbar-list-item">Home</Link></li>
            <li><Link to="/products" className="navbar-list-item">Products</Link></li>
        </ul>

        <div className="search-hero">
            <input type="text"/><i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="icon-list">
            <i class="fa-solid fa-right-to-bracket"></i>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        
    </nav>
}