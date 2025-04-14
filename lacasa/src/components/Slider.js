import React, { useState } from 'react';
import './Slider.css';

const slides = [
  {
    image: '/assets/gallery/Banjo.jpg',
    title: 'Banjo',
    text: 'Banjo e Realizuar per klientin me plaka speciale anti gervishtje dhe rreshqitje'
  },
  {
    image: '/assets/gallery/Tavani.jpg',
    title: 'Tavani',
    text: 'Tavan i Realizuar per klientin me LED kualitetit me te larte'
  },
  {
    image: '/assets/gallery/Llaminati.jpg',
    title: 'Llaminati',
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. The industry’s standard dummy text ever since.'
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