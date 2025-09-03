import "./Projects.css";

function PastProjects() {
   return (
     <section id="projects" className="projects-section">
      <h2>Gruppens Prosjekter</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>GIS</h3>
          <p>Oppgave vi hadde 4 semesteret i GIS som handlet om å lage et GIS-system for å håndtere kartdata.</p>
            <a href="https://github.com/Odalopheim/GiS-MAppeInnlevering5" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
        </div>
        
        <div className="project-card">
          <h3>Rett i kartet</h3>
          <p>Prosjekt vi hadde 3 semesteret for Kartverket som handlet om å kunne logføre og melde inn feil på kart.</p>
           <a href="https://github.com/Odalopheim/Kartverket1" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
        </div>
      </div>

    </section>
   );
    }   

export default PastProjects;