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
   <p> <Link to="/" className="footer-link">Home</Link></p>
   <p><Link to="/about" className="footer-link">About Us</Link></p>
   <p> <Link to="/portfolio" className="footer-link">See Our Work</Link></p>
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

      
        <div className="divider"></div>

        <div className="social-links">
          <div className="social-item">
            <p>INSTAGRAM</p>
          </div>
          <div className="social-item">
            <p>FACEBOOK</p>
          </div>
          <div className="social-item">
            <p>TWITTER</p>
          </div>
          <div className="social-item">
            <p>YOUTUBE</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>Digital Craft Co. LLC, 2093 Philadelphia Pike #2775, Claymont DE 19703</p>
          </div>

          <div className="logo">
            <img src={logo}></img>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default NewFooter;