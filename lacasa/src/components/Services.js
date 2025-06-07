import React, { useState, useEffect } from 'react';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/assets/gallery/para.jpg',
  '/assets/gallery/Llaminati.jpg',
  '/assets/gallery/Tarasa.jpg',
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    document.body.style.overflow = modalImage ? 'hidden' : 'auto';
  }, [modalImage]);

  return (
    <div
      id="services"
      className="services-container"
      style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        UNSERE LEISTUNGEN
      </motion.h2>

      <div className="services-main">
        <motion.div
          className="services-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Qualität trifft auf Handwerk <br /> Alles aus einer Hand.
          </h1>
          <p>
            Lacasa GmbH bietet Ihnen ein umfassendes Leistungsspektrum rund um
            Bau, Renovierung und Innenausbau alles aus einer Hand...
            <br />
            Unser erfahrenes Team begleitet Sie von der ersten Idee bis zur
            finalen Umsetzung – zuverlässig, termingerecht und mit höchstem
            Qualitätsanspruch.
            <br />
            Ob hochwertige Bodenbeläge, professionelle Fliesenverlegung,
            moderner Trockenbau oder kreative Deckengestaltungen – wir bieten
            maßgeschneiderte Lösungen für Privatkunden und Gewerbe.
            <br />
            Vertrauen Sie auf Lacasa GmbH – Ihr Partner für Sanierung,
            Modernisierung und Neubau, der Ihre Wohnträume Wirklichkeit werden
            lässt.
          </p>
          <div className="services-icons">
            {[
              { src: '/assets/gallery/ceramic.png', label: 'KERAMIK' },
              { src: '/assets/gallery/floor2.png', label: 'HOLZ' },
              { src: '/assets/gallery/floor.png', label: 'BODENBELAG' },
            ].map((icon, index) => (
              <motion.div
                className="icon-item"
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={icon.src} alt={icon.label} className="icon-image" />
                <p>{icon.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

  
      </div>
    </div>
  );
};

export default Services;
