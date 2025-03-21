import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const ourServices = [
    {
        title: "Website Design and Development",
        description:
          "We create visually appealing and user-friendly websites tailored to meet your business needs and provide a seamless user experience.",
        icon: "🌐",
      },
      {
        title: "Search Engine Optimization",
        description:
          "Our SEO strategies ensure your website ranks higher on search engines, increasing visibility and driving more organic traffic.",
        icon: "🔍",
      },
      {
        title: "Branding and Graphic Design",
        description:
          "We craft compelling brand identities and design visually stunning graphics to make your business stand out.",
        icon: "🎨",
      },
      {
        title: "Video Editing",
        description:
          "Our professional video editing services transform raw footage into captivating content for your audience.",
        icon: "🎥",
      },
      {
        title: "Social Media Management",
        description:
          "We manage your social media platforms to build engagement, grow your audience, and enhance your online presence.",
        icon: "📱",
      },
      {
        title: "Content Creation",
        description:
          "Our content creation services deliver high-quality, engaging content to effectively communicate your brand message.",
        icon: "✍️",
      },
      {
        title: "E-Commerce Solution",
        description:
          "We provide comprehensive e-commerce solutions to help you establish and grow your online store effortlessly.",
        icon: "🛒",
      },
      {
        title: "Digital Marketing",
        description:
          "Our digital marketing strategies are designed to maximize your ROI and grow your business online.",
        icon: "📈",
      },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
    <section className="services-main">
        <div className="services-header">
            <h2>Our Areas of Expertise</h2>
            <p>We don’t just follow trends, we analyze your unique
                data and challenges, then craft data-driven solutions
                that deliver quantifiable results.</p>
        </div>
    <div className="services-container" ref={containerRef}>
      {ourServices.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="card-inner">
            <div className="card-front">
              <div className="icon">{service.icon}</div>
              <h3 style={{textAlign:"center"}}>{service.title}</h3>
            </div>
            <div className="card-back">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="cta-card">
        <button className="cta-button">Our Solutions</button>
      </div>
    </section>
    </>
  );
}

export default Services;