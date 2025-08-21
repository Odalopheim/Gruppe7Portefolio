import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Prosjekter</h2>
      <div className="projects-grid">

        <div className="project-card">
          <h3>Gis</h3>
          <p>Oppgave vi hadde 4 semesteret i GiS som handlet om å lage et GIS-system for å håndtere kartdata.</p>
            <a href="https://github.com/Odalopheim/GiS-MAppeInnlevering5" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
        </div>
        
        <div className="project-card">
          <h3>Rett i kart</h3>
          <p>Prosjekt vi hadde 3 semesteret for kartverke som handlet om å kunne logføre fail på karte.</p>
           <a href="https://github.com/Odalopheim/Kartverket1" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
