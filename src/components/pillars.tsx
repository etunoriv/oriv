import { Reveal } from "@/lib/motion";
import PlatformCarousel from "./platform-carousel";

export default function Pillars() {
  return (
    <section id="platform" className="relative px-6 py-32 sm:py-40 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55 ring-1 ring-white/10">
              The platform
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              04 capabilities
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] text-white">
            Design, simulate, integrate, test.
            <br />
            <span className="font-editorial italic text-white/65">In one workspace.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Selection flows into simulation. Simulation informs prototyping. Prototyping streams to live instruments. Each capability is first-class.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-16">
            <PlatformCarousel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
