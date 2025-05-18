// ContactStats.jsx
import React, { useState, useEffect } from 'react';
import './ContactStats.css';

const ContactStats = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 500, suffix: '+', label: 'Projects Completed' },
    { value: 0, target: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 0, target: 24, suffix: 'hrs', label: 'Average Response Time' },
    { value: 0, target: 150, suffix: '+', label: 'Happy Clients' }
  ]);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentValue = 0;
        const increment = stat.target / steps;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.target) {
            currentValue = stat.target;
            clearInterval(timer);
          }

          setStats(prevStats => 
            prevStats.map((s, i) => 
              i === index ? { ...s, value: Math.floor(currentValue) } : s
            )
          );
        }, stepDuration);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.stats-grid');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-stats">
      <div className="container">
        <div className="stats-content">
          <div className="stats-header">
            <div className="stats-badge">
              <span className="badge-icon">📊</span>
              <span>Our Track Record</span>
            </div>
            <h2>Trusted by Companies Worldwide</h2>
            <p>
              Numbers that speak for our commitment to excellence and customer satisfaction. 
              Join hundreds of satisfied clients who trust us with their digital transformation.
            </p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {index === 0 && <span>🚀</span>}
                  {index === 1 && <span>⭐</span>}
                  {index === 2 && <span>⚡</span>}
                  {index === 3 && <span>👥</span>}
                </div>
                <div className="stat-number">
                  <span className="number">{stat.value}</span>
                  <span className="suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-bar">
                  <div 
                    className="stat-progress"
                    style={{ 
                      width: `${(stat.value / stat.target) * 100}%`,
                      transition: 'width 0.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="stats-testimonial">
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <blockquote>
                Digital Craft Co. transformed our business with their innovative solutions. 
                Their response time is incredible and the quality of work is outstanding.
              </blockquote>
              <div className="testimonial-author">
                <img src="/api/placeholder/60/60" alt="Client" className="author-photo" />
                <div className="author-info">
                  <h4>Jennifer Martinez</h4>
                  <p>CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStats;