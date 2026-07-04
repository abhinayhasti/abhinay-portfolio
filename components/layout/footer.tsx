import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { personal } from "@/app/data/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <p>
          © {year} {personal.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
