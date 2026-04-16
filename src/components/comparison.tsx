"use client";

import ScrollReveal from "@/components/scroll-reveal";

const rows = [
  {
    dimension: "Component Selection",
    before: "Weeks of datasheet review across vendor sites. Specs copied into spreadsheets by hand.",
    after: "Search the global market with real constraints. Shortlist in minutes, traced to source.",
  },
  {
    dimension: "Simulation",
    before: "Skipped entirely, or weeks of specialist effort to build one model from scratch.",
    after: "Physics-based models generated from component specs. Simulate before you order.",
  },
  {
    dimension: "Hardware Validation",
    before: "Build a prototype. Find the flaw. Redesign. Rebuild. Repeat.",
    after: "Hybrid virtual-physical testing. Validate against real hardware before full fabrication.",
  },
  {
    dimension: "Observability",
    before: "Disconnected tools, manual data export, audit trails assembled after the fact.",
    after: "Live telemetry dashboards. Compliance-ready data export from the same workspace.",
  },
  {
    dimension: "Engineering Time",
    before: "Senior engineers spend 30-40% of design phase on manual selection and data entry.",
    after: "That time goes back to system-level design and product innovation.",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// BEFORE / AFTER</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              THE OLD WAY VS. <span className="text-accent">ORIV</span>
            </h2>
            <p className="mt-6 text-muted max-w-xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
              We are not adding another tool to your stack. We are replacing the
              manual work that should not exist in the first place.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white border border-line rounded-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] border-b border-line bg-surface/50">
              <div className="hidden md:block p-5">
                <samp className="type-micro text-dim font-bold">DIMENSION</samp>
              </div>
              <div className="hidden md:block p-5 border-l border-line">
                <samp className="type-micro text-muted font-bold">WITHOUT ORIV</samp>
              </div>
              <div className="hidden md:block p-5 border-l border-line">
                <samp className="type-micro text-accent font-bold">WITH ORIV</samp>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] transition-colors duration-200 hover:bg-surface/30 ${
                  i < rows.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="p-5">
                  <samp className="type-micro text-foreground font-bold text-sm tracking-[0.04em]">
                    {row.dimension}
                  </samp>
                </div>
                <div className="p-5 md:border-l border-line">
                  <samp className="type-micro text-muted font-bold md:hidden block mb-2">WITHOUT ORIV</samp>
                  <p className="text-muted leading-relaxed text-sm">
                    {row.before}
                  </p>
                </div>
                <div className="p-5 md:border-l border-line">
                  <samp className="type-micro text-accent font-bold md:hidden block mb-2">WITH ORIV</samp>
                  <p className="text-foreground leading-relaxed text-sm">
                    {row.after}
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
