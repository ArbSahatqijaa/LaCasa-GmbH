import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Added this import
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    setVisible(scrolled > 100);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 3500, // Increased duration for slower scroll
      smooth: 'easeInOutQuint', // Smoother easing function
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <motion.button
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >  
      <FontAwesomeIcon icon={faChevronUp} />
    </motion.button>
  );
};

export default ScrollToTop;