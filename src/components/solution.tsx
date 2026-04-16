"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

const modules = [
  {
    id: "MOD-01",
    label: "COMPONENT SELECTION",
    title: "FIND THE RIGHT PART. IN MINUTES.",
    subtitle: "We index manufacturer datasheets and build a knowledge base from real specs. Not summaries. Not approximations. The actual data, traceable to its source.",
    points: [
      "Search the global component market with filters that understand electrical, thermal, and lifecycle parameters.",
      "Every result links back to the original manufacturer datasheet. No guessing where a number came from.",
      "Go from requirements to a vetted shortlist in the time it used to take to open the first PDF.",
    ],
    callout: "Weeks of datasheet review, compressed into a conversation with real data.",
    visual: {
      workflow: ["Requirements", "Constraints", "Search 2.8M+ parts", "Shortlist in minutes"],
      result: "12 candidates matched",
    },
  },
  {
    id: "MOD-02",
    label: "SIMULATION",
    title: "SIMULATE BEFORE YOU BUILD.",
    subtitle: "Generate physics-based behavioral models directly from component specs. No weeks of manual model creation. No skipping simulation because the setup cost is too high.",
    points: [
      "Behavioral models generated from datasheet parameters. Not hand-built from scratch every time.",
      "Electrical, thermal, and mechanical simulation in a single unified environment.",
      "Iterate on design decisions in minutes. Catch failures before they become prototype costs.",
    ],
    callout: "Validate your design before you order a single part.",
    visual: {
      workflow: ["Select component", "Generate model", "Run simulation", "Validate results"],
      result: "0 violations detected",
    },
  },
  {
    id: "MOD-03",
    label: "HYBRID TESTING",
    title: "TEST WITH REAL HARDWARE. VIRTUALLY.",
    subtitle: "Connect your simulations directly to hardware-in-the-loop test benches. Run mixed virtual-physical tests before committing to full production.",
    points: [
      "Bridge simulations to HIL setups over standard industrial protocols: OPC-UA, CAN, Modbus.",
      "Run hybrid tests that combine virtual plant models with physical sensor feedback.",
      "Validate system behavior under real-world conditions without full prototype fabrication.",
    ],
    callout: "The gap between simulation and reality, closed before production.",
    visual: {
      workflow: ["Virtual model", "HIL connection", "Mixed test", "Production-ready"],
      result: "All margins OK",
    },
  },
  {
    id: "MOD-04",
    label: "LIVE INSTRUMENTS",
    title: "MONITOR EVERYTHING. IN REAL TIME.",
    subtitle: "Stream live telemetry from simulations and physical hardware into configurable dashboards. When compliance asks for audit data, it is already there.",
    points: [
      "Unified dashboards that stream data from both virtual simulations and physical test setups.",
      "Configure custom instrument panels: scope views, gauges, time-series logs.",
      "Export test data in standard formats for compliance documentation and audit trails.",
    ],
    callout: "Full observability from component selection through production validation.",
    visual: {
      workflow: ["Data streams", "Live dashboards", "Audit logging", "Compliance export"],
      result: "All channels nominal",
    },
  },
];

function WorkflowVisual({ visual }: { visual: typeof modules[number]["visual"] }) {
  return (
    <div className="bg-surface/80 border border-line rounded-lg p-8 h-full flex flex-col justify-center">
      <div className="space-y-4">
        {visual.workflow.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold ${i === visual.workflow.length - 1 ? "bg-accent text-foreground" : "bg-white border border-line text-muted"}`}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 h-px bg-line" />
            <span className="text-foreground text-sm font-medium shrink-0">{step}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-line">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="type-micro text-accent font-bold">{visual.result}</span>
        </div>
      </div>
    </div>
  );
}

export default function Solution() {
  const [active, setActive] = useState(0);
  const mod = modules[active];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="type-micro text-accent font-bold block mb-4">/// THE PLATFORM</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
            >
              WHAT ORIV <span className="text-accent">ACTUALLY</span> DOES
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed text-base md:text-lg">
              Four modules that cover the full lifecycle: from finding the right
              component to validating it works in your system.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {modules.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 type-micro font-bold rounded-md transition-all duration-300 btn-press ${
                  i === active
                    ? "bg-accent text-foreground shadow-[0_4px_16px_rgba(255,197,46,0.25)]"
                    : "bg-white border border-line text-muted hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-6"
          >
            <div className="bg-white border border-line rounded-lg p-8">
              <span className="type-micro text-accent font-bold mb-2 block">{mod.id}</span>
              <h3
                className="type-macro text-foreground mt-3"
                style={{ fontSize: "clamp(1.3rem, 2vw, 2rem)" }}
              >
                {mod.title}
              </h3>

              <p className="mt-5 text-muted leading-relaxed text-base">
                {mod.subtitle}
              </p>

              <hr className="border-line my-6" />

              <dl className="space-y-3">
                {mod.points.map((pt, i) => (
                  <div key={i} className="flex gap-3">
                    <dt className="type-micro text-accent font-bold shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </dt>
                    <dd className="text-muted leading-relaxed text-base">
                      {pt}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 border-l-2 border-accent pl-4">
                <p className="type-micro text-accent font-bold" style={{ fontSize: "0.85rem" }}>
                  {mod.callout}
                </p>
              </div>
            </div>

            <WorkflowVisual visual={mod.visual} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
