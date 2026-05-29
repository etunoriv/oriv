"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LINES = [
  "We started Oriv because embedded engineering became",
  "a tax on attention.",
  "Twelve tabs to pick a part. A different tool to simulate it.",
  "A third to instrument the board.",
  "The work is the loop. Not the ceremony around it.",
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative overflow-hidden px-6 py-40 lg:px-10"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/12 blur-[140px]"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.85]),
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55 ring-1 ring-white/10"
        >
          Manifesto
        </motion.span>

        <h2 className="font-display mt-10 text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] tracking-[-0.03em] text-white">
          {LINES.map((line, i) => {
            const isItalic = i === 1;
            const start = i / LINES.length;
            const end = (i + 1) / LINES.length;
            return (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(
                      scrollYProgress,
                      [start * 0.7, start * 0.7 + 0.18],
                      [0.18, 1]
                    ),
                    y: useTransform(
                      scrollYProgress,
                      [start * 0.7, start * 0.7 + 0.18],
                      [40, 0]
                    ),
                  }}
                  className={
                    isItalic ? "font-editorial italic text-white/55" : ""
                  }
                >
                  {line}
                </motion.span>
              </span>
            );
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono mx-auto mt-12 max-w-md text-[12px] uppercase tracking-[0.22em] text-white/40"
        >
          The Oriv team · Toronto · 2026
        </motion.p>
      </div>
    </section>
  );
}
