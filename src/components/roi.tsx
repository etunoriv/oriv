"use client";

import ScrollReveal from "@/components/scroll-reveal";

const metrics = [
  {
    before: "2 ENGINEERS",
    after: "1 ENGINEER",
    label: "HEADCOUNT PER SELECTION CYCLE",
    detail: "Complex component selection currently requires two senior engineers working in parallel. Oriv reduces that to one.",
  },
  {
    before: "~6 WEEKS",
    after: "~2 WEEKS",
    label: "TIME PER COMPLEX COMPONENT",
    detail: "From requirements decomposition through shortlisting. The manual datasheet-and-spreadsheet process compressed into a structured workflow.",
  },
  {
    before: "~12 ENG-WEEKS",
    after: "~2 ENG-WEEKS",
    label: "TOTAL ENGINEERING EFFORT",
    detail: "Per complex selection cycle. At $200-400K loaded annual cost per senior engineer, the math is hard to argue with.",
  },
];

export default function Roi() {
  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// THE BUSINESS CASE</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              THE MATH <span className="text-accent">WORKS.</span>
            </h2>
            <p className="mt-6 text-muted max-w-xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
              Senior engineers cost $200-400K per year, loaded. A single
              complex selection cycle currently burns two of them for six
              weeks. That is not a tools problem. That is a business problem.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren stagger={0.15}>
          <div className="grid lg:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="card-hover bg-white border border-line rounded-lg p-8 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <samp className="type-micro text-muted line-through">{m.before}</samp>
                    <span className="text-dim text-xs">to</span>
                    <samp className="type-micro text-accent font-bold text-sm">{m.after}</samp>
                  </div>

                  <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.04em] mb-4">
                    {m.label}
                  </h3>

                  <p className="text-muted leading-relaxed text-sm">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 border-l-2 border-accent pl-4">
            <p className="text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
              These are baseline numbers from real engineering workflows. Your
              actual savings depend on component complexity, team cost, and how
              many selection cycles you run per year. We will build a custom ROI
              model during the pilot.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
