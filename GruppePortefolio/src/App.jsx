import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/prosjekt/Hero";
import About from "./components/about/About";
import Projects from "./components/prosjekt/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Members from "./components/team/Members";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Members />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
