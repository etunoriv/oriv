"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "FEATURES", href: "#features" },
  { label: "CONTACT", href: "#get-started" },
  { label: "CAREERS", href: "#" },
  { label: "ABOUT", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-line shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center transition-opacity duration-300 hover:opacity-70">
          <Image src="/oriv_logo.svg" alt="Oriv Studio" width={80} height={28} priority />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="type-micro px-4 py-2 text-muted transition-colors duration-300 hover:text-foreground rounded-md hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="ml-2 bg-accent px-5 py-2.5 type-micro text-foreground font-bold tracking-[0.1em] rounded-md btn-press transition-all duration-300 hover:bg-accent/80 hover:shadow-[0_4px_16px_rgba(255,197,46,0.3)]"
          >
            REQUEST A PILOT
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="type-micro text-muted md:hidden focus-visible:outline-2 focus-visible:outline-accent transition-colors duration-200 hover:text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {open && (
        <>
          <div
            className="fixed inset-0 top-[60px] bg-background/60 backdrop-blur-sm md:hidden z-40"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 border-t border-line bg-background md:hidden">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="type-micro block border-b border-line px-6 py-4 text-muted hover:text-foreground hover:bg-surface transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="block bg-accent px-6 py-4 type-micro text-foreground font-bold"
            >
              REQUEST A PILOT
            </a>
          </div>
        </>
      )}
    </header>
  );
}
