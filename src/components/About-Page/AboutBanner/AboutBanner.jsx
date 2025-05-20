import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import emailjs from 'emailjs-com';
import './AboutBanner.css';

const AboutBanner = () => {
  const loaderRef = useRef(null);
  const imageRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const contentRef = useRef(null);
  const formContainerRef = useRef(null);
  const formRef = useRef(null);
  const emailFormRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState('form'); // 'form', 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(loaderRef.current, {
      duration: 0.8,
      opacity: 0,
      display: 'none',
      ease: 'power2.out'
    });
    tl.fromTo(imageRef.current, 
      { x: '100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
    tl.fromTo([circle2Ref.current, circle1Ref.current],
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }
    );
    tl.fromTo(contentRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  const openFormPopup = () => {
    if (formContainerRef.current) {
      formContainerRef.current.style.display = 'flex';
      formContainerRef.current.style.opacity = '0';
    }
    if (formRef.current) {
      formRef.current.style.transform = 'translateX(100%)';
      formRef.current.style.opacity = '0';
    }
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setFormState('form');
    setIsFormOpen(true);
    
    setTimeout(() => {
      const formTl = gsap.timeline();
      formTl.to(formContainerRef.current, {
        opacity: 1,
        duration: 0.4
      });
      formTl.to(formRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
      });
      formTl.fromTo(formRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    }, 10);
  };

  const closeFormPopup = () => {
    if (!formRef.current || !formContainerRef.current) return;
    const formTl = gsap.timeline({
      onComplete: () => {
        setIsFormOpen(false);
        setFormState('form');
        formContainerRef.current.style.display = 'none';
      }
    });
    formTl.to(formRef.current.children, {
      y: 15,
      opacity: 0,
      duration: 0.25,
      stagger: 0.04,
      ease: 'power2.in'
    });
    formTl.to(formRef.current, {
      x: '100%',
      opacity: 0,
      duration: 0.4,
      ease: 'power3.in'
    }, "-=0.15");
    formTl.to(formContainerRef.current, {
      opacity: 0,
      duration: 0.25
    }, "-=0.1");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailFormRef.current || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_t1t7kqb',
        'template_d72f7ua',
        emailFormRef.current,
        '-UzTIlfx2uPhW3BV0'
      );
      
      // Animate form state change to success
      const formTl = gsap.timeline();
      formTl.to(formRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      });
      formTl.call(() => {
        setFormState('success');
      });
      formTl.fromTo(formRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Animate form state change to error
      const formTl = gsap.timeline();
      formTl.to(formRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      });
      formTl.call(() => {
        setFormState('error');
      });
      formTl.fromTo(formRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    const formTl = gsap.timeline();
    formTl.to(formRef.current.children, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.in'
    });
    formTl.call(() => {
      setFormState('form');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    });
    formTl.fromTo(formRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
    );
  };

  return (
    <div className="about-banner">
      <div ref={loaderRef} className="about-banner-loader">
        <div className="about-banner-loader-spinner"></div>
      </div>

      <div className="about-banner-main-container">
        <div 
          ref={imageRef} 
          className={`about-banner-background-image ${isMobile ? 'mobile-background' : 'desktop-background'}`}
        >
          <div className="circles-container">
            <div ref={circle2Ref} className="circle circle-2"></div>
            <div ref={circle1Ref} className="circle circle-1"></div>
          </div>
          
          <div ref={contentRef} className="about-banner-content">
            <div className="about-banner-support-tag">
              <span className="about-banner-icon">⚡</span>
              <span>EXPERT BUSINESS CONSULTING</span>
            </div>
            
            <h1>Strategic Business Solutions That Drive Results</h1>
            
            <p>Accelerate your business growth with our award-winning 
              consulting services and innovative strategies tailored to your 
              industry needs.</p>
            
            <button 
              className="about-banner-cta-button"
              onClick={openFormPopup}
              aria-label="Request a consultation"
            >
              Request a consultation
              <span className="about-banner-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={formContainerRef} 
        className="popup-form-container"
        onClick={(e) => {
          if (e.target === formContainerRef.current) {
            closeFormPopup();
          }
        }}
      >
        <div ref={formRef} className="popup-form">
          <button className="close-button" onClick={closeFormPopup} aria-label="Close form">
            ×
          </button>
          
          {formState === 'form' && (
            <>
              <h2>Let's Transform Your Business</h2>
              <p>Fill out this form and our experts will contact you within 24 hours.</p>
              
              <form ref={emailFormRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business needs"
                    rows="3"
                    required
                    aria-required="true"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  aria-label="Submit consultation request"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </>
          )}

          {formState === 'success' && (
            <div className="form-state-display success-display">
              <div className="state-icon success-icon">
                <div className="checkmark">
                  <div className="checkmark-circle"></div>
                  <div className="checkmark-stem"></div>
                  <div className="checkmark-kick"></div>
                </div>
              </div>
              <h2>Request Submitted Successfully!</h2>
              <p>Thank you for your interest! Our experts will contact you within 24 hours to discuss your business needs.</p>
              <div className="state-actions">
                <button className="secondary-button" onClick={resetForm}>
                  Submit Another Request
                </button>
                <button className="primary-button" onClick={closeFormPopup}>
                  Close
                </button>
              </div>
            </div>
          )}

          {formState === 'error' && (
            <div className="form-state-display error-display">
              <div className="state-icon error-icon">
                <div className="error-mark">
                  <div className="error-circle"></div>
                  <div className="error-line error-line-1"></div>
                  <div className="error-line error-line-2"></div>
                </div>
              </div>
              <h2>Submission Failed</h2>
              <p>We encountered an issue while submitting your request. Please check your internet connection and try again.</p>
              <div className="state-actions">
                <button className="secondary-button" onClick={resetForm}>
                  Try Again
                </button>
                <button className="primary-button" onClick={closeFormPopup}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;