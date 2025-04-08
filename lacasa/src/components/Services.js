import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2>SERVICES</h2>
      <div className="services-main">
        <div className="services-text">
          <h1>MAIN SERVICES</h1>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem ipsum has been the industry's dummy text ever since.
          </p>
          {/* Icons Section */}
          <div className="services-icons">
            <div className="icon-item">
              <img src="path-to-ceramic-image.jpg" alt="Ceramic" className="icon-image" />
              <p>CERAMIC</p>
            </div>
            <div className="icon-item">
              <img src="path-to-wood-image.jpg" alt="Wood" className="icon-image" />
              <p>WOOD</p>
            </div>
            <div className="icon-item">
              <img src="path-to-flooring-image.jpg" alt="Flooring" className="icon-image" />
              <p>FLOORING</p>
            </div>
          </div>
        </div>
        <div className="services-photos">
          <div className="before-after">
            <div className="before">
              <img src="/assets/gallery/ballkoni2.jpg" alt="Before" />
              <p>BEFORE</p>
            </div>
            <div className="after">
              <img src="/assets/gallery/ballkoni.jpg" alt="After" />
              <p>AFTER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;