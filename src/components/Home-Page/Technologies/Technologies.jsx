import React, { useState } from "react";
import './Technologies.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const topics = [
  {
    id: 1,
    title: "Frontend Programming Languages",
    data: [
      { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
      { name: "Javascript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "Angular", logo: "https://cdn-icons-png.flaticon.com/128/15484/15484402.png" },
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { name: "Vue.js", logo: "https://cdn-icons-png.flaticon.com/128/15484/15484278.png" },
      { name: "ember", logo: "https://emberjs.com/images/ember-logo.svg" },
      { name: "Nextjs", logo: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" },
    ],
  },
  {
    id: 2,
    title: "Backend Programming Languages",
    data: [
      { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
      { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "Ruby", logo: "https://cdn-icons-png.flaticon.com/512/919/919842.png" },
    ],
  },
  {
    id: 3,
    title: "Database Technologies",
    data: [
      { name: "MySQL", logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
      { name: "PostgreSQL", logo: "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png" },
      { name: "MongoDB", logo: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" },
      { name: "Redis", logo: "https://banner2.cleanpng.com/20180907/ska/kisspng-redis-memcached-database-caching-key-value-databas-redis-logo-svg-vector-amp-png-transparent-vect-1713942841776.webp" },
      { name: "SQLite", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiDKRZpdlPxn26X7p8cIeZPeqsEePZbP4cQ&s" },
    ],
  },
  {
    id: 4,
    title: "DevOps Tools",
    data: [
      { name: "Docker", logo: "https://w7.pngwing.com/pngs/219/411/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing-thumbnail.png" },
      { name: "Jenkins", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgr4GaQ79t_0EzVgnJA2BDkalwpHEoWW5LDQ&s" },
      { name: "Terraform", logo: "https://img.icons8.com/fluent/512/terraform.png" },
      { name: "Git", logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/git-logo.png" },
    ],
  },
  {
    id: 5,
    title: "Cloud Platforms",
    data: [
      { name: "AWS", logo: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
      { name: "Microsoft Azure", logo: "https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png" },
      { name: "Google Cloud", logo: "https://w7.pngwing.com/pngs/308/987/png-transparent-google-cloud-logo-google-cloud-platform-cloud-computing-bigquery-google-storage-google-text-service-logo-thumbnail.png" },
      { name: "IBM Cloud", logo: "https://i.pinimg.com/originals/b0/b1/8b/b0b18bd010c5851b5f82d0a98bfde369.png" },
    ],
  },
];

function Technologies() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
  <>
  <div className="technologies-main">
    <h1 className="technologies-title"><span style={{color:"#ff4500"}}>Technologies</span> We Specialize In</h1>
    <div className="technologies-page">
      <div className="tech-container">
        <div className="sidebar">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`topic-heading ${activeTopic.title === topic.title ? 'active' : ''}`}
              onClick={() => setActiveTopic(topic)}
            >
              {topic.title}
              <FaLongArrowAltRight className="arrow-icon" />
            </div>
          ))}
        </div>
        
        <div className="content-area">
          <h3 className="content-title">{activeTopic.title}</h3>
          <div className="grid-container">
            {activeTopic.data.map((item, index) => (
              <div key={index} className="tech-card">
                <img src={item.logo} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Technologies;