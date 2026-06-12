"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { useBooker } from "@/components/booker";

const links = [
  { label: "Product", href: "/product" },
  { label: "Industries", href: "/industries" },
  { label: "Customers", href: "/customers" },
  { label: "Trust", href: "/trust" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setOpen: setBookerOpen } = useBooker();
  // CTA visibility — hidden while #hero is in view, shown once user scrolls past it.
  // On pages without #hero (sub-pages, /about, etc.) the CTA stays visible by default.
  const [ctaVisible, setCtaVisible] = useState(true);
  const pathname = usePathname();

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observe a sentinel placed at the bottom of the hero. CTA stays hidden
  // while the sentinel is below the viewport (user still inside hero), and
  // blooms in once it crosses up past the top (user reached the end). Mirrors
  // back to hidden if the user scrolls back into the hero.
  useEffect(() => {
    const sentinel = document.getElementById("hero-end-sentinel");
    if (!sentinel) {
      setCtaVisible(true); // sub-pages: always show
      return;
    }
    setCtaVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // boundingClientRect.top < 0 → sentinel is above viewport → user
        // scrolled past the end of hero → reveal CTA.
        setCtaVisible(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] border-b pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          scrolled
            ? "border-[var(--border-subtle)] bg-[var(--surface)]/85 backdrop-blur-md md:backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
      >
        {/* 64px nav height, 28px logo — sized against Oriv's own typography rhythm.
            Nav links are absolute-centered so they stay anchored regardless of
            how the right-group (theme + CTA) widens or narrows. */}
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            aria-label="Oriv home"
            onClick={handleLogoClick}
            className="group flex items-center text-[var(--on-surface)] transition-opacity duration-200 hover:opacity-90"
          >
            <Logo height={28} />
          </Link>

          <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="pointer-events-auto text-[13px] font-medium text-[var(--on-surface-variant)] transition-colors duration-200 hover:text-[var(--on-surface)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA reveal — Phase B: maxWidth + opacity snap instantly so the
              button drops into its final slot, then clip-path animates from
              a center seam outward, unfurling left and right simultaneously.
              On hide the clip-path closes first, then the slot collapses. */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="https://app.oriv.io"
              className="text-[13px] font-medium text-[var(--on-surface-variant)] transition-colors duration-200 hover:text-[var(--on-surface)]"
            >
              Log in
            </Link>
            <motion.div
              initial={false}
              animate={ctaVisible ? "visible" : "hidden"}
              variants={{
                visible: {
                  maxWidth: 220,
                  opacity: 1,
                  paddingLeft: 12,
                  clipPath: "inset(0% 0% 0% 0%)",
                },
                hidden: {
                  maxWidth: 0,
                  opacity: 0,
                  paddingLeft: 0,
                  clipPath: "inset(0% 50% 0% 50%)",
                },
              }}
              transition={
                ctaVisible
                  ? {
                      maxWidth: { duration: 0 },
                      opacity: { duration: 0 },
                      paddingLeft: { duration: 0 },
                      clipPath: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
                    }
                  : {
                      clipPath: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
                      maxWidth: { duration: 0, delay: 0.35 },
                      opacity: { duration: 0, delay: 0.35 },
                      paddingLeft: { duration: 0, delay: 0.35 },
                    }
              }
              className="overflow-hidden"
              aria-hidden={!ctaVisible}
            >
              <button
                type="button"
                tabIndex={ctaVisible ? 0 : -1}
                onClick={() => setBookerOpen(true)}
                className="mag group inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-[var(--oriv-yellow)] px-3 py-1.5 text-[13px] font-medium text-[var(--on-oriv-yellow)] transition-colors duration-200 hover:bg-[var(--oriv-yellow-deep)]"
              >
                <span>Talk to a co-founder</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-11 w-11 items-center justify-center rounded-md ring-1 ring-[var(--border-subtle)] active:bg-white/[0.04] md:hidden"
          >
            <span
              className="absolute h-[1.25px] w-4 bg-[var(--on-surface)] transition-transform duration-500"
              style={{
                transform: open ? "rotate(45deg) translateY(0)" : "translateY(-3.5px)",
                transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
              }}
            />
            <span
              className="absolute h-[1.25px] w-4 bg-[var(--on-surface)] transition-transform duration-500"
              style={{
                transform: open ? "rotate(-45deg) translateY(0)" : "translateY(3.5px)",
                transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[65] bg-[var(--surface)]/95 backdrop-blur-xl transition-opacity duration-700 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(6rem,calc(env(safe-area-inset-top)+5rem))]">
          <ul className="flex flex-col gap-2">
            {links.map((l, i) => (
              <li
                key={l.href}
                className="overflow-hidden"
                style={{
                  transition: "transform 800ms var(--ease-spring), opacity 800ms var(--ease-spring)",
                  transitionDelay: `${open ? 120 + i * 70 : 0}ms`,
                  transform: open ? "translateY(0)" : "translateY(48px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-4xl text-[var(--on-surface)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="space-y-4"
            style={{
              transition: "transform 800ms var(--ease-spring), opacity 800ms var(--ease-spring)",
              transitionDelay: `${open ? 120 + links.length * 70 : 0}ms`,
              transform: open ? "translateY(0)" : "translateY(48px)",
              opacity: open ? 1 : 0,
            }}
          >
            <button
            type="button"
            onClick={() => { setOpen(false); setBookerOpen(true); }}
            className="mag group flex w-full items-center justify-between rounded-lg bg-[var(--oriv-yellow)] px-5 py-3 text-base font-medium text-[var(--on-oriv-yellow)]"
          >
            <span>Talk to a co-founder</span>
            <span className="arrow flex h-8 w-8 items-center justify-center rounded bg-black/12">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
