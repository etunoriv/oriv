"use client";

import { motion } from "framer-motion";
import ProductSurface from "@/components/product-surface";
import { useBooker } from "@/components/booker";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero — Cinematic Stack.
 *
 *   - Text on top (left-aligned, max-w-5xl), product mockup below
 *   - Frustration-first headline + single CTA
 *   - Aligned to navbar gridlines; soft bottom-fade on the mockup
 */
export default function Hero() {
  const { setOpen } = useBooker();
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-40 pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 0% 100%, rgba(255,255,255,0.04), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease, delay: 0.06 }}
            className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--on-surface)]"
          >
            The parametric data layer for hardware engineering.
          </motion.h1>
        </div>

        {/* Description left-anchored; CTA pinned to outer container's right edge
            so it lines up with the right edge of the ProductSurface below. */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.2 }}
          className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
        >
          <p className="max-w-[600px] body-lg text-[var(--on-surface-variant)]">
            Component data lives in 40-page PDFs, duplicated across every tool. Oriv
            unifies it into one canonical schema your stack already queries.
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mag group inline-flex shrink-0 items-center gap-2 btn-primary"
          >
            <span>Talk to a co-founder</span>
            <span className="arrow flex h-6 w-6 items-center justify-center rounded bg-black/10">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.36 }}
          className="relative mt-16 md:mt-20"
        >
          <ProductSurface />
          {/* Bottom fade overlay — blends mockup into section bg in both themes */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--surface) 92%)",
            }}
          />
        </motion.div>

        {/* Sentinel observed by the navbar — when this crosses the top of the
            viewport, user has finished hero and the nav CTA blooms in. */}
        <div id="hero-end-sentinel" aria-hidden className="h-px w-full" />
      </div>
    </section>
  );
}
