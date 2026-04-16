"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

/* ── USE CASES ── */
const cases = [
  {
    industry: "AUTOMOTIVE",
    headline: "ADAS teams selecting sensors under timeline pressure",
    scenario:
      "Your ADAS team needs to evaluate LiDAR modules, radar ICs, and camera interface chips across multiple suppliers. Each selection cycle takes weeks. One wrong pick delays the entire program.",
    outcome:
      "With Oriv, the team searches across the global market with real constraints, shortlists candidates in minutes, and simulates sensor interface behavior before ordering evaluation boards.",
  },
  {
    industry: "DEFENSE",
    headline: "Mission-critical systems with zero tolerance for surprises",
    scenario:
      "Defense programs require components with guaranteed long-term availability, radiation tolerance specs, and full traceability. Your engineers spend weeks verifying lifecycle status and building audit trails by hand.",
    outcome:
      "Oriv indexes lifecycle and compliance data alongside electrical specs. The compliance paper trail is built as a byproduct of the workflow, not as a separate task.",
  },
  {
    industry: "INDUSTRIAL",
    headline: "PLC and drive teams scaling product lines without scaling headcount",
    scenario:
      "Your team manages multiple product lines, each with its own BOM. Every new variant means another round of component selection, bottlenecked on the two engineers who know where the bodies are buried.",
    outcome:
      "Oriv captures that selection knowledge in a searchable, structured format. Junior engineers make informed decisions with the same data senior engineers would use.",
  },
];

/* ── COMPARISON ── */
const comparisons = [
  {
    dimension: "Component Selection",
    before: "Weeks of datasheet review. Specs copied into spreadsheets by hand.",
    after: "Search with real constraints. Shortlist in minutes, traced to source.",
  },
  {
    dimension: "Simulation",
    before: "Skipped entirely, or weeks of specialist effort per model.",
    after: "Physics-based models generated from specs. Simulate before you order.",
  },
  {
    dimension: "Hardware Validation",
    before: "Build, find flaws, redesign, rebuild, repeat.",
    after: "Hybrid virtual-physical testing before full fabrication.",
  },
  {
    dimension: "Engineering Time",
    before: "30-40% of design phase on manual selection and data entry.",
    after: "That time goes back to system-level design and product innovation.",
  },
];

/* ── ROI ── */
const metrics = [
  { before: "2 engineers", after: "1 engineer", label: "per selection cycle" },
  { before: "~6 weeks", after: "~2 weeks", label: "per complex component" },
  { before: "~12 eng-weeks", after: "~2 eng-weeks", label: "total effort" },
];

export default function Proof() {
  const [activeCase, setActiveCase] = useState(0);
  const c = cases[activeCase];

  return (
    <section className="py-16 md:py-24 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* ── USE CASES ── */}
        <ScrollReveal>
          <div className="mb-12">
            <span className="type-micro text-accent font-bold block mb-4">/// PROOF</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
            >
              YOUR <span className="text-accent">INDUSTRY.</span> YOUR PROBLEM.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {cases.map((cs, i) => (
              <button
                key={cs.industry}
                onClick={() => setActiveCase(i)}
                className={`px-5 py-2.5 type-micro font-bold rounded-md transition-all duration-300 btn-press ${
                  i === activeCase
                    ? "bg-accent text-foreground shadow-[0_4px_16px_rgba(255,197,46,0.25)]"
                    : "bg-white border border-line text-muted hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {cs.industry}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-6 mb-20"
          >
            <div className="bg-white border border-line rounded-lg p-8">
              <span className="type-micro text-muted font-bold mb-3 block">SCENARIO</span>
              <h3 className="text-foreground font-bold text-base mb-4">{c.headline}</h3>
              <p className="text-muted leading-relaxed text-base">{c.scenario}</p>
            </div>
            <div className="bg-white border border-line rounded-lg p-8">
              <span className="type-micro text-accent font-bold mb-3 block">WITH ORIV</span>
              <p className="text-muted leading-relaxed text-base">{c.outcome}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── COMPARISON TABLE ── */}
        <ScrollReveal>
          <div className="mb-8">
            <h3
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.4rem, 3vw, 3rem)" }}
            >
              THE OLD WAY VS. <span className="text-accent">ORIV</span>
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white border border-line rounded-lg overflow-hidden mb-20">
            {comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] transition-colors duration-200 hover:bg-surface/30 ${
                  i < comparisons.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="p-5">
                  <span className="text-foreground font-bold text-sm">{row.dimension}</span>
                </div>
                <div className="p-5 md:border-l border-line">
                  <span className="type-micro text-muted font-bold md:hidden block mb-1.5">WITHOUT ORIV</span>
                  <p className="text-muted leading-relaxed text-base">{row.before}</p>
                </div>
                <div className="p-5 md:border-l border-line">
                  <span className="type-micro text-accent font-bold md:hidden block mb-1.5">WITH ORIV</span>
                  <p className="text-foreground leading-relaxed text-base font-medium">{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── ROI ── */}
        <ScrollReveal>
          <div className="mb-8">
            <h3
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.4rem, 3vw, 3rem)" }}
            >
              THE MATH <span className="text-accent">WORKS.</span>
            </h3>
            <p className="mt-3 text-muted max-w-2xl leading-relaxed text-base">
              Senior engineers cost $200-400K per year, loaded. A single
              complex selection cycle currently burns two of them for six weeks.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren stagger={0.12}>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="card-hover bg-white border border-line rounded-lg p-8"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-muted line-through text-base">{m.before}</span>
                  <span className="text-dim text-sm">to</span>
                  <span className="text-accent font-bold text-lg">{m.after}</span>
                </div>
                <span className="text-foreground font-medium text-base">{m.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-muted text-base leading-relaxed border-l-2 border-accent pl-4">
            Baseline numbers from real engineering workflows. We build a custom
            ROI model for your team during the pilot.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
