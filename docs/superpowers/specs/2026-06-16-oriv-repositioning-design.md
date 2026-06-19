# Oriv Repositioning — Design Spec

**Date:** 2026-06-16
**Status:** Draft for leadership review
**Author:** Claude (working with Ethan)

This spec captures the decisions that govern the full website copy rewrite. It builds on the locked hero, the meeting transcript (Jun 12), and the leadership decisions on positioning style + scope. Each section presents a decision, the reasoning, and alternatives leadership can push back on.

---

## Locked already

> **Headline:** The knowledge layer for engineering.
> **Subheading:** Infrastructure for what teams build over years.

- **Positioning style:** Category positioning (not JTBD).
- **Category scope:** Broad — "for engineering" (engineers across all industries, not just embedded).
- **Tone reference points:** Stripe, Linear, Anthropic, Palantir, Anduril.

For the full decision tree on hero copy, see `~/Downloads/oriv-hero-copy-decision-tree.md`.

---

## Section C — Voice Rules

A short constitution that governs every line of copy on the site from here on. Settles voice *once* so every subsequent rewrite can be checked against the same rules.

### The category-posture rule (the one we keep tripping on)

**The grammatical subject of any hero-level claim is Oriv, the layer, or the category — never the customer or a scenario.** Customer can appear as object, never as subject of the main verb.

| ✅ Allowed | ❌ Avoid |
|---|---|
| "Treats know-how as infrastructure." | "What your team knows, kept where they can find it." |
| "Captures how teams actually decide." | "When the next engineer faces this decision, Oriv answers." |
| "Built for what teams build over years." | "Teams stop redoing the same work." |
| "A layer beneath your existing tools." | "Engineers save weeks every project." |

This rule applies hardest to the **hero** and **section openers**. It can relax in body copy where scenarios are useful for proof — but the heading above always reads as a category claim, not a customer story.

### Word bans

These either signal AI-slop, marketing-speak, or insider jargon. Strip wherever they appear.

| Banned | Why |
|---|---|
| Implicit, tacit, ontological | Insider words from semantic web / KM literature. Curse-of-knowledge writing. |
| Deterministic, probabilistic | CTO uses these internally — they're correct terms but unrecognizable to engineers reading a homepage. |
| Agentic OS | CTO explicit ban: "If you say os, we are wrong." |
| Memory, memory layer | CTO: "Memory means SD card that stores everything but does not know what data is. This is semantic web." Use "knowledge layer" instead. |
| Revolutionary, game-changing, next-gen, cutting-edge | Marketing fluff. Erodes credibility instantly with engineers. |
| Elevate, unleash, transform, empower | Same. |
| Seamlessly, effortlessly, intuitive | Empty intensifiers. |
| Innovative, disruptive | Empty signal claims. |
| "Excited to share" / "We're thrilled" | Founder-journey filler. |

### Word allowances (engineer language)

The CTO's own framing already gives us the right vocabulary. Use it.

- **Knowledge layer** — the category name; use as noun.
- **OS-like** — sparingly; only when describing the *feel* of how the product helps without interrupting workflow.
- **Build, decide, fail, fit, ship, hold, capture, run** — engineer verbs.
- **Know-how, judgment, experience, instinct** — soft synonyms for what's captured.
- **Trade-off, decision, cause, effect** — concepts engineers think in.
- **Component, schematic, requirement, architecture, simulation** — domain vocabulary, used sparingly in industry-bound contexts.

### Style rules

1. **Active voice always.** "We capture X" not "X is captured."
2. **Concrete over abstract.** A specific noun beats an adjective. "10L INR motor" beats "expensive component."
3. **Receipts beat adjectives.** Numbers, named tools, real industries. "Three iterations per PCB cycle" beats "lots of iterations."
4. **One idea per sentence.** No double-clause hedges.
5. **Sixth-grade English.** If a 16-year-old can't parse it on first read, rewrite.
6. **No exclamation marks.** Not in body, not in CTAs, not in error messages.
7. **No founder-journey copy.** No "Our story began…" or "We saw a problem…" — engineers don't care.
8. **Numbers stay specific.** "60% / 40%" stays; "the majority" doesn't.

### Tone calibration

| Audience | Tone calibration |
|---|---|
| Senior engineer / principal engineer | Direct, technical, unimpressed by marketing. Match by being equally direct. |
| Engineering lead / VP / director | Add institutional stakes (retention, IP value, project velocity). Stay terse. |
| C-suite / acquirer | Speak to the IP angle (knowledge as company asset). Stay terse. |
| Junior engineer / new hire | They're a beneficiary, not a buyer. Don't speak to them on the homepage; speak to them in product. |

### Do NOT expose the HOW of capture

