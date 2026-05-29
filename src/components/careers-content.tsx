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
  { label: "No growth-hack culture", note: "We build for regulated engineering. The work is precise, not viral." },
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

      {/* Open roles */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="headline-lg mb-10 text-[var(--on-surface)]">Open roles</h2>
          </Reveal>

          <Stagger className="space-y-5" step={0.1} delayChildren={0.05}>
            {roles.map((role) => (
              <Item key={role.title}>
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
                  <div className="border-b border-[var(--border-subtle)] px-6 py-5 md:px-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-2 text-[16px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
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
                      </div>
                      <Link
                        href={`mailto:hello@oriv.io?subject=Application: ${encodeURIComponent(role.title)}&body=Role I'm applying for: ${encodeURIComponent(role.title)}%0A%0ABackground:%0A%0ALinks / work:%0A`}
                        className="inline-flex shrink-0 items-center gap-2 btn-primary"
                      >
                        <span>Apply</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-black/10">
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
                  </div>

                  <div className="px-6 py-5 md:px-8">
                    <p className="mb-4 body-md text-[var(--on-surface-variant)]">{role.description}</p>
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
                </div>
              </Item>
            ))}
          </Stagger>

          {/* No open roles fallback — always show the general contact */}
          <Reveal delay={200}>
            <div className="mt-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-container-low)] px-6 py-5">
              <p className="body-md text-[var(--on-surface-variant)]">
                Don&rsquo;t see a role that fits? If you care about the problem and have relevant
                domain depth, email{" "}
                <Link
                  href="mailto:hello@oriv.io"
                  className="text-[var(--on-surface)] underline underline-offset-4 transition-colors hover:text-[var(--oriv-yellow)]"
                >
                  hello@oriv.io
                </Link>{" "}
                with what you&rsquo;re building and why it&rsquo;s relevant. We read every email.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="headline-lg mb-10 text-[var(--on-surface)]">What we offer</h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" step={0.08} delayChildren={0.05}>
            {benefits.map((b) => (
              <Item key={b.label}>
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-5">
                  <p className="mb-1.5 text-[14px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                    {b.label}
                  </p>
                  <p className="body-md text-[var(--on-surface-variant)]">{b.note}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="headline-sm mb-2 text-[var(--on-surface)]">How we hire</h2>
                <p className="body-md max-w-[560px] text-[var(--on-surface-variant)]">
                  Email with your background and links. One call with a co-founder. One
                  technical session (paid). Then an offer. We want to know how you think.
                </p>
              </div>
              <Link
                href="mailto:hello@oriv.io?subject=Interest in joining Oriv"
                className="inline-flex shrink-0 items-center gap-2 btn-primary"
              >
                <span>Email a co-founder</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-black/10">
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
