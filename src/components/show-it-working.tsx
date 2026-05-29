"use client";

import { Reveal } from "@/lib/motion";
import { CanonicalDemoCard } from "@/components/canonical-demo";

/**
 * ShowItWorking — second product moment.
 * Hero shows what a canonical record looks like.
 * This shows the collapse: four vendor formats → one canonical field.
 */
export default function ShowItWorking() {
  return (
    <section
      id="show-it-working"
      className="relative overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="headline-xl mb-12 max-w-3xl text-[var(--on-surface)]">
            Four vendor formats.{" "}
            <span className="text-[var(--on-surface-variant)]">
              One canonical field.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <CanonicalDemoCard />
        </Reveal>
      </div>
    </section>
  );
}
