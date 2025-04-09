import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

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
      <li><Link to="hero" smooth={true} duration={1000} offset={-80}>Home</Link></li>
      <li><Link to="about" smooth={true} duration={1000} offset={-80}>About</Link></li>
        <li><Link to="gallery" smooth={true} duration={1000} offset={-80}>Gallery</Link></li>
        <li><Link to="services" smooth={true} duration={1000} offset={-80}>Services</Link></li>
        <li><Link to="contact" smooth={true} duration={1000} offset={-80}>Contact</Link></li>
      </ul>

      <button className="menu-icon" onClick={toggleMenu}>
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
