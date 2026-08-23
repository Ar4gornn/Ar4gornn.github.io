import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle";

// The standard container every demo mounts into. Gives each one the same
// heading, back link, and honest note about what it needs to work.
function DemoFrame({ title, requires, children }) {
  usePageTitle(title);

  return (
    <section className="demo">
      <p className="crumb">
        <Link to="/projects">← Projects</Link>
      </p>

      <h1>{title}</h1>

      {requires && (
        <p className="notice" role="note">
          {requires}
        </p>
      )}

      <div className="demo-body">{children}</div>
    </section>
  );
}

export default DemoFrame;
