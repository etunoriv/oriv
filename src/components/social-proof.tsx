"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * SocialProof — quiet trust signal.
 * Framing claim + domain chips + "built for" role cards.
 * No badges, no fake testimonials. Holding pattern until customers ship.
 */

const domains = [
  "Aerospace & Defense",
  "Automotive",
  "MedTech",
  "Robotics",
  "Semiconductor",
];

const roles = [
  {
    title: "DMSMS Office",
    line: "Forty years of SCDs that nobody but you can query. Form-fit-function alternates by hand.",
  },
  {
    title: "Component Engineering",
    line: "Five candidates, five datasheets, five different ways to spec the same parameter. You build the spreadsheet.",
  },
  {
    title: "Hardware R&D",
    line: "The AI copilot returned a forum thread. You still need to verify against the qualified-supplier list.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-display text-[clamp(1.5rem,2.8vw,2rem)] font-medium leading-[1.22] tracking-[-0.02em] text-[var(--on-surface)]">
              Built for teams where a wrong parameter is{" "}
              <span className="text-[var(--on-surface-variant)]">
                a compliance event, not a typo.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {domains.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2.5 py-1 label-mono text-[10px] tracking-[0.16em] text-[var(--on-surface-variant)]"
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--oriv-yellow)]"
                />
                {d}
              </span>
            ))}
          </div>
        </Reveal>

        <Stagger
          className="mt-16 grid grid-cols-1 gap-4 border-t border-[var(--border-subtle)] pt-10 md:grid-cols-3"
          step={0.08}
          delayChildren={0.05}
        >
          {roles.map((r) => (
            <Item key={r.title}>
              <div className="h-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6">
                <p className="mb-3 text-[14.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                  {r.title}
                </p>
                <p className="body-md text-[var(--on-surface-variant)]">
                  {r.line}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
