import React from 'react';
import './OfficeLocation.css';

const OfficeLocation = () => {
  return (
    <section className="office-location">
      <div className="location-container">
        <div className="location-content">
          <div className="location-info">
            <div className="location-badge">
              <span className="badge-icon">📍</span>
              <span>Our Location</span>
            </div>
            <h2>Visit Our Office</h2>
            <p className="location-description">
              Located in the heart of the tech district, our modern office space reflects 
              our commitment to innovation and collaboration. Come visit us for a coffee 
              and let's discuss how we can bring your digital vision to life.
            </p>
            
            <div className="address-details">
              <div className="address-item">
                <span className="address-icon">🏢</span>
                <div>
                  <h4>Address</h4>
                  <p>123 Innovation Drive, Suite 456<br />Digital Valley, Tech City 12345</p>
                </div>
              </div>
              
              <div className="address-item">
                <span className="address-icon">🕒</span>
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="address-item">
                <span className="address-icon">🚗</span>
                <div>
                  <h4>Parking</h4>
                  <p>Free parking available<br />Visitor spots in front of building</p>
                </div>
              </div>
            </div>
            
            <div className="location-actions">
              <button className="primary-btn">
                <span className="btn-icon">🗺️</span>
                Get Directions
              </button>
              <button className="secondary-btn">
                <span className="btn-icon">📋</span>
                Schedule a Visit
              </button>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-pin">
                  <span className="pin-icon">📍</span>
                </div>
                <h3>Digital Craft Co.</h3>
                <p>123 Innovation Drive</p>
                <p>Digital Valley, Tech City</p>
                
                <div className="map-features">
                  <div className="feature">
                    <span className="feature-icon">☕</span>
                    <span>Coffee Shop Nearby</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🚇</span>
                    <span>Metro Station 2 min</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🍽️</span>
                    <span>Restaurants Around</span>
                  </div>
                </div>
              </div>
              
              <div className="map-overlay">
                <button className="view-map-btn">
                  View in Google Maps
                  <span className="external-icon">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;