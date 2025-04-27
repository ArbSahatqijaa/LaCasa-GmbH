import React, { useState, useEffect } from 'react';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';

const beforeAfterImages = [
  {
    before: '/assets/gallery/WC.jpg',
    after: '/assets/gallery/WC2.jpg',
  },
  {
    before: '/assets/gallery/Llaminati.jpg',
    after: '/assets/gallery/Llaminati2.jpg',
  },
  {
    before: '/assets/gallery/Tarasa.jpg',
    after: '/assets/gallery/Tarasa2.jpg',
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
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
          <h1>Qualität trifft auf Handwerk <br /> Alles aus einer Hand.</h1>
          <p>
          Lacasa GmbH bietet Ihnen ein umfassendes Leistungsspektrum rund um Bau, Renovierung und Innenausbau alles aus einer Hand...<br/>
          Unser erfahrenes Team begleitet Sie von der ersten Idee bis zur finalen Umsetzung – zuverlässig, termingerecht und mit höchstem Qualitätsanspruch.<br/>
          Ob hochwertige Bodenbeläge, professionelle Fliesenverlegung, moderner Trockenbau oder kreative Deckengestaltungen – wir bieten maßgeschneiderte Lösungen für Privatkunden und Gewerbe.<br/>
          Vertrauen Sie auf Lacasa GmbH – Ihr Partner für Sanierung, Modernisierung und Neubau, der Ihre Wohnträume Wirklichkeit werden lässt.          </p>
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

        <motion.div
          className="services-photos"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="before-after-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="before-after"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="before">
                  <img
                    src={beforeAfterImages[currentSlide].before}
                    alt="Before"
                    onClick={() => setModalImage(beforeAfterImages[currentSlide].before)}
                    style={{ cursor: 'pointer' }}
                  />
                  <p>VOR</p>
                </div>
                <div className="after">
                  <img
                    src={beforeAfterImages[currentSlide].after}
                    alt="After"
                    onClick={() => setModalImage(beforeAfterImages[currentSlide].after)}
                    style={{ cursor: 'pointer' }}
                  />
                  <p>NACH</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-arrow">&#8592;</button>
              <button onClick={nextSlide} className="slider-arrow">&#8594;</button>
            </div>
          </div>
        </motion.div>
      </div>

      {modalImage && (
        <motion.div
          className="modal-overlay"
          onClick={() => setModalImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out'
          }}
        >
          <motion.img
            src={modalImage}
            alt="Enlarged view"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Services;
