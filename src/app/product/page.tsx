import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SubPageHero from "@/components/sub-page-hero";
import CanonicalDemo from "@/components/canonical-demo";
import Wedge from "@/components/wedge";
import Pivot from "@/components/pivot";
import ProductPrimitives from "@/components/product-primitives";
import PageCTA from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Platform · Oriv",
  description:
    "How the knowledge layer holds engineering data. Canonical schemas across vendors, public corpus plus the private tail, four parametric guarantees by contract. Queryable from EDA, PLM, ERP, AI agents, and any internal app.",
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
          lede="Four vendors write the same supply-voltage spec four different ways. Oriv resolves them to one canonical field — unit-validated, condition-preserved, source-cited. One interface for every tool in the stack."
        />
        <CanonicalDemo />
        <Wedge />
        <Pivot />
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
