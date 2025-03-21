import { useState, useEffect } from 'react';
import './PortfolioBanner.css';

const PortfolioBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 1,
      subtitle: "FOR WEBSITE AND VIDEO EDITING",
      title: "VIDEOGRAPHER'S\nPORTFOLIO",
      buttonText: "SEE MORE ABOUT US",
      link: "#"
    },
    {
      id: 2,
      subtitle: "CREATIVE PRODUCTION",
      title: "CINEMATIC\nSTORYTELLING",
      buttonText: "VIEW OUR WORK",
      link: "#"
    },
    {
      id: 3,
      subtitle: "PROFESSIONAL EDITING",
      title: "VISUAL\nEXCELLENCE",
      buttonText: "GET IN TOUCH",
      link: "#"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      {/* Background Image */}
      <div className="banner-background" />
      
      {/* Content Container */}
      <div className="content-container">
        <div className="content-wrapper">
          {content.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${currentSlide === index ? 'slide-active' : 'slide-inactive'}`}
            >
              <p className="slide-subtitle">
                {slide.subtitle}
              </p>
              <h1 className="slide-title">
                {slide.title}
              </h1>
              <button className="custom-button">
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${currentSlide === index ? 'indicator-active' : 'indicator-inactive'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioBanner;