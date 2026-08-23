import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="card">
      <header className="card-head">
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <span className={`status status-${project.status}`}>{project.status}</span>
      </header>

      <p className="card-tagline">{project.tagline}</p>

      <ul className="stack" aria-label="Stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <footer className="card-foot">
        <Link to={`/projects/${project.slug}`}>Details</Link>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
        {project.demo && <Link to={`/demos/${project.demo}`}>Demo</Link>}
      </footer>
    </article>
  );
}

export default ProjectCard;
