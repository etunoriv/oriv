import { NextResponse } from "next/server";
import { createBooking, CalApiError } from "@/lib/cal/client";
import { ARCHETYPE_EVENTS, isArchetypeId } from "@/lib/cal/config";
import type { BookRequest, BookResponse } from "@/lib/cal/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request): Promise<NextResponse<BookResponse>> {
  let body: Partial<BookRequest>;
  try {
    body = (await req.json()) as Partial<BookRequest>;
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid_json", message: "Request body must be JSON" },
      { status: 400 },
    );
  }

  const { archetypeId, start, name, email, timeZone, answers } = body;
  if (!isArchetypeId(archetypeId)) {
    return NextResponse.json(
      { ok: false, code: "invalid_archetype", message: "Unknown archetypeId" },
      { status: 400 },
    );
  }
  if (!start || !name?.trim() || !email?.trim() || !timeZone) {
    return NextResponse.json(
      { ok: false, code: "missing_fields", message: "start, name, email, timeZone required" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, code: "invalid_email", message: "Email format is invalid" },
      { status: 400 },
    );
  }

  const event = ARCHETYPE_EVENTS[archetypeId];
  const notes = buildNotes(archetypeId, answers ?? {});

  try {
    const { uid, start: startBack } = await createBooking({
      username: event.username,
      eventSlug: event.eventSlug,
      start,
      name: name.trim(),
      email: email.trim(),
      timeZone,
      notes,
    });
    return NextResponse.json({ ok: true, bookingUid: uid, start: startBack });
  } catch (err) {
    if (err instanceof CalApiError) {
      return NextResponse.json(
        { ok: false, code: err.code, message: err.message },
        { status: err.status >= 400 && err.status < 600 ? err.status : 502 },
      );
    }
    return NextResponse.json(
      { ok: false, code: "unknown_error", message: "Booking failed" },
      { status: 500 },
    );
  }
}

function buildNotes(archetypeId: string, answers: Record<string, string>): string {
  const lines = [`Archetype: ${archetypeId}`, ""];
  for (const [slug, value] of Object.entries(answers)) {
    if (!value?.trim()) continue;
    lines.push(`${slug}: ${value.trim()}`);
  }
  return lines.join("\n");
}
