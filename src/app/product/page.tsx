import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubPageHero from "@/components/sub-page-hero";
import CanonicalDemo from "@/components/canonical-demo";
import DataLayer from "@/components/data-layer";
import ProductPrimitives from "@/components/product-primitives";
import PageCTA from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Platform · Oriv",
  description:
    "Public datasheets and private SCDs in one canonical schema. Unit-normalized, condition-aware, per-field cited. Queryable from EDA, PLM, ERP, AI agents, and any internal app.",
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubPageHero
          title={
            <>
              One canonical record.{" "}
              <span className="text-[var(--on-surface-variant)]">
                Every format resolved.
              </span>
            </>
          }
          lede="Four vendors write the same supply-voltage spec four different ways. Oriv resolves them to one canonical field. Unit-validated. Condition-preserved. Source-cited. Your stack queries it through one interface."
        />
        <CanonicalDemo />
        <DataLayer />
        <ProductPrimitives />
        <PageCTA
          title="Want to shape the schema with us?"
          body="Design partners co-shape the canonical schema for their component categories. Three spots open for Q3 2026."
        />
      </main>
      <Footer />
    </>
  );
}
