import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about-section" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <div className="about-left">
        <h2><span>WE ARE</span> LA CASA GmbH</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make.
        </p>
      </div>
      <div className="about-right">
        <h3>OUR SERVICE</h3>
        <ul>
          <li><strong>·</strong> RENOVATION</li>
          <li><strong>·</strong> FLOORING</li>
          <li><strong>·</strong> KERAMIK</li>
        </ul>
        <Link to="services" smooth={true} duration={1000} offset={-80} className='book-btn'>Services</Link>
      </div>
    </section>
  );
};

export default About;
