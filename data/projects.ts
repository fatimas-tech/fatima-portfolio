import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "solecraft",
    name: "SoleCraft",
    category: "Offline-First E-Commerce",
    description:
      "A production-grade e-commerce storefront demonstrating modern frontend architecture through an interactive product catalog, persistent shopping cart, offline support and immersive 3D product visualization.",
    longDescription:
      "SoleCraft is a shoe store storefront built to explore what a genuinely resilient frontend looks like — one that keeps working when the network doesn't. Cart calculations run off the main thread in a Web Worker, cart state is persisted to IndexedDB so it survives reloads, and a hand-written Service Worker intercepts requests to queue actions taken while offline and sync them automatically once connectivity returns. The product experience is rounded out with an interactive, lazy-loaded 3D shoe viewer built with React Three Fiber.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Three Fiber",
      "Three.js",
      "Drei",
      "IndexedDB",
      "Web Workers",
      "Service Workers",
    ],
    highlights: [
      "Responsive product catalog with detail pages, ratings and related products",
      "Size, color and quantity selection with a live cart drawer",
      "Persistent IndexedDB storage — cart survives reloads",
      "Service Worker request interception with an offline action queue and automatic sync",
      "Cart total calculations offloaded to a Web Worker",
      "Interactive 3D shoe viewer with orbit controls, zoom and a WebGL fallback",
      "Static Site Generation for fast, cacheable pages",
    ],
    image: "/images/projects/solecraft/cover.jpg",
    imageAlt: "SoleCraft e-commerce storefront showing a 3D shoe viewer and product catalog",
    github: "https://github.com/fatimas-tech/khizex-shoestore",
    featured: true,
    status: "shipped",
  },
  {
    slug: "soniq",
    name: "SONIQ",
    category: "Immersive 3D Product Experience",
    description:
      "An immersive 3D headphone showcase focused on cinematic product presentation, scroll-driven storytelling and smooth interactive motion.",
    longDescription:
      "SONIQ is a premium product showcase built around a single question: how far can scroll-driven storytelling carry a 3D product before it stops feeling smooth? A GLTF headphone model reacts to scroll with camera parallax and floating idle motion, choreographed with GSAP and ScrollTrigger, then hands off to free orbit controls once the showcase sequence completes. Performance and accessibility were treated as first-class constraints rather than afterthoughts — the scene pauses off-screen, respects reduced-motion preferences, and degrades gracefully without WebGL.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "GSAP",
      "Tailwind CSS",
    ],
    highlights: [
      "Scroll-driven storytelling choreographed with GSAP ScrollTrigger",
      "Interactive 3D headphone model with dynamic lighting and floating idle animation",
      "Camera parallax with smooth section reveals and glassmorphism UI",
      "OrbitControls unlocked after the showcase animation completes",
      "IntersectionObserver-based performance optimization and off-screen pausing",
      "prefers-reduced-motion support with a graceful, non-animated fallback",
      "WebGL fallback, responsive layout, and optimized GLTF loading",
    ],
    image: "/images/projects/soniq/cover.jpg",
    imageAlt: "SONIQ 3D headphone showcase with cinematic scroll-driven scenes",
    featured: true,
    status: "shipped",
  },
  {
    slug: "ping",
    name: "Ping",
    category: "Real-Time Messaging Simulation",
    description:
      "A client-side messaging application inspired by modern messaging interfaces, focused on asynchronous state choreography rather than simply styling chat bubbles.",
    longDescription:
      "Ping simulates the hardest parts of a real messaging product entirely on the client. A custom mock WebSocket transport drives four independent conversation threads that push contextual replies in the background, complete with realistic sending → sent → delivered → read status progression and typing indicators. The interesting engineering lives in the message state architecture — a useReducer-driven reducer manages ordering, grouping and unread counts, while React.memo keeps re-renders under control as threads grow.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "react-markdown",
      "react-syntax-highlighter",
      "useReducer",
      "localStorage",
    ],
    highlights: [
      "Four independent conversation threads over a custom mock WebSocket transport",
      "Autonomous background message push with contextual replies and typing indicators",
      "Realistic sending/sent/delivered/read status progression",
      "Intelligent auto-scroll with a 'new messages' affordance",
      "Markdown rendering with syntax-highlighted code blocks and copy-message support",
      "Timestamp/sender grouping, auto-growing textarea, Enter vs Shift+Enter behavior",
      "ARIA live region and full keyboard accessibility, with state persisted to localStorage",
    ],
    image: "/images/projects/ping/cover.jpg",
    imageAlt: "Ping messaging interface showing multiple conversation threads",
    status: "shipped",
  },
  {
    slug: "headlesshydra",
    name: "HeadlessHydra",
    category: "Reusable React Component Architecture",
    description:
      "A reusable, fully headless React Combobox designed to separate interaction logic and state management from presentation.",
    longDescription:
      "HeadlessHydra is built around a single generic useCombobox<TItem> hook that owns all interaction logic — filtering, keyboard navigation, selection, highlighted-option tracking — while leaving every pixel of presentation to the consumer. It supports both controlled and uncontrolled usage, synchronous and debounced asynchronous filtering with out-of-order request protection, and full WAI-ARIA keyboard-only interaction. Three demo interfaces (Country Explorer, Fruit Finder and a Performance Lab with 600+ options) use the exact same hook to prove the behavior genuinely generalizes.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Generic, headless useCombobox<TItem> hook with reducer-based state management",
      "Controlled mode exposing inputValue, isOpen, selectedItem and highlightedIndex",
      "Synchronous and debounced asynchronous filtering with out-of-order request protection",
      "Loading, error and empty/no-match states handled explicitly",
      "Full keyboard-only interaction with WAI-ARIA accessibility",
      "Three independent consumer interfaces sharing one hook: Country Explorer, Fruit Finder, and a Performance Lab with 600+ options",
    ],
    image: "/images/projects/headlesshydra/cover.jpg",
    imageAlt: "HeadlessHydra combobox demo interfaces sharing one headless hook",
    status: "shipped",
  },
  
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
