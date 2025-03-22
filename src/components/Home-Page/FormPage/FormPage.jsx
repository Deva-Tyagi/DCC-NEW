import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from 'emailjs-com';
import "./FormPage.css";

gsap.registerPlugin(ScrollTrigger);

const FormPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    budget: '',
    description: '',
    nda: false,
    captcha: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));

  useEffect(() => {
    const formElements = formRef.current.querySelectorAll(".form-page > div");

    gsap.fromTo(
      formElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(formData.captcha) !== num1 + num2) {
      setMessage('Incorrect CAPTCHA. Please try again.');
      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_cbzqjjg',
      'template_d72f7ua',
      {
        fullName: formData.fullName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        budget: formData.budget,
        description: formData.description,
        nda: formData.nda ? 'Yes' : 'No',
        captcha: formData.captcha
      },
      'TTXQvIwpY_a9NYT-7'
    )
    .then((response) => {
      setMessage('Email sent successfully!');
      setTimeout(() => setMessage(''), 4000);
      e.target.reset();
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        budget: '',
        description: '',
        nda: false,
        captcha: ''
      });
      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
    })
    .catch((error) => {
      setMessage('Failed to send email. Please try again.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="form-main" ref={formRef}>
      <div className="form-page">
        <div className="left-section">
          <h1>
            <span style={{ color: "#ff4500" }}>Our Technology</span> Experts
            Are Change Catalysts
          </h1>
          <p>Book A Free Consultation Call With Our Experts Today</p>
        </div>
        <div className="right-section">
          <form className="form" onSubmit={handleSubmit}>
            {message && (
              <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              onChange={handleChange}
              value={formData.fullName}
            />

            <label htmlFor="email">E-mail ID*</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              value={formData.email}
            />

            <label htmlFor="contactNumber">Contact Number*</label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter your contact number"
              required
              onChange={handleChange}
              value={formData.contactNumber}
            />

            <label htmlFor="budget">Select a Budget Range</label>
            <select 
              id="budget"
              onChange={handleChange}
              value={formData.budget}
            >
              <option value="" disabled>Select a budget range</option>
              <option value="low">Below $1,000</option>
              <option value="medium">$1,000 - $10,000</option>
              <option value="high">Above $10,000</option>
            </select>

            <label htmlFor="description">
              Describe Your Project/Idea In Brief (Helps Us Come Back Better
              Prepared)*
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Enter your project details"
              required
              onChange={handleChange}
              value={formData.description}
            ></textarea>

            <div className="checkbox-section">
              <input 
                type="checkbox" 
                id="nda"
                onChange={handleChange}
                checked={formData.nda}
              />
              <label htmlFor="nda">
                Include Copy of a Non-Disclosure Agreement
              </label>
            </div>

            <div className="captcha">
              <span>{num1} + {num2} =</span>
              <input 
                type="text" 
                id="captcha"
                placeholder="Enter result"
                onChange={handleChange}
                value={formData.captcha}
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Request Proposal'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
