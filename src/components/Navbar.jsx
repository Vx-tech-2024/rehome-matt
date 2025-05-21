import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo">ReHome Matt</div>
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