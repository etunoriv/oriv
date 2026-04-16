"use client";

import { motion } from "framer-motion";

const items = [
  {
    id: "01",
    title: "YOUR DATA STAYS YOURS",
    description:
      "Project data is isolated per account. We do not use your proprietary designs, component selections, or simulation results to train any shared model. Period.",
    status: "ENFORCED",
  },
  {
    id: "02",
    title: "SOC II COMPLIANT",
    description:
      "Independent audit standards for data security, availability, and confidentiality. Not a checkbox exercise. The baseline for earning enterprise trust.",
    status: "VERIFIED",
  },
  {
    id: "03",
    title: "GDPR ALIGNED",
    description:
      "Data protection and privacy by design. Full alignment with European GDPR regulations. Your European teams can use Oriv without a legal review that takes longer than the pilot.",
    status: "COMPLIANT",
  },
  {
    id: "04",
    title: "ROLE-BASED ACCESS",
    description:
      "Fine-grained permissions so engineers see what they need and nothing else. When IT and security ask about access control during procurement, the answer is already documented.",
    status: "ACTIVE",
  },
];

export default function Compliance() {
  return (
    <section className="border-b border-line">
      {/* Section header */}
      <div className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="type-micro text-accent font-bold">[ TRUST & SECURITY ]</span>
          <span className="type-micro">ENTERPRISE-GRADE BY DEFAULT</span>
        </div>
      </div>

      {/* Title */}
      <div className="border-b border-line px-6 py-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="type-macro text-foreground"
            style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
          >
            SECURITY
            <br />
            THAT <span className="text-accent">PASSES</span>
            <br />
            PROCUREMENT
          </motion.h2>
          <p className="mt-6 font-mono text-muted max-w-xl" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
            We built Oriv for teams where IT, legal, and compliance have
            a seat at the table. Because in automotive, defense, and
            industrial automation, they always do.
          </p>
        </div>
      </div>

      {/* Security grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid-dividers grid sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item) => (
          <div key={item.id} className="p-6 flex flex-col justify-between min-h-[240px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <samp className="type-micro text-dim font-bold">{item.id}</samp>
                <samp className="type-micro text-accent font-bold glow-accent">
                  {item.status}
                </samp>
              </div>
              <hr className="border-line mb-4" />
              <h3 className="type-micro text-foreground font-bold text-sm tracking-[0.06em] mb-3">
                {item.title}
              </h3>
              <p className="font-mono text-muted leading-relaxed text-xs tracking-wide">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
