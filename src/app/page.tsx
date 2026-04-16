import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Proof from "@/components/proof";
import GetStarted from "@/components/get-started";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import StickyCta from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Proof />
        <GetStarted />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
