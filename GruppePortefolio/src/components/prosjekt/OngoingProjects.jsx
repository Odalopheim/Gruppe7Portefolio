import "./Projects.css";

function OngoingProjects() {
   return (
     <section id="projects" className="projects-section">
      <h2>Praksis Prosjekter</h2>
      <p className="subtitle">Dette semesteret har vi hatt praksis og fått erfaring fra ulike prosjekter som styrker ferdighetene våre. Interessen vår spenner fra frontend, backend og UX-design til universell utforming, testing, kundekontakt og kunstig intelligens. Sammen utfyller vi hverandre og er godt rustet for fremtidige utfordringer</p><br></br>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Kristiansand Kommune</h3>
          <p>Forbedrer digitale løsninger for byggeprosesser og brukervennlig informasjon.</p>

            <a href="https://praksis-kristiansand-kommune.vercel.app/" target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
        <div className="project-card">
          <h3>Moment Analyse</h3>
          <p>Utvikler et systeme for å kunne logføre CO2 utslipp.</p>

            <a href="https://odalopheim.github.io/Praksis/index.html" target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
        <div className="project-card">
          <h3>Tingtun</h3>
          <p>Refaktorisering og forbedring av eksisterende nettside til Tigtun. </p>
            <a href="https://praksis2025.vercel.app/index.html" target="_blank" rel="noreferrer">
                Link til nettside
            </a>
        </div>
        <div className="project-card">
          <h3>Knowit</h3>
          <p>Bruker Microsoft Power Platforms til å registrere klimarapporter.</p>

            <a href="https://sites.google.com/view/knowitpraksis2025/hjem " target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
        <div className="project-card">

          <h3>Mandalselva Elveeigarlag</h3>
          <p>Bruker maskinlæring for å overvåke laksebestanden i Mandalselva.</p>
            <a href="https://sites.google.com/view/mandalselvapraksis/hjem" target="_blank" rel="noreferrer">

                Link til nettside
            </a>
        </div>
       </div>

    </section>
   );
    }   

export default OngoingProjects;