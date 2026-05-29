/**
 * Cal.com v2 API — shared types.
 *
 * Narrow on purpose: only fields we actually read are typed, so a Cal
 * schema bump doesn't silently break unrelated code paths.
 */

export type CalSlotRange = {
  start: string;
  end: string;
};

/** Cal /v2/slots response with `format=range`. Keyed by YYYY-MM-DD. */
export type CalSlotsResponse = {
  status: "success" | "error";
  data: Record<string, CalSlotRange[]>;
  error?: { message?: string };
};

export type BookRequest = {
  archetypeId: string;
  start: string;
  name: string;
  email: string;
  timeZone: string;
  answers: Record<string, string>;
};

export type BookResponse =
  | { ok: true; bookingUid: string; start: string }
  | { ok: false; code: string; message: string };

export type SlotsResponse =
  | { ok: true; data: CalSlotsResponse["data"] }
  | { ok: false; code: string; message: string };
