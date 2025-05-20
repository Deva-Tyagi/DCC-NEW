import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import "./NewServices.css";
import { gsap } from "gsap/gsap-core";

// Memoized SVG Icons to prevent re-renders
const WebsiteIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M32 8H8C6.343 8 5 9.343 5 11V29C5 30.657 6.343 32 8 32H32C33.657 32 35 30.657 35 29V11C35 9.343 33.657 8 32 8Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 20L20 25L30 15"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const MarketingIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 30V20"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 30V10"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 30V18"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 10L24 16"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const SocialMediaIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15C11.1046 15 12 14.1046 12 13C12 11.8954 11.1046 11 10 11C8.89543 11 8 11.8954 8 13C8 14.1046 8.89543 15 10 15Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 15C31.1046 15 32 14.1046 32 13C32 11.8954 31.1046 11 30 11C28.8954 11 28 11.8954 28 13C28 14.1046 28.8954 15 30 15Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 29C31.1046 29 32 28.1046 32 27C32 25.8954 31.1046 25 30 25C28.8954 25 28 25.8954 28 27C28 28.1046 28.8954 29 30 29Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 14.5L18.5 18.5"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 21.5L11.5 25.5"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 18.5L28.5 14.5"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.5 25.5L21.5 21.5"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const GraphicDesignIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 24V32"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 20H8"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 20H26"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 16V8"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const SEOIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M15 15L25 25"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 17C29.2091 17 31 15.2091 31 13C31 10.7909 29.2091 9 27 9C24.7909 9 23 10.7909 23 13C23 15.2091 24.7909 17 27 17Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 31C15.2091 31 17 29.2091 17 27C17 24.7909 15.2091 23 13 23C10.7909 23 9 24.7909 9 27C9 29.2091 10.7909 31 13 31Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const EcommerceIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 11H33L30 24H15L12 11Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 31C16.1046 31 17 30.1046 17 29C17 27.8954 16.1046 27 15 27C13.8954 27 13 27.8954 13 29C13 30.1046 13.8954 31 15 31Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 31C31.1046 31 32 30.1046 32 29C32 27.8954 31.1046 27 30 27C28.8954 27 28 27.8954 28 29C28 30.1046 28.8954 31 30 31Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.66 8H7"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const AppDevIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M25 7H15C13.8954 7 13 7.89543 13 9V31C13 32.1046 13.8954 33 15 33H25C26.1046 33 27 32.1046 27 31V9C27 7.89543 26.1046 7 25 7Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 27H20.01"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const ContentIcon = React.memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22 13H30"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 20H30"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 27H30"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 27C14 28.1046 13.1046 29 12 29C10.8954 29 10 28.1046 10 27C10 25.8954 10.8954 25 12 25C13.1046 25 14 25.8954 14 27Z"
      stroke="#FF3A3A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

// Memoized services data to prevent recreation on each render
const servicesData = [
  {
    id: 1,
    title: "Website Design and Development",
    description:
      "We build responsive, SEO-optimized websites that are fast, user-friendly, and designed to convert visitors into customers.",
    Icon: WebsiteIcon,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Our proven marketing tactics help increase traffic, generate quality leads, and boost your online visibility and brand growth.",
    Icon: MarketingIcon,
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "We optimize your social media to grow followers, improve engagement, and strengthen your brand across all major platforms.",
    Icon: SocialMediaIcon,
  },
  {
    id: 4,
    title: "Branding & Graphic Design",
    description:
      "We design impactful visual content and brand assets that reflect your identity and attract the attention of your target audience.",
    Icon: GraphicDesignIcon,
  },
  {
    id: 5,
    title: "SEO Optimization",
    description:
      "We use keyword research, on-page SEO, and backlinks to improve your search rankings and drive targeted organic traffic.",
    Icon: SEOIcon,
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description:
      "We create powerful e-commerce websites with SEO-friendly features to enhance your online sales and customer experience.",
    Icon: EcommerceIcon,
  },
  {
    id: 7,
    title: "App Development",
    description:
      "We develop fast, secure, and user-friendly mobile apps tailored to meet your business goals and drive mobile engagement.",
    Icon: AppDevIcon,
  },
  {
    id: 8,
    title: "Content Strategy",
    description:
      "We craft high-quality, SEO-rich content to effectively share your message, increase visibility, and boost audience trust.",
    Icon: ContentIcon,
  },
];

