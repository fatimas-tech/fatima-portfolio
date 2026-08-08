"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, GraduationCap } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-plum/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="scrollbar-thin relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-ivory p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 z-10 rounded-full border border-line bg-ivory p-2 text-plum-soft transition-colors hover:text-plum"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-cream">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-lavender-deep">
              <span>{project.category}</span>
              {project.academic && (
                <span className="inline-flex items-center gap-1 rounded-full border border-rose/50 bg-rose/10 px-2.5 py-1 text-rose-900/70 normal-case tracking-normal">
                  <GraduationCap className="h-3 w-3" aria-hidden="true" />
                  Final Year Project
                </span>
              )}
              {project.status === "in-progress" && (
                <span className="rounded-full border border-line bg-cream px-2.5 py-1 normal-case tracking-normal text-plum-soft">
                  In active development
                </span>
              )}
            </div>

            <h3
              id="project-modal-title"
              className="mt-3 font-display text-2xl italic font-light text-plum sm:text-3xl"
            >
              {project.name}
            </h3>

            <p className="mt-4 text-plum-soft leading-relaxed">
              {project.longDescription}
            </p>

            {project.highlights.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-plum">
                  Technical highlights
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-plum-soft"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lavender-deep"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-plum">
                Technologies
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-plum-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.github || project.live) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-medium text-ivory transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    View repository
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory px-5 py-2.5 text-sm font-medium text-plum transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live site
                  </a>
                )}
              </div>
            )}

            {!project.github && !project.live && (
              <p className="mt-8 text-sm text-plum-soft italic">
                {project.academic
                  ? "Repository not yet public."
                  : "Screenshots and a repository link are coming soon."}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
