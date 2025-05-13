import React, { useEffect } from "react";
import "./Footer.css";
import logo from '../Images/dcclogo1.jpg'
import { FaTwitter, FaFacebookSquare, FaArrowRight } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  useEffect(() => {
    // Marquee animation effect for client results
    const clientsContainer = document.querySelector('.clients-container');
    if (clientsContainer) {
      const cloneItems = () => {
        const items = document.querySelectorAll('.client-card');
        items.forEach(item => {
          const clone = item.cloneNode(true);
          clientsContainer.appendChild(clone);
        });
      };
      
      cloneItems(); // Clone items to create the seamless loop effect
      
      // Optional: Add animation pause on hover
      clientsContainer.addEventListener('mouseenter', () => {
        clientsContainer.style.animationPlayState = 'paused';
      });
      
      clientsContainer.addEventListener('mouseleave', () => {
        clientsContainer.style.animationPlayState = 'running';
      });
    }
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-card">
            <div className="card-logo">
              <span role="img" aria-label="logo">
                <img src={logo} alt="logo" />
              </span>
              <span className="card-title">Digital Craft Co.</span>
            </div>
            <p className="card-description">
              We help B2B SaaS companies grow, with crystal clear messaging and
              high-performing websites.
            </p>
            <button className="card-button">
              Book a Free Clarity Call <span className="arrow"><FaArrowRight /></span>
            </button>
          </div>
          
          <div className="footer-section connect">
            <h4>Connect over</h4>
            <ul className="connect-ul">
              <div className="connect-icons">
                <span><FaTwitter /></span>
                <li>X</li>
              </div>
              <div className="connect-icons">
                <span><AiFillLinkedin /></span>
                <li>LinkedIn</li>
              </div>
              <div className="connect-icons">
                <span><FaFacebookSquare /></span>
                <li>Facebook</li>
              </div>
              <div className="connect-icons">
                <span><SiGmail /></span>
                <li>Email</li>
              </div>
            </ul>
          </div>
          
          <div className="footer-section explore">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>See our Work</li>
              <li>Hire us</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div className="footer-section services">
            <h4>Our Services</h4>
            <ul>
              <li>Conversion Audit</li>
              <li>Research & Copywriting</li>
              <li>Website & Visual Design</li>
              <li>Website Development</li>
              <li>Complete Revamp</li>
            </ul>
          </div>
        </div>
        
       
      </footer>

      <section className="client-results-section">
        <div className="client-results-container">
          <h2 className="client-results-title">Our recent client results</h2>
          
          <div className="clients-container">
            <div className="client-card">
              <h3 className="client-percentage">82%</h3>
              <p className="client-text">Increase in conv. rate per user</p>
              <div className="client-logo mailreach-logo">
                MAILREACH
              </div>
            </div>
            
            <div className="client-card">
              <h3 className="client-percentage">207%</h3>
              <p className="client-text">Increase in conversion rate</p>
              <div className="client-logo reviewwave-logo">
                review wave
              </div>
            </div>
            
            <div className="client-card">
              <h3 className="client-percentage">230%</h3>
              <p className="client-text">Increase in conversion of MOM</p>
              <div className="client-logo viostream-logo">
                VIOSTREAM
              </div>
            </div>
            
            <div className="client-card">
              <h3 className="client-percentage">155%</h3>
              <p className="client-text">Increase in demo calls</p>
              <div className="client-logo another-logo">
                CLIENT
              </div>
            </div>
          </div>
        </div>
         <div className="footer-bottom">
          <p>
            Digital Craft Co. LLC, 2093 Philadelphia Pike #2775, Claymont, DE 19703
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;