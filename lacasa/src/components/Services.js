import React, { useState } from 'react';
import './Services.css';

const beforeAfterImages = [
  {
    before: '/assets/gallery/ballkoni2.jpg',
    after: '/assets/gallery/ballkoni.jpg',
  },
  {
    before: '/assets/gallery/bathroom1.jpg',
    after: '/assets/gallery/llaminati.jpg',
  },
  {
    before: '/assets/gallery/ballkoni2.jpg',
    after: '/assets/gallery/ballkoni.jpg',
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <div id="services" className="services-container" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2>SERVICES</h2>
      <div className="services-main">
        <div className="services-text">
          <h1>MAIN SERVICES</h1>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem ipsum has been the industry's dummy text ever since.
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
                <img src={beforeAfterImages[currentSlide].before} alt="Before" />
                <p>BEFORE</p>
              </div>
              <div className="after">
                <img src={beforeAfterImages[currentSlide].after} alt="After" />
                <p>AFTER</p>
              </div>
            </div>
            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-arrow">&#8592;</button>
              <button onClick={nextSlide} className="slider-arrow">&#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
