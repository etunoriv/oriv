"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-init";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  staggerChildren?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 0.8,
  stagger = 0.1,
  staggerChildren = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = staggerChildren ? el.children : [el];

    gsap.set(targets, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: staggerChildren ? stagger : 0,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, y, duration, stagger, staggerChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
