# Ar4gornn.github.io

The portfolio site — a React single-page app that lists what I have built, with a page per project
and a live demo where the project can run in a browser.

Served at the root of a GitHub user site, so there is deliberately **no `homepage` field and no
router `basename`**. The build stays host-agnostic: moving off GitHub Pages should cost nothing.

## Adding a project

Add one entry to [`src/data/projects.js`](src/data/projects.js). That is the whole job — cards,
routes and detail pages all render from it.

```js
{
  slug: "my-project",
  title: "MyProject",
  tagline: "One line that says what it is.",
  description: "A paragraph, written from the code rather than the plan.",
  stack: ["React", "Node"],
  repoUrl: "https://github.com/Ar4gornn/MyProject", // null until it is public
  liveUrl: null,                                     // only if it has been seen responding
  status: "shipped",                                 // shipped | in-progress | archived
  highlights: ["What it actually does", "…"],
  screenshot: null,                                  // only if the file exists
  demo: null,                                        // route segment under /demos, or null
}
```

If a project ever needs more than that entry plus a `/demos` route to appear, the registry has
stopped being the source of truth — fix that rather than working around it.

## Routes

| Route | Page |
|---|---|
| `/` | Home — intro and the shipped projects |
| `/projects` | Every project, including in-progress |
| `/projects/:slug` | Project detail |
| `/demos/url-shortener` | Live URL shortener demo |
| `*` | 404 |

## Develop

```bash
npm install
npm start          # http://localhost:3000
npm test           # React Testing Library
npm run build      # production build into build/
```

## Deploy

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds on push to `main`, runs the
tests, and publishes to GitHub Pages.

GitHub Pages serves static files, so a deep link such as `/projects/url-shortener` is a 404 at the
server before the app ever loads. The workflow copies `build/index.html` to `build/404.html`, which
makes Pages serve the same app shell for unknown paths and lets the router resolve the URL on the
client. A hard refresh on a deep link therefore works.

## Notes

**The URL shortener demo needs a local API.** It posts to `http://localhost:5251`, so it only works
while [UrlShortenerAPI](https://github.com/Ar4gornn/UrlShortenerAPI) is running on the same machine.
On the deployed site the request fails, and the page says so rather than faking a result.

**Two test-only workarounds live in `package.json` and `src/setupTests.js`:**

- `react-router-dom@7.5.3` declares `"main": "./dist/main.js"`, a file it does not ship. Webpack
  resolves through the `exports` field and is unaffected; Jest resolves through `main` and fails
  with *Cannot find module*. `jest.moduleNameMapper` points `react-router-dom` and
  `react-router/dom` straight at their real builds.
- The jsdom environment Create React App ships does not define `TextEncoder`, which react-router's
  CommonJS bundle constructs at module scope. `setupTests.js` supplies it from Node's `util`.

Remove both once the upstream packaging is fixed.

## License

MIT — see [LICENSE](LICENSE).
