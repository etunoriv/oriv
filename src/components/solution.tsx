"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const modules = [
  {
    id: "MOD-01",
    label: "COMPONENT SELECTION",
    title: "FIND THE\nRIGHT PART.\nIN MINUTES.",
    subtitle: "We index manufacturer datasheets and build a knowledge base from real specs. Not summaries. Not approximations. The actual data, traceable to its source. Your engineers ask a question, and the platform returns candidates that actually fit the constraints.",
    points: [
      "Search the global component market with filters that understand electrical, thermal, and lifecycle parameters.",
      "Every result links back to the original manufacturer datasheet. No guessing where a number came from.",
      "Go from requirements to a vetted shortlist in the time it used to take to open the first PDF.",
    ],
    callout: ">>> Weeks of datasheet review, compressed into a conversation with real data.",
    terminal: {
      title: "ORIV://COMPONENT-SELECTOR",
      lines: [
        "> PARSING CONSTRAINT SET...",
        "> SEARCHING 2.8M+ INDEXED COMPONENTS...",
        "> CROSS-REFERENCING LIFECYCLE STATUS...",
        "> APPLYING ELECTRICAL BOUNDARIES...",
      ],
      result: "> 12 CANDIDATES MATCHED [0.34s]",
    },
  },
  {
    id: "MOD-02",
    label: "SIMULATION",
    title: "SIMULATE\nBEFORE\nYOU BUILD.",
    subtitle: "Generate physics-based behavioral models directly from component specs. No weeks of manual model creation. No skipping simulation because the setup cost is too high. Run thermal, electrical, and mechanical analysis in the same environment where you selected the parts.",
    points: [
      "Behavioral models generated from datasheet parameters. Not hand-built from scratch every time.",
      "Electrical, thermal, and mechanical simulation in a single unified environment.",
      "Iterate on design decisions in minutes. Catch failures before they become prototype costs.",
    ],
    callout: ">>> Validate your design before you order a single part.",
    terminal: {
      title: "ORIV://SIMULATION-ENGINE",
      lines: [
        "> LOADING SYSTEM TOPOLOGY...",
        "> GENERATING BEHAVIORAL MODELS...",
        "> RUNNING THERMAL ANALYSIS...",
        "> COMPUTING TRANSIENT RESPONSE...",
      ],
      result: "> SIMULATION COMPLETE / 0 VIOLATIONS [1.2s]",
    },
  },
  {
    id: "MOD-03",
    label: "HYBRID TESTING",
    title: "TEST WITH\nREAL HARDWARE.\nVIRTUALLY.",
    subtitle: "Connect your simulations directly to hardware-in-the-loop test benches. Run mixed virtual-physical tests before committing to full production. When you finally do build, the surprises are already accounted for.",
    points: [
      "Bridge simulations to HIL setups over standard industrial protocols: OPC-UA, CAN, Modbus.",
      "Run hybrid tests that combine virtual plant models with physical sensor feedback.",
      "Validate system behavior under real-world conditions without full prototype fabrication.",
    ],
    callout: ">>> The gap between simulation and reality, closed before production.",
    terminal: {
      title: "ORIV://HIL-BRIDGE",
      lines: [
        "> CONNECTING TO HIL INTERFACE...",
        "> SYNCING VIRTUAL PLANT MODEL...",
        "> INJECTING TEST VECTORS...",
        "> READING SENSOR FEEDBACK...",
      ],
      result: "> HIL TEST PASSED / ALL MARGINS OK [3.8s]",
    },
  },
  {
    id: "MOD-04",
    label: "LIVE INSTRUMENTS",
    title: "MONITOR\nEVERYTHING.\nIN REAL TIME.",
    subtitle: "Stream live telemetry from simulations and physical hardware into configurable dashboards. Oscilloscopes, gauges, data loggers. All in the same workspace where you selected parts and ran simulations. And when compliance asks for audit data, it is already there.",
    points: [
      "Unified dashboards that stream data from both virtual simulations and physical test setups.",
      "Configure custom instrument panels: scope views, gauges, time-series logs.",
      "Export test data in standard formats for compliance documentation and audit trails.",
    ],
    callout: ">>> Full observability from component selection through production validation.",
    terminal: {
      title: "ORIV://INSTRUMENT-PANEL",
      lines: [
        "> OPENING DATA CHANNELS...",
        "> STREAMING 48 SIGNALS @ 10kHz...",
        "> APPLYING DIGITAL FILTERS...",
        "> LOGGING TO AUDIT BUFFER...",
      ],
      result: "> DASHBOARD LIVE / ALL CHANNELS NOMINAL",
    },
  },
];

