import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { team } from "../../data/team";
import "./Members.css";

function Members() {
  return (
    <section id="members" className="members-section">
      <h2>Gruppe Medlemmer</h2>
      <div className="team-members-grid">
        {team.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}

export default Members;

