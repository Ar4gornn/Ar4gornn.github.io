import React from "react";

// An already-deployed page, embedded so it can be used without leaving the site.
//
// On the sandbox: allow-scripts and allow-same-origin together mean a frame can
// clear its own sandbox, so this is not an isolation boundary and is not treated
// as one - the embedded page is ours, on this same origin. What the attribute
// still does is withhold what is not listed: top-level navigation, popups,
// downloads and modals. allow-forms has to be granted explicitly, because
// without it the browser silently blocks every submit inside the frame, and the
// embedded app is nothing but forms.
//
// The caption is not decoration either: an embedded app that is really a demo has
// to say so where it is being used, not only on the page it came from.
function ProjectEmbed({ url, title, caption, height = 760 }) {
  return (
    <figure className="embed">
      <iframe
        src={url}
        title={`${title} — live demo`}
        loading="lazy"
        height={height}
        sandbox="allow-scripts allow-same-origin allow-forms"
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
