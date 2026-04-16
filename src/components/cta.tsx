"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-init";

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const headline = headlineRef.current;
    if (!el || !headline) return;

    const words = headline.querySelectorAll("[data-word]");

    gsap.set(words, { opacity: 0.15 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      end: "top 20%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        words.forEach((word, i) => {
          const wordProgress = (progress - i / words.length) * words.length;
          const opacity = Math.min(1, Math.max(0.15, wordProgress));
          gsap.set(word, { opacity });
        });
      },
    });

    return () => { trigger.kill(); };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6">
        <span className="type-micro text-accent font-bold block mb-8">/// WHAT HAPPENS NEXT</span>
        <h2
          ref={headlineRef}
          className="type-macro text-foreground"
          style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
        >
          <span data-word>READY </span>
          <span data-word>TO </span>
          <span data-word>SEE </span>
          <span data-word>WHAT </span>
          <span data-word className="text-accent">WEEKS </span>
          <br className="hidden md:block" />
          <span data-word>LOOK </span>
          <span data-word>LIKE </span>
          <span data-word>AS </span>
          <span data-word className="text-accent">MINUTES?</span>
        </h2>

        <div className="accent-line my-10" />

        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-muted max-w-lg leading-relaxed" style={{ fontSize: "0.95rem" }}>
            We run a focused pilot with your engineering team. Real
            components, real constraints, real data. You will know within
            weeks whether Oriv fits your workflow. No six-month evaluation
            cycles. No slideware.
          </p>

          <div className="flex flex-wrap items-end gap-4">
            <a
              href="#contact"
              className="bg-accent px-8 py-3.5 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,197,46,0.3)]"
            >
              REQUEST A PILOT
            </a>
            <a
              href="https://linkedin.com/company/oriv-io"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line px-8 py-3.5 type-micro text-muted rounded-md btn-press transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-surface"
            >
              FOLLOW ON LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
