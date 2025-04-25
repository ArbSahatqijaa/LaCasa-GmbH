import React, { useState } from 'react';
import './GalleryModal.css';

const GalleryModal = ({ gallery, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  const images = gallery.images;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setZoom(false); // Reset zoom when changing images
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setZoom(false); // Reset zoom when changing images
  };

  const toggleZoom = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the overlay
    setZoom(!zoom);
  };

  const handleOverlayClick = (e) => {
    // Only close if the click is directly on the overlay, not on its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal-main-image">
          <img
            src={images[currentImage]}
            alt={`${gallery.title} - Image ${currentImage + 1}`}
            className={zoom ? 'zoom' : ''}
            onClick={toggleZoom}
          />
          <button
            className="modal-arrow left"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ❮
          </button>
          <button
            className="modal-arrow right"
            onClick={nextImage}
            aria-label="Next image"
          >
            ❯
          </button>
        </div>

        <div className="modal-thumbnails">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`thumbnail-wrapper ${currentImage === idx ? 'active' : ''}`}
              onClick={() => setCurrentImage(idx)}
            >
              <img
                src={img}
                alt={`${gallery.title} - Thumbnail ${idx + 1}`}
                className="thumbnail"
              />
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <p className="modal-description">
            {gallery.title} - Bild {currentImage + 1} von {images.length}
          </p>
          <p className="modal-zoom-info">
          Klicken Sie auf das Bild {zoom ? 'Herauszoomen' : 'Vergrößern'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;