// Single source of truth for the portfolio.
//
// Adding a project means adding ONE entry here. Nothing else.
//
// Honesty rules, enforced by review:
//   status    - reflects what runs on disk, not what is planned.
//   repoUrl   - null until the repo is public. Never link a 404.
//   liveUrl   - only if it has been seen responding.
//   screenshot- only if the file exists in public/screenshots/.
//   demo      - the route segment under /demos, or null if there is nothing to play with.

const projects = [
  {
    slug: "url-shortener",
    title: "UrlShortenerAPI",
    tagline: "Long URL in, eight characters out, 302 back.",
    description:
      "A REST API that shortens URLs and redirects them. Posting a URL returns an eight-character token; requesting the token returns a 302 to the original. Posting a URL that already exists returns the token it already has rather than minting a second one. Links expire thirty days after creation, and the expiry is checked on read rather than swept in the background.",
    stack: [".NET 8", "ASP.NET Core", "EF Core", "PostgreSQL", "xUnit"],
    repoUrl: "https://github.com/Ar4gornn/UrlShortenerAPI",
    liveUrl: null,
    status: "shipped",
    highlights: [
      "Two endpoints: POST /api/urls and GET /api/urls/{token}",
      "Controller handles HTTP only; rules live in an injected service",
      "Three EF Core migrations tracked in the repo",
      "13 xUnit tests over the controller and the service",
    ],
    screenshot: null,
    demo: "url-shortener",
  },
  {
    slug: "songparty",
    title: "SongParty",
    tagline: "Shared listening rooms with six-letter join codes.",
    description:
      "A Django REST Framework backend and a React frontend served from the same Django project. A host creates a room and receives a six-letter code; guests join with it. The host controls whether guests may pause and how many votes are needed to skip. Identity is the Django session key, so there are no accounts and no passwords. A learning build that follows a well-known tutorial's structure, and its README says so.",
    stack: ["Django 5.2", "Django REST Framework", "React 17", "Material-UI v4", "SQLite"],
    repoUrl: "https://github.com/Ar4gornn/SongParty",
    liveUrl: null,
    status: "shipped",
    highlights: [
      "Seven DRF endpoints covering the full room lifecycle",
      "Room codes regenerate until unique",
      "Host-only settings enforced with a 403 on the update path",
      "No music playback yet, despite the name",
    ],
    screenshot: null,
    demo: null,
  },
  {
    slug: "inventory-management",
    title: "InventoryManagementSystem",
    tagline: "Stock you cannot fake, because quantity is never stored.",
    description:
      "A .NET 8 API and a React front end for tracking stock, built around one decision: there is no quantity column. Stock on hand is the sum of a product's append-only movement log, so the history is the only source of truth and the two can never drift apart. A mistake is corrected by recording a compensating movement rather than editing the past, and a movement that would take stock below zero is rejected rather than clamped. The UI is built to make that visible — it shows the derived total next to the movements it was summed from, so the rule is on screen rather than buried in a service class.",
    stack: [
      ".NET 8",
      "ASP.NET Core",
      "EF Core",
      "SQLite",
      "React 19",
      "TypeScript",
      "Vite",
      "Docker",
      "xUnit",
    ],
    repoUrl: "https://github.com/Ar4gornn/InventoryManagementSystem",
    liveUrl: null,
    status: "shipped",
    highlights: [
      "Stock derived from an append-only movement log, never a stored column",
      "Below-zero movements rejected with the balance named, never silently clamped",
      "React UI puts the derived total beside the history that produced it",
      "CSV bulk import reporting per-row failures instead of rejecting the file",
      "API key checked before the lookup, so a 401 cannot leak which ids exist",
      "86 tests across three layers: rules, real SQLite, and the live HTTP pipeline",
    ],
    screenshot: null,
    demo: null,
  },
  {
    slug: "tokenlens",
    title: "tokenlens",
    tagline: "A tokenizer that shows its working, not just its answer.",
    description:
      "Paste text and see how a language model actually chops it up. The signature view is the merge ladder: byte-pair encoding replayed step by step, from individual characters up to the final tokens, in the order the merges really happened. Both tokenizers are implemented from scratch — GPT-2's BPE and BERT's WordPiece, opposite algorithms shown side by side. No backend, no network call at runtime, nothing you paste leaves the page.",
    stack: ["TypeScript", "React 19", "Vite", "Vitest"],
    repoUrl: "https://github.com/Ar4gornn/tokenlens",
    liveUrl: "https://ar4gornn.github.io/tokenlens/",
    status: "shipped",
    highlights: [
      "Merge ladder animates BPE one merge at a time, showing each pair's rank",
      "BPE and WordPiece compared live — opposite algorithms, not two vocabularies",
      "BPE verified differentially against a reference on 300+ generated inputs",
      "Zero tokenizer dependencies in the shipped bundle",
    ],
    screenshot: null,
    demo: null,
  },
  {
    slug: "portfolio",
    title: "This site",
    tagline: "The shop window, built from one registry file.",
    description:
      "A React 19 single-page app with react-router-dom v7. Every card, route and detail page renders from one registry module, so a project appears on the site by adding a single entry. Deployed as a static build, with a 404 fallback so deep links survive a hard refresh on GitHub Pages.",
    stack: ["React 19", "react-router-dom 7", "Create React App"],
    repoUrl: "https://github.com/Ar4gornn/Ar4gornn.github.io",
    liveUrl: "https://ar4gornn.github.io",
    status: "shipped",
    highlights: [
      "One registry module drives cards, routes and detail pages",
      "Dark-mode aware, responsive, no CSS framework",
      "Deep links survive a hard refresh via a 404.html copy of the app shell",
    ],
    screenshot: null,
    demo: null,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export default projects;
