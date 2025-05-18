import { Users, Linkedin, Github, ArrowRight } from 'lucide-react';
import './ContactTeam.css'

const ContactTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in React and Node.js",
      image: "https://media.istockphoto.com/id/2006436002/video/happy-confident-and-portrait-of-indian-man-in-office-with-creative-professional-at-tech.jpg?s=640x640&k=20&c=vcKAWd0sGJpV3xR0AK1RCM7zTEpFUcBhQEXbNvN1M78=",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about user-centered design and innovation",
      image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Project Manager",
      bio: "Experienced PM with expertise in agile methodologies and team leadership",
      image: "https://media.istockphoto.com/id/1667644040/video/startup-entrepreneur-in-office-looking-at-camera-and-smiling.jpg?s=640x640&k=20&c=H31NoFkJmH2ljqtd2O8Q7hVHXOj-LGnNv3W1vmq4Xbw=",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div className="contact-team-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-team-header">
          <div className="contact-team-badge">
            <Users className="contact-badge-icon" />
            Meet Our Team
          </div>
          <h2>The People Behind Your Success</h2>
          <p>
            Our diverse team of experts is dedicated to bringing your digital vision to life. 
            Get to know the talented individuals who will be working on your project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="contact-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="contact-team-card">
              <div className="contact-card-image">
                <img src={member.image} alt={member.name} />
                <div className="contact-card-overlay">
                  <div className="contact-social-links">
                    <a 
                      href={member.linkedin} 
                      className="contact-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="contact-social-icon" />
                    </a>
                    <a 
                      href={member.github} 
                      className="contact-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="contact-social-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card-content">
                <h3>{member.name}</h3>
                <div className="contact-role">{member.role}</div>
                <p className="contact-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="contact-team-cta">
          <h3>Ready to work with our team?</h3>
          <p>
            Let's discuss your project and how we can help bring your ideas to life.
          </p>
          <button className="contact-cta-button">
            Start a Project
            <ArrowRight className="contact-button-arrow" />
          </button>
        </div>
      </div>
       </div>
  );
};

export default ContactTeamSection;