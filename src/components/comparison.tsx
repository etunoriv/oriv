"use client";

import { motion } from "framer-motion";

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
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ BEFORE / AFTER ]</span>
          <span className="type-micro">WHAT CHANGES WHEN YOU SWITCH</span>
        </div>
      </div>

      {/* Title */}
      <div className="border-b border-line px-6 py-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="type-macro text-foreground"
            style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
          >
            THE OLD WAY
            <br />
            VS. <span className="text-accent">ORIV</span>
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            We are not adding another tool to your stack. We are replacing the
            manual work that should not exist in the first place.
          </p>
        </div>
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-[1400px]"
      >
        {/* Table header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-line">
          <div className="p-4 md:p-6">
            <samp className="type-micro text-dim font-bold">DIMENSION</samp>
          </div>
          <div className="p-4 md:p-6 border-l border-line">
            <samp className="type-micro text-muted font-bold">WITHOUT ORIV</samp>
          </div>
          <div className="p-4 md:p-6 border-l border-line">
            <samp className="type-micro text-accent font-bold">WITH ORIV</samp>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_1fr] border-b border-line">
            <div className="p-4 md:p-6 flex items-start">
              <samp className="type-micro text-foreground font-bold text-sm tracking-[0.04em]">
                {row.dimension}
              </samp>
            </div>
            <div className="p-4 md:p-6 border-l border-line">
              <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
                {row.before}
              </p>
            </div>
            <div className="p-4 md:p-6 border-l border-line">
              <p className="font-mono text-foreground leading-relaxed text-xs tracking-wide">
                {row.after}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
