# Personal Site — Tomás Sánchez Villaluenga

Professional portfolio for GitHub Pages (pure HTML/CSS, no build step).

Live at **https://tsvillaluenga.github.io/**

## Pages
- `index.html` — About / home
- `experience.html` — Professional experience & production AI systems
- `publications.html` — Patent & papers
- `projects.html` — Selected projects
- `cv.html` — Education, technical skills and CV download
- `contact.html` — Contact info
- `404.html` — Not found

## Assets
- `assets/css/style.css` — Single stylesheet (design tokens in `:root`)
- `assets/img/` — Profile photo
- `docs/` — CV PDF, project reports and images

## Editing
No toolchain required — edit the HTML directly and push to `main`; GitHub Pages
serves the repository root. `.nojekyll` disables Jekyll processing.

The navigation menu is duplicated in each page's `<nav>` block; update all pages
when adding or renaming a section.

## Updating the CV
Replace `docs/Tomas_Sanchez_Villaluenga_CV.pdf` and update the
"Last updated" line in `cv.html`.
