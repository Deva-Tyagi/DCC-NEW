import React, { useEffect, useRef, useState } from 'react';
import './NewServices.css';
import { gsap } from 'gsap/gsap-core';

// SVG Icons
const WebsiteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8H8C6.343 8 5 9.343 5 11V29C5 30.657 6.343 32 8 32H32C33.657 32 35 30.657 35 29V11C35 9.343 33.657 8 32 8Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 20L20 25L30 15" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MarketingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30V20" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 30V10" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 30V18" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 10L24 16" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SocialMediaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15C11.1046 15 12 14.1046 12 13C12 11.8954 11.1046 11 10 11C8.89543 11 8 11.8954 8 13C8 14.1046 8.89543 15 10 15Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 15C31.1046 15 32 14.1046 32 13C32 11.8954 31.1046 11 30 11C28.8954 11 28 11.8954 28 13C28 14.1046 28.8954 15 30 15Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 29C31.1046 29 32 28.1046 32 27C32 25.8954 31.1046 25 30 25C28.8954 25 28 25.8954 28 27C28 28.1046 28.8954 29 30 29Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5 14.5L18.5 18.5" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 21.5L11.5 25.5" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.5 18.5L28.5 14.5" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28.5 25.5L21.5 21.5" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GraphicDesignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 24V32" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 20H8" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 20H26" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 16V8" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SEOIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 15L25 25" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 17C29.2091 17 31 15.2091 31 13C31 10.7909 29.2091 9 27 9C24.7909 9 23 10.7909 23 13C23 15.2091 24.7909 17 27 17Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 31C15.2091 31 17 29.2091 17 27C17 24.7909 15.2091 23 13 23C10.7909 23 9 24.7909 9 27C9 29.2091 10.7909 31 13 31Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EcommerceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11H33L30 24H15L12 11Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 31C16.1046 31 17 30.1046 17 29C17 27.8954 16.1046 27 15 27C13.8954 27 13 27.8954 13 29C13 30.1046 13.8954 31 15 31Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 31C31.1046 31 32 30.1046 32 29C32 27.8954 31.1046 27 30 27C28.8954 27 28 27.8954 28 29C28 30.1046 28.8954 31 30 31Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.66 8H7" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AppDevIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 7H15C13.8954 7 13 7.89543 13 9V31C13 32.1046 13.8954 33 15 33H25C26.1046 33 27 32.1046 27 31V9C27 7.89543 26.1046 7 25 7Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 27H20.01" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 13H30" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 20H30" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 27H30" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 27C14 28.1046 13.1046 29 12 29C10.8954 29 10 28.1046 10 27C10 25.8954 10.8954 25 12 25C13.1046 25 14 25.8954 14 27Z" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const servicesData = [
  {
    id: 1,
    title: "Website Design and Development",
    description: "We create visually appealing and user-friendly websites tailored to meet your business needs and provide a seamless user experience.",
    Icon: WebsiteIcon
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Our digital marketing strategies are designed to maximize your ROI and grow your business online.",
    Icon: MarketingIcon
  },
  {
    id: 3,
    title: "Social Media Management",
    description: "We manage your social media platforms to build engagement, grow your audience, and enhance your online presence.",
    Icon: SocialMediaIcon
  },
  {
    id: 4,
    title: "Branding & Graphic Design",
    description: "We craft compelling brand identities and design visually stunning graphics to make your business stand out.",
    Icon: GraphicDesignIcon
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Our SEO strategies ensure your website ranks higher on search engines, increasing visibility and driving more organic traffic.",
    Icon: SEOIcon
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description: "We provide comprehensive e-commerce solutions to help you establish and grow your online store effortlessly.",
    Icon: EcommerceIcon
  },
  {
    id: 7,
    title: "App Development",
    description: "Create intuitive mobile applications that extend your brand reach and provide value to users.",
    Icon: AppDevIcon
  },
  {
    id: 8,
    title: "Content Strategy",
    description: "Our content creation services deliver high-quality, engaging content to effectively communicate your brand message.",
    Icon: ContentIcon
  }
];

const NewServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const cardsRef = useRef([]);
  const iconCloneRefs = useRef([]);

  // Determine number of cards per slide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setCardsPerSlide(2);
      } else if (window.innerWidth < 1200) {
        setCardsPerSlide(3);
      } else {
        setCardsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Setup GSAP animations for icon hover effect
// Setup GSAP animations for icon hover effect
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card || !iconCloneRefs.current[index]) return;

      // Get the position of the original icon in the card
      const getIconPosition = () => {
        const iconEl = card.querySelector('.new-card-icon');
        if (!iconEl) return { top: 0, left: 0 };
        const iconRect = iconEl.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        return {
          top: iconRect.top - cardRect.top,
          left: iconRect.left - cardRect.left
        };
      };

      // Initialize icon clone position (hidden but positioned at the original icon)
      const updateInitialPosition = () => {
        const pos = getIconPosition();
        gsap.set(iconCloneRefs.current[index], {
          opacity: 0,
          scale: 0.8,
          top: `${pos.top}px`,
          left: `${pos.left}px`,
          bottom: 'auto',
          right: 'auto'
        });
      };
      
      // Set initial position
      updateInitialPosition();

      // Create hover animation
      const enterAnimation = () => {
        // First become visible at the original icon position
        gsap.set(iconCloneRefs.current[index], {
          opacity: 1,
          scale: 0.8
        });
        // Then animate to the bottom right
        gsap.to(iconCloneRefs.current[index], {
          bottom: '20px',
          right: '20px',
          top: 'auto',
          left: 'auto',
          scale: 1,
          duration: 0.6,
          ease: "power2.out"
        });
      };

      const leaveAnimation = () => {
        const pos = getIconPosition();
        // Animate back to the original icon position
        gsap.to(iconCloneRefs.current[index], {
          top: `${pos.top}px`,
          left: `${pos.left}px`,
          bottom: 'auto',
          right: 'auto',
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.in"
        });
      };

      card.addEventListener('mouseenter', enterAnimation);
      card.addEventListener('mouseleave', leaveAnimation);

      return () => {
        card?.removeEventListener('mouseenter', enterAnimation);
        card?.removeEventListener('mouseleave', leaveAnimation);
      };
    });
  }, [currentSlide, cardsPerSlide]);

  const totalSlides = Math.ceil(servicesData.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const visibleCards = servicesData.slice(startIndex, startIndex + cardsPerSlide);

    return visibleCards.map((service, idx) => {
      const actualIndex = startIndex + idx;
      return (
        <div 
          className="new-service-card"
          key={service.id} 
          ref={el => cardsRef.current[actualIndex] = el}
        >
          <div className="new-card-content">
            <div className="new-card-icon">
              <service.Icon />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {/* <div className="new-service-details">
              <span>SERVICE DETAILS</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div> */}
          </div>
          <div 
            className="new-icon-clone"
            ref={el => iconCloneRefs.current[actualIndex] = el}
          >
            <service.Icon />
          </div>
          <div className="new-card-border-top"></div>
          <div className="new-card-border-left"></div>
        </div>
      );
    });
  };

  return (
    <div className="new-services-section">
      <div className="new-services-heading">
        <h2>Crafting digital solutions tailored to your unique business needs.</h2>
        <p>Our designs prioritize user experience, ensuring seamless navigation and interaction for your site visitors.</p>
      </div>
      
      <div className="new-carousel-container">
        <button 
          className="new-carousel-btn new-prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <div className="new-services-carousel">
          {renderCards()}
        </div>
        
        <button 
          className="new-carousel-btn new-next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
      <div className="new-carousel-dots">
        {[...Array(totalSlides)].map((_, i) => (
          <button 
            key={i} 
            className={`new-dot ${currentSlide === i ? 'new-active' : ''}`} 
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

function NewServices() {
  return (
    <div className="new-app">
      <NewServicesCarousel />
    </div>
  );
}

export default NewServices;