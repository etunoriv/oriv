"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cases = [
  {
    id: "IND-01",
    industry: "AUTOMOTIVE",
    headline: "ADAS TEAMS SELECTING SENSORS UNDER TIMELINE PRESSURE",
    scenario:
      "Your ADAS team needs to evaluate LiDAR modules, radar ICs, and camera interface chips across multiple suppliers. Each selection cycle takes weeks of cross-referencing datasheets, checking lifecycle status, and validating electrical compatibility. One wrong pick delays the entire program.",
    outcome:
      "With Oriv, the team searches across the global market with real constraints, shortlists candidates in minutes, and simulates sensor interface behavior before ordering evaluation boards. Selection cycles that took six weeks compress to days.",
  },
  {
    id: "IND-02",
    industry: "DEFENSE & AVIATION",
    headline: "MISSION-CRITICAL SYSTEMS WITH ZERO TOLERANCE FOR SURPRISES",
    scenario:
      "Defense programs require components with guaranteed long-term availability, radiation tolerance specs, and full traceability. Your engineers spend weeks verifying lifecycle status, sourcing mil-spec alternatives, and building audit trails by hand.",
    outcome:
      "Oriv indexes lifecycle and compliance data alongside electrical specs. Engineers filter for availability windows, export audit-ready documentation, and simulate system behavior under edge conditions. The compliance paper trail is built as a byproduct of the workflow, not as a separate task.",
  },
  {
    id: "IND-03",
    industry: "INDUSTRIAL AUTOMATION",
    headline: "PLC AND DRIVE TEAMS SCALING PRODUCT LINES WITHOUT SCALING HEADCOUNT",
    scenario:
      "Your team manages multiple product lines, each with its own BOM. Every new variant means another round of component selection, and the process relies on the two or three senior engineers who know where the bodies are buried.",
    outcome:
      "Oriv captures that selection knowledge in a searchable, structured format. Junior engineers make informed component decisions with the same data senior engineers would use. New product variants no longer bottleneck on a single person's availability.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ USE CASES ]</span>
          <span className="type-micro">BY INDUSTRY</span>
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
            YOUR
            <br />
            <span className="text-accent">INDUSTRY.</span>
            <br />
            YOUR PROBLEM.
          </motion.h2>
        </div>
      </div>

      {/* Industry tabs */}
      <div className="grid-dividers grid sm:grid-cols-3">
        {cases.map((cs, i) => (
          <button
            key={cs.id}
            onClick={() => setActive(i)}
            className={`px-6 py-4 flex items-center gap-3 text-left transition-colors ${
              i === active ? "!bg-surface" : "hover:!bg-surface/50"
            } focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]`}
          >
            <samp className={`type-micro font-bold ${i === active ? "text-accent" : "text-dim"}`}>
              {cs.id}
            </samp>
            <samp className={`type-micro ${i === active ? "text-foreground" : "text-muted"}`}>
              {cs.industry}
            </samp>
          </button>
        ))}
      </div>

      {/* Case detail */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2">
          {/* Left — scenario */}
          <div className="border-b lg:border-b-0 lg:border-r border-line p-6 md:p-12">
            <samp className="type-micro text-accent font-bold mb-2 block">{c.industry} /// SCENARIO</samp>
            <h3
              className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mt-4 mb-6"
            >
              {c.headline}
            </h3>
            <p className="font-mono text-muted leading-relaxed" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
              {c.scenario}
            </p>
          </div>

          {/* Right — outcome */}
          <div className="p-6 md:p-12">
            <samp className="type-micro text-accent font-bold mb-2 block">WITH ORIV</samp>
            <p className="mt-4 font-mono text-muted leading-relaxed" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
              {c.outcome}
            </p>
            <hr className="border-line my-8" />
            <a
              href="#contact"
              className="inline-block border-2 border-accent bg-accent px-8 py-3 type-micro text-background font-bold tracking-[0.1em] transition-all hover:bg-transparent hover:text-accent focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
            >
              SEE THIS IN ACTION
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
