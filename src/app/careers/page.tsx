import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CareersContent from "@/components/careers-content";

export const metadata: Metadata = {
  title: "Careers · Oriv",
  description:
    "We're hiring engineers who care about making component data actually reliable. Small team, hard problem, regulated-industry customers.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersContent />
      </main>
      <Footer />
    </>
  );
}
