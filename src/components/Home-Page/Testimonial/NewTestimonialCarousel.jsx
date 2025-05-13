// NewTestimonialCarousel.jsx
import { useEffect, useRef, useState } from 'react';
import './NewTestimonialCarousel.css';
import BRlogo from '../../Images/BRlogo.jpg';
import FCHlogo from '../../Images/FCHlogo.png';
import WaveLogo from '../../Images/WaveLogo.png';
import SIPLlogo from '../../Images/SIPLlogo.jpg';
import MICClogo from '../../Images/MICClogo.png';
import divyaLogo from '../../Images/divyaLogo.jpg';
import AGFlogo from '../../Images/AGFlogo.jpg';

const testimonials = [
  {
    id: 1,
    name: "Shweta Sharma",
    company: "Bloom & Root",
    avatar: BRlogo, 
    rating: 5,
    quote: "Working with Digital Crafts Co. (DCC) has been an absolute pleasure. They designed our website, logo, visiting cards, and letterheads with precision and creativity. Their marketing expertise has significantly boosted our brand presence – highly recommended!"
  },
  {
    id: 2,
    name: "Divya Saini",
    company: "Divya Homeopathy",
    avatar: divyaLogo, 
    rating: 5,
    quote: "Digital Crafts Co. (DCC) did a fantastic job with our video editing needs. Their team delivered high-quality, engaging content that perfectly aligned with our vision. We're extremely happy with the results and highly recommend their services!"
  },
  {
    id: 3,
    name: "Faizal Khureshi",
    company: "Wavenauticals",
    avatar: WaveLogo, 
    rating: 5,
    quote: "Digital Crafts Co. (DCC) did an outstanding job developing our website. Their team combined creativity with technical expertise to deliver a site that’s both visually appealing and highly functional. We're extremely satisfied with the results!"
  },
  {
    id: 4,
    name: "Mr. Sanjay Kr. Singh",
    company: "Shrinet infrastructure Pvt Ltd",
    avatar: SIPLlogo,
    rating: 5,
    quote: "Digital Crafts Co. (DCC) provided exceptional website development services for us. Their team was professional, attentive to our requirements, and delivered a user-friendly, visually impressive website. We highly recommend their expertise!"
  },
  {
    id: 5,
    name: "Mahi Dixit",
    company: "Mahi Institute Computer Centre",
    avatar: MICClogo,
    rating: 5,
    quote: "Digital Crafts Co. (DCC) has been incredible in handling our website development, digital marketing, and social media marketing. Their creative approach and strategic execution have significantly improved our online presence. We're extremely pleased with their work!"
  },
  {
    id: 6,
    name: "Bhaskar Pratap Singh",
    company: "Future Choice Hospitality",
    avatar: FCHlogo,
    rating: 5,
    quote: "Digital Crafts Co. (DCC) has been instrumental in enhancing our online presence through their exceptional digital marketing services. Their strategic approach and dedication have delivered impressive results, driving growth for our business."
  },
  {
    id: 7,
    name: "Gaurav Sachan",
    company: "AGF Group",
    avatar: AGFlogo,
    rating: 5,
    quote: "Loved the way of work and professionalism of Digital Craft Co. They offer complete transparency & ensure that client's requirements are fullfilled. They provide services with minimum budget and provide classic websites. Good work team DCC!"
  },
];

function NewTestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  const getVisibleCards = (currentIndex) => {
    return [
      { index: currentIndex, position: 0 },
      { index: (currentIndex + 1) % testimonials.length, position: 1 },
      { index: (currentIndex + testimonials.length - 1) % testimonials.length, position: -1 }
    ];
  };
  
  useEffect(() => {
    const updateCardPositions = () => {
      const allCards = document.querySelectorAll(".newTestimonialCard");
      
      allCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.visibility = "hidden";
        card.style.zIndex = "5";
        card.style.transform = "translate(-50%, -50%) scale(0.9)";
      });
      
      const visibleCards = getVisibleCards(activeIndex);
      const cardGap = 380;
      
      visibleCards.forEach(({ index, position }) => {
        const card = document.querySelector(`.newTestimonialCard[data-index="${index}"]`);
        if (!card) return;

        card.style.zIndex = 10 - Math.abs(position);

        card.style.visibility = "visible";
        card.style.opacity = position === 0 ? "1" : "0.7";

        const xOffset = position * cardGap;
        const scale = position === 0 ? 1 : 0.85;
        card.style.transform = `translate(calc(-50% + ${xOffset}px), -50%) scale(${scale})`;
      });
    };

    updateCardPositions();

    autoPlayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [activeIndex]);
  
  const handlePrev = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    setActiveIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

    autoPlayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };
  
  const handleNext = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    setActiveIndex(prev => (prev + 1) % testimonials.length);

    autoPlayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const handleDotClick = (index) => {

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    setActiveIndex(index);

    autoPlayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <div className="newTestimonialSection">
      <div className="newContainer">
       <div className="testmonial-header">
        <h2>ECHOES OF TRUST, RENDERING TRANSFORMATIONS</h2>
        <p>See how DCC transforms businesses with stunning UX design, cutting-edge web development, smart product optimization, and dedicated support—helping you stand out and grow.</p>
      </div>
      <h3>EXCEEDING EXPECTATIONS, DELIVERING EXCELLENCE</h3>
        
        <div className="newCarouselContainer" ref={carouselRef}>
          <div className="newTestimonialsWrapper">
            <div className="newTestimonialContent">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`newTestimonialCard ${index === activeIndex ? 'newActiveCard' : ''}`}
                data-index={index}
              >
                <div className="newInnerCard">
                  <div className="newAvatarWrapper">
                    {/* <div className="newNameHighlight">{testimonial.name}</div> */}
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="newAvatar"
                    />
                  </div>
                  
                  <div className="newClientInfo">
                    <h3 className="newClientName">{testimonial.name}</h3>
                    <p className="newClientCompany">{testimonial.company}</p>
                  </div>
                  
                  <div className="newRatingContainer">
                    <span className="newRatingValue">{testimonial.rating.toFixed(1)}</span>
                    <div className="newStars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="newStar">★</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="newQuoteContainer">
                    <p className="newQuote">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          <div className="newNavigation">
            <button 
              onClick={handlePrev}
              className="newNavButton newPrevButton"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            
            <div className="newDotsContainer">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`newDot ${index === activeIndex ? 'newActiveDot' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="newNavButton newNextButton"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTestimonialCarousel;









// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import './NewTestimonialCarousel.css';

// const NewTestimonialCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const carouselRef = useRef(null);
//   const intervalRef = useRef(null);
  
//   const testimonials = [
//     {
//       id: 1,
//       name: 'John Smith',
//       position: 'CEO, TechSolutions',
//       rating: 5.0,
//       image: '/path-to-john-image.png',
//       quote: "Working with DianApps has been a game-changer for our business. Their team delivered a complex application ahead of schedule and under budget. The attention to detail and quality of code is exceptional. We look forward to continuing our partnership on future projects."
//     },
//     {
//       id: 2,
//       name: 'Cole Bowman',
//       position: 'Founder, Myshift',
//       rating: 5.0,
//       image: '/path-to-cole-image.png',
//       quote: "We are very happy with the deliverables provided by DianApps so far, and the app is on track to launch in March 2022. DianApps delivers on time and tracks project progress via Basecamp — they're honest about what they can deliver within the timeframe. They rectify app bugs within 3-5 business days."
//     },
//     {
//       id: 3,
//       name: 'Craig Brennan',
//       position: 'Newbie',
//       rating: 5.0,
//       image: '/path-to-craig-image.png',
//       quote: "DianApps produces quality deliverables on time and to the client's specifications — the new iteration of the app is almost ready for its relaunch after its initial launch in 2018. The client can contact DianApps at any time to discuss the project, which is well documented and excellently managed."
//     },
//     {
//       id: 4,
//       name: 'Sam Weekes',
//       position: 'Founder, APIAM',
//       rating: 5.0,
//       image: '/path-to-sam-image.png',
//       quote: "External stakeholders are pleased with the application — it's easy to use and professional-looking. Moreover, the client has developed a close relationship with DianApps. The team communicates seamlessly and adapts to meet the requirements. Overall, they're responsive and attentive partners."
//     },
//     {
//       id: 5,
//       name: 'Emma Wilson',
//       position: 'CTO, DataFlow',
//       rating: 5.0,
//       image: '/path-to-emma-image.png',
//       quote: "DianApps transformed our idea into a functioning product in record time. Their technical expertise and communication skills made the entire process smooth. Our users love the intuitive design and robust functionality. I highly recommend DianApps for any software development needs."
//     }
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
    
//     handleResize();
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, 5000);
    
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     animateCards();
//   }, [activeIndex, windowWidth]);

//   const animateCards = () => {
//     const cards = document.querySelectorAll('.new-testimonial-card');
//     if (!cards.length) return;
    
//     gsap.to(cards, {
//       scale: 0.8,
//       opacity: 0.3,
//       duration: 0.4,
//       ease: "power2.out"
//     });
    
//     const totalCards = testimonials.length;
//     const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
//     const nextIndex = (activeIndex + 1) % totalCards;
    
//     let offsetPercentage = "100%";
//     if (windowWidth <= 768) {
//       offsetPercentage = "85%";
//     }
//     if (windowWidth <= 480) {
//       offsetPercentage = "0%"; 
//     }
    
//     gsap.to(cards[activeIndex], {
//       scale: 1,
//       opacity: 1,
//       x: 0,
//       zIndex: 3,
//       duration: 0.5,
//       delay: 0.1,
//       ease: "power2.inOut"
//     });
    
//     if (windowWidth <= 480) {
//       cards.forEach((card, index) => {
//         if (index !== activeIndex) {
//           gsap.to(card, {
//             opacity: 0,
//             scale: 0.7,
//             x: 0,
//             duration: 0.3,
//             zIndex: 0
//           });
//         }
//       });
//     } else {

//       gsap.to(cards[prevIndex], {
//         scale: 0.85,
//         opacity: 0.7,
//         x: `-${offsetPercentage}`,
//         zIndex: 1,
//         duration: 0.5,
//         ease: "power2.inOut"
//       });

//       gsap.to(cards[nextIndex], {
//         scale: 0.85,
//         opacity: 0.7,
//         x: offsetPercentage,
//         zIndex: 1,
//         duration: 0.5,
//         ease: "power2.inOut"
//       });
    
//       cards.forEach((card, index) => {
//         if (index !== activeIndex && index !== prevIndex && index !== nextIndex) {
//           gsap.to(card, {
//             opacity: 0,
//             scale: 0.7,
//             duration: 0.3,
//             zIndex: 0
//           });
//         }
//       });
//     }
//   };

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="new-testimonial-section">
//       <h2 className="new-section-title">What Clients Say</h2>
      
//       <div className="new-testimonial-carousel" ref={carouselRef}>
//         <div className="new-testimonial-container">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={testimonial.id} 
//               className={`new-testimonial-card ${index === activeIndex ? 'active-card' : ''}`}
//               style={{ zIndex: index === activeIndex ? 3 : 1 }}
//             >
//               <div className="new-profile-circle">
//                 <img src={testimonial.image} alt={testimonial.name} />
//               </div>
              
//               <h3 className="new-client-name">{testimonial.name}</h3>
//               <p className="new-client-position">{testimonial.position}</p>
              
//               <div className="new-rating">
//                 <p className="new-rating-number">{testimonial.rating.toFixed(1)}</p>
//                 <div className="new-stars">
//                   {Array(5).fill('').map((_, i) => (
//                     <span key={i} className="new-star">★</span>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="new-quote-container">
//                 <p className="new-quote-text">{testimonial.quote}</p>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="new-carousel-navigation">
//           <button className="new-nav-button new-prev" onClick={prevSlide}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>
//           <div className="new-dots">
//             {testimonials.map((_, index) => (
//               <button 
//                 key={index} 
//                 className={`new-dot ${index === activeIndex ? 'new-active-dot' : ''}`}
//                 onClick={() => goToSlide(index)}
//               />
//             ))}
//           </div>
//           <button className="new-nav-button new-next" onClick={nextSlide}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewTestimonialCarousel;