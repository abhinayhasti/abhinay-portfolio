"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { personal } from "@/app/data/social";

const socials = [
  { href: personal.github, icon: GithubIcon, label: "GitHub" },
  { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:36px_36px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-sky-400/20 to-indigo-500/20 text-3xl font-bold text-white backdrop-blur-xl md:h-32 md:w-32"
        >
          AH
          {/* TODO: replace with <Image src="/profile.jpg" .../> once you have a headshot */}
        </motion.div>

        <p className="mb-4 text-lg text-gray-400">{personal.role}</p>

        <h1 className="bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-8xl">
          {personal.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          9 years designing, automating, and operating enterprise-grade cloud
          platforms across AWS and Azure — Kubernetes at scale, GitOps
          delivery, and observability that keeps production calm.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-white transition-all hover:bg-white hover:text-black"
          >
            Contact
          </a>
        </div>

        <div className="mt-10 flex gap-6">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 transition hover:text-white"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
