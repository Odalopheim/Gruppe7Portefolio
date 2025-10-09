import React from "react";
import "./Projects.css";
import OngoingProjects from "./OngoingProjects";
import PastProjects from "./PastProjects";
import ProjectHero from "./ProjectHero";


function Projects() {
  return (
<>
      <ProjectHero />
      <PastProjects/>
      <hr className="stylish-hr"></hr>
      <OngoingProjects />
</>
  );
}

export default Projects;
