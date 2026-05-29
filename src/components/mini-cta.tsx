"use client";

import Link from "next/link";
import { Reveal } from "@/lib/motion";

/**
 * Bookend hero — echoes the opening hero. Cinematic, elevated, gridline-aligned.
 *
 *   - Aligned to the same max-w-7xl gridlines as nav + hero (no center drift)
 *   - Single column, left-aligned, max-w-5xl (matches hero)
 *   - Ambient yellow wash top-right, faint white wash bottom-left (hero echo)
 *   - Hairline rule above the headline to anchor it visually
 *   - Eyebrow tag for orientation
 */
export default function MiniCTA() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 88% 12%, rgba(255,197,46,0.14), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 0% 100%, rgba(255,255,255,0.035), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2.75rem,6.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--on-surface)]">
              Built for{" "}
              <span className="liquid-logo-dark">hardware engineering.</span>
            </h2>
            <h2 className="font-display mt-1 text-[clamp(2.75rem,6.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--on-surface-variant)]">
              Available with design partners.
            </h2>

            <p className="mt-7 max-w-[560px] body-lg text-[var(--on-surface-variant)]">
              Five spots. Three remaining. Founders read every reply within 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="mag group inline-flex items-center gap-2 btn-primary"
              >
                <span>Talk to a founder</span>
                <span className="arrow flex h-6 w-6 items-center justify-center rounded bg-black/10">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
              <a
                href="mailto:hello@oriv.io"
                className="group inline-flex items-center gap-1.5 text-[13.5px] text-[var(--on-surface)] underline-offset-4 transition-all hover:underline"
              >
                hello@oriv.io
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
