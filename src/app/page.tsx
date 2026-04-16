import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Comparison from "@/components/comparison";
import Compliance from "@/components/compliance";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
        <Compliance />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
