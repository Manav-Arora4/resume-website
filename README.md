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
2. Open your profile repository at `https://github.com/Manav-Arora4/Manav-Arora4`.
3. Add your live portfolio link to the profile README:

```md
- Portfolio: https://manav-arora4.github.io/resume-website/
- Resume: https://manav-arora4.github.io/resume-website/Manav_Arora_Resume_Latest.pdf
- LinkedIn: https://www.linkedin.com/in/manav-arora4
```

## Deploy to GitHub Pages

Live site: https://manav-arora4.github.io/resume-website/

1. Push this project to the `master` branch of `Manav-Arora4/resume-website`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `gh-pages` and **Folder** to `/ (root)`.
5. Save. GitHub Actions builds the site on every push to `master` and publishes the built files to the `gh-pages` branch.

The workflow file is `.github/workflows/deploy.yml`.

Important: do not deploy from the `master` branch root. That branch contains source code, so GitHub Pages would serve the dev `index.html` and the site would appear blank.

This project is a static Vite build, so it works cleanly on GitHub Pages. The included `.nojekyll` file prevents GitHub Pages from treating built assets as a Jekyll site.

## Contact Form Note

GitHub Pages is static and does not process form submissions by itself. The contact section uses a `mailto:` link so recruiters can open an email draft. If you want an embedded form later, connect a static form service such as Formspree, Getform, or Basin and update `src/sections/Contact.tsx`.
