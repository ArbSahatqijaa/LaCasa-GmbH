import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url("/assets/gallery/ballkoni2.jpg")` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to La Casa</h1>
          <p>Professional Renovation & Design Services</p>
          <a href="#gallery" className="hero-button">View Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
