import React from "react";
import "./Solutions.css";

const Solutions = () => {
  const cards = [
    {
      title: "I have an app idea",
      description: "I need to transform my vision into a market-ready product.",
      buttonText: "Get started →",
      icon: "💡", 
    },
    {
      title: "I need a team",
      description: "I want to hire top-tier developers for my project.",
      buttonText: "Get started →",
      icon: "👨‍💻", 
    },
    {
      title: "I need to optimize my app",
      description: "I want to optimize and maintain my app for peak performance.",
      buttonText: "Get started →",
      icon: "⚙️", 
    },
  ];

  return (
    <>
    <div className="solution-main">
        <div className="solution-header">
            <h2>Select Your Bespoken Solution</h2>
            <p>Forge your path to digital success—whether you're starting, scaling, or optimizing, our expert solutions have you covered every step of the way.</p>
        </div>
    <div className="solution-cards-page">
      <div className="solution-cards-container">
        {cards.map((card, index) => (
          <div className="solution-card" key={index}>
            <div className="solution-card-icon">{card.icon}</div>
            <h3 className="solution-card-title">{card.title}</h3>
            <p className="solution-card-description">{card.description}</p>
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
