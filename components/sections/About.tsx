import Image from "next/image";
import { Code2, Layers, Eye, Sparkles } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const FOCUS_AREAS = [
  { icon: Code2, label: "Frontend" },
  { icon: Layers, label: "Architecture" },
  { icon: Eye, label: "Accessibility" },
  { icon: Sparkles, label: "Creative Web" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-cream">
            <PortraitOrPlaceholder />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-plum/5" />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About"
            title="Frontend developer with an engineer's instincts"
          />

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-plum-soft sm:text-lg">
              I&apos;m a Software Engineering graduate and Frontend Developer
              based in Lahore, Pakistan. I enjoy turning ideas into polished,
              interactive web experiences while exploring modern frontend
              architecture, accessibility, AI-integrated applications, and
              immersive interfaces.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-soft sm:text-lg">
              I care about both how an application feels and how thoughtfully
              it&apos;s engineered — from reusable React components and
              responsive UI to performance, accessibility, and state
              management.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {FOCUS_AREAS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-ivory/60 px-3 py-5 text-center"
                >
                  <Icon
                    className="h-5 w-5 text-lavender-deep"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-plum-soft">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PortraitOrPlaceholder() {
  const hasPortrait = true;

  if (hasPortrait) {
    return (
      <Image
        src="/images/profile/fatima.jpeg"
        alt="Portrait of Fatima Abu Bakar"
        fill
        sizes="(max-width: 1024px) 320px, 400px"
        className="object-cover"
        priority
      />
    );
  }

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3"
      role="img"
      aria-label="Portrait placeholder for Fatima Abu Bakar"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(168,150,201,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(221,169,160,0.3), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <span className="relative font-display text-6xl italic font-light text-plum/70">
        FA
      </span>
      <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-plum-soft/70">
        Portrait coming soon
      </span>
    </div>
  );
}
