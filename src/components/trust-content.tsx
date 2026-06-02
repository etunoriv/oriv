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

type CommitmentStatus = "shipped" | "in-progress";

type Commitment = {
  name: string;
  note: string;
  status: CommitmentStatus;
  badge: string; // "SHIPPED" or target quarter
};

const commitments: Commitment[] = [
  {
    name: "Tenant isolation",
    note: "Your private SCDs, MIL-PRF specs, and supplier quals are stored, processed, and queried in your tenant only. They never inform another tenant's results.",
    status: "shipped",
    badge: "SHIPPED",
  },
  {
    name: "Per-field provenance",
    note: "Every canonical record cites the source page, table, and extraction run. Queryable audit trail for ISO 26262 ASIL evidence, FDA 21 CFR Part 11, and DMSMS workflows.",
    status: "shipped",
    badge: "SHIPPED",
  },
  {
    name: "ITAR-ready deployment",
    note: "AWS GovCloud and Azure Government available. US-persons-only processing path. No data transits non-compliant regions.",
    status: "shipped",
    badge: "SHIPPED",
  },
  {
    name: "On-prem & private cloud",
    note: "Full deployment inside your VPC, dedicated tenancy, or air-gapped environment. We ship the stack; you own the runtime.",
    status: "shipped",
    badge: "SHIPPED",
  },
  {
    name: "ISO 26262 traceability",
    note: "ASIL evidence chains, per-field provenance, and change history available for automotive functional safety workflows.",
    status: "shipped",
    badge: "SHIPPED",
  },
  {
    name: "FDA 21 CFR Part 11",
    note: "Electronic records with audit trail. Medical device design history file (DHF) workflows supported.",
    status: "shipped",
    badge: "SHIPPED",
  },
  {
    name: "FedRAMP Moderate authorization",
    note: "Authorization process underway. IL5 scoped for DoD prime contractors.",
    status: "in-progress",
    badge: "Q4 2026",
  },
  {
    name: "SOC 2 Type II",
    note: "Audit in progress. Report available to design partners under NDA.",
    status: "in-progress",
    badge: "Q2 2026",
  },
  {
    name: "IEC 62443 industrial cyber",
    note: "Industrial control system security controls being mapped to Oriv's deployment model.",
    status: "in-progress",
    badge: "Q1 2027",
  },
];

const shippedCount = commitments.filter((c) => c.status === "shipped").length;
const inProgressIndex = commitments.findIndex((c) => c.status === "in-progress");

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

          <Reveal delay={80}>
            <ul className="border-t border-[var(--border-subtle)]">
              {commitments.map((c, i) => (
                <li key={c.name} className="relative">
                  {/* Group separator between SHIPPED and IN-PROGRESS — a
                      mono caption, not another bucket card */}
                  {i === inProgressIndex && (
                    <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] py-5">
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--oriv-yellow)]"
                      />
                      <p className="label-mono text-[10px] tracking-[0.22em] text-[var(--outline)]">
                        IN PROGRESS · {commitments.length - shippedCount} OF {commitments.length}
                      </p>
                    </div>
                  )}
                  <div className="group grid grid-cols-[2.5rem_1fr_5rem] items-baseline gap-3 border-b border-[var(--border-subtle)] py-6 transition-colors duration-200 hover:bg-[var(--surface-container-low)] md:grid-cols-[3.5rem_minmax(0,_1.05fr)_minmax(0,_1.6fr)_6rem] md:gap-8 md:py-7">
                    <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--outline)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-[17px]">
                      {c.name}
                    </h3>
                    <p className="hidden text-[13.5px] leading-[1.55] text-[var(--on-surface-variant)] md:block">
                      {c.note}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <span
                        aria-hidden
                        className={`inline-block h-1.5 w-1.5 rounded-full ${
                          c.status === "shipped"
                            ? "bg-[#7CDC9E]"
                            : "bg-[var(--oriv-yellow)]"
                        }`}
                      />
                      <span
                        className={`label-mono text-[9.5px] tracking-[0.18em] ${
                          c.status === "shipped"
                            ? "text-[#7CDC9E]"
                            : "text-[var(--oriv-yellow)]"
                        }`}
                      >
                        {c.badge}
                      </span>
                    </div>
                  </div>
                  {/* Mobile note row — note breaks below name on narrow widths */}
                  <p className="-mt-3 ml-[2.5rem] mb-6 pr-1 text-[13px] leading-[1.55] text-[var(--on-surface-variant)] md:hidden">
                    {c.note}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-5 label-mono text-[10px] tracking-[0.22em] text-[var(--outline)]">
              SHIPPED · {shippedCount} OF {commitments.length}
              <span className="mx-3 text-[var(--border-subtle)]">·</span>
              IN PROGRESS · {commitments.length - shippedCount} OF {commitments.length}
            </p>
          </Reveal>
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

          <Stagger className="border-t border-[var(--border-subtle)]" step={0.08} delayChildren={0.05}>
            {deploymentOptions.map((opt) => (
              <Item key={opt.name}>
                <div className="grid grid-cols-1 items-baseline gap-4 border-b border-[var(--border-subtle)] py-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-12">
                  <h3 className="headline-sm text-[var(--on-surface)]">{opt.name}</h3>
                  <p className="body-md text-[var(--on-surface-variant)]">{opt.note}</p>
                </div>
              </Item>
            ))}
          </Stagger>

          {/* Residency guarantee — plain editorial paragraph, no banner */}
          <Reveal delay={200}>
            <p className="mt-10 max-w-[720px] body-md text-[var(--on-surface-variant)]">
              Your private component data &mdash; SCDs, MIL-PRF specs, supplier
              quals, approved vendor lists &mdash; never leaves your chosen
              deployment boundary. In VPC and on-prem modes, it never leaves your
              infrastructure. In Oriv Cloud, it never leaves your tenant. Written
              into every design partner contract.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
