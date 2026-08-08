"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, ImageOff } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  hasImage?: boolean;
  large?: boolean;
}

export default function ProjectCard({
  project,
  onOpen,
  hasImage = false,
  large = false,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ivory/70 backdrop-blur-sm"
    >
      <button
        onClick={() => onOpen(project)}
        className="flex flex-1 flex-col text-left"
        aria-haspopup="dialog"
      >
        <div
          className={`relative w-full overflow-hidden bg-cream ${
            large ? "aspect-[16/8]" : "aspect-[4/3]"
          }`}
        >
          {hasImage ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes={large ? "(max-width: 1024px) 100vw, 800px" : "(max-width: 1024px) 100vw, 400px"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,150,201,0.18), rgba(221,169,160,0.16))",
              }}
            >
              <ImageOff
                className="h-6 w-6 text-plum-soft/50"
                aria-hidden="true"
              />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-plum-soft/60">
                Preview coming soon
              </span>
            </div>
          )}

          {project.academic && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-rose/50 bg-ivory/90 px-3 py-1 text-xs font-semibold text-plum backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              Final Year Project
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-lavender-deep">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-2xl italic font-light text-plum">
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-plum-soft">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-cream px-2.5 py-1 text-xs font-medium text-plum-soft"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full border border-line bg-cream px-2.5 py-1 text-xs font-medium text-plum-soft">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </button>

      {(project.github || project.live) && (
        <div className="flex gap-4 border-t border-line px-6 py-4 sm:px-7">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-plum-soft transition-colors hover:text-plum"
            >
              <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-plum-soft transition-colors hover:text-plum"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live site
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
