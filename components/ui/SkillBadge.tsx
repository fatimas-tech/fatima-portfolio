interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-ivory/70 px-4 py-2 text-sm font-medium text-plum-soft shadow-[0_1px_0_rgba(44,34,51,0.04)] transition-all duration-200 hover:border-lavender-deep/50 hover:bg-cream hover:text-plum hover:shadow-[0_2px_10px_-4px_rgba(138,115,176,0.35)]">
      {name}
    </span>
  );
}