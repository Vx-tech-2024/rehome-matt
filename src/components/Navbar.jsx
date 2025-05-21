import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo">
                <div>ReHome Matt</div>
                <div className="logoimage"><img src="/src/assets/logo.png" alt="logo" /></div>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/post">Sell</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

        </nav>
    );

};
export default Navbar;