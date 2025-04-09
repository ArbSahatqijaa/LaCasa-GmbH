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
// import './components/fadein.css'; 
import Testimonial from './components/Testimonial'; 

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-wrapper ${isVisible ? 'visible' : ''}`}>
       <ScrollToTop />
      <Navbar />
      <HeroSection />
      <About />
      <Slider />
      <Gallery />
      <Services />
      <Testimonial/>
      <Contact />



      <Footer />
    </div>
  );
}

export default App;
