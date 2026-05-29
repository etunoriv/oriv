import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubPageHero from "@/components/sub-page-hero";
import DataLayer from "@/components/data-layer";
import PageCTA from "@/components/page-cta";

export const metadata: Metadata = {
  title: "How it works · Oriv",
  description:
    "Public datasheets and your private SCDs in one canonical schema. Six properties make a parametric data layer real: unit normalization, condition tuples, per-field provenance, and tenant isolation by default.",
};

export default function HowPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubPageHero
          title={
            <>
              Six properties{" "}
              <span className="text-[var(--on-surface-variant)]">
                make a parametric layer real.
              </span>
            </>
          }
          lede="Public corpus plus your long tail, in one schema. Unit-normalized, condition-aware, per-field cited. Queryable from any tool already in your stack."
        />
        <DataLayer />
        <PageCTA
          title="Want to shape the schema with us?"
          body="Design partners co-shape the canonical schema for their component categories. Three spots open."
        />
      </main>
      <Footer />
    </>
  );
}
