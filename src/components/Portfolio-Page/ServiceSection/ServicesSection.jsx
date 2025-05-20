import { useState, useEffect, useRef } from 'react';
import './ServicesSection.css';
import { gsap } from 'gsap';
import webIcon from '../../Images/webIcon.jpg'
import appIcon from '../../Images/appIcon.jpg'
import seoIcon from '../../Images/seoIcon.jpg'
import digitalIcon from '../../Images/digitalIcon.jpg'

const ServeCard = ({ title, description, iconUrl, keywords, index }) => {
  const cardRef = useRef(null);
  const iconContainerRef = useRef(null);
  const iconRef = useRef(null);
  
  useEffect(() => {
    // Animation for each card
    gsap.fromTo(
      cardRef.current,
      { 
        y: 20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.4, 
        delay: index * 0.1
      }
    );
  }, [index]);

  // Handle hover animations manually instead of CSS for better performance
  const handleMouseEnter = () => {
    gsap.to(iconContainerRef.current, { rotation: 45, duration: 0.4 });
    gsap.to(iconRef.current, { rotation: -45, duration: 0.4 });
  };

  const handleMouseLeave = () => {
    gsap.to(iconContainerRef.current, { rotation: 0, duration: 0.4 });
    gsap.to(iconRef.current, { rotation: 0, duration: 0.4 });
  };

  return (
    <div 
      className="serve-card" 
      ref={cardRef}
      data-keywords={keywords}
    >
      <div 
        className="serve-icon-wrapper"
        ref={iconContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          ref={iconRef}
          src={iconUrl} 
          alt={`Professional ${title} services`}
          className="serve-icon"
          loading="lazy"
        />
      </div>
      <h3 className="serve-title">{title}</h3>
      <p className="serve-description">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const separatorRef = useRef(null);
  const introTextRef = useRef(null);
  const buttonRef = useRef(null);
  
  // SEO-optimized service data
  const services = [
    {
      title: "Web Development",
      description: "Expert website development with responsive design & SEO optimization. We build fast, conversion-focused sites that rank well in search results and deliver measurable business results.",
      iconUrl: webIcon,
      keywords: "web development, responsive design, website optimization, custom websites"
    },
    {
      title: "App Development",
      description: "Native iOS & Android app development using React Native & Flutter. Our mobile solutions focus on performance, user experience, and cross-platform functionality to maximize your market reach.",
      iconUrl: appIcon,
      keywords: "mobile app development, iOS apps, Android apps, React Native"
    },
    {
      title: "SEO Services",
      description: "Results-driven SEO strategies that boost organic rankings & traffic. Our comprehensive approach includes technical SEO, content optimization, and strategic link building for sustained growth.",
      iconUrl: seoIcon,
      keywords: "SEO services, search engine optimization, keyword ranking, organic traffic"
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns with proven ROI. Our expertise in PPC, social media, and content marketing helps businesses increase visibility, engagement, and customer acquisition.",
      iconUrl: digitalIcon,
      keywords: "digital marketing, PPC campaigns, social media marketing, content strategy"
    }
  ];

  useEffect(() => {
    // Main section animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8
      }
    );

    // Staggered animation for intro elements
    const introTimeline = gsap.timeline();

    introTimeline
      .fromTo(headingRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      .fromTo(separatorRef.current, { width: 0 }, { width: "5rem", duration: 0.3 })
      .fromTo(introTextRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(buttonRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });

  }, []);

  return (
    <section className="serve-section" ref={sectionRef} id="services">
      <div className="serve-container">
        <div className="serve-grid">
          <div className="serve-intro">
            <span className="serve-label">OUR SERVICES</span>
            <h2 className="serve-heading" ref={headingRef}>
              DIGITAL SOLUTIONS THAT DRIVE GROWTH & RANKINGS
            </h2>
            <div className="serve-separator" ref={separatorRef}></div>
            <p className="serve-intro-text" ref={introTextRef}>
              We deliver high-performance web development, mobile apps, and SEO services 
              that elevate your online presence. Our strategic digital solutions are designed 
              to improve search rankings and deliver measurable business results.
            </p>
            {/* <button className="serve-cta-button" ref={buttonRef}>
              EXPLORE OUR SERVICES
            </button> */}
          </div>

          <div className="serve-cards">
            {services.map((service, index) => (
              <ServeCard
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                iconUrl={service.iconUrl}
                keywords={service.keywords}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;