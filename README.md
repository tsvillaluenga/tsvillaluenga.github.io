# Personal Site — Tomás Sánchez Villaluenga

Portfolio for GitHub Pages. Pure HTML, CSS and vanilla JS — no build step.

Live at **https://tsvillaluenga.github.io/**

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home — positioning, measured impact, capabilities, stack |
| `experience.html` | Four roles + three production AI systems |
| `projects.html` | Research, academic and independent projects |
| `publications.html` | Patent, papers and work in submission |
| `cv.html` | Education, languages, full technical inventory, CV download |
| `contact.html` | Contact channels and practical details |
| `404.html` | Not found |

## Design system
`assets/css/style.css` holds everything. Edit the tokens in the `:root` block
rather than hard-coding values.

- **Theme** — dark by default, light via `prefers-color-scheme` or the header
  toggle, which persists to `localStorage` under `theme`. The light palette is
  written twice (media query + `[data-theme="light"]`) because media queries
  cannot appear in selectors; keep the two blocks in sync.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (data and
  labels), loaded from Google Fonts. Sizes use a fluid `--step-*` scale.
- **Motion** — `.reveal` elements fade in on scroll. Gated behind the `js` class
  so content still renders with scripting disabled, and `assets/js/site.js`
  reveals everything if `IntersectionObserver` never reports.

## Assets
- `assets/img/profile.jpg` / `.webp` — 680px square portrait
- `assets/img/profile-lg.jpg` — 1254px original
- `assets/img/og-card.jpg` — 1200×630 social share card
- `docs/` — CV PDF, project reports and images

## Editing
Edit the HTML and push to `main`; Pages serves the repository root and
`.nojekyll` disables Jekyll. The `<nav>` block is duplicated per page — update
every page when adding a section, and move `aria-current="page"`.

## Updating the CV
Replace `docs/Tomas_Sanchez_Villaluenga_CV.pdf` and bump the "Last updated"
line in `cv.html`.
