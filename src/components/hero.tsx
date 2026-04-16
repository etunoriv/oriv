"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-init";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const line4Ref = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(statusRef.current, { opacity: 0, y: 10, duration: 0.5 })
        .from(
          [line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current],
          { opacity: 0, y: 60, duration: 0.7, stagger: 0.1 },
          "-=0.2"
        )
        .from(dividerRef.current, { scaleX: 0, duration: 0.6, ease: "power2.inOut" }, "-=0.3")
        .from(bodyRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(footerRef.current, { opacity: 0, duration: 0.4 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh]">
      <div className="mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32">
        <div
          ref={statusRef}
          className="mb-12 flex flex-wrap items-center gap-x-4 gap-y-1"
        >
          <span className="type-micro text-accent font-bold">/// ORIV STUDIO</span>
          <span className="type-micro">ALPHA ACCESS</span>
        </div>

        <h1 className="type-macro text-foreground" style={{ fontSize: "clamp(2.5rem, 8vw, 10rem)" }}>
          <span ref={line1Ref} className="block">YOUR ENGINEERS</span>
          <span ref={line2Ref} className="block">SPEND WEEKS ON</span>
          <span ref={line3Ref} className="block">COMPONENTS.</span>
          <span ref={line4Ref} className="block text-accent">WE FIX THAT.</span>
        </h1>

        <div ref={dividerRef} className="my-10 origin-left">
          <div className="accent-line" />
        </div>

        <div ref={bodyRef} className="grid gap-10 md:grid-cols-2">
          <p className="text-muted leading-relaxed max-w-lg" style={{ fontSize: "0.95rem" }}>
            Oriv Studio turns the global component market into a searchable
            knowledge base. Select parts in minutes, simulate their real-world
            behavior, connect to physical hardware, and monitor everything from
            one workspace. Your team stops re-reading datasheets and starts
            shipping products.
          </p>

          <div className="flex flex-wrap items-end gap-4">
            <a
              href="#contact"
              className="bg-accent px-8 py-3.5 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,197,46,0.3)]"
            >
              REQUEST EARLY ACCESS
            </a>
            <a
              href="#features"
              className="border border-line px-8 py-3.5 type-micro text-muted rounded-md btn-press transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-surface"
            >
              SEE HOW IT WORKS
            </a>
          </div>
        </div>

        <div
          ref={footerRef}
          className="mt-20 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5"
          aria-hidden="true"
        >
          <samp className="type-micro">AUTOMOTIVE / DEFENSE / INDUSTRIAL</samp>
          <samp className="type-micro">EMBEDDED TEAMS, 5-50 ENGINEERS</samp>
          <samp className="type-micro hidden sm:inline">ALPHA EDITION</samp>
        </div>
      </div>
    </section>
  );
}
