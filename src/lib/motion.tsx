"use client";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Animated reveal with stagger. Drop-in replacement for static blocks.
 * Children get a fade-up + blur unblur as the parent enters view.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  y?: number;
  once?: boolean;
}) {
  // @ts-expect-error polymorphic
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Stagger wrapper: each direct child animates with a delay step.
 * Use with <RevealItem> children.
 */
export function Stagger({
  children,
  className,
  step = 0.08,
  delayChildren = 0.05,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
  delayChildren?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: step, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  className,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Counter that animates from 0 to value when in view. */
export const Counter = memo(function Counter({
  value,
  format = (n) => n.toFixed(1),
  suffix,
  duration = 1.6,
}: {
  value: number;
  format?: (n: number) => string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(format(0));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, value, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(format(v)),
    });
    return ctrl.stop;
  }, [inView, value, mv, format, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
});
