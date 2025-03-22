'use client';
import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const data = {
    General: [
      {
        question: "How does DCC ensure project success?",
        answer: "We ensure project success by utilizing agile methodologies, thorough planning, and consistent communication with our clients.",
      },
      {
        question: "Does DCC provide support post-project completion?",
        answer: "Yes, we offer post-project support, including maintenance, updates, and technical assistance as required.",
      },
      {
        question: "How can I start a project with DCC?",
        answer: "You can start a project by contacting us via our website or scheduling a consultation with our team.",
      },
      {
        question: "What industries does DCC specialize in?",
        answer: "We specialize in various industries, including healthcare, logistics, education, and finance.",
      },
    ],
    Capabilities: [
      {
        question: "What technologies does DCC specialize in?",
        answer: "We specialize in technologies like React, Node.js, Python, Java, Flutter, and more.",
      },
      {
        question: "Can DCC handle enterprise-level projects?",
        answer: "Yes, our team is experienced in handling complex, enterprise-level projects with scalable solutions.",
      },
      {
        question: "Does DCC offer custom software solutions?",
        answer: "Absolutely! We provide tailored software solutions to meet specific client requirements.",
      },
    ],
    "Privacy and Security": [
      {
        question: "How does DCC ensure data security?",
        answer: "We implement advanced security protocols, including data encryption, secure servers, and regular audits.",
      },
      {
        question: "Does DCC comply with GDPR and other regulations?",
        answer: "Yes, we comply with GDPR, HIPAA, and other global regulations to ensure client data is protected.",
      },
      {
        question: "How does DCC protect client confidentiality?",
        answer: "We use NDAs and secure communication channels to safeguard client confidentiality at every stage.",
      },
    ],
  };

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faq-container">
        <div className="faq-header" style={{textAlign:"center",padding:"2rem"}}>
            <h3 style={{color:"#ff4500"} }>SOME  FAQs</h3>
            <h2 style={{color:"gray"}}>Creating Digital Masterpieces</h2>
            <div>
            <p>Get to know more about how we at Ispecia Technologies can help you achieve your business goals with our comprehensive services.</p>
            </div>
        </div>
    <div className="faq-page">
      <div className="faq-sidebar">
        {Object.keys(data).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setExpandedQuestion(null); 
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="faq-content">
        <h2 style={{color:"gray"}}>{activeTab}</h2>
        <ul>
          {data[activeTab].map((item, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span className="dropdown-icon">
                  {expandedQuestion === index ? "▲" : "▼"}
                </span>
              </div>
              {expandedQuestion === index && (
                
                <div className="faq-answer">{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Faq;
