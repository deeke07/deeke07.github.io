# Deekendra Portfolio

A modern developer portfolio built with React + Tailwind CSS.

## Features

- Responsive layout for mobile, tablet, and desktop
- Dark and light theme toggle (saved in local storage)
- Hero, skills, projects, experience, and contact sections
- Project category filtering
- Resume download support via `public/Deekendra_Resume.pdf`

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy

### Vercel

1. Push this repo to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Keep defaults:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click deploy.

### Netlify

1. Push this repo to GitHub.
2. Go to [Netlify](https://app.netlify.com/start) and import the repository.
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click deploy.

## Live Site

- Production URL: [https://deekendra-portfolio.vercel.app](https://deekendra-portfolio.vercel.app)
