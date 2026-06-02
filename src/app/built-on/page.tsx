import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubPageHero from "@/components/sub-page-hero";
import IntegrationGrid from "@/components/integration-grid";
import UseCases from "@/components/use-cases";
import PageCTA from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Built on Oriv · Integrations & Industry Patterns",
  description:
    "How aerospace, automotive, MedTech, robotics, and semiconductor teams use Oriv as the data layer beneath their internal tools. Integration grid: EDA, PLM, ERP, AI, custom.",
};

export default function BuiltOnPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubPageHero
          title={
            <>
              The data layer is ours.{" "}
              <span className="text-[var(--on-surface-variant)]">
                The application is yours.
              </span>
            </>
          }
          lede="Engineering teams build their own tools on top of Oriv. Or wire it straight into the stack they already run. Pick a domain to see the pattern we hear most."
        />
        <IntegrationGrid />
        <UseCases />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
