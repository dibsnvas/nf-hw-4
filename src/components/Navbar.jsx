import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming the Navbar styles are included in Header.css

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create">Create Product</Link>
        </nav>
    );
};

export default Navbar;
