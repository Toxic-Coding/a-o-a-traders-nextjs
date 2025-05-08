// lib/session.ts
import { getIronSession, IronSessionData } from "iron-session";
import { cookies } from "next/headers";

// "access_token": "string",
// "refresh_token": "string",
// "token_type": "string",
// "user_role": "string",
// "user_id": 0

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      user_id: number;
      access_token: string;
      refresh_token: string;
      user_role: string;
    };
  }
}

const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "auth-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<IronSessionData>(cookieStore, sessionOptions);
}

export async function clearSession() {
  const session = await getSession();
  session.destroy();
}
