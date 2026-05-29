"use client";

import { Reveal } from "@/lib/motion";

/**
 * TrustStrip — scarcity + social-proof signal between Hero and Problem.
 * Shows design partner cohort status and claimed verticals.
 * Intentionally terse; conversion happens at the DesignPartner section below.
 */

const domains = [
  { label: "Aerospace & Defense", claimed: true },
  { label: "Automotive", claimed: true },
  { label: "MedTech", claimed: false },
  { label: "Robotics", claimed: false },
  { label: "Semiconductor / EDA", claimed: false },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-4">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal y={8}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Left: cohort signal */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[var(--oriv-yellow)]/50" />
                <span className="relative h-2 w-2 rounded-full bg-[var(--oriv-yellow)]" />
              </span>
              <span className="label-mono text-[10px] tracking-[0.2em] text-[var(--on-surface)]">
                DESIGN PARTNER COHORT · Q3 2026 · 3 OF 5 SPOTS REMAINING
              </span>
            </div>

            {/* Divider */}
            <span className="hidden h-3 w-px bg-[var(--border-subtle)] md:block" aria-hidden />

            {/* Domain chips */}
            <div className="flex flex-wrap items-center gap-2">
              {domains.map((d) => (
                <span
                  key={d.label}
                  className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 label-mono text-[9.5px] tracking-[0.14em] ${
                    d.claimed
                      ? "bg-[var(--surface-container)] text-[var(--on-surface-variant)] line-through decoration-white/20"
                      : "border border-[var(--oriv-yellow)]/25 bg-[var(--oriv-yellow)]/5 text-[var(--oriv-yellow)]"
                  }`}
                >
                  {d.claimed ? (
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--outline)]" />
                  ) : (
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--oriv-yellow)]" />
                  )}
                  {d.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
