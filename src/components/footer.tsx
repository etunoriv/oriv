"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <footer id="contact">
      <div className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <span className="type-micro text-accent font-bold block mb-6">/// STAY IN THE LOOP</span>
              <h2
                className="type-macro text-foreground"
                style={{ fontSize: "clamp(1.5rem, 4vw, 4rem)" }}
              >
                WE SHARE WHAT WE <span className="text-accent">LEARN</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col justify-end">
              <p className="text-muted mb-6 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                Product updates, engineering insights from the embedded world,
                and the occasional opinion on how hardware teams actually work.
                No fluff. No weekly digest nobody reads.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="YOU@COMPANY.COM"
                  className="flex-1 border border-line bg-white px-4 py-3 type-micro text-foreground placeholder-dim rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]"
                />
                <button
                  type="submit"
                  className="bg-accent px-6 py-3 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press shrink-0 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,197,46,0.3)]"
                >
                  SUBSCRIBE
                </button>
              </form>
              {status === "idle" && (
                <samp className="type-micro text-dim mt-3">/// ENGINEERING SIGNAL. NO NOISE.</samp>
              )}
              {status === "success" && (
                <samp className="type-micro text-accent mt-3">/// YOU ARE IN. FIRST UPDATE DROPS SOON.</samp>
              )}
              {status === "error" && (
                <samp className="type-micro text-red-500 mt-3">/// THAT DOES NOT LOOK LIKE A VALID EMAIL.</samp>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <samp className="type-micro text-dim">
            &copy; {new Date().getFullYear()} ORIV, INC.
          </samp>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors duration-300">
              ABOUT
            </a>
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors duration-300">
              CAREERS
            </a>
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors duration-300">
              PRIVACY
            </a>
            <a
              href="https://linkedin.com/company/oriv-io"
              target="_blank"
              rel="noopener noreferrer"
              className="type-micro text-muted hover:text-foreground transition-colors duration-300"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
