"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    id: "Q-01",
    q: "Where does the component data come from?",
    a: "We index real manufacturer datasheets and build a structured knowledge base from the source. We do not generate specs. Every data point traces back to the original document so your engineers can verify what they are looking at.",
  },
  {
    id: "Q-02",
    q: "Can I trust the simulation results?",
    a: "The models are generated from real component parameters, not approximated. And we are built around a human-in-the-loop approach. Your engineers verify system behavior through rapid control prototyping tools before anything goes to production.",
  },
  {
    id: "Q-03",
    q: "How does this work with our existing EDA tools?",
    a: "Oriv sits alongside your existing stack. If your team uses Altium, KiCad, or similar tools, Oriv handles the upstream selection and validation work. We are not replacing your EDA. We are replacing the spreadsheets and manual processes that feed into it.",
  },
  {
    id: "Q-04",
    q: "Is our proprietary data used to train a shared model?",
    a: "No. Your project data is completely isolated. We adhere to SOC II compliance and GDPR regulations. Your designs, component selections, and simulation results are never used to train any model outside your account.",
  },
  {
    id: "Q-05",
    q: "What does a pilot look like?",
    a: "We run a focused engagement with your engineering team using real components and real constraints from an active program. The goal is to prove three things: less time selecting, less burden re-reading datasheets, and fewer errors in extracted data. You will know if Oriv works for you within weeks, not months.",
  },
  {
    id: "Q-06",
    q: "Can we bring our own internal component libraries?",
    a: "Yes. Oriv provides a global market knowledge base, but the platform is designed to integrate with your internal libraries and preferred supplier lists. Your institutional knowledge does not get left behind.",
  },
];

function FaqItem({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <samp className="type-micro text-dim font-bold shrink-0 mt-0.5">{id}</samp>
            <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.04em]">
              {q}
            </h3>
          </div>
          <samp className="type-micro text-accent shrink-0">
            {open ? "[ \u2014 ]" : "[ + ]"}
          </samp>
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <div className="ml-12 border-l-2 border-accent pl-4">
            <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
              {a}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ FAQ ]</span>
          <span className="type-micro">THE QUESTIONS ENGINEERS ACTUALLY ASK</span>
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
            STRAIGHT
            <br />
            <span className="text-accent">ANSWERS</span>
          </motion.h2>
        </div>
      </div>

      {/* FAQ list */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-[1400px]"
      >
        {faqs.map((faq) => (
          <FaqItem key={faq.id} id={faq.id} q={faq.q} a={faq.a} />
        ))}
      </motion.div>
    </section>
  );
}
