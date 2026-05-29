"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, Stagger, Item } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Data Layer (on /how) — Linear-disciplined.
 *
 * Kills the previous 6-card bento. Replaces with:
 *   - BOM wedge (one visual)
 *   - A typographic spec-list of the four properties — reads like a contract
 *
 * Each primitive is a thin row with its own figure number, not a card.
 */

const primitives = [
  {
    title: "Canonical schema across vendors",
    body: "Vcc, VDD, \"Supply Voltage\", VS+ all collapse to the same canonical field. Public corpus and private layer alike.",
  },
  {
    title: "Unit-normalized values",
    body: "Every numeric value reduced to SI base units, dimensionally validated. mV, µA, kHz, F all converge. No silent unit drift.",
  },
  {
    title: "Condition tuples preserved",
    body: "\"100 mA at 25°C, 60 mA at 85°C\" extracts as a structured tuple, not a string. Operating conditions are first-class data.",
  },
  {
    title: "Per-field provenance",
    body: "Every record cites source page, table, and footnote. Auditable for ISO 26262, FDA, DMSMS, and ITAR workflows.",
  },
];

const competitors = ["SiliconExpert", "Z2Data", "Octopart", "Findchips", "Accuris"];

export default function DataLayer() {
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(barRef, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <section id="data-layer" className="relative bg-[var(--surface)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* The wedge: BOM coverage */}
        <Reveal>
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] md:gap-16 md:items-end">
            <div>
              <p className="label-mono mb-3 text-[10px] tracking-[0.2em] text-[var(--on-surface)]">
                THE WEDGE
              </p>
              <h2 className="headline-xl text-[var(--on-surface)]">
                Public corpus plus your long tail.{" "}
                <span className="text-[var(--on-surface-variant)]">One schema.</span>
              </h2>
            </div>
            <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
              The public-corpus vendors have indexed datasheets for twenty years.
              None of them ingest the SCDs your team wrestles with daily. So we
              built Oriv to ship both layers behind one query interface.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div ref={barRef} className="mb-20 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <div className="px-6 py-6 md:px-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="label-mono text-[10.5px] tracking-[0.18em] text-[var(--on-surface-variant)]">
                  TYPICAL BOM COVERAGE · REGULATED INDUSTRY
                </span>
                <span className="hidden label-mono text-[10px] tracking-[0.16em] text-[var(--outline)] sm:block">
                  ~60% PUBLIC · ~40% YOUR TAIL
                </span>
              </div>
              <div className="relative h-10 overflow-hidden rounded-md bg-[var(--surface-container)]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 1.2, ease, delay: 0.2 }}
                  className="absolute inset-y-0 left-0 bg-[var(--structural-gray)]"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "40%" } : { width: 0 }}
                  transition={{ duration: 1.2, ease, delay: 0.5 }}
                  className="absolute inset-y-0 right-0 bg-[var(--oriv-yellow)]"
                />
              </div>
              <p className="mt-4 label-mono text-[10px] tracking-[0.18em] text-[var(--outline)]">
                COMPETITORS COVER PUBLIC. YOUR TAIL IS WHERE THE WORK LIVES.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Four primitives as a typographic spec list */}
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Four properties{" "}
              <span className="text-[var(--on-surface-variant)]">make it real.</span>
            </h2>
            <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
              A real parametric store. Canonical schemas. Validated units. Preserved
              conditions. Per-field provenance.
            </p>
          </div>
        </Reveal>

        <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
          {primitives.map((p) => (
            <Item key={p.title}>
              <div className="grid grid-cols-1 items-baseline gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-10">
                <h3 className="headline-lg text-[var(--on-surface)]">{p.title}</h3>
                <p className="body-md text-[var(--on-surface-variant)]">{p.body}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
