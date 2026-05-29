"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, Item } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Wedge — the villain frame.
 * Heading → 3 artifact cards, each a slice of the 40% the buyer recognizes.
 * Each card: kicker, title, description, embedded UI, "lives in" footer.
 */

export default function Wedge() {
  return (
    <section
      id="wedge"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Public corpus plus your long tail.{" "}
              <span className="text-[var(--on-surface-variant)]">
                One schema.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Existing databases index public datasheets only. The regulated,
              certified, custom-spec part of your BOM is the part your engineers
              actually fight with. Oriv ships both layers in one queryable schema.
              Your data never leaves your tenant.
            </p>
          </div>
        </Reveal>

        {/* 3 artifact cards */}
        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          step={0.1}
          delayChildren={0.05}
        >
          <Item>
            <ArtifactCard
              num="01"
              kicker="Source Control Drawings & MIL-PRF"
              description="Internal SCDs and MIL-PRF specs live in PDFs nobody indexes. The parametric data is locked inside the document, not queryable as fields."
            >
              <SCDArtifact />
            </ArtifactCard>
          </Item>
          <Item>
            <ArtifactCard
              num="02"
              kicker="Supplier qualifications & AVL"
              description="Approved vendor lists live in spreadsheets passed between procurement and engineering. Qualification history, not parametric data your stack can query."
            >
              <AVLArtifact />
            </ArtifactCard>
          </Item>
          <Item>
            <ArtifactCard
              num="03"
              kicker="Lifecycle & derate"
              description="PCN announcements come over email. Derate curves hide in datasheet appendices. None of it queryable as data your tools can act on."
            >
              <DerateArtifact />
            </ArtifactCard>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}

/* ----------------------------- CARD SHELL ----------------------------- */

function ArtifactCard({
  num,
  kicker,
  description,
  children,
}: {
  num: string;
  kicker: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3, ease }}
      className="group relative h-full rounded-2xl p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6),0_12px_28px_-14px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7),0_18px_40px_-16px_rgba(0,0,0,0.45)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
      }}
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[14px] border border-white/[0.06]"
        style={{
          background: "linear-gradient(180deg, #0c0d0f 0%, #0a0b0d 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Kicker row — number + hairline extension */}
        <div className="flex items-center gap-3 px-5 pt-4">
          <span className="label-mono shrink-0 text-[10px] tracking-[0.22em] text-[var(--oriv-yellow)]">
            {num}
          </span>
          <span aria-hidden className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {/* Visual — the recognition moment (fixed height for alignment across cards) */}
        <div className="flex h-[260px] items-center justify-center px-5 pb-5 pt-5">
          <div className="w-full">{children}</div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Heading + description */}
        <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
          <p className="mb-3 font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-white">
            {kicker}
          </p>
          <p className="text-[14px] leading-[1.6] text-white/65">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ----------------------------- ARTIFACT 1 — SCD ----------------------------- */

function SCDArtifact() {
  return (
    <div className="relative rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
      {/* Stamp */}
      <div
        className="absolute right-3 top-3 rotate-[-6deg] rounded border px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.18em]"
        style={{
          color: "#ff6b6b",
          borderColor: "rgba(255,107,107,0.4)",
          background: "rgba(255,107,107,0.06)",
        }}
      >
        NOT INDEXED
      </div>

      {/* PDF header */}
      <div className="mb-3 flex items-center gap-2">
        <PdfIcon />
        <div className="leading-tight">
          <p className="font-mono text-[11px] text-white/85">SCD-04 · Rev C</p>
          <p className="font-mono text-[10px] text-white/40">MIL-PRF-19500/580</p>
        </div>
      </div>

      {/* Stylized page lines */}
      <div className="space-y-1.5">
        {[100, 86, 92, 70, 80, 95, 82, 90].map((w, i) => (
          <div
            key={i}
            className="h-1 rounded bg-white/[0.06]"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- ARTIFACT 2 — AVL ----------------------------- */

function AVLArtifact() {
  const rows = [
    { vendor: "Texas Inst.", part: "LMV321IDBVR", date: "2024-04", pref: false },
    { vendor: "Analog Dev.", part: "ADA4528-1", date: "2023-11", pref: true },
    { vendor: "STMicro", part: "TSV711", date: "2024-08", pref: false },
    { vendor: "ON Semi", part: "NCS21911", date: "2024-02", pref: false },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02]">
      {/* Spreadsheet chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
        <span className="font-mono text-[10px] text-white/55">
          AVL_Q2_2026.xlsx
        </span>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        </div>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_1.3fr_0.8fr] gap-1.5 border-b border-white/[0.06] bg-white/[0.015] px-2.5 py-1.5 label-mono text-[8.5px] tracking-[0.16em] text-white/35 sm:gap-2 sm:px-3">
        <span>VENDOR</span>
        <span>PART</span>
        <span className="text-right">QUAL</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/[0.04]">
        {rows.map((r) => (
          <div
            key={r.part}
            className="grid grid-cols-[1fr_1.3fr_0.8fr] gap-1.5 px-2.5 py-1.5 text-[10px] sm:gap-2 sm:px-3 sm:text-[10.5px]"
            style={
              r.pref
                ? {
                    background:
                      "linear-gradient(90deg, rgba(255,197,46,0.10), transparent 80%)",
                  }
                : undefined
            }
          >
            <span className="min-w-0 truncate font-mono text-white/65">{r.vendor}</span>
            <span className="min-w-0 truncate font-mono text-white/85">{r.part}</span>
            <span className="text-right font-mono text-white/45">{r.date}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ----------------------------- ARTIFACT 3 — DERATE ----------------------------- */

function DerateArtifact() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
      {/* Header */}
      <div className="mb-3 flex items-baseline justify-between">
        <span className="font-mono text-[11px] text-white/80">PCN-2024-118</span>
        <span className="label-mono text-[8.5px] tracking-[0.18em] text-white/35">
          LMV321 · DERATE
        </span>
      </div>

      {/* Chart */}
      <div className="relative h-[112px] rounded-md border border-white/[0.05] bg-white/[0.02]">
        {/* grid lines */}
        <svg
          viewBox="0 0 280 112"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {[28, 56, 84].map((y) => (
            <line
              key={y}
              x1="20"
              y1={y}
              x2="270"
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
          ))}

          {/* axis */}
          <line
            x1="20"
            y1="98"
            x2="270"
            y2="98"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="14"
            x2="20"
            y2="98"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />

          {/* derate curve — flat then declining */}
          <motion.path
            d="M 20 28 L 100 28 L 200 70 L 270 96"
            stroke="#FFC52E"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
          />

          {/* labeled temp points */}
          {[
            { x: 60, y: 28, t: "25°C" },
            { x: 150, y: 49, t: "85°C" },
            { x: 240, y: 88, t: "125°C" },
          ].map((p) => (
            <g key={p.t}>
              <circle cx={p.x} cy={p.y} r="2.5" fill="#FFC52E" />
              <text
                x={p.x}
                y={p.y - 6}
                fill="rgba(255,255,255,0.55)"
                fontSize="8"
                fontFamily="var(--font-jetbrains-mono), monospace"
                textAnchor="middle"
              >
                {p.t}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Lifecycle pill */}
      <div className="mt-3 flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[9.5px] font-medium"
          style={{
            color: "#ff6b6b",
            borderColor: "rgba(255,107,107,0.4)",
            background: "rgba(255,107,107,0.06)",
          }}
        >
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "#ff6b6b" }}
          />
          LAST-TIME BUY
        </span>
        <span className="label-mono text-[8.5px] tracking-[0.16em] text-white/35">
          EOL 2027-03
        </span>
      </div>
    </div>
  );
}

/* ----------------------------- ICONS ----------------------------- */

function PdfIcon() {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M2 2 H 14 L 20 8 V 24 H 2 Z"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.02)"
      />
      <path d="M 14 2 V 8 H 20" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <text
        x="11"
        y="20"
        fontSize="6"
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontWeight="700"
        fill="#FFC52E"
        textAnchor="middle"
      >
        PDF
      </text>
    </svg>
  );
}
