import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './NewTestimonialCarousel.css';

const NewTestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, TechSolutions',
      rating: 5.0,
      image: '/path-to-john-image.png',
      quote: "Working with DianApps has been a game-changer for our business. Their team delivered a complex application ahead of schedule and under budget. The attention to detail and quality of code is exceptional. We look forward to continuing our partnership on future projects."
    },
    {
      id: 2,
      name: 'Cole Bowman',
      position: 'Founder, Myshift',
      rating: 5.0,
      image: '/path-to-cole-image.png',
      quote: "We are very happy with the deliverables provided by DianApps so far, and the app is on track to launch in March 2022. DianApps delivers on time and tracks project progress via Basecamp — they're honest about what they can deliver within the timeframe. They rectify app bugs within 3-5 business days."
    },
    {
      id: 3,
      name: 'Craig Brennan',
      position: 'Newbie',
      rating: 5.0,
      image: '/path-to-craig-image.png',
      quote: "DianApps produces quality deliverables on time and to the client's specifications — the new iteration of the app is almost ready for its relaunch after its initial launch in 2018. The client can contact DianApps at any time to discuss the project, which is well documented and excellently managed."
    },
    {
      id: 4,
      name: 'Sam Weekes',
      position: 'Founder, APIAM',
      rating: 5.0,
      image: '/path-to-sam-image.png',
      quote: "External stakeholders are pleased with the application — it's easy to use and professional-looking. Moreover, the client has developed a close relationship with DianApps. The team communicates seamlessly and adapts to meet the requirements. Overall, they're responsive and attentive partners."
    },
    {
      id: 5,
      name: 'Emma Wilson',
      position: 'CTO, DataFlow',
      rating: 5.0,
      image: '/path-to-emma-image.png',
      quote: "DianApps transformed our idea into a functioning product in record time. Their technical expertise and communication skills made the entire process smooth. Our users love the intuitive design and robust functionality. I highly recommend DianApps for any software development needs."
    }
  ];

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial window width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Setup carousel autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle slide change with animation
  useEffect(() => {
    animateCards();
  }, [activeIndex, windowWidth]);

  const animateCards = () => {
    const cards = document.querySelectorAll('.new-testimonial-card');
    if (!cards.length) return;
    
    gsap.to(cards, {
      scale: 0.8,
      opacity: 0.3,
      duration: 0.4,
      ease: "power2.out"
    });
    
    // Get previous, current and next indices
    const totalCards = testimonials.length;
    const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
    const nextIndex = (activeIndex + 1) % totalCards;
    
    // Calculate offset based on screen size
    // Less offset for smaller screens to prevent horizontal scrolling
    let offsetPercentage = "100%";
    if (windowWidth <= 768) {
      offsetPercentage = "85%";
    }
    if (windowWidth <= 480) {
      offsetPercentage = "0%"; // On very small screens, stack vertically
    }
    
    // Center card (active)
    gsap.to(cards[activeIndex], {
      scale: 1,
      opacity: 1,
      x: 0,
      zIndex: 3,
      duration: 0.5,
      delay: 0.1,
      ease: "power2.inOut"
    });
    
    if (windowWidth <= 480) {
      // On mobile, only show active card
      cards.forEach((card, index) => {
        if (index !== activeIndex) {
          gsap.to(card, {
            opacity: 0,
            scale: 0.7,
            x: 0,
            duration: 0.3,
            zIndex: 0
          });
        }
      });
    } else {
      // Left card
      gsap.to(cards[prevIndex], {
        scale: 0.85,
        opacity: 0.7,
        x: `-${offsetPercentage}`,
        zIndex: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });
      
      // Right card
      gsap.to(cards[nextIndex], {
        scale: 0.85,
        opacity: 0.7,
        x: offsetPercentage,
        zIndex: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });
      
      // Handle other cards
      cards.forEach((card, index) => {
        if (index !== activeIndex && index !== prevIndex && index !== nextIndex) {
          gsap.to(card, {
            opacity: 0,
            scale: 0.7,
            duration: 0.3,
            zIndex: 0
          });
        }
      });
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="new-testimonial-section">
      <h2 className="new-section-title">What Clients Say</h2>
      
      <div className="new-testimonial-carousel" ref={carouselRef}>
        <div className="new-testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`new-testimonial-card ${index === activeIndex ? 'active-card' : ''}`}
              style={{ zIndex: index === activeIndex ? 3 : 1 }}
            >
              <div className="new-profile-circle">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              
              <h3 className="new-client-name">{testimonial.name}</h3>
              <p className="new-client-position">{testimonial.position}</p>
              
              <div className="new-rating">
                <p className="new-rating-number">{testimonial.rating.toFixed(1)}</p>
                <div className="new-stars">
                  {Array(5).fill('').map((_, i) => (
                    <span key={i} className="new-star">★</span>
                  ))}
                </div>
              </div>
              
              <div className="new-quote-container">
                <p className="new-quote-text">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="new-carousel-navigation">
          <button className="new-nav-button new-prev" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="new-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`new-dot ${index === activeIndex ? 'new-active-dot' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="new-nav-button new-next" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonialCarousel;