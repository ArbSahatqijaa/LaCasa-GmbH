import React, { useState, useEffect } from 'react';
import './Services.css';

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
    <div id="services" className="services-container" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2>UNSERE LEISTUNGEN</h2>
      <div className="services-main">
        <div className="services-text">
          <h1>Qualität trifft auf Handwerk <br /> Alles aus einer Hand.</h1>
          <p>
            Lacasa GmbH bietet Ihnen ein umfassendes Leistungsspektrum rund um Bau, Renovierung und Innenausbau alles aus einer Hand...
          </p>
          <div className="services-icons">
            <div className="icon-item">
              <img src="/assets/gallery/ceramic.png" alt="Ceramic" className="icon-image" />
              <p>CERAMIC</p>
            </div>
            <div className="icon-item">
              <img src="/assets/gallery/floor2.png" alt="Wood" className="icon-image" />
              <p>WOOD</p>
            </div>
            <div className="icon-item">
              <img src="/assets/gallery/floor.png" alt="Flooring" className="icon-image" />
              <p>FLOORING</p>
            </div>
          </div>
        </div>

        <div className="services-photos">
          <div className="before-after-slider">
            <div className="before-after">
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
            </div>
            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-arrow">&#8592;</button>
              <button onClick={nextSlide} className="slider-arrow">&#8594;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for image preview */}
      {modalImage && (
        <div
          className="modal-overlay"
          onClick={() => setModalImage(null)}
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
          <img
            src={modalImage}
            alt="Enlarged view"
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
