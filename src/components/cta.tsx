"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="border-b border-line">
      <div className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <samp className="type-micro text-accent font-bold block mb-6">[ WHAT HAPPENS NEXT ]</samp>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
            >
              READY TO SEE
              <br />
              WHAT <span className="text-accent">WEEKS</span>
              <br />
              LOOK LIKE AS
              <br />
              <span className="text-accent">MINUTES?</span>
            </h2>

            <div className="accent-line my-8" />

            <div className="grid gap-8 md:grid-cols-2">
              <p className="font-mono text-muted max-w-lg" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                We run a focused pilot with your engineering team. Real
                components, real constraints, real data. You will know within
                weeks whether Oriv fits your workflow. No six-month evaluation
                cycles. No slideware.
              </p>

              <div className="flex items-end gap-4">
                <a
                  href="#contact"
                  className="border-2 border-accent bg-accent px-8 py-3 type-micro text-background font-bold tracking-[0.1em] transition-all hover:bg-transparent hover:text-accent focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
                >
                  REQUEST A PILOT
                </a>
                <a
                  href="https://linkedin.com/company/oriv-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-dim px-8 py-3 type-micro text-muted transition-all hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  [ FOLLOW ON LINKEDIN ]
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
