"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/app/data/certifications";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { StaggerGroup, staggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Certifications" title="Certifications" />

        <StaggerGroup
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.name} variants={staggerItem}>
              <GlassCard className="h-full">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-sky-400/10 text-sky-400">
                    <Award size={22} />
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs",
                      cert.status === "in-progress"
                        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                        : "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    )}
                  >
                    {cert.status === "in-progress" ? "In progress" : "Earned"}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-semibold text-white">
                  {cert.name}
                </h3>
                <p className="mb-1 text-sm text-gray-400">{cert.issuer}</p>
                <p className="mb-5 text-sm text-gray-500">{cert.year}</p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
                  >
                    <ExternalLink size={14} /> View credential
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
