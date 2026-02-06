import React, { useState } from "react";
import backlogItems from "../../data/backlog";
import "./Backlog.css";

const Backlog = () => {
  const [filter, setFilter] = useState("alle");

  // Filtrer items basert på valgt filter
  const filteredItems = backlogItems.filter((item) => {
    if (filter === "alle") return true;
    return item.status === filter;
  });

  // Beregn statistikk
  const stats = {
    totalt: backlogItems.length,
    ikkeStartet: backlogItems.filter((item) => item.status === "ikke-startet").length,
    pågår: backlogItems.filter((item) => item.status === "pågår").length,
    ferdig: backlogItems.filter((item) => item.status === "ferdig").length,
  };

  return (
    <div className="backlog-container">
      <div className="backlog-header">
        <h2>Prosjekt Backlog</h2>
        <p>Oversikt over alle oppgaver og deres status</p>
      </div>

      {/* Filtre */}
      <div className="backlog-filters">
        <button
          className={`filter-btn ${filter === "alle" ? "active" : ""}`}
          onClick={() => setFilter("alle")}
        >
          Alle ({backlogItems.length})
        </button>
        <button
          className={`filter-btn ${filter === "ikke-startet" ? "active" : ""}`}
          onClick={() => setFilter("ikke-startet")}
        >
          Ikke startet ({stats.ikkeStartet})
        </button>
        <button
          className={`filter-btn ${filter === "pågår" ? "active" : ""}`}
          onClick={() => setFilter("pågår")}
        >
          Pågår ({stats.pågår})
        </button>
        <button
          className={`filter-btn ${filter === "ferdig" ? "active" : ""}`}
          onClick={() => setFilter("ferdig")}
        >
          Ferdig ({stats.ferdig})
        </button>
      </div>

      {/* Backlog items */}
      <div className="backlog-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="backlog-item">
            <div className="backlog-item-header">
              <h3>{item.tittel}</h3>
              <span className={`priority-badge priority-${item.prioritet}`}>
                {item.prioritet}
              </span>
            </div>
            <p className="backlog-item-description">{item.beskrivelse}</p>
            <div className="backlog-item-meta">
              <div className="meta-row">
                <span className="meta-label">Status:</span>
                <span className={`status-badge status-${item.status}`}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Estimert tid:</span>
                <span className="meta-value">{item.estimertTid}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Ansvarlig:</span>
                <span className="meta-value">{item.ansvarlig}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistikk */}
      <div className="backlog-stats">
        <div className="stat-item">
          <span className="stat-number">{stats.totalt}</span>
          <span className="stat-label">Totalt oppgaver</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.ikkeStartet}</span>
          <span className="stat-label">Ikke startet</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.pågår}</span>
          <span className="stat-label">Pågår</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.ferdig}</span>
          <span className="stat-label">Ferdig</span>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
