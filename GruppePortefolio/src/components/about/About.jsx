import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-box">
          <h3>Hvem er vi?</h3>
          <p>
            Vi er en engasjert og sammensatt gruppe med studenter som brenner for å gjennomføre prosjekter som både skaper verdi og gir læring. 
            Som gruppe kombinerer vi kreativitet og struktur, og vi elsker å utfordre oss selv og hverandre for å finne de beste løsningene. 
            Vi jobber systematisk og tar oss tid til å forstå brukernes behov, samtidig som vi sikrer gode resultater gjennom en ryddig arbeidsprosess med dokumentasjon og refleksjon.
            Vi ønsker å skape løsninger som gjør en forskjell, og som vi er stolte av å levere.
          </p>
        </div>
        <div className="about-box">
          <h3>Vår historie</h3>
          <p>
            Flere av oss har jobbet sammen siden første semester, mens andre har blitt en del av gruppen underveis og bidrat med ny kompetanse.
            Gjennom årene har vi lært hva som skal til for å jobbe effektivt som gruppe, hvordan man takler nye utfordringer, og hvordan vi kan dra nytte av hverandres styrker.
            Erfaringene våre har gjort oss mer fleksible, ansvarlige og engasjerte, og har formet en arbeidsmåte som fungerer godt for oss.
            Sammen skaper vi et team som får ideer til å bli virkelighet.
          </p>
        </div>
      </div>

      {/* Bildet er hentet fra https://storyset.com/illustration/team-goals/cuate
      <div className="goals-image">
        <img src="/images/Team spirit.png"/> 
      </div>  */}
    </section>
  );
}

export default About;
4