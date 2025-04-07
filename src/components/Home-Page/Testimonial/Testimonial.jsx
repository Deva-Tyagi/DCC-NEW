import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import BRlogo from './Images/BRlogo.jpg';
import FCHlogo from './Images/FCHlogo.png';
import WaveLogo from './Images/WaveLogo.png';
import SIPLlogo from './Images/SIPLlogo.jpg';
import MICClogo from './Images/MICClogo.png';
import divyaLogo from './Images/divyaLogo.jpg';
import AGFlogo from './Images/AGFlogo.jpg';

const testimonials = [
  {
    company: "Bloom & Root",
    user: {
      name: "Shweta Sharma",
      title: "President",
      image: BRlogo,
    },
    backgroundImage: BRlogo,
    feedback: "Working with Digital Crafts Co. (DCC) has been an absolute pleasure. They designed our website, logo, visiting cards, and letterheads with precision and creativity. Their marketing expertise has significantly boosted our brand presence – highly recommended!",
  },
  {
    company: "Future Choice Hospitality",
    user: {
      name: "Bhaskar Pratap Singh",
      title: "Head of Marketing",
      image: FCHlogo,
    },
    backgroundImage: FCHlogo,
    feedback: "Digital Crafts Co. (DCC) has been instrumental in enhancing our online presence through their exceptional digital marketing services. Their strategic approach and dedication have delivered impressive results, driving growth for our business.",
  },
  {
    company: "Wavenauticals",
    user: {
      name: "Faizal Khureshi",
      title: "CEO",
      image: WaveLogo,
    },
    backgroundImage: WaveLogo,
    feedback: "Digital Crafts Co. (DCC) did an outstanding job developing our website. Their team combined creativity with technical expertise to deliver a site that’s both visually appealing and highly functional. We're extremely satisfied with the results!",
  },
  {
    company: "Shrinet infrastructure Pvt Ltd",
    user: {
      name: "Mr. Sanjay Kr. Singh",
      title: "CTO",
      image: SIPLlogo,
    },
    backgroundImage: SIPLlogo,
    feedback: "Digital Crafts Co. (DCC) provided exceptional website development services for us. Their team was professional, attentive to our requirements, and delivered a user-friendly, visually impressive website. We highly recommend their expertise!",
  },
  {
    company: "Mahi Institute Computer Centre",
    user: {
      name: "Mahi Dixit",
      title: "CEO",
      image: MICClogo,
    },
    backgroundImage: MICClogo,
    feedback: "Digital Crafts Co. (DCC) has been incredible in handling our website development, digital marketing, and social media marketing. Their creative approach and strategic execution have significantly improved our online presence. We're extremely pleased with their work!",
  },
  {
    company: "Divya Homeopathy",
    user: {
      name: "Divya Saini",
      title: "CTO",
      image: divyaLogo,
    },
    backgroundImage: divyaLogo,
    feedback: "Digital Crafts Co. (DCC) did a fantastic job with our video editing needs. Their team delivered high-quality, engaging content that perfectly aligned with our vision. We're extremely happy with the results and highly recommend their services!",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="testimonial-card"
      style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
    >
      <div className="card-content">
        <h3>{testimonial.company}</h3>
        <p className="feedback">{testimonial.feedback}</p>
        <div className="user-details">
          <img
            src={testimonial.user.image}
            alt={`${testimonial.user.name}`}
            className="user-image"
          />
          <div>
            <h4>{testimonial.user.name}</h4>
            <p>{testimonial.user.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Determine visible testimonials based on screen size
  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]] 
    : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className="testimonial-container">
      <div className="testmonial-header">
        <h2>AUTHENTIC STORIES, REMARKABLE CHANGE</h2>
        <p>See how DCC transforms businesses with stunning UX design, cutting-edge web development, smart product optimization, and dedicated support—helping you stand out and grow.</p>
      </div>
      <h3>EXCEEDING EXPECTATIONS, DELIVERING EXCELLENCE</h3>
      <div className="testimonial-slider">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev} className="arrow-button">
          &#8592;
        </button>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
            }}
          ></div>
        </div>
        <button onClick={handleNext} className="arrow-button">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;