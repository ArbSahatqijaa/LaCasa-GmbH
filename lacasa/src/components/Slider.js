import React, { useState } from 'react';
import './Slider.css';

const slides = [
  {
    image: '/assets/gallery/Banjo.jpg',
    title: 'Badezimmer Renovierung',
    text: ' Wir verwandeln Ihr Badezimmer in eine echte Wohlfühloase. Mit hochwertigen Fliesen, durchdachter Raumaufteilung und moderner Ausstattung schaffen wir Räume, die nicht nur schön aussehen, sondern auch praktisch im Alltag sind.'
  },
  {
    image: '/assets/gallery/Tavani.jpg',
    title: 'Deckenverzierung & Lichtkonzepte',
    text: 'Mit kreativen Deckengestaltungen und integrierten Lichtsystemen bringen wir Charakter und Atmosphäre in Ihr Zuhause. Ob indirekte Beleuchtung, Stuckelemente oder moderne Designs – wir setzen stilvolle Akzente ganz nach Ihrem Geschmack.'
  },
  {
    image: '/assets/gallery/Llaminati.jpg',
    title: 'Laminatverlegung',
    text: 'Unsere Laminatböden bieten eine perfekte Kombination aus Ästhetik und Funktionalität. Professionell verlegt, sorgen sie für ein harmonisches Gesamtbild und ein angenehmes Wohngefühl – ideal für alle Wohnbereiche.'
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <section id = "slider" className="slider-section">
      <div className="slider-wrapper">
        {/* Left Section: Orange Bar with Text */}
        <div className="slider-text">
          <div className="slide-counter">{String(current + 1).padStart(2, '0')}</div>
          <h2 className="slider-title">{slides[current].title}</h2>
          <p className="slide-description">{slides[current].text}</p>
        </div>

        {/* Right Section: Image */}
        <div className="slider-image">
          <img src={slides[current].image} alt="project" />
          <button className="arrow left" onClick={prevSlide}>❮</button>
          <button className="arrow right" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Slider;