"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "FEATURES", href: "#features" },
  { label: "CONTACT", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-line bg-background/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image src="/oriv_logo.svg" alt="Oriv Studio" width={80} height={28} priority />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-0 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="type-micro border-l border-line px-5 py-2 text-muted transition-colors hover:text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]"
            >
              [ {link.label} ]
            </a>
          ))}
          <a
            href="#contact"
            className="ml-0 border-l border-line bg-accent px-5 py-2 type-micro text-background font-bold tracking-[0.1em] transition-all hover:bg-accent/80 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-[-2px]"
          >
            REQUEST ACCESS
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="type-micro text-muted md:hidden focus-visible:outline-2 focus-visible:outline-accent"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-[49px] bg-background/80 backdrop-blur-sm md:hidden z-40"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 border-t border-line bg-background md:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="type-micro block border-b border-line px-6 py-3 text-muted hover:text-foreground hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-accent px-6 py-3 type-micro text-background font-bold"
            >
              REQUEST ACCESS
            </a>
          </div>
        </>
      )}
    </header>
  );
}
