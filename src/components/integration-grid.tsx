"use client";

import { useState } from "react";
import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * IntegrationGrid — full integration surface on /built-on.
 * Five categories, named tools, query interface coverage.
 * Includes "Don't see your tool?" inline form.
 */

const categories = [
  {
    id: "eda",
    label: "EDA · PCB Design",
    description: "Wire Oriv to your schematic and layout tools. Component properties propagate directly into your parts library.",
    tools: [
      { name: "Altium Designer", note: "Native library sync via REST" },
      { name: "KiCad", note: "Open plugin, community supported" },
      { name: "Cadence OrCAD / Allegro", note: "CIS connector in progress" },
      { name: "Mentor PADS / Xpedition", note: "Library adapter via REST" },
      { name: "Zuken CR-8000", note: "Available via REST API" },
      { name: "DipTrace", note: "Via REST API" },
    ],
  },
  {
    id: "plm",
    label: "PLM · Product Lifecycle",
    description: "Keep your PLM's BOM clean without manual re-extraction. Oriv is the single source of truth that PLM reads from.",
    tools: [
      { name: "Siemens Teamcenter", note: "Integration via Teamcenter connectors" },
      { name: "Aras Innovator", note: "REST-native, open schema" },
      { name: "PTC Windchill", note: "Standard REST + webhook events" },
      { name: "Dassault ENOVIA / 3DEXPERIENCE", note: "REST connector" },
      { name: "Arena PLM", note: "Native REST API" },
      { name: "Propel PLM", note: "Salesforce-native, REST" },
    ],
  },
  {
    id: "erp",
    label: "ERP · Data Warehouse",
    description: "Component master data that stays consistent across procurement, inventory, and finance.",
    tools: [
      { name: "SAP S/4HANA", note: "Material master sync via REST" },
      { name: "Oracle Cloud ERP", note: "Item master connector" },
      { name: "Snowflake", note: "Native SQL. Query Oriv directly" },
      { name: "Databricks", note: "Delta Lake via SQL connector" },
      { name: "BigQuery", note: "REST export on schedule or event" },
      { name: "Redshift", note: "REST export" },
    ],
  },
  {
    id: "ai",
    label: "AI · Agents & Copilots",
    description: "Give your AI agents real component data via MCP. Cursor, Windsurf, Claude Code, and any custom agent that speaks MCP.",
    tools: [
      { name: "Cursor", note: "Oriv MCP server. Native tool calls" },
      { name: "Windsurf (Codeium)", note: "MCP server, same interface" },
      { name: "Claude Code", note: "MCP server. Zero config" },
      { name: "OpenAI Assistants", note: "Function calling via REST bridge" },
      { name: "LangChain / LlamaIndex", note: "REST tool, Python SDK" },
      { name: "Custom internal agents", note: "MCP or REST. Your choice" },
    ],
  },
  {
    id: "custom",
    label: "Custom · APIs & SDKs",
    description: "Any query shape your team already speaks. Same canonical store, same data, behind every interface.",
    tools: [
      { name: "REST API", note: "OpenAPI 3.1 spec, versioned" },
      { name: "GraphQL", note: "Typed schema, introspectable" },
      { name: "SQL", note: "Standard SQL. Snowflake, Postgres dialect" },
      { name: "MQL (MongoDB Query)", note: "For document-oriented integrations" },
      { name: "SPARQL", note: "For ontology and knowledge graph integrations" },
      { name: "Python / TypeScript SDKs", note: "Typed clients, auto-generated from OpenAPI" },
    ],
  },
];

export default function IntegrationGrid() {
  const [active, setActive] = useState("eda");
  const cat = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">
              Integration surface.{" "}
              <span className="text-[var(--on-surface-variant)]">Five categories.</span>
            </h2>
            <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
              One data layer behind every tool in your stack. Named integrations below;
              anything with a REST endpoint or SQL interface can connect.
            </p>
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={60}>
          <div
            role="tablist"
            aria-label="Integration categories"
            className="mb-8 flex flex-wrap gap-2"
          >
            {categories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={c.id === active}
                onClick={() => setActive(c.id)}
                className={`rounded-md px-3.5 py-2 label-mono text-[10px] tracking-[0.16em] transition-colors duration-150 ${
                  c.id === active
                    ? "bg-[var(--on-surface)] text-[var(--surface)]"
                    : "border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--on-surface-variant)] hover:border-[var(--border-strong)] hover:text-[var(--on-surface)] active:bg-[var(--surface-container)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active panel */}
        <Reveal delay={100} key={active}>
          <div>
            <p className="mb-6 body-md max-w-[600px] text-[var(--on-surface-variant)]">
              {cat.description}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cat.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 py-4 transition-colors duration-150 hover:border-[var(--border-strong)]"
                >
                  <p className="mb-0.5 text-[13.5px] font-medium text-[var(--on-surface)]">
                    {tool.name}
                  </p>
                  <p className="label-mono text-[10px] tracking-[0.12em] text-[var(--on-surface-variant)]">
                    {tool.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Don't see your tool? */}
        <Reveal delay={160}>
          <div className="mt-10 rounded-lg border border-[var(--oriv-yellow)]/25 bg-[var(--oriv-yellow)]/5 px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="label-mono mb-1 text-[10px] tracking-[0.18em] text-[#785a00]">
                  DON&rsquo;T SEE YOUR TOOL?
                </p>
                <p className="body-md text-[var(--on-surface-variant)]">
                  We add integrations based on what design partners actually run.
                  Tell us your stack and we&rsquo;ll scope it.
                </p>
              </div>
              <a
                href="mailto:hello@oriv.io?subject=Integration request&body=Tool I need Oriv to connect to:%0A%0AMy stack:%0A%0AUse case:%0A"
                className="inline-flex shrink-0 items-center gap-2 btn-primary"
              >
                <span>Request integration</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-black/10">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
