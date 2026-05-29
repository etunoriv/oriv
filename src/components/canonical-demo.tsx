"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const vendorLines = [
  { label: "Vendor A", key: '"V_supply_max"', value: "5.5V @ 25°C" },
  { label: "Vendor B", key: '"VDD (max)"', value: "5500 mV" },
  { label: "Vendor C", key: '"Maximum Supply"', value: "5V5" },
  { label: "MIL-PRF SCD", key: '"Vcc, abs. max."', value: "+5.5 VDC, Tj=25°C" },
];

const outputLines = [
  { field: "supply_voltage_maximum", value: "5.5" },
  { field: "unit", value: "V (SI base)" },
  { field: "condition", value: "{ Tj: 25°C }" },
  { field: "provenance", value: "page_3 / table_2.4" },
  { field: "confidence", value: "0.997" },
];

const slideLeft = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/**
 * The canonical-record demo — INPUT vendor formats → ORIV canonical record.
 * Exposed two ways:
 *   - CanonicalDemoCard: bare card only, embeddable in any section
 *   - default export: wrapped in its own section (used on /product)
 */
export function CanonicalDemoCard() {
  return (
    <>
      <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.85, ease }}
          className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[0_30px_60px_-30px_rgba(8,9,10,0.12)]"
        >
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* Vendors */}
            <div className="border-b border-[var(--border-subtle)] px-6 py-7 lg:border-b-0 lg:border-r md:px-8">
              <p className="label-mono mb-5 text-[10px] tracking-[0.2em] text-[var(--on-surface-variant)]">
                INPUT · FOUR VENDOR FORMATS
              </p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
                className="space-y-1.5 font-mono text-[12.5px] leading-[1.85]"
              >
                {vendorLines.map((v, i) => (
                  <motion.div key={i} variants={slideLeft} className="flex flex-wrap items-baseline gap-x-2">
                    <span className="shrink-0 text-[#785a00]">[{v.label}]</span>
                    <span className="text-[var(--on-surface-variant)]">{v.key}</span>
                    <span className="text-[var(--outline)]">:</span>
                    <span className="text-[var(--on-surface)]">{v.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Output */}
            <div className="bg-[var(--oriv-yellow)]/4 px-6 py-7 md:px-8">
              <p className="label-mono mb-5 text-[10px] tracking-[0.2em] text-[#785a00]">
                ORIV · ONE CANONICAL RECORD
              </p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
                className="space-y-1.5 font-mono text-[12.5px] leading-[1.85]"
              >
                {outputLines.map((o, i) => (
                  <motion.div key={i} variants={slideRight} className="flex items-baseline gap-2">
                    <span className="min-w-[200px] text-[#785a00]">{o.field}</span>
                    <span className="text-[var(--outline)]">:</span>
                    <span className="text-[var(--on-surface)]">{o.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

    </>
  );
}

export default function CanonicalDemo() {
  return (
    <section className="relative bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <CanonicalDemoCard />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-8 max-w-[640px] body-md text-[var(--on-surface-variant)]"
        >
          Four vendors. Four ways to write the same supply-voltage spec. Oriv resolves
          them to one canonical field, with units validated, conditions preserved,
          and the source page cited for audit.
        </motion.p>
      </div>
    </section>
  );
}
