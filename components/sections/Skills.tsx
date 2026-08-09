import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import Reveal from "@/components/effects/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-16 right-[6%] h-80 w-80 rounded-full bg-rose/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="Grouped by how I actually use them — from day-to-day frontend work to the architecture underneath it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.08}
              className={
                group.title === "Frontend"
                  ? "sm:col-span-2 lg:col-span-1 lg:row-span-2"
                  : ""
              }
            >
              <div className="shadow-elegant shadow-elegant-hover h-full rounded-[1.75rem] border border-line bg-ivory/60 p-6 backdrop-blur-sm transition-colors hover:border-lavender-deep/30 sm:p-7">
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-lavender-deep/70"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl italic font-medium text-plum">
                    {group.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-plum-soft">
                  {group.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}