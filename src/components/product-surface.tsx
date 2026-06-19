"use client";

/**
 * ProductSurface — Linear-style Oriv app frame, knowledge-record edition.
 * Replaces the earlier parametric-record table. Now shows what a captured
 * engineering decision actually looks like in the layer: the decision itself,
 * the reasoning, citations, who made it, and where it's been reused.
 */
export default function ProductSurface() {
  return (
    <div className="relative isolate">
      <div
        className="relative rounded-2xl p-1.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7),0_18px_40px_-18px_rgba(0,0,0,0.5)]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[14px] border border-white/[0.06]"
          style={{
            background: "linear-gradient(180deg, #0c0d0f 0%, #0a0b0d 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="label-mono text-[9.5px] tracking-[0.18em] text-white/35">
              oriv.app / records / lmv321-rev-c
            </div>
            <div className="h-3 w-12" />
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr]">
            {/* Sidebar */}
            <div className="hidden border-r border-white/[0.05] px-3 py-4 md:block">
              <div className="label-mono mb-3 text-[8.5px] tracking-[0.2em] text-white/30">
                LIBRARY
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-white/55">
                <li className="px-2 py-1.5">Decisions</li>
                <li
                  className="rounded px-2 py-1.5 text-white/90"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  Trade-offs
                </li>
                <li className="px-2 py-1.5">Citations</li>
                <li className="px-2 py-1.5">Reuse map</li>
              </ul>
              <div className="label-mono mb-2 mt-5 text-[8.5px] tracking-[0.2em] text-white/30">
                COMPONENT
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-white/45">
                <li className="px-2 py-1">LMV321</li>
                <li className="px-2 py-1">ADA4528-1</li>
                <li className="px-2 py-1">OPA388</li>
              </ul>
            </div>

            {/* Main pane */}
            <div className="px-4 py-4 md:px-5 md:py-5">
              {/* Header */}
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <div className="label-mono mb-1.5 text-[9px] tracking-[0.22em] text-white/35">
                    KNOWLEDGE RECORD
                  </div>
                  <div className="font-display text-[15.5px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[17px]">
                    LMV321 &middot; Slew rate floor decision
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/60">
                    Cited
                  </span>
                  <span
                    className="rounded-md px-2 py-1 text-[10px] font-medium"
                    style={{ background: "rgba(255,197,46,0.14)", color: "#FFC52E" }}
                  >
                    Reused
                  </span>
                </div>
              </div>

              {/* Two-column layout: decision/reasoning ↔ sources/usage */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.3fr_1fr]">
                {/* LEFT — Decision + reasoning */}
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                    <div className="border-b border-white/[0.05] bg-white/[0.015] px-3 py-1.5 label-mono text-[8.5px] tracking-[0.18em] text-white/35">
                      DECISION
                    </div>
                    <p className="px-3 py-2.5 text-[11.5px] leading-[1.5] text-white/85">
                      Lock slew rate at 1.0 V/µs across the full operating
                      range, not the vendor typical.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                    <div className="border-b border-white/[0.05] bg-white/[0.015] px-3 py-1.5 label-mono text-[8.5px] tracking-[0.18em] text-white/35">
                      REASONING
                    </div>
                    <p className="px-3 py-2.5 text-[11.5px] leading-[1.55] text-white/75">
                      SCD-04 requires 1.0 V/µs across &minus;40 to +125&deg;C.
                      Vendor typ. (1.2 V/µs &#64; 25&deg;C) drops to 0.85 V/µs
                      at Tj &gt; 100&deg;C in bench tests. Selected to meet the
                      floor, not the typical.
                    </p>
                  </div>
                </div>

                {/* RIGHT — Sources + usage + author */}
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                    <div className="border-b border-white/[0.05] bg-white/[0.015] px-3 py-1.5 label-mono text-[8.5px] tracking-[0.18em] text-white/35">
                      SOURCES
                    </div>
                    <ul className="space-y-1 px-3 py-2.5 font-mono text-[10.5px] leading-[1.5] text-white/65">
                      <li>&bull; SCD-04 &middot; p.3 &middot; tbl 2.4</li>
                      <li>&bull; Bench run_8f2a</li>
                      <li>&bull; Vendor errata B17-2026</li>
                    </ul>
                  </div>
                  <div
                    className="overflow-hidden rounded-lg border border-[var(--oriv-yellow)]/25"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,197,46,0.06), rgba(255,197,46,0.015))",
                    }}
                  >
                    <div className="border-b border-white/[0.05] px-3 py-1.5 label-mono text-[8.5px] tracking-[0.18em] text-[#FFC52E]/80">
                      REUSED IN
                    </div>
                    <div className="px-3 py-2.5">
                      <div className="font-mono text-[13px] font-medium text-[#FFC52E]">
                        7 projects &middot; 11 designs
                      </div>
                      <div className="mt-0.5 text-[10.5px] text-white/45">
                        Apex-3, Helios-2, Mira-Lite, +4 more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[10.5px] text-white/45">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "#7CDC9E",
                      boxShadow: "0 0 8px rgba(124,220,158,0.6)",
                    }}
                  />
                  Captured by K. Shenoy &middot; 3 sources cited
                </div>
                <div className="label-mono text-[9px] tracking-[0.18em] text-white/30">
                  Rev C &middot; 2026-05-12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating yellow accent chip */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-4 -z-10 h-20 w-20 rounded-full opacity-55 blur-2xl"
        style={{ background: "rgba(255,197,46,0.35)" }}
      />
    </div>
  );
}
