"use client";

import { Reveal } from "@/lib/motion";
import { useBooker } from "@/components/booker";

/**
 * Final CTA — editorial close for the landing page. Matches the H2 scale of
 * every other section so it reads as a chapter close, not a banner. No
 * founder signature.
 */
export default function FinalCTA() {
  const { setOpen } = useBooker();
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-28"
      style={{ paddingBottom: "max(6rem, calc(6rem + env(safe-area-inset-bottom)))" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h3 className="font-display max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--on-surface)]">
            We&rsquo;re picking three teams for the Q3 cohort.{" "}
            <span className="text-[var(--on-surface-variant)]">
              One per vertical. One of us replies within a day.
            </span>
          </h3>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-[640px] text-[16.5px] leading-[1.7] text-[var(--on-surface-variant)] md:text-[17px]">
            Design partnership: schema co-designed with your team, private data
            isolated to your tenant, pricing locked through GA. Email{" "}
            <a
              href="mailto:hello@oriv.io"
              className="text-[var(--on-surface)] underline decoration-dotted decoration-[var(--outline)] underline-offset-[5px] transition-colors duration-200 hover:text-[var(--oriv-yellow)] hover:decoration-[var(--oriv-yellow)]"
            >
              hello@oriv.io
            </a>{" "}
            &mdash; every line is read.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mag group mt-8 inline-flex items-center gap-2 btn-primary"
          >
            <span>Talk to a co-founder</span>
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
          </button>
        </Reveal>
      </div>
    </section>
  );
}
