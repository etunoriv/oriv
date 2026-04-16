"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ GETTING STARTED ]</span>
          <span className="type-micro">HOW ENGAGEMENTS WORK</span>
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
            PILOT FIRST.
            <br />
            <span className="text-accent">THEN</span> DECIDE.
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            We do not sell annual contracts on a demo. We run a focused pilot
            with your team, on your real data, and prove the value before
            you commit. If it does not work, you walk.
          </p>
        </div>
      </div>

      {/* Engagement steps */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid-dividers grid md:grid-cols-3"
      >
        {/* Step 1 */}
        <div className="p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <samp className="type-micro text-accent font-bold glow-accent">STEP 01</samp>
              <samp className="type-micro text-dim">~30 MIN</samp>
            </div>
            <hr className="border-line mb-6" />
            <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mb-4">
              TECHNICAL DISCOVERY
            </h3>
            <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
              We talk to your engineering team. Not a sales pitch. We need to
              understand your components, your constraints, and where the
              current process breaks down. If Oriv is not a fit, we will tell
              you.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <samp className="type-micro text-accent font-bold glow-accent">STEP 02</samp>
              <samp className="type-micro text-dim">2-4 WEEKS</samp>
            </div>
            <hr className="border-line mb-6" />
            <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mb-4">
              FOCUSED PILOT
            </h3>
            <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
              Real components. Real constraints from an active program. We
              measure three things: time spent selecting, burden re-reading
              datasheets, and errors in extracted data. You see the results
              before anyone talks pricing.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <samp className="type-micro text-accent font-bold glow-accent">STEP 03</samp>
              <samp className="type-micro text-dim">YOUR CALL</samp>
            </div>
            <hr className="border-line mb-6" />
            <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mb-4">
              DEPLOY OR WALK
            </h3>
            <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
              If the pilot proves value, we build a custom ROI model for your
              team and scope a deployment. If it does not, you walk away with
              everything you learned. No lock-in. No sunk cost guilt.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="border-t border-line px-6 py-8">
        <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-muted" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            Pricing is scoped per team after the pilot. No public tier page. No bait-and-switch.
          </p>
          <a
            href="#contact"
            className="shrink-0 border-2 border-accent bg-accent px-8 py-3 type-micro text-background font-bold tracking-[0.1em] transition-all hover:bg-transparent hover:text-accent focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
          >
            START A CONVERSATION
          </a>
        </div>
      </div>
    </section>
  );
}
