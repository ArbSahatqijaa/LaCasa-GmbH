import React from 'react';
import './HeroSection.css';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero"
      className="hero-section"
      style={{ backgroundImage: `url("/assets/gallery/HeroBanner.jpg")` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Ihr Partner für Bau & Renovierung <br />
          Qualität auf die Sie bauen können!</h1>
          <p>Professionelle Lösungen für Sanierung, Modernisierung und Neubau – alles aus einer Hand!</p>
        <Link to="gallery" smooth={true} duration={1000} offset={-80} className='hero-button'>MEHR ERFAHREN</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
