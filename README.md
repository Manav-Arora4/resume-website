# Manav Arora AI/ML Portfolio

Modern personal portfolio for AI and Machine Learning roles, built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Icons.

## Project Structure

```text
src/
  assets/       Static source assets you may add later
  components/   Reusable UI blocks such as cards, buttons, and section wrappers
  data/         Single source of truth for portfolio content
  hooks/        Small reusable React hooks
  sections/     Page sections composed from reusable components
  App.tsx       Section order and page shell
  main.tsx      React entry point
```

Most portfolio content lives in `src/data/portfolio.ts`. Update that file to change projects, skills, contact links, GitHub username, resume path, education details, and certification names.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Replace Placeholders

1. The primary downloadable resume is `public/Manav_Arora_Resume_Latest.pdf`.
2. The alternate ATS-style resume is `public/ManavArora_Resume.pdf`.
3. The gamified design archive remains available at `public/Gamified_Resume_Design.zip`.
4. Replace project screenshot placeholders in `public/` with real screenshots using the same filenames, or update the image paths in `src/data/portfolio.ts`.
5. Add your real GitHub username, project links, and demo links in `src/data/portfolio.ts`.

## Connect It to Your GitHub Profile

1. Publish this portfolio with GitHub Pages.
2. Open your GitHub profile repository. It should be named exactly like your username, for example `manavarora/manavarora`.
3. Edit the profile repository `README.md`.
4. Use the markdown in `GITHUB_PROFILE_SNIPPET.md`.
5. Replace `YOUR_GITHUB_USERNAME`, `YOUR_REPOSITORY_NAME`, and `YOUR_LINKEDIN_SLUG`.

For a normal project repository, the portfolio URL will usually be:

```text
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For a user site repository named `YOUR_GITHUB_USERNAME.github.io`, the URL will be:

```text
https://YOUR_GITHUB_USERNAME.github.io/
```

## Deploy to GitHub Pages with GitHub Actions

1. Create a GitHub repository for this portfolio.
2. Push this project to the `main` or `master` branch.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Set **Build and deployment** to **GitHub Actions**.
6. Push a commit to `main` or `master`, or manually run the workflow from the **Actions** tab.
7. GitHub Actions will install dependencies, build the Vite app, upload `dist`, and deploy it to GitHub Pages.

The workflow file is `.github/workflows/deploy.yml`.

This project is a static Vite build, so it works cleanly on GitHub Pages. The included `.nojekyll` file prevents GitHub Pages from treating built assets as a Jekyll site.

## Contact Form Note

GitHub Pages is static and does not process form submissions by itself. The contact section uses a `mailto:` link so recruiters can open an email draft. If you want an embedded form later, connect a static form service such as Formspree, Getform, or Basin and update `src/sections/Contact.tsx`.
