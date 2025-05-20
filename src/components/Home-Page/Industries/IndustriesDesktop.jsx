import React, { useState, useEffect } from 'react';
import './IndustriesDesktop.css';

// SEO-optimized component with desktop prefix for all classnames
const IndustriesDesktop = () => {
    // Industry data with SEO-friendly descriptions and metadata
    const industries = [
        { 
            id: 1, 
            name: 'BEAUTY & FASHION', 
            x: '20%', 
            y: '30%', 
            icon: '✂️',
            seoDescription: 'Innovative digital solutions for beauty brands and fashion retailers to enhance customer engagement'
        },
        { 
            id: 2, 
            name: 'SPORTS', 
            x: '20%', 
            y: '50%', 
            icon: '🏆', 
            isRed: true,
            seoDescription: 'Premium technology services for sports teams, leagues, and athletic organizations'
        },
        { 
            id: 3, 
            name: 'GOVERNMENT ENTITIES', 
            x: '35%', 
            y: '20%', 
            icon: '🏛️',
            seoDescription: 'Secure and compliant digital solutions for government agencies and public sector organizations'
        },
        { 
            id: 4, 
            name: 'HOTEL', 
            x: '35%', 
            y: '40%', 
            icon: '🏨',
            seoDescription: 'Guest-centric technology solutions for hotels, resorts, and hospitality businesses'
        },
        { 
            id: 5, 
            name: 'AUTOMOTIVE', 
            x: '35%', 
            y: '60%', 
            icon: '🚗',
            seoDescription: 'Digital transformation services for automotive dealerships, manufacturers, and service providers'
        },
        { 
            id: 6, 
            name: 'ENTERTAINMENT & EVENTS', 
            x: '50%', 
            y: '30%', 
            icon: '🎭',
            seoDescription: 'Engaging digital experiences for entertainment venues, event organizers, and production companies'
        },
        { 
            id: 7, 
            name: 'BANKING', 
            x: '50%', 
            y: '50%', 
            icon: '🏦',
            seoDescription: 'Secure financial technology solutions for banks, credit unions, and financial institutions'
        },
        { 
            id: 8, 
            name: 'TECHNOLOGY', 
            x: '50%', 
            y: '70%', 
            icon: '💻',
            seoDescription: 'Cutting-edge digital services for technology companies and software enterprises'
        },
        { 
            id: 9, 
            name: 'RETAIL', 
            x: '65%', 
            y: '20%', 
            icon: '🛍️',
            seoDescription: 'Omnichannel retail solutions for stores, boutiques, and retail chains'
        },
        { 
            id: 10, 
            name: 'TELECOMS', 
            x: '65%', 
            y: '40%', 
            icon: '📡',
            seoDescription: 'Advanced communication technology for telecom providers and communication companies'
        },
        { 
            id: 11, 
            name: 'RESTAURANTS', 
            x: '65%', 
            y: '60%', 
            icon: '🍽️',
            seoDescription: 'Digital solutions for restaurants, cafes, and food service businesses'
        },
        { 
            id: 12, 
            name: 'MEDICAL & HEALTHCARE', 
            x: '80%', 
            y: '30%', 
            icon: '⚕️', 
            isRed: true,
            seoDescription: 'HIPAA-compliant technology for hospitals, clinics, and healthcare providers'
        },
        { 
            id: 13, 
            name: 'E-COMMERCE', 
            x: '80%', 
            y: '50%', 
            icon: '🛒',
            seoDescription: 'Conversion-focused digital solutions for online stores and e-commerce businesses'
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    // Optimized resize handler with debounce
    useEffect(() => {
        let timeoutId;
        
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsMobile(window.innerWidth <= 599);
            }, 150);
        };
        
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
        <div className="desktop-deco-cover">
            <div className='desktop-industries-class-deco'></div>
        </div>
        <section className="desktop-industries-page" aria-label="Industry Solutions">
            <div className="desktop-industries-background">
                <div className="desktop-map-overlay">
                    <svg width="100%" height="100%" viewBox="0 0 1000 500" aria-hidden="true">
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
                                className="desktop-map-dot"
                            />
                        ))}
                    </svg>
                </div>
                <div className="desktop-animated-shapes" aria-hidden="true">
                    <div className="desktop-shape"></div>
                    <div className="desktop-shape"></div>
                    <div className="desktop-shape"></div>
                    <div className="desktop-shape"></div>
                </div>
                <div className="desktop-background-hexagon"></div>
                <div className="desktop-background-hexagon"></div>
            </div>

            <div className="desktop-industries-main">
                <div className="desktop-industries-header">
                    <div className="desktop-title-decoration"></div>
                    <h1 className="desktop-industries-title">Industry Solutions We Deliver</h1>
                    <div className="desktop-title-decoration"></div>
                </div>
                
                <p className="desktop-industries-intro">
                    We provide tailored digital transformation services across multiple industries, helping businesses 
                    leverage technology to enhance operations, improve customer experiences, and drive growth in today's 
                    competitive marketplace.
                </p>
                
                <div className={`desktop-industries-grid ${isMobile ? 'desktop-mobile-orbit' : ''}`}>
                    {industries.map((industry, index) => (
                        <div
                            key={industry.id}
                            style={!isMobile ? { left: industry.x, top: industry.y } : {}}
                            className={`desktop-industry-item ${isMobile ? `desktop-orbit-item-${index}` : ''}`}
                        >
                            <div className={`desktop-industry-hexagon ${industry.isRed ? 'desktop-red-variant' : ''}`}>
                                <div className="desktop-industry-icon" aria-hidden="true">{industry.icon}</div>
                                <h2 className="desktop-industry-text" style={{fontSize:'0.85rem'}}>{industry.name}</h2>
                                <div className="desktop-industry-description">
                                    <p>{industry.seoDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
               
            </div>
        </section>
        </>
    );
};

export default IndustriesDesktop;