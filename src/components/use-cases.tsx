"use client";

import { useState } from "react";
import { Reveal } from "@/lib/motion";

/**
 * Capability surfaces — what the knowledge layer enables for engineering
 * teams, organized by capability (not by industry). Industries appear beneath
 * each capability as examples of where the pattern shows up.
 */

const cases = [
  {
    capability: "Decision recall",
    title: "Every past decision, ready when the next one looks the same.",
    body: "The layer surfaces the last decision the moment the next one looks like it. The reasoning, the engineer who made it, the conditions it held under — all queryable from any tool in the stack.",
    metric: "DMSMS investigation: 6 weeks → 1 day",
    industries: ["A&D · DMSMS", "Automotive · sourcing", "Semiconductor · qual"],
  },
  {
    capability: "AI grounding",
    title: "AI agents that reason like the senior engineer in your team.",
    body: "The same LLM your team already uses gets the layer underneath it. Now when it suggests an alternate component, it cites the SCD, the bench measurement, and the prior project where the trade-off was already settled.",
    metric: "200 candidates → 8 cited alternates in 90s",
    industries: ["Hardware R&D", "MedTech · component selection", "Energy · sourcing"],
  },
  {
    capability: "Workflow generation",
    title: "Test rigs, simulations, and tooling that come pre-wired.",
    body: "The layer holds prior wiring choices, simulation setups, and integration patterns. An AI agent generates the next rig, the next model, the next glue script from what already worked — not from a blank file.",
    metric: "New HIL rig: 2 weeks → 1 morning",
    industries: ["Avionics · test", "Robotics · prototyping", "Manufacturing · automation"],
  },
  {
    capability: "Cross-vendor comparison",
    title: "Five candidates at the same operating point, in one query.",
    body: "Five datasheets specify the same parameter five different ways. The layer normalizes them — units, conditions, source — so comparison stops being a spreadsheet exercise and starts being a query.",
    metric: "Cross-vendor comparison: half a day → 30 seconds",
    industries: ["Component engineering", "Semiconductor · selection", "MedTech · sourcing"],
  },
  {
    capability: "Onboarding compression",
    title: "Senior judgment, available the day someone new joins.",
    body: "The layer holds the reasoning a senior engineer carries in their head. The next person to take over inherits all of it — the prior decisions, the cited sources, the trade-offs already settled — ready to read on day one.",
    metric: "Senior context handoff: weeks → days",
    industries: ["Any team replacing a senior engineer", "Acquisitions", "Cross-site project transfers"],
  },
  {
    capability: "Compliance audit",
    title: "Every parameter cited back to source, ready for audit.",
    body: "ISO 26262, FDA 21 CFR Part 11, DMSMS, ITAR — every regulated framework demands traceability. The layer keeps it as a first-class property of every record, not an afterthought.",
    metric: "Audit prep: weeks → continuous",
    industries: ["MedTech · FDA", "Automotive · ASIL", "A&D · ITAR / DMSMS"],
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
                Six capabilities. Every industry.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              The same layer powers different work across industries. Decision
              recall, AI grounding, workflow generation, comparison, onboarding,
              and audit &mdash; the capabilities are common; the industries are
              the contexts they show up in.
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
                {c.capability.toUpperCase()}
              </p>
              <h3 className="headline-xl text-[var(--on-surface)]">{c.title}</h3>
            </div>
            <div>
              <p className="mb-5 body-lg text-[var(--on-surface-variant)]">{c.body}</p>
              <div className="mb-5 inline-flex items-baseline gap-2.5 rounded border border-[var(--oriv-yellow)]/35 bg-[var(--oriv-yellow)]/[0.07] px-3.5 py-2 font-mono text-[13.5px] font-medium text-[var(--oriv-yellow)]">
                <span aria-hidden className="inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-[var(--oriv-yellow)]" />
                {c.metric}
              </div>
              <div className="flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-5">
                <span className="label-mono mr-1 self-center text-[9.5px] tracking-[0.18em] text-[var(--outline)]">
                  SHOWS UP IN
                </span>
                {c.industries.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-12 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            <span className="label-mono mr-2 text-[10px] tracking-[0.18em] text-[var(--outline)]">
              NOTE
            </span>
            Oriv ships the knowledge layer. The applications above are built by
            the customers themselves, often with Cursor or Claude Code doing
            most of the typing. Names are redacted under NDA, but the patterns
            are real.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
