"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Shared header for sub-pages (/how, /built-on, /trust, /product).
 * Headline + lede + placeholder UI surface mirroring the landing hero's
 * ProductSurface chrome. Per-page bespoke surfaces come later; for now
 * every sub-page renders the same neutral skeleton placeholder.
 */
export default function SubPageHero({
  title,
  lede,
  breadcrumb,
}: {
  title: React.ReactNode;
  lede: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          className="headline-xl mb-5 max-w-[760px] text-[var(--on-surface)]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.16 }}
          className="body-md max-w-[600px] text-[var(--on-surface-variant)]"
        >
          {lede}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.32 }}
          className="relative mt-14 md:mt-20"
        >
          <PlaceholderSurface breadcrumb={breadcrumb ?? "oriv.app"} />

          {/* Bottom fade — blends the frame into the section background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--surface) 92%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * PlaceholderSurface — neutral skeleton version of ProductSurface used on
 * every sub-page hero until each page gets its own bespoke surface.
 */
function PlaceholderSurface({ breadcrumb }: { breadcrumb: string }) {
  return (
    <div className="relative isolate">
      <div
        className="relative rounded-2xl p-1.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7),0_18px_40px_-18px_rgba(0,0,0,0.5)]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
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
              {breadcrumb}
            </div>
            <div className="h-3 w-12" />
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr]">
            {/* Sidebar */}
            <div className="hidden border-r border-white/[0.05] px-3 py-4 md:block">
              <SkeletonLine width="60%" />
              <div className="mt-4 space-y-2">
                <SkeletonLine width="86%" intensity="strong" />
                <SkeletonLine width="68%" />
                <SkeletonLine width="74%" />
                <SkeletonLine width="58%" />
                <SkeletonLine width="80%" />
              </div>
              <div className="mt-6">
                <SkeletonLine width="50%" />
              </div>
              <div className="mt-3 space-y-2">
                <SkeletonLine width="64%" />
                <SkeletonLine width="48%" />
                <SkeletonLine width="72%" />
              </div>
            </div>

            {/* Main pane */}
            <div className="px-4 py-4 md:px-5 md:py-5">
              <div className="mb-4 flex items-end justify-between">
                <div className="space-y-2">
                  <SkeletonLine width="120px" />
                  <SkeletonLine width="220px" intensity="strong" height={14} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-5 w-12 rounded-md border border-white/10 bg-white/[0.02]" />
                  <span
                    className="h-5 w-16 rounded-md"
                    style={{ background: "rgba(255,197,46,0.14)" }}
                  />
                </div>
              </div>

              {/* Skeleton table */}
              <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                <div className="grid grid-cols-[1.4fr_1fr] gap-3 border-b border-white/[0.05] bg-white/[0.015] px-3 py-2 md:grid-cols-[1.3fr_1fr_0.8fr_0.7fr]">
                  <SkeletonLine width="60%" />
                  <SkeletonLine width="40%" />
                  <SkeletonLine width="40%" className="hidden md:block" />
                  <SkeletonLine width="50%" className="hidden md:block" />
                </div>
                {[
                  { w1: "70%", w2: "55%", w3: "30%", w4: "40%", accent: false },
                  { w1: "55%", w2: "45%", w3: "30%", w4: "40%", accent: false },
                  { w1: "65%", w2: "60%", w3: "30%", w4: "40%", accent: false },
                  { w1: "60%", w2: "50%", w3: "30%", w4: "40%", accent: true },
                  { w1: "72%", w2: "40%", w3: "30%", w4: "40%", accent: false },
                  { w1: "58%", w2: "62%", w3: "30%", w4: "40%", accent: false },
                ].map((row, i, arr) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[1.4fr_1fr] gap-3 px-3 py-3 md:grid-cols-[1.3fr_1fr_0.8fr_0.7fr] ${
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
                    <SkeletonLine width={row.w1} />
                    <SkeletonLine width={row.w2} />
                    <SkeletonLine width={row.w3} className="hidden md:block" />
                    <SkeletonLine width={row.w4} className="hidden md:block" />
                  </div>
                ))}
              </div>

              {/* Footer status row */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "#7CDC9E",
                      boxShadow: "0 0 8px rgba(124,220,158,0.6)",
                    }}
                  />
                  <SkeletonLine width="160px" />
                </div>
                <SkeletonLine width="80px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating yellow accent chip — same as landing ProductSurface */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-4 -z-10 h-20 w-20 rounded-full opacity-55 blur-2xl"
        style={{ background: "rgba(255,197,46,0.35)" }}
      />
    </div>
  );
}

function SkeletonLine({
  width,
  height = 8,
  intensity = "default",
  className = "",
}: {
  width: string | number;
  height?: number;
  intensity?: "default" | "strong";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`rounded-[3px] ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: `${height}px`,
        background:
          intensity === "strong"
            ? "rgba(255,255,255,0.10)"
            : "rgba(255,255,255,0.05)",
      }}
    />
  );
}
