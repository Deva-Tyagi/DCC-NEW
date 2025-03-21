import { useState } from 'react';

const ServiceBox = ({ title, description, iconUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="serve-box">
      <div 
        className={`serve-icon-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src="/api/placeholder/48/48" 
          alt={title}
          className={`serve-icon ${isHovered ? 'rotate' : ''}`}
        />
      </div>
      <h3 className="serve-title">{title}</h3>
      <p className="serve-description">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "We create custom, responsive websites that drive results. From simple landing pages to complex e-commerce platforms, we deliver solutions that help your business grow online.",
      iconUrl: "/web-dev-icon.png"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications built with the latest technologies. We ensure your app is fast, secure, and provides an exceptional user experience.",
      iconUrl: "/app-dev-icon.png"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including social media management, content marketing, and PPC campaigns to increase your brand's online presence.",
      iconUrl: "/digital-marketing-icon.png"
    },
    {
      title: "SEO Services",
      description: "Data-driven SEO solutions to improve your search rankings, drive organic traffic, and increase your website's visibility in search engine results.",
      iconUrl: "/seo-icon.png"
    }
  ];

  return (
    <section className="serve-section">
      <div className="serve-container">
        <div className="serve-grid">
          <div className="serve-intro">
            <span className="serve-label">OUR SERVICES</span>
            <h2 className="serve-heading">TRANSFORMING IDEAS INTO DIGITAL SOLUTIONS</h2>
            <div className="separator"></div>
            <p className="serve-description intro-description">
              We provide end-to-end IT solutions to help businesses thrive in the digital age. 
              Our expert team delivers innovative solutions tailored to your specific needs, 
              ensuring your business stays ahead in today's competitive market.
            </p>
            <button className="serve-button">
              EXPLORE OUR SERVICES
            </button>
          </div>

          <div className="serve-list">
            {services.map((service, index) => (
              <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
                iconUrl={service.iconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;