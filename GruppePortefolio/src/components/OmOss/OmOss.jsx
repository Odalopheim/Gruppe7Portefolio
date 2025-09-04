import React, { useState } from "react";
import "./OmOss.css";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const members = [
  {
    name: "Eline Widvey",
    img: "/images/eline.jpg",
    shortDescription: "Frontend-utvikler med interesse for design og brukeropplevelse.",
    github: "https://github.com/ElineWi",
    linkedin: "https://www.linkedin.com/in/eline-widvey/",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Haugesund. Jeg liker å være aktiv, enten det er å løpe eller gå turer, og er veldig interessert i matlaging, hvor jeg liker å eksperimentere med nye oppskrifter. I tillegg spiller jeg piano, leser bøker, hekler og finner alltid tid til morsomme opplevelser med venner. Som person er jeg selvstendig, strukturert og pliktoppfyllende, og jeg trives med å ta initiativ, prøve nye ting og lære underveis.",
      professional: "Interessen min ligger i frontend-utvikling, UX/design, planlegging, prototyper og wireframes, og jeg trives godt med å jobbe i team. Jeg holder frister og er pålitelig i oppgavene jeg får. Jeg ønsker praktisk erfaring med hvordan frontend og backend samarbeider, og å lære av mine medstudenter gjennom felles prosjekter. Jeg tar gjerne initiativ, eksperimenterer og spør om hjelp når det trengs."
    }
  },
  {
    name: "Joel Worraphon Markussen",
    img: "/images/joel.jpg",
    shortDescription: "Prosjektleder og koordinator i gruppen.",
    github: "https://github.com/jmarkussen",
    linkedin:"https://www.linkedin.com/in/joelmarkussen/",
    moreInfo: {
      about: "Skriv kort om deg selv",
      professional: "Hva liker du faglig?"
    }
  },
  {
    name: "Maja Solberg Petterson",
    img: "/images/maja.png",
    shortDescription: "Backend-utvikler og nestleder.",
    github: "https://github.com/majskolbe",
    linkedin:"https://www.linkedin.com/in/maja-petterson/",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Tønsberg. På fritiden er jeg glad i å holde meg aktiv, enten det er gjennom trening eller friluftsliv. Matlaging er også en stor interesse og liker å utforske nye smakskombinasjoner og oppskrifter. I tillegg interesserer jeg meg for ekstremsport, og driver med fallskjermhopping når det er sesong for det. Som person er jeg pliktoppfyllende, selvstendig, nysgjerrig og trives med å ha orden og system i arbeidet mitt. ",
      professional: "Jeg har en stor interesse for både frontend og backend-utvikling og spesielt godt å programmere og jobbe med databaser. Nylig har jeg også fått øynene opp for kunstig intelligens, spesielt innenfor bildegjenkjenning. Jeg lærer best gjennom praktisk arbeid og trives godt i samarbeid med andre."

    }
  },
  {
    name: "Oda Lunde Opheim",
    img: "/images/oda.jpg",
    shortDescription: "Fullstack-utvikler",
    github: "https://github.com/Odalopheim",
    linkedin:"https://www.linkedin.com/in/odalundeopheim/",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Stavanger. På fritiden liker jeg å være sosial med venner, enten det er å spille volleyball eller ha spillekveld. Jeg er også glad i å gå turer, både i fjellet og på små runder i nærområdet. Jeg liker å lære nye ting, og synes det er verdifullt å lære gjennom både mestring og feil. ",
      professional: "Jeg er intresert i forntend,men også backend og liker å forstå hvordan ting henger sammen. Gjennom erfaring fra cyber security-avdelingen hos Aker Solutions fikk jeg innsikt i hva man må tenke på for å kunne sikre et netverk og hvordan man kan gjøre det. Jeg liker å jobbe praktisk,og å samarbeide med andre og lære gjennom prosjekter. Jeg tar gjerne å ta litt initiativ og er ikke redd for å prøve eller å spørre om hjelp når det trengs."
    }
  },
  {
    name: "Sara Marie Stray",
    img: "/images/sara.jpg",
    shortDescription: "Frontend-utvikler med med fokus på testing.",
    github: "",
    linkedin:"https://www.linkedin.com/in/sara-marie-stray/",
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
              {/* Bilde + ikoner */}
              <div className="modal-img-wrapper">
                <img src={selectedMember.img} alt={selectedMember.name} className="modal-img" />
                <div className="social-links">
                  {selectedMember.github && (
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-wrapper"
                    >
                      <BiLogoGithub className="social-icon" />
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-wrapper"
                    >
                      <BiLogoLinkedin className="social-icon" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tekst */}
              <div className="modal-info">
                <h3>Litt mer om {selectedMember.name}</h3>
                <p>{selectedMember.moreInfo.about}</p>

                <h3>Faglige interesser</h3>
                <p>{selectedMember.moreInfo.professional}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OmOss;
