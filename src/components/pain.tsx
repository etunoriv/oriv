"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Pain — three structural reasons the component-data gap exists.
 * Adds a small visceral diagram above the prose: one datasheet, four tools,
 * the same field extracted four times.
 */

const pains = [
  {
    heading: "Every tool extracts its own copy.",
    body: "EDA pulls parameters into its library on one cadence. PLM updates the BOM on another. ERP doesn't see either until release. Nothing agrees. The engineer in the middle reconciles by hand.",
  },
  {
    heading: "AI agents are guessing.",
    body: "Copilots search the web because there's no parametric store to query. They return product pages and forum threads instead of cited fields. In regulated work, an uncited parameter isn't an answer. It's a liability.",
  },
  {
    heading: "Your hardest data lives outside every public corpus.",
    body: "SCDs, MIL-PRF specs, and supplier qualifications make up the 40% of your BOM that carries the compliance weight. They sit in private PDFs and shared drives. Nobody indexes them. The work falls to your senior engineers.",
  },
];

const tools = ["EDA", "PLM", "ERP", "AI"];

export default function Pain() {
  return (
    <section
      id="pain"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              The gap is structural.{" "}
              <span className="text-[var(--on-surface-variant)]">
                No new tool fixes it.
              </span>
            </h2>
            <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
              The same field, extracted by every tool that needs it, on its own
              schedule. Three reasons it stays that way.
            </p>
          </div>
        </Reveal>

        {/* Visceral diagram: one datasheet, four tools, same field extracted four times */}
        <Reveal delay={80}>
          <DuplicateExtractionDiagram />
        </Reveal>

        <Stagger
          className="mt-20 border-t border-[var(--border-subtle)]"
          step={0.09}
          delayChildren={0.05}
        >
          {pains.map((p) => (
            <Item key={p.heading}>
              <div className="grid grid-cols-1 items-baseline gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-12">
                <h3 className="headline-sm text-[var(--on-surface)]">
                  {p.heading}
                </h3>
                <p className="body-md text-[var(--on-surface-variant)]">
                  {p.body}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function DuplicateExtractionDiagram() {
  return (
    <div className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-container-low)] px-6 py-8 md:px-10 md:py-10">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[200px_40px_1fr] md:gap-8">
        {/* Datasheet card */}
        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="label-mono text-[9px] tracking-[0.18em] text-[var(--outline)]">
              PDF · 42 PAGES
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[var(--oriv-yellow)]"
            />
          </div>
          <p className="mb-1 font-mono text-[11.5px] text-[var(--on-surface)]">
            LMV321 datasheet
          </p>
          <p className="font-mono text-[10.5px] text-[var(--on-surface-variant)]">
            Texas Instruments · Rev D
          </p>
          <div className="mt-3 space-y-1">
            <div className="h-1 w-full rounded bg-[var(--surface-container)]" />
            <div className="h-1 w-[78%] rounded bg-[var(--surface-container)]" />
            <div className="h-1 w-[88%] rounded bg-[var(--surface-container)]" />
          </div>
        </div>

        {/* Fan-out arrows */}
        <div className="flex items-center justify-center md:justify-start">
          <svg
            width="44"
            height="160"
            viewBox="0 0 44 160"
            className="hidden md:block"
          >
            {[20, 60, 100, 140].map((y) => (
              <path
                key={y}
                d={`M 0 80 C 14 80, 24 ${y}, 44 ${y}`}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
          <svg
            width="180"
            height="14"
            viewBox="0 0 180 14"
            className="md:hidden"
          >
            <path
              d="M 0 7 H 180"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Four tool boxes */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {tools.map((t) => (
            <div
              key={t}
              className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-3"
            >
              <p className="label-mono mb-1.5 text-[9px] tracking-[0.18em] text-[var(--on-surface-variant)]">
                {t}
              </p>
              <p className="font-mono text-[11px] text-[var(--on-surface)]">
                V_supply_max
              </p>
              <p className="font-mono text-[10.5px] text-[var(--on-surface-variant)]">
                5.5 V
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