From the CTO directly: the *method* by which Oriv extracts and grounds mental models is the IP. The website can show the *output* (captured knowledge, cited decisions, queryable infrastructure). It cannot show the *method* (how the senior is interviewed, what the ontology looks like, how grounding is validated).

This is a hard rule. If a section seems to require explaining the method, rewrite the section.

### Two psychological levers worth using

From `marketingskills/marketing-psychology`:

1. **Loss aversion** — institutional memory walks out the door when senior engineers leave. This is the real anxiety. Use it without being alarmist.
2. **Pratfall effect** — confident admission of a single weakness builds more trust than a polished claim. Oriv can admit "we don't replace your tools; we sit underneath them" and gain credibility from the humility.

### One lever to avoid

**Fake urgency / scarcity.** "Only 3 spots left this quarter" is true (Q3 cohort) and can be stated factually. But "Don't miss out!" or countdown timers are out of voice.

---

## Section A — Hero Proof Block

The category claim in the hero doesn't earn itself. Something concrete sits immediately below the H + SH + CTA stack to validate "Infrastructure for what teams build over years." This is what Stripe does with code, Linear with a screenshot, Anthropic with the Claude product card.

### What the proof block needs to do

1. Look like a real Oriv artifact, not a marketing illustration.
2. Show *captured knowledge* with the *why* attached — not just data, not just a parametric record.
3. Carry the "infrastructure" feel — structured, queryable, attributable.
4. Not expose the HOW of capture.
5. Render fast (no heavy animation, no scroll-jacking).

### Current state

The existing `ProductSurface` component shows a canonical record card for an op-amp (LMV321), with parameters, units, citations. It's good but it's *parametric record*-shaped — closer to a structured database view than a knowledge artifact.

### Proposed: knowledge record card

Reshape the existing `ProductSurface` to show a **knowledge record** instead of a parametric record. Same component file, different content.

Mock content for the card:

```
─────────────────────────────────────────────
 KNOWLEDGE RECORD · LMV321 · op-amp
─────────────────────────────────────────────

 Decision         20pF capacitor on V+ pin
 By               K. Shenoy · Oct 2024 · Rev C
 Why              Suppresses 60 MHz oscillation
                  observed at Tj > 85°C
 Source           SCD-04, p.3, tbl 2.4
 Verified         Bench measurement, run_8f2a
 Used in          7 other projects · 11 designs

─────────────────────────────────────────────
 ASKS:  Why this value?  What broke last time?
        Show me alternatives at this Tj range.
─────────────────────────────────────────────
```

