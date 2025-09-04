import "./Projects.css";

function OngoingProjects() {
   return (
     <section id="projects" className="projects-section">
      <h2>Praksis Prosjekter</h2>
      <p>Her viser vi gruppens forskjellige pågående praksis prosjekter høsten 2025</p><br></br>
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