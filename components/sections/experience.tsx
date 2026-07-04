import { Briefcase } from "lucide-react";
import { experience } from "@/app/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional Journey"
            description="Nine years operating production platforms — from healthcare compliance to global real estate to enterprise cloud ops."
          />
        </Reveal>

        <div className="relative">
          {/* timeline spine */}
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-sky-400/60 via-white/15 to-transparent md:left-6" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative pl-14 md:pl-20">
                  <div className="absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-black text-sky-400 md:h-12 md:w-12">
                    <Briefcase size={18} />
                  </div>

                  <GlassCard className="hover:-translate-y-1">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-gray-400">{job.company}</p>
                      </div>
                      <p className="text-sm whitespace-nowrap text-gray-500">
                        {job.duration}
                      </p>
                    </div>

                    <p className="mt-5 leading-relaxed text-gray-400">
                      {job.summary}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {job.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex gap-2 text-sm leading-relaxed text-gray-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
