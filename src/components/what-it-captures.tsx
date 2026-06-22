"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * What It Captures — three example records demonstrating the kinds of
 * engineering knowledge the layer holds. Each shows a real decision a team
 * has made, the reasoning behind it, the cited source, and where it has
 * been reused. No pillar tags; the layer fits whatever workflow the team
 * already has.
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
    why: "Suppresses 60 MHz oscillation observed at Tj above 85°C in bench testing. Higher values damped the signal too aggressively.",
    source: "Design rev C, tbl 2.4 · Bench run_8f2a",
    reuse: "7 projects · 11 designs",
  },
  {
    label: "02",
    kind: "Architecture trade-off",
    decision: "HIL rig wired through CAN-FD, not Ethernet.",
    why: "Production target uses CAN-FD for the sensor bus. Ethernet HIL passed unit tests but missed timing edge cases in three prior projects.",
    source: "Lessons-learned · proj_Helios-2",
    reuse: "4 projects · 6 rigs",
  },
  {
    label: "03",
    kind: "Field observation",
    decision: "Vos drift threshold tightened to 0.5 mV.",
    why: "Field telemetry from 47 deployed units showed 0.4 mV drift at 180 days. The earlier 1 mV threshold would have flagged 12 false positives.",
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
              What the layer holds.{" "}
              <span className="text-[var(--on-surface-variant)]">
                The work that never makes it into the docs.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Engineering teams make hundreds of decisions a project. Most
              of them never make it into the docs. Oriv captures the
              reasoning, the trade-offs, and the source citations for each
              one, so the layer holds what would otherwise live in one
              senior engineer&rsquo;s head.
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
            Three different kinds of decisions, all held in the same schema
            and cited back to source. Ready the next time an engineer on the
            team runs into a similar fork in the work they&rsquo;re already
            doing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
