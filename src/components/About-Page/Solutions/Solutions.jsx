import React, { useState } from "react";
import "./Solutions.css";
import { Link } from "lucide-react";
import appIdea from '../../Images/appIdea.png';
import teamIcon from '../../Images/teamIcon.png';
import optimizeIcon from '../../Images/optimizeIcon.png';

import appIdeaHover from '../../Images/appIdeaHover.png';
import teamIconHover from '../../Images/teamIconHover.png';
import optimizeIconHover from '../../Images/optimizeIconHover.png';

const Solutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "I have an app idea",
      description: "I need to transform my vision into a market-ready product.",
      buttonText: "Get started →",
      icon: appIdea,
      hoverIcon: appIdeaHover,
    },
    {
      title: "I need a team",
      description: "I want to hire top-tier developers for my project.",
      buttonText: "Get started →",
      icon: teamIcon,
      hoverIcon: teamIconHover,
    },
    {
      title: "I need to optimize my app",
      description: "I want to optimize and maintain my app for peak performance.",
      buttonText: "Get started →",
      icon: optimizeIcon,
      hoverIcon: optimizeIconHover,
    },
  ];

  return (
    <>
      <div className="solution-main">
        <div className="solution-header">
          <h2>Select Your Bespoken Solution</h2>
          <p>
            Forge your path to digital success—whether you're starting, scaling, or optimizing, our expert solutions have you covered every step of the way.
          </p>
        </div>

        <div className="solution-cards-page">
          <div className="solution-cards-container">
            {cards.map((card, index) => (
              <div
                key={index}
                className="solution-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="solution-card-icon">
                  <img 
                    src={hoveredCard === index ? card.hoverIcon : card.icon} 
                    alt={card.title}
                    style={{ width: '48px', height: '48px' }}
                  />
                </div>
                <div className="solution-card-title">{card.title}</div>
                <div className="solution-card-description">{card.description}</div>
                <a href="#" className="solution-card-link">
                  {card.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;