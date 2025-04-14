import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Ardian B.",
    location: "Prishtina",
    review: "The team did a fantastic job on our ceramic flooring. Fast, clean, and professional. Highly recommended!",
    image: "/assets/gallery/Profile1.jpg"  },
  {
    name: "Luljeta S.",
    location: "Gjakova",
    review: "I loved how the kitchen tiles turned out. They helped me pick the perfect color and design!",
    image: "/assets/gallery/Profile3.jpg"  },
  {
    name: "Erion K.",
    location: "Ferizaj",
    review: "Great service from start to finish. They kept the house tidy and finished earlier than expected.",
    image: "/assets/gallery/Profile2.jpg"
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" style={{ backgroundImage: `url("/assets/gallery/Background.svg")` }}>
      <h2 className="testimonial-title">What Our Clients Say</h2>
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
