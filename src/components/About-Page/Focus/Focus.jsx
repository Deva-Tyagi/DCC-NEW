import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Focus.css";

gsap.registerPlugin(ScrollTrigger);

const Focus = () => {
  const quotesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize mobile breakpoint to avoid recalculation
  const MOBILE_BREAKPOINT = useMemo(() => 768, []);

  // Optimize mobile detection with useCallback
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, [MOBILE_BREAKPOINT]);

  // Check if the screen is mobile-sized
  useEffect(() => {
    // Initial check
    checkIsMobile();

    // Debounced resize handler to improve performance
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 150);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkIsMobile]);

  useEffect(() => {
    // Only apply animations if not on mobile
    if (!isMobile && quotesRef.current.length > 0) {
      // Animate quotes on scroll with improved performance
      const animations = quotesRef.current.map((quote, index) => {
        if (!quote) return null;
        
        return gsap.fromTo(
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
              once: true, // Animate only once for better performance
            },
            delay: index * 0.2,
          }
        );
      });
      
      // Cleanup function for desktop animations
      return () => {
        animations.forEach(animation => animation && animation.kill());
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else if (isMobile) {
      // For mobile, ensure all quotes are visible without animations
      quotesRef.current.forEach((quote) => {
        if (quote) {
          gsap.set(quote, { opacity: 1, y: 0 });
        }
      });
    }
  }, [isMobile]); // Re-run when isMobile changes

  // SEO-optimized structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Business Solutions",
    "description": "Professional creative strategy, unique design, and advanced development services for digital transformation",
    "provider": {
      "@type": "Organization",
      "name": "Your Company Name"
    }
  }), []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="focus-landing-container" role="main" aria-labelledby="main-heading">
        {/* Left Section */}
        <div className="focus-left-section">
          <span className="focus-badge" role="banner">FOCUSED DIGITAL SOLUTIONS</span>
          <h1 id="main-heading">
            Transform Your Business with Innovative Digital Solutions and Technology Integration
          </h1>
          <p>
            We deliver cutting-edge digital transformation services that drive business growth, 
            enhance customer engagement, and streamline operations. With over 12 years of proven 
            expertise, we consistently deliver exceptional results that exceed client expectations.
          </p>
        </div>

        {/* Right Section */}
        <aside className="focus-right-section" role="complementary" aria-label="Our digital services">
          <div className="focus-quotes-container">
            <article 
              className="focus-quote-item" 
              ref={(el) => (quotesRef.current[0] = el)}
              role="article"
              aria-labelledby="seo-strategy"
            >
              <span className="focus-quote-number" aria-hidden="true">01</span>
              <h2 id="seo-strategy" style={{color:'#64ffda'}}>Creative Marketing Strategy & Brand Development</h2>
              <p>We craft innovative marketing strategies and creative campaigns that inspire meaningful engagement from your target audience and build lasting brand connections.</p>
              <div className="focus-underline" aria-hidden="true"></div>
            </article>

            <article 
              className="focus-quote-item right" 
              ref={(el) => (quotesRef.current[1] = el)}
              role="article"
              aria-labelledby="web-development"
            >
              <span className="focus-quote-number" aria-hidden="true">02</span>
              <h2 id="web-development" style={{color:'#64ffda'}}>Unique Design & User Experience Solutions</h2>
              <p>We deliver distinctive visual aesthetics and intuitive user interfaces that capture the essence of your brand identity while ensuring optimal user experience.</p>
              <div className="focus-underline" aria-hidden="true"></div>
            </article>

            <article 
              className="focus-quote-item" 
              ref={(el) => (quotesRef.current[2] = el)}
              role="article"
              aria-labelledby="content-marketing"
            >
              <span className="focus-quote-number" aria-hidden="true">03</span>
              <h2 id="content-marketing" style={{color:'#64ffda'}}>Advanced Development & Technical Solutions</h2>
              <p>We build powerful, scalable technical solutions with cutting-edge technologies that ensure seamless functionality and optimal performance for your digital presence.</p>
              <div className="focus-underline" aria-hidden="true"></div>
            </article>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Focus;