// Custom hook for responsive cards per slide
const useResponsiveCardsPerSlide = () => {
  const [cardsPerSlide, setCardsPerSlide] = useState(() => {
    // Initial value based on current window size
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 576) return 1;
      if (window.innerWidth < 992) return 2;
      if (window.innerWidth < 1200) return 3;
      return 4;
    }
    return 4;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newCardsPerSlide;
      
      if (width < 576) newCardsPerSlide = 1;
      else if (width < 992) newCardsPerSlide = 2;
      else if (width < 1200) newCardsPerSlide = 3;
      else newCardsPerSlide = 4;

      setCardsPerSlide(prev => prev !== newCardsPerSlide ? newCardsPerSlide : prev);
    };

    // Throttle resize events for better performance
    let resizeTimer;
    const throttledResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", throttledResize, { passive: true });
    return () => {
      window.removeEventListener("resize", throttledResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return cardsPerSlide;
};

// Memoized service card component
const ServiceCard = React.memo(({ service, index, onCardRef, onIconCloneRef }) => {
  return (
    <div
      className="new-service-card"
      ref={(el) => onCardRef(index, el)}
      role="article"
      aria-labelledby={`service-title-${service.id}`}
    >
      <div className="new-card-content">
        <div className="new-card-icon" aria-hidden="true">
          <service.Icon />
        </div>
        <h3 id={`service-title-${service.id}`}>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div
        className="new-icon-clone"
        ref={(el) => onIconCloneRef(index, el)}
        aria-hidden="true"
      >
        <service.Icon />
      </div>
      <div className="new-card-border-top" aria-hidden="true"></div>
      <div className="new-card-border-left" aria-hidden="true"></div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const NewServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = useResponsiveCardsPerSlide();
  const cardsRef = useRef([]);
  const iconCloneRefs = useRef([]);
  const animationsRef = useRef(new Map());

  // Memoize total slides calculation
  const totalSlides = useMemo(
    () => Math.ceil(servicesData.length / cardsPerSlide),
    [cardsPerSlide]
  );

  // Optimize GSAP animations with proper cleanup
  useEffect(() => {
    // Clean up existing animations
    animationsRef.current.forEach((cleanup) => cleanup());
    animationsRef.current.clear();

    cardsRef.current.forEach((card, index) => {
      if (!card || !iconCloneRefs.current[index]) return;

      const iconClone = iconCloneRefs.current[index];

      // Get the position of the original icon in the card
      const getIconPosition = () => {
        const iconEl = card.querySelector(".new-card-icon");
        if (!iconEl) return { top: 0, left: 0 };
        const iconRect = iconEl.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        return {
          top: iconRect.top - cardRect.top,
          left: iconRect.left - cardRect.left,
        };
      };

      // Initialize icon clone position (hidden but positioned at the original icon)
      const updateInitialPosition = () => {
        const pos = getIconPosition();
        gsap.set(iconClone, {
          opacity: 0,
          scale: 0.8,
          top: `${pos.top}px`,
          left: `${pos.left}px`,
          bottom: "auto",
          right: "auto",
        });
      };

      // Set initial position
      updateInitialPosition();

      // Create hover animation functions
      const enterAnimation = () => {
        // Kill any running animations on this element
        gsap.killTweensOf(iconClone);
        
        // First become visible at the original icon position
        gsap.set(iconClone, {
          opacity: 1,
          scale: 0.8,
        });
        // Then animate to the bottom right
        gsap.to(iconClone, {
          bottom: "20px",
          right: "20px",
          top: "auto",
          left: "auto",
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const leaveAnimation = () => {
        // Kill any running animations on this element
        gsap.killTweensOf(iconClone);
        
        const pos = getIconPosition();
        // Animate back to the original icon position
        gsap.to(iconClone, {
          top: `${pos.top}px`,
          left: `${pos.left}px`,
          bottom: "auto",
          right: "auto",
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.in",
        });
      };

      // Add event listeners
      card.addEventListener("mouseenter", enterAnimation, { passive: true });
      card.addEventListener("mouseleave", leaveAnimation, { passive: true });

      // Store cleanup function
      animationsRef.current.set(index, () => {
        gsap.killTweensOf(iconClone);
        card.removeEventListener("mouseenter", enterAnimation);
        card.removeEventListener("mouseleave", leaveAnimation);
      });
    });

    // Cleanup function
    return () => {
      animationsRef.current.forEach((cleanup) => cleanup());
      animationsRef.current.clear();
    };
  }, [currentSlide, cardsPerSlide]);

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentSlide(slideIndex);
  }, []);

  // Optimized ref callbacks
  const handleCardRef = useCallback((index, el) => {
    cardsRef.current[index] = el;
  }, []);

  const handleIconCloneRef = useCallback((index, el) => {
    iconCloneRefs.current[index] = el;
  }, []);

  // Memoized visible cards calculation
  const visibleCards = useMemo(() => {
    const startIndex = currentSlide * cardsPerSlide;
    return servicesData.slice(startIndex, startIndex + cardsPerSlide);
  }, [currentSlide, cardsPerSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="new-services-section" aria-labelledby="services-heading">
      <div className="new-services-heading">
        <h2 id="services-heading">Custom Digital Solutions to Grow Your Business Online</h2>
        <p>
          We design SEO-friendly, mobile-responsive websites focused on user
          experience, fast loading speeds, and smooth navigation to help you
          attract and convert more visitors.
        </p>
      </div>

      <div className="new-carousel-container" role="region" aria-label="Services carousel">
        <button
          className="new-carousel-btn new-prev"
          onClick={prevSlide}
          aria-label={`Previous slide (${currentSlide + 1} of ${totalSlides})`}
          disabled={totalSlides <= 1}
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div 
          className="new-services-carousel"
          role="tabpanel"
          aria-live="polite"
          aria-atomic="true"
        >
          {visibleCards.map((service, idx) => {
            const actualIndex = currentSlide * cardsPerSlide + idx;
            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={actualIndex}
                onCardRef={handleCardRef}
                onIconCloneRef={handleIconCloneRef}
              />
            );
          })}
        </div>

        <button
          className="new-carousel-btn new-next"
          onClick={nextSlide}
          aria-label={`Next slide (${currentSlide + 1} of ${totalSlides})`}
          disabled={totalSlides <= 1}
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div 
        className="new-carousel-dots"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            className={`new-dot ${currentSlide === i ? "new-active" : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={currentSlide === i}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

// Main component with error boundary consideration
const NewServices = () => {
  return (
    <div className="new-app">
      <NewServicesCarousel />
    </div>
  );
};

// Set display names for better debugging
NewServices.displayName = 'NewServices';
NewServicesCarousel.displayName = 'NewServicesCarousel';

export default React.memo(NewServices);