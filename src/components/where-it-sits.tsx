"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Where It Sits — the secondary-not-primary section. Addresses the CTO's
 * hardest constraint head-on: Oriv runs beneath the tools engineering teams
 * already trust. EDA, PLM, simulation, AI agents all keep their place; the
 * knowledge layer feeds them.
 */

const layers = [
  {
    num: "01",
    title: "Your existing tools",
    body: "EDA suites, PLM systems, simulators, AI copilots, internal apps. The tools your team has trusted for years stay primary. The interfaces don't change.",
    tools: ["Altium", "Cadence", "KiCad", "Windchill", "Teamcenter", "Cursor", "Claude", "Custom apps"],
  },
  {
    num: "02",
    title: "The query interface",
    body: "REST, GraphQL, SQL, MQL, SPARQL, MCP. Any tool that can query reaches the layer through its native idiom, without re-tooling or replacement.",
    tools: ["REST", "GraphQL", "SQL", "MQL", "SPARQL", "MCP"],
  },
  {
    num: "03",
    title: "The knowledge layer",
    body: "Decisions, trade-offs, reasoning, citations, reuse history. All captured from the engineers who made the calls and held in your tenant. The layer stays secondary by design.",
    tools: ["Decisions", "Reasoning", "Trade-offs", "Citations", "Reuse map"],
    accent: true,
  },
];

export default function WhereItSits() {
  return (
    <section
      id="where-it-sits"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Beneath the tools your team already runs.{" "}
              <span className="text-[var(--on-surface-variant)]">
                Never on top.
              </span>
            </h2>
            <p className="body-lg max-w-[620px] text-[var(--on-surface-variant)]">
              Oriv doesn&rsquo;t replace the EDA, PLM, simulation, or AI tools
              your team already trusts. It sits underneath them and holds the
              knowledge they don&rsquo;t. Reasoning, citations, prior
              decisions. Available to whichever tool asks for it.
            </p>
          </div>
        </Reveal>

        {/* Stacked layer cards */}
        <Stagger className="space-y-3 md:space-y-4" step={0.08} delayChildren={0.05}>
          {layers.map((layer) => (
            <Item key={layer.num}>
              <div
                className={`relative overflow-hidden rounded-xl border ${
                  layer.accent
                    ? "border-[var(--oriv-yellow)]/30 bg-[var(--oriv-yellow)]/[0.04]"
                    : "border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
                } px-6 py-7 md:px-8 md:py-8`}
              >
                <div className="grid grid-cols-[2.75rem_minmax(0,_1fr)] items-start gap-4 md:grid-cols-[3.5rem_minmax(0,_0.9fr)_minmax(0,_1.5fr)] md:gap-10">
                  <span
                    className={`font-mono text-[11px] tracking-[0.05em] ${
                      layer.accent
                        ? "text-[var(--oriv-yellow)]"
                        : "text-[var(--outline)]"
                    }`}
                  >
                    {layer.num}
                  </span>
                  <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17.5px]">
                    {layer.title}
                  </h3>
                  <div className="col-span-2 md:col-span-1">
                    <p className="body-md mb-4 text-[var(--on-surface-variant)]">
                      {layer.body}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.tools.map((t) => (
                        <span
                          key={t}
                          className={`rounded px-2 py-0.5 font-mono text-[10.5px] ${
                            layer.accent
                              ? "bg-[var(--oriv-yellow)]/15 text-[var(--oriv-yellow)]"
                              : "bg-[var(--surface-container)] text-[var(--on-surface-variant)]"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal delay={200}>
          <p className="mt-10 max-w-[720px] body-md text-[var(--on-surface-variant)]">
            The whole point of the layer is to stay out of the way. Engineers
            keep working in the tools they trust, and those tools start
            answering questions they never could on their own.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
