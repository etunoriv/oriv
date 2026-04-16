"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { gsap } from "@/lib/gsap-init";

const modules = [
  {
    id: "MOD-01",
    label: "COMPONENT SELECTION",
    title: "FIND THE RIGHT PART. IN MINUTES.",
    subtitle: "We index manufacturer datasheets and build a knowledge base from real specs. Not summaries. Not approximations. The actual data, traceable to its source. Your engineers ask a question, and the platform returns candidates that actually fit the constraints.",
    points: [
      "Search the global component market with filters that understand electrical, thermal, and lifecycle parameters.",
      "Every result links back to the original manufacturer datasheet. No guessing where a number came from.",
      "Go from requirements to a vetted shortlist in the time it used to take to open the first PDF.",
    ],
    callout: "Weeks of datasheet review, compressed into a conversation with real data.",
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
    title: "SIMULATE BEFORE YOU BUILD.",
    subtitle: "Generate physics-based behavioral models directly from component specs. No weeks of manual model creation. No skipping simulation because the setup cost is too high. Run thermal, electrical, and mechanical analysis in the same environment where you selected the parts.",
    points: [
      "Behavioral models generated from datasheet parameters. Not hand-built from scratch every time.",
      "Electrical, thermal, and mechanical simulation in a single unified environment.",
      "Iterate on design decisions in minutes. Catch failures before they become prototype costs.",
    ],
    callout: "Validate your design before you order a single part.",
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
    title: "TEST WITH REAL HARDWARE. VIRTUALLY.",
    subtitle: "Connect your simulations directly to hardware-in-the-loop test benches. Run mixed virtual-physical tests before committing to full production. When you finally do build, the surprises are already accounted for.",
    points: [
      "Bridge simulations to HIL setups over standard industrial protocols: OPC-UA, CAN, Modbus.",
      "Run hybrid tests that combine virtual plant models with physical sensor feedback.",
      "Validate system behavior under real-world conditions without full prototype fabrication.",
    ],
    callout: "The gap between simulation and reality, closed before production.",
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
    title: "MONITOR EVERYTHING. IN REAL TIME.",
    subtitle: "Stream live telemetry from simulations and physical hardware into configurable dashboards. Oscilloscopes, gauges, data loggers. All in the same workspace where you selected parts and ran simulations. And when compliance asks for audit data, it is already there.",
    points: [
      "Unified dashboards that stream data from both virtual simulations and physical test setups.",
      "Configure custom instrument panels: scope views, gauges, time-series logs.",
      "Export test data in standard formats for compliance documentation and audit trails.",
    ],
    callout: "Full observability from component selection through production validation.",
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

function TerminalBlock({ terminal }: { terminal: typeof modules[number]["terminal"] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const lines = el.querySelectorAll("[data-terminal-line]");
    const result = el.querySelector("[data-terminal-result]");

    gsap.set(lines, { opacity: 0, x: -10 });
    gsap.set(result, { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(lines, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: 0.15,
      ease: "power2.out",
    }).to(result, { opacity: 1, duration: 0.4 }, "-=0.1");

    return () => { tl.kill(); };
  }, [terminal.title]);

  return (
    <div ref={containerRef} className="bg-foreground/[0.03] border border-line rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4 border-b border-line pb-3">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <samp className="type-micro text-muted">{terminal.title}</samp>
      </div>
      <div className="space-y-2">
        {terminal.lines.map((line, i) => (
          <samp key={i} data-terminal-line className="type-micro block">{line}</samp>
        ))}
        <samp data-terminal-result className="type-micro block text-accent font-bold mt-3">{terminal.result}</samp>
      </div>
    </div>
  );
}

export default function Solution() {
  const [active, setActive] = useState(0);
  const mod = modules[active];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// THE PLATFORM</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              WHAT ORIV <span className="text-accent">ACTUALLY</span> DOES
            </h2>
            <p className="mt-6 text-muted max-w-xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
              Four modules that cover the full lifecycle: from finding the right
              component to validating it works in your system. No switching
              between disconnected tools. No re-entering data.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {modules.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`relative px-5 py-2.5 type-micro font-bold rounded-md transition-all duration-300 btn-press ${
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
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white border border-line rounded-lg p-8 md:p-10">
              <samp className="type-micro text-accent font-bold mb-2 block">{mod.id}</samp>
              <h3
                className="type-macro text-foreground mt-3"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)" }}
              >
                {mod.title}
              </h3>

              <p className="mt-6 text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
                {mod.subtitle}
              </p>

              <hr className="border-line my-8" />

              <dl className="space-y-4">
                {mod.points.map((pt, i) => (
                  <div key={i} className="flex gap-3">
                    <dt className="type-micro text-accent font-bold shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </dt>
                    <dd className="text-muted leading-relaxed text-sm">
                      {pt}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-l-2 border-accent pl-4">
                <p className="type-micro text-accent font-bold" style={{ fontSize: "0.85rem" }}>
                  {mod.callout}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <TerminalBlock terminal={mod.terminal} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
