import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactForm.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const elements = formRef.current.querySelectorAll('.gsap-animate');
    
    // Set initial state
    gsap.set(elements, { 
      y: -50,
      opacity: 0 
    });

    // Create animation for each element
    elements.forEach((element, index) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        }
      });
    });
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="contact-container" ref={formRef}>
        {/* Decorative Elements */}
        <div className="leaf-decoration left"></div>
        <div className="leaf-decoration right"></div>

        {/* Form Content */}
        <div className="contact-form-header">
          <h3 className="contact-subheading gsap-animate">GET IN TOUCH WITH US</h3>
          <h2 className="contact-heading gsap-animate">How we can help you?</h2>
        </div>

        <form className="contact-form">
          <div className="contact-form-row">
            <div className="contact-form-group gsap-animate">
              <label>YOUR NAME*</label>
              <div className="contact-input-container">
                <input type="text" placeholder="What's your good name?" required />
                <span className="contact-input-icon">😊</span>
              </div>
            </div>

            <div className="contact-form-group gsap-animate">
              <label>YOUR EMAIL ADDRESS*</label>
              <div className="contact-input-container">
                <input type="email" placeholder="Enter your email address" required />
                <span className="contact-input-icon">✉️</span>
              </div>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-group gsap-animate">
              <label>YOUR PHONE NUMBER*</label>
              <div className="contact-input-container">
                <input type="tel" placeholder="Enter your phone number" required />
                <span className="contact-input-icon">📞</span>
              </div>
            </div>

            <div className="contact-form-group gsap-animate">
              <label>YOUR SUBJECT</label>
              <div className="contact-input-container">
                <input type="text" placeholder="How can we help you?" />
                <span className="contact-input-icon">📝</span>
              </div>
            </div>
          </div>

          <div className="contact-form-group full-width gsap-animate">
            <label>YOUR MESSAGE</label>
            <div className="contact-input-container">
              <textarea placeholder="Describe about your message" rows="4"></textarea>
              <span className="contact-input-icon">💭</span>
            </div>
          </div>

          <p className="contact-privacy-notice gsap-animate">
            We are committed to protecting your privacy. We will never collect information about you without your explicit consent.
          </p>

          <button type="submit" className="contact-submit-button gsap-animate">
            <span>SEND MESSAGE</span>
            <span className="contact-button-icon">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;