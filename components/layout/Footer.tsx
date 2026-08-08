import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-xl italic font-medium text-plum">
            Fatima Abu Bakar
          </p>
          <p className="mt-1 text-sm text-plum-soft">
            Frontend Developer / Junior Software Engineer
          </p>
          <p className="mt-1 text-sm text-plum-soft">Lahore, Pakistan</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:Fatima.abubakarr68@gmail.com"
            className="inline-flex items-center gap-2 text-plum-soft transition-colors hover:text-plum"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Fatima.abubakarr68@gmail.com
          </a>
          <a
            href="https://github.com/fatimas-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-plum-soft transition-colors hover:text-plum"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            github.com/fatimas-tech
          </a>
          <a
            href="https://www.linkedin.com/in/fatima-abu-bakar-10183530a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-plum-soft transition-colors hover:text-plum"
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-plum-soft/70">
        © {year} Fatima Abu Bakar. Built with Next.js, React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
