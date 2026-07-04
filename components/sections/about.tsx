"use client";

import { Cloud, Cog, Layers, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import { motion } from "framer-motion";
import { personal } from "@/app/data/social";

const stats = [
  { label: "Years of Experience", value: `${personal.yearsOfExperience}+` },
  { label: "Production Environments Managed", value: "3" },
  { label: "Cloud Platforms", value: "AWS · Azure" },
  { label: "Certifications", value: "CKA · Terraform" },
];

const highlights = [
  {
    icon: Cloud,
    title: "Multi-cloud infrastructure",
    description:
      "9 years architecting secure, scalable environments across AWS and Azure — from EC2/VPC networking to AKS/EKS/OpenShift Kubernetes clusters.",
  },
  {
    icon: Layers,
    title: "GitOps & CI/CD at scale",
    description:
      "Built CI/CD pipelines with GitHub Actions, GitLab CI, and Jenkins, shipping through ArgoCD-driven GitOps to cut release cycle time by up to 40%.",
  },
  {
    icon: Cog,
    title: "Infrastructure as Code",
    description:
      "Terraform and Ansible for repeatable, auditable infrastructure — reusable modules, automated upgrades, and consistent multi-environment provisioning.",
  },
  {
    icon: ShieldCheck,
    title: "Security & observability",
    description:
      "Prometheus, Grafana, ELK, and Splunk for full-stack visibility, plus SAST/DAST scanning and secrets management baked into the delivery pipeline.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building infrastructure that stays boring in production."
            description="CloudOps engineer with 9 years managing enterprise-grade production environments across AWS and Azure — from Kubernetes administration and CI/CD automation to observability and security, with a bias toward automating anything done twice."
          />
        </Reveal>

        <StaggerGroup className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <GlassCard className="p-6 text-center hover:-translate-y-0.5">
                <p className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={staggerItem}>
              <GlassCard>
                <Icon className="mb-4 text-sky-400" size={28} />
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="leading-relaxed text-gray-400">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
