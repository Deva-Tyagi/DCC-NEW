import React from 'react';
import './Statistics.css';
import { FaUsers, FaClipboardCheck, FaRegLightbulb, FaChartBar } from 'react-icons/fa';

const Statistics = () => {
    const cardData = [
        { 
            icon: <FaUsers className="stat-icon" />, 
            frontText: "Happy Clients", 
            number: "22", 
            backText: "Building relationships one step at a time.",
            num:"1" 
        },
        { 
            icon: <FaClipboardCheck className="stat-icon" />, 
            frontText: "Projects Delivered", 
            number: "15", 
            backText: "Focused on quality and timely delivery.",
            num:"2"  
        },
        { 
            icon: <FaRegLightbulb className="stat-icon" />, 
            frontText: "Inquiries Received", 
            number: "65", 
            backText: "Many are discovering our services.",
            num:"1"  
        },
        { 
            icon: <FaChartBar className="stat-icon" />, 
            frontText: "Ideas Executed", 
            number: "8", 
            backText: "Innovation is our driving force.",
            num:"2"  
        }
    ];

    return (
        <div className="statistics-container">
            <div className="diamond-grid">
                {cardData.map((card, index) => (
                    <div className="stat-card" key={index}>
                        <div className="stat-card-inner">
                            {/* Front Side */}
                            <div className={card.num === "1" ? 'odd' : 'even'}>
                                <div className="stat-card-front">
                                    <div className='random-class'>
                                        {card.icon}
                                        <p className="stat-number">{card.number}</p>
                                        <p className="stat-text">{card.frontText}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Back Side */}
                            <div className="stat-card-back">
                                <div className="random-class">
                                    <p className="stat-back-text">{card.backText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
