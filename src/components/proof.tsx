"use client";

import { motion } from "framer-motion";
import { Reveal, Counter } from "@/lib/motion";

const stats = [
  { k: "Time to candidate part", value: 12, suffix: " min", note: "from a plain-language brief", format: (n: number) => Math.round(n).toString() },
  { k: "Bring-up acceleration", value: 3.4, suffix: "×", note: "median across alpha cohort", format: (n: number) => n.toFixed(1) },
  { k: "Iteration loop", value: 1, suffix: " day", note: "select → simulate → measure", format: (n: number) => `< ${Math.round(n)}` },
];

export default function Proof() {
  return (
    <section id="proof" className="relative px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55 ring-1 ring-white/10">
              Early signal
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Alpha cohort · n = 14
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10"
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] bg-[#0b0b10] p-8 sm:p-10"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}
              >
                <p className="font-editorial text-[clamp(1.6rem,3vw,2.6rem)] italic leading-[1.18] text-white">
                  &ldquo;The first time the simulation curve and the scope curve sat on top of each other, we stopped using two tools. Honestly, we stopped using five.&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-400/40 to-emerald-400/30 ring-1 ring-white/10"
                    animate={{ rotate: [0, 6, 0, -6, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="font-mono text-[11px] text-white/85">RK</span>
                  </motion.div>
                  <div>
                    <div className="text-[14px] text-white">Rohan K.</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                      Principal HW Engineer · Stealth robotics
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <div className="md:col-span-5">
            <div className="grid h-full gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.k} delay={i * 90}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className="rounded-[1.5rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10"
                  >
                    <div
                      className="flex items-end justify-between rounded-[calc(1.5rem-0.375rem)] bg-[#0b0b10] p-6"
                      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                    >
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                          {s.k}
                        </div>
                        <div className="mt-2 text-[12px] text-white/50">{s.note}</div>
                      </div>
                      <div className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] text-white">
                        <Counter value={s.value} format={s.format} suffix={s.suffix} />
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
