import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './WhyChoose.css';
import owl from './whiteowl1.png'

const WhyChoose = () => {
  const rightSectionRef = useRef(null);
  const leftSectionRef = useRef(null);
  const owlImageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Only apply animations on larger screens where they won't cause performance issues
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
      gsap.from(headingRef.current, {
        y: -50,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(owlImageRef.current, {
        scale: 0.7,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)"
      });

      gsap.from([leftSectionRef.current, rightSectionRef.current], {
        x: index => index === 0 ? -100 : 100,
        duration: 0.8,
        delay: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    } else {
      // Simple fade-in for mobile to prevent performance issues
      gsap.from([headingRef.current, owlImageRef.current, leftSectionRef.current, rightSectionRef.current], {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  }, []);

  return (
    <div className="why-page-container">
      <div className="why-right-section" ref={rightSectionRef}>
        <div className="why-heading-content">
          <h1 ref={headingRef}>PROFESSIONAL WEB DEVELOPMENT SERVICES</h1>
          <p>Partner with our top-rated web development agency for custom websites, e-commerce solutions, and SEO optimization that drives traffic and boosts conversions. Our proven strategies deliver measurable ROI and competitive advantages in your industry.</p>
        </div>
        <div className="why-features-row">
          <div className="why-calendar-card">
            <div className="why-calendar-icon"></div>
            <h2>Custom Website Development</h2>
            <p>Our expert developers build responsive, mobile-friendly websites optimized for speed, search engines, and conversions to maximize your online performance.</p>
          </div>
          <div className="why-settings-card">
            <div className="why-gear-icon"></div>
            <h2>Technical SEO Expertise</h2>
            <p>We implement advanced SEO techniques including structured data, schema markup, and Core Web Vitals optimization for superior Google rankings.</p>
          </div>
        </div>
      </div>

      <div className="why-center-section">
        <img src={owl} alt="Professional web development services" className="why-owl-image" ref={owlImageRef} />
      </div>

      <div className="why-left-section" ref={leftSectionRef}>
        <div className="why-content-stack">
          <div className="why-icon-card">
            <div className="why-lightbulb-icon"></div>
            <h2>Industry-Specific Solutions</h2>
            <p>We specialize in e-commerce, healthcare, real estate, and B2B website development with industry-specific optimizations for higher conversions and engagement.</p>
          </div>
          <div className="why-time-card">
            <div className="why-clock-icon"></div>
            <h2>Conversion-Focused Design</h2>
            <p>Our UX/UI experts create engaging, accessible websites with strategic CTAs and optimized user journeys that convert visitors into loyal customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;