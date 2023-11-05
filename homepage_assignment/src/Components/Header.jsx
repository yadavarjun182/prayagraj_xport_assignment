import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/chips.jpg" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Buy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Header