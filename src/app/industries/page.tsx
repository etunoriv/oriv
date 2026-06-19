import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubPageHero from "@/components/sub-page-hero";
import IntegrationGrid from "@/components/integration-grid";
import UseCases from "@/components/use-cases";
import PageCTA from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Industries · Oriv",
  description:
    "Where the knowledge layer applies: aerospace, automotive, MedTech, robotics, semiconductor, energy, and manufacturing. Sits beneath the EDA, PLM, ERP, AI, and custom tools engineering teams already run.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubPageHero
          title={
            <>
              The knowledge layer is ours.{" "}
              <span className="text-[var(--on-surface-variant)]">
                The applications are yours.
              </span>
            </>
          }
          lede="Teams build their own tools on top of Oriv. Or wire it straight into the stack they already run. Pick a domain to see the pattern we hear most."
        />
        <IntegrationGrid />
        <UseCases />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
