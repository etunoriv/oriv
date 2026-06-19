import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhatItCaptures from "@/components/what-it-captures";
import WhereItSits from "@/components/where-it-sits";
import UseCases from "@/components/use-cases";
import InstitutionalCase from "@/components/institutional-case";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

/**
 * Landing — category-positioned for the knowledge layer.
 *
 *   1. Hero               — what Oriv is
 *   2. WhatItCaptures     — substance of the knowledge layer (3 record examples)
 *   3. WhereItSits        — secondary-not-primary architecture (Oriv beneath your tools)
 *   4. UseCases           — capability axis (decision recall, AI grounding, etc.)
 *   5. InstitutionalCase  — knowledge as IP, for leadership / acquirers
 *   6. FinalCTA           — design partner cohort, one button
 *
 * Problem, Wedge, and Pivot moved to /product (data-store proof depth).
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatItCaptures />
        <WhereItSits />
        <UseCases />
        <InstitutionalCase />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
