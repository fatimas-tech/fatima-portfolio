import Reveal from "@/components/effects/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lavender-deep">
        <span className="h-px w-6 bg-lavender-deep" aria-hidden="true" />
        {eyebrow}
        <span
          className="h-1 w-1 rounded-full bg-lavender-deep/60"
          aria-hidden="true"
        />
      </span>
      <h2 className="mt-4 font-display text-3xl italic font-light text-plum sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-plum-soft sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}