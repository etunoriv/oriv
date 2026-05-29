import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Wedge from "@/components/wedge";
import Pivot from "@/components/pivot";
import UseCases from "@/components/use-cases";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

/**
 * Landing — content sourced from live oriv.io, rewritten in brand voice.
 *
 *   1. Hero        — the component data infrastructure pitch
 *   2. Problem     — same gap in every tool, AI agent vs Oriv side-by-side
 *   3. Wedge       — public corpus plus your long tail, in your tenant
 *   4. Pivot       — six properties of the data layer, accordion widget
 *   5. UseCases    — Built on Oriv: six patterns with metric callouts
 *   6. FinalCTA    — Q3 cohort ask, one button to email a co-founder
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Wedge />
        <Pivot />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
