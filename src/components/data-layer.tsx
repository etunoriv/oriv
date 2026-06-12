"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Data Layer (on /product).
 * Intro headline owns the 60/40 BOM claim in prose.
 * Below: a typographic spec-list of the four properties — reads like a contract.
 */

const primitives = [
  {
    title: "Canonical schema across vendors",
    body: "Vcc, VDD, \"Supply Voltage\", VS+ all collapse to the same canonical field. Public corpus and private layer alike.",
  },
  {
    title: "Unit-normalized values",
    body: "Every numeric value reduced to SI base units, dimensionally validated. mV, µA, kHz, F all converge. No silent unit drift.",
  },
  {
    title: "Condition tuples preserved",
    body: "\"100 mA at 25°C, 60 mA at 85°C\" extracts as a structured tuple, not a string. Operating conditions are first-class data.",
  },
  {
    title: "Per-field provenance",
    body: "Every record cites source page, table, and footnote. Auditable for ISO 26262, FDA, DMSMS, and ITAR workflows.",
  },
];

export default function DataLayer() {
  return (
    <section id="data-layer" className="relative bg-[var(--surface)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Public corpus plus your long tail.{" "}
              <span className="text-[var(--on-surface-variant)]">One schema.</span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Twenty years of indexed datasheets covered roughly 60% of every regulated
              BOM. Oriv ships the other 40% &mdash; your SCDs, MIL-PRF specs, and supplier
              quals &mdash; behind the same query interface as the public corpus.
            </p>
          </div>
        </Reveal>

        <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
          {primitives.map((p) => (
            <Item key={p.title}>
              <div className="grid grid-cols-1 items-baseline gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-10">
                <h3 className="headline-lg text-[var(--on-surface)]">{p.title}</h3>
                <p className="body-md text-[var(--on-surface-variant)]">{p.body}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
