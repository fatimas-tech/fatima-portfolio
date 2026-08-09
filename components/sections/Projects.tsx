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
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue/10 blur-[120px]" />
      </div>

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
                large={project.featured}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}