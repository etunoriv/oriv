import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms · Oriv",
  description:
    "Terms of use for the Oriv marketing site. Product-side terms are covered separately in customer contracts.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:px-10 md:pt-40">
        <p className="eyebrow mb-5">Terms · v1.0 · 2026-05</p>
        <h1 className="headline-xl mb-6 text-[var(--on-surface)]">
          Terms of use.
        </h1>
        <p className="mb-10 body-lg text-[var(--on-surface-variant)]">
          These terms govern the Oriv marketing site (oriv.io). Product-side terms
          are covered separately in customer contracts negotiated with design
          partners.
        </p>

        <div className="space-y-10 text-[var(--on-surface)]">
          <section>
            <h2 className="headline-sm mb-3">Scope</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              This page covers your use of the public marketing site only.
              Anything you send via email or the design partner form is governed
              by ordinary contractual confidentiality and will be discussed
              under NDA where required.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">Intellectual property</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              Site content (copy, design, code) is © Oriv, Inc. unless explicitly
              marked otherwise. The Oriv name and wordmark are trademarks of Oriv,
              Inc. Documentation excerpts from third-party vendor datasheets shown
              in examples remain the property of those vendors and are used
              illustratively.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">No warranty on marketing claims</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              Capability statements on this site reflect projections from discovery
              conversations during the design-partner stage. They are not contractual
              representations. The Trust page describes the architecture and
              compliance posture; binding commitments are made in customer
              contracts only.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">Acceptable use</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              Don&rsquo;t attempt to break, scrape, or abuse the site. Don&rsquo;t
              submit forms with the intent to misrepresent or send malicious
              content. We reserve the right to refuse correspondence at our
              discretion.
            </p>
          </section>

          <section>
            <h2 className="headline-sm mb-3">Changes</h2>
            <p className="body-md text-[var(--on-surface-variant)]">
              We&rsquo;ll bump the version number at the top when the terms change.
              Material changes will be summarized in a change-log when shipped.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
