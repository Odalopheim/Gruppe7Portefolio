import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "GIS",
    description: "Oppgave vi hadde 4 semesteret i GIS som handlet om å lage et GIS-system for å håndtere kartdata.",
    detailedDescription: "I dette prosjektet utviklet vi applikasjonen 'God Tur', et interaktivt verktøy for trygg turplanlegging i norsk natur. Appen kombinerer informasjon om turruter, skredfaresoner og beredskapstilbud som DNT-hytter, og gir brukeren et helhetlig og brukervennlig verktøy for å planlegge turer sikkert, uansett erfaring.",
    /*technologies: ["JavaScript", "OpenLayers", "GeoJSON", "CSS", "HTML"],*/
    githubLink: "https://github.com/Odalopheim/GiS-MAppeInnlevering5",
    media: {
      type: "gif", 
      src: "/demos/GIS-demo.gif", 
      alt: "GIS Demo"
    },
    hasDemo: true
  },
  {
    id: 2,
    title: "Rett i kartet",
    description: "Prosjekt vi hadde 3 semesteret for Kartverket som handlet om å kunne logføre og melde inn feil på kart.",
    detailedDescription: "Skriv beskrivelse her!",
    /*technologies: ["React", "Node.js", "Express", "PostgreSQL", "Leaflet"],*/
    githubLink: "https://github.com/Odalopheim/Kartverket1",
     media: {
      type: "gif",
      src: "Kommer snart", 
      alt: "Rett i kartet Demo"
    },
    hasDemo: true
  }
];

function PastProjects() {
  const [activeMedia, setActiveMedia] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Gruppens Prosjekter</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className={`project-card ${project.hasDemo ? 'project-with-demo' : 'project-without-demo'}`} key={project.id}>
            <h3>{project.title}</h3>
            
            {project.hasDemo && project.media && (
              <div className="project-media-container">
                {project.media.type === "gif" ? (
                  <img
                    src={project.media.src}
                    alt={project.media.alt}
                    className="project-media"
                    onClick={() => setActiveMedia(project)}
                  />
                ) : project.media.type === "video" ? (
                  <video
                    src={project.media.src}
                    className="project-media"
                    onClick={() => setActiveMedia(project)}
                    muted
                    loop
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => e.target.pause()}
                  />
                ) : null}
              </div>
            )}
            
            <div className="project-content">
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                  Se på GitHub
                </a>
                {project.hasDemo && (
                  <button className="project-link-button" onClick={() => setActiveMedia(project)}>
                    Se demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeMedia && (
        <div className="media-modal-overlay" onClick={() => setActiveMedia(null)}>
          <div className="media-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setActiveMedia(null)}>×</button>
            <h2 className="modal-title">{activeMedia.title}</h2>
            {activeMedia.hasDemo && activeMedia.media && (
              <>
                {activeMedia.media.type === "gif" ? (
                  <img
                    src={activeMedia.media.src}
                    alt={activeMedia.media.alt}
                    className="modal-media"
                  />
                ) : activeMedia.media.type === "video" ? (
                  <video
                    src={activeMedia.media.src}
                    className="modal-media"
                    controls
                    autoPlay
                    loop
                  />
                ) : null}
              </>
            )}
            <div className="modal-content">
              <h3 className="modal-subtitle">Om prosjektet</h3>
              <p className="modal-description">{activeMedia.detailedDescription || activeMedia.description}</p>
              
              {activeMedia.technologies && activeMedia.technologies.length > 0 && (
                <>
                  <h3 className="modal-subtitle">Teknologier</h3>
                  <div className="tech-tags">
                    {activeMedia.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </>
              )}
              
              <div className="modal-actions">
                <a href={activeMedia.githubLink} target="_blank" rel="noreferrer" className="project-link">
                  Se prosjektet på GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
    }   

export default PastProjects;