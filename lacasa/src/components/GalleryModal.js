import React, { useState } from 'react';
import './GalleryModal.css';

const GalleryModal = ({ gallery, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  const images = gallery.images;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-main-image">
          <img
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className={zoom ? 'zoom' : ''}
            onClick={toggleZoom}
          />
          <button className="modal-arrow left" onClick={prevImage}>❮</button>
          <button className="modal-arrow right" onClick={nextImage}>❯</button>
        </div>

        <div className="modal-thumbnails">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={currentImage === idx ? 'active' : ''}
              onClick={() => setCurrentImage(idx)}
            />
          ))}
        </div>

        <p className="modal-description">
          Click the image to {zoom ? 'zoom out' : 'zoom in'}
        </p>
      </div>
    </div>
  );
};

export default GalleryModal;
