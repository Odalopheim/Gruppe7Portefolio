import "./Projects.css";

function OngoingProjects() {
   return (
     <section id="projects" className="projects-section">
      <h2>Praksis Prosjekter</h2>
      <p>Dette semesteret har alle fått muligheten til å være i praksis, hvor vi får erfaring med ulike prosjekter som styrker våre individuelle ferdigheter. 
        Interessen vår spenner bredt, fra frontend, backend og UX-design til universell utforming, dokumentasjon, testing, kundekontakt og kunstig intelligens. 
        Sammen utfyller vi hverandre godt og står rustet til å møte de utfordringene som kommer.</p><br></br>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Kristiansand Kommune</h3>
          <p></p>

            <a href="https://praksis-kristiansand-kommune.vercel.app/" target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
        <div className="project-card">
          <h3>Moment Analyse</h3>
          <p></p>

            <a href="https://odalopheim.github.io/Praksis/index.html" target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
        <div className="project-card">
          <h3>Tingtun</h3>
          <p></p>
            <a href="https://praksis2025.vercel.app/index.html" target="_blank" rel="noreferrer">
                Link til nettside
            </a>
        </div>
        <div className="project-card">
          <h3>Knowit</h3>
          <p></p>

            <a href="https://sites.google.com/view/knowitpraksis2025/hjem " target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
        <div className="project-card">

          <h3>Mandalselva Elveeigarlag</h3>
          <p></p>
            <a href="https://sites.google.com/view/mandalselvapraksis/hjem" target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
       </div>

    </section>
   );
    }   

export default OngoingProjects;