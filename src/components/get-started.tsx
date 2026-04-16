"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

const steps = [
  {
    step: "01",
    duration: "~30 min",
    title: "Technical Discovery",
    description:
      "We talk to your engineering team. Not a sales pitch. We need to understand your components, your constraints, and where the current process breaks down.",
  },
  {
    step: "02",
    duration: "2-4 weeks",
    title: "Focused Pilot",
    description:
      "Real components, real constraints from an active program. We measure time spent selecting, burden re-reading datasheets, and errors in extracted data.",
  },
  {
    step: "03",
    duration: "Your call",
    title: "Deploy or Walk",
    description:
      "If the pilot proves value, we scope a deployment. If it does not, you walk away with everything you learned. No lock-in.",
  },
];

const complianceBadges = [
  "SOC II Compliant",
  "GDPR Aligned",
  "Data Isolation Per Account",
  "Role-Based Access Control",
];

export default function GetStarted() {
  const [form, setForm] = useState({ name: "", email: "", company: "", teamSize: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.email.includes("@") || !form.name || !form.company) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", company: "", teamSize: "", message: "" });
  }

  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="type-micro text-accent font-bold block mb-4">/// GET STARTED</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
            >
              PILOT FIRST. <span className="text-accent">THEN</span> DECIDE.
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed text-base md:text-lg">
              We do not sell annual contracts on a demo. We run a focused pilot
              with your team, on your real data, and prove the value before
              you commit.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal staggerChildren stagger={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((s) => (
              <div
                key={s.step}
                className="card-hover bg-white border border-line rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="type-micro text-accent font-bold">STEP {s.step}</span>
                  <span className="type-micro text-dim">{s.duration}</span>
                </div>
                <h3 className="text-foreground font-bold text-base mb-3">{s.title}</h3>
                <p className="text-muted leading-relaxed text-base">{s.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact form + trust signals */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <ScrollReveal>
            <div className="bg-white border border-line rounded-lg p-8 md:p-10">
              <h3 className="text-foreground font-bold text-xl mb-2">Request a Pilot</h3>
              <p className="text-muted text-base mb-8">
                Tell us about your team and we will reach out within one business day.
              </p>

              {status === "success" ? (
                <div className="py-12 text-center">
                  <span className="text-accent font-bold text-lg block mb-2">Request received.</span>
                  <p className="text-muted text-base">We will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-1.5">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => { setForm({ ...form, name: e.target.value }); if (status === "error") setStatus("idle"); }}
                        placeholder="Your name"
                        className="w-full border border-line bg-background px-4 py-3 text-foreground text-base rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] placeholder:text-dim"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-1.5">
                        Work Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); if (status === "error") setStatus("idle"); }}
                        placeholder="you@company.com"
                        className="w-full border border-line bg-background px-4 py-3 text-foreground text-base rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] placeholder:text-dim"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-1.5">
                        Company <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => { setForm({ ...form, company: e.target.value }); if (status === "error") setStatus("idle"); }}
                        placeholder="Company name"
                        className="w-full border border-line bg-background px-4 py-3 text-foreground text-base rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] placeholder:text-dim"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-1.5">
                        Team Size
                      </label>
                      <select
                        value={form.teamSize}
                        onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                        className="w-full border border-line bg-background px-4 py-3 text-foreground text-base rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] appearance-none"
                      >
                        <option value="">Select team size</option>
                        <option value="1-10">1-10 engineers</option>
                        <option value="11-30">11-30 engineers</option>
                        <option value="31-50">31-50 engineers</option>
                        <option value="50+">50+ engineers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground text-sm font-medium mb-1.5">
                      Anything we should know?
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Current tools, pain points, timeline..."
                      rows={3}
                      className="w-full border border-line bg-background px-4 py-3 text-foreground text-base rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] placeholder:text-dim resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="type-micro text-red-500">Please fill in name, email, and company.</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-accent px-8 py-4 text-foreground font-bold text-base rounded-md btn-press transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,197,46,0.3)]"
                  >
                    REQUEST A PILOT
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-foreground font-bold text-base mb-4">What to expect</h3>
                <ul className="space-y-3 text-muted text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold shrink-0 mt-0.5">01</span>
                    We respond within one business day
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold shrink-0 mt-0.5">02</span>
                    30-minute technical discovery call with your engineering team
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold shrink-0 mt-0.5">03</span>
                    If there is a fit, we scope a 2-4 week pilot on your real data
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold shrink-0 mt-0.5">04</span>
                    Pricing is scoped per team after the pilot. No public tiers.
                  </li>
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-line">
                <span className="type-micro text-muted font-bold block mb-4">ENTERPRISE TRUST</span>
                <div className="flex flex-wrap gap-2">
                  {complianceBadges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-surface border border-line px-3 py-1.5 text-muted text-sm rounded-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
