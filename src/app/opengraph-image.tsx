import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Oriv. The parametric data layer for hardware engineering.";

// Read the wordmark at module load so it embeds cleanly as a data URI
const logoSvg = readFileSync(
  join(process.cwd(), "public", "oriv_logo_w.svg"),
  "utf-8",
);
const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString(
  "base64",
)}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08090A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          color: "#f5f5f3",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient yellow wash top-right */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 900,
            height: 700,
            background:
              "radial-gradient(circle at top right, rgba(255,197,46,0.24), rgba(255,197,46,0) 65%)",
            display: "flex",
          }}
        />
        {/* Faint white wash bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 600,
            height: 400,
            background:
              "radial-gradient(circle at bottom left, rgba(255,255,255,0.04), rgba(255,255,255,0) 60%)",
            display: "flex",
          }}
        />

        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={150} height={63} alt="Oriv" />
        </div>

        {/* Bottom: tagline + meta strip */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.06,
              color: "#f5f5f3",
              maxWidth: 980,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The parametric data layer</span>
            <span style={{ color: "rgba(245,245,243,0.62)" }}>
              for hardware engineering.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 19,
              fontFamily: "monospace",
              letterSpacing: "0.18em",
              color: "rgba(245,245,243,0.45)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 9999,
                  background: "#FFC52E",
                  display: "flex",
                }}
              />
              <span>ORIV.IO</span>
            </div>
            <div style={{ display: "flex" }}>
              <span>PUBLIC + PRIVATE · ONE SCHEMA</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
