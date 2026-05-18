"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden relative">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-xl font-bold tracking-tight">
            Abhinay
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#" className="hover:text-white transition">
              About
            </a>

            <a href="#" className="hover:text-white transition">
              Skills
            </a>

            <a href="#" className="hover:text-white transition">
              Experience
            </a>

            <a href="#" className="hover:text-white transition">
              Projects
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]" />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >

          <p className="text-gray-400 text-lg mb-4">
            Senior DevOps & Cloud Platform Engineer
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Abhinay Hasti
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Building scalable Kubernetes platforms, cloud-native infrastructure,
            and modern DevOps ecosystems.
          </p>

          <div className="flex justify-center gap-4 mt-10">

            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all">
              View Projects
            </button>

            <button className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
              Contact
            </button>

          </div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 border-t border-white/10">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm text-gray-500 mb-4">
            ABOUT
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Building scalable cloud infrastructure and modern DevOps ecosystems.
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl leading-relaxed">
            DevOps and Cloud Engineer with experience designing enterprise-grade
            Kubernetes platforms, CI/CD systems, Infrastructure as Code workflows,
            and cloud-native architectures across AWS and Azure.
          </p>

        </div>

      </section>

      {/* SKILLS SECTION */}
      <section className="py-32 px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm text-gray-500 mb-4">
            SKILLS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Technologies I work with
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6">
                Cloud & DevOps
              </h3>

              <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                <span>AWS</span>
                <span>Azure</span>
                <span>Kubernetes</span>
                <span>Docker</span>
                <span>Terraform</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6">
                CI/CD & Automation
              </h3>

              <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                <span>Jenkins</span>
                <span>GitHub Actions</span>
                <span>GitLab</span>
                <span>Ansible</span>
                <span>ArgoCD</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6">
                Monitoring & Security
              </h3>

              <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                <span>Prometheus</span>
                <span>Grafana</span>
                <span>Splunk</span>
                <span>ELK</span>
                <span>SonarQube</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-32 px-6 border-t border-white/10">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm text-gray-500 mb-4">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Professional Journey
          </h2>

          <div className="space-y-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>
                  <h3 className="text-2xl font-semibold">
                    Senior Cloud Ops Engineer
                  </h3>

                  <p className="text-gray-400 mt-2">
                    SAGE
                  </p>
                </div>

                <p className="text-gray-500 mt-4 md:mt-0">
                  2025 - Present
                </p>

              </div>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Managing Kubernetes infrastructure, GitHub Actions CI/CD pipelines,
                GitOps deployments with ArgoCD, observability systems, and cloud-native automation.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>
                  <h3 className="text-2xl font-semibold">
                    DevOps Engineer
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Knight Frank
                  </p>
                </div>

                <p className="text-gray-500 mt-4 md:mt-0">
                  2022 - 2025
                </p>

              </div>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Built scalable AWS & Azure infrastructure using Terraform,
                automated CI/CD pipelines, AKS deployments, and monitoring systems.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="py-32 px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm text-gray-500 mb-4">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

              <p className="text-sm text-gray-500 mb-4">
                Kubernetes • AWS • Terraform
              </p>

              <h3 className="text-3xl font-bold mb-6">
                Cloud Infrastructure Platform
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                Built scalable Kubernetes infrastructure across AWS environments using Terraform,
                Docker, Helm, and GitOps workflows with ArgoCD.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

              <p className="text-sm text-gray-500 mb-4">
                GitHub Actions • Jenkins • DevOps
              </p>

              <h3 className="text-3xl font-bold mb-6">
                Enterprise CI/CD Automation
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                Designed enterprise-grade CI/CD pipelines using Jenkins,
                GitHub Actions, Docker, and Kubernetes deployment workflows.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-32 px-6 border-t border-white/10">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm text-gray-500 mb-4">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Open to DevOps, Cloud Engineering, Platform Engineering,
            and Infrastructure Automation opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
            >
              LinkedIn
            </a>

            <a
              href="mailto:abhinay@example.com"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Email Me
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}