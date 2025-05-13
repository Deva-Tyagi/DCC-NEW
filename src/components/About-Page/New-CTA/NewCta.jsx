import { useState, useEffect } from 'react';
import './NewCta.css';
import { Link } from 'react-router-dom';
import BRlogo from '../../Images/BRlogo.jpg';
import FCHlogo from '../../Images/FCHlogo.png';
import WaveLogo from '../../Images/WaveLogo.png';
import SIPLlogo from '../../Images/SIPLlogo.jpg';
import MICClogo from '../../Images/MICClogo.png';
import divyaLogo from '../../Images/divyaLogo.jpg';
import AGFlogo from '../../Images/AGFlogo.jpg';

const NewCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="new-cta-section">
      {/* Background elements */}
      <div className="new-background-gradient"></div>
      <div className="new-circle-top"></div>
      <div className="new-circle-bottom"></div>
      
      <div className={`new-content-container ${isVisible ? 'new-visible' : ''}`}>
        <h2 className="new-heading">
          Seeking Top Web Masters to Enhance Web, Marketing & Media Experiences
        </h2>
        
        <p className="new-subheading">
          Startup businesses and enterprise MSMEs trust our team of front-end developers for their critical
          and advanced projects. Contact us today to choose from a pool of highly skilled professionals who
          can deliver exceptional results.
        </p>
        
        {/* Features section */}
        <div className="new-features-grid">
          <div className="new-feature-card">
            <div className="new-icon-container">
              <svg className="new-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 2L5 9H9V18H15V9H19Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="new-feature-title">Premium Quality</h3>
            <p className="new-feature-description">Expert developers delivering polished solutions</p>
          </div>
          
          <div className="new-feature-card">
            <div className="new-icon-container">
              <svg className="new-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="new-feature-title">Dedicated Team</h3>
            <p className="new-feature-description">Skilled professionals focused on your success</p>
          </div>
          
          <div className="new-feature-card">
            <div className="new-icon-container">
              <svg className="new-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V6" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="new-feature-title">Fast Delivery</h3>
            <p className="new-feature-description">Timely implementation of your vision</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="new-button-container">
            <Link to = '/contact-us'>
          <button className="new-cta-button">
            <span className="new-button-shine"></span>
            <span className="new-button-text">Schedule a free consultation</span>
            <svg className="new-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="new-trust-indicators">
          <p className="new-trust-text">Trusted by innovative companies worldwide</p>
          <div className="new-logos-container">
            <div className="new-logo-placeholder">
                <img src={BRlogo} alt="" />
            </div>
              <div className="new-logo-placeholder">
                <img src={WaveLogo} alt="" />
            </div>
              <div className="new-logo-placeholder">
                <img src={SIPLlogo} alt="" />
            </div>
              <div className="new-logo-placeholder">
                <img src={MICClogo} alt="" />
            </div>
            <div className="new-logo-placeholder">
                <img src={divyaLogo} alt="" />
            </div>
            <div className="new-logo-placeholder">
                <img src={AGFlogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCta;





















