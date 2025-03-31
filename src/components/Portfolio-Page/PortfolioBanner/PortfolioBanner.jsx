import { useState, useEffect } from 'react';
import './PortfolioBanner.css';

const PortfolioBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      "id": 1,
      "subtitle": "Web & App Development",
      "title": "Custom Digital Solution",
      "buttonText": "EXPLORE OUR SERVICES",
      "link": "#"
    },
    {
      "id": 2,
      "subtitle": "Digital Marketing Experts",
      "title": "Result-Driven Strategies",
      "buttonText": "SEE OUR WORK",
      "link": "#"
    },
    {
      "id": 3,
      "subtitle": "SEO & Brand Growth",
      "title": "Boost Your Online Presence",
      "buttonText": "GET STARTED",
      "link": "#"
    }
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="portfolio-banner">

      <div className="portfolio-banner-background" />
      
      <div className="portfolio-content-container">
        <div className="portfolio-content-wrapper">
          {content.map((slide, index) => (
            <div
              key={slide.id}
              className={`portfolio-slide ${currentSlide === index ? 'slide-active' : 'slide-inactive'}`}
            >
              <p className="portfolio-slide-subtitle">
                {slide.subtitle}
              </p>
              <h1 className="portfolio-slide-title">
                {slide.title}
              </h1>
              <button className="portfolio-custom-button">
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="portfolio-slide-indicators">
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