What this carries:
- A real component (LMV321 — already in use on the current site).
- A real decision (the 20pF capacitor placement — the CTO's own example from the transcript).
- The engineer who made it, when, what revision.
- The *why* (suppresses oscillation at a specific operating condition).
- The source citation (page and table reference).
- Validation evidence (bench measurement, run ID).
- Cross-project usage count ("7 other projects · 11 designs") — earns the "infrastructure" claim by showing reuse.
- Three example queries at the bottom — the *kinds of questions* this record answers.

### Why this earns the subhead

- **"Infrastructure"** is shown, not claimed — the card looks like a real database row with metadata, source, verification, reuse stats.
- **"For what teams build over years"** is implied in *"Used in 7 other projects · 11 designs"* — the record is alive across time and projects.
- **"What teams build"** is generic enough to cover decisions, not just components — which is what the knowledge record actually contains.

### Alternatives considered

- **Side-by-side comparison (current vs Oriv).** Risks "ChatGPT wrapper" criticism. CTO didn't want to position Oriv against general-purpose AI directly.
- **Layer diagram showing Oriv beneath EDA/PLM/AI tools.** Validates the "secondary not primary" rule but is more of an architecture diagram than a product proof. Could be a separate section, not the hero proof.
- **API response / JSON output.** Already on `/product` page (the canonical demo we rebuilt earlier). Could re-use here, but it's data-shaped, not knowledge-shaped.

### Open question for design

The card content above is roughly right. The visual treatment is TBD — but the constraint is *it should not look like marketing illustration*. It should look like an Oriv UI screenshot, even if it's a stylized one.

---

## Section B — Page Architecture

### Current homepage flow

1. Hero
2. Problem ("Same gap in every tool…")
3. Wedge (60/40 BOM coverage with animated bar)
4. Pivot (4-pillar accordion: canonical, units, conditions, provenance)
5. UseCases (industry tabs: A&D, auto, MedTech, robotics, semi)
6. FinalCTA

This is **JTBD-shaped architecture.** It opens with the pain, then progressively reveals the solution. That worked when we were positioning as a problem-solver. It doesn't work for category positioning, which leads with *what we are.*

### Proposed new homepage flow

1. **Hero** — H + SH + CTA + knowledge record card (Section A).
2. **What it captures** — show the *kinds* of knowledge Oriv stores, with three concrete examples (decisions, trade-offs, why-it-broke-last-time). Not a pain section; a *capability surface*.
3. **Where it sits** — short architectural statement + visual: Oriv beneath the existing engineering stack (EDA, PLM, simulation, AI agents). This addresses the CTO's "secondary not primary" rule directly. Replaces the old "Problem" section.
4. **What it travels across** — industries we serve. Aerospace, automotive, MedTech, semiconductor, robotics, energy, manufacturing. Light visual — logos or industry labels in a grid. Replaces the old UseCases tabs on the homepage; deeper industry content lives on `/industries`.
5. **The institutional case** — one section that names the IP/permanence claim: captured engineering knowledge becomes a company asset. Speaks to engineering leads + acquirers.
6. **Design partner cohort** — the Q3-three-spots framing. Anonymized partner profiles. Recapitulates from `/customers`.
7. **Final CTA** — Talk to a co-founder.

### Key shifts from current

| Current | Proposed | Why |
|---|---|---|
| Lead with **Problem** | Lead with **What it captures** | Category positioning leads with what *is*, not what's broken. |
| **Wedge** section is animated bar | Wedge claim absorbed into "What it captures" intro prose | The animated bar was decorative; the claim is stronger in prose. |
| **Pivot** is 4-pillar accordion | Becomes "What it captures" content — but reframed as decisions/judgment, not parametric specs | Repackaging: same product, new framing. The 4 properties remain technically true but are now in service of the knowledge claim. |
| **UseCases** = industry tabs on homepage | Moved to `/industries` page; replaced by light industry strip on homepage | Homepage is category-positioning. Industry-specific content is a deeper page. |
| No institutional case section | Added | The IP/acquisition angle is a real lever the current site doesn't pull on. |
| FinalCTA stays | FinalCTA stays | Already strong. |

### What about /product, /trust, /about, /customers, /careers, /industries?

These stay as routes. Their content gets rewritten under the new voice rules but the sitemap doesn't change.

The one architectural choice to make: **does `/how` need to come back?**

Earlier this session we deleted `/how` as orphan. Under the new architecture, the "Where it sits" section on the homepage might benefit from a dedicated deeper page — `/architecture` or `/how-it-works` — that shows the layer-beneath-your-tools claim with more depth. Optional, not required for v1.

---

## Section D — Industry Framing

The category claim is "for engineering" (broad). But the actual product is most mature for hardware/embedded, and the design partners we have are all hardware-adjacent. How does the site reconcile this?

### Decision: industries are a secondary navigation surface, not a primary positioning axis.

- **Homepage**: stays domain-neutral. Mentions industries in passing (the "what it travels across" section) but doesn't sell to any specific one.
- **`/industries` page**: stays. Lists each industry with a short framing of how Oriv applies. Acts as the qualified-lead landing surface for ads, SEO, partner outreach.
- **Use-case patterns**: instead of organizing only by industry, also organize by *kind of engineering work* — component selection, test bench setup, architecture validation, knowledge handoff. These cut across industries.

### Industry list to include

From the CTO transcript + current `/industries` content:

- **Aerospace & Defense** (DMSMS, MIL-PRF, ITAR-aware)
- **Automotive** (ISO 26262, ASIL evidence)
- **MedTech / Medical Devices** (FDA 21 CFR Part 11)
- **Robotics & Autonomy**
- **Semiconductor**
- **Energy & Power Systems** (new — implied by user's "all industries" clarification)
- **Manufacturing / Industrial Automation** (new — Bosch, Siemens-adjacent)

The last two are explicit additions. The user clarified that "engineers play a major part" in healthcare → medical devices, which extends to power, manufacturing, etc. Adding them broadens the site without claiming domains we can't yet serve well.

### What `/industries` says

Each industry page (or row, depending on design) follows the same pattern:
- Industry name
- One-line framing: how Oriv applies to engineering work in this space
- Two or three concrete examples of decisions / trade-offs / knowledge typical to that industry
- Anonymized design partner if we have one
- CTA back to "Talk to a co-founder"

### What `/industries` does NOT say

- No "we serve X% of the Fortune 500." Pre-revenue, can't claim.
- No fake logos. If we don't have a named partner, the section says "design partners under NDA" — honest.
- No industry-specific JTBD claims. We stay in category voice.

---

## Section E — CTA Strategy

### Primary CTA (everywhere a hero or final CTA appears)

**"Talk to a co-founder."**

Why this stays:
- Honest about the stage — pre-revenue, founder-led sales motion.
- Personal — "co-founder" beats "us" or "our team."
- Specific — names the role, not the company.
- Already tested in user flows (the existing Booker component).
- Calibrates expectation: the visitor will not get a sales rep, they'll get K, K, or N.

### Secondary CTA (where the design-partner framing is more on-point)

**"Apply to be a design partner."**

Used on:
- `/customers` page (the existing CustomersContent section)
- Possibly the bottom of `/product` and `/architecture`
- Email signatures and outbound

Why secondary, not primary:
- More selective — implies qualification on the customer's side.
- Carries the Q3 cohort framing (three spots).
- Less warm than "Talk to a co-founder" but more accurate to the current sales motion.

### Tertiary CTA (low-commitment paths)

For visitors who aren't ready to talk:
- **"Email hello@oriv.io"** — already in use as inline link.
- **"Read the design memo"** (future) — if we ever publish a public-facing PDF or page explaining the category in depth. Not v1.

### What we're NOT using

- "Start free trial" — there's no product to try.
- "Request a demo" — too SaaS.
- "Get started" — the worst CTA in software, banned in copywriting skill.
- "Sign up" — same.
- "Learn more" — same.

### CTA copy on the button

| Context | Button text | Icon | Style |
|---|---|---|---|
| Hero | Talk to a co-founder | Arrow up-right | Primary yellow button |
| Final CTA | Talk to a co-founder | Arrow up-right | Primary yellow button |
| `/customers` | Apply to be a design partner | Arrow up-right | Primary yellow button |
| Inline (in body copy) | "Email hello@oriv.io" | None | Underlined link |
| Mobile sticky (if added) | Talk to a co-founder | None | Compact yellow pill |

---

## Open questions deliberately left unresolved

Things I did not decide unilaterally because they're closer to product/leadership calls than copy decisions.

1. **The proof block visual treatment.** I specified content (knowledge record card) but not visual design. That's a design conversation, not a copy one.
2. **Whether `/architecture` (or `/how-it-works`) page is built in v1.** Optional. Useful but not blocking.
3. **The exact copy for each section beyond the hero.** This spec sets the *rules* and *architecture*. Per-section body copy is the next round of work — to be done page-by-page once this spec is approved.
4. **Industry copy specifics.** I listed the seven industries we should cover but did not draft the per-industry page copy.
5. **Whether the institutional case section names the acquisition angle directly.** CTO mentioned it in transcript; it's a sharp lever but it's also CFO/acquirer-tier framing. May or may not belong on the public homepage.

---

## Where leadership can push back

The brainstorming skill discipline says: every locked decision is open to challenge if leadership has a different read. Tracing back through this spec, here are the load-bearing decisions and where they could be reconsidered:

1. **Section C (voice rules): the category-posture rule.** This is the rule that course-corrected the entire hero process. If leadership wants a warmer, more customer-facing voice on body copy specifically, the rule could relax below the hero. Currently it's "hardest at hero, relaxes for proof copy." That gradient is debatable.

2. **Section A (proof block): the knowledge record card.** I picked it over alternatives (layer diagram, side-by-side, API response). If leadership wants to lead with the architecture diagram instead — to drive home "secondary, not primary" — that's a defensible alternative.

3. **Section B (page architecture): leading with "What it captures" instead of "Problem."** This is the biggest shift from the current site. If leadership thinks the problem framing is too important to drop, we keep it but reframe it under category voice (e.g., "What gets lost" as a section title, with a more declarative tone).

4. **Section D (industries): adding healthcare/energy/manufacturing.** Adds breadth but stretches the credibility of "we serve this industry" if no design partner exists there yet. Could be staged — add only when a partner is named.

5. **Section E (CTAs): two-CTA system.** If leadership prefers a single CTA everywhere ("Talk to a co-founder"), the design-partner secondary disappears and `/customers` uses the primary. Simpler but loses the qualification signal.

---

## Confidence level

**High on Sections C, E. Moderate on A, B, D.**

- C (voice rules) is well-defended — every rule traces back to a specific mistake we caught earlier this session or a CTO directive.
- E (CTA strategy) is straightforward and aligned with the existing user flow.
- A (proof block) — the *content* I'm confident on. The *visual treatment* is a design call, not a copy call, and I haven't designed it yet.
- B (page architecture) — the *new flow* makes sense but it's a bigger change than copy. Worth one round of "do we believe this restructure makes sense" before implementing.
- D (industries) — adding industries is low-risk if we're honest about which ones have named partners. The risk is overclaiming.

---

## Next steps after spec approval

Per the brainstorming skill workflow:
1. Leadership reviews this spec.
2. Feedback / pushback collected in one pass.
3. Spec revised once.
4. Hand off to `writing-plans` skill → produces a page-by-page implementation plan.
5. Implementation: rewrite each page's body copy under the new rules and architecture.
6. Final QA pass before publish.

No code or copy gets written until this spec is approved.
