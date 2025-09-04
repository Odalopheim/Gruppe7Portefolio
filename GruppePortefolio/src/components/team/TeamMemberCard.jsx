import { Github, Linkedin, FileText } from "lucide-react";

export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
      <img
        src={member.image}
        alt={member.name}
        className="member-image mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-gray-500">{member.role}</p>
      <div className="flex justify-center gap-4 mt-3">
        {member.socials.github && (
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        )}
        {member.cv && (
          <a href={member.cv} target="_blank" rel="noopener noreferrer">
            <FileText /> 
          </a>
        )}
      </div>
    </div>
  );
}
