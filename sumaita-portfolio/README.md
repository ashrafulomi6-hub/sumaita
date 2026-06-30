# Sumaita Islam — Portfolio

A personal portfolio site built with Next.js 16, TypeScript, Tailwind CSS,
and Framer Motion. All content is stored as plain data (no CMS) in
`lib/data.ts` — edit that one file to update anything on the site.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals)
- next-themes (light/dark mode)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything — hero text, about, education, skills, projects, certificates,
hackathons, achievements, resume link, contact info, social links — lives in:

```
lib/data.ts
```

Change the values there and the whole site updates. No database, no CMS,
no environment variables required.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Deploy.

## Project structure

```
app/            routes, layout, metadata, robots, sitemap, 404
components/     UI sections (Hero, About, Education, Skills, Projects, ...)
lib/data.ts     all site content
```
