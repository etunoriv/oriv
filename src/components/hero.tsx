"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-init";

const signals = [
  { label: "DOMAIN", value: "Embedded Systems" },
  { label: "DATA", value: "2.8M+ Components Indexed" },
  { label: "APPROACH", value: "Pilot-First" },
  { label: "FOUNDED BY", value: "Engineers, Not Consultants" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const qualifierRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const signalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(qualifierRef.current, { opacity: 0, y: 10, duration: 0.4 })
        .from(
          [line1Ref.current, line2Ref.current],
          { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 },
          "-=0.1"
        )
        .from(bodyRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(signalsRef.current, { opacity: 0, y: 15, duration: 0.4 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh]">
      <div className="mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-center px-6 pt-24 pb-12">
        {/* ICP qualifier - prominent position */}
        <div ref={qualifierRef} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="bg-accent/15 text-accent font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
            Automotive
          </span>
          <span className="bg-accent/15 text-accent font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
            Defense
          </span>
          <span className="bg-accent/15 text-accent font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
            Industrial Automation
          </span>
          <span className="type-micro ml-1">FOR EMBEDDED TEAMS, 5-50 ENGINEERS</span>
        </div>

        {/* Headline */}
        <h1 className="type-macro text-foreground" style={{ fontSize: "clamp(1.8rem, 7vw, 8rem)" }}>
          <span ref={line1Ref} className="block">YOUR ENGINEERS SPEND</span>
          <span ref={line2Ref} className="block">WEEKS ON COMPONENTS. <span className="text-accent">WE FIX THAT.</span></span>
        </h1>

        {/* Body + CTAs - stacked, not grid */}
        <div ref={bodyRef} className="mt-8 max-w-2xl">
          <p className="text-muted leading-relaxed text-base md:text-lg">
            Oriv Studio turns the global component market into a searchable
            knowledge base. Select parts in minutes, simulate their real-world
            behavior, connect to physical hardware, and monitor everything from
            one workspace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#get-started"
              className="bg-accent px-8 py-3.5 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,197,46,0.3)]"
            >
              REQUEST A PILOT
            </a>
            <a
              href="#features"
              className="border border-line px-8 py-3.5 type-micro text-muted rounded-md btn-press transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-surface"
            >
              SEE HOW IT WORKS
            </a>
          </div>
        </div>

        {/* Credibility signals - integrated into hero */}
        <div ref={signalsRef} className="mt-12 pt-8 border-t border-line">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {signals.map((s) => (
              <div key={s.label}>
                <span className="type-micro text-accent font-bold block mb-1">{s.label}</span>
                <span className="text-foreground text-sm font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
