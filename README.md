# Musthak — Personal Software Engineer Portfolio

A responsive dark-premium portfolio built with React, Vite and CSS.

## Requirements
- Node.js 20.19+ or 22.12+
- npm
- Git

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Build and test
```bash
npm run build
npm run preview
```

## Personalize before publishing
Search the project for these placeholders and replace them:
- `your.email@example.com`
- `YOUR-LINKEDIN`
- `YOUR-GITHUB`
- `Previous experience`, and the sample dates/descriptions
- Project descriptions and technology lists: keep only details you personally worked on and are allowed to disclose.

Add your resume PDF at `public/resume.pdf`. Then add a resume link in `src/App.jsx` if desired.

## Deploy to GitHub Pages
1. Create a public GitHub repository named `musthak-portfolio`.
2. If you choose a different repository name, update `base` in `vite.config.js` to `/<repository-name>/`.
3. Push this project to the repository.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions** (recommended).
6. Add the workflow file shown in `.github/workflows/deploy.yml` (included in this project).
7. Push to `main`; GitHub Actions builds and deploys the site.
8. Your site URL will be `https://YOUR-GITHUB-USERNAME.github.io/musthak-portfolio/`.

## Free hosting notes
GitHub Pages can host this static portfolio at no charge for a public repository, subject to GitHub's current usage limits and terms. A custom domain is optional and may cost money.
