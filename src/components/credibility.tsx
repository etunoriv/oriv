"use client";

import ScrollReveal from "@/components/scroll-reveal";

const signals = [
  {
    label: "DOMAIN",
    value: "EMBEDDED SYSTEMS",
    detail: "Founded by engineers who have lived the component selection problem firsthand. Not consultants who read about it.",
  },
  {
    label: "FOCUS",
    value: "AUTOMOTIVE / DEFENSE / INDUSTRIAL",
    detail: "We build for teams where getting the wrong part is not an inconvenience. It is a program risk.",
  },
  {
    label: "DATA",
    value: "2.8M+ COMPONENTS INDEXED",
    detail: "Real manufacturer datasheets. Structured, searchable, and traceable to the source document. Not scraped summaries.",
  },
  {
    label: "APPROACH",
    value: "PILOT-FIRST",
    detail: "We prove value on your real components and real constraints before you commit. If it does not work, you walk away.",
  },
];

export default function Credibility() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// WHO WE ARE</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              WE BUILT THIS
              <br />
              BECAUSE WE <span className="text-accent">NEEDED</span> IT
            </h2>
            <p className="mt-6 text-muted max-w-xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
              Oriv was started by co-founders who spent years watching
              senior engineers burn weeks on work that should not require
              senior engineers. We are not solving a theoretical problem.
              We are solving the one we lived with.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren stagger={0.12}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signals.map((s) => (
              <div
                key={s.label}
                className="card-hover bg-white border border-line rounded-lg p-6 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <span className="type-micro text-accent font-bold block mb-4">{s.label}</span>
                  <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.04em] mb-3">
                    {s.value}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
