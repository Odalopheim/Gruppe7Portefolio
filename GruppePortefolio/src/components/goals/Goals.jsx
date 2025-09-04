import "./Goals.css";
import { FaBullseye, FaRocket, FaStar, FaMedal } from "react-icons/fa";

function Goals() {
    return (
    <section id="goals" className="goals-section">
      <div className="section-header">
        <h2>Mål og ambisjoner</h2>
        <p>ps: ikonene kan tilpasses ettersom hva vi skriver, dette er bare eksempler!</p>
      </div>

      <div className="goals-container">
        <div className="goals-box">
          <span className="goal-icon"><FaBullseye /></span>
          <div>
            <h3>Mål 1</h3>
            <p>tekst</p>
          </div>
        </div>
        <div className="goals-box">
          <span className="goal-icon"><FaRocket /></span>
          <div>
            <h3>Ambisjoner 1</h3>
            <p>tekst</p>
          </div>
        </div>
        <div className="goals-box">
          <span className="goal-icon"><FaStar /></span>
          <div>
            <h3>Mål 2</h3>
            <p>tekst</p>
          </div>
        </div>
        <div className="goals-box">
          <span className="goal-icon"><FaMedal /></span>
          <div>
            <h3>Ambisjoner 2</h3>
            <p>tekst</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
