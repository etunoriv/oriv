"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

const problems = [
  {
    title: "SELECTION EATS YOUR BEST ENGINEERS",
    description:
      "Component selection requires senior experience. The kind that costs $200-400K per year, loaded. And right now, that experience is being spent opening PDFs and copying specs into spreadsheets.",
    detail:
      "A single complex selection cycle takes two engineers roughly six weeks. That is not a process. That is a workaround that became permanent because nobody had a better option.",
  },
  {
    title: "THE WRONG PART KILLS THE PROGRAM",
    description:
      "When a selected component does not perform as expected, the project stalls. When it goes obsolete mid-prototype, the timeline resets. These are not edge cases. They happen constantly.",
    detail:
      "Every selection decision carries downstream risk: rework, redesign, re-procurement. And since most decisions are made from fragmented data across vendor sites, the error rate is built into the process.",
  },
  {
    title: "PROTOTYPES BURN TIME AND BUDGET",
    description:
      "Without simulation, the only way to validate a design is to build it. Each prototype spin costs weeks in lead time and thousands in fabrication. A single revision can push a launch by a quarter.",
    detail:
      "Teams that skip simulation are not saving time. They are front-loading the cost of being wrong onto physical hardware.",
  },
  {
    title: "HEADCOUNT PRESSURE IS REAL",
    description:
      "Your team is under pressure to ship faster with fewer people. But the selection and validation process does not scale with headcount. It scales with experience, and experience is expensive.",
    detail:
      "NPI timelines are getting shorter. Budgets are getting tighter. The bottleneck is not talent. The bottleneck is the manual work that talent is stuck doing.",
  },
];

function ProblemCard({ title, description, detail }: typeof problems[number]) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-hover bg-white border border-line rounded-lg p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-foreground font-bold text-base tracking-tight mb-4">
          {title}
        </h3>
        <p className="text-muted leading-relaxed text-base">
          {description}
        </p>
        <AnimatePresence>
          {expanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-muted/70 leading-relaxed text-base border-l-2 border-accent pl-4 overflow-hidden"
            >
              {detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 pt-4 border-t border-line text-left group focus-visible:outline-2 focus-visible:outline-accent"
        aria-expanded={expanded}
      >
        <span className="type-micro text-dim group-hover:text-foreground transition-colors duration-300">
          {expanded ? "COLLAPSE" : "+ READ MORE"}
        </span>
      </button>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="type-micro text-accent font-bold block mb-4">/// THE PROBLEM</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
            >
              THE PROCESS IS <span className="text-accent">BROKEN</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed text-base md:text-lg">
              Embedded teams run component selection the same way they did ten
              years ago. Datasheets. Spreadsheets. Knowledge locked in someone&apos;s
              head. It works until it does not.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren stagger={0.1}>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <ProblemCard key={p.title} {...p} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
