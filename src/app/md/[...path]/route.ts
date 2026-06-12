import { createDualmarkRouteHandler } from "@dualmark/nextjs";

const handler = createDualmarkRouteHandler({
  siteUrl: "https://oriv.io",
  staticPages: [
    {
      pattern: "/",
      render: () => `# Oriv

The parametric data layer for hardware engineering.

Component data lives in 40-page PDFs, duplicated across every tool. Oriv unifies it into one canonical schema your stack already queries.

## What Oriv is

A single source of truth for component parameters — pinouts, footprints, electrical characteristics, mechanical specs — extracted from datasheets and exposed through one schema that every downstream tool (EDA, simulation, AI agents, internal apps) queries directly.

## Who it's for

Regulated hardware engineering teams: aerospace, medical devices, automotive, industrial. Teams who can't ship the wrong part and can't waste senior engineers retyping spec sheets into eight different tools.

## Why it exists

Every tool in the stack carries its own version of the same component data. AI agents come last and guess. Oriv removes the duplication.
`,
    },
    {
      pattern: "/product",
      render: () => `# Product

Oriv is the parametric data layer for hardware engineering. Component data from datasheets becomes one canonical schema that your existing tools — EDA, simulation, AI assistants, internal apps — query directly.

## How it works

1. Datasheets enter the platform.
2. Oriv extracts parameters into a canonical, versioned schema.
3. Your downstream stack reads from one source of truth via API or MCP.

## What you get

- One source of truth for component parameters.
- Programmatic access for AI agents and internal tools.
- Versioned, auditable changes — built for regulated industries.
`,
    },
    {
      pattern: "/industries",
      render: () => `# Industries

How aerospace, automotive, MedTech, robotics, and semiconductor teams use Oriv as the data layer beneath their internal tools. Integration grid covers EDA, PLM, ERP, AI, and custom apps.

Hardware teams use Oriv as the canonical component database behind AI copilots, internal review tools, supply-chain visibility dashboards, and compliance pipelines.
`,
    },
    {
      pattern: "/customers",
      render: () => `# Customers

Oriv is in the design-partner phase. We're building the canonical data layer with three teams whose component categories shape the schema for everyone who comes after.

Logos and named case studies land on this page when each partner is cleared to be public. Current cohort: A&D DMSMS office, semiconductor R&D team, avionics test integrator.

Three spots open in the Q3 cohort. Contact: hello@oriv.io
`,
    },
    {
      pattern: "/trust",
      render: () => `# Trust and compliance

Oriv is built for regulated hardware industries — aerospace, medical, automotive — where component-level traceability and audit trails are non-negotiable.

## What we do

- Versioned schema with full change history.
- Access controls and audit logging.
- Data residency options for regulated customers.

Contact: hello@oriv.io
`,
    },
    {
      pattern: "/about",
      render: () => `# About Oriv

Oriv is the parametric data layer for hardware engineering. We started Oriv because we watched senior engineers waste their time retyping the same component spec into eight different tools — and watched AI agents guess at hardware decisions because no tool gave them ground truth.

Contact: hello@oriv.io
`,
    },
    {
      pattern: "/careers",
      render: () => `# Careers

We are an early-stage team building the parametric data layer for hardware engineering. If you care about regulated hardware and clean data infrastructure, get in touch.

Contact: hello@oriv.io
`,
    },
    {
      pattern: "/privacy",
      render: () => `# Privacy

This page summarizes how Oriv handles personal data. The canonical privacy policy is published at https://oriv.io/privacy.
`,
    },
    {
      pattern: "/terms",
      render: () => `# Terms

This page summarizes the terms of using Oriv. The canonical terms are published at https://oriv.io/terms.
`,
    },
  ],
});

export const GET = handler.GET;
export const generateStaticParams = handler.generateStaticParams;
export const dynamic = "force-static";
