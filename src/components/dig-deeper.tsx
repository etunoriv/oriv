"use client";

import Link from "next/link";
import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Dig Deeper — Linear-style index of sub-pages.
 *
 * Replaces the previous 3-card layout with a typographic list. Reads like
 * a table of contents in a technical paper. Each row is a thin click target
 * with a figure number, title, and one-line teaser.
 */

const rows = [
  {
    href: "/how",
    title: "How it works",
    teaser: "Six properties of a real data layer. Unit normalization, preserved condition tuples, per-field provenance.",
  },
  {
    href: "/built-on",
    title: "Built on Oriv",
    teaser: "Patterns we hear in your industry. A&D, auto, MedTech, robotics, semi.",
  },
  {
    href: "/trust",
    title: "Trust posture",
    teaser: "ITAR, IL5, ISO 26262, FDA. Tenant isolation by default. On-prem and air-gapped available.",
  },
];

export default function DigDeeper() {
  return (
    <section className="relative bg-[var(--surface)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Three pages of depth{" "}
              <span className="text-[var(--on-surface-variant)]">for the curious.</span>
            </h2>
            <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
              The landing converts. Each sub-page does one job — the technical depth,
              the industry patterns, the compliance posture.
            </p>
          </div>
        </Reveal>

        <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
          {rows.map((r) => (
            <Item key={r.href}>
              <Link
                href={r.href}
                className="group flex items-baseline justify-between gap-6 border-b border-[var(--border-subtle)] py-8 transition-colors duration-200 hover:bg-[var(--surface-container-low)]"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="headline-lg mb-2 text-[var(--on-surface)] transition-colors group-hover:text-[var(--on-surface)]">
                    {r.title}
                  </h3>
                  <p className="max-w-[640px] body-md text-[var(--on-surface-variant)]">
                    {r.teaser}
                  </p>
                </div>
                <span className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--surface)] transition-all group-hover:border-[var(--oriv-yellow)] group-hover:bg-[var(--oriv-yellow)]">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
