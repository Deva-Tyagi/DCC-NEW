import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Navbar.css';
import logo from '../Images/DCClogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.out", delay: 1.8 }
    );

    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, stagger: 0.3, ease: "power2.out", delay: 1.8 }
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;