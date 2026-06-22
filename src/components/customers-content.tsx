"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal, Stagger, Item } from "@/lib/motion";
import { useBooker } from "@/components/booker";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Customers — pre-launch state. We're in design-partner phase: working with
 * teams under NDA. No logos to show yet. The page exists so that when the
 * first PoC closes we swap the anonymized profiles for named case studies
 * without a redesign.
 */

const partners = [
  {
    industry: "Aerospace & Defense",
    profile: "DMSMS office at a top-10 US prime contractor",
    scope:
      "Twenty-year SCD archive against the public corpus. Alternates investigations that ran weeks now resolve in a day.",
    stage: "Active design partner",
  },
  {
    industry: "Hardware R&D",
    profile: "Semiconductor design team at a multi-billion-dollar fab",
    scope:
      "AI agent reads the Oriv canonical store. Engineers ask in natural language; the agent returns cited alternates with derated specs.",
    stage: "Active design partner",
  },
  {
    industry: "Avionics Test",
    profile: "HIL bench engineering at a flight-systems integrator",
    scope:
      "Per-rig wiring code generated from Oriv records. New HIL setups go from two weeks to one morning.",
    stage: "Q3 cohort candidate",
  },
];

const partnership = [
  {
    title: "Schema co-design",
    body: "Your component categories ship as first-class canonical fields. Your team reviews the schema before it lands in production.",
  },
  {
    title: "Private tail ingestion",
    body: "Your SCDs, MIL-PRF specs, supplier quals, and approved vendor lists are ingested into your tenant only. Never inform another tenant's results.",
  },
  {
    title: "Direct line to engineering",
    body: "Founders read every email. Bug reports land in front of the people who wrote the code. No tier-one routing.",
  },
  {
    title: "Pricing locked at design-partner rate",
    body: "Early customers carry the design-partner rate through the GA pricing transition. No re-papering after launch.",
  },
];

export default function CustomersContent() {
  const { setOpen } = useBooker();
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="headline-xl mb-8 max-w-[860px] text-[var(--on-surface)]"
          >
            Design partners.{" "}
            <span className="text-[var(--on-surface-variant)]">
              Working under NDA today. Named on this page when each partner is ready.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] md:gap-16"
          >
            <p className="body-lg text-[var(--on-surface-variant)]">
              Oriv is in the design-partner phase. We&rsquo;re building the canonical
              data layer with three teams whose component categories shape the schema
              for everyone who comes after.
            </p>
            <p className="body-lg text-[var(--on-surface-variant)]">
              Logos and named case studies land on this page when each partner is
              cleared to be public. Until then, the profiles below describe the
              engineering context the partnership covers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anonymized partner profiles */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between gap-6">
              <h2 className="headline-lg text-[var(--on-surface)]">
                Who we&rsquo;re working with
              </h2>
              <span className="label-mono text-[10px] tracking-[0.18em] text-[var(--outline)]">
                {partners.length.toString().padStart(2, "0")} ACTIVE
              </span>
            </div>
          </Reveal>

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.1} delayChildren={0.05}>
            {partners.map((p, i) => (
              <Item key={p.profile}>
                <article className="grid grid-cols-[2.75rem_minmax(0,_1fr)] items-start gap-4 border-b border-[var(--border-subtle)] py-8 transition-colors duration-200 hover:bg-[var(--surface-elevated)] md:grid-cols-[3.5rem_minmax(0,_0.85fr)_minmax(0,_1.5fr)_auto] md:gap-8 md:px-3 md:py-10">
                  <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)] md:pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="label-mono mb-2 text-[10px] tracking-[0.18em] text-[var(--on-surface)]">
                      {p.industry.toUpperCase()}
                    </p>
                    <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17px]">
                      {p.profile}
                    </h3>
                  </div>
                  <p className="col-span-2 body-md text-[var(--on-surface-variant)] md:col-span-1">
                    {p.scope}
                  </p>
                  <span className="col-span-2 inline-flex items-center gap-2 self-start font-mono text-[11px] tracking-[0.04em] text-[var(--on-surface-variant)] md:col-span-1 md:justify-self-end md:pt-1">
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{
                        background:
                          p.stage === "Active design partner"
                            ? "#7CDC9E"
                            : "var(--oriv-yellow)",
                      }}
                    />
                    {p.stage}
                  </span>
                </article>
              </Item>
            ))}
          </Stagger>

          <Reveal delay={200}>
            <p className="mt-10 max-w-[680px] body-md text-[var(--on-surface-variant)]">
              Partner names land on this page as each team is ready. Until then, every
              detail above is accurate at the engineering-context level &mdash; profile,
              workflow, scope. The companies are real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What design partnership looks like */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
              <h2 className="headline-xl text-[var(--on-surface)]">
                What design partnership{" "}
                <span className="text-[var(--on-surface-variant)]">
                  looks like.
                </span>
              </h2>
              <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
                Four guarantees we make to every design partner, each one written into the agreement.
              </p>
            </div>
          </Reveal>

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
            {partnership.map((p, i) => (
              <Item key={p.title}>
                <div className="grid grid-cols-[2.75rem_minmax(0,_1fr)] items-baseline gap-4 border-b border-[var(--border-subtle)] py-7 transition-colors duration-200 hover:bg-[var(--surface-elevated)] md:grid-cols-[3.5rem_minmax(0,_0.9fr)_minmax(0,_1.4fr)] md:gap-8 md:px-3">
                  <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17px]">
                    {p.title}
                  </h3>
                  <p className="body-md text-[var(--on-surface-variant)] md:text-[14.5px]">
                    {p.body}
                  </p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA — editorial close matching PageCTA pattern */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="max-w-[720px]">
              <h2 className="mb-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--on-surface)]">
                Q3 cohort.{" "}
                <span className="text-[var(--on-surface-variant)]">
                  Three spots open.
                </span>
              </h2>
              <p className="mb-8 text-[16.5px] leading-[1.65] text-[var(--on-surface-variant)] md:text-[17px]">
                If your team owns a regulated BOM and your private specs already
                outweigh what the public corpus covers, you&rsquo;re who we&rsquo;re
                looking for. One call with a co-founder. We&rsquo;ll know on the call
                whether the schema fit is there.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <span>Talk to a co-founder</span>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded bg-black/10"
                    aria-hidden
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <Link
                  href="mailto:hello@oriv.io?subject=Design partner enquiry"
                  className="inline-flex items-center text-[14px] font-medium tracking-[-0.01em] text-[var(--on-surface-variant)] underline underline-offset-4 transition-colors hover:text-[var(--on-surface)]"
                >
                  Or email hello@oriv.io
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
