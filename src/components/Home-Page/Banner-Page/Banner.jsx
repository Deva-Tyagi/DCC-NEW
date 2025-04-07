import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Banner.css';
import owlImg from '../../Images/owl.jpg'
import frontImg1 from '../../Images/owlup.png'
import frontImg2 from '../../Images/owldown.png'

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".top-image", {
        y: "-100%",
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
      })
      .to(
        ".bottom-image",
        {
          y: "100%",
          duration: 2,
          ease: "power2.out",
        },
        "<"
      )
      .fromTo(
        ".content",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" },
        "-0.5"
      );
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <div className="overlay">
          <img
            src={frontImg1} 
            alt="Portfolio Top"
            className="top-image"
          />
          <img
            src={frontImg2} 
            alt="Portfolio Bottom"
            className="bottom-image"
          />
        </div>

        <div className="content">
          <div className="text">
            <h1 style={{fontSize:'30px'}}><span style={{fontSize:'65px'}} className="highlight-text">Craft</span> Yourself Digitally</h1>
            <p>Idea Your's Execution Our's Success Your's Contribution Our's Let's become partner and make it happen
            </p>
            <button className='banner-btn'>Learn More</button>
          </div>

          <div className="image-container">
            <img
              src={owlImg} 
              alt="Owl"
              className="main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;