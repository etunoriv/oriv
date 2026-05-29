"use client";

import { useState } from "react";
import { Reveal } from "@/lib/motion";

/**
 * Design Partner — document-style minimalism.
 * No card chrome. Two columns, typography + whitespace + one accent.
 *   - Left: cohort kicker, headline, three promises, founders inline
 *   - Right: four-field form, one CTA
 */

const promises = [
  "Canonical schema co-shaped for your component categories.",
  "One PLM, ERP, or warehouse integration shipped in production.",
  "Native plug-in for your tools, plus direct co-founder access in Slack or Teams.",
  "Locked-in pricing for three years post-GA.",
];

const founders = ["Konstantin Klein", "Karthik Shenoy", "Nitin Bhasin"];

const componentDomains = [
  "Aerospace & Defense",
  "Automotive",
  "MedTech",
  "Semiconductor / EDA",
  "Robotics",
  "Industrial automation",
  "Other",
];

const stages = [
  "Exploring, scoping the problem",
  "Evaluating tools",
  "Ready to pilot in the next 60 days",
];

type FormState = {
  company: string;
  role: string;
  domain: string;
  stage: string;
};

const initial: FormState = { company: "", role: "", domain: "", stage: "" };

function buildMailto(s: FormState): string {
  const subject = `Design partner inquiry: ${s.company || "[company]"} (${s.domain || "domain TBD"})`;
  const body = [
    `Company: ${s.company}`,
    `Role: ${s.role}`,
    `Component domain: ${s.domain}`,
    `Stage: ${s.stage}`,
    "",
    "What we're trying to solve:",
    "",
  ].join("\n");
  return `mailto:hello@oriv.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function DesignPartner() {
  const [form, setForm] = useState<FormState>(initial);
  const isValid = form.company && form.role && form.domain && form.stage;

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border-subtle)] bg-[var(--surface)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] lg:gap-20">
          {/* LEFT — pitch */}
          <Reveal>
            <div>
              <h2 className="font-display mb-6 text-[clamp(2.25rem,4.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--on-surface)]">
                For the engineering teams that want{" "}
                <span className="text-[var(--on-surface-variant)]">
                  a real say in the data layer.
                </span>
              </h2>

              <p className="mb-10 max-w-[480px] body-lg text-[var(--on-surface-variant)]">
                We&rsquo;re picking three teams for the Q3 cohort. One per category
                vertical. Co-shaped canonical schema for your domain. Direct
                co-founder line. Locked-in pricing for three years post-GA.
              </p>

              <ul className="mb-14 space-y-4">
                {promises.map((p) => (
                  <li
                    key={p}
                    className="flex items-baseline gap-3 body-md text-[var(--on-surface)]"
                  >
                    <span
                      aria-hidden
                      className="select-none text-[var(--outline)]"
                    >
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[var(--border-subtle)] pt-8">
                <p className="label-mono mb-3 text-[10.5px] tracking-[0.18em] text-[var(--on-surface-variant)]">
                  CO-FOUNDERS
                </p>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  {founders.map((name) => (
                    <span
                      key={name}
                      className="text-[13.5px] text-[var(--on-surface)]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[13px] text-[var(--on-surface-variant)]">
                  One of us replies, usually within a day.
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={120}>
            <div>
              <h3 className="font-display mb-10 text-[22px] font-semibold tracking-[-0.02em] text-[var(--on-surface)]">
                Tell us four things.
              </h3>

              <form
                className="space-y-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = buildMailto(form);
                }}
              >
                <Field label="Company" htmlFor="pq-company">
                  <input
                    id="pq-company"
                    type="text"
                    required
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Acme Aerospace"
                    className="input-line"
                  />
                </Field>

                <Field label="Role" htmlFor="pq-role">
                  <input
                    id="pq-role"
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="Director, Component Engineering"
                    className="input-line"
                  />
                </Field>

                <Field label="Component domain" htmlFor="pq-domain">
                  <select
                    id="pq-domain"
                    required
                    value={form.domain}
                    onChange={(e) =>
                      setForm({ ...form, domain: e.target.value })
                    }
                    className="input-line"
                  >
                    <option value="" disabled>
                      Pick the closest…
                    </option>
                    {componentDomains.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Where you are" htmlFor="pq-stage">
                  <select
                    id="pq-stage"
                    required
                    value={form.stage}
                    onChange={(e) =>
                      setForm({ ...form, stage: e.target.value })
                    }
                    className="input-line"
                  >
                    <option value="" disabled>
                      Pick a stage…
                    </option>
                    {stages.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="btn-primary inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span>Email a co-founder</span>
                    <span aria-hidden>→</span>
                  </button>
                  <p className="mt-4 font-mono text-[11px] text-[var(--outline)]">
                    Opens your mail client with the four fields prefilled.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="label-mono block text-[10.5px] tracking-[0.16em] text-[var(--on-surface-variant)]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
