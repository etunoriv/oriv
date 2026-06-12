import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomersContent from "@/components/customers-content";

export const metadata: Metadata = {
  title: "Customers · Oriv",
  description:
    "Oriv is in the design-partner phase. Three teams shaping the canonical schema for the hardware industries that come after. Names land here as each partner is ready.",
};

export default function CustomersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CustomersContent />
      </main>
      <Footer />
    </>
  );
}
