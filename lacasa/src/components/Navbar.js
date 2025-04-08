import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/gallery/logo.png" alt="LaCasa Logo" className="logo-img" />
        LA CASA GmbH
      </div>

      <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="menu-icon" onClick={toggleMenu}>
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
