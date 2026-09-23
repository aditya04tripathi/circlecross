import { type NextRequest, NextResponse } from "next/server";
import {
  isWorldChoice,
  parseWorldChoice,
  WORLD_COOKIE,
  WORLD_COOKIE_MAX_AGE,
} from "../../../lib/world-preference";

export async function GET(request: NextRequest) {
  const world = parseWorldChoice(request.cookies.get(WORLD_COOKIE)?.value);
  return NextResponse.json({ world });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const world =
    body && typeof body === "object" && "world" in body ? (body as { world: unknown }).world : null;

  if (typeof world !== "string" || !isWorldChoice(world)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, world });
  response.cookies.set({
    name: WORLD_COOKIE,
    value: world,
    path: "/",
    sameSite: "lax",
    maxAge: WORLD_COOKIE_MAX_AGE,
    httpOnly: false,
    secure: request.nextUrl.protocol === "https:",
  });
  return response;
}
