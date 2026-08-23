import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import usePageTitle from "../usePageTitle";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageTitle(project ? project.title : "Not found");

  if (!project) {
    return (
      <section>
        <h1>No such project</h1>
        <p>
          Nothing is registered under <code>{slug}</code>.{" "}
          <Link to="/projects">Back to projects</Link>.
        </p>
      </section>
    );
  }

  return (
    <article className="detail">
      <p className="crumb">
        <Link to="/projects">← Projects</Link>
      </p>

      <header className="detail-head">
        <h1>{project.title}</h1>
        <span className={`status status-${project.status}`}>{project.status}</span>
      </header>

      <p className="lede">{project.tagline}</p>

      {project.screenshot && (
        <img className="shot" src={project.screenshot} alt={`${project.title} screenshot`} />
      )}

      <p>{project.description}</p>

      <h2>What it does</h2>
      <ul>
        {project.highlights.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <h2>Stack</h2>
      <ul className="stack" aria-label="Stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <p className="links">
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        ) : (
          <span className="muted">Not published yet</span>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        {project.demo && <Link to={`/demos/${project.demo}`}>Try the demo</Link>}
      </p>
    </article>
  );
}

export default ProjectDetail;
