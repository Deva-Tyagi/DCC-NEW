import React from "react";
import "./Footer.css";
import logo from '../Images/dcclogo1.jpg'
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
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
        Book a Free Clarity Call <span className="arrow">→</span>
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
        <div className="footer-bottom">
          <p>
            Digital Craft Co. LLC, 2093 Philadelphia Pike #2775, Claymont, DE 19703
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
