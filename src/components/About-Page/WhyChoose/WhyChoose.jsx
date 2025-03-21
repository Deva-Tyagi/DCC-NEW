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

   
  }, []);

  return (
    <div className="why-page-container">
      <div className="why-right-section" ref={rightSectionRef}>
        <div className="why-heading-content">
          <h1 ref={headingRef}>WHY CHOOSE US?</h1>
          <p>Choose us for innovation that drives progress, reliability you can trust, and results that consistently exceed expectations. Our commitment to excellence ensures your goals are not only met but surpassed, delivering unparalleled value.</p>
        </div>
        <div className="why-features-row">
          <div className="why-calendar-card">
            <div className="why-calendar-icon"></div>
            <h2>Excellence in Every Project</h2>
            <p>We bring expertise and passion to every project, from e-commerce websites to digital presence management for healthcare providers.</p>
          </div>
          <div className="why-settings-card">
            <div className="why-gear-icon"></div>
            <h2>Specialized Team of Experts</h2>
            <p>Our team consists of specialists in design, development, SEO, and more, ensuring top-quality results in every area.</p>
          </div>
        </div>
      </div>

      <div className="why-center-section" ref={owlImageRef}>
        <img src={owl} alt="White owl" className="why-owl-image" />
      </div>

      <div className="why-left-section" ref={leftSectionRef}>
        <div className="why-content-stack">
          <div className="why-icon-card">
            <div className="why-lightbulb-icon"></div>
            <h2>Tailored Industry Solutions</h2>
            <p>Whether it’s real estate, hospitality, or fashion, we understand your industry’s unique needs and provide custom solutions.</p>
          </div>
          <div className="why-time-card">
            <div className="why-clock-icon"></div>
            <h2>Exceeding Expectations</h2>
            <p>We don’t just meet expectations; we exceed them with creative, data-driven strategies to help your business stand out.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;