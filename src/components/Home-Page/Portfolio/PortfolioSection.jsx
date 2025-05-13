import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PortfolioSection.css';
import micc from '../../Images/micc.png';
import sipl from '../../Images/sipl.jpg';
import agf from '../../Images/agf.png';
import wave from '../../Images/WaveLogo.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
{
  id: 'micc',
  title: 'MICC',
  subtitle: 'Educational Institute',
  description: 'Empowering modern education with smart digital tools and seamless user experiences.',
  image: micc,
  technologies: ['React.Js', 'Next.Js', 'EmailJs']
},
{
  id: 'SIPL',
  title: 'SIPL',
  subtitle: 'Real Estate',
  description: 'Elevating real estate experiences through interactive platforms and intelligent design.',
  image: sipl,
  technologies: ['Node.Js', 'React.Js', 'UX Design']
},
{
  id: 'Agf',
  title: 'AGF',
  subtitle: 'Real Estate',
  description: 'Delivering elegant and effective real estate solutions with user-first interfaces.',
  image: agf,
  technologies: ['React.Js', 'UX Design']
},
{
  id: 'wave',
  title: 'Wave-Nauticals',
  subtitle: 'Antique Things',
  description: 'Bringing timeless antiques to life through immersive and elegant web design.',
  image: wave,
  technologies: ['Wordpress', 'UX Design']
}

];

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile devices
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // Only apply scroll animations if not on mobile
    if (!isMobile) {
      const section = sectionRef.current;

      // Section reveal animation
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      revealTl.fromTo(
        section,
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power4.out' 
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else {
      // For mobile, ensure the section is visible without animations
      gsap.set(sectionRef.current, { opacity: 1, y: 0 });
    }
  }, [isMobile]); // Re-run when isMobile changes

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container" ref={containerRef}>
        <div className="portfolio-header">
          <h2>Our Innovative Projects</h2>
          <p>Pioneering digital solutions that transform industries and create lasting impact through cutting-edge technology and creative design.</p>
        </div>

        <div className="portfolio-grid">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`portfolio-project ${hoveredProject === index ? 'hovered' : ''} ${hoveredProject !== null && hoveredProject !== index ? 'not-hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-image-wrapper">
                <div 
                  className="project-image" 
                  style={{backgroundImage: `url(${project.image})`}}
                ></div>
              </div>
              
              <div className="project-details">
                <div className="project-metadata">
                  <div className="project-number">
                    0{index + 1}
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;









// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './PortfolioSection.css';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // Define project as a regular object
// const PROJECTS = [
//   {
//     title: 'Pixel Pioneers',
//     description: 'Innovative Healthcare Solutions',
//     image: 'https://i0.wp.com/farm4.static.flickr.com/3408/3410783929_051d93bc86.jpg',
//     category: 'Health Tech',
//     link: '#'
//   },
//   {
//     title: 'FilmSphere',
//     description: 'Digital Entertainment Revolution',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YtNGMh50_X9FjCFLvDwDL2lCMr-iQdoAAA&s',
//     category: 'Media Platform',
//     link: '#'
//   },
//   {
//     title: 'Code Craftsmen',
//     description: 'Financial Technology Experts',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gYCF7uu2incXqM9JugQhV6Z2k_Ph3tLziQ&s',
//     category: 'FinTech',
//     link: '#'
//   },
//   {
//     title: 'Quantum Quotient',
//     description: 'Next-Gen Tech Innovations',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJaz0ELJCqaC2M03-DLoyKEuSK3PTBeoqxA&s',
//     category: 'Technology',
//     link: '#'
//   }
// ];

// const PortfolioSection = () => {
//   const sectionRef = useRef(null);
//   const projectRefs = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
    
//     // Section reveal animation
//     gsap.fromTo(
//       section,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: 'power4.out',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//     // Project card animations
//     projectRefs.current.forEach((project, index) => {
//       gsap.fromTo(
//         project,
//         { 
//           opacity: 0, 
//           scale: 0.9,
//           y: 50 
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: project,
//             start: 'top 90%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="portfolio-section" ref={sectionRef}>
//       <div className="portfolio-container">
//         <div className="portfolio-header">
//           <h2>Our Creative Portfolio</h2>
//           <p>Transforming visionary ideas into extraordinary digital experiences that push the boundaries of innovation and design.</p>
//         </div>
        
//         <div className="portfolio-grid">
//           {PROJECTS.map((project, index) => (
//             <div 
//               key={project.title} 
//               className="portfolio-card"
//               ref={el => {
//                 if (el) {
//                   projectRefs.current[index] = el;
//                 }
//               }}
//             >
//               <div className="portfolio-card-inner">
//                 <div className="portfolio-card-front">
//                   <img src={project.image} alt={project.title} />
//                   <div className="portfolio-card-overlay">
//                     <span className="portfolio-card-category">{project.category}</span>
//                   </div>
//                 </div>
//                 <div className="portfolio-card-back">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                   <a href={project.link} className="portfolio-card-link">
//                     View Project
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;