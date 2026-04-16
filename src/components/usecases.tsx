"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

const cases = [
  {
    industry: "AUTOMOTIVE",
    headline: "ADAS TEAMS SELECTING SENSORS UNDER TIMELINE PRESSURE",
    scenario:
      "Your ADAS team needs to evaluate LiDAR modules, radar ICs, and camera interface chips across multiple suppliers. Each selection cycle takes weeks of cross-referencing datasheets, checking lifecycle status, and validating electrical compatibility. One wrong pick delays the entire program.",
    outcome:
      "With Oriv, the team searches across the global market with real constraints, shortlists candidates in minutes, and simulates sensor interface behavior before ordering evaluation boards. Selection cycles that took six weeks compress to days.",
  },
  {
    industry: "DEFENSE & AVIATION",
    headline: "MISSION-CRITICAL SYSTEMS WITH ZERO TOLERANCE FOR SURPRISES",
    scenario:
      "Defense programs require components with guaranteed long-term availability, radiation tolerance specs, and full traceability. Your engineers spend weeks verifying lifecycle status, sourcing mil-spec alternatives, and building audit trails by hand.",
    outcome:
      "Oriv indexes lifecycle and compliance data alongside electrical specs. Engineers filter for availability windows, export audit-ready documentation, and simulate system behavior under edge conditions. The compliance paper trail is built as a byproduct of the workflow, not as a separate task.",
  },
  {
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
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// USE CASES</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              YOUR <span className="text-accent">INDUSTRY.</span> YOUR PROBLEM.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {cases.map((cs, i) => (
              <button
                key={cs.industry}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 type-micro font-bold rounded-md transition-all duration-300 btn-press ${
                  i === active
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
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white border border-line rounded-lg p-8 md:p-10">
              <samp className="type-micro text-accent font-bold mb-4 block">SCENARIO</samp>
              <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.04em] mb-6">
                {c.headline}
              </h3>
              <p className="text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
                {c.scenario}
              </p>
            </div>

            <div className="bg-white border border-line rounded-lg p-8 md:p-10 flex flex-col justify-between">
              <div>
                <samp className="type-micro text-accent font-bold mb-4 block">WITH ORIV</samp>
                <p className="text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
                  {c.outcome}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block self-start bg-accent px-6 py-3 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,197,46,0.3)]"
              >
                SEE THIS IN ACTION
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
