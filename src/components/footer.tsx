"use client";

import { Logo } from "@/components/ui/logo";

/**
 * Footer — Linear-style multi-column layout, Oriv-relevant items only.
 * No dead links per rulebook R5; placeholder items only ship when their
 * destination page exists.
 */

const groups = [
  {
    heading: "Product",
    items: [
      { label: "Platform", href: "/product" },
      { label: "Industries", href: "/industries" },
      { label: "Customers", href: "/customers" },
      { label: "Trust & compliance", href: "/trust" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "mailto:hello@oriv.io" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

function handleManageCookies() {
  if (typeof window !== "undefined") {
    alert("Cookie preferences will open here once consent system ships.");
  }
}

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border-subtle)] bg-[var(--surface)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              aria-label="Oriv home"
              className="inline-flex items-center text-[var(--on-surface)]"
            >
              <Logo height={24} />
            </a>
            <p className="mt-5 max-w-[240px] body-md text-[var(--on-surface-variant)]">
              The parametric data layer for regulated hardware engineering.
            </p>
          </div>

          {/* Link columns */}
          {groups.map((g) => (
            <div key={g.heading}>
              <p className="mb-4 text-[12px] font-medium text-[var(--on-surface)]">
                {g.heading}
              </p>
              <ul className="space-y-1">
                {g.items.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="-mx-1 inline-flex min-h-[44px] items-center rounded px-1 text-[12.5px] text-[var(--on-surface-variant)] transition-colors duration-200 hover:text-[var(--on-surface)] active:bg-white/[0.04] md:min-h-0 md:py-1.5"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {g.heading === "Legal" && (
                  <li>
                    <button
                      type="button"
                      onClick={handleManageCookies}
                      className="-mx-1 inline-flex min-h-[44px] items-center rounded px-1 text-[12.5px] text-[var(--on-surface-variant)] transition-colors duration-200 hover:text-[var(--on-surface)] active:bg-white/[0.04] md:min-h-0 md:py-1.5"
                    >
                      Manage cookies
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}
