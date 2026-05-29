import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubPageHero from "@/components/sub-page-hero";
import TrustContent from "@/components/trust-content";
import PageCTA from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Trust & Compliance · Oriv",
  description:
    "Oriv's security and compliance posture: tenant isolation by default, ITAR-ready deployment, on-prem available. Per-field provenance for ISO 26262, FDA, and DMSMS workflows.",
};

export default function TrustPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubPageHero
          title={
            <>
              Engineering data carries audit obligations{" "}
              <span className="text-[var(--on-surface-variant)]">
                most enterprise software ignores.
              </span>
            </>
          }
          lede="Designed from the first contract for ITAR, automotive functional safety, FDA workflows, and DoD IL5. Written commitments. Not compliance badges."
        />
        <TrustContent />
        <PageCTA
          title="Want the full compliance brief?"
          body="Design partners get the architecture document: tenant isolation model, on-prem deployment guide, audit log schema, and key management overview. Email hello@oriv.io."
        />
      </main>
      <Footer />
    </>
  );
}