export default function Solution() {
  const [active, setActive] = useState(0);
  const mod = modules[active];

  return (
    <section id="features" className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ THE PLATFORM ]</span>
          <span className="type-micro">FOUR MODULES. ONE WORKSPACE.</span>
        </div>
      </div>

      {/* Title */}
      <div className="border-b border-line px-6 py-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="type-macro text-foreground"
            style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
          >
            WHAT ORIV
            <br />
            <span className="text-accent">ACTUALLY</span> DOES
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            Four modules that cover the full lifecycle: from finding the right
            component to validating it works in your system. No switching
            between disconnected tools. No re-entering data.
          </p>
        </div>
      </div>

      {/* Module tabs */}
      <div className="grid-dividers grid sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <button
            key={m.id}
            onClick={() => setActive(i)}
            className={`px-6 py-4 flex items-center gap-3 text-left transition-colors ${
              i === active ? "!bg-surface" : "hover:!bg-surface/50"
            } focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]`}
          >
            <samp className={`type-micro font-bold ${i === active ? "text-accent" : "text-dim"}`}>
              {m.id}
            </samp>
            <samp className={`type-micro ${i === active ? "text-foreground" : "text-muted"}`}>
              {m.label}
            </samp>
          </button>
        ))}
      </div>

      {/* Feature detail */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2">
          {/* Left text */}
          <div className="border-b lg:border-b-0 lg:border-r border-line p-6 md:p-12">
            <samp className="type-micro text-accent font-bold mb-2 block">{mod.id} /// ACTIVE</samp>
            <h3
              className="type-macro text-foreground mt-4 whitespace-pre-line"
              style={{ fontSize: "clamp(1.5rem, 3vw, 3.5rem)" }}
            >
              {mod.title}
            </h3>

            <p className="mt-6 font-mono text-muted" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
              {mod.subtitle}
            </p>

            <hr className="border-line my-8" />

            <dl className="space-y-4">
              {mod.points.map((pt, i) => (
                <div key={i} className="flex gap-3">
                  <dt className="type-micro text-accent font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </dt>
                  <dd className="font-mono text-muted leading-relaxed text-xs tracking-wide">
                    {pt}
                  </dd>
                </div>
              ))}
            </dl>

            <hr className="border-line my-8" />

            <div className="border-l-2 border-accent pl-4">
              <output className="type-micro text-accent font-bold block" style={{ fontSize: "0.85rem" }}>
                {mod.callout}
              </output>
            </div>
          </div>

          {/* Right terminal */}
          <div className="bg-surface p-6 md:p-12 flex items-center justify-center min-h-[400px]">
            <div className="w-full border border-line p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-line pb-3">
                <samp className="type-micro text-accent">///</samp>
                <samp className="type-micro">{mod.terminal.title}</samp>
              </div>
              <div className="space-y-2">
                {mod.terminal.lines.map((line, i) => (
                  <samp key={i} className="type-micro block">{line}</samp>
                ))}
                <samp className="type-micro block text-accent">{mod.terminal.result}</samp>
                <samp className="type-micro block mt-4 text-dim">█████████████████████ 100%</samp>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
