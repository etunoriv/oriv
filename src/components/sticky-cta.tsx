"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      const pastHero = scrollY > vh * 0.8;
      const nearFooter = scrollY > docHeight - vh * 2.5;

      setVisible(pastHero && !nearFooter);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
        >
          <div className="mx-auto max-w-[1400px] px-6 pb-6">
            <div className="pointer-events-auto inline-flex items-center gap-4 bg-foreground/95 backdrop-blur-md text-background px-6 py-3 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
              <span className="text-sm font-medium hidden sm:inline">Ready to see Oriv?</span>
              <a
                href="#get-started"
                className="bg-accent text-foreground px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-md btn-press transition-all duration-200 hover:shadow-[0_4px_16px_rgba(255,197,46,0.4)]"
              >
                Request a Pilot
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
