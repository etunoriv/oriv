"use client";

import { Reveal } from "@/lib/motion";

/**
 * Six primitives — editorial numbered spec list with code-shape data chips.
 * Replaces the 3-col 6-card AI-slop grid. Same pattern as IntegrationGrid +
 * Trust Commitments: numbered hairline rows, title-left + body-mid + shape-
 * chip-right. The chip is the visual asset — concrete schema evidence, not
 * a marketing badge.
 */

type Primitive = {
  title: string;
  body: string;
  shape: string;
};

const primitives: Primitive[] = [
  {
    title: "Canonical schema across vendors",
    body: 'Vcc, VDD, "Supply Voltage", VS+. All collapse to the same canonical field. Across vendors, product lines, and public/private layers.',
    shape: '{ supply_voltage_max: 5.5, unit: "V" }',
  },
  {
    title: "Unit normalization",
    body: "Every numeric value reduced to SI base units, dimensionally validated. mV, µA, kHz, nF all converge at ingest. Silent unit drift is impossible.",
    shape: '"5500 mV" → 5.5 V (SI base)',
  },
  {
    title: "Condition tuples",
    body: '"100 mA at 25°C, 60 mA at 85°C" extracts as a structured tuple. Not a string. Operating conditions become first-class data.',
    shape: "{ Tj: 25°C, I: 100 mA }",
  },
  {
    title: "Per-field provenance",
    body: "Every field cites its source page, table, and extraction run. Auditable for ISO 26262 ASIL evidence, FDA 21 CFR Part 11, DMSMS, and ITAR.",
    shape: '{ src: "p.3 / tbl 2.4", run: 0.997 }',
  },
  {
    title: "Tenant isolation",
    body: "Your private SCDs, MIL-PRF specs, and supplier quals are stored in your tenant only. They never inform another tenant's results. Ever.",
    shape: 'tenant: "your-org" · scope: private',
  },
  {
    title: "Universal query interface",
    body: "REST, GraphQL, SQL, MQL, SPARQL, MCP. The same canonical store behind every query shape. So EDA, PLM, ERP, and AI agents read the same record.",
    shape: "REST · GQL · SQL · MQL · SPARQL · MCP",
  },
];

export default function ProductPrimitives() {
  return (
    <section className="relative bg-[var(--surface-container-low)] py-24 md:py-32">
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

        <Reveal delay={120}>
          <ul className="border-t border-[var(--border-subtle)]">
            {primitives.map((p, i) => (
              <li
                key={p.title}
                className="group relative border-b border-[var(--border-subtle)]"
              >
                <div className="grid grid-cols-[2.75rem_minmax(0,_1fr)] items-baseline gap-4 px-1 py-6 transition-colors duration-200 group-hover:bg-[var(--surface-elevated)] md:grid-cols-[3.5rem_minmax(0,_0.9fr)_minmax(0,_1.4fr)_minmax(0,_0.95fr)] md:gap-8 md:px-3 md:py-7">
                  <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17px]">
                    {p.title}
                  </h3>
                  <p className="hidden text-[13.5px] leading-[1.6] text-[var(--on-surface-variant)] md:block">
                    {p.body}
                  </p>
                  <code className="hidden truncate font-mono text-[11.5px] tracking-tight text-[var(--on-surface-variant)] md:block md:text-right md:text-[12px]">
                    {p.shape}
                  </code>
                </div>
                {/* Mobile fallback — body + shape break below the title on narrow widths */}
                <div className="ml-[2.75rem] -mt-2 mb-5 pr-1 md:hidden">
                  <p className="text-[13px] leading-[1.55] text-[var(--on-surface-variant)]">
                    {p.body}
                  </p>
                  <code className="mt-2 inline-block rounded bg-[var(--surface-elevated)] px-2 py-1 font-mono text-[11px] text-[var(--on-surface-variant)]">
                    {p.shape}
                  </code>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            The store sits behind two layers in parallel &mdash; the public corpus
            (TI, Analog Devices, STMicro, Infineon, +800 vendors) and your private
            tail (SCDs, MIL-PRF, supplier quals, approved vendor lists). One
            canonical schema queries both.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
