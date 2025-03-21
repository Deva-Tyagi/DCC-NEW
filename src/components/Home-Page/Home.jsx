import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from './Banner-Page/Banner';
import Testimonial from './Testimonial/Testimonial';
import Solutions from './Solutions/Solutions';
import Technologies from './Technologies/Technologies';
import Services from './Services/Services';
import Industries from './Industries/Industries';
import Faq from './FAQs/Faq';
import Process from './Process/Process';
import CallToAction from './CallToAction/CallToAction';
import FormPage from './FormPage/FormPage';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Make sure sectionRef.current exists before trying to query it
    if (!sectionRef.current) return;

    const components = sectionRef.current.querySelectorAll(".animate");

    components.forEach((component) => {
      gsap.fromTo(
        component,
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: component,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Banner />
      <section className="animated-section" ref={sectionRef}>
        <div className="animate">
          <Testimonial />
        </div>
        <div className="animate">
          <Solutions />
        </div>
        <div className="animate">
          <Technologies />
        </div>
        <div className="animate">
          <Services />
        </div>
        <div className="animate">
          <Industries />
        </div>
        <div className="animate">
          <Faq />
        </div>
        <div className="animate">
          <Process />
        </div>
        <div className="animate">
          <CallToAction />
        </div>
        <div className="animate">
          <FormPage />
        </div>
      </section>
    </>
  );
};

export default Home;