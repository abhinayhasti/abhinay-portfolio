"use client";

import { useActionState, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { sendContactMessage, ContactState } from "@/app/actions/contact";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { personal } from "@/app/data/social";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { StaggerGroup, staggerItem, Reveal } from "@/components/motion/reveal";

const contactItems = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "/in/abhinayhasti", href: personal.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "/abhinayhasti", href: personal.github },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
];

const initialState: ContactState = { status: "idle" };

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );

  // When no email API key is configured on the server, fall back to the
  // visitor's mail client so the form is never a dead end.
  useEffect(() => {
    if (state.status !== "unconfigured") return;
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fire only when the action reports unconfigured
  }, [state]);

  return (
    <section id="contact" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Great"
            description="Open to DevOps, Cloud Engineering, and Platform Engineering opportunities."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-5">
          <StaggerGroup className="space-y-4 md:col-span-2" staggerDelay={0.08}>
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={staggerItem}>
                <GlassCard className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-sky-400/10 text-sky-400">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="truncate text-sm text-gray-200 hover:text-white"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="truncate text-sm text-gray-200">{value}</p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1} className="md:col-span-3">
            <GlassCard>
              <form action={formAction} className="space-y-5">
                {/* Honeypot for bots — hidden from real users and screen readers */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-sky-400/50 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-sky-400/50 focus:outline-none"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-sky-400/50 focus:outline-none"
                    placeholder="Let's talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {pending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                {state.status === "success" && (
                  <p
                    role="status"
                    className="flex items-center gap-2 text-sm text-emerald-400"
                  >
                    <CheckCircle2 size={16} /> Message sent — I&apos;ll get back
                    to you soon.
                  </p>
                )}
                {state.status === "error" && (
                  <p role="alert" className="text-sm text-red-400">
                    {state.message}
                  </p>
                )}
                {state.status === "unconfigured" && (
                  <p role="status" className="text-sm text-gray-400">
                    Opening your mail client instead…
                  </p>
                )}
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
