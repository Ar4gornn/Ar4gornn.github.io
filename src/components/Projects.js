import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import usePageTitle from "../usePageTitle";

function Projects() {
  usePageTitle("Projects");

  return (
    <section>
      <h1>Projects</h1>
      <p className="lede">
        Everything here is described from what the code actually does. Anything unfinished is
        marked in-progress rather than left out.
      </p>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
