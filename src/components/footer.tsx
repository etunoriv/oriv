"use client";

import { useState } from "react";

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
      {/* Newsletter */}
      <div className="border-b border-line px-6 py-16">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12">
          <div>
            <samp className="type-micro text-accent font-bold block mb-4">[ STAY IN THE LOOP ]</samp>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.5rem, 4vw, 4.5rem)" }}
            >
              WE SHARE WHAT
              <br />
              WE <span className="text-accent">LEARN</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="font-mono text-muted mb-6" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
              Product updates, engineering insights from the embedded world,
              and the occasional opinion on how hardware teams actually work.
              No fluff. No weekly digest nobody reads.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0" noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="YOU@COMPANY.COM"
                className="flex-1 border border-line bg-surface px-4 py-3 type-micro text-foreground placeholder-dim focus:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] transition-colors"
              />
              <button
                type="submit"
                className="bg-accent px-6 py-3 type-micro text-background font-bold tracking-[0.1em] transition-all hover:bg-accent/80 shrink-0 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
              >
                SUBSCRIBE
              </button>
            </form>
            {status === "idle" && (
              <samp className="type-micro text-dim mt-3">/// ENGINEERING SIGNAL. NO NOISE.</samp>
            )}
            {status === "success" && (
              <samp className="type-micro text-accent mt-3 glow-accent">/// YOU ARE IN. FIRST UPDATE DROPS SOON.</samp>
            )}
            {status === "error" && (
              <samp className="type-micro text-red-400 mt-3">/// THAT DOES NOT LOOK LIKE A VALID EMAIL.</samp>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-4">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <samp className="type-micro text-dim">
            &copy; {new Date().getFullYear()} ORIV, INC. ALL RIGHTS RESERVED.
          </samp>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent">
              [ ABOUT ]
            </a>
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent">
              [ CAREERS ]
            </a>
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent">
              [ PRIVACY ]
            </a>
            <a
              href="https://linkedin.com/company/oriv-io"
              target="_blank"
              rel="noopener noreferrer"
              className="type-micro text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            >
              [ LINKEDIN ]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
