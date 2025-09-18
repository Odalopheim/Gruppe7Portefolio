import React from "react";
import { useNavigate } from "react-router-dom";
import TeamMemberCard from "./TeamMemberCard";
import { team } from "../../data/team";
import "./Members.css";

function Members() {
  const navigate = useNavigate();

  return (
    <section id="members" className="members-section">
      <h2>Gruppemedlemmer</h2>
      <div className="team-members-grid">
        {team.map((member) => (
          <div
            onClick={() => navigate(`/OmOss`)}
            style={{ cursor: "pointer" }}
          >
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Members;