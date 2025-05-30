// app/api/auth/session/route.ts (Session API Endpoint)
import { endpoints } from "@/helpers/endpoints";
import { clearSession, getSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (session?.user?.expiresAt <= Date.now()) {
    const res = await fetch(
      `${process.env.BASE_URL}${endpoints.auth.refresh}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: session.user.refresh_token }),
      }
    );
    const newSession = await getSession();
    if (res.ok) {
      const data = await res.json();
      newSession.user.access_token = data.access_token;
      newSession.user.refresh_token = data.refresh_token;
      newSession.user.expiresAt = Date.now() + 55 * 60 * 1000; // Token expires in 55 minutes
      await newSession.save().then(() => {
        console.log("Session updated");
      });
      return NextResponse.json({ user: session.user || null });
    } else {
      await clearSession();
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
  } else {
    return NextResponse.json({ user: session.user || null });
  }
}
