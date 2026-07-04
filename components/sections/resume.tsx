import { Download, FileText } from "lucide-react";
import { personal } from "@/app/data/social";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";

export function Resume() {
  return (
    <section id="resume" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Resume"
            align="center"
            className="mx-auto text-center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-sky-400/10 text-sky-400">
              <FileText size={28} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                {personal.name} — DevOps &amp; Cloud Resume
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                9 years of experience across AWS, Azure, Kubernetes, and CI/CD
                automation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:scale-105"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition-all hover:bg-white hover:text-black"
              >
                <FileText size={18} /> View Resume
              </a>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
