"use client";

import { motion } from "framer-motion";

const signals = [
  {
    id: "01",
    label: "DOMAIN",
    value: "EMBEDDED SYSTEMS",
    detail: "Founded by engineers who have lived the component selection problem firsthand. Not consultants who read about it.",
  },
  {
    id: "02",
    label: "FOCUS",
    value: "AUTOMOTIVE / DEFENSE / INDUSTRIAL",
    detail: "We build for teams where getting the wrong part is not an inconvenience. It is a program risk.",
  },
  {
    id: "03",
    label: "DATA",
    value: "2.8M+ COMPONENTS INDEXED",
    detail: "Real manufacturer datasheets. Structured, searchable, and traceable to the source document. Not scraped summaries.",
  },
  {
    id: "04",
    label: "APPROACH",
    value: "PILOT-FIRST",
    detail: "We prove value on your real components and real constraints before you commit. If it does not work, you walk away.",
  },
];

export default function Credibility() {
  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ WHO WE ARE ]</span>
          <span className="type-micro">WHY THIS TEAM. WHY NOW.</span>
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
            WE BUILT THIS
            <br />
            BECAUSE WE
            <br />
            <span className="text-accent">NEEDED</span> IT
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            Oriv was started by co-founders who spent years watching
            senior engineers burn weeks on work that should not require
            senior engineers. We are not solving a theoretical problem.
            We are solving the one we lived with.
          </p>
        </div>
      </div>

      {/* Signals grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid-dividers grid sm:grid-cols-2 lg:grid-cols-4"
      >
        {signals.map((s) => (
          <div key={s.id} className="p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <samp className="type-micro text-dim font-bold">{s.id}</samp>
                <samp className="type-micro text-accent font-bold">{s.label}</samp>
              </div>
              <hr className="border-line mb-4" />
              <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mb-3">
                {s.value}
              </h3>
              <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
                {s.detail}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
