import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from './Banner-Page/Banner';
import Industries from './Industries/Industries';
import IndustriesDesktop from './Industries/IndustriesDesktop'; // Import desktop version
import Process from './Process/Process';
import CallToAction from './CallToAction/CallToAction';
import NewTestimonialCarousel from "./Testimonial/NewTestimonialCarousel";
import NewForm from "./FormPage/NewForm";
import NewServices from "./Services/NewServices";
import PortfolioSection from "./Portfolio/PortfolioSection";
import WhyChoose from "./WhyChoose/WhyChoose";
import NewCta from "../About-Page/New-CTA/NewCta";

gsap.registerPlugin(ScrollTrigger);

// Responsive Industries component
const ResponsiveIndustries = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile ? <Industries /> : <IndustriesDesktop />;
};

const Home = () => {
  const sectionRef = useRef(null);
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
    // Make sure sectionRef.current exists before trying to query it
    if (!sectionRef.current) return;

    // Only apply animations if not on mobile
    if (!isMobile) {
      const components = sectionRef.current.querySelectorAll(".animate");

      components.forEach((component) => {
        gsap.fromTo(
          component,
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: component,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else {
      // For mobile, ensure all sections are visible without animations
      const components = sectionRef.current.querySelectorAll(".animate");
      components.forEach((component) => {
        gsap.set(component, { opacity: 1, y: 0 });
      });
    }
  }, [isMobile]); // Re-run when isMobile changes

  return (
    <>
      <Banner />
      <section className="animated-section" ref={sectionRef}>
        <div className="animate">
          <NewServices />
        </div>
        <div className="animate">
          <ResponsiveIndustries />
        </div>
        <div className="animate">
          <WhyChoose />
        </div>
       
        <div className="animate">
          <PortfolioSection />
        </div>
        <div className="animate">
            <NewTestimonialCarousel />
        </div>
      
       
          <NewCta />
        
        <div className="animate">
          <Process />
        </div>
        <div className="animate">
          <NewForm />
        </div>
      </section>
    </>
  );
};

export default Home;