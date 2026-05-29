"use client";

import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { memo, useEffect, useState } from "react";

const PARTS = [
  { id: "STM32G474RET6", desc: "Cortex-M4F · 170 MHz · 512 KB Flash" },
  { id: "STM32H743VIT6", desc: "Cortex-M7 · 480 MHz · 2 MB Flash" },
  { id: "RA6M5 R7FA6M5BH", desc: "Cortex-M33 · 200 MHz · 2 MB Flash" },
];

function useTickerString(target: string, speed = 38) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    setText("");
    const id = setInterval(() => {
      i++;
      setText(target.slice(0, i));
      if (i >= target.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [target, speed]);
  return text;
}

function ThermalTicker() {
  const mv = useMotionValue(62.4);
  const [val, setVal] = useState(62.4);
  useEffect(() => {
    let cancelled = false;
    const loop = () => {
      if (cancelled) return;
      const target = 60 + Math.random() * 6;
      animate(mv, target, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setVal(v),
        onComplete: () => setTimeout(loop, 400),
      });
    };
    loop();
    return () => {
      cancelled = true;
    };
  }, [mv]);
  return (
    <div className="text-right font-mono text-[10px] text-white/55 tabular-nums">
      <div className="tabular-nums">{val.toFixed(1)}°C</div>
      <div className="text-emerald-300/80">+0.3 / 5m</div>
    </div>
  );
}

const SparklineCard = memo(function SparklineCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
        02 · Simulation
      </div>
      <div className="mt-3 text-[12px] text-white/55">Buck-converter ripple</div>
      <div className="mt-auto pt-4">
        <svg viewBox="0 0 200 80" className="w-full">
          <defs>
            <linearGradient id="hero-sim" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#a78bfa" stopOpacity="0.6" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 60 Q20 20 40 50 T80 40 T120 30 T160 38 T200 22 L200 80 L0 80 Z"
            fill="url(#hero-sim)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M0 60 Q20 20 40 50 T80 40 T120 30 T160 38 T200 22"
            fill="none"
            stroke="#a78bfa"
            strokeWidth={1.4}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.4,
              ease: [0.16, 1, 0.3, 1],
              repeat: Infinity,
              repeatDelay: 1.2,
            }}
          />
          <motion.circle
            r={2.5}
            fill="#a78bfa"
            cx={0}
            cy={60}
            initial={{ cx: 0, cy: 60 }}
            animate={{
              cx: [0, 40, 80, 120, 160, 200],
              cy: [60, 50, 40, 30, 38, 22],
            }}
            transition={{ duration: 3.2, ease: "linear", repeat: Infinity }}
          />
        </svg>
        <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          <span>Vout 3.30V</span>
          <span>Δ 18mV</span>
        </div>
      </div>
    </div>
  );
});

const SelectionCard = memo(function SelectionCard() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % PARTS.length), 4200);
    return () => clearInterval(t);
  }, []);
  const part = PARTS[idx];
  const id = useTickerString(part.id, 32);

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
        01 · Selection
      </div>

      {/* Reserved-height title row prevents jitter */}
      <div className="mt-3 flex h-9 items-center">
        <span className="font-display text-[22px] tabular-nums leading-none text-white">
          {id}
        </span>
        <motion.span
          aria-hidden
          className="ml-0.5 inline-block h-[18px] w-[2px] bg-emerald-300"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Reserved-height descriptor row */}
      <div className="mt-1 h-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={part.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35 }}
            className="text-[12px] text-white/50"
          >
            {part.desc}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-auto grid grid-cols-3 gap-2 pt-4 text-[11px]">
        {[
          ["Lifecycle", "Active"],
          ["Lead time", "12w"],
          ["RoHS", "Compliant"],
        ].map(([k, v], i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="rounded-lg bg-black/40 p-2 ring-1 ring-white/5"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              {k}
            </div>
            <div className="mt-1 text-white/90">{v}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

const InstrumentsCard = memo(function InstrumentsCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          04 · Instruments
        </div>
        <div className="mt-1 truncate text-[12px] text-white/55">
          Live thermal · Board #A12
        </div>
      </div>
      <div className="flex items-end gap-1">
        {[18, 26, 22, 30, 28, 36, 32, 41, 38, 44, 40, 46].map((h, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-emerald-400/30 to-emerald-300"
            style={{ height: `${h}px`, originY: 1 }}
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.4 + (i % 5) * 0.12,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
      <ThermalTicker />
    </div>
  );
});

export default function HeroDashboard() {
  return (
    <div className="rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10">
      <div
        className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-gradient-to-br from-[#0d0d12] to-[#08080b] p-6 sm:p-7"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            studio.live · session 04A
          </div>
          <div className="font-mono text-[10px] text-white/30">v0.4 · alpha</div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-3">
          {/* Equal-height row: Selection (7) + Simulation (5) */}
          <div className="col-span-12 sm:col-span-7">
            <SelectionCard />
          </div>
          <div className="col-span-12 sm:col-span-5">
            <SparklineCard />
          </div>
          <div className="col-span-12">
            <InstrumentsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
