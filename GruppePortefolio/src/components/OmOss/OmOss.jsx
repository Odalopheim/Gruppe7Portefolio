import React, { useState } from "react";
import "./OmOss.css";

const members = [
  {
    name: "Eline Widvey",
    img: "/images/eline.jpg",
    shortDescription: "Frontend-utvikler med interesse for design og brukeropplevelse.",
    moreInfo: {
      about: "Skriv kort om deg selv",
      professional: "Hva liker du faglig?"
    }
  },
  {
    name: "Joel",
    img: "/images/joel.jpg",
    shortDescription: "Prosjektleder og koordinator i gruppen.",
    moreInfo: {
      about: "Skriv kort om deg selv",
      professional: "Hva liker du faglig?"
    }
  },
  {
    name: "Maja",
    img: "/images/maja.png",
    shortDescription: "Backend-utvikler og nestleder.",
    moreInfo: {
      about: "Skriv kort om deg selv",
      professional: "Hva liker du faglig?"
    }
  },
  {
    name: "Oda",
    img: "/images/oda.jpg",
    shortDescription: "Fullstack-utvikler",
    moreInfo: {
      about: "Skriv kort om deg selv",
      professional: "Hva liker du faglig?"
    }
  },
  {
    name: "Sara",
    img: "/images/sara.jpg",
    shortDescription: "Frontend-utvikler med med fokus på testing.",
    moreInfo: {
      about: "Skriv kort om deg selv",
      professional: "Hva liker du faglig?"
    }
  },
];

function OmOss() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="omoss-container">
      {/* Gruppebilde placeholder */}
      <div className="group-img-container">
        <img 
          src="/images/Placeholder.jpg"
          alt="Gruppebilde Kommer snart"
          className="group-img"
        />
      </div>

      <h2 className="title">Vårt Team</h2>
      <p className="subtitle">Her er teamet vårt</p>

      <div className="grid">
        {members.map((member, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.img} alt={member.name} className="profile-img" />
            <h3>{member.name}</h3>
            <p>{member.shortDescription}</p>
          </div>
        ))}
      </div>

      {selectedMember && (
      <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setSelectedMember(null)}>×</button>
      
        <div className="modal-top">
          <img src={selectedMember.img} alt={selectedMember.name} className="modal-img" />
            <div className="modal-info">
              <h3>Litt om meg</h3>
              <p>{selectedMember.moreInfo.about}</p>
          </div>
        </div>

        <div className="modal-bottom">
          <h3>Faglige interesser</h3>
          <p>{selectedMember.moreInfo.professional}</p>
        </div>
      </div>
    </div>
)}
    </div>
  );
}

export default OmOss;
