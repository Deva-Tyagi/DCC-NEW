import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Landing.css';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const changingWordRef = useRef(null);
  const numberRefs = useRef([]);
  const containerRef = useRef(null);
  
  const words = [ 'Namaste', 'Hello', 'Salve'];

  useEffect(() => {
    // Word changing animation
    const wordsTl = gsap.timeline({ repeat: -1 });

    words.forEach(word => {
      wordsTl.to(changingWordRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        onComplete: () => {
          changingWordRef.current.textContent = word;
        }
      })
      .to(changingWordRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0
      })
      .to(changingWordRef.current, {
        duration: 2,
        opacity: 1
      }); 
    });

    const numbers = [
      { ref: numberRefs.current[0], end: 9.98, decimals: 2 },
      { ref: numberRefs.current[1], end: 30, suffix: 'k', decimals: 0 },
      { ref: numberRefs.current[2], end: 96, suffix: '%', decimals: 0 },
      { ref: numberRefs.current[3], end: 16, suffix: '+', decimals: 0 }
    ];

    numbers.forEach((number) => {
      if (!number.ref) return; 
      gsap.fromTo(
        number.ref,
        { innerText: 0 }, 
        {
          duration: 2,
          innerText: number.end, 
          ease: "power1.out",
          snap: { innerText: 1 }, 
          onUpdate: function () {
            const value = parseFloat(this.targets()[0].innerText);
            number.ref.textContent = value.toFixed(number.decimals) + (number.suffix || '');
          },
          scrollTrigger: {
            trigger: number.ref,
            start: "top center",
            once: true 
          }
        }
      );
    });

    return () => {
      wordsTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="landing-container" ref={containerRef}>
      <div className="landing-content-wrapper">
        <div className="landing-header-section">
          <h1 className="landing-main-title">
            Say <span ref={changingWordRef} className="landing-changing-word">salve</span> <span className="landing-emoji">☺</span>
          </h1>
          <p className="landing-description">
            Lorem ipsum is simply dummy text the printing and typesetting 
            industry. Lorem ipsum has been the standard dummy text ever 
            since the when an unknown printer took galley.
          </p>
        </div>

        <div className="landing-stats-section">
          <div className="landing-stat-item">
            <span className="landing-stat-number" ref={el => numberRefs.current[0] = el}>0</span>
            <span className="landing-stat-label">Google reviews</span>
          </div>
          <div className="landing-stat-item">
            <span className="landing-stat-number" ref={el => numberRefs.current[1] = el}>0</span>
            <span className="landing-stat-label">Instagram followers</span>
          </div>
          <div className="landing-stat-item">
            <span className="landing-stat-number" ref={el => numberRefs.current[2] = el}>0</span>
            <span className="landing-stat-label">Repeat customers</span>
          </div>
          <div className="landing-stat-item">
            <span className="landing-stat-number" ref={el => numberRefs.current[3] = el}>0</span>
            <span className="landing-stat-label">Years of experience</span>
          </div>
        </div>

        <div className="landing-bottom-section">
          <h2 className="landing-secondary-title">Powering digital success through intelligent solutions</h2>
          <button className="landing-book-button">
            <span className="landing-default-text">BOOK AN APPOINTMENT →</span>
            <span className="landing-hover-text">CLICK PLEASE →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;