import React, { useState } from 'react';
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <div id="services" className="services-container" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2>UNSERE LEISTUNGEN</h2>
      <div className="services-main">
        <div className="services-text">
          <h1>Qualität trifft auf Handwerk <br /> Alles aus einer Hand.</h1>
          <p>
          Lacasa GmbH bietet Ihnen ein umfassendes Leistungsspektrum rund um Bau, Renovierung und Innenausbau alles aus einer Hand. Wir sind spezialisiert auf die Verlegung hochwertiger Bodenbeläge wie Laminat, Parkett, Vinyl und Teppich sowie auf professionelle Fliesenarbeiten in Bad, Küche und Außenbereichen. Auch die fachgerechte Sanierung und Reparatur bestehender Böden gehört zu unserem Alltag.

Darüber hinaus gestalten wir Ihre Räume durch modernen Trockenbau und kreative Deckendesigns inklusive Beleuchtungskonzepten ganz nach Ihren Wünschen. Unsere Maler- und Spachtelarbeiten sorgen für ein frisches, stilvolles Raumgefühl.

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
