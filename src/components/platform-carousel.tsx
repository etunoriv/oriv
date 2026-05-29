"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  SelectionAnim,
  SimulationAnim,
  HybridAnim,
  InstrumentsAnim,
} from "./pillar-animations";

const PANELS = [
  {
    n: "01",
    pillar: "Intelligent Component Selection",
    title: "Shortlist viable components in",
    italic: "seconds, not weeks.",
    body: "AI provides precise, contextual information from the global market. Manufacturer data, physical and lifecycle attributes, rapid market filtering, surfaced as an answer, not a search.",
    accent: "#6ee7b7",
    Anim: SelectionAnim,
  },
  {
    n: "02",
    pillar: "Real-Time Simulations",
    title: "High-fidelity models,",
    italic: "in real time.",
    body: "Run a candidate against your actual signals, loads, and edge cases. The waveform updates while you read this sentence.",
    accent: "#a78bfa",
    Anim: SimulationAnim,
  },
  {
    n: "03",
    pillar: "Virtual, Physical or Hybrid",
    title: "Test virtually, physically,",
    italic: "or both at once.",
    body: "Bring up firmware before silicon. Swap a virtual peripheral for a real one mid-run. Catch flaws before manufacturing, not after.",
    accent: "#fbbf24",
    Anim: HybridAnim,
  },
  {
    n: "04",
    pillar: "Realtime Instruments",
    title: "Every meter, every bus,",
    italic: "in one pane.",
    body: "Logic, power, thermal, bus traffic. All measured in the same workspace where the part was selected and simulated.",
    accent: "#6ee7b7",
    Anim: InstrumentsAnim,
  },
];

const DURATION = 6500;
const spring = { type: "spring" as const, stiffness: 90, damping: 22 };

export default function PlatformCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  // Keyed progress: when key changes, the animated bar resets from 0 to 100%.
  // Reduced-motion users get an instant fill so we don't auto-advance constantly.
  const [progressKey, setProgressKey] = useState(0);

  const next = useCallback(
    () => setActive((a) => (a + 1) % PANELS.length),
    []
  );

  const jump = (i: number) => {
    setActive(i);
    setProgressKey((k) => k + 1);
  };

  // Auto-advance when not paused.
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (paused || reduced) return;
    timer.current = setTimeout(() => {
      next();
      setProgressKey((k) => k + 1);
    }, DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, reduced, next]);

  const panel = PANELS[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="grid gap-6 lg:grid-cols-12"
    >
      {/* Left: tab list with progress bars */}
      <ol className="lg:col-span-5">
        {PANELS.map((p, i) => {
          const isActive = i === active;
          return (
            <li key={p.n}>
              <button
                type="button"
                onClick={() => jump(i)}
                aria-current={isActive ? "true" : undefined}
                className="group relative w-full py-5 text-left transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.22em]"
                    style={{
                      color: isActive ? p.accent : "rgba(245,245,243,0.35)",
                    }}
                  >
                    {p.n}
                  </span>
                  <h3
                    className={`font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight transition-colors ${
                      isActive ? "text-white" : "text-white/45 hover:text-white/75"
                    }`}
                  >
                    {p.pillar}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={spring}
                      className="overflow-hidden pl-[2.4rem] pr-4 text-[14px] leading-relaxed text-white/60"
                    >
                      <span className="block py-3">{p.body}</span>
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Progress rail */}
                <div className="mt-3 h-px w-full bg-white/[0.06]" />
                {isActive && !reduced && (
                  <motion.div
                    key={`bar-${progressKey}-${i}`}
                    className="absolute bottom-0 left-0 h-px"
                    style={{ backgroundColor: p.accent, originX: 0 }}
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "0%" : "100%" }}
                    transition={{
                      duration: paused ? 0 : DURATION / 1000,
                      ease: "linear",
                    }}
                  />
                )}
                {isActive && reduced && (
                  <span className="absolute bottom-0 left-0 h-px w-full" style={{ backgroundColor: p.accent }} />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      {/* Right: active card with bespoke animation */}
      <div className="lg:col-span-7">
        <div className="rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10">
          <div
            className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#0b0b10] p-7 sm:p-9"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}
          >
            {/* Accent glow tied to the active panel */}
            <motion.div
              className="pointer-events-none absolute -right-24 -top-20 h-[260px] w-[260px] rounded-full blur-[100px]"
              animate={{ backgroundColor: panel.accent + "30" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full"
                    animate={{ backgroundColor: panel.accent }}
                    transition={{ duration: 0.6 }}
                  />
                  pillar.live · {panel.n} of {PANELS.length}
                </div>
                <div className="font-mono text-[10px] text-white/30">v0.4 · alpha</div>
              </div>

              <div className="mt-5 min-h-[460px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={panel.n}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h4 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.08] text-white">
                      {panel.title}{" "}
                      <span className="font-editorial italic text-white/65">
                        {panel.italic}
                      </span>
                    </h4>

                    <div className="mt-6">
                      <panel.Anim />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            {paused ? "paused on hover" : "auto-advancing"}
          </div>
          <div className="flex items-center gap-1.5">
            {PANELS.map((p, i) => (
              <button
                key={p.n}
                onClick={() => jump(i)}
                aria-label={`Show ${p.pillar}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === active ? 22 : 6,
                  backgroundColor: i === active ? p.accent : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
