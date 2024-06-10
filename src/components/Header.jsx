import React from "react";
import logo from '../assets/logo.png';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header">
            <div className="headerLeft">
                <img className="logo_olx" src={logo} alt="Logo" />
            </div>
            <div className="headerCenter">
                {/* Center content if any */}
            </div>
            <div className="headerRight">
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
