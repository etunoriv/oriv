"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal, Stagger, Item } from "@/lib/motion";
import { useBooker } from "@/components/booker";

const ease = [0.16, 1, 0.3, 1] as const;

const founders = [
  {
    name: "Konstantin Klein",
    role: "Co-founder",
    initials: "KK",
    location: "Bremen, Germany",
    bio: "Fifteen years at BIBA Bremen researching the gap between engineering documentation and structured data. Worked on semantic integration for industrial automation, aviation hardware-in-the-loop test automation, and vendor-independent toolchains. Started at Lufthansa Systems on B2B aviation IT integration. Computer science, University of Bremen.",
  },
  {
    name: "Karthik Shenoy",
    role: "Co-founder",
    initials: "KS",
    location: "Mangaluru, India",
    bio: "Embedded systems engineer with fifteen years across aerospace, applied R&D, and patented hardware. Lead Principal Engineer on large-scale aviation HiL benches at OHS. Research Scientist at BIBA Bremen on fog computing, predictive maintenance, and 5G orchestration. Granted patent at Scientific Games for capacitive-coupling gaming chips (US9536388). M.Sc. Embedded System Design, Bremerhaven.",
  },
  {
    name: "Nitin Bhasin",
    role: "Co-founder",
    initials: "NB",
    location: "San Francisco Bay Area",
    bio: "Twenty years building and scaling deep-tech. Senior Director at Microsoft on enterprise AI, cloud, and quantum. Product Management at Cisco across 5G, mobility, and emerging tech. Berkeley SkyDeck advisor. MBA from MIT Sloan in entrepreneurship and innovation, cross-registered at Harvard Business School.",
  },
];

const values = [
  {
    label: "Canonical over convenient",
    body: "We could ship a fast search bar. We built a real parametric store. Extraction pipeline. Unit normalization. Condition tuples. Because shortcuts rot.",
  },
  {
    label: "Cited, not guessed",
    body: "Every field traces to its source page. In regulated engineering, an uncited parameter is a liability. We ship provenance as a primitive, not a feature.",
  },
  {
    label: "Your data stays yours",
    body: "Private SCDs, MIL-PRF specs, and supplier quals live in your tenant only. Tenant isolation is a written guarantee, not a policy.",
  },
];

export default function AboutContent() {
  const { setOpen } = useBooker();
  return (
    <>
      {/* Hero — origin story */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="headline-xl mb-8 max-w-[820px] text-[var(--on-surface)]"
          >
            The gap between a PDF and a queryable record{" "}
            <span className="text-[var(--on-surface-variant)]">
              costs hardware teams thousands of hours a year.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] md:gap-16"
          >
            <p className="body-lg text-[var(--on-surface-variant)]">
              We started Oriv because we kept seeing the same problem. Component
              data lives in 40-page PDFs, gets duplicated across every tool that
              needs it, and gets extracted from scratch every time. EDA re-extracts.
              PLM updates on a different cadence. AI agents come last and guess.
            </p>
            <p className="body-lg text-[var(--on-surface-variant)]">
              The public-corpus vendors handle the commodity parts well. Twenty
              years of indexed catalogs. But the 40% of every regulated BOM that
              lives in your SCDs, MIL-PRF specs, and supplier quals? Nobody ingests
              that. So we built Oriv to ship both layers behind one canonical schema
              and one query interface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="headline-lg mb-10 text-[var(--on-surface)]">Co-founders</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3" step={0.1} delayChildren={0.05}>
            {founders.map((f) => (
              <Item key={f.name}>
                <div className="flex h-full flex-col rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6">
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      aria-hidden
                      className="flex h-12 w-12 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--surface-container)] font-mono text-[13px] font-medium tracking-wider text-[var(--on-surface-variant)]"
                    >
                      {f.initials}
                    </div>
                    <span className="label-mono mt-1.5 text-[9.5px] tracking-[0.16em] text-[var(--outline)]">
                      {f.location}
                    </span>
                  </div>
                  <p className="mb-0.5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                    {f.name}
                  </p>
                  <p className="label-mono mb-4 text-[9.5px] tracking-[0.16em] text-[var(--outline)]">
                    {f.role}
                  </p>
                  <p className="body-md text-[var(--on-surface-variant)]">{f.bio}</p>
                </div>
              </Item>
            ))}
          </Stagger>

          <Reveal delay={160}>
            <p className="mt-8 label-mono text-[10px] tracking-[0.16em] text-[var(--outline)]">
              Co-founders read every email.{" "}
              <Link
                href="mailto:hello@oriv.io"
                className="text-[var(--on-surface)] underline underline-offset-4 transition-colors hover:text-[var(--oriv-yellow)]"
              >
                hello@oriv.io
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
              <h2 className="headline-xl text-[var(--on-surface)]">
                What we believe{" "}
                <span className="text-[var(--on-surface-variant)]">
                  about data layers.
                </span>
              </h2>
              <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
                Three principles shaped every architectural decision in Oriv.
              </p>
            </div>
          </Reveal>

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.1} delayChildren={0.05}>
            {values.map((v) => (
              <Item key={v.label}>
                <div className="grid grid-cols-1 items-baseline gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-12">
                  <h3 className="headline-sm text-[var(--on-surface)]">{v.label}</h3>
                  <p className="body-md text-[var(--on-surface-variant)]">{v.body}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="headline-sm mb-1.5 text-[var(--on-surface)]">
                  Working on hardware data at scale?
                </h2>
                <p className="body-md text-[var(--on-surface-variant)]">
                  Co-founders read every email.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 btn-primary shrink-0"
              >
                <span>Talk to a co-founder</span>
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
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
