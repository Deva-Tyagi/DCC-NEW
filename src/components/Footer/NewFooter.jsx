import React from 'react';
import './NewFooter.css';
import logo from '../Images/dcclogo1.jpg/'
import { Link } from 'react-router-dom';

const NewFooter = () => {
  return (
    <div className="footer-container">
    
      <div className="top-section">
        <div className="page-top-text">
          <p>Digital</p>
          <p>Craft</p>
          <p>Co.</p>
        </div>
      </div>
      
      <div className="curve-container">
        <div className="left-curve"></div>
        <div className="right-curve"></div>
      </div>

      <div className="main-content">
        <div className="contact-section">
          <div className="contact-left">
            <p><Link to="/" className="footer-link">Home</Link></p>
            <p><Link to="/about" className="footer-link">About Us</Link></p>
            <p><Link to="/portfolio" className="footer-link">See Our Work</Link></p>
            <p><Link to="/contact-us" className="footer-link">Hire Us</Link></p>
          </div>

          <div className="contact-center">
            <p>CONTACT US</p>
          </div>

          <div className="contact-right">
            <p>Conversion Audit</p>
            <p>Research & Copywriting</p>
            <p>Website Development</p>
            <p>App Development</p>
            <p>Complete Revamap</p>
          </div>
        </div>

        <div className="social-and-info">
          <div className="social-links">
            <div className="social-item">
              <a href="https://instagram.com/your-username" className="footer-link">
                <p>INSTAGRAM</p>
              </a>
            </div>
            <div className="social-item">
              <a href="https://facebook.com/your-page" className="footer-link">
                <p>FACEBOOK</p>
              </a>
            </div>
            <div className="social-item">
              <a href="https://twitter.com/your-username" className="footer-link">
                <p>TWITTER</p>
              </a>
            </div>
            <div className="social-item">
              <a href="https://youtube.com/your-channel" className="footer-link">
                <p>YOUTUBE</p>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>Digital Craft Co. LLC, 2093 Philadelphia Pike #2775, Claymont DE 19703</p>
            </div>

            <div className="footer-logo">
              <img src={logo} alt="Digital Craft Co. Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;