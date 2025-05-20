'use client';
import React, { useState, useCallback, useMemo } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Memoize FAQ data to prevent unnecessary re-renders
  const data = useMemo(() => ({
    General: [
      {
        question: "How does Digital Craft Co. ensure successful project delivery and client satisfaction?",
        answer: "We guarantee project success through proven agile development methodologies, comprehensive project planning, regular milestone reviews, and transparent communication channels. Our dedicated project managers maintain close collaboration with clients throughout the entire development lifecycle to ensure deliverables meet expectations and deadlines.",
      },
      {
        question: "Does Digital Craft Co. provide ongoing support and maintenance after project completion?",
        answer: "Yes, we offer comprehensive post-launch support including 24/7 technical assistance, regular software updates, performance monitoring, bug fixes, and feature enhancements. Our support packages are tailored to your specific needs, ensuring your digital solutions remain optimized and secure long after deployment.",
      },
      {
        question: "How can businesses start a digital transformation project with Digital Craft Co.?",
        answer: "Starting your digital journey is simple - contact us through our website consultation form, schedule a free discovery call with our experts, or visit our office for an in-person meeting. We begin with a thorough assessment of your current systems, business objectives, and technical requirements to create a customized solution roadmap.",
      },
      {
        question: "What industries and business sectors does Digital Craft Co. specialize in serving?",
        answer: "We serve diverse industries including healthcare and medical technology, logistics and supply chain, financial services and fintech, e-commerce and retail, education and e-learning platforms, manufacturing, and government sectors. Our cross-industry expertise allows us to deliver tailored solutions that address specific regulatory and operational requirements.",
      },
    ],
    Capabilities: [
      {
        question: "What cutting-edge technologies and development frameworks does Digital Craft Co. use?",
        answer: "Our technology stack includes modern frameworks like React, Next.js, Vue.js for frontend development, Node.js, Python Django, Java Spring Boot for backend systems, Flutter and React Native for mobile applications, cloud platforms AWS and Azure, and emerging technologies like AI/ML integration, blockchain development, and IoT solutions.",
      },
      {
        question: "Can Digital Craft Co. handle large-scale enterprise software development projects?",
        answer: "Absolutely! Our experienced team excels at enterprise-level projects including complex system integrations, microservices architecture, scalable cloud solutions, legacy system modernization, and multi-platform applications. We've successfully delivered solutions for Fortune 500 companies and fast-growing startups alike.",
      },
      {
        question: "Does Digital Craft Co. develop custom software solutions for unique business requirements?",
        answer: "Yes, we specialize in bespoke software development tailored to your specific business processes and requirements. From custom CRM systems and inventory management platforms to specialized workflow automation tools and industry-specific applications, we build solutions that perfectly align with your operational needs.",
      },
    ],
    "Privacy and Security": [
      {
        question: "How does Digital Craft Co. ensure robust data security and privacy protection?",
        answer: "We implement multi-layered security protocols including end-to-end encryption, secure development practices (OWASP guidelines), regular penetration testing, secure cloud infrastructure, access controls, and continuous monitoring systems. All our solutions undergo rigorous security audits before deployment.",
      },
      {
        question: "Does Digital Craft Co. comply with international data protection regulations like GDPR and HIPAA?",
        answer: "Yes, we maintain strict compliance with global regulations including GDPR (General Data Protection Regulation), HIPAA (Health Insurance Portability and Accountability Act), SOC 2, PCI DSS, and other industry-specific standards. Our compliance framework ensures your business meets all regulatory requirements.",
      },
      {
        question: "How does Digital Craft Co. protect client confidentiality and intellectual property?",
        answer: "We protect client confidentiality through comprehensive NDAs (Non-Disclosure Agreements), secure development environments, encrypted communication channels, restricted access protocols, and IP protection frameworks. Our team follows strict confidentiality guidelines, ensuring your proprietary information and business strategies remain secure.",
      },
    ],
  }), []);

  // Optimize tab switching with useCallback
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setExpandedQuestion(null); 
  }, []);

  // Optimize question toggle with useCallback
  const toggleQuestion = useCallback((index) => {
    setExpandedQuestion(current => current === index ? null : index);
  }, []);

  // Generate structured data for SEO
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.values(data).flat().map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }), [data]);

  return (
    <>
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
    <div className="faq-container">
        <div className="faq-header" style={{textAlign:"center",padding:"2rem"}}>
            <h3 style={{color:"#64ffdb"} }>FREQUENTLY ASKED QUESTIONS</h3>
            <h2 style={{color:"gray"}}>Digital Solutions Expertise & Business Growth</h2>
            <div>
            <p>Discover how Digital Craft Co. transforms businesses through innovative technology solutions, expert development services, and comprehensive digital strategies that drive measurable results and sustainable growth for companies worldwide.</p>
            </div>
        </div>
    <div className="faq-page">
      <div className="faq-sidebar">
        {Object.keys(data).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
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
    </>
  );
};

export default Faq;