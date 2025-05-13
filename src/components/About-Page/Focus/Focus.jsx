import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Focus.css";

gsap.registerPlugin(ScrollTrigger);

const Focus = () => {
  const quotesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile devices
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // Only apply animations if not on mobile
    if (!isMobile) {
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
      
      // Cleanup function for desktop animations
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else {
      // For mobile, ensure all quotes are visible without animations
      quotesRef.current.forEach((quote) => {
        if (quote) {
          gsap.set(quote, { opacity: 1, y: 0 });
        }
      });
    }
  }, [isMobile]); // Re-run when isMobile changes

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
        {/* <button className="focus-cta-button">
          <span className="focus-button-text"><span style={{color:'black'}}>SEE</span> WHAT WE DO</span>
          <div className="focus-button-circle"></div>
        </button> */}
      </div>

      {/* Right Section */}
      <div className="focus-right-section">
        <div className="focus-quotes-container">
          <div className="focus-quote-item" ref={(el) => (quotesRef.current[0] = el)}>
            <span className="focus-quote-number">01</span>
            <h3>Creative strategy</h3>
            <p>We craft innovative marketing strategies, which inspire engagement from your target audience.</p>
            <div className="focus-underline"></div>
          </div>

          <div className="focus-quote-item right" ref={(el) => (quotesRef.current[1] = el)}>
            <span className="focus-quote-number">02</span>
            <h3>Unique design</h3>
            <p>We deliver distinctive visual aesthetics, which capture the essence of your brand identity.</p>
            <div className="focus-underline"></div>
          </div>

          <div className="focus-quote-item" ref={(el) => (quotesRef.current[2] = el)}>
            <span className="focus-quote-number">03</span>
            <h3>Great development</h3>
            <p>We build powerful technical solutions, which ensure seamless functionality for your digital presence.</p>
            <div className="focus-underline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;