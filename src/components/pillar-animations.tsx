"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { memo, useEffect, useState } from "react";

const spring = { type: "spring" as const, stiffness: 110, damping: 22 };

/* -------------------------------------------------------------------------- */
/*  01 · Selection — typewriter prompt + re-ranking results                   */
/* -------------------------------------------------------------------------- */

const PROMPTS = [
  '"3.3V buck, 3A, < 30mV ripple, AEC-Q100, in stock"',
  '"low-noise opamp, GBW > 10MHz, RRIO, SOT-23"',
  '"CAN-FD transceiver, 5Mbps, sleep < 10µA"',
];

const RANKINGS = [
  [
    { id: "TPS62933", score: 92 },
    { id: "LMR38020", score: 88 },
    { id: "MPM3833C", score: 84 },
  ],
  [
    { id: "OPA388", score: 94 },
    { id: "ADA4807", score: 91 },
    { id: "LMV981", score: 79 },
  ],
  [
    { id: "TCAN1462", score: 90 },
    { id: "MCP2542FD", score: 87 },
    { id: "NCV7344", score: 83 },
  ],
];

export const SelectionAnim = memo(function SelectionAnim() {
  const [pIdx, setPIdx] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const target = PROMPTS[pIdx];
    let i = 0;
    setText("");
    const tick = setInterval(() => {
      i++;
      setText(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(tick);
        const next = setTimeout(() => setPIdx((v) => (v + 1) % PROMPTS.length), 1800);
        return () => clearTimeout(next);
      }
    }, 38);
    return () => clearInterval(tick);
  }, [pIdx]);

  const ranking = RANKINGS[pIdx];

  return (
    <div className="rounded-xl bg-black/40 p-4 ring-1 ring-white/5">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
        <span>/ search</span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <motion.span
            className="h-1 w-1 rounded-full bg-emerald-300"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          live
        </span>
      </div>
      <div className="mt-1.5 font-mono text-[13px] leading-snug text-white/85">
        {text}
        <motion.span
          aria-hidden
          className="ml-0.5 inline-block h-3.5 w-[1.5px] translate-y-0.5 bg-emerald-300"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {ranking.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              layoutId={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ ...spring, delay: i * 0.06 }}
              className="rounded-lg bg-white/[0.04] p-2 ring-1 ring-white/5"
            >
              <div className="font-mono text-[10px] text-white/55">{p.id}</div>
              <div className="mt-1 text-[12px] text-emerald-300/90">match {p.score}</div>
              <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-emerald-300/80"
                  initial={{ width: 0 }}
                  animate={{ width: `${p.score}%` }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
});

/* -------------------------------------------------------------------------- */
/*  02 · Real-Time Simulation — continuously drawing waveform                 */
/* -------------------------------------------------------------------------- */

export const SimulationAnim = memo(function SimulationAnim() {
  const PATH_A = "M0 100 Q30 30 60 80 T120 70 T180 50 T240 70 T320 30";
  const PATH_B = "M0 110 Q30 70 60 95 T120 85 T180 78 T240 90 T320 64";

  return (
    <div>
      <svg viewBox="0 0 320 140" className="w-full">
        <defs>
          <linearGradient id="sim-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#a78bfa" stopOpacity="0.55" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4">
          {[28, 56, 84, 112].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} />
          ))}
        </g>

        <motion.path
          d={`${PATH_A} L320 140 L0 140 Z`}
          fill="url(#sim-fill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1] }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        <motion.path
          d={PATH_A}
          fill="none"
          stroke="#a78bfa"
          strokeWidth={1.6}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatType: "loop", repeatDelay: 1.2 }}
        />

        <motion.path
          d={PATH_B}
          fill="none"
          stroke="#6ee7b7"
          strokeWidth={1.2}
          strokeLinecap="round"
          opacity={0.75}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.3, repeat: Infinity, repeatDelay: 1.0 }}
        />

        <motion.circle
          r={3}
          fill="#a78bfa"
          cx={0}
          cy={100}
          initial={{ cx: 0, cy: 100 }}
          animate={{
            cx: [0, 60, 120, 180, 240, 320],
            cy: [100, 80, 70, 50, 70, 30],
          }}
          transition={{ duration: 3.2, ease: "linear", repeat: Infinity }}
        />
      </svg>
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        <span>SPICE · 12µs</span>
        <span>Δ measured · 0.41mV</span>
      </div>
    </div>
  );
});

