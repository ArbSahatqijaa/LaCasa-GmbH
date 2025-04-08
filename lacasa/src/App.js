import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Slider from './components/Slider';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Slider />
      <Gallery />
      <Services/>
      <Contact/>



      {/* Footer Stays in the end of the page */}
      
      <Footer />
      
    </>
  );
}

export default App;
