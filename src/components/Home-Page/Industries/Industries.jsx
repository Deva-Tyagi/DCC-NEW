import React from 'react';
import './Industries.css';

const Industries = () => {
    const industries = [
        { id: 1, name: 'BEAUTY & FASHION', x: '20%', y: '30%', icon: '✂️' },
        { id: 2, name: 'SPORTS', x: '20%', y: '50%', icon: '🏆', isRed: true },
        { id: 3, name: 'GOVERNMENT ENTITIES', x: '35%', y: '20%', icon: '🏛️' },
        { id: 4, name: 'HOTEL', x: '35%', y: '40%', icon: '🏨' },
        { id: 5, name: 'AUTOMOTIVE', x: '35%', y: '60%', icon: '🚗' },
        { id: 6, name: 'ENTERTAINMENT & EVENTS', x: '50%', y: '30%', icon: '🎭' },
        { id: 7, name: 'BANKING', x: '50%', y: '50%', icon: '🏦' },
        { id: 8, name: 'TECHNOLOGY', x: '50%', y: '70%', icon: '💻' },
        { id: 9, name: 'RETAIL', x: '65%', y: '20%', icon: '🛍️' },
        { id: 10, name: 'TELECOMS', x: '65%', y: '40%', icon: '📡' },
        { id: 11, name: 'RESTAURANTS', x: '65%', y: '60%', icon: '🍽️' },
        { id: 12, name: 'MEDICAL & HEALTHCARE', x: '80%', y: '30%', icon: '⚕️', isRed: true },
        { id: 13, name: 'E-COMMERCE', x: '80%', y: '50%', icon: '🛒' }
    ];
    
    return (
        <div className="industries-page">
            <div className="industries-background">
                {/* World Map Background */}
                <div className="map-overlay">
                    <svg width="100%" height="100%" viewBox="0 0 1000 500">
                        <path
                             d="M0,250 C150,200 300,150 500,250 C700,350 850,300 1000,250"
                             fill="none"
                             stroke="white"
                             strokeWidth="0.5"
                        />
                        {Array.from({ length: 50 }).map((_, i) => (
                            <circle
                                key={i}
                                cx={Math.random() * 1000}
                                cy={Math.random() * 500}
                                r="2"
                                fill="white"
                                className="map-dot"
                            />
                        ))}
                    </svg>
                </div>
                
                <div className="animated-shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <div className="background-hexagon"></div>
                <div className="background-hexagon"></div>
            </div>
            
            <div className="industries-main">
                <h1 className="industries-title">Markets We Empower</h1>
                <div className="industries-grid">
                    {industries.map((industry) => (
                        <div
                            key={industry.id}
                            style={{
                                left: industry.x,
                                top: industry.y
                            }}
                            className="industry-item"
                        >
                            <div className={`industry-hexagon ${industry.isRed ? 'red-variant' : ''}`}>
                                <div className="industry-icon">
                                    {industry.icon}
                                </div>
                                <p className="industry-text">
                                    {industry.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;