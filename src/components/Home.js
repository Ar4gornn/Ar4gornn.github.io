import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import usePageTitle from "../usePageTitle";

function Home() {
  usePageTitle(null);

  const shipped = projects.filter((p) => p.status === "shipped");

  return (
    <>
      <section className="hero">
        <h1>Alex Ghanem</h1>
        <p className="lede">
          AI engineer. I work mostly in Python, with .NET and Django behind the services I build
          and React on the front, and I build games in Godot. I like small services with clear
          boundaries — a controller that only does HTTP, a service that holds the rules, and tests
          that would actually catch a regression.
        </p>
        <p className="links">
          <a href="https://github.com/Ar4gornn" target="_blank" rel="noreferrer">
            github.com/Ar4gornn
          </a>
          <a href="mailto:alexghanem1@gmail.com">alexghanem1@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Shipped</h2>
        <div className="grid">
          {shipped.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p>
          <Link to="/projects">Everything, including what is still in progress →</Link>
        </p>
      </section>
    </>
  );
}

export default Home;
