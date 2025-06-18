import React, { useEffect } from "react";
import "./Footer.css";
import logo from '../Images/dcclogo1.jpg'
import { FaFacebookSquare, FaArrowRight, FaInstagram } from "react-icons/fa";
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
      
      cloneItems(); 
      
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
            <a href="/contact" className="card-button">
              Book a Free Clarity Call <span className="arrow"><FaArrowRight /></span>
            </a>
          </div>
          
          <div className="footer-section connect">
            <h4>Connect over</h4>
            <ul className="connect-ul">
              <a href="https://www.instagram.com/digitalcraftco.dcc/" className="social-link">
                <div className="connect-icons">
                  <span><FaInstagram /></span>
                  <li>Instaram</li>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/digitalcraftco/" className="social-link">
                <div className="connect-icons">
                  <span><AiFillLinkedin /></span>
                  <li>LinkedIn</li>
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576692659964" className="social-link">
                <div className="connect-icons">
                  <span><FaFacebookSquare /></span>
                  <li>Facebook</li>
                </div>
              </a>
              <a href="mailto:contact@digitalcraftco.com" className="social-link">
                <div className="connect-icons">
                  <span><SiGmail /></span>
                  <li>Email</li>
                </div>
              </a>
            </ul>
          </div>
          
          <div className="footer-section explore">
            <h4>Explore</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/portfolio">See our Work</a></li>
              <li><a href="/contact-us">Hire us</a></li>
            
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
          <h2 className="client-results-title">Our Journey</h2>
          
          <div className="clients-container">
            <div className="client-card">
              <h3 className="client-percentage">12+</h3>
              <p className="client-text">Projects completed successfully</p>
              <div className="client-logo mailreach-logo">
                PROJECTS
              </div>
            </div>
            
            <div className="client-card">
              <h3 className="client-percentage">35%</h3>
              <p className="client-text">Average improvement in user engagement</p>
              <div className="client-logo reviewwave-logo">
                engagement
              </div>
            </div>
            
            <div className="client-card">
              <h3 className="client-percentage">96%</h3>
              <p className="client-text">Client satisfaction rate</p>
              <div className="client-logo viostream-logo">
                SATISFACTION
              </div>
            </div>
            
            <div className="client-card">
              <h3 className="client-percentage">8+</h3>
              <p className="client-text">Industries served</p>
              <div className="client-logo another-logo">
                INDUSTRIES
              </div>
            </div>
          </div>
        </div>
         <div className="footer-bottom">
          <p>
            © 2025 Digital Craft Co. LLC – All rights reserved.          
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;