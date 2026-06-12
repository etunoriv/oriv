"use client";

import { Reveal } from "@/lib/motion";

/**
 * Problem — single unified comparison window.
 *
 * One window chrome → prompt as input row → split-view below
 * (Oriv left, Frontier LLM right). One focal hierarchy: chrome → input
 * → split outputs. No more three competing framed cards.
 *
 * Mobile: the split stacks (Oriv on top, LLM below).
 */
export default function Problem() {
  return (
    <section
      id="problem"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              The same gap shows up in every tool.{" "}
              <span className="text-[var(--on-surface-variant)]">
                Most painfully in your AI ones.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Every tool in your stack carries its own version of the same component
              data. AI agents come last and guess. The clearest example sits right
              below.
            </p>
          </div>
        </Reveal>

        {/* Single unified comparison window */}
        <Reveal delay={100}>
          <CompareWindow />
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            Same prompt. The LLM doesn&rsquo;t know which &ldquo;VOS&rdquo; is which,
            or how to generate a footprint. Oriv does.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   ONE WINDOW — chrome + prompt + split-view comparison
   ============================================================ */

function CompareWindow() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6),0_18px_40px_-18px_rgba(0,0,0,0.45)]"
      style={{
        background: "linear-gradient(180deg, #0c0d0f 0%, #0a0b0d 100%)",
      }}
    >
      {/* WINDOW CHROME */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.015] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="label-mono text-[9.5px] tracking-[0.18em] text-white/40">
          oriv.compare · automotive op-amp search
        </span>
        <span className="font-mono text-[10px] text-white/25">⌘K</span>
      </div>

      {/* PROMPT ROW */}
      <div className="border-b border-white/[0.06] px-5 py-4 md:px-7 md:py-5">
        <div className="flex items-start gap-3">
          <span className="label-mono mt-1 shrink-0 text-[9.5px] tracking-[0.22em] text-[var(--oriv-yellow)]">
            PROMPT
          </span>
          <p className="font-mono text-[12.5px] leading-[1.55] text-white/85 md:text-[13px]">
            &ldquo;Find me an automotive-grade op-amp with VOS max under 100 µV.
            Show me the candidates and their footprints.&rdquo;
          </p>
        </div>
      </div>

      {/* SPLIT VIEW — Oriv left, LLM right (stacks on mobile) */}
      <div className="grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-2 md:divide-x md:divide-y-0">
        <OrivSide />
        <LlmSide />
      </div>
    </div>
  );
}

/* ----- ORIV SIDE — structured engineering output ----- */
function OrivSide() {
  return (
    <div className="flex flex-col">
      {/* Tinted header strip */}
      <div className="flex items-center justify-between border-b border-[var(--oriv-yellow)]/15 bg-[var(--oriv-yellow)]/[0.05] px-5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#7CDC9E]/60" />
            <span
              className="relative h-2 w-2 rounded-full"
              style={{
                background: "#7CDC9E",
                boxShadow: "0 0 6px rgba(124,220,158,0.55)",
              }}
            />
          </span>
          <span className="label-mono text-[9.5px] tracking-[0.2em] text-[#FFC52E]">
            ORIV AGENT
          </span>
        </div>
        <span className="font-mono text-[9.5px] text-white/35">
          0.41s · 3 indexed · 2 pass
        </span>
      </div>

      {/* Results */}
      <div className="flex-1 space-y-3 p-4 md:p-5">
        <PartRow
          name="ADA4528-1"
          vendor="Analog Devices"
          pkg="SOIC-8"
          vos="25 µV"
          cite="p.4 tbl 2.2"
        />
        <PartRow
          name="OPA388"
          vendor="Texas Instruments"
          pkg="SOT23-5"
          vos="90 µV"
          cite="p.7 tbl 6.6"
        />

        {/* Dropped block */}
        <div className="rounded-md border border-[#ff6b6b]/15 bg-[#ff6b6b]/[0.04] px-3 py-2.5">
          <div className="mb-0.5 flex items-center gap-2">
            <span className="label-mono text-[9px] tracking-[0.18em] text-[#ff6b6b]">
              DROPPED
            </span>
            <span className="font-mono text-[10.5px] text-white/70">OPA320</span>
          </div>
          <p className="font-mono text-[10px] leading-[1.55] text-white/45">
            &ldquo;40 µV&rdquo; is typical-at-25°C. Over operating range vos max ={" "}
            <span className="text-[#ff6b6b]/80">200 µV</span>.
          </p>
        </div>
      </div>

      {/* Export footer */}
      <div className="flex items-center gap-2 border-t border-white/[0.05] bg-white/[0.015] px-4 py-2 font-mono text-[9.5px] text-white/40 md:px-5">
        <span>EXPORTED →</span>
        <span className="rounded bg-white/[0.04] px-1.5 py-0.5">Altium</span>
        <span className="rounded bg-white/[0.04] px-1.5 py-0.5">KiCad</span>
        <span className="rounded bg-white/[0.04] px-1.5 py-0.5">Allegro</span>
      </div>
    </div>
  );
}

