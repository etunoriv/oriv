"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Institutional Case — the second-buyer section. Speaks to engineering leads,
 * VPs, and acquirers about why captured engineering knowledge belongs on the
 * balance sheet. The CTO's framing: implicit knowledge becomes IP, valued at
 * acquisition, retained when senior engineers leave.
 */

const facts = [
  {
    label: "01",
    claim: "The engineering experience your senior people carry is the actual asset.",
    body: "Decades of decisions, trade-offs, and reasoning live in the heads of a handful of senior engineers on every team. That's the engineering IP your company has, and most of it has never been captured anywhere durable.",
  },
  {
    label: "02",
    claim: "When a senior engineer leaves, decades of decisions go with them.",
    body: "The average tenure of a principal engineer is shorter than the lifetime of a single regulated product. Every departure is a write-down of accumulated knowledge that the next project will have to re-earn from scratch.",
  },
  {
    label: "03",
    claim: "Captured knowledge keeps compounding across every project after it.",
    body: "Each new project starts with the decisions, citations, and reuse history of the last one. The layer holds what worked, so the engineer who picks up the next design doesn't start from zero.",
  },
  {
    label: "04",
    claim: "It earns a line on the balance sheet, next to the patents.",
    body: "Captured engineering knowledge sits alongside patents as a category of IP. It gets valued at acquisition, retained when senior people transition out, and stays in your tenant for as long as you want it.",
  },
];

export default function InstitutionalCase() {
  return (
    <section
      id="institutional-case"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              The engineering knowledge in your team is real IP.{" "}
              <span className="text-[var(--on-surface-variant)]">
                Capture it before it walks out.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Patents cover the artifact and trade secrets cover the formula,
              but the decisions and reasoning that took your senior engineers
              years to accumulate &mdash; the most valuable engineering IP a
              company actually owns &mdash; have had nowhere to live until now.
            </p>
          </div>
        </Reveal>

        {/* Editorial numbered row index */}
        <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
          {facts.map((f) => (
            <Item key={f.label}>
              <div className="grid grid-cols-[2.75rem_minmax(0,_1fr)] items-baseline gap-4 border-b border-[var(--border-subtle)] py-7 transition-colors duration-200 hover:bg-[var(--surface-elevated)] md:grid-cols-[3.5rem_minmax(0,_0.9fr)_minmax(0,_1.4fr)] md:gap-10 md:px-3">
                <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)]">
                  {f.label}
                </span>
                <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17.5px]">
                  {f.claim}
                </h3>
                <p className="body-md text-[var(--on-surface-variant)]">
                  {f.body}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal delay={220}>
          <p className="mt-10 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            Captured engineering knowledge isn&rsquo;t a productivity tool;
            it&rsquo;s the IP audit most companies still owe themselves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
