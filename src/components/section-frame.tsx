"use client";

import { Reveal } from "@/lib/motion";

/**
 * Linear-style section primitive — one thing per section.
 *
 *   - Top: headline-left (40%) / description-right (60%) split
 *   - Children: full-bleed visual
 *   - Bottom-right: figure marker (e.g. "1.0 / Problem")
 *   - Big py-32+ whitespace
 *
 * Used everywhere except the hero and the conversion section.
 */
export default function SectionFrame({
  id,
  title,
  description,
  children,
  bg = "default",
}: {
  id?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  bg?: "default" | "alt";
}) {
  const bgClass = bg === "alt" ? "bg-[var(--surface-container-low)]" : "bg-[var(--surface)]";
  return (
    <section id={id} className={`relative py-28 md:py-40 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)] md:gap-16 md:items-end">
            <h2 className="headline-xl text-[var(--on-surface)]">{title}</h2>
            {description && (
              <p className="body-lg max-w-[640px] text-[var(--on-surface-variant)]">
                {description}
              </p>
            )}
          </div>
        </Reveal>

        {children && <Reveal delay={120}>{children}</Reveal>}
      </div>
    </section>
  );
}
