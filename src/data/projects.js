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
//   embedUrl  - a page that stands on its own and is safe to put in an iframe on
//               the detail page, or null. Only for something already deployed and
//               seen working; an iframe of a dead URL is a blank box.

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
      "A Django REST Framework backend and a React frontend served from the same Django project. A host creates a room and receives a six-letter code; guests join with it. The host controls whether guests may pause and how many votes are needed to skip. Identity is the Django session key, so there are no accounts and no passwords — which means host and guest are not roles you log in as, they are what the server works out by comparing your key against the room's. A learning build that follows a well-known tutorial's structure, and its README says so. Django needs a server and this site is static, so the demo here reimplements the same API in the page: same routes, same status codes, same rules, with every request listed as it is made.",
    stack: [
      "Django 5.2",
      "Django REST Framework",
      "React 17",
      "Material-UI v4",
      "SQLite",
      "TypeScript",
      "Vite",
      "Web Audio",
    ],
    repoUrl: "https://github.com/Ar4gornn/SongParty",
    liveUrl: "https://ar4gornn.github.io/songparty-demo/",
    status: "shipped",
    highlights: [
      "Seven DRF endpoints covering the full room lifecycle",
      "Room codes regenerate until unique",
      "Host-only settings enforced with a 403 on the update path",
      "Identity is the session key — no accounts, no passwords",
      "Four panes, four session keys, one room: the host rule is visible, not described",
      "The demo keeps the real quirks, including join-room answering 400 rather than 404",
      "Queue and vote-to-skip are the demo's own — the Django project has no playback",
      "Music synthesised in the page from a seed; no audio file is fetched",
      "33 tests over the demo's rules, run against an injected clock",
    ],
    screenshot: null,
    demo: "songparty",
    embedUrl: "https://ar4gornn.github.io/songparty-demo/",
  },
  {
    slug: "inventory-management",
    title: "InventoryManagementSystem",
    tagline: "Stock you cannot fake, because quantity is never stored.",
    description:
      "A .NET 8 API and a React front end for tracking stock, built around one decision: there is no quantity column. Stock on hand is the sum of a product's append-only movement log, so the history is the only source of truth and the two can never drift apart. A mistake is corrected by recording a compensating movement rather than editing the past, and a movement that would take stock below zero is rejected rather than clamped. The UI is built to make that visible — it shows the derived total next to the movements it was summed from, so the rule is on screen rather than buried in a service class, and it drives the whole API: products and categories are created, edited and deleted from it. Where the API refuses — a product whose movements would be lost, a category that still holds products — the UI shows that refusal and its reason rather than hiding it behind a generic failure.",
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
    liveUrl: "https://ar4gornn.github.io/InventoryManagementSystem/",
    status: "shipped",
    highlights: [
      "Stock derived from an append-only movement log, never a stored column",
      "Below-zero movements rejected with the balance named, never silently clamped",
      "React UI puts the derived total beside the history that produced it",
      "Products and categories created, edited and deleted from the UI",
      "A refused delete shows the API's reason, including what is blocking it",
      "CSV bulk import reporting per-row failures instead of rejecting the file",
      "API key checked before the lookup, so a 401 cannot leak which ids exist",
      "86 tests across three layers: rules, real SQLite, and the live HTTP pipeline",
    ],
    screenshot: null,
    demo: "inventory",
    embedUrl: "https://ar4gornn.github.io/InventoryManagementSystem/",
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
