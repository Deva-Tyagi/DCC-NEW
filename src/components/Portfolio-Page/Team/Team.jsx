import React, { useState } from "react";
import "./Team.css"; // Importing the CSS file

const teamMembers = [
  { id: 1, name: "Sophia", role: "Designer", image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" },
  { id: 2, name: "Liam", role: "Developer", image: "https://t4.ftcdn.net/jpg/09/20/00/87/360_F_920008781_v0LJSHbQZwjbUsdgMvuk6NJYoZych6PK.jpg" },
  { id: 3, name: "Olivia", role: "Marketing", image: "https://i.pinimg.com/236x/de/49/47/de49477897b6001d649b0f4e2f35959d.jpg" },
  { id: 4, name: "Ethan", role: "Photographer", image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png" },
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="team-section">
      <h2 className="section-title">
        NICE TO MEET <br /> <span>OUR TEAM</span>
      </h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`team-member member-${index + 1}`}
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <img src={member.image} alt={member.name} />
            {hoveredMember === member.id && (
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="meet-button">
        <a href="#" className="btn">
          MEET OUR TEAM
        </a>
      </div>
    </div>
  );
};

export default Team;