"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

const faqs = [
  {
    q: "Where does the component data come from?",
    a: "We index real manufacturer datasheets and build a structured knowledge base from the source. We do not generate specs. Every data point traces back to the original document so your engineers can verify what they are looking at.",
  },
  {
    q: "Can I trust the simulation results?",
    a: "The models are generated from real component parameters, not approximated. And we are built around a human-in-the-loop approach. Your engineers verify system behavior through rapid control prototyping tools before anything goes to production.",
  },
  {
    q: "How does this work with our existing EDA tools?",
    a: "Oriv sits alongside your existing stack. If your team uses Altium, KiCad, or similar tools, Oriv handles the upstream selection and validation work. We are not replacing your EDA. We are replacing the spreadsheets and manual processes that feed into it.",
  },
  {
    q: "Is our proprietary data used to train a shared model?",
    a: "No. Your project data is completely isolated. We adhere to SOC II compliance and GDPR regulations. Your designs, component selections, and simulation results are never used to train any model outside your account.",
  },
  {
    q: "What does a pilot look like?",
    a: "We run a focused engagement with your engineering team using real components and real constraints from an active program. The goal is to prove three things: less time selecting, less burden re-reading datasheets, and fewer errors in extracted data. You will know if Oriv works for you within weeks, not months.",
  },
  {
    q: "Can we bring our own internal component libraries?",
    a: "Yes. Oriv provides a global market knowledge base, but the platform is designed to integrate with your internal libraries and preferred supplier lists.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${index < faqs.length - 1 ? "border-b border-line" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 group focus-visible:outline-2 focus-visible:outline-accent"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-foreground font-medium text-base md:text-lg leading-snug group-hover:text-accent transition-colors duration-300">
            {q}
          </h3>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent shrink-0 mt-1 text-lg font-bold"
          >
            +
          </motion.span>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <p className="text-muted leading-relaxed text-base max-w-2xl">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-16 md:py-24 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <span className="type-micro text-accent font-bold block mb-4">/// FAQ</span>
              <h2
                className="type-macro text-foreground"
                style={{ fontSize: "clamp(1.6rem, 3vw, 3rem)" }}
              >
                STRAIGHT <span className="text-accent">ANSWERS</span>
              </h2>
              <p className="mt-3 text-muted leading-relaxed text-base">
                The questions engineers actually ask during evaluations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
