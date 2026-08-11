# Fatima Abu Bakar — Personal Portfolio

A modern, responsive personal portfolio website built to showcase my frontend development skills, selected projects, technical experience, and ways to get in touch.

The portfolio is designed to be simple, polished, and easy to navigate, with a soft pastel visual style and interactive elements that provide a smooth browsing experience across desktop, tablet, and mobile devices.

---

##  Overview

This portfolio introduces me as a Frontend Developer / Junior Software Engineer and provides an overview of:

- My background and current learning journey
- My technical skills
- Selected projects and practical work
- Technologies I use
- Links to my GitHub repositories and live projects
- Ways to contact or connect with me professionally

The website focuses on presenting projects in a visually scannable format rather than relying on long blocks of text.

Each project can be opened to view additional information, while project cards provide quick access to repositories and live deployments where available.

---

##  About Me

Hi, I'm **Fatima Abu Bakar**, a Software Engineering graduate/student based in Lahore, Pakistan, with a strong interest in frontend development and user-focused web experiences.

I enjoy building clean, responsive interfaces and turning ideas into practical web applications.

My current focus is on strengthening my frontend development skills while continuing to expand into full-stack development.

I am particularly interested in:

- Frontend development
- React and Next.js
- JavaScript / TypeScript
- UI/UX and interface design
- Responsive web development
- Accessibility
- Building practical, user-friendly applications

---

## Portfolio Goals

The main goals of this portfolio are to:

1. Present my technical skills clearly.
2. Showcase real projects and practical development experience.
3. Provide direct access to project repositories and live demos.
4. Demonstrate responsive web development.
5. Demonstrate component-based development using React and Next.js.
6. Provide a professional way for recruiters, clients, and collaborators to contact me.

---

# Tech Stack

The portfolio is built using modern frontend technologies.

### Core Technologies

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

### UI & Icons

- **Lucide React**
- Custom SVG/icon components
- Custom reusable UI components

### Development Tools

- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **VS Code / Cursor**

---

# Project Architecture

The application follows a component-based Next.js architecture.

The project is organized into separate areas for pages, reusable components, project data, types, and styling.

A simplified structure looks like this:

```text
portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── effects/
│   │   └── Reveal.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── SkillBadge.tsx
│       ├── ProjectModal.tsx
│       └── icons.tsx
│
├── data/
│   ├── projects.ts
│   └── skills.ts
│
├── types/
│   └── project.ts
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   │
│   └── resume/
│
├── app/
│   └── globals.css
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md

 Design Decisions

Several design decisions were made intentionally.

1. Pastel Color Palette

A soft pastel palette was chosen to create a calm, modern, personal visual identity.

Lavender, pink, blue, sage, cream, and plum are reused consistently throughout the interface.

2. Component-Based UI

The portfolio is divided into reusable React components rather than keeping the entire page in a single file.

This makes the project easier to:

Maintain
Debug
Extend
Reuse
3. Structured Project Data

Project information is separated from presentation logic.

This means project content can be changed without modifying the card component itself.

4. Responsive-First Layout

The layout uses Tailwind responsive breakpoints to ensure that content remains usable on smaller screens.

5. Subtle Motion

Animations are used to add personality and polish while avoiding excessive movement.

6. Real Project Content

The portfolio focuses on real projects and practical development work rather than placeholder or fictional projects.

Adding a New Project

To add a new project:

Open:
data/projects.ts
Add a new project object.

Example:

{
  slug: "my-project",
  name: "My Project",
  category: "Web Application",
  description:
    "A short explanation of what the project does and the problem it solves.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  github: "https://github.com/username/my-project",
  live: "https://my-project.example.com",
}
Add the project image to the appropriate folder inside:
public/images/projects/
Make sure the image path matches the project data.
Run:
npm run build
Check the project card and project modal.

Professional Links
GitHub

https://github.com/fatimas-tech

LinkedIn

https://www.linkedin.com/in/fatima-abu-bakar-10183530a/

Email

Fatima.abubakarr68@gmail.com

 Author

Fatima Abu Bakar

Frontend Developer / Junior Software Engineer

Lahore, Pakistan

Interested in building thoughtful interfaces and practical web applications with modern frontend technologies.

 License

This portfolio is a personal project created by Fatima Abu Bakar.

The source code is primarily intended to demonstrate my development work, skills, and projects.

Please do not present the project or its content as your own.