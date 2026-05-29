"use client";

import { Reveal } from "@/lib/motion";
import { useBooker } from "@/components/booker";

/**
 * Bottom-of-sub-page CTA. Sends qualified readers to the design-partner form.
 * Reuses Mini-CTA's tone — quiet, low-pressure, founder voice.
 */
export default function PageCTA({
  title = "Want to shape this with us?",
  body = "We're picking our first five customers. Tell us about your stack. Co-founders answer same week.",
}: {
  title?: string;
  body?: string;
}) {
  const { setOpen } = useBooker();
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <h3 className="headline-lg mb-4 text-[var(--on-surface)]">{title}</h3>
          <p className="mb-8 body-md text-[var(--on-surface-variant)]">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => setOpen(true)} className="mag btn-primary inline-flex items-center gap-2">
              <span>Apply as a design partner</span>
              <span className="arrow flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
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
            <a href="mailto:hello@oriv.io" className="btn-secondary">
              Or email directly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
