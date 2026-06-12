"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Shared header for sub-pages (/product, /industries, /trust, /about, /careers).
 * Headline + lede. Per-page surfaces are rendered by the page itself.
 */
export default function SubPageHero({
  title,
  lede,
}: {
  title: React.ReactNode;
  lede: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          className="headline-xl mb-5 max-w-[760px] text-[var(--on-surface)]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.16 }}
          className="body-md max-w-[600px] text-[var(--on-surface-variant)]"
        >
          {lede}
        </motion.p>
      </div>
    </section>
  );
}
