"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/lib/motion";

/**
 * IntegrationGrid — the integration index.
 *
 * Replaced the tabs-over-3×2-grid pattern with a single editorial catalog:
 * 30 named integrations, numbered, with inline category filters. Reads like
 * a product index, not a marketing widget.
 */

type CatId = "EDA" | "PLM" | "ERP" | "AI" | "CUSTOM";
type Tool = { name: string; note: string; cat: CatId };

const TOOLS: Tool[] = [
  { name: "Altium Designer", note: "Native library sync via REST", cat: "EDA" },
  { name: "KiCad", note: "Open plugin, community supported", cat: "EDA" },
  { name: "Cadence OrCAD / Allegro", note: "CIS connector in progress", cat: "EDA" },
  { name: "Mentor PADS / Xpedition", note: "Library adapter via REST", cat: "EDA" },
  { name: "Zuken CR-8000", note: "Available via REST API", cat: "EDA" },
  { name: "DipTrace", note: "Via REST API", cat: "EDA" },
  { name: "Siemens Teamcenter", note: "Integration via Teamcenter connectors", cat: "PLM" },
  { name: "Aras Innovator", note: "REST-native, open schema", cat: "PLM" },
  { name: "PTC Windchill", note: "Standard REST + webhook events", cat: "PLM" },
  { name: "Dassault ENOVIA / 3DEXPERIENCE", note: "REST connector", cat: "PLM" },
  { name: "Arena PLM", note: "Native REST API", cat: "PLM" },
  { name: "Propel PLM", note: "Salesforce-native, REST", cat: "PLM" },
  { name: "SAP S/4HANA", note: "Material master sync via REST", cat: "ERP" },
  { name: "Oracle Cloud ERP", note: "Item master connector", cat: "ERP" },
  { name: "Snowflake", note: "Native SQL. Query Oriv directly", cat: "ERP" },
  { name: "Databricks", note: "Delta Lake via SQL connector", cat: "ERP" },
  { name: "BigQuery", note: "REST export on schedule or event", cat: "ERP" },
  { name: "Redshift", note: "REST export", cat: "ERP" },
  { name: "Cursor", note: "Oriv MCP server. Native tool calls", cat: "AI" },
  { name: "Windsurf (Codeium)", note: "MCP server, same interface", cat: "AI" },
  { name: "Claude Code", note: "MCP server. Zero config", cat: "AI" },
  { name: "OpenAI Assistants", note: "Function calling via REST bridge", cat: "AI" },
  { name: "LangChain / LlamaIndex", note: "REST tool, Python SDK", cat: "AI" },
  { name: "Custom internal agents", note: "MCP or REST. Your choice", cat: "AI" },
  { name: "REST API", note: "OpenAPI 3.1 spec, versioned", cat: "CUSTOM" },
  { name: "GraphQL", note: "Typed schema, introspectable", cat: "CUSTOM" },
  { name: "SQL", note: "Standard SQL. Snowflake, Postgres dialect", cat: "CUSTOM" },
  { name: "MQL (MongoDB Query)", note: "For document-oriented integrations", cat: "CUSTOM" },
  { name: "SPARQL", note: "For ontology and knowledge graph integrations", cat: "CUSTOM" },
  { name: "Python / TypeScript SDKs", note: "Typed clients, auto-generated from OpenAPI", cat: "CUSTOM" },
];

type FilterId = CatId | "ALL";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "ALL", label: "All" },
  { id: "EDA", label: "EDA" },
  { id: "PLM", label: "PLM" },
  { id: "ERP", label: "ERP" },
  { id: "AI", label: "AI" },
  { id: "CUSTOM", label: "Custom" },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export default function IntegrationGrid() {
  const [filter, setFilter] = useState<FilterId>("ALL");

  const filtered = useMemo(
    () => (filter === "ALL" ? TOOLS : TOOLS.filter((t) => t.cat === filter)),
    [filter],
  );

  const counts = useMemo<Record<FilterId, number>>(() => {
    const c: Record<FilterId, number> = { ALL: TOOLS.length, EDA: 0, PLM: 0, ERP: 0, AI: 0, CUSTOM: 0 };
    for (const t of TOOLS) c[t.cat] += 1;
    return c;
  }, []);

  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1.05fr)_minmax(0,_1fr)] md:gap-16 md:items-end">
            <div>
              <p className="label-mono mb-3 text-[10px] tracking-[0.22em] text-[var(--outline)]">
                INTEGRATION INDEX
              </p>
              <h2 className="headline-xl text-[var(--on-surface)]">
                {TOOLS.length} named integrations.{" "}
                <span className="text-[var(--on-surface-variant)]">
                  Anything REST or SQL connects.
                </span>
              </h2>
            </div>
            <p className="body-lg max-w-[480px] text-[var(--on-surface-variant)]">
              The list below is what design partners actually wire — not aspirational
              logos. Missing a name? Send us your stack and we&rsquo;ll scope it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-3 flex flex-wrap items-baseline gap-x-1 gap-y-2">
            {FILTERS.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`group inline-flex items-baseline gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-[11.5px] tracking-tight transition-colors duration-200 ${
                    active
                      ? "bg-[var(--oriv-yellow)] text-[var(--on-oriv-yellow)]"
                      : "text-[var(--on-surface-variant)] hover:bg-[var(--surface-container-low)] hover:text-[var(--on-surface)]"
                  }`}
                  aria-pressed={active}
                >
                  <span>{f.label}</span>
                  <span className={active ? "opacity-70" : "opacity-45"}>
                    {counts[f.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="border-t border-[var(--border-subtle)]">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((t, i) => (
                <motion.li
                  key={t.name}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: EASE, layout: { duration: 0.32, ease: EASE } }}
                  className="group relative border-b border-[var(--border-subtle)]"
                >
                  <div className="grid grid-cols-[2.75rem_minmax(0,_1fr)_4rem] items-baseline gap-3 px-1 py-4 transition-colors duration-200 group-hover:bg-[var(--surface-container-low)] md:grid-cols-[3.5rem_minmax(0,_1.1fr)_minmax(0,_1.5fr)_5rem] md:gap-6 md:px-3">
                    <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)]">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <span className="text-[15.5px] font-medium tracking-tight text-[var(--on-surface)]">
                      {t.name}
                    </span>
                    <span className="hidden font-mono text-[12px] leading-snug text-[var(--on-surface-variant)] md:block">
                      {t.note}
                    </span>
                    <span className="label-mono text-right text-[10px] tracking-[0.2em] text-[var(--outline)] transition-colors duration-200 group-hover:text-[var(--on-surface-variant)]">
                      {t.cat}
                    </span>
                  </div>
                  <p className="ml-[2.75rem] -mt-1 mb-3 pr-1 font-mono text-[11.5px] leading-snug text-[var(--on-surface-variant)] md:hidden">
                    {t.note}
                  </p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-12 max-w-[640px] text-[15px] leading-relaxed text-[var(--on-surface-variant)]">
            Missing a name?{" "}
            <a
              href="mailto:hello@oriv.io?subject=Integration request&body=Tool I need Oriv to connect to:%0A%0AMy stack:%0A%0AUse case:%0A"
              className="text-[var(--on-surface)] underline decoration-[var(--oriv-yellow)] decoration-2 underline-offset-[5px] transition-colors hover:text-[var(--oriv-yellow)]"
            >
              Tell us what your team runs
            </a>{" "}
            and we&rsquo;ll add it to the index.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
