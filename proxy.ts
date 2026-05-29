import { createDualmarkMiddleware } from "@dualmark/nextjs";

export default createDualmarkMiddleware({
  siteUrl: "https://oriv.io",
});

export const config = {
  matcher: "/((?!_next/|favicon.ico|md/).*)",
};
