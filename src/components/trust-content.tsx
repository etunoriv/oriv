"use client";

import { Reveal, Stagger, Item } from "@/lib/motion";

/**
 * TrustContent — replaces badge-style display with written commitments.
 * Structure: threat model → tenant isolation → compliance commitments →
 * deployment options → data residency → provenance guarantee.
 *
 * No logos, no greyed-out compliance badges. Plain language obligations.
 */

const threatModel = [
  {
    risk: "Cross-tenant data bleed",
    mitigation: "Strict tenant isolation in storage, query, and extraction. Your private layer is cryptographically scoped. Zero shared schema state across tenants.",
  },
  {
    risk: "Uncited or hallucinated parameters",
    mitigation: "Every field carries source page, table, and extraction run ID. Any field that cannot be cited is not written. No confidence-interpolated values in production records.",
  },
  {
    risk: "Export-control violation",
    mitigation: "ITAR-compliant deployment on AWS GovCloud and Azure Government. US-persons-only processing path. Data never transits non-compliant regions.",
  },
  {
    risk: "Unauthorized access to proprietary specs",
    mitigation: "Role-based access control per record type. SCDs and MIL-PRF specs are read-only unless the requesting identity is in the authorized scope.",
  },
];

const commitments = [
  {
    label: "Available now",
    color: "emerald" as const,
    items: [
      {
        name: "Tenant isolation",
        note: "Your private SCDs, MIL-PRF specs, and supplier quals are stored, processed, and queried in your tenant only. They never inform another tenant's results.",
      },
      {
        name: "Per-field provenance",
        note: "Every canonical record cites the source page, table, and extraction run. Queryable audit trail for ISO 26262 ASIL evidence, FDA 21 CFR Part 11, and DMSMS workflows.",
      },
      {
        name: "ITAR-ready deployment",
        note: "AWS GovCloud and Azure Government available. US-persons-only processing path. No data transits non-compliant regions.",
      },
      {
        name: "On-prem & private cloud",
        note: "Full deployment inside your VPC, dedicated tenancy, or air-gapped environment. We ship the stack; you own the runtime.",
      },
      {
        name: "ISO 26262 traceability",
        note: "ASIL evidence chains, per-field provenance, and change history available for automotive functional safety workflows.",
      },
      {
        name: "FDA 21 CFR Part 11",
        note: "Electronic records with audit trail. Medical device design history file (DHF) workflows supported.",
      },
    ],
  },
  {
    label: "In progress",
    color: "yellow" as const,
    items: [
      {
        name: "FedRAMP Moderate authorization",
        note: "Authorization process underway. IL5 scoped for DoD prime contractors.",
      },
      {
        name: "SOC 2 Type II",
        note: "Audit in progress. Report available to design partners under NDA.",
      },
      {
        name: "IEC 62443 industrial cyber",
        note: "Industrial control system security controls being mapped to Oriv's deployment model.",
      },
    ],
  },
];

const deploymentOptions = [
  {
    name: "Oriv Cloud",
    note: "Managed SaaS. Tenant isolation guaranteed. Oriv-operated infrastructure.",
    available: true,
  },
  {
    name: "VPC Deployment",
    note: "Your cloud account, your VPC. We ship the stack. You own the runtime.",
    available: true,
  },
  {
    name: "On-prem",
    note: "Your data center, fully air-gapped. Full offline operation supported.",
    available: true,
  },
  {
    name: "AWS GovCloud / Azure Government",
    note: "ITAR-compliant US-sovereign region. US-persons-only processing.",
    available: true,
  },
];

export default function TrustContent() {
  return (
    <div>
      {/* Threat model */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
              <h2 className="headline-xl text-[var(--on-surface)]">
                Threat model.{" "}
                <span className="text-[var(--on-surface-variant)]">Written down.</span>
              </h2>
              <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
                Most enterprise software avoids publishing its threat model.
                We publish ours because engineers in regulated industries need to
                evaluate it before signing. Four risks, four mitigations.
              </p>
            </div>
          </Reveal>

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.09} delayChildren={0.05}>
            {threatModel.map((t) => (
              <Item key={t.risk}>
                <div className="grid grid-cols-1 items-start gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-12">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--error)]" aria-hidden />
                    <h3 className="headline-sm text-[var(--on-surface)]">{t.risk}</h3>
                  </div>
                  <p className="body-md text-[var(--on-surface-variant)]">{t.mitigation}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Compliance commitments */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface-container-low)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.1fr)] md:gap-16 md:items-end">
              <h2 className="headline-xl text-[var(--on-surface)]">
                Commitments,{" "}
                <span className="text-[var(--on-surface-variant)]">not badges.</span>
              </h2>
              <p className="body-md max-w-[520px] text-[var(--on-surface-variant)]">
                We don&rsquo;t display compliance logos for programs we haven&rsquo;t
                completed. Every item is either shipped or explicitly in progress.
                Nothing greyed-out for marketing.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {commitments.map((bucket) => (
              <Reveal key={bucket.label} delay={80}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={`inline-block h-2 w-2 ${
                        bucket.color === "emerald"
                          ? "bg-[#7CDC9E]"
                          : "bg-[var(--oriv-yellow)]"
                      }`}
                      aria-hidden
                    />
                    <p className="label-mono text-[10px] tracking-[0.2em] text-[var(--on-surface)]">
                      {bucket.label.toUpperCase()}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 border-l border-t border-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-3">
                    {bucket.items.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-r border-[var(--border-subtle)] px-8 py-8 md:px-10 md:py-10"
                      >
                        <p className="mb-2.5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                          {item.name}
                        </p>
                        <p className="text-[13.5px] leading-[1.55] text-[var(--on-surface-variant)]">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment options */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
              <h2 className="headline-xl text-[var(--on-surface)]">
                Deployment options.{" "}
                <span className="text-[var(--on-surface-variant)]">Your choice of runtime.</span>
              </h2>
              <p className="body-lg max-w-[600px] text-[var(--on-surface-variant)]">
                Oriv Cloud, your VPC, on-prem, or US-sovereign region. The canonical
                schema and query interface are identical across all deployment modes.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" step={0.08} delayChildren={0.05}>
            {deploymentOptions.map((opt) => (
              <Item key={opt.name}>
                <div className="flex items-start gap-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-5">
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#7CDC9E]/15"
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#7CDC9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="mb-1 text-[14px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                      {opt.name}
                    </p>
                    <p className="body-md text-[var(--on-surface-variant)]">{opt.note}</p>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>

          {/* Provenance guarantee */}
          <Reveal delay={200}>
            <div className="mt-12 rounded-lg border border-[var(--oriv-yellow)]/25 bg-[var(--oriv-yellow)]/5 px-6 py-6 md:px-8">
              <p className="label-mono mb-3 text-[10px] tracking-[0.2em] text-[#785a00]">
                DATA RESIDENCY GUARANTEE
              </p>
              <p className="body-md max-w-[700px] text-[var(--on-surface-variant)]">
                Your private component data, SCDs, MIL-PRF specs, supplier quals,
                approved vendor lists, never leaves your chosen deployment boundary.
                In VPC and on-prem modes, it never leaves your infrastructure. In
                Oriv Cloud, it never leaves your tenant. A written obligation in
                every design partner contract.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
