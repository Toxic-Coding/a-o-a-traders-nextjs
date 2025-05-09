// app/api/auth/session/route.ts (Session API Endpoint)
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();
  return NextResponse.json({ user: session.user || null });
}