/* -------------------------------------------------------------------------- */
/*  03 · Hybrid — breathing mode badges                                       */
/* -------------------------------------------------------------------------- */

export const HybridAnim = memo(function HybridAnim() {
  const modes = [
    { k: "Virtual", v: "QEMU / Renode", c: "#a78bfa" },
    { k: "Physical", v: "JTAG live", c: "#6ee7b7" },
    { k: "Hybrid", v: "co-sim", c: "#fbbf24" },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % modes.length), 1700);
    return () => clearInterval(t);
  }, [modes.length]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {modes.map((m, i) => {
        const on = i === active;
        return (
          <motion.div
            key={m.k}
            animate={{ scale: on ? 1.04 : 1 }}
            transition={spring}
            className="relative rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/5"
          >
            {on && (
              <motion.span
                layoutId="hybrid-glow"
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  boxShadow: `0 0 0 1px ${m.c}40, 0 12px 40px -16px ${m.c}80`,
                }}
                transition={spring}
              />
            )}
            <div className="flex items-center gap-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: m.c }}
                animate={on ? { scale: [1, 1.6, 1], opacity: [1, 0.6, 1] } : { scale: 1 }}
                transition={{ duration: 1.2, repeat: on ? Infinity : 0, ease: "easeInOut" }}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                {m.k}
              </span>
            </div>
            <div className="mt-2 text-[12px] text-white/85">{m.v}</div>
          </motion.div>
        );
      })}
    </div>
  );
});

/* -------------------------------------------------------------------------- */
/*  04 · Instruments — logic-analyzer scroll + ticking metrics                */
/* -------------------------------------------------------------------------- */

const LOGIC_ROWS = [
  "01010100110010110100110100110010110100110100110010110100110100110010",
  "11001100110011001100110011001100110011001100110011001100110011001100",
  "10101010101010101010101010101010101010101010101010101010101010101010",
  "00111100001111000011110000111100001111000011110000111100001111000011",
];
const LOGIC_COLORS = ["#a78bfa", "#6ee7b7", "#fbbf24", "#f5f5f3"];

function Ticker({
  value,
  suffix,
  formatter = (n) => n.toFixed(0),
}: {
  value: number;
  suffix?: string;
  formatter?: (n: number) => string;
}) {
  const mv = useMotionValue(value);
  const [display, setDisplay] = useState(formatter(value));
  useEffect(() => {
    const ctrl = animate(mv, value, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(formatter(v)),
    });
    return ctrl.stop;
  }, [value, formatter, mv]);
  return (
    <span>
      {display}
      {suffix && <span className="text-base text-white/40">{suffix}</span>}
    </span>
  );
}

export const InstrumentsAnim = memo(function InstrumentsAnim() {
  const [power, setPower] = useState(312);
  const [errors, setErrors] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setPower((p) => Math.max(280, Math.min(345, p + (Math.random() - 0.5) * 18)));
      setErrors((e) => (Math.random() > 0.92 ? e + 1 : e));
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 rounded-xl bg-black/40 p-4 ring-1 ring-white/5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            Logic · 8ch · 200MS/s
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-300/80">
            <motion.span
              className="h-1 w-1 rounded-full bg-emerald-300"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
            capturing
          </span>
        </div>
        <div className="mt-3 space-y-1.5 overflow-hidden">
          {LOGIC_ROWS.map((row, i) => (
            <div key={i} className="overflow-hidden whitespace-nowrap">
              <motion.div
                className="font-mono text-[10px] tracking-[0.05em]"
                style={{ color: `${LOGIC_COLORS[i]}cc` }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 14 + i * 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {`CH${i} · ${row}${row}`}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          Power
        </div>
        <div className="mt-3 font-display text-2xl text-white">
          <Ticker value={power} suffix=" mW" />
        </div>
        <div className="mt-2 flex h-1 gap-[2px]">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-full bg-emerald-300/70"
              animate={{ scaleY: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.2 + (i % 5) * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.04,
              }}
              style={{ originY: 1 }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          Bus errors
        </div>
        <div className="mt-3 font-display text-2xl text-white">
          <Ticker value={errors} suffix=" /min" />
        </div>
        <div className="mt-1 text-[11px] text-white/40">CAN-FD · 5 Mbps</div>
      </div>
    </div>
  );
});
