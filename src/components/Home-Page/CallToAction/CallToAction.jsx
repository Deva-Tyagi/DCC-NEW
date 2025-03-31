import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h1>Seeking a Top Frontend Developer to Enhance Web, Marketing & Media Experiences</h1>
        <p>
          Startup businesses and enterprise MSMEs trust our team of front-end
          developers for their critical and advanced projects. Contact us today
          to choose from a pool of highly skilled professionals who can deliver
          exceptional results.
        </p>
        <a href="/contact-us">
        <button className="cta-button">Schedule a free consultation</button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
