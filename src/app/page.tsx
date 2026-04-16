import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Credibility from "@/components/credibility";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import UseCases from "@/components/usecases";
import Comparison from "@/components/comparison";
import Roi from "@/components/roi";
import Compliance from "@/components/compliance";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Credibility />
        <Problem />
        <Solution />
        <UseCases />
        <Comparison />
        <Roi />
        <Compliance />
        <Pricing />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
