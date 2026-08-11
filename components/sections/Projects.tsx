"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import Reveal from "@/components/effects/Reveal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-rose/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] right-[8%] h-64 w-64 rounded-full bg-lavender/8 blur-[110px]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of shipped internship projects, independent builds, and my Final Year Project — each one chosen to demonstrate a different part of frontend engineering."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.06}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                onOpen={setActiveProject}
                hasImage={Boolean(project.image)}
                large={project.featured}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}