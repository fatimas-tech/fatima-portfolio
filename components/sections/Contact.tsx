import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Reveal from "@/components/effects/Reveal";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "Fatima.abubakarr68@gmail.com",
    href: "mailto:Fatima.abubakarr68@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/fatimas-tech",
    href: "https://github.com/fatimas-tech",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Fatima Abu Bakar",
    href: "https://www.linkedin.com/in/fatima-abu-bakar-10183530a/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sage/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lavender-deep">
            <span className="h-px w-6 bg-lavender-deep" aria-hidden="true" />
            Contact
            <span className="h-px w-6 bg-lavender-deep" aria-hidden="true" />
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl italic font-light text-plum text-balance sm:text-4xl md:text-5xl">
            Have an idea, opportunity, or project in mind?
          </h2>

          <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-1.5 text-sm text-plum-soft">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Based in Lahore, Pakistan — open to remote and on-site roles
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="shadow-elegant shadow-elegant-hover group flex h-full flex-col justify-between rounded-2xl border border-line bg-ivory/60 p-6 transition-colors hover:border-lavender-deep/40"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="h-5 w-5 text-lavender-deep"
                    aria-hidden="true"
                  />

                  <ArrowUpRight
                    className="h-4 w-4 text-plum-soft/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-plum-soft/70">
                    {label}
                  </p>

                  <p className="mt-1 break-words text-sm font-medium text-plum">
                    {value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}