"use client";

import ScrollReveal from "@/components/scroll-reveal";

const steps = [
  {
    step: "01",
    duration: "~30 MIN",
    title: "TECHNICAL DISCOVERY",
    description:
      "We talk to your engineering team. Not a sales pitch. We need to understand your components, your constraints, and where the current process breaks down. If Oriv is not a fit, we will tell you.",
  },
  {
    step: "02",
    duration: "2-4 WEEKS",
    title: "FOCUSED PILOT",
    description:
      "Real components. Real constraints from an active program. We measure three things: time spent selecting, burden re-reading datasheets, and errors in extracted data. You see the results before anyone talks pricing.",
  },
  {
    step: "03",
    duration: "YOUR CALL",
    title: "DEPLOY OR WALK",
    description:
      "If the pilot proves value, we build a custom ROI model for your team and scope a deployment. If it does not, you walk away with everything you learned. No lock-in. No sunk cost guilt.",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// GETTING STARTED</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              PILOT FIRST. <span className="text-accent">THEN</span> DECIDE.
            </h2>
            <p className="mt-6 text-muted max-w-xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
              We do not sell annual contracts on a demo. We run a focused pilot
              with your team, on your real data, and prove the value before
              you commit. If it does not work, you walk.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren stagger={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="card-hover bg-white border border-line rounded-lg p-8 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <samp className="type-micro text-accent font-bold">STEP {s.step}</samp>
                    <samp className="type-micro text-dim">{s.duration}</samp>
                  </div>
                  <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.04em] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
              Pricing is scoped per team after the pilot. No public tier page. No bait-and-switch.
            </p>
            <a
              href="#contact"
              className="shrink-0 bg-accent px-8 py-3.5 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,197,46,0.3)]"
            >
              START A CONVERSATION
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
