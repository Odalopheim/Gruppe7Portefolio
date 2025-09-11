import "./Goals.css";
import { FaBullseye, FaRocket, FaStar, FaMedal } from "react-icons/fa";

function Goals() {
  return (
    <section id="goals" className="goals-section">
      <h2>Ambisjoner og forventninger</h2>
      <div className="goals-container">
        <div className="goals-box">
          <span className="goal-icon">
            <FaBullseye />
          </span>
          <h3>Ambisjon 1</h3>
          <p>Få et resultat alle er stolt over.</p>
        </div>
        <div className="goals-box">
          <span className="goal-icon">
            <FaRocket />
          </span>
          <h3>Forventning 1</h3>
          <p>Alle på gruppen bidrar og gjør sitt beste.</p>
        </div>
        <div className="goals-box">
          <span className="goal-icon">
            <FaStar />
          </span>
          <h3>Ambisjon 2</h3>
          <p>Få erfaring og kunnskap som kan brukes videre i arbeidslivet.</p>
        </div>
        <div className="goals-box">
          <span className="goal-icon">
            <FaMedal />
          </span>
          <h3>Forventning 2</h3>
          <p>Å jobbe med et prosjekt som krever ulike kompetanser.</p>
        </div>
      </div>
    </section>
  );
}

export default Goals;