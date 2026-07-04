"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cloud,
  Code2,
  Container,
  FileCode2,
  GitBranch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "@/app/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { StaggerGroup, staggerItem } from "@/components/motion/reveal";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  cloud: Cloud,
  container: Container,
  iac: FileCode2,
  cicd: GitBranch,
  code: Code2,
  monitor: Activity,
  shield: ShieldCheck,
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A toolbox built for running production platforms — from provisioning and orchestration to delivery, observability, and security."
        />

        <StaggerGroup
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div key={category.title} variants={staggerItem}>
                <GlassCard className="h-full">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-sky-400/10 text-sky-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mb-5 text-sm text-gray-400">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors group-hover:border-white/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
