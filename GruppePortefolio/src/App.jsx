import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Projects from "./components/prosjekt/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Members from "./components/team/Members";
import OmOss from "./components/OmOss/OmOss";
import Goals from "./components/goals/Goals";
import Video from "./components/video/Video";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Forsiden */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Video />
              <Members />
              <Goals />
              <Contact />
            </>
          }
        />

        {/* Om oss side */}
        <Route
          path="/OmOss" element={ <> <OmOss /> </> } />
        <Route 
        path="/OmOss" element={<OmOss />} />

        {/* Prosjekter side */}
        <Route path="/projects" element={<Projects />} />

        {/* Kontakt side */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
