import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProject, projects } from "@/app/data/projects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlassCard } from "@/components/ui/glass-card";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.caseStudy.intro,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.caseStudy.intro,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={16} /> All projects
        </Link>

        <p className="mb-3 text-sm text-sky-400">{project.tagline}</p>
        <h1 className="mb-6 text-3xl font-bold md:text-5xl">{project.title}</h1>
        <p className="mb-12 text-lg leading-relaxed text-gray-400">
          {caseStudy.intro}
        </p>

        {project.diagram && (
          <div className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-4 md:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimization needed */}
            <img
              src={project.diagram.src}
              alt={project.diagram.alt}
              className="h-auto w-full"
            />
          </div>
        )}

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
          <p className="leading-relaxed text-gray-400">{caseStudy.challenge}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">What I Built</h2>
          <ul className="space-y-4">
            {caseStudy.approach.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-gray-400">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Impact</h2>
          <ul className="space-y-4">
            {caseStudy.impact.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-gray-400">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <GlassCard className="text-center">
          <h2 className="mb-3 text-2xl font-bold">
            Want to talk through this work?
          </h2>
          <p className="mb-6 text-gray-400">
            I&apos;m happy to go deeper on the architecture, trade-offs, and
            lessons learned.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:scale-105"
          >
            Get in touch
          </Link>
        </GlassCard>
      </article>

      <Footer />
    </main>
  );
}
