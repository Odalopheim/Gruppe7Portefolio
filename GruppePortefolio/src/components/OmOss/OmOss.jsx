import React, { useState } from "react";
import "./OmOss.css";

const members = [
  {
    name: "Eline Widvey",
    img: "/images/eline.jpg",
    shortDescription: "Frontend-utvikler med interesse for design og brukeropplevelse.",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Haugesund. På fritiden liker jeg å være aktiv, enten det er å løpe, gå turer eller prøve nye treningsformer. Jeg har også en lidenskap for matlaging og liker å eksperimentere med nye oppskrifter. I tillegg spiller jeg piano, leser bøker, hekler og finner alltid tid til morsomme opplevelser med venner. Som person er jeg selvstendig, strukturert og pliktoppfyllende. Jeg trives med å ta initiativ, prøve nye ting og lære underveis – både i jobb og fritid.",
      professional: "Jeg har en interesse for frontend-utvikling, UX/design, planlegging, prototyper og wireframes, samt samarbeid i team. Jeg holder frister og er pålitelig i oppgavene jeg får. Jeg ønsker praktisk erfaring med hvordan frontend og backend samarbeider, og å lære av mine medstudenter gjennom felles prosjekter. Jeg tar gjerne initiativ, eksperimenterer og spør om hjelp når det trengs."
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
      about: "Jeg er 22 år og kommer fra Stavanger. På fritiden liker jeg å være sosial med venner, enten det er å spille volleyball eller ha spillekveld. Jeg er også glad i å gå turer, både i fjellet og på små runder i nærområdet. Jeg liker å lære nye ting, og synes det er verdifullt å lære gjennom både mestring og feil. ",
      professional: "Jeg er intresert i forntend,men også backend og liker å forstå hvordan ting henger sammen. Gjennom erfaring fra cyber security-avdelingen hos Aker Solutions fikk jeg innsikt i hva man må tenke på for å kunne sikre et netverk og hvordan man kan gjøre det. Jeg liker å jobbe praktisk,og å samarbeide med andre og lære gjennom prosjekter. Jeg tar gjerne å ta litt initiativ og er ikke redd for å prøve eller å spørre om hjelp når det trengs."
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
