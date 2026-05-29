"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * Compliance — Linear-disciplined spec table.
 *
 * Three buckets as left-aligned rows in a single table-style layout.
 * Engineers scan this; structure beats flourish.
 */

const buckets = [
  {
    label: "Available now",
    items: [
      { name: "ITAR-ready deployment", note: "US-persons-only · AWS GovCloud · Azure Government" },
      { name: "On-prem & private cloud", note: "VPC · dedicated tenancy · air-gapped" },
      { name: "ISO 26262 traceability", note: "ASIL evidence chains · per-field provenance" },
      { name: "FDA 21 CFR Part 11", note: "Electronic records · MedTech DHF" },
    ],
  },
  {
    label: "Default behavior",
    items: [
      { name: "Tenant isolation", note: "Your private extensions never leave your tenant. Ever." },
      { name: "Provenance & audit log", note: "Every record cites its source page, table, and run." },
    ],
  },
  {
    label: "In progress",
    items: [
      { name: "FedRAMP Moderate", note: "Authorization underway · IL5 scoped for DoD primes" },
      { name: "IEC 62443 / SOC 2 Type II", note: "Industrial cyber controls · SOC 2 audit underway" },
    ],
  },
];

export default function Compliance() {
  return (
    <section id="trust" className="relative bg-[var(--surface)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Stagger className="border-t border-[var(--border-subtle)]" step={0.1} delayChildren={0.05}>
          {buckets.map((b) => (
            <Item key={b.label}>
              <div className="grid grid-cols-1 items-start gap-6 border-b border-[var(--border-subtle)] py-10 md:grid-cols-[200px_minmax(0,_1fr)] md:gap-12">
                <h3 className="headline-sm text-[var(--on-surface)]">{b.label}</h3>
                <Stagger className="space-y-5" step={0.05} delayChildren={0.1}>
                  {b.items.map((item) => (
                    <Item key={item.name}>
                      <div className="grid grid-cols-1 gap-1 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] md:gap-8">
                        <p className="text-[14px] font-medium text-[var(--on-surface)]">
                          {item.name}
                        </p>
                        <p className="body-md text-[var(--on-surface-variant)]">{item.note}</p>
                      </div>
                    </Item>
                  ))}
                </Stagger>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
