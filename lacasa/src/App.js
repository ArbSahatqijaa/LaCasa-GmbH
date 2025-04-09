import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Slider from './components/Slider';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';
import './components/fadein.css'; // Correct path to your new fade-in style

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-wrapper ${isVisible ? 'visible' : ''}`}>
      <Navbar />
      <HeroSection />
      <About />
      <Slider />
      <Gallery />
      <Services />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
