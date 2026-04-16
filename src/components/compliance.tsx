"use client";

import ScrollReveal from "@/components/scroll-reveal";

const items = [
  {
    title: "YOUR DATA STAYS YOURS",
    description:
      "Project data is isolated per account. We do not use your proprietary designs, component selections, or simulation results to train any shared model. Period.",
    status: "ENFORCED",
  },
  {
    title: "SOC II COMPLIANT",
    description:
      "Independent audit standards for data security, availability, and confidentiality. Not a checkbox exercise. The baseline for earning enterprise trust.",
    status: "VERIFIED",
  },
  {
    title: "GDPR ALIGNED",
    description:
      "Data protection and privacy by design. Full alignment with European GDPR regulations. Your European teams can use Oriv without a legal review that takes longer than the pilot.",
    status: "COMPLIANT",
  },
  {
    title: "ROLE-BASED ACCESS",
    description:
      "Fine-grained permissions so engineers see what they need and nothing else. When IT and security ask about access control during procurement, the answer is already documented.",
    status: "ACTIVE",
  },
];

export default function Compliance() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="type-micro text-accent font-bold block mb-6">/// TRUST & SECURITY</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              SECURITY THAT <span className="text-accent">PASSES</span> PROCUREMENT
            </h2>
            <p className="mt-6 text-muted max-w-xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
              We built Oriv for teams where IT, legal, and compliance have
              a seat at the table. Because in automotive, defense, and
              industrial automation, they always do.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white border border-line rounded-lg p-6 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <samp className="type-micro text-accent font-bold">
                      {item.status}
                    </samp>
                  </div>
                  <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.04em] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
