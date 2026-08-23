import React from "react";

// An already-deployed page, embedded so it can be used without leaving the site.
//
// Two things are deliberate. The iframe is sandboxed to scripts and same-origin
// only: it needs scripts to run at all, and it is not granted top-level
// navigation, downloads, or popups. And the caption is not decoration - an
// embedded app that is really a demo has to say so where it is being used, not
// only on the page it came from.
function ProjectEmbed({ url, title, caption, height = 760 }) {
  return (
    <figure className="embed">
      <iframe
        src={url}
        title={`${title} — live demo`}
        loading="lazy"
        height={height}
        sandbox="allow-scripts allow-same-origin"
      />
      <figcaption>
        {caption}{" "}
        <a href={url} target="_blank" rel="noreferrer">
          Open it in its own tab
        </a>
        .
      </figcaption>
    </figure>
  );
}

export default ProjectEmbed;
