import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo">
                <div>ReHome Matt</div>
                <div className="logoimage"><img src="/src/assets/logo.png" alt="logo" /></div>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sell">Sell</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </nav>
    );

};
export default Navbar;