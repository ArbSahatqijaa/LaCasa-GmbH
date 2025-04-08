import React, { useState } from 'react';
import './Gallery.css';
import GalleryModal from './GalleryModal';

const galleries = [
  {
    id: 1,
    title: 'Modern Bathroom',
    images: [
      '/assets/gallery/ballkoni.jpg',
      '/assets/gallery/ballkoni2.jpg',
      '/assets/gallery/ballkoni.jpg',
      '/assets/gallery/ballkoni2.jpg',
    ]
  },
  {
    id: 2,
    title: 'Kitchen Renovation',
    images: [
      '/assets/gallery/bathroom1.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
    ]
  },
  {
    id: 3,
    title: 'Living Room Upgrade',
    images: [
      '/assets/gallery/llaminati.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
    ]
  },
  {
    id: 4,
    title: 'Wall Tiling',
    images: [
      '/assets/gallery/llaminati.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
    ]
  },
  {
    id: 5,
    title: 'Outdoor Patio',
    images: [
      '/assets/gallery/bathroom1.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
    ]
  },
  {
    id: 6,
    title: 'Entryway Design',
    images: [
      '/assets/gallery/ballkoni.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
    ]
  },
  {
    id: 7,
    title: 'Staircase Modern',
    images: [
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
      '/assets/gallery/mainImage.jpg',
    ]
  },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleries.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = galleries.slice(startIndex, startIndex + itemsPerPage);

  const openModal = (gallery) => {
    setSelectedGallery(gallery);
  };

  const closeModal = () => {
    setSelectedGallery(null);
  };

  return (
    <section className="gallery-section" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2>OUR PROJECT GALLERY</h2>
      <div className="gallery-grid">
        {currentItems.map((gallery) => (
          <div
            key={gallery.id}
            className="gallery-item"
            onClick={() => openModal(gallery)}
          >
            <div className="gallery-image-wrapper">
              <img src={gallery.images[0]} alt={gallery.title} />
            </div>
            <p>{gallery.title}</p>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <span>Page {currentPage} ({startIndex + 1}–{startIndex + currentItems.length} of {galleries.length})</span>
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={i + 1 === currentPage ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {selectedGallery && (
        <GalleryModal gallery={selectedGallery} onClose={closeModal} />
      )}
    </section>
  );
};

export default Gallery;
