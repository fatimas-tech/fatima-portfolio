export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Core languages and frameworks I build with day to day.",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Interactive / Visual",
    description: "For motion, 3D and immersive product experiences.",
    skills: [
      { name: "Three.js" },
      { name: "React Three Fiber" },
      { name: "Drei" },
      { name: "GSAP" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Architecture",
    description: "State, persistence and resilience under the hood.",
    skills: [
      { name: "IndexedDB" },
      { name: "Web Workers" },
      { name: "Service Workers" },
      { name: "REST APIs" },
      { name: "State Management" },
      { name: "useReducer" },
      { name: "localStorage" },
    ],
  },
  {
    title: "Tools",
    description: "The rest of the toolkit.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Python" },
      { name: "SQL" },
      { name: "C++" },
    ],
  },
  {
    title: "Accessibility / AI",
    description: "Making interfaces usable for more people.",
    skills: [
      { name: "WCAG" },
      { name: "AI API Integration" },
      { name: "Accessibility Automation" },
    ],
  },
];
