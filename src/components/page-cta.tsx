"use client";

import { Reveal } from "@/lib/motion";
import { useBooker } from "@/components/booker";

/**
 * Sub-page sign-off — editorial, left-aligned, no banner. Renders the booker
 * trigger and email as inline links inside a single sentence so the close of
 * every sub-page reads as prose rather than a templated CTA banner.
 */
export default function PageCTA({
  title = "Want to shape this with us?",
  body = "We're picking three design partners for Q3. One per vertical. Co-founders answer same week.",
}: {
  title?: string;
  body?: string;
}) {
  const { setOpen } = useBooker();
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h3 className="font-display max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--on-surface)]">
            {title}
          </h3>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-[640px] text-[16.5px] leading-[1.7] text-[var(--on-surface-variant)] md:text-[17px]">
            {body} Or email{" "}
            <a
              href="mailto:hello@oriv.io"
              className="text-[var(--on-surface)] underline decoration-dotted decoration-[var(--outline)] underline-offset-[5px] transition-colors duration-200 hover:text-[var(--oriv-yellow)] hover:decoration-[var(--oriv-yellow)]"
            >
              hello@oriv.io
            </a>{" "}
            directly.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mag group mt-8 inline-flex items-center gap-2 btn-primary"
          >
            <span>Apply as a design partner</span>
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
