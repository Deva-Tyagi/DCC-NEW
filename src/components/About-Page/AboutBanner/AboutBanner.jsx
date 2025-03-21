// AboutBanner.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './AboutBanner.css';

const AboutBanner = () => {
  const loaderRef = useRef(null);
  const imageRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Loader Animation
    tl.to(loaderRef.current, {
      duration: 0.8,
      opacity: 0,
      display: 'none',
      ease: 'power2.out'
    });

    // Image Animation
    tl.fromTo(imageRef.current, 
      {
        x: '100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    );

    // Circles Animation
    tl.fromTo([circle2Ref.current, circle1Ref.current],
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }
    );

    // Content Animation
    tl.fromTo(contentRef.current.children,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <div className="about-banner">
      {/* Loader */}
      <div ref={loaderRef} className="about-banner-loader">
        <div className="about-banner-loader-spinner"></div>
      </div>

      {/* Main Content */}
      <div className="about-banner-main-container">
        <div ref={imageRef} className="about-banner-background-image">
          <div className="circles-container">
            <div ref={circle2Ref} className="circle circle-2"></div>
            <div ref={circle1Ref} className="circle circle-1"></div>
          </div>
          
          <div ref={contentRef} className="about-banner-content">
            <div className="about-banner-support-tag">
              <span className="about-banner-icon">⚡</span>
              <span>ON DEMAND LIVE SUPPORT</span>
            </div>
            
            <h1>Awesome solutions<br />for your business</h1>
            
            <p>We're a fully dedicated corporate service agency<br />
               collaborating with brands all over the world.</p>
            
            <button className="about-banner-cta-button">
              Get started now
              <span className="about-banner-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;