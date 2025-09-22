import React, { useState } from "react";
import "./OmOss.css";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const members = [
  {
    name: "Eline Widvey",
    img: "/images/eline.jpg",
    shortDescription: "Scrum Master og UX-Designer",
    github: "https://github.com/ElineWi",
    linkedin: "https://www.linkedin.com/in/eline-widvey/",
    cv: "/cv/eline.pdf",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Haugesund. Jeg liker å være aktiv, enten det er å løpe eller gå turer, og er veldig interessert i matlaging, hvor jeg liker å eksperimentere med nye oppskrifter. I tillegg spiller jeg piano, leser bøker, hekler og finner alltid tid til morsomme opplevelser med venner. Som person er jeg selvstendig, strukturert og pliktoppfyllende, og jeg trives med å ta initiativ, prøve nye ting og lære underveis.",
      professional: "Interessen min ligger i frontend-utvikling, UX/design, planlegging, prototyper og wireframes, og jeg trives godt med å jobbe i team. Jeg holder frister og er pålitelig i oppgavene jeg får. Jeg ønsker praktisk erfaring med hvordan frontend og backend samarbeider, og å lære av mine medstudenter gjennom felles prosjekter. Jeg tar gjerne initiativ, eksperimenterer og spør om hjelp når det trengs."
    }
  },
  {
    name: "Joel Worraphon Markussen",
    img: "/images/joel.jpg",
    shortDescription: "Prosjektleder og Quality Control.",
    github: "https://github.com/jmarkussen",
    linkedin:"https://www.linkedin.com/in/joelmarkussen/",
    moreInfo: {
      about: "Jeg er 29 år og kommer fra Son i Akershus. På fritiden liker jeg å løpe og klatre, og er ellers interessert i brettspill, D&D, og fotball. Jeg har også en lidenskap for å lese fantasy og sci-fi. Fra tidligere har jeg tatt i en master i historie, og originalt hadde jeg en plan om bli lærer. Med min alder og bakgrunn så er jeg en erfaren student, men jeg er fortsatt energisk, lærevillig og kreativ. De siste årene har jeg fått lov å følge drømmen min å studere en bachelor i IT og Informasjonssystemer, og jeg er strålende fornøyd med den nye veien jeg har valgt.",
      professional: "Faglig er jeg spesielt interessert i å fortsette å lære mer om systemutvikling. Ellers spesialiserer jeg meg på det akademiske aspektet av studiehverdagen. Som en erfaren student er jeg komfortabel med å ha en lederolle i gruppen, har ofte hatt overordnet ansvar for tid og kvalitet i tidligere prosjekter som Scrum Master. Jeg er glad i å samarbeide, og står innefor at de beste resultatene er de man oppnår når alle er med å bidrar og spiller hverandre gode!"
    }
  },
  {
    name: "Sara Marie Stray",
    img: "/images/sara.jpg",
    shortDescription: "Trivsels ansvarlig og Frontend Utvikler",
    github: "https://github.com/sarastray",
    linkedin:"https://www.linkedin.com/in/sara-marie-stray/",
    cv: "/cv/elineCV.pdf",
    moreInfo: {
      about: "Jeg er 23 år og kommer fra Kristiansand. Jeg holder aktivt på med bueskyting og trives godt med å være ute. Når jeg vil koble av liker jeg å pusle, lese eller løse kryssord. Jeg liker også å være med venner, enten bare være sammen eller spille brettspill. Som person er jeg pliktoppfyllende og lærevillig, og synes det er gøy å utfordre med selv men nye oppgaver.",
      professional: "Jeg interesserer meg mest for frontend, men vil gjerne utfordre meg selv og lære mer om backend. Jeg synes universell utforming og brukervennlighet er viktig og har et godt øye for å se feil og mangler. I tillegg synes jeg testing er viktig og jeg liker å passe på at alt funker som det skal. Jeg lærer godt gjennom praktisk arbeid og trives godt med å jobbe i team hvor man kan samarbeide og spørre om hjelp hvis man støter på utfordringer."
    }
  },
  {
    name: "Oda Lunde Opheim",
    img: "/images/oda.jpg",
    shortDescription: "Kontakt person og Fullstack Utvikler.",
    github: "https://github.com/Odalopheim",
    linkedin:"https://www.linkedin.com/in/odalundeopheim/",
    cv: "/cv/oda.pdf",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Stavanger. På fritiden liker jeg å være sosial med venner, enten det er å spille volleyball eller ha spillekveld. Jeg trives også med å gå turer, både i fjellet og på små runder i nærområdet.I tillegg bruker jeg mye tid som nestleder i NITO, hvor jeg er med på å planlegge kurs og arrangementer, noe som har gitt meg verdifull erfaring med organisasjonsarbeid og ledelse. Jeg liker å lære nye ting og synes det er verdifullt å utvikle meg gjennom både mestring og feil. ",
      professional: "Jeg er interessert i frontend, men også backend, og liker å forstå hvordan ting henger sammen. Gjennom erfaring fra cyber security-avdelingen hos Aker Solutions har jeg fått innsikt i hva man må tenke på for å sikre et nettverk, og hvordan man kan gjøre det. Jeg liker å jobbe praktisk, samarbeide med andre og lære gjennom prosjekter. Jeg tar gjerne initiativ og er ikke redd for å prøve eller å be om hjelp når det trengs."
    }
  },
  {
    name: "Maja Solberg Petterson",
    img: "/images/maja.jpg",
    shortDescription: "Nestleder og Backend Utvikler.",
    github: "https://github.com/majskolbe",
    linkedin:"https://www.linkedin.com/in/maja-petterson/",
    moreInfo: {
      about: "Jeg er 22 år og kommer fra Tønsberg. På fritiden er jeg glad i å holde meg aktiv, enten det er gjennom trening eller friluftsliv. Matlaging er også en stor interesse og liker å utforske nye smakskombinasjoner og oppskrifter. I tillegg interesserer jeg meg for ekstremsport, og driver med fallskjermhopping når det er sesong for det. Som person er jeg pliktoppfyllende, selvstendig, nysgjerrig og trives med å ha orden og system i arbeidet mitt. ",
      professional: "Jeg har en stor interesse for både frontend og backend-utvikling og spesielt godt å programmere og jobbe med databaser. Nylig har jeg også fått øynene opp for kunstig intelligens, spesielt innenfor bildegjenkjenning. Jeg lærer best gjennom praktisk arbeid og trives godt i samarbeid med andre."

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
          src="/images/gruppebilde.jpg"
          alt="Gruppebilde Kommer snart"
          className="group-img"
        />
      </div>

      <h2 className="title">Vårt Team</h2>
      <p className="subtitle">Vi er en variert gjeng med ulike bakgrunner, erfaringer og interesser. 
        I gruppen finner du både ferske studenter og en med mastergrad, noe som gir oss en god balanse mellom kunnskap og nye perspektiver. 
        Denne variasjonen gjør at vi lærer av hverandre og sammen skaper et sterkt faglig miljø.</p>

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
                  {selectedMember.cv && (
                    <a
                      href={selectedMember.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-link"
                    >
                      CV
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
