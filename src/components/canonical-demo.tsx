"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Terminal-style API response. A real query at the top; the resolved canonical
 * record below as JSON. The fact that four vendors collapse to one record is
 * implicit in the response shape, not labeled. No marketing chrome.
 */
export function CanonicalDemoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.85, ease }}
      className="overflow-hidden rounded-[12px] border border-[var(--border-subtle)] bg-[#0c0d0f] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="label-mono text-[9.5px] tracking-[0.18em] text-white/35">
          oriv &middot; query
        </div>
        <div className="h-3 w-12" />
      </div>

      {/* Query line */}
      <div className="border-b border-white/[0.05] px-5 py-4 md:px-7">
        <div className="font-mono text-[12.5px] leading-[1.7] md:text-[13px]">
          <span className="text-[#FFC52E]">oriv&rsquo;&gt;</span>{" "}
          <span className="text-white/55">SELECT</span>{" "}
          <span className="text-white/85">supply_voltage_maximum, condition, provenance</span>
          <br />
          <span className="ml-12 text-white/55">FROM</span>{" "}
          <span className="text-white/85">op_amps</span>
          <br />
          <span className="ml-12 text-white/55">WHERE</span>{" "}
          <span className="text-white/85">vendor IN (&lsquo;TI&rsquo;, &lsquo;ADI&rsquo;, &lsquo;ST&rsquo;, &lsquo;MIL-PRF&rsquo;)</span>
          <br />
          <span className="ml-12 text-white/55">AND</span>{" "}
          <span className="text-white/85">part_number = &lsquo;LMV321&rsquo;;</span>
        </div>
      </div>

      {/* JSON response */}
      <div className="px-5 py-5 md:px-7 md:py-6">
        <div className="mb-3 flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{
              background: "#7CDC9E",
              boxShadow: "0 0 8px rgba(124,220,158,0.6)",
            }}
          />
          <span className="label-mono text-[10px] tracking-[0.18em] text-white/45">
            200 OK &middot; 1 record &middot; 41 ms
          </span>
        </div>
        <pre className="overflow-x-auto font-mono text-[12px] leading-[1.85] text-white/85 md:text-[12.5px]">
          <code>
{`{
  "part_number": "LMV321",
  "supply_voltage_maximum": {
    "value": 5.5,
    "unit": "V",
    "dimension": "kg·m²·s⁻³·A⁻¹"
  },
  "condition": { "Tj": "25°C" },
  "provenance": {
    "vendors_consolidated": ["TI", "ADI", "ST", "MIL-PRF"],
    "source": "p.3 / table 2.4",
    "extracted_at": "2026-05-12",
    "confidence": 0.997
  }
}`}
          </code>
        </pre>
      </div>
    </motion.div>
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
          Four vendors each spec supply voltage differently. Oriv resolves them to one
          canonical field, with units validated, conditions preserved, and source pages
          cited for audit.
        </motion.p>
      </div>
    </section>
  );
}
