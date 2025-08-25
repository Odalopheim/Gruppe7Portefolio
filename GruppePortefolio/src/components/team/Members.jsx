
import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import { team } from "../../data/team";
import "./Members.css";


function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="members" className="members-section">
      <h2>Gruppe Medlemmer</h2>
      <div className="team-members-grid">
        {team.map((member) => (
          <div key={member.name} onClick={() => setSelectedMember(member)} style={{ cursor: "pointer" }}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="member-modal" onClick={() => setSelectedMember(null)}>
          <div className="member-modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="member-image-modal"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedMember(null)}
            />
            <h3>{selectedMember.name}</h3>
            <p>{selectedMember.role}</p>
            {selectedMember.about && (
              <p>{selectedMember.about}</p>
            )}
            {!selectedMember.about && (
              <p>Her kan du skrive mer om {selectedMember.name} ...</p>
            )}
            {selectedMember.cv && (
              <a href={selectedMember.cv} target="_blank" rel="noopener noreferrer">Se CV</a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Members;
