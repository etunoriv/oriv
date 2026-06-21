import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About · Oriv",
  description:
    "Oriv is the knowledge layer for hardware engineering teams. Built by Karthik Shenoy, Nitin Bhasin, and Konstantin Klein. San Francisco.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
