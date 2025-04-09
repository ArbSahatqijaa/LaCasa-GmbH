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
          <h1>Welcome to La Casa</h1>
          <p>Professional Renovation & Design Services</p>
        <Link to="gallery" smooth={true} duration={1000} offset={-80} className='hero-button'>Our Work</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
