import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Familie Schneider",
    location: "Düsseldorf",
    review: "Die Renovierung unseres Badezimmers war ein voller Erfolg! Das Team von Lacasa GmbH war pünktlich, professionell und hat sauber gearbeitet. Wir sind begeistert vom Ergebnis.",
    image: "/assets/gallery/Profile1.jpg"  },
  {
    name: "Markus T.",
    location: "Köln",
    review: "Von der Planung bis zur Umsetzung lief alles reibungslos. Besonders die neuen Laminatböden und das Deckenlichtdesign sind echte Highlights geworden. Absolute Empfehlung!",
    image: "/assets/gallery/Profile3.jpg"  },
  {
    name: "Sabine & Thomas L.",
    location: "Bonn",
    review: "Sehr gute Beratung und eine tolle handwerkliche Ausführung. Unser Haus wirkt jetzt viel moderner und heller. Vielen Dank an das ganze Team!",
    image: "/assets/gallery/Profile2.jpg"
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2 className="testimonial-title">WAS UNSERE KUNDEN SAGEN</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <p className="testimonial-review">“{t.review}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-location">{t.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
