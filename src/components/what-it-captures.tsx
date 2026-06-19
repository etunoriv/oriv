"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * What It Captures — the substance of the knowledge layer. Three example
 * records demonstrating the range: a component decision, a test/validation
 * choice, an architecture trade-off. Each shows what gets captured beyond
 * what a parametric data store would hold.
 */

type Record = {
  label: string;
  kind: string;
  decision: string;
  why: string;
  source: string;
  reuse: string;
};

const records: Record[] = [
  {
    label: "01",
    kind: "Component decision",
    decision: "20pF capacitor on V+ pin, not 47pF.",
    why: "Suppresses 60 MHz oscillation observed at Tj > 85°C in bench testing. Higher value damped the signal too aggressively.",
    source: "SCD-04, p.3, tbl 2.4 · Bench run_8f2a",
    reuse: "7 projects · 11 designs",
  },
  {
    label: "02",
    kind: "Test bench choice",
    decision: "HIL rig wired through CAN-FD, not Ethernet.",
    why: "Production target uses CAN-FD for sensor bus. Ethernet HIL passed unit tests but missed timing edge cases in 3 prior projects.",
    source: "Lessons-learned · proj_Helios-2",
    reuse: "4 projects · 6 rigs",
  },
  {
    label: "03",
    kind: "Architecture trade-off",
    decision: "Single MCU with watchdog, not dual-MCU redundant.",
    why: "ASIL-B target. Dual-MCU exceeded BOM cost ceiling. Watchdog + lockstep core meets diagnostic coverage requirement.",
    source: "Safety case §4.2 · ISO 26262 review",
    reuse: "2 projects · 3 designs",
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
              What the layer holds.{" "}
              <span className="text-[var(--on-surface-variant)]">
                The work that never makes it into the docs.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Senior engineers carry the weight of every decision their team
              has made &mdash; why this component over that, what broke last
              time, what conditions a design held under. The layer captures
              that work as records, with each one cited back to its source and
              ready for whoever needs it next.
            </p>
          </div>
        </Reveal>

        {/* Three knowledge records side-by-side */}
        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          step={0.1}
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
                      {r.kind.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[15.5px]">
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
            Three different kinds of decisions, all held in the same schema and
            cited back to source. Ready the next time an engineer on the team
            runs into a similar fork.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
