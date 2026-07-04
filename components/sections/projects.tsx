"use client";

import { motion } from "framer-motion";
import { ExternalLink, Workflow } from "lucide-react";
import { GithubIcon } from "@/components/icons/social-icons";
import { projects } from "@/app/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { StaggerGroup, staggerItem } from "@/components/motion/reveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="Platform and delivery work drawn from real production engagements."
        />

        <StaggerGroup
          className="grid gap-8 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={staggerItem}>
              <GlassCard className="flex h-full flex-col">
                <p className="mb-3 text-sm text-gray-500">
                  {project.tagline}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {project.hasArchitectureDiagram && (
                  <div className="mb-6 flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-4 text-sm text-gray-500">
                    <Workflow size={18} className="text-sky-400/70" />
                    Architecture diagram — add yours here
                  </div>
                )}

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
                    >
                      <GithubIcon size={16} /> View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
