import "./navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return <nav>
        <ul className="navbar-list">
            <li><Link to="/" className="navbar-list-item">home</Link></li>
            <li><Link to="/products" className="navbar-list-item">products</Link></li>
        </ul>

        <div>

        </div>
        
    </nav>
}