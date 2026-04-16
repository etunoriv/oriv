"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const problems = [
  {
    id: "01",
    title: "SELECTION EATS YOUR BEST ENGINEERS",
    description:
      "Component selection requires senior experience. The kind of experience that costs $200-400K per year, loaded. And right now, that experience is being spent opening PDFs and copying specs into spreadsheets.",
    detail:
      "A single complex selection cycle takes two engineers roughly six weeks. That is not a process. That is a workaround that became permanent because nobody had a better option.",
  },
  {
    id: "02",
    title: "THE WRONG PART KILLS THE PROGRAM",
    description:
      "When a selected component does not perform as expected, the project stalls. When it goes obsolete mid-prototype, the timeline resets. These are not edge cases. They happen constantly.",
    detail:
      "Every selection decision carries downstream risk: rework, redesign, re-procurement. And since most of these decisions are made from fragmented data across vendor sites, the error rate is built into the process.",
  },
  {
    id: "03",
    title: "PROTOTYPES BURN TIME AND BUDGET",
    description:
      "Without simulation, the only way to validate a design is to build it. Each prototype spin costs weeks in lead time and thousands in fabrication. A single revision can push a launch by a quarter.",
    detail:
      "Teams that skip simulation are not saving time. They are front-loading the cost of being wrong onto physical hardware. The math never works in their favor.",
  },
  {
    id: "04",
    title: "HEADCOUNT PRESSURE IS REAL",
    description:
      "Your team is under pressure to ship faster with fewer people. But the selection and validation process does not scale with headcount. It scales with experience, and experience is expensive.",
    detail:
      "NPI timelines are getting shorter. Budgets are getting tighter. And engineering leadership is being asked to do more with less. The bottleneck is not talent. The bottleneck is the manual work that talent is stuck doing.",
  },
];

function ProblemCard({ id, title, description, detail }: typeof problems[number]) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <samp className="type-micro text-accent font-bold glow-accent">{id}</samp>
        </div>
        <hr className="border-line mb-6" />
        <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mb-4">
          {title}
        </h3>
        <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
          {description}
        </p>
        {expanded && (
          <p className="mt-4 font-mono text-muted/70 leading-relaxed text-xs tracking-wide border-l-2 border-accent pl-3">
            {detail}
          </p>
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 pt-4 border-t border-line text-left group focus-visible:outline-2 focus-visible:outline-accent"
        aria-expanded={expanded}
      >
        <samp className="type-micro text-dim group-hover:text-muted transition-colors">
          {expanded ? "COLLAPSE" : "+ READ MORE"}
        </samp>
      </button>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ THE PROBLEM ]</span>
          <span className="type-micro">WHAT WE SEE IN EVERY HARDWARE TEAM</span>
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
            THE PROCESS
            <br />
            IS <span className="text-accent">BROKEN</span>
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            Embedded teams run component selection the same way they did ten
            years ago. Datasheets. Spreadsheets. Tribal knowledge in someone&apos;s
            head. It works until it does not. And when it does not, programs
            slip.
          </p>
        </div>
      </div>

      {/* Problem grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid-dividers mx-auto max-w-[1400px] grid sm:grid-cols-2 lg:grid-cols-4"
      >
        {problems.map((p) => (
          <ProblemCard key={p.id} {...p} />
        ))}
      </motion.div>
    </section>
  );
}
