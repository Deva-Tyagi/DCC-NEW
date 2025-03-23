import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Focus.css";

gsap.registerPlugin(ScrollTrigger);

const Focus = () => {
  const quotesRef = useRef([]);

  useEffect(() => {
    // Animate quotes on scroll
    quotesRef.current.forEach((quote, index) => {
      gsap.fromTo(
        quote,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 85%",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="focus-landing-container">
      {/* Left Section */}
      <div className="focus-left-section">
        <span className="focus-badge">FOCUSED AREA</span>
        <h1>We want to bring business and the digital world.</h1>
        <p>
          We are excited for our work and how it positively impacts clients.
          With over 12 years of experience, we have been constantly providing
          excellence.
        </p>
        <button className="focus-cta-button">
          <span className="focus-button-text">SEE WHAT WE DO</span>
          <div className="focus-button-circle"></div>
        </button>
      </div>

      {/* Right Section */}
      <div className="focus-right-section">
        <div className="focus-quotes-container">
          <div className="focus-quote-item" ref={(el) => (quotesRef.current[0] = el)}>
            <span className="focus-quote-number">01</span>
            <h3>Creative strategy</h3>
            <p>We create compelling web designs, which are the right for your target groups.</p>
            <div className="focus-underline"></div>
          </div>

          <div className="focus-quote-item right" ref={(el) => (quotesRef.current[1] = el)}>
            <span className="focus-quote-number">02</span>
            <h3>Unique design</h3>
            <p>We create compelling web designs, which are the right for your target groups.</p>
            <div className="focus-underline"></div>
          </div>

          <div className="focus-quote-item" ref={(el) => (quotesRef.current[2] = el)}>
            <span className="focus-quote-number">03</span>
            <h3>Great development</h3>
            <p>We create compelling web designs, which are the right for your target groups.</p>
            <div className="focus-underline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;