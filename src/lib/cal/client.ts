/**
 * Cal.com v2 typed fetch wrapper.
 *
 * Pins cal-api-version per endpoint — Cal has bumped versions silently
 * before, so the pins live in one place for easy upgrades.
 *
 * Server-side only. Browser → /api/cal/* → here → Cal.
 */

import type { CalSlotsResponse } from "./types";

const CAL_BASE = "https://api.cal.com/v2";

const VERSIONS = {
  slots: "2024-09-04",
  bookings: "2026-02-25",
} as const;

export class CalApiError extends Error {
  constructor(public status: number, public code: string, message: string) {
    super(message);
    this.name = "CalApiError";
  }
}

function authHeaders(): Record<string, string> {
  const key = process.env.CAL_API_KEY;
  return key ? { Authorization: `Bearer ${key}` } : {};
}

export async function getSlots(params: {
  username: string;
  eventSlug: string;
  start: string;
  end: string;
  timeZone: string;
}): Promise<CalSlotsResponse["data"]> {
  const qs = new URLSearchParams({
    eventTypeSlug: params.eventSlug,
    username: params.username,
    start: params.start,
    end: params.end,
    timeZone: params.timeZone,
    format: "range",
  });
  const res = await fetch(`${CAL_BASE}/slots?${qs.toString()}`, {
    headers: { "cal-api-version": VERSIONS.slots, ...authHeaders() },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new CalApiError(res.status, "cal_slots_failed", await safeMessage(res));
  }
  const body = (await res.json()) as CalSlotsResponse;
  if (body.status !== "success") {
    throw new CalApiError(502, "cal_slots_error", body.error?.message ?? "Cal returned non-success");
  }
  return body.data;
}

export async function createBooking(params: {
  username: string;
  eventSlug: string;
  start: string;
  name: string;
  email: string;
  timeZone: string;
  notes: string;
}): Promise<{ uid: string; start: string }> {
  const res = await fetch(`${CAL_BASE}/bookings`, {
    method: "POST",
    headers: {
      "cal-api-version": VERSIONS.bookings,
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({
      start: params.start,
      eventTypeSlug: params.eventSlug,
      username: params.username,
      attendee: {
        name: params.name,
        email: params.email,
        timeZone: params.timeZone,
      },
      bookingFieldsResponses: { notes: params.notes },
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new CalApiError(res.status, "cal_booking_failed", await safeMessage(res));
  }
  const json = (await res.json()) as {
    status: string;
    data?: { uid?: string; start?: string };
    error?: { message?: string };
  };
  if (json.status !== "success" || !json.data?.uid) {
    throw new CalApiError(502, "cal_booking_error", json.error?.message ?? "Cal returned non-success");
  }
  return { uid: json.data.uid, start: json.data.start ?? params.start };
}

async function safeMessage(res: Response): Promise<string> {
  try {
    const j = await res.json();
    return j?.error?.message || j?.message || `Cal API ${res.status}`;
  } catch {
    return `Cal API ${res.status}`;
  }
}
