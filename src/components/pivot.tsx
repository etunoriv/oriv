"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;
const DURATION_MS = 5500;

type Pillar = {
  num: string;
  title: string;
  short: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Canonical schema across vendors",
    short: "Canonical",
    body: "Vcc, VDD, \"Supply Voltage\", VS+ all collapse to the same canonical field. Public corpus and private layer alike.",
  },
  {
    num: "02",
    title: "Unit-normalized values",
    short: "Units",
    body: "Every numeric value reduced to SI base units. Dimensionally validated. mV, µA, kHz, °F all converge. No silent unit drift.",
  },
  {
    num: "03",
    title: "Condition tuples preserved",
    short: "Conditions",
    body: "\"100 mA at 25°C, 60 mA at 85°C\" extracts as a structured tuple. Not a string. Operating conditions stay first-class data.",
  },
  {
    num: "04",
    title: "Per-field provenance",
    short: "Provenance",
    body: "Every record carries a citation back to source page, table, and footnote. Auditable for ISO 26262, FDA, DMSMS workflows.",
  },
];

export default function Pivot() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // `tick` forces the progress bar to remount + restart whenever active changes
  const [tick, force] = useReducer((n: number) => n + 1, 0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion || paused) return;
    timer.current = window.setTimeout(() => {
      setActive((a) => (a + 1) % pillars.length);
      force();
    }, DURATION_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused, reduceMotion, tick]);

  function jumpTo(i: number) {
    setActive(i);
    force();
    // Tap = "I've engaged." Pause auto-advance so the carousel doesn't move
    // under the user's finger. Desktop hover-to-pause still works for browse-mode.
    setPaused(true);
  }

  return (
    <section
      id="pivot"
      className="relative overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Parametric data,{" "}
              <span className="text-[var(--on-surface-variant)]">
                the way engineers actually need it.
              </span>
            </h2>
            <p className="body-lg max-w-[560px] text-[var(--on-surface-variant)]">
              A real parametric store. Four guarantees below. Queryable through
              SQL, MQL, or SPARQL. Tenant-isolated by default.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div
            className="relative rounded-2xl p-1.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7),0_18px_40px_-18px_rgba(0,0,0,0.45)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="relative overflow-hidden rounded-[14px] border border-white/[0.06]"
              style={{
                background: "linear-gradient(180deg, #0c0d0f 0%, #0a0b0d 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]">
                {/* LEFT — accordion (desktop) / tab strip (mobile) */}
                <div className="border-b border-white/[0.05] md:border-b-0 md:border-r">
                  {/* MOBILE — horizontal tab strip + active content stacked */}
                  <div className="md:hidden">
                    <div className="grid grid-cols-4 gap-px border-b border-white/[0.05] bg-white/[0.05]">
                      {pillars.map((p, i) => {
                        const isActive = i === active;
                        return (
                          <button
                            key={p.num}
                            onClick={() => jumpTo(i)}
                            aria-selected={isActive}
                            className="flex h-full min-h-[56px] flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-colors duration-200 active:bg-white/[0.04]"
                            style={{
                              background: isActive
                                ? "rgba(255,197,46,0.06)"
                                : "#0a0b0d",
                            }}
                          >
                            <span
                              className="label-mono text-[9px] tracking-[0.22em] transition-colors duration-200"
                              style={{
                                color: isActive
                                  ? "var(--oriv-yellow)"
                                  : "rgba(245,245,243,0.32)",
                              }}
                            >
                              {p.num}
                            </span>
                            <span
                              className="truncate text-[10.5px] font-medium leading-tight transition-colors duration-200"
                              style={{
                                color: isActive
                                  ? "var(--on-surface)"
                                  : "rgba(245,245,243,0.5)",
                              }}
                            >
                              {p.short}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active content panel */}
                    <div className="px-5 py-5">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`m-${active}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.28, ease }}
                        >
                          <h3 className="mb-2 font-display text-[16px] font-semibold leading-snug tracking-[-0.01em] text-[var(--on-surface)]">
                            {pillars[active].title}
                          </h3>
                          <p className="body-md text-[var(--on-surface-variant)]">
                            {pillars[active].body}
                          </p>
                          <div className="mt-4 h-[2px] w-full max-w-[200px] overflow-hidden rounded-full bg-white/[0.06]">
                            <motion.div
                              key={`mbar-${active}-${tick}`}
                              initial={{ width: 0 }}
                              animate={{
                                width: reduceMotion || paused ? 0 : "100%",
                              }}
                              transition={{
                                duration:
                                  reduceMotion || paused
                                    ? 0
                                    : DURATION_MS / 1000,
                                ease: "linear",
                              }}
                              className="h-full"
                              style={{ background: "var(--oriv-yellow)" }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* DESKTOP — vertical accordion (existing) */}
                  <ul className="hidden divide-y divide-white/[0.05] md:block">
                    {pillars.map((p, i) => {
                      const isActive = i === active;
                      return (
                        <li key={p.num}>
                          <button
                            onClick={() => jumpTo(i)}
                            className="group block w-full px-6 py-5 text-left transition-colors duration-300 md:px-7 md:py-6"
                            style={{
                              background: isActive
                                ? "rgba(255,255,255,0.02)"
                                : "transparent",
                            }}
                            aria-expanded={isActive}
                          >
                            <div className="flex items-baseline gap-4">
                              <span
                                className="label-mono text-[10px] tracking-[0.22em] transition-colors duration-300"
                                style={{
                                  color: isActive
                                    ? "var(--oriv-yellow)"
                                    : "rgba(245,245,243,0.32)",
                                }}
                              >
                                {p.num}
                              </span>
                              <h3
                                className="font-display text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-300 md:text-[17px]"
                                style={{
                                  color: isActive
                                    ? "var(--on-surface)"
                                    : "rgba(245,245,243,0.6)",
                                }}
                              >
                                {p.title}
                              </h3>
                            </div>

                            <AnimatePresence initial={false}>
                              {isActive && (
                                <motion.div
                                  key="body"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.42, ease }}
                                  className="overflow-hidden"
                                >
                                  <p className="ml-[40px] mt-3 max-w-[420px] body-md text-[var(--on-surface-variant)]">
                                    {p.body}
                                  </p>
                                  <div className="ml-[40px] mt-4 h-[2px] w-full max-w-[260px] overflow-hidden rounded-full bg-white/[0.06]">
                                    <motion.div
                                      key={`${active}-${tick}`}
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: reduceMotion || paused ? 0 : "100%",
                                      }}
                                      transition={{
                                        duration:
                                          reduceMotion || paused
                                            ? 0
                                            : DURATION_MS / 1000,
                                        ease: "linear",
                                      }}
                                      className="h-full"
                                      style={{ background: "var(--oriv-yellow)" }}
                                    />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* RIGHT — visual canvas */}
                <div className="relative min-h-[320px] px-6 py-8 md:min-h-[380px] md:px-10 md:py-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, ease }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      {active === 0 && <VizCanonical />}
                      {active === 1 && <VizUnits />}
                      {active === 2 && <VizConditions />}
                      {active === 3 && <VizProvenance />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   VISUALS — each viz has a distinct visual primitive
     01 Canonical   — convergence diagram (funnel curves)
     02 Units       — number-line / scale
     03 Conditions  — engineering chart (axes + curve)
     04 Provenance  — stamped PDF excerpt
   ============================================================ */

/* ----- 01 — CONVERGENCE DIAGRAM
   Mobile: 4 vendor strings full-width → funnel down → canonical card full-width
   Desktop: 3-col (inputs | horizontal funnel | canonical) ----- */
function VizCanonical() {
  const inputs = [
    { field: '"V_supply_max"', src: "Vendor A · p.3" },
    { field: '"VDD (max)"', src: "Vendor B · p.7" },
    { field: '"Maximum Supply"', src: "Vendor C · p.4" },
    { field: '"Vcc, abs. max."', src: "MIL-PRF · §3.1" },
  ];

  return (
    <div className="relative w-full max-w-[480px]">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] md:items-center md:gap-3">
        {/* INPUTS */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 md:flex md:flex-col md:gap-0 md:space-y-2">
          {inputs.map((inp, i) => (
            <motion.div
              key={inp.field}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease, delay: 0.08 + i * 0.06 }}
              className="font-mono text-[10px] leading-tight md:text-[11.5px]"
            >
              <div className="truncate text-white/85">{inp.field}</div>
              <div className="truncate text-[9px] text-white/35 md:text-[9.5px]">
                {inp.src}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONNECTOR — vertical funnel on mobile, horizontal on desktop */}
        <div className="relative h-10 w-full md:h-[160px] md:w-auto">
          {/* Mobile: 4 curves from top spread to a single point at bottom-center */}
          <svg
            viewBox="0 0 80 40"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full md:hidden"
          >
            <line
              x1="40"
              y1="20"
              x2="40"
              y2="20"
              stroke="rgba(255,197,46,0.08)"
              strokeWidth="0.5"
            />
            {[10, 30, 50, 70].map((x, i) => (
              <motion.path
                key={i}
                d={`M ${x} 0 C ${x} 14, 40 20, 40 38`}
                stroke="rgba(255,197,46,0.55)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.05 }}
              />
            ))}
            <motion.circle
              cx="40"
              cy="38"
              r="2.4"
              fill="#FFC52E"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.85 }}
            />
          </svg>

          {/* Desktop: 4 curves from left spread to single point at right-middle */}
          <svg
            viewBox="0 0 80 160"
            preserveAspectRatio="none"
            className="absolute inset-0 hidden h-full w-full md:block"
          >
            <line
              x1="0"
              y1="80"
              x2="80"
              y2="80"
              stroke="rgba(255,197,46,0.08)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            {[18, 56, 104, 142].map((y, i) => (
              <motion.path
                key={i}
                d={`M 0 ${y} C 28 ${y}, 52 80, 80 80`}
                stroke="rgba(255,197,46,0.55)"
                strokeWidth="1.1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.3 + i * 0.05 }}
              />
            ))}
            <motion.circle
              cx="80"
              cy="80"
              r="2.4"
              fill="#FFC52E"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.95 }}
            />
          </svg>
        </div>

        {/* CANONICAL OUTPUT */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.9 }}
          className="rounded-md border border-[var(--oriv-yellow)]/35 bg-[var(--oriv-yellow)]/[0.06] px-3 py-2.5 shadow-[0_10px_30px_-10px_rgba(255,197,46,0.25)]"
        >
          <div className="label-mono mb-1 text-[8.5px] tracking-[0.18em] text-[#FFC52E]/70">
            CANONICAL
          </div>
          <div className="truncate font-mono text-[12px] font-medium text-[#FFC52E] md:text-[12.5px]">
            supply_voltage_maximum
          </div>
          <div className="mt-1.5 font-mono text-[9.5px] leading-relaxed text-white/55">
            Voltage&lt;Max&gt; · V (SI)
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ----- 02 — NUMBER LINE / SCALE ----- */
function VizUnits() {
  const inputs = [
    { raw: "5500 mV", x: 0.18 },
    { raw: "5V5", x: 0.5 },
    { raw: "5.5 VDC", x: 0.82 },
  ];

  return (
    <div className="w-full max-w-[460px]">
      {/* Inputs floating above the line */}
      <div className="relative mb-3 h-7">
        {inputs.map((inp, i) => (
          <motion.div
            key={inp.raw}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.1 + i * 0.08 }}
            className="absolute -translate-x-1/2 rounded border border-white/[0.1] bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-white/75"
            style={{ left: `${inp.x * 100}%` }}
          >
            {inp.raw}
          </motion.div>
        ))}
      </div>

      {/* Drop lines */}
      <div className="relative h-3">
        <svg
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {inputs.map((inp, i) => (
            <motion.line
              key={inp.raw}
              x1={inp.x * 100}
              y1="0"
              x2="50"
              y2="12"
              stroke="rgba(255,197,46,0.45)"
              strokeWidth="0.6"
              strokeDasharray="1.5 1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.36 + i * 0.05 }}
            />
          ))}
        </svg>
      </div>

      {/* Number line */}
      <div className="relative h-10">
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 h-px bg-white/15"
        />
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
            const isAnchor = n === 5;
            return (
              <div
                key={n}
                className="flex flex-col items-center gap-1"
                style={{ width: 0 }}
              >
                <span
                  aria-hidden
                  className="block w-px"
                  style={{
                    height: isAnchor ? 14 : n % 2 === 0 ? 8 : 5,
                    background: isAnchor
                      ? "var(--oriv-yellow)"
                      : "rgba(255,255,255,0.3)",
                  }}
                />
                <span
                  className="mt-1 font-mono text-[9px]"
                  style={{
                    color: isAnchor ? "var(--oriv-yellow)" : "rgba(255,255,255,0.35)",
                  }}
                >
                  {n}
                </span>
              </div>
            );
          })}
        </div>

        {/* SI marker pin at x = 5.5 */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="absolute"
          style={{ left: "78.5%", top: 0 }}
        >
          <div
            className="absolute -translate-x-1/2 rounded bg-[var(--oriv-yellow)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--on-oriv-yellow)]"
            style={{ left: 0 }}
          >
            5.5
          </div>
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 h-3 w-px -translate-x-1/2"
            style={{ background: "var(--oriv-yellow)" }}
          />
        </motion.div>
      </div>

      {/* Dimensional formula footer */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease, delay: 0.92 }}
        className="mt-5 flex items-center justify-between rounded border border-white/[0.08] bg-white/[0.02] px-3 py-2"
      >
        <span className="font-mono text-[10.5px] text-white/55">
          V
          <span className="ml-2 text-white/35">=</span>
          <span className="ml-2 text-white/75">kg·m²·s⁻³·A⁻¹</span>
        </span>
        <span className="font-mono text-[9.5px] text-[#FFC52E]">SI · validated</span>
      </motion.div>
    </div>
  );
}

/* ----- 03 — ENGINEERING CHART ----- */
function VizConditions() {
  // chart in viewBox coords: x 0..280, y 0..140 (y inverted for display, drawn directly)
  const points = [
    { tj: "25°C", x: 40, y: 30, val: "100 mA" },
    { tj: "85°C", x: 140, y: 70, val: "60 mA" },
    { tj: "125°C", x: 240, y: 110, val: "35 mA" },
  ];

  return (
    <div className="w-full max-w-[460px]">
      {/* Header strip */}
      <div className="mb-2 flex items-baseline justify-between font-mono text-[10.5px]">
        <span className="text-white/55">I_out · LMV321</span>
        <span className="text-[#FFC52E]/80 text-[9.5px]">
          TupleSeries&lt;Tj → mA&gt;
        </span>
      </div>

      {/* Chart */}
      <div className="relative h-[170px] overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.015]">
        {/* Y-axis label */}
        <span className="absolute left-1.5 top-2 font-mono text-[9px] text-white/40">
          mA
        </span>

        <svg
          viewBox="0 0 280 140"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {/* gridlines */}
          {[28, 56, 84, 112].map((y) => (
            <line
              key={y}
              x1="24"
              y1={y}
              x2="270"
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
            />
          ))}
          {/* axes */}
          <line
            x1="24"
            y1="14"
            x2="24"
            y2="124"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.8"
          />
          <line
            x1="24"
            y1="124"
            x2="270"
            y2="124"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.8"
          />

          {/* fill area under curve */}
          <motion.path
            d="M 40 30 L 140 70 L 240 110 L 240 124 L 40 124 Z"
            fill="rgba(255,197,46,0.08)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          {/* curve */}
          <motion.path
            d="M 40 30 L 140 70 L 240 110"
            stroke="#FFC52E"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
          />
          {/* data points + labels */}
          {points.map((p, i) => (
            <g key={p.tj}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="3.5"
                fill="#FFC52E"
                stroke="#0c0d0f"
                strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.85 + i * 0.1 }}
              />
              <motion.text
                x={p.x}
                y={p.y - 10}
                textAnchor="middle"
                fontSize="9"
                fill="rgba(255,255,255,0.85)"
                fontFamily="var(--font-jetbrains), monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.95 + i * 0.1 }}
              >
                {p.val}
              </motion.text>
              {/* x-axis tick label */}
              <text
                x={p.x}
                y="136"
                textAnchor="middle"
                fontSize="8.5"
                fill="rgba(255,255,255,0.4)"
                fontFamily="var(--font-jetbrains), monospace"
              >
                {p.tj}
              </text>
            </g>
          ))}
        </svg>

        {/* X-axis label */}
        <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-white/40">
          Tj
        </span>
      </div>

      {/* Tuple notation footer */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 1.25 }}
        className="mt-2.5 rounded border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[10px] text-white/55"
      >
        <span className="text-white/35">{"{"}</span>
        <span className="text-white/85">25:100</span>
        <span className="text-white/35">, </span>
        <span className="text-white/85">85:60</span>
        <span className="text-white/35">, </span>
        <span className="text-white/85">125:35</span>
        <span className="text-white/35">{"}"}</span>
      </motion.div>
    </div>
  );
}

/* ----- 04 — STAMPED PDF EXCERPT ----- */
function VizProvenance() {
  return (
    <div className="grid w-full max-w-[460px] grid-cols-[1.1fr_1fr] items-stretch gap-3">
      {/* PDF page mockup */}
      <motion.div
        initial={{ opacity: 0, y: 8, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.08 }}
        className="relative overflow-hidden rounded border border-white/[0.12] bg-[#f5f5f3] p-3 shadow-[0_18px_36px_-14px_rgba(0,0,0,0.55)]"
      >
        {/* Page header */}
        <div className="mb-2 flex items-center justify-between text-[#1b1c1d]/55">
          <span className="font-mono text-[8px] tracking-[0.18em]">
            SCD-04 · REV C
          </span>
          <span className="font-mono text-[8px]">p.3</span>
        </div>
        {/* Page lines */}
        <div className="space-y-1">
          {[100, 86, 92, 78, 95, 70].map((w, i) => (
            <div
              key={i}
              className="h-[3px] rounded bg-[#1b1c1d]/20"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        {/* Highlighted target row */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
          className="my-2 rounded bg-[var(--oriv-yellow)]/55 px-1 py-1"
        >
          <div className="flex items-baseline justify-between font-mono text-[9px] font-medium text-[#1b1c1d]">
            <span>Slew rate (Tj=125°C)</span>
            <span>1.0 V/µs</span>
          </div>
        </motion.div>
        {/* More page lines */}
        <div className="space-y-1">
          {[88, 72, 90, 64].map((w, i) => (
            <div
              key={i}
              className="h-[3px] rounded bg-[#1b1c1d]/20"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>

        {/* CITED stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.55, ease: [0.16, 1.4, 0.3, 1], delay: 0.85 }}
          className="absolute right-2 top-8 rounded border-[1.5px] px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.22em]"
          style={{
            borderColor: "#FFC52E",
            color: "#FFC52E",
            background: "rgba(255,197,46,0.08)",
            boxShadow: "0 2px 0 rgba(255,197,46,0.2)",
          }}
        >
          CITED
        </motion.div>
      </motion.div>

      {/* Connector + provenance card */}
      <div className="relative flex flex-col justify-center">
        {/* dashed arrow */}
        <svg
          className="absolute left-[-12px] top-1/2 h-px w-3 -translate-y-1/2"
          viewBox="0 0 12 1"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0"
            y1="0.5"
            x2="12"
            y2="0.5"
            stroke="rgba(255,197,46,0.5)"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.35, delay: 0.65 }}
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.7 }}
          className="rounded border border-[var(--oriv-yellow)]/30 bg-[var(--oriv-yellow)]/[0.05] px-3 py-2.5"
        >
          <p className="label-mono mb-1.5 text-[8.5px] tracking-[0.2em] text-[#FFC52E]/85">
            PROVENANCE
          </p>
          <div className="space-y-0.5 font-mono text-[10px] leading-relaxed">
            <div className="flex justify-between">
              <span className="text-white/40">source</span>
              <span className="text-white/85">SCD-04</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">page · tbl</span>
              <span className="text-white/85">3 · 2.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">extract</span>
              <span className="text-white/85">run_8f2a</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">ts</span>
              <span className="text-white/85">2026-05-12</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="mt-2 flex flex-wrap gap-1"
        >
          {["ISO 26262", "FDA", "DMSMS"].map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/[0.1] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[9px] text-white/55"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function VizQuery() {
  const langs = [
    { name: "SQL", note: "real columns, real joins" },
    { name: "MQL", note: "document-oriented" },
    { name: "SPARQL", note: "graph / ontology" },
    { name: "MCP", note: "agent-native" },
  ];

  return (
    <div className="flex w-full flex-col items-stretch gap-3">
      {langs.map((l, i) => (
        <motion.div
          key={l.name}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.08 + i * 0.07 }}
          className="flex items-baseline justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3"
        >
          <span className="font-mono text-[13px] font-medium text-white">
            {l.name}
          </span>
          <span className="font-mono text-[11px] text-white/45">{l.note}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-2 flex items-center justify-end gap-2 label-mono text-[9px] tracking-[0.2em] text-white/40"
      >
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: "#FFC52E" }}
        />
        SAME CANONICAL STORE BEHIND EACH
      </motion.div>
    </div>
  );
}

function VizTenant() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3">
      {/* Public library box */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease, delay: 0.12 }}
        className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3"
      >
        <p className="label-mono mb-1.5 text-[9px] tracking-[0.2em] text-white/45">
          PUBLIC LIBRARY · SHARED
        </p>
        <p className="font-mono text-[11.5px] text-white/65">
          Vendor datasheets · lifecycle status · distributor inventory
        </p>
      </motion.div>

      {/* Tenant boundary */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease, delay: 0.28 }}
        className="rounded-lg border-2 border-[var(--oriv-yellow)]/35 bg-[var(--oriv-yellow)]/[0.04] px-4 py-3.5"
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="label-mono text-[9px] tracking-[0.2em] text-[#FFC52E]">
            YOUR TENANT · ISOLATED
          </p>
          <span
            className="rounded px-1.5 py-0.5 font-mono text-[9px] font-medium"
            style={{ background: "rgba(255,197,46,0.18)", color: "#FFC52E" }}
          >
            VPC / ON-PREM
          </span>
        </div>
        <p className="font-mono text-[11.5px] text-white/85">
          Custom SCDs · MIL-PRF · supplier quals · NDA releases
        </p>
        <p className="mt-2 font-mono text-[10.5px] text-white/45">
          Never inform another tenant&rsquo;s results. Ever.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="mt-1 text-center label-mono text-[9px] tracking-[0.2em] text-white/40"
      >
        THE SCHEMA IS THE MOAT. NOT YOUR DATA.
      </motion.div>
    </div>
  );
}
