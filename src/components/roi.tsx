"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    id: "01",
    before: "2 ENGINEERS",
    after: "1 ENGINEER",
    label: "HEADCOUNT PER SELECTION CYCLE",
    detail: "Complex component selection currently requires two senior engineers working in parallel. Oriv reduces that to one.",
  },
  {
    id: "02",
    before: "~6 WEEKS",
    after: "~2 WEEKS",
    label: "TIME PER COMPLEX COMPONENT",
    detail: "From requirements decomposition through shortlisting. The manual datasheet-and-spreadsheet process compressed into a structured workflow.",
  },
  {
    id: "03",
    before: "~12 ENG-WEEKS",
    after: "~2 ENG-WEEKS",
    label: "TOTAL ENGINEERING EFFORT",
    detail: "Per complex selection cycle. At $200-400K loaded annual cost per senior engineer, the math is hard to argue with.",
  },
];

export default function Roi() {
  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ THE BUSINESS CASE ]</span>
          <span className="type-micro">FOR THE PERSON SIGNING THE CONTRACT</span>
        </div>
      </div>

      {/* Title */}
      <div className="border-b border-line px-6 py-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="type-macro text-foreground"
            style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
          >
            THE MATH
            <br />
            <span className="text-accent">WORKS.</span>
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            Senior engineers cost $200-400K per year, loaded. A single
            complex selection cycle currently burns two of them for six
            weeks. That is not a tools problem. That is a business problem.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid-dividers grid lg:grid-cols-3"
      >
        {metrics.map((m) => (
          <div key={m.id} className="p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <samp className="type-micro text-dim font-bold block mb-4">{m.id}</samp>
              <hr className="border-line mb-6" />

              <div className="flex items-baseline gap-3 mb-2">
                <samp className="type-micro text-muted line-through">{m.before}</samp>
                <samp className="type-micro text-dim">→</samp>
                <samp className="type-micro text-accent font-bold glow-accent text-sm">{m.after}</samp>
              </div>

              <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mt-4 mb-4">
                {m.label}
              </h3>

              <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
                {m.detail}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom callout */}
      <div className="border-t border-line px-6 py-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-l-2 border-accent pl-4">
            <p className="font-mono text-muted" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
              These are baseline numbers from real engineering workflows. Your
              actual savings depend on component complexity, team cost, and how
              many selection cycles you run per year. We will build a custom ROI
              model during the pilot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
