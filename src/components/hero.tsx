"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen border-b border-line">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32">
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-12 flex flex-wrap items-center gap-x-4 gap-y-1"
        >
          <span className="type-micro text-accent glow-accent">/// ORIV STUDIO</span>
          <span className="type-micro">ALPHA ACCESS</span>
        </motion.div>

        {/* Mega headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="type-macro text-foreground"
          style={{ fontSize: "clamp(2.5rem, 8vw, 10rem)" }}
        >
          YOUR ENGINEERS
          <br />
          SPEND WEEKS ON
          <br />
          COMPONENTS.
          <br />
          <span className="text-accent glow-accent">WE FIX THAT.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="my-8 origin-left"
        >
          <div className="accent-line" />
        </motion.div>

        {/* Subheading + CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <p className="font-mono text-muted leading-relaxed max-w-lg" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            Oriv Studio turns the global component market into a searchable
            knowledge base. Select parts in minutes, simulate their real-world
            behavior, connect to physical hardware, and monitor everything from
            one workspace. Your team stops re-reading datasheets and starts
            shipping products.
          </p>

          <div className="flex items-end gap-4">
            <a
              href="#contact"
              className="border-2 border-accent bg-accent px-8 py-3 type-micro text-background font-bold tracking-[0.1em] transition-all hover:bg-transparent hover:text-accent focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
            >
              REQUEST EARLY ACCESS
            </a>
            <a
              href="#features"
              className="border border-dim px-8 py-3 type-micro text-muted transition-all hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              [ SEE HOW IT WORKS ]
            </a>
          </div>
        </motion.div>

        {/* Telemetry footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-4"
          aria-hidden="true"
        >
          <samp className="type-micro">AUTOMOTIVE / DEFENSE / INDUSTRIAL</samp>
          <samp className="type-micro">EMBEDDED TEAMS, 5-50 ENGINEERS</samp>
          <samp className="type-micro hidden sm:inline">ALPHA EDITION</samp>
        </motion.div>
      </div>
    </section>
  );
}
