# Vivek Ray Portfolio

Personal portfolio for Vivek Ray, a B.Tech Computer Science undergraduate who learns by building software systems, interactive tools, and technical experiments.

The V1 direction is a warm editorial portfolio with restrained playful interaction. The site prioritizes substantial project work over buzzwords, with RAHAT, OS-PRO, and SchemaLenz as the flagship projects.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- pnpm

## Project Structure

```txt
src/app
  page.tsx                 Homepage
  projects/[slug]/page.tsx Project case-study route

src/components
  project-visuals.tsx      Lightweight project-specific visual systems
  theme-toggle.tsx         Light/dark theme control

src/data
  projects.ts              Project and skills content
```

## Local Development

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm lint
pnpm build
```

## Git Workflow

Development is committed at checkpoints so the repository shows a real build history instead of a single final dump.

Current commit author for this repository:

```txt
Vivek-ray-05 <realvivek100@gmail.com>
```

No generated co-author footer is used in commits.
