import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const address = "Grubwaldstraße 14, 78224 Singen (Hohentwiel), Germany";

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
                href={`https://www.google.com/maps?q=Grubwaldstra%C3%9Fe+14,+78224+Singen+(Hohentwiel)&ftid=0x479a62b7a526b60d:0xeb70d7e85e920d8&entry=gps&lucs=,94275310,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISDTYuMTQyLjAuOTE5NzAYACCIJypaLDk0Mjc1MzEwLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0QgJERQ%3D%3D&skid=11e238e6-5c04-40bc-bb6c-76d1daa1aa4f&g_st=iwb=${encodeAddress(address)}`}
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
