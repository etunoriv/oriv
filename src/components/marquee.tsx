"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

const items = [
  "STM32 · NXP i.MX · Renesas RA · Nordic nRF",
  "SPICE · IBIS · Touchstone · Verilog-A",
  "JTAG · SWD · Logic · Spectrum · Power",
  "USB · CAN-FD · Ethernet · LIN · I3C",
  "Bring-up in hours, not weeks",
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 4], {
    clamp: false,
  });

  // Continuous translation track
  const baseX = useMotionValue(0);
  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const v = velocityFactor.get();
      const dir = v < 0 ? -1 : 1;
      const speed = 30 + Math.min(140, Math.abs(v) * 30);
      baseX.set(((baseX.get() - dir * speed * dt) % 1000) || 0);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [baseX, velocityFactor]);

  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <section
      ref={ref}
      className="relative mt-20 overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-7"
    >
      <motion.div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        style={{ x }}
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45"
          >
            <span className="mr-16 text-white/15">◆</span>
            {t}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
