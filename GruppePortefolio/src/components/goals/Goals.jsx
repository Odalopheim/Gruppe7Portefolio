import "./goals.css";

function Goals() {
    return (
    <section id="goals" className="goals-section">
    <div className="section-header">
    <h2>Mål og ambisjoner</h2>
    <p>enda mer tekst</p>
    </div>

      <div className="goals-container">
        <div className="goals-box">
          <h3>Mål 1</h3>
          <p>
            text
          </p>
        </div>
        <div className="goals-box">
          <h3>Ambisjoner 2</h3>
          <p>
            tekst
          </p>
        </div>
      </div>
      <div className="goals-container">
        <div className="goals-box">
          <h3>Mål 2</h3>
          <p>
            text
          </p>
        </div>
        <div className="goals-box">
          <h3>Ambisjoner 2</h3>
          <p>
            tekst
          </p>
        </div>
      </div>
    </section>
  );
}

export default Goals;