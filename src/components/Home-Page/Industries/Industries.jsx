import React, { useState, useEffect } from 'react';
import './Industries.css';

const Industries = () => {
    const industries = [
        { id: 1, name: 'BEAUTY & FASHION', icon: '✂️', highlight: false },
        { id: 2, name: 'SPORTS', icon: '🏆', highlight: true },
        { id: 3, name: 'GOVERNMENT ENTITIES', icon: '🏛️', highlight: false },
        { id: 4, name: 'HOTEL', icon: '🏨', highlight: false },
        { id: 5, name: 'AUTOMOTIVE', icon: '🚗', highlight: false },
        { id: 6, name: 'ENTERTAINMENT & EVENTS', icon: '🎭', highlight: false },
        { id: 7, name: 'BANKING', icon: '🏦', highlight: false },
        { id: 8, name: 'TECHNOLOGY', icon: '💻', highlight: false },
        { id: 9, name: 'RETAIL', icon: '🛍️', highlight: false },
        { id: 10, name: 'TELECOMS', icon: '📡', highlight: false },
        { id: 11, name: 'RESTAURANTS', icon: '🍽️', highlight: false },
        { id: 12, name: 'E-COMMERCE', icon: '🛒', highlight: true },
        
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="industries-page">
            <div className="industries-background">
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
                <div className="background-shape"></div>
                <div className="background-shape"></div>
            </div>

            <div className="industries-main">
                <div className="industries-header">
                    <div className="title-decoration"></div>
                    <h1 className="industries-title">Markets We Empower</h1>
                    <div className="title-decoration"></div>
                </div>
                
                <div className="industries-container">
                    {industries.map((industry) => (
                        <div 
                            key={industry.id}
                            className={`industry-card ${industry.highlight ? 'highlight' : ''}`}
                            onMouseEnter={() => setActiveIndex(industry.id)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div className="industry-content">
                                <div className="industry-icon-wrapper">
                                    <span className="industry-icon">{industry.icon}</span>
                                </div>
                                <h3 className="industry-name">{industry.name}</h3>
                            </div>
                            <div className="card-glow"></div>
                            <div className="card-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;







// import React, { useState, useEffect } from 'react';
// import './Industries.css';

// const Industries = () => {
//     const industries = [
//         { id: 1, name: 'BEAUTY & FASHION', x: '20%', y: '30%', icon: '✂️' },
//         { id: 2, name: 'SPORTS', x: '20%', y: '50%', icon: '🏆', isRed: true },
//         { id: 3, name: 'GOVERNMENT ENTITIES', x: '35%', y: '20%', icon: '🏛️' },
//         { id: 4, name: 'HOTEL', x: '35%', y: '40%', icon: '🏨' },
//         { id: 5, name: 'AUTOMOTIVE', x: '35%', y: '60%', icon: '🚗' },
//         { id: 6, name: 'ENTERTAINMENT & EVENTS', x: '50%', y: '30%', icon: '🎭' },
//         { id: 7, name: 'BANKING', x: '50%', y: '50%', icon: '🏦' },
//         { id: 8, name: 'TECHNOLOGY', x: '50%', y: '70%', icon: '💻' },
//         { id: 9, name: 'RETAIL', x: '65%', y: '20%', icon: '🛍️' },
//         { id: 10, name: 'TELECOMS', x: '65%', y: '40%', icon: '📡' },
//         { id: 11, name: 'RESTAURANTS', x: '65%', y: '60%', icon: '🍽️' },
//         { id: 12, name: 'MEDICAL & HEALTHCARE', x: '80%', y: '30%', icon: '⚕️', isRed: true },
//         { id: 13, name: 'E-COMMERCE', x: '80%', y: '50%', icon: '🛒' }
//     ];

//     const [isMobile, setIsMobile] = useState(false);
//     const [activeIndex, setActiveIndex] = useState(null);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 767);
//         };
//         handleResize(); // Initial check
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <div className="industries-page">
//             <div className="industries-background">
//                 <div className="map-overlay">
//                     <svg width="100%" height="100%" viewBox="0 0 1000 500">
//                         <path
//                             d="M0,250 C150,200 300,150 500,250 C700,350 850,300 1000,250"
//                             fill="none"
//                             stroke="white"
//                             strokeWidth="0.5"
//                         />
//                         {Array.from({ length: 50 }).map((_, i) => (
//                             <circle
//                                 key={i}
//                                 cx={Math.random() * 1000}
//                                 cy={Math.random() * 500}
//                                 r="2"
//                                 fill="white"
//                                 className="map-dot"
//                             />
//                         ))}
//                     </svg>
//                 </div>
//                 <div className="animated-shapes">
//                     <div className="shape"></div>
//                     <div className="shape"></div>
//                     <div className="shape"></div>
//                     <div className="shape"></div>
//                 </div>
//                 <div className="background-hexagon"></div>
//                 <div className="background-hexagon"></div>
//             </div>

//             <div className="industries-main">
//                 <div className="industries-header">
//                     <h1 className="industries-title">Markets We Empower</h1>
//                     <div className="title-underline"></div>
//                 </div>
                
//                 {isMobile ? (
//                     <div className="industries-mobile-container">
//                         {industries.map((industry) => (
//                             <div 
//                                 key={industry.id}
//                                 className="industry-mobile-item"
//                                 onMouseEnter={() => setActiveIndex(industry.id)}
//                                 onMouseLeave={() => setActiveIndex(null)}
//                             >
//                                 <div className={`industry-hexagon ${industry.isRed ? 'red-variant' : ''} ${activeIndex === industry.id ? 'active' : ''}`}>
//                                     <div className="industry-icon">{industry.icon}</div>
//                                     <p className="industry-text">{industry.name}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="industries-galaxy">
//                         <div className="industries-center-point"></div>
//                         {industries.map((industry) => (
//                             <div
//                                 key={industry.id}
//                                 style={{ left: industry.x, top: industry.y }}
//                                 className="industry-item"
//                                 onMouseEnter={() => setActiveIndex(industry.id)}
//                                 onMouseLeave={() => setActiveIndex(null)}
//                             >
//                                 <div className={`industry-hexagon ${industry.isRed ? 'red-variant' : ''} ${activeIndex === industry.id ? 'active' : ''}`}>
//                                     <div className="industry-icon">{industry.icon}</div>
//                                     <p className="industry-text">{industry.name}</p>
//                                 </div>
//                                 {activeIndex === industry.id && (
//                                     <div className="connection-line" style={{ 
//                                         width: `calc(${parseInt(industry.x)} - 50%)`, 
//                                         transform: `rotate(${parseInt(industry.y) > 50 ? parseInt(industry.y) : -parseInt(industry.y)}deg)`
//                                     }}></div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Industries;