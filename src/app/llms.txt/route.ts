import { createLlmsTxtHandler } from "@dualmark/nextjs";

const handler = createLlmsTxtHandler({
  brandName: "Oriv",
  sections: [
    {
      title: "Pages",
      links: [
        { title: "Home", href: "/" },
        { title: "Product", href: "/product" },
        { title: "Customers", href: "/customers" },
        { title: "Trust & compliance", href: "/trust" },
        { title: "About", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Privacy", href: "/privacy" },
        { title: "Terms", href: "/terms" },
      ],
    },
  ],
});

export const GET = handler.GET;
export const dynamic = "force-static";
