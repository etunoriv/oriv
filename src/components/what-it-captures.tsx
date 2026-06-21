"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * What It Captures — four example records spanning the four pillars:
 * selection, simulation, prototyping, instruments. Each shows a real decision
 * or observation an engineering team made, with the why and the source.
 */

type Record = {
  label: string;
  pillar: string;
  decision: string;
  why: string;
  source: string;
  reuse: string;
};

const records: Record[] = [
  {
    label: "01",
    pillar: "Selection",
    decision: "20pF capacitor on V+ pin, not 47pF.",
    why: "Suppresses 60 MHz oscillation observed at Tj above 85°C in bench testing. Higher values damped the signal too aggressively.",
    source: "Design rev C, tbl 2.4 · Bench run_8f2a",
    reuse: "7 projects · 11 designs",
  },
  {
    label: "02",
    pillar: "Simulation",
    decision: "SPICE model derated 12% from vendor typical.",
    why: "Bench validation found 0.85 V/µs slew rate at Tj above 100°C, against vendor typical of 1.2. Model now matches measured behavior across temperature.",
    source: "Sim run_3f1c · Bench corr. 94%",
    reuse: "Used by 4 sims · 2 projects",
  },
  {
    label: "03",
    pillar: "Prototype",
    decision: "HIL bench wired through CAN-FD, not Ethernet.",
    why: "Production target uses CAN-FD for the sensor bus. Ethernet HIL passed unit tests but missed timing edge cases in 3 prior projects.",
    source: "Lessons-learned · proj_Helios-2",
    reuse: "4 projects · 6 rigs",
  },
  {
    label: "04",
    pillar: "Instruments",
    decision: "Field Vos drift threshold tightened to 0.5 mV.",
    why: "Telemetry from 47 deployed units showed 0.4 mV drift at 180 days. Earlier 1 mV threshold would have flagged 12 false positives.",
    source: "Field run_b2e9 · 47 units, 180 days",
    reuse: "2 projects · 1 active fleet",
  },
];

export default function WhatItCaptures() {
  return (
    <section
      id="what-it-captures"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Four pillars. One layer.{" "}
              <span className="text-[var(--on-surface-variant)]">
                Captured the same way.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Engineering teams make decisions across selection, simulation,
              prototyping, and live instruments. Oriv captures each one as a
              record, attaches the reasoning, and cites the source. Four
              examples below from the work teams already do.
            </p>
          </div>
        </Reveal>

        {/* Four knowledge records side-by-side */}
        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          step={0.08}
          delayChildren={0.05}
        >
          {records.map((r) => (
            <Item key={r.label}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
                {/* Card header */}
                <div className="border-b border-[var(--border-subtle)] px-5 py-4">
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="font-mono text-[10.5px] tracking-[0.05em] text-[var(--outline)]">
                      {r.label}
                    </span>
                    <span className="label-mono text-[9.5px] tracking-[0.18em] text-[var(--oriv-yellow)]">
                      {r.pillar.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[14.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[15px]">
                    {r.decision}
                  </p>
                </div>

                {/* Why */}
                <div className="flex-1 px-5 py-4">
                  <p className="label-mono mb-2 text-[9px] tracking-[0.2em] text-[var(--outline)]">
                    WHY
                  </p>
                  <p className="body-md text-[var(--on-surface-variant)]">
                    {r.why}
                  </p>
                </div>

                {/* Source + reuse footer */}
                <div className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] px-5 py-3">
                  <div className="mb-1.5">
                    <span className="label-mono mr-2 text-[8.5px] tracking-[0.2em] text-[var(--outline)]">
                      SOURCE
                    </span>
                    <span className="font-mono text-[10.5px] text-[var(--on-surface-variant)]">
                      {r.source}
                    </span>
                  </div>
                  <div>
                    <span className="label-mono mr-2 text-[8.5px] tracking-[0.2em] text-[var(--outline)]">
                      REUSED
                    </span>
                    <span className="font-mono text-[10.5px] text-[var(--on-surface)]">
                      {r.reuse}
                    </span>
                  </div>
                </div>
              </article>
            </Item>
          ))}
        </Stagger>

        <Reveal delay={220}>
          <p className="mt-10 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            Selection, simulation, prototype, instruments. Four kinds of work,
            captured the same way and stored in one schema. Cited back to
            source. Ready when an engineer hits a similar fork.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
