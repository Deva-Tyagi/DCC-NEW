// ContactInfoCards.jsx
import React from 'react';
import './ContactInfoCards.css';

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Office",
      description: "Come and say hello at our HQ",
      details: "123 Business District, Digital Valley, Tech City 12345",
      linkText: "Get Directions",
      href: "#"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      details: "+1 (555) 123-4567",
      linkText: "Call Now",
      href: "tel:+15551234567"
    },
    {
      icon: "✉️",
      title: "Email Us",
      description: "We'll respond within 24 hours",
      details: "hello@digitalcraft.co",
      linkText: "Send Email",
      href: "mailto:hello@digitalcraft.co"
    },
  ];

  return (
    <section className="contact-info-cards">
      <div className="contact-info-container">
        <div className="contact-info-header">
          <h2>Get in Touch</h2>
          <p>Multiple ways to reach us. Choose what works best for you.</p>
        </div>
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-info-icon">
                <span>{item.icon}</span>
              </div>
              <div className="contact-info-content">
                <h3>{item.title}</h3>
                <p className="contact-info-description">{item.description}</p>
                <p className="contact-info-details">{item.details}</p>
                <a href={item.href} className="contact-info-link">
                  {item.linkText}
                  <span className="contact-info-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;