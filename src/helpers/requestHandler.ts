// lib/api.ts

import { clearSession, getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { endpoints } from "./endpoints";

export async function refreshAccessToken(refreshToken: string) {
  try {
    const response = await fetch(`${process.env.API_URL}${endpoints.auth.refresh}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) throw new Error("Token refresh failed");

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function authenticatedFetch(
  path: string,
  options: RequestInit = {}
) {
  const session = await getSession();

  if (!session.user) {
    redirect("/signin");
  }

  // Check token expiration
  // if (session.user.expiresAt <= Date.now()) {
  //   const newTokens = await refreshAccessToken(session.user.refresh_token);

  //   if (!newTokens) {
  //     await clearSession();
  //     redirect("/signin");
  //   }

  //   session.user.access_token = newTokens.accessToken;
  //   session.user.refresh_token = newTokens.refreshToken;
  //   session.user.expiresAt = Date.now() + 55 * 60 * 1000;
  //   await session.save();
  // }

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${session.user.access_token}`);

  return fetch(`${process.env.BASE_URL}${path}`, {
    ...options,
    headers,
  });
}

export async function Fetch(
  path: string,
  options: RequestInit = {}
) {
  return fetch(`${process.env.BASE_URL}${path}`, options);
}