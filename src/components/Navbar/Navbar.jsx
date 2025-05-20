import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import './Navbar.css';
import logo from '../Images/DCC1LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const formRef = useRef();
  const modalRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const openForm = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    emailjs.sendForm(
      'service_t1t7kqb',  
      'template_d72f7ua', 
      formRef.current, 
      '-UzTIlfx2uPhW3BV0'  
    )
    .then((result) => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // Close form after 2 seconds of successful submission
      setTimeout(() => {
        closeForm();
        setFormStatus({
          submitting: false,
          submitted: false,
          error: null
        });
      }, 2000);
    }, (error) => {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send the message. Please try again later."
      });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set active link based on current path
    setActiveLink(window.location.pathname);
    
    window.addEventListener('scroll', handleScroll);

    // Enhanced animations
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out", delay: 0.8 }
    );
    
    // Close popup form when clicking outside
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && isFormOpen) {
        closeForm();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpen]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Links */}
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
                <Link to="/" onClick={() => handleLinkClick('/')}>Home</Link>
              </li>
              <li className={`nav-item ${activeLink === '/about' ? 'active' : ''}`}>
                <Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
              </li>
              <li className={`nav-item ${activeLink === '/portfolio' ? 'active' : ''}`}>
                <Link to="/portfolio" onClick={() => handleLinkClick('/portfolio')}>Portfolio</Link>
              </li>
              <li className={`nav-item ${activeLink === '/contact-us' ? 'active' : ''}`}>
                <Link to="/contact-us" onClick={() => handleLinkClick('/contact-us')}>Contact</Link>
              </li>
            </ul>
            
            <div className="nav-cta">
              <a href="#" className="cta-button" onClick={openForm}>Get Started</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Popup Inquiry Form - Only changed class names and retained structure */}
      {isFormOpen && (
        <div className="modal-backdrop">
          <div className="modal-container" ref={modalRef}>
            <div className="modal-header">
              <h3>Get Started with Us</h3>
              <button className="modal-close" onClick={closeForm}>×</button>
            </div>
            
            <div className="modal-body">
              {formStatus.submitted ? (
                <div className="success-container">
                  <div className="success-icon">✓</div>
                  <h4>Thank You!</h4>
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address" 
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="phone">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number" 
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="message">Your Inquiry</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project or inquiry" 
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                  
                  {formStatus.error && (
                    <div className="error-container">
                      <p>{formStatus.error}</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;