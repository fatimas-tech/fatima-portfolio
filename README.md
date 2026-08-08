# Fatima Abu Bakar — Developer Portfolio

A personal developer portfolio built with Next.js (App Router), React, TypeScript,
Tailwind CSS, and Framer Motion.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + strict **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animation
- **Lucide React** for iconography (with two hand-written brand SVGs for
  GitHub/LinkedIn, since recent `lucide-react` releases dropped brand logos)
- **@fontsource/fraunces** + **@fontsource/manrope** — fonts are self-hosted
  rather than pulled from Google Fonts at build time, so the site builds and
  renders correctly even in network-restricted environments

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/                  Root layout, global styles, home page
components/
  layout/              Navbar, Footer
  sections/            Hero, About, Skills, Projects, ProjectCard, Contact
  ui/                  SectionHeading, SkillBadge, ProjectModal, ScrollProgress, icons
  effects/             AmbientBackground, Reveal, CursorGlow
data/                  projects.ts, skills.ts — all content lives here, not in components
types/                 project.ts — the Project type
public/
  images/profile/      Add fatima.jpg here to replace the portrait placeholder
  images/projects/     Add cover.jpg (and any gallery images) per project slug
  resume/              Add Fatima_AbuBakar_CV.pdf here for the Download CV button
```

## Adding real project screenshots

Each project in `data/projects.ts` points to an image path under
`/public/images/projects/<slug>/`. Until real screenshots are added, project
cards and the project modal show an intentional "preview coming soon"
placeholder instead of a broken image or stock photo. To wire up a real
screenshot:

1. Add the image file (e.g. `cover.jpg`) to the matching folder in
   `public/images/projects/<slug>/`.
2. Open `components/sections/Projects.tsx` and pass `hasImage` to the
   corresponding `<ProjectCard />` (and update `ProjectModal` similarly if
   you want the modal to use the real image too).

## Adding the real portrait

Add a photo at `public/images/profile/fatima.jpg`, then in
`components/sections/About.tsx` set `hasPortrait` to `true` inside
`PortraitOrPlaceholder`.

## Adding the CV

Place the PDF at `public/resume/Fatima_AbuBakar_CV.pdf`. The hero's
"Download CV" button already links there.

## Quality checks

```bash
npx tsc --noEmit --strict   # strict TypeScript, zero `any`
npx eslint .                # lint
npm run build                # production build
```

All three currently pass with zero errors or warnings.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`) and a logical heading
  hierarchy
- Skip-to-content link
- Full keyboard navigation, visible focus states (`:focus-visible`)
- Accessible modal: focus trap, `Escape` to close, focus restored on close
- `prefers-reduced-motion` respected globally (animations reduced to near-zero
  duration) plus a manual check inside `CursorGlow`
- Descriptive `alt` text on every image
