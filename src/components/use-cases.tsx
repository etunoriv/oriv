"use client";

import { useState } from "react";
import { Reveal, Stagger, Item } from "@/lib/motion";

const cases = [
  {
    industry: "DMSMS · A&D",
    title: "An alternates-finder for forty years of SCDs.",
    body: "Pattern from A&D conversations. Today's DMSMS investigation runs 4 to 6 weeks per part. With Oriv as the data layer, the same investigation runs in a day. The team keeps their existing tooling. Oriv ships the data underneath.",
    metric: "6 weeks → 1 day per investigation",
    forRole: "DMSMS Office",
    replaces: "Excel + handed-down knowledge",
  },
  {
    industry: "Hardware R&D",
    title: "An AI design copilot with real component data.",
    body: "Pattern from hardware R&D conversations. Engineers spend a day per component triaging datasheets. With Oriv connected to their AI agent, asking for an alternate to IRF7314 with lower RDS(on) returns cited candidates in seconds. Pin compatibility checked against the qualified-supplier list.",
    metric: "200 candidates → 8 cited alternates in 90s",
    forRole: "Hardware R&D",
    replaces: "Manual datasheet triage",
  },
  {
    industry: "Avionics Test",
    title: "Test benches that wire themselves up.",
    body: "Pattern from avionics test conversations. Setting up a new HIL bench takes two weeks of LabVIEW and Python wiring per rig. With Oriv as the data layer, an AI agent understands the system, picks the right widgets, and generates the glue logic. Same morning, working test setup.",
    metric: "New HIL rig: 2 weeks → 1 morning",
    forRole: "Test Engineering",
    replaces: "Per-rig custom integration code",
  },
  {
    industry: "Robotics R&D",
    title: "Sensor selection without the spec-sheet rabbit hole.",
    body: "Pattern from robotics conversations. Picking a new IMU or ToF sensor means cross-checking datasheets for drift, interface, and stock. With Oriv, the agent answers \"find me an IMU with tighter drift and the same I2C address\" in seconds. Cited against prior-qualified parts.",
    metric: "Sensor swap: 2 days → 20 minutes",
    forRole: "Robotics R&D",
    replaces: "Cross-checking by hand",
  },
  {
    industry: "Prototyping",
    title: "Behavioral models that come with the part.",
    body: "Pattern from robotics prototyping conversations. Building a calibrated simulation model from a datasheet runs 2 to 3 days per component. With Oriv as the data layer, an AI agent pulls conditions, signal characteristics, and qualification limits, and emits a ready model.",
    metric: "Behavioral model: 3 days → 4 hours",
    forRole: "Prototyping",
    replaces: "Manual model calibration",
  },
  {
    industry: "Component Engineering",
    title: "Compare five datasheets without building a spreadsheet.",
    body: "Pattern from hardware R&D conversations. Five MOSFET candidates, five datasheets, five different ways to spec RDS(on). Engineers build the comparison spreadsheet by hand. With Oriv, one query returns all five at the same operating point.",
    metric: "Cross-vendor comparison: half a day → 30 seconds",
    forRole: "Component Engineering",
    replaces: "Manual cross-vendor spreadsheets",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section
      id="built-on"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Built on Oriv.{" "}
              <span className="text-[var(--on-surface-variant)]">
                What teams build with us.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Six patterns from discovery conversations. From 6 weeks to 1 day on
              DMSMS investigations. From 200 candidates to 8 cited alternates in
              90 seconds. Pick your domain.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Stagger
            className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-3 md:grid-cols-6"
            step={0.04}
          >
            {cases.map((cc, i) => (
              <Item key={cc.industry}>
                <button
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`flex h-full w-full items-center px-4 py-3.5 text-left text-[12.5px] font-medium transition-colors duration-150 ${
                    i === active
                      ? "bg-[var(--on-surface)] text-[var(--surface-elevated)]"
                      : "bg-[var(--surface)] text-[var(--on-surface-variant)] hover:bg-[var(--surface-container-low)] hover:text-[var(--on-surface)] active:bg-[var(--surface-container)]"
                  }`}
                >
                  {cc.industry}
                </button>
              </Item>
            ))}
          </Stagger>
        </Reveal>

        {/* Active panel — headline-left / body-right */}
        <Reveal delay={140} key={active}>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.3fr)] md:gap-16">
            <div>
              <p className="label-mono mb-4 text-[10.5px] tracking-[0.18em] text-[var(--on-surface)]">
                {c.industry.toUpperCase()}
              </p>
              <h3 className="headline-xl text-[var(--on-surface)]">{c.title}</h3>
            </div>
            <div>
              <p className="mb-5 body-lg text-[var(--on-surface-variant)]">{c.body}</p>
              <div className="mb-5 inline-flex items-baseline gap-2.5 rounded border border-[var(--oriv-yellow)]/35 bg-[var(--oriv-yellow)]/[0.07] px-3.5 py-2 font-mono text-[13.5px] font-medium text-[var(--oriv-yellow)]">
                <span aria-hidden className="inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-[var(--oriv-yellow)]" />
                {c.metric}
              </div>
              <div className="flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-5">
                <span className="chip">For: {c.forRole}</span>
                <span className="chip">Replaces: {c.replaces}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-12 max-w-[680px] body-md text-[var(--on-surface-variant)]">
            <span className="label-mono mr-2 text-[10px] tracking-[0.18em] text-[var(--outline)]">
              NOTE
            </span>
            Oriv ships the data layer. The applications above are customer-built,
            often with Cursor or Claude Code doing most of the typing. Names redacted
            under NDA. Patterns are real.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
