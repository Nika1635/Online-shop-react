import { Link } from "react-router-dom"
import "./index.css"


export default function Index(){
    return <div className="index-hero">
        <div className="index-banner">
            <h1>Discover Everything You Need From Fashion to Home Essentials</h1>
            <p>Shop Smarter, Live Better</p>
            <Link className="index-banner-button" to="/products">Shop Now!</Link>
        </div>
    </div>
}   