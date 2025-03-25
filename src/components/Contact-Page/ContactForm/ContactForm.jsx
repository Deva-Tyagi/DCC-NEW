import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
import './ContactForm.css';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const elements = formRef.current.querySelectorAll('.gsap-animate');

    gsap.set(elements, { y: -50, opacity: 0 });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_t1t7kqb', // Service ID
      'template_d72f7ua', // Template ID
      formData,
      'x7-x0U_4DyyV1CiDW' // Public Key (User ID)
    ).then((response) => {
      setMessage('Message sent successfully!');
      setTimeout(() => setMessage(''), 4000); 
      setFormData({ fullName: '', email: '', contactNumber: '', subject: '', description: '' });
    }).catch((error) => {
      setMessage('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container" ref={formRef}>
        <div className="leaf-decoration left"></div>
        <div className="leaf-decoration right"></div>

        {message && <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</div>}

        <div className="contact-form-header">
          <h3 className="contact-subheading gsap-animate">GET IN TOUCH WITH US</h3>
          <h2 className="contact-heading gsap-animate">How we can help you?</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group gsap-animate">
              <label>YOUR NAME*</label>
              <input type="text" name="fullName" placeholder="What's your good name?" required value={formData.fullName} onChange={handleChange} />
            </div>

            <div className="contact-form-group gsap-animate">
              <label>YOUR EMAIL ADDRESS*</label>
              <input type="email" name="email" placeholder="Enter your email address" required value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-group gsap-animate">
              <label>YOUR PHONE NUMBER*</label>
              <input type="tel" name="contactNumber" placeholder="Enter your phone number" required value={formData.contactNumber} onChange={handleChange} />
            </div>

            <div className="contact-form-group gsap-animate">
              <label>YOUR SUBJECT</label>
              <input type="text" name="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} />
            </div>
          </div>

          <div className="contact-form-group full-width gsap-animate">
            <label>YOUR MESSAGE</label>
            <textarea name="description" placeholder="Describe about your message" rows="4" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <div className="submit-button-wrapper">
            <button type="submit" className="contact-submit-button gsap-animate">
              <span>SEND MESSAGE</span>
              <span className="contact-button-icon">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;