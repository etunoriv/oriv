"use client";

import { Reveal } from "@/lib/motion";
import { useBooker } from "@/components/booker";

/**
 * Final CTA — replaces the DesignPartner form section on the landing.
 * Document-style: kicker, headline, short paragraph, one CTA, email below.
 * Keeps id="contact" so the nav + hero anchors still resolve.
 */
export default function FinalCTA() {
  const { setOpen } = useBooker();
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-32 md:py-40"
      style={{ paddingBottom: "max(8rem, calc(8rem + env(safe-area-inset-bottom)))" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="headline-xl mb-6 max-w-3xl text-[var(--on-surface)]">
            Want a real say in the data layer?{" "}
            <span className="text-[var(--on-surface-variant)]">
              Email a co-founder.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mb-10 max-w-[560px] body-lg text-[var(--on-surface-variant)]">
            We&rsquo;re picking three teams for the Q3 cohort. One per category
            vertical. One of us replies, usually within a day.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mag inline-flex items-center gap-2 btn-primary"
          >
            <span>Talk to a co-founder</span>
            <span aria-hidden>→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
