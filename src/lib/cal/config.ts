/**
 * Cal.com event-type config per archetype.
 *
 * All 4 archetypes point at `orivstudio/demo` today. Split into dedicated
 * event types in the Cal dashboard and edit only this map — no other code
 * changes needed.
 */

const CAL_USERNAME = process.env.CAL_USERNAME ?? "orivstudio";

export type ArchetypeId = "design-partner" | "investor" | "engineering" | "other";

export type CalEvent = {
  username: string;
  eventSlug: string;
  durationMinutes: number;
};

export const ARCHETYPE_EVENTS: Record<ArchetypeId, CalEvent> = {
  "design-partner": { username: CAL_USERNAME, eventSlug: "demo", durationMinutes: 30 },
  investor:         { username: CAL_USERNAME, eventSlug: "demo", durationMinutes: 30 },
  engineering:      { username: CAL_USERNAME, eventSlug: "demo", durationMinutes: 25 },
  other:            { username: CAL_USERNAME, eventSlug: "demo", durationMinutes: 20 },
};

export function isArchetypeId(v: unknown): v is ArchetypeId {
  return v === "design-partner" || v === "investor" || v === "engineering" || v === "other";
}
