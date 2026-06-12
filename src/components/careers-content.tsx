"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal, Stagger, Item } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

const roles = [
  {
    title: "Founding Engineer: Extraction & NLP",
    team: "Engineering",
    location: "San Francisco · Hybrid",
    type: "Full-time",
    description:
      "Build the extraction pipeline that turns 40-page PDFs and MIL-PRF specs into structured canonical records. You care deeply about precision. An incorrect unit or missing condition tuple is a defect. Not acceptable noise.",
    stack: ["Python", "PyTorch", "LLMs", "SQL", "document parsing"],
  },
  {
    title: "Founding Engineer: Platform & APIs",
    team: "Engineering",
    location: "San Francisco · Hybrid",
    type: "Full-time",
    description:
      "Design and own the query layer: REST, GraphQL, SQL, MCP. You'll shape the API contract that EDA tools, AI agents, and PLM systems talk to. Tenant isolation and performance at scale are first-class constraints.",
    stack: ["TypeScript", "Go or Rust", "PostgreSQL", "GraphQL", "OpenAPI"],
  },
  {
    title: "Customer-Facing Technical Lead",
    team: "Customer Success",
    location: "San Francisco · Hybrid",
    type: "Full-time",
    description:
      "Own the technical side of design partner relationships. You understand regulated hardware workflows: A&D, automotive, MedTech. Well enough to scope a canonical schema for a customer's component categories on day one.",
    stack: ["Hardware domain knowledge", "ITAR workflows", "EDA/PLM experience a plus"],
  },
];

const benefits = [
  { label: "Equity", note: "Meaningful early-stage equity. We discuss ranges in the first call." },
  { label: "Salary", note: "Market-rate SF engineering comp. No below-market 'startup discount'." },
  { label: "Health", note: "Full medical, dental, vision. Covered for you and dependents." },
  { label: "Async-first", note: "Small team, no meeting sprawl. You own your time." },
  { label: "Hardware budget", note: "Whatever you need to think clearly at your desk." },
  { label: "Quiet culture", note: "We build for regulated engineering. The work is precise, not viral." },
];

const principles = [
  "We hire people bothered by incorrect data. Not people okay with 'good enough'.",
  "The problem is hard. The customers are expert engineers. The bar for correctness is high.",
  "Small team, long timeline. We're building infrastructure that hardware engineering will use for a decade.",
];

export default function CareersContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="headline-xl mb-8 max-w-[820px] text-[var(--on-surface)]"
          >
            Small team.{" "}
            <span className="text-[var(--on-surface-variant)]">
              Hard problem. Customers who will notice if you get it wrong.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="max-w-[680px] space-y-4"
          >
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--oriv-yellow)]" aria-hidden />
                <p className="body-lg text-[var(--on-surface-variant)]">{p}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open roles — editorial rows */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between gap-6">
              <h2 className="headline-lg text-[var(--on-surface)]">Open roles</h2>
              <span className="label-mono text-[10px] tracking-[0.18em] text-[var(--outline)]">
                {roles.length.toString().padStart(2, "0")} OPEN
              </span>
            </div>
          </Reveal>

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
            {roles.map((role, i) => (
              <Item key={role.title}>
                <article className="group grid grid-cols-[2.75rem_minmax(0,_1fr)] items-start gap-4 border-b border-[var(--border-subtle)] py-7 transition-colors duration-200 hover:bg-[var(--surface-elevated)] md:grid-cols-[3.5rem_minmax(0,_1fr)_auto] md:gap-8 md:px-3">
                  <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)] md:pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[18px]">
                      {role.title}
                    </h3>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      <span className="label-mono rounded px-2 py-0.5 text-[9.5px] tracking-[0.14em] border border-[var(--border-subtle)] text-[var(--on-surface-variant)]">
                        {role.team}
                      </span>
                      <span className="label-mono rounded px-2 py-0.5 text-[9.5px] tracking-[0.14em] border border-[var(--border-subtle)] text-[var(--on-surface-variant)]">
                        {role.location}
                      </span>
                      <span className="label-mono rounded px-2 py-0.5 text-[9.5px] tracking-[0.14em] border border-[var(--border-subtle)] text-[var(--on-surface-variant)]">
                        {role.type}
                      </span>
                    </div>
                    <p className="mb-3 max-w-[680px] body-md text-[var(--on-surface-variant)]">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {role.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded px-2 py-0.5 font-mono text-[11px] text-[var(--on-surface-variant)] bg-[var(--surface-container)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`mailto:hello@oriv.io?subject=Application: ${encodeURIComponent(role.title)}&body=Role I'm applying for: ${encodeURIComponent(role.title)}%0A%0ABackground:%0A%0ALinks / work:%0A`}
                    className="col-span-2 inline-flex shrink-0 items-center gap-2 btn-primary md:col-span-1 md:justify-self-end"
                  >
                    <span>Apply</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-black/10" aria-hidden>
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
                </article>
              </Item>
            ))}
          </Stagger>

          {/* No-roles fallback as inline sentence */}
          <Reveal delay={200}>
            <p className="mt-10 max-w-[680px] body-md text-[var(--on-surface-variant)]">
              Don&rsquo;t see a role that fits? Email{" "}
              <Link
                href="mailto:hello@oriv.io"
                className="text-[var(--on-surface)] underline underline-offset-4 transition-colors hover:text-[var(--oriv-yellow)]"
              >
                hello@oriv.io
              </Link>{" "}
              with what you&rsquo;re building and why it&rsquo;s relevant. We read every line.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits — numbered spec list */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="headline-lg mb-10 text-[var(--on-surface)]">What we offer</h2>
          </Reveal>

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.06} delayChildren={0.05}>
            {benefits.map((b, i) => (
              <Item key={b.label}>
                <div className="grid grid-cols-[2.75rem_minmax(0,_1fr)] items-baseline gap-4 border-b border-[var(--border-subtle)] py-6 transition-colors duration-200 hover:bg-[var(--surface-elevated)] md:grid-cols-[3.5rem_minmax(0,_0.7fr)_minmax(0,_1.6fr)] md:gap-8 md:px-3">
                  <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17px]">
                    {b.label}
                  </h3>
                  <p className="body-md text-[var(--on-surface-variant)] md:text-[14.5px]">
                    {b.note}
                  </p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How we hire — editorial close matching PageCTA */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="max-w-[720px]">
              <h2 className="mb-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--on-surface)]">
                How we hire.
              </h2>
              <p className="mb-8 text-[16.5px] leading-[1.65] text-[var(--on-surface-variant)] md:text-[17px]">
                Email with your background and links. One call with a co-founder. One
                technical session (paid). Then an offer. We want to know how you think,
                not how you take a take-home.
              </p>
              <Link
                href="mailto:hello@oriv.io?subject=Interest in joining Oriv"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <span>Email a co-founder</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-black/10" aria-hidden>
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
