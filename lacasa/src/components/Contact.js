import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const address = "Bergstraße 8, 78247 Hilzingen";

  const encodeAddress = (address) => encodeURIComponent(address);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div
      id="contact"
      className="contact-container"
      style={{ backgroundImage: `url("/assets/gallery/contact.jpg")` }}
    >
      <div className="contact-content">
        {/* Left Section: Text */}
        <div className="contact-text">
          <h1>Kontaktieren Sie uns</h1>
          <p>
            Für weitere Informationen kontaktieren Sie uns bitte oder besuchen Sie uns vor Ort.
          </p>
          {/* Location and Phone Section */}
          <div className="contact-info">
            <div className="info-item">
              <span className="icon">📍</span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeAddress(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                {address}
              </a>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <a href="mailto:Info@lacasa-konstanz.de" className="phone-link">Info@lacasa-konstanz.de</a>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <a href="tel:+123456789" className="phone-link">015731369958</a>
            </div>
          </div>
        </div>


        {/* Right Section: Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Nachricht"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">SCHICKEN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
