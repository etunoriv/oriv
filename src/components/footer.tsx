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
    <footer>
      <div className="py-16 px-6 border-t border-line">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12">
          <div>
            <span className="type-micro text-accent font-bold block mb-4">/// NEWSLETTER</span>
            <h2
              className="type-macro text-foreground"
              style={{ fontSize: "clamp(1.4rem, 3vw, 3rem)" }}
            >
              WE SHARE WHAT WE <span className="text-accent">LEARN</span>
            </h2>
            <p className="mt-3 text-muted text-base leading-relaxed max-w-md">
              Product updates and engineering insights from the embedded world.
              No fluff. No weekly digest nobody reads.
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="you@company.com"
                className="flex-1 border border-line bg-white px-4 py-3 text-foreground text-base rounded-md focus:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] placeholder:text-dim"
              />
              <button
                type="submit"
                className="bg-accent px-6 py-3 text-foreground font-bold text-sm rounded-md btn-press shrink-0 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,197,46,0.3)]"
              >
                SUBSCRIBE
              </button>
            </form>
            {status === "idle" && (
              <span className="type-micro text-dim mt-2">Engineering signal. No noise.</span>
            )}
            {status === "success" && (
              <span className="type-micro text-accent mt-2">You are in. First update drops soon.</span>
            )}
            {status === "error" && (
              <span className="type-micro text-red-500 mt-2">That does not look like a valid email.</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-line px-6 py-5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="type-micro text-dim">
            &copy; {new Date().getFullYear()} ORIV, INC.
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors duration-300">ABOUT</a>
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors duration-300">CAREERS</a>
            <a href="#" className="type-micro text-muted hover:text-foreground transition-colors duration-300">PRIVACY</a>
            <a href="https://linkedin.com/company/oriv-io" target="_blank" rel="noopener noreferrer" className="type-micro text-muted hover:text-foreground transition-colors duration-300">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
