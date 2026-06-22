"use client";

import { useState } from "react";
import { Reveal } from "@/lib/motion";

/**
 * What teams build on Oriv — capability tabs spanning the four pillars
 * (selection, simulation, prototype, instruments) plus cross-pillar work
 * (onboarding, compliance). Industries appear beneath each capability as
 * contexts the pattern shows up in.
 */

const cases = [
  {
    capability: "Component selection",
    pillar: "Selection",
    title: "Pick the right component from a global knowledge base.",
    body: "Oriv reads manufacturer datasheets and qualification records into one schema. Engineers narrow 200 candidates to a cited shortlist in minutes, with every parameter traceable to source.",
    metric: "200 candidates to 8 cited alternates in 90 seconds",
  },
  {
    capability: "Physics simulation",
    pillar: "Simulation",
    title: "Simulate behavior before ordering hardware.",
    body: "Physics models grounded in vendor data and bench history. Oriv generates a calibrated SPICE model from the captured record, with conditions preserved and prior validation runs cited.",
    metric: "Behavioral model: 3 days to 4 hours",
  },
  {
    capability: "Test bench setup",
    pillar: "Prototype",
    title: "Test rigs wired from prior projects, not from scratch.",
    body: "Oriv holds the wiring choices, integration patterns, and HIL configurations from past work. An agent generates the next rig from what already converged, with the failure history attached.",
    metric: "New HIL rig: 2 weeks to 1 morning",
  },
  {
    capability: "Live monitoring",
    pillar: "Instruments",
    title: "Deployed units, compared back to design intent.",
    body: "Field telemetry streams into the same record that held the design decision. Drift, anomalies, and failure modes show up against the original spec inside one shared view.",
    metric: "Field telemetry, compared continuously",
  },
  {
    capability: "Onboarding compression",
    pillar: "Cross-pillar",
    title: "Senior judgment, available the day someone new joins.",
    body: "The layer holds the reasoning a senior engineer carries in their head. The next person to take over inherits the prior decisions, the cited sources, and the trade-offs already settled.",
    metric: "Senior context handoff: weeks to days",
  },
  {
    capability: "Compliance audit",
    pillar: "Cross-pillar",
    title: "Every parameter cited back to source, ready for audit.",
    body: "Every regulated review demands traceability. Oriv keeps it as a first-class property of every record, with source citations attached the moment the decision is captured.",
    metric: "Audit prep: weeks to continuous",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section
      id="industries"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              What teams build on it.{" "}
              <span className="text-[var(--on-surface-variant)]">
                Across the lifecycle.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Six capabilities, one for each pillar plus the cross-pillar work
              that runs through all of them. The same layer powers each of
              them, from a global knowledge base shared across every record.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Capabilities of the knowledge layer"
            className="mb-10 flex flex-wrap gap-2 border-b border-[var(--border-subtle)] pb-6"
          >
            {cases.map((cc, i) => (
              <button
                key={cc.capability}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-[12.5px] font-medium tracking-[-0.005em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oriv-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] ${
                  i === active
                    ? "border-[var(--on-surface)] bg-[var(--on-surface)] text-[var(--surface-elevated)]"
                    : "border-[var(--border-subtle)] bg-[var(--surface)] text-[var(--on-surface-variant)] hover:border-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
                }`}
              >
                {cc.capability}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active panel — headline-left / body-right */}
        <Reveal delay={140} key={active}>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.3fr)] md:gap-16">
            <div>
              <p className="label-mono mb-4 text-[10.5px] tracking-[0.18em] text-[var(--on-surface)]">
                {c.pillar.toUpperCase()}
              </p>
              <h3 className="headline-xl text-[var(--on-surface)]">{c.title}</h3>
            </div>
            <div>
              <p className="mb-5 body-lg text-[var(--on-surface-variant)]">{c.body}</p>
              <div className="inline-flex items-baseline gap-2.5 rounded border border-[var(--oriv-yellow)]/35 bg-[var(--oriv-yellow)]/[0.07] px-3.5 py-2 font-mono text-[13.5px] font-medium text-[var(--oriv-yellow)]">
                <span aria-hidden className="inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-[var(--oriv-yellow)]" />
                {c.metric}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-12 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            <span className="label-mono mr-2 text-[10px] tracking-[0.18em] text-[var(--outline)]">
              NOTE
            </span>
            Oriv ships the knowledge layer. The applications above are built
            by the customers themselves, often with Cursor or Claude Code
            doing most of the typing. Names are redacted under NDA. The
            patterns are real.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
