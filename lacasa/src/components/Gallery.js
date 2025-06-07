import React, { useState } from 'react';
import './Gallery.css';
import GalleryModal from './GalleryModal';
import { motion, AnimatePresence } from 'framer-motion';

const galleries = [
  {
    id: 1,
    title: 'Badezimmer',
    images: [
      './assets/gallery/Banjo.jpg',
      '/assets/gallery/Banjo2.jpg',
      '/assets/gallery/Banjo3.jpg',
    ],
  },
  {
    id: 2,
    title: 'Terrasse',
    images: [
      '/assets/gallery/Tarasa.jpg',
      '/assets/gallery/Tarasa2.jpg',
      '/assets/gallery/Tarasa3.jpg',
    ],
  },
  {
    id: 3,
    title: 'Laminieren',
    images: [
      '/assets/gallery/Llaminati.jpg',
      '/assets/gallery/Llaminati2.jpg',
      '/assets/gallery/Llaminati3.jpg',
      '/assets/gallery/Llaminati4.jpg',
    ],
  },
  {
    id: 4,
    title: 'Badezimmer',
    images: [
      '/assets/gallery/WC.jpg',
      '/assets/gallery/WC2.jpg',
      '/assets/gallery/WC3.jpg',
      '/assets/gallery/WC4.jpg',
    ],
  },
  {
    id: 5,
    title: 'Decke',
    images: [
      '/assets/gallery/Tavani.jpg',
      '/assets/gallery/Tavani2.jpg',
      '/assets/gallery/Tavani3.jpg',
    ],
  },
  {
    id: 6,
    title: 'Laminieren',
    images: [
      '/assets/gallery/Parketi.jpg',
      '/assets/gallery/Parketi2.jpg',
    ],
  },
  {
    id: 7,
    title: 'Boden',
    images: [
      '/assets/gallery/Dysheme.jpg',
      '/assets/gallery/Dysheme1.jpg',
      '/assets/gallery/Dysheme2.jpg',
    ],
  },
   {
    id: 8,
    title: 'Treppe',
    images: [
      '/assets/gallery/Shkalle.jpg',
      '/assets/gallery/Shkalle2.jpg',
      '/assets/gallery/Shkalle3.jpg',
    ],
  },
  {
    id: 9,
    title: 'Badezimmer',
    images: [
      '/assets/gallery/Banjo5.jpg',
      '/assets/gallery/Banjo4.jpg',
    ],
  },
    {
    id: 10,
    title: 'Treppe',
    images: [
      '/assets/gallery/Shkalle4.jpg',
      '/assets/gallery/Shkalle5.jpg',
    ],
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
    <section
      id="gallery"
      className="gallery-section"
      style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        UNSERE PROJEKTE
      </motion.h2>

      <div className="gallery-grid">
        <AnimatePresence>
          {currentItems.map((gallery) => (
            <motion.div
              key={gallery.id}
              className="gallery-item"
              onClick={() => openModal(gallery)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div className="gallery-image-wrapper">
                <img src={gallery.images[0]} alt={gallery.title} />
              </div>
              <p>{gallery.title}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="gallery-footer">
        <span>
          Seite {currentPage} ({startIndex + 1}–{startIndex + currentItems.length} von{' '}
          {galleries.length})
        </span>
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

      {selectedGallery && <GalleryModal gallery={selectedGallery} onClose={closeModal} />}
    </section>
  );
};

export default Gallery;
