import { NextResponse } from "next/server";
import { getSlots, CalApiError } from "@/lib/cal/client";
import { ARCHETYPE_EVENTS, isArchetypeId } from "@/lib/cal/config";
import type { SlotsResponse } from "@/lib/cal/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request): Promise<NextResponse<SlotsResponse>> {
  const url = new URL(req.url);
  const archetypeId = url.searchParams.get("archetypeId");
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  const timeZone = url.searchParams.get("timeZone") ?? "UTC";

  if (!isArchetypeId(archetypeId)) {
    return NextResponse.json(
      { ok: false, code: "invalid_archetype", message: "Unknown archetypeId" },
      { status: 400 },
    );
  }
  if (!start || !end) {
    return NextResponse.json(
      { ok: false, code: "missing_range", message: "start and end are required" },
      { status: 400 },
    );
  }

  const event = ARCHETYPE_EVENTS[archetypeId];
  try {
    const data = await getSlots({
      username: event.username,
      eventSlug: event.eventSlug,
      start,
      end,
      timeZone,
    });
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    if (err instanceof CalApiError) {
      return NextResponse.json(
        { ok: false, code: err.code, message: err.message },
        { status: err.status >= 400 && err.status < 600 ? err.status : 502 },
      );
    }
    return NextResponse.json(
      { ok: false, code: "unknown_error", message: "Slot lookup failed" },
      { status: 500 },
    );
  }
}
