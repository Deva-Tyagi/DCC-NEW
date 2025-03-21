import React from 'react';
import './Statistics.css';
import { FaUsers, FaClipboardCheck, FaRegLightbulb, FaChartBar } from 'react-icons/fa';

const Statistics = () => {
    const cardData = [
        { 
            icon: <FaUsers className="stat-icon" />, 
            frontText: "Happy Clients", 
            number: "1068", 
            backText: "We prioritize satisfaction and trust.",
            num:"1" 
        },
        { 
            icon: <FaClipboardCheck className="stat-icon" />, 
            frontText: "Completed Projects", 
            number: "230", 
            backText: "Delivering quality projects on time.",
            num:"2"  
        },
        { 
            icon: <FaRegLightbulb className="stat-icon" />, 
            frontText: "Perspective Clients", 
            number: "230", 
            backText: "Expanding connections and ideas.",
            num:"1"  
        },
        { 
            icon: <FaChartBar className="stat-icon" />, 
            frontText: "New Ideas", 
            number: "23", 
            backText: "Innovation drives our growth.",
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
                            <div className={card.num==1?'odd':'even'}>
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