function PartRow({
  name,
  vendor,
  pkg,
  vos,
  cite,
}: {
  name: string;
  vendor: string;
  pkg: string;
  vos: string;
  cite: string;
}) {
  return (
    <div className="rounded-md border border-white/[0.08] bg-white/[0.015] p-3">
      <div className="mb-2 flex items-baseline justify-between">
        <div>
          <p className="font-mono text-[11.5px] font-medium text-white">{name}</p>
          <p className="font-mono text-[9.5px] text-white/40">{vendor}</p>
        </div>
        <span
          className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[9px] font-medium"
          style={{ background: "rgba(255,197,46,0.12)", color: "#FFC52E" }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <path
              d="M1.5 4L3.25 5.75L6.5 2.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {cite}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 font-mono text-[10.5px]">
        <div className="flex items-baseline justify-between">
          <span className="text-white/45">vos max</span>
          <span className="text-white">{vos}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-white/45">package</span>
          <span className="text-white">{pkg}</span>
        </div>
      </div>
    </div>
  );
}

/* ----- LLM SIDE — chat-style assistant response ----- */
function LlmSide() {
  return (
    <div className="flex flex-col">
      {/* Neutral header strip */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full border border-white/30" />
          <span className="label-mono text-[9.5px] tracking-[0.2em] text-white/55">
            FRONTIER LLM
          </span>
        </div>
        <span className="font-mono text-[9.5px] text-white/35">web search only</span>
      </div>

      {/* Assistant message — single bubble, no user bubble (prompt is up top) */}
      <div className="flex flex-1 items-start gap-2 p-4 md:p-5">
        <span
          aria-hidden
          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04] font-mono text-[9px] text-white/40"
        >
          ✦
        </span>
        <div className="space-y-2.5 rounded-2xl rounded-tl-md border border-white/[0.04] bg-white/[0.015] px-4 py-3 font-mono text-[11.5px] leading-[1.6] text-white/65">
          <p>Three strong AEC-Q100 candidates:</p>
          <div className="space-y-0.5">
            <p>• ADA4528-1: VOS = 2.5 µV. SOIC-8.</p>
            <p>• OPA388: VOS = 5 µV. SOT23-5.</p>
            <p>• OPA320: VOS = 40 µV. SOT23-5.</p>
          </div>
          <p>All three meet your VOS requirement.</p>
          <p>
            Footprints: for exact IPC-7351B geometry, consult the datasheet or
            your CAD tool.
          </p>
          <p className="text-white/85">
            Recommendation: ADA4528-1 for tightest spec.
          </p>
        </div>
      </div>

      {/* Input bar — matches the prompt row visually but disabled-looking */}
      <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.015] px-4 py-2 font-mono text-[10px] text-white/30 md:px-5">
        <span>Ask follow-up…</span>
        <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[9px]">↵</span>
      </div>
    </div>
  );
}
