import React from 'react';
import './HeroSection.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url("/assets/gallery/Baner2025.jpg")` }}
    >
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Ihr Partner für Bau & Renovierung <br />
            Qualität auf die Sie bauen können!
          </h1>
          <p>
            Professionelle Lösungen für Sanierung, Modernisierung und Neubau – alles aus einer Hand!
          </p>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            offset={-80}
            className="hero-button"
          >
            MEHR ERFAHREN
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
