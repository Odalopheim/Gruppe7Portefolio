import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Gruppe 7 Portefølje</h1>
      <nav className="nav-links">
        <a href="#about">Om oss</a>
        <a href="#projects">Prosjekter</a>
        <a href="#contact">Kontakt</a>
      </nav>
    </header>
  );
}

export default Header;
