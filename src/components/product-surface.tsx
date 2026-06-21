"use client";

/**
 * ProductSurface — Oriv app frame, four-pillar lifecycle record.
 * Shows what gets captured for a single component across the full engineering
 * lifecycle: selection, simulation, prototyping, and live instruments. Same
 * record, four kinds of knowledge.
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
              oriv.app / records / lmv321
            </div>
            <div className="h-3 w-12" />
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr]">
            {/* Sidebar */}
            <div className="hidden border-r border-white/[0.05] px-3 py-4 md:block">
              <div className="label-mono mb-3 text-[8.5px] tracking-[0.2em] text-white/30">
                LIFECYCLE
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-white/55">
                <li className="px-2 py-1.5">Selection</li>
                <li className="px-2 py-1.5">Simulation</li>
                <li
                  className="rounded px-2 py-1.5 text-white/90"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  All pillars
                </li>
                <li className="px-2 py-1.5">Prototype</li>
                <li className="px-2 py-1.5">Instruments</li>
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
                    LIFECYCLE RECORD
                  </div>
                  <div className="font-display text-[15.5px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[17px]">
                    LMV321 &middot; Single-supply op-amp
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
                    Live
                  </span>
                </div>
              </div>

              {/* Four-pillar grid: Selection / Simulation / Prototype / Instruments */}
              <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                {/* SELECTION */}
                <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                  <div className="flex items-center justify-between border-b border-white/[0.05] bg-white/[0.015] px-3 py-1.5">
                    <span className="label-mono text-[8.5px] tracking-[0.18em] text-white/40">
                      SELECTION
                    </span>
                    <span className="font-mono text-[9.5px] text-white/35">
                      from 847 candidates
                    </span>
                  </div>
                  <div className="px-3 py-2.5 text-[11px] leading-[1.55] text-white/75">
                    Supply voltage 2.7&ndash;5.5 V matches the design envelope.
                    Cited to TI datasheet rev D, SCD-04 p.3, vendor errata
                    B17-2026.
                  </div>
                </div>

                {/* SIMULATION */}
                <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                  <div className="flex items-center justify-between border-b border-white/[0.05] bg-white/[0.015] px-3 py-1.5">
                    <span className="label-mono text-[8.5px] tracking-[0.18em] text-white/40">
                      SIMULATION
                    </span>
                    <span className="font-mono text-[9.5px] text-white/35">
                      94% match
                    </span>
                  </div>
                  <div className="px-3 py-2.5 text-[11px] leading-[1.55] text-white/75">
                    SPICE model converged on PSRR 71 dB at 1 kHz. AC gain
                    validated. Thermal margin checked against the operating
                    profile.
                  </div>
                </div>

                {/* PROTOTYPE */}
                <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                  <div className="flex items-center justify-between border-b border-white/[0.05] bg-white/[0.015] px-3 py-1.5">
                    <span className="label-mono text-[8.5px] tracking-[0.18em] text-white/40">
                      PROTOTYPE
                    </span>
                    <span className="font-mono text-[9.5px] text-white/35">
                      11 of 12 passed
                    </span>
                  </div>
                  <div className="px-3 py-2.5 text-[11px] leading-[1.55] text-white/75">
                    HIL run on board rev A2. One failure at Tj &gt; 100&deg;C
                    flagged the slew-rate floor decision in rev C.
                  </div>
                </div>

                {/* INSTRUMENTS */}
                <div
                  className="overflow-hidden rounded-lg border border-[var(--oriv-yellow)]/25"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,197,46,0.06), rgba(255,197,46,0.015))",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-white/[0.05] px-3 py-1.5">
                    <span className="label-mono text-[8.5px] tracking-[0.18em] text-[#FFC52E]/80">
                      INSTRUMENTS
                    </span>
                    <span className="font-mono text-[9.5px] text-[#FFC52E]">
                      live in 3 units
                    </span>
                  </div>
                  <div className="px-3 py-2.5 text-[11px] leading-[1.55] text-white/85">
                    Field telemetry shows Vos drift of 0.4 mV over 180 days.
                    No anomalies flagged.
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
                  Spans all four pillars &middot; 9 cited sources
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
