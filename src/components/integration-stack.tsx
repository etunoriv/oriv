"use client";

import { Reveal } from "@/lib/motion";

/**
 * Integration row — slim, Linear-style. One line of category names + tools.
 * Removed the eyebrow + multi-row layout to honor "one thing per section."
 */

const categories = [
  { label: "EDA", items: ["Altium", "KiCad", "Cadence", "Mentor"] },
  { label: "PLM", items: ["Teamcenter", "Aras", "Windchill", "ENOVIA"] },
  { label: "ERP / DATA", items: ["SAP", "Oracle", "Snowflake", "Databricks"] },
  { label: "AI", items: ["Cursor", "Windsurf", "Claude", "Internal agents"] },
  { label: "CUSTOM", items: ["REST · GraphQL", "SQL · MQL · SPARQL", "SDKs"] },
];

export default function IntegrationStack() {
  return (
    <section className="relative border-y border-[var(--border-subtle)] bg-[var(--surface)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="mb-10 text-center body-md text-[var(--on-surface-variant)]">
            One data layer ·{" "}
            <span className="text-[var(--on-surface)]">every tool your engineers already run</span>
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p className="label-mono mb-3 text-[10px] tracking-[0.2em] text-[var(--on-surface)]">
                  {cat.label}
                </p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-[12.5px] leading-snug text-[var(--on-surface-variant)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
