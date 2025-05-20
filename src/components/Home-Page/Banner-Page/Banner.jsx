import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Banner.css';
import owlImg from '../../Images/owl.jpg';
import frontImg1 from '../../Images/owlup.png';
import frontImg2 from '../../Images/owldown.png';

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.top-image', {
      y: '-100%',
      duration: 2,
      ease: 'power2.out',
      delay: 0.5,
    })
      .to(
        '.bottom-image',
        {
          y: '100%',
          duration: 2,
          ease: 'power2.out',
        },
        '<'
      )
      .fromTo(
        '.content',
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power2.out' },
        '-0.5'
      );

    gsap.to('.blue-circle', {
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.orange-line', {
      width: '100%',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <header className="main-container" role="banner">
      <div className="container">
        <div className="overlay">
          <img
            src={frontImg1}
            alt="Top decorative overlay with digital theme"
            className="top-image"
            loading="lazy"
          />
          <img
            src={frontImg2}
            alt="Bottom decorative overlay with digital theme"
            className="bottom-image"
            loading="lazy"
          />
        </div>

        <div className="content">
          <div className="text">
            <h1>
              <span className="highlight-text" style={{ fontSize: '65px' }}>
                Craft
              </span>{' '}
              Yourself Digitally
            </h1>
            <p style={{fontSize:'18px'}}>
              At <strong>DigitalCraft Co.</strong>, we are a cutting-edge{' '}
              <strong>AI-driven digital marketing agency</strong> that
              specializes in <strong>brand development</strong>,{' '}
              <strong>product marketing</strong>, and{' '}
              <strong>strategic digital solutions</strong>. Our goal is to help
              businesses thrive in the digital world by enhancing their
              presence, engagement, and conversion through innovative
              technology.
            </p>
          </div>

          <div className="image-container">
            <img
              src={owlImg}
              alt="AI-inspired Owl symbolizing smart digital solutions"
              className="main-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
