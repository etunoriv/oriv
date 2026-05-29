"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Six primitives of the Oriv data layer — bento-style grid on /product.
 * Extends the 4-property prose list in DataLayer with two more operational
 * guarantees: tenant isolation and the query interface.
 */

const primitives = [
  {
    figure: "P.1",
    title: "Canonical schema",
    body: "Vcc, VDD, \"Supply Voltage\", VS+. All collapse to the same canonical field. Across vendors, across product lines, across public and private.",
    accent: false,
  },
  {
    figure: "P.2",
    title: "Unit normalization",
    body: "Every numeric value reduced to SI base units, dimensionally validated. mV, µA, kHz, nF all converge at ingest. Silent unit drift is impossible.",
    accent: false,
  },
  {
    figure: "P.3",
    title: "Condition tuples",
    body: "\"100 mA at 25°C, 60 mA at 85°C\" extracts as a structured tuple. Not a string. Operating conditions become first-class data.",
    accent: false,
  },
  {
    figure: "P.4",
    title: "Per-field provenance",
    body: "Every field cites its source page, table, and extraction run. Auditable for ISO 26262 ASIL evidence, FDA 21 CFR Part 11, DMSMS, and ITAR.",
    accent: false,
  },
  {
    figure: "P.5",
    title: "Tenant isolation",
    body: "Your private SCDs, MIL-PRF specs, and supplier quals are stored in your tenant only. They never inform another tenant's results. Ever.",
    accent: true,
  },
  {
    figure: "P.6",
    title: "Universal query interface",
    body: "REST, GraphQL, SQL, MQL, SPARQL, MCP. The same canonical store behind every query shape. So EDA, PLM, ERP, and AI agents all read the same record.",
    accent: true,
  },
];

export default function ProductPrimitives() {
  return (
    <section className="relative bg-[var(--surface-container-low)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Six properties.{" "}
              <span className="text-[var(--on-surface-variant)]">One canonical store.</span>
            </h2>
            <p className="body-lg max-w-[640px] text-[var(--on-surface-variant)]">
              A real parametric store has guaranteed contracts at every layer. From
              extraction through storage through query. Each primitive below is
              a written guarantee, not a feature flag.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primitives.map((p) => (
              <div
                key={p.figure}
                className={`rounded-lg border p-6 transition-colors duration-200 ${
                  p.accent
                    ? "border-[var(--oriv-yellow)]/25 bg-[var(--oriv-yellow)]/5"
                    : "border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
                }`}
              >
                <p
                  className={`label-mono mb-3 text-[9.5px] tracking-[0.2em] ${
                    p.accent ? "text-[#785a00]" : "text-[var(--on-surface-variant)]"
                  }`}
                >
                  {p.figure}
                </p>
                <h3 className="mb-2 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[var(--on-surface)]">
                  {p.title}
                </h3>
                <p className="body-md text-[var(--on-surface-variant)]">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Architecture note */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-6 py-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <p className="label-mono text-[10px] tracking-[0.2em] text-[var(--on-surface-variant)]">
                TWO-LAYER ARCHITECTURE
              </p>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[12px]">
                <span className="text-[var(--on-surface-variant)]">Public corpus (TI · Analog Devices · STMicro · Infineon · +800 vendors)</span>
                <span className="text-[var(--outline)]">+</span>
                <span className="text-[var(--oriv-yellow)]">Your private tail (SCDs · MIL-PRF · supplier quals · approved vendor lists)</span>
                <span className="text-[var(--outline)]">=</span>
                <span className="font-medium text-[var(--on-surface)]">One canonical schema</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
