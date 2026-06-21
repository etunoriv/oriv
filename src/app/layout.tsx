import type { Metadata, Viewport } from "next";
import { Geist, Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { BookerProvider } from "@/components/booker";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://oriv.io";
const TITLE = "Oriv. The knowledge layer for hardware engineering teams.";
const DESCRIPTION =
  "Oriv captures every decision a hardware engineering team makes across selection, simulation, prototyping, and live instruments. Every record cites its source and stays inside your tenant.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Oriv",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@oriv_io",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#08090A" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-US"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      className={`${hanken.variable} ${inter.variable} ${jetbrains.variable} ${geist.variable}`}
    >
      <head>
        {/* Cal.com element-click embed (orivstudio/demo) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "demo", {origin:"https://app.cal.com"});
Cal.ns.demo("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#FFC52E"},"dark":{"cal-brand":"#FFC52E"}},"hideEventTypeDetails":false,"layout":"month_view"});`,
          }}
        />
      </head>
      <body className="min-h-[100dvh] antialiased">
        <BookerProvider>{children}</BookerProvider>
      </body>
    </html>
  );
}
