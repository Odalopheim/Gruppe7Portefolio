import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-box">
          <h3>Hvem er vi?</h3>
          <p>
            Her kan du forklare hva gruppen din jobber med og hvem dere er. 
            Du kan også inkludere en kort setning om deres mål og verdier.
          </p>
        </div>
        <div className="about-box">
          <h3>...</h3>
          <p>
            Du kan fortelle hvor dere holder til – og hvorfor det er en fordel. 
            Kanskje nevne studiested, samarbeidsformer, eller andre detaljer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
