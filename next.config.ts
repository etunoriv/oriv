import type { NextConfig } from "next";
import { withDualmark } from "@dualmark/nextjs";

const nextConfig: NextConfig = {};

export default withDualmark(nextConfig, {
  siteUrl: "https://oriv.io",
  llmsTxt: {
    enabled: true,
    brandName: "Oriv",
    sections: [
      {
        title: "Pages",
        links: [
          { title: "Home", href: "/" },
          { title: "Product", href: "/product" },
          { title: "How it works", href: "/how" },
          { title: "Built on Oriv", href: "/built-on" },
          { title: "Trust & compliance", href: "/trust" },
          { title: "About", href: "/about" },
          { title: "Careers", href: "/careers" },
          { title: "Privacy", href: "/privacy" },
          { title: "Terms", href: "/terms" },
        ],
      },
    ],
  },
});
