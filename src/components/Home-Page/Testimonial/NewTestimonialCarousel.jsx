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
    quote: "DCC created a stunning website, logo, and marketing assets that elevated our brand online. Their strategic approach and creative design exceeded our expectations. Highly recommended!"
  },
  {
    id: 2,
    name: "Divya Saini",
    company: "Divya Homeopathy",
    avatar: divyaLogo, 
    rating: 5,
    quote: "DCC delivered top-notch video editing services. The content aligned perfectly with our brand voice and helped us engage better with our audience. Truly professional team!"
  },
  {
    id: 3,
    name: "Faizal Khureshi",
    company: "Wavenauticals",
    avatar: WaveLogo, 
    rating: 5,
    quote: "DCC built our company website with creativity and technical finesse. The result is a mobile-friendly, SEO-optimized site that truly represents our brand. Great job!"
  },
  {
    id: 4,
    name: "Mr. Sanjay Kr. Singh",
    company: "Shrinet Infrastructure Pvt Ltd",
    avatar: SIPLlogo,
    rating: 5,
    quote: "The DCC team developed a responsive and SEO-friendly website for us. Their professional approach and clear communication made the process seamless. We appreciate their efforts!"
  },
  {
    id: 5,
    name: "Mahi Dixit",
    company: "Mahi Institute Computer Centre",
    avatar: MICClogo,
    rating: 5,
    quote: "DCC handled our digital marketing and website development flawlessly. Their strategic campaigns and creative assets boosted our visibility. Highly efficient and creative team!"
  },
  {
    id: 6,
    name: "Bhaskar Pratap Singh",
    company: "Future Choice Hospitality",
    avatar: FCHlogo,
    rating: 5,
    quote: "Thanks to DCC's digital marketing services, we experienced a major improvement in our online reach. Their data-driven strategies and reliable execution made a real impact."
  },
  {
    id: 7,
    name: "Gaurav Sachan",
    company: "AGF Group",
    avatar: AGFlogo,
    rating: 5,
    quote: "DCC provided outstanding web development and branding services. Their transparent work ethic and creative designs gave us a professional edge. Affordable and reliable!"
  },
];

function NewTestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const getVisibleCards = (currentIndex) => [
    { index: currentIndex, position: 0 },
    { index: (currentIndex + 1) % testimonials.length, position: 1 },
    { index: (currentIndex - 1 + testimonials.length) % testimonials.length, position: -1 }
  ];

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
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(autoPlayRef.current);
  }, [activeIndex]);

  const handleChangeIndex = (change) => {
    clearInterval(autoPlayRef.current);
    setActiveIndex((prev) => (prev + change + testimonials.length) % testimonials.length);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const handleDotClick = (index) => {
    clearInterval(autoPlayRef.current);
    setActiveIndex(index);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <div className="newTestimonialSection">
      <div className="newContainer">
        <div className="testmonial-header">
          <h2>Trusted by Clients for Digital Excellence and Results</h2>
          <p>Discover how Digital Crafts Co. helps brands thrive with expert UX design, responsive websites, and strategic digital marketing tailored for real business growth.</p>
        </div>
        <h3>Delivering Results that Speak for Themselves</h3>

        <div className="newCarouselContainer">
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
                      <img src={testimonial.avatar} alt={testimonial.name} className="newAvatar" />
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
            <button onClick={() => handleChangeIndex(-1)} className="newNavButton newPrevButton" aria-label="Previous testimonial">
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
            <button onClick={() => handleChangeIndex(1)} className="newNavButton newNextButton" aria-label="Next testimonial">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTestimonialCarousel;