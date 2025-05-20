import { useState, useEffect, useCallback } from 'react';
import './NewCta.css';
import { Link } from 'react-router-dom';
import BRlogo from '../../Images/BRlogo.jpg';
import FCHlogo from '../../Images/FCHlogo.png';
import WaveLogo from '../../Images/WaveLogo.png';
import SIPLlogo from '../../Images/SIPLlogo.jpg';
import MICClogo from '../../Images/MICClogo.png';
import divyaLogo from '../../Images/divyaLogo.jpg';
import AGFlogo from '../../Images/AGFlogo.jpg';
import emailjs from '@emailjs/browser';

// EmailJS service configuration
const EMAILJS_SERVICE_ID = 'service_t1t7kqb';
const EMAILJS_TEMPLATE_ID = 'template_d72f7ua';
const EMAILJS_PUBLIC_KEY = '-UzTIlfx2uPhW3BV0';

const NewCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const closeForm = useCallback(() => {
    setIsFormOpen(false);
    setSubmitStatus('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Implement EmailJS functionality
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        
        // Close form after success message
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus('');
        }, 2000);
      } else {
        throw new Error('Email not sent');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="new-cta-section" aria-label="Web Development Services">
      {/* Background elements */}
      <div className="new-background-gradient"></div>
      <div className="new-circle-top"></div>
      <div className="new-circle-bottom"></div>
      
      <div className={`new-content-container ${isVisible ? 'new-visible' : ''}`}>
        <h2 className="new-heading">
          Expert Web Development Solutions for Business Growth & Digital Success
        </h2>
        
        <p className="new-subheading">
          Leading startups and enterprise MSMEs trust our front-end development experts for mission-critical
          projects. Partner with our skilled professionals to create responsive, accessible, and high-performance
          web experiences that drive measurable business results.
        </p>
        
        {/* Features section */}
        <div className="new-features-grid">
          <div className="new-feature-card">
            <div className="new-icon-container">
              <svg className="new-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 2L5 9H9V18H15V9H19Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="new-feature-title">Premium Quality</h3>
            <p className="new-feature-description">Expert developers delivering polished solutions</p>
          </div>
          
          <div className="new-feature-card">
            <div className="new-icon-container">
              <svg className="new-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="new-feature-title">Dedicated Team</h3>
            <p className="new-feature-description">Skilled professionals focused on your success</p>
          </div>
          
          <div className="new-feature-card">
            <div className="new-icon-container">
              <svg className="new-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="new-feature-title">Technical Excellence</h3>
            <p className="new-feature-description">Innovative solutions with cutting-edge tech</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="new-button-container">
          <button className="new-cta-button" onClick={() => setIsFormOpen(true)}>
            <span className="new-button-shine"></span>
            <span className="new-button-text">Schedule a free consultation</span>
            <svg className="new-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="new-trust-indicators">
          <p className="new-trust-text">Trusted by innovative companies worldwide</p>
          <div className="new-logos-container">
            {[BRlogo, WaveLogo, SIPLlogo, MICClogo, divyaLogo, AGFlogo].map((logo, index) => (
              <div className="new-logo-placeholder" key={index}>
                <img src={logo} alt="Client company logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Form Modal */}
      {isFormOpen && (
        <div className="form-modal-overlay" onClick={closeForm}>
          <div className="form-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="form-modal-content">
              <button className="form-close-button" onClick={closeForm} aria-label="Close form">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="form-header">
                <h3 className="form-title">Schedule Your Free Development Consultation</h3>
                <p className="form-subtitle">Let's discuss your web development requirements</p>
              </div>

              {submitStatus === 'success' ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="consultation-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Tell us about your project requirements..."
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="form-error">
                      <p>Something went wrong. Please try again later.</p>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="form-submit-button"
                    disabled={isSubmitting}
                  >
                    <span className="submit-button-content">
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewCta;