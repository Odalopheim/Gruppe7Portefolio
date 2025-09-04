import "./Goals.css";
import { FaBullseye, FaRocket, FaStar, FaMedal } from "react-icons/fa";

function Goals() {
    return (
    <section id="goals" className="goals-section">
      <div className="section-header">
        <h2>Ambisjoner og forventninger</h2>
        <p>Som gruppe ønsker vi å ha tydelige ambisjoner for hva vi vil oppnå, og klare forventninger til hvordan vi skal komme dit. 
    Dette hjelper oss å holde fokus, motivasjon og en felles retning gjennom hele bachelorprosjektet. </p>
      </div>

      <div className="goals-container">
        <div className="goals-box">
          <span className="goal-icon"><FaBullseye /></span>
          <div>
            <h3>Ambisjon 1 </h3>
            <p>Få et resultat alle er stolt over.</p>
          </div>
        </div>
        <div className="goals-box">
          <span className="goal-icon"><FaRocket /></span>
          <div>
            <h3>Forventning 1</h3>
            <p>Alle på gruppen bidrar og gjør sitt beste.</p>
          </div>
        </div>
        <div className="goals-box">
          <span className="goal-icon"><FaStar /></span>
          <div>
            <h3>Ambisjoner 2</h3>
            <p>Få erfaring og kunnskap som kan brukes videre i arbeidslivet.</p>
          </div>
        </div>
        <div className="goals-box">
          <span className="goal-icon"><FaMedal /></span>
          <div>
            <h3>Forventning 2</h3>
            <p>Å jobbe med et prosjekt som krever ulike kompetanser.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
