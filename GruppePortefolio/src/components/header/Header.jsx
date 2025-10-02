import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
    
        <h1 className="logo">
      <Link to="/" onClick={() => setIsOpen(false)} className="logo-link">Gruppe 7</Link>
        </h1>

        {/* Desktop nav */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Hjem</Link>
          <Link to="/OmOss" onClick={() => setIsOpen(false)}>Om oss</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Prosjekter</Link>
        </nav>

        {/* Hamburger ikon */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
