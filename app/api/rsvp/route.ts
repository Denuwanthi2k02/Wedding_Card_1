import { appendFileSync, mkdirSync } from "node:fs";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

type RsvpBody = {
  name?: unknown;
  attending?: unknown;
  guestCount?: unknown;
  message?: unknown;
};

export async function POST(req: Request) {
  let body: RsvpBody;
  try {
    body = (await req.json()) as RsvpBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const attending =
    typeof body.attending === "boolean" ? body.attending : null;
  const parsedGuests = Number.parseInt(String(body.guestCount), 10);
  const guestCount = attending
    ? Math.min(10, Math.max(1, Number.isNaN(parsedGuests) ? 1 : parsedGuests))
    : 0;
  const message = String(body.message ?? "").trim().slice(0, 500);

  if (!name || attending === null) {
    return NextResponse.json(
      { error: "Fields 'name' and 'attending' are required" },
      { status: 400 },
    );
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (url && anonKey) {
    const supabase = createClient(url, anonKey);
    const { error } = await supabase
      .from("rsvps")
      .insert({ name, attending, guest_count: guestCount, message });
    if (error) {
      console.error("RSVP insert failed:", error.message);
      return NextResponse.json({ error: "Could not save RSVP" }, { status: 500 });
    }
  } else if (process.env.NODE_ENV !== "production") {
    // Local dev without Supabase configured: keep responses in a gitignored file.
    mkdirSync(".data", { recursive: true });
    appendFileSync(
      ".data/rsvps.dev.jsonl",
      `${JSON.stringify({ name, attending, guest_count: guestCount, message, created_at: new Date().toISOString() })}\n`,
    );
  } else {
    return NextResponse.json(
      { error: "RSVP storage is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
