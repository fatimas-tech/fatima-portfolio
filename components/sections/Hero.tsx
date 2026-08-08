"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center px-6 pt-28 pb-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-lavender-deep backdrop-blur-sm"
        >
          Frontend Developer · Lahore, Pakistan
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-4xl font-light leading-[1.08] text-plum text-balance sm:text-6xl md:text-7xl"
        >
          Fatima Abu Bakar
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-plum-soft sm:text-xl"
        >
          Building thoughtful interfaces where polished frontend experiences
          meet solid engineering.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-plum px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View projects
          </a>
          <a
            href="#about"
            className="rounded-full border border-line bg-ivory/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            About me
          </a>
          <a
            href="/resume/Fatima_AbuBakar_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/fatimas-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-plum-soft transition-colors hover:text-plum"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <span className="text-line" aria-hidden="true">
            ·
          </span>
          <a
            href="https://www.linkedin.com/in/fatima-abu-bakar-10183530a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-plum-soft transition-colors hover:text-plum"
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-plum-soft"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
