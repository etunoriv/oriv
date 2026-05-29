"use client";

/**
 * ProductSurface — Linear-style Oriv app frame.
 * Static, hairline borders, OLED black chrome, one yellow accent row.
 * Used inside larger sections; bring your own wrapper + section padding.
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
              oriv.app / components / op-amps
            </div>
            <div className="h-3 w-12" />
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr]">
            {/* Sidebar — narrative chrome, hidden on mobile */}
            <div className="hidden border-r border-white/[0.05] px-3 py-4 md:block">
              <div className="label-mono mb-3 text-[8.5px] tracking-[0.2em] text-white/30">
                LIBRARY
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-white/55">
                <li
                  className="rounded px-2 py-1.5 text-white/90"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  Components
                </li>
                <li className="px-2 py-1.5">Datasheets</li>
                <li className="px-2 py-1.5">SCDs</li>
                <li className="px-2 py-1.5">Queries</li>
                <li className="px-2 py-1.5">Connectors</li>
              </ul>
              <div className="label-mono mb-2 mt-5 text-[8.5px] tracking-[0.2em] text-white/30">
                FILTERS
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-white/45">
                <li className="px-2 py-1">Op-amps</li>
                <li className="px-2 py-1">MCUs</li>
                <li className="px-2 py-1">Regulators</li>
              </ul>
            </div>

            {/* Main pane */}
            <div className="px-4 py-4 md:px-5 md:py-5">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <div className="label-mono mb-1.5 text-[9px] tracking-[0.22em] text-white/35">
                    CANONICAL RECORD
                  </div>
                  <div className="font-display text-[17px] font-semibold tracking-[-0.02em] text-white">
                    LMV321 · Single-supply op-amp
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
                    Traceable
                  </span>
                </div>
              </div>

              {/* Parametric table — 2 cols mobile (P + V/U merged), 4 cols ≥ md */}
              <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                <div className="grid grid-cols-[1.4fr_1fr] gap-3 border-b border-white/[0.05] bg-white/[0.015] px-3 py-2 label-mono text-[8.5px] tracking-[0.18em] text-white/35 md:grid-cols-[1.3fr_1fr_0.8fr_0.7fr]">
                  <span>PARAMETER</span>
                  <span>VALUE</span>
                  <span className="hidden md:inline">UNIT</span>
                  <span className="hidden text-right md:inline">SOURCE</span>
                </div>
                {[
                  { p: "Supply voltage", v: "2.7 – 5.5", u: "V", s: "TI-DS" },
                  { p: "GBW", v: "1.0", u: "MHz", s: "TI-DS" },
                  { p: "Input offset", v: "1.7", u: "mV", s: "TI-DS" },
                  { p: "Slew rate", v: "1.0", u: "V/µs", s: "SCD-04", accent: true },
                  { p: "Quiescent current", v: "130", u: "µA", s: "TI-DS" },
                  { p: "Op. temperature", v: "−40 to +125", u: "°C", s: "TI-DS" },
                ].map((row, i, arr) => (
                  <div
                    key={row.p}
                    className={`grid grid-cols-[1.4fr_1fr] gap-3 px-3 py-2.5 text-[11.5px] md:grid-cols-[1.3fr_1fr_0.8fr_0.7fr] ${
                      i < arr.length - 1 ? "border-b border-white/[0.04]" : ""
                    }`}
                    style={
                      row.accent
                        ? {
                            background:
                              "linear-gradient(90deg, rgba(255,197,46,0.06), transparent 70%)",
                          }
                        : undefined
                    }
                  >
                    <span className="truncate text-white/75">{row.p}</span>
                    <span className="text-white">
                      {row.v}
                      <span className="ml-1 text-white/55 md:hidden">{row.u}</span>
                    </span>
                    <span className="hidden text-white/55 md:inline">{row.u}</span>
                    <span className="hidden text-right font-mono text-[10.5px] text-white/45 md:inline">
                      {row.s}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="mt-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10.5px] text-white/45">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "#7CDC9E",
                      boxShadow: "0 0 8px rgba(124,220,158,0.6)",
                    }}
                  />
                  Synced from 3 datasheets · 1 SCD
                </div>
                <div className="label-mono text-[9px] tracking-[0.18em] text-white/30">
                  v4 · 2026-05-12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating yellow accent chip behind the top-right corner of the chrome.
          `isolate` on the parent is load-bearing — without a local stacking
          context, the `-z-10` chip escapes once framer-motion drops its
          transform after the entry animation, and the chip disappears
          behind the body background. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-4 -z-10 h-20 w-20 rounded-full opacity-55 blur-2xl"
        style={{ background: "rgba(255,197,46,0.35)" }}
      />
    </div>
  );
}
