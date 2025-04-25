import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
      style={{ backgroundImage: `url("/assets/gallery/background.svg")` }}
    >
      <motion.div
         className="about-left"
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, delay: 0.3 }}
         viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <h2><span>Wir sind die </span> LA CASA GmbH</h2>
        <p>
          Suchen Sie einen zuverlässigen Partner für Ihre Bau-, Renovierungs- oder Modernisierungsprojekte? <br />
          Lacasa GmbH steht für Qualität, Verlässlichkeit und maßgeschneiderte Lösungen – alles aus einer Hand.
        </p>
        <p>
          Ob Neubau, Umbau oder Sanierung – wir setzen Ihre Visionen fachgerecht und termingerecht um. <br />
          Vertrauen Sie auf unsere Erfahrung und lassen Sie Ihre Immobilie in neuem Glanz erstrahlen – hochwertig, effizient und zu fairen Preisen.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3>OUR SERVICE</h3>
        <ul>
          <li><strong>-</strong>Komplettsanierungen von Häusern, Wohnungen & Gewerbeobjekten</li>
          <li><strong>-</strong>Innenausbau & Trockenbau – vom Boden bis zur Decke</li>
          <li><strong>-</strong>Maler-, Fliesen- und Bodenarbeiten für ein modernes Wohnambiente</li>
          <li><strong>-</strong>Dach- & Fassadensanierung für Schutz, Optik & Werterhalt</li>
          <li><strong>-</strong>Persönliche Beratung & individuelle Planung nach Ihren Wünschen</li>
        </ul>
        <Link
          to="services"
          smooth={true}
          duration={1000}
          offset={-80}
          className="book-btn"
        >
          Services
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
