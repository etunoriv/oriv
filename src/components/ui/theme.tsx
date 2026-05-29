"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Resolved = "light" | "dark";

const STORAGE_KEY = "oriv-theme";

function readInitial(): Resolved {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function apply(theme: Resolved) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

/**
 * Binary theme toggle. One button. Default tracks the device system
 * preference until the user clicks — then explicit choice is persisted.
 * Icon swap animates with a 250ms cross-fade + slight rotation.
 */
export function Theme({
  size = "sm",
  className,
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const [theme, setTheme] = useState<Resolved>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = readInitial();
    setTheme(initial);
    apply(initial);
    setMounted(true);

    // While user has no explicit pref stored, follow system changes live.
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "light" && stored !== "dark") {
        const next: Resolved = mql.matches ? "dark" : "light";
        setTheme(next);
        apply(next);
      }
    };
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  function toggle() {
    const next: Resolved = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  const dim = size === "md" ? "h-11 w-11" : "h-8 w-8";
  const iconPx = size === "md" ? 16 : 14;

  if (!mounted) {
    return (
      <div
        aria-hidden
        className={cn(
          "inline-block rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)]",
          dim,
          className,
        )}
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggle}
      className={cn(
        "relative inline-flex items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--on-surface-variant)] transition-colors duration-200 hover:text-[var(--on-surface)] active:bg-[var(--surface-container)]",
        dim,
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.85 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === "dark" ? (
            <MoonIcon size={iconPx} />
          ) : (
            <SunIcon size={iconPx} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function SunIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="2.8" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="8"
          y1="1.6"
          x2="8"
          y2="3.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform={`rotate(${deg} 8 8)`}
        />
      ))}
    </svg>
  );
}

function MoonIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M13.2 9.6A5.6 5.6 0 1 1 6.4 2.8a4.6 4.6 0 0 0 6.8 6.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
