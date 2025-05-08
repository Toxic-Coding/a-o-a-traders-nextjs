// lib/api.ts

import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function refreshAccessToken(refreshToken: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/refresh`, {
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
  url: string,
  options: RequestInit = {}
) {
  const session = await getSession();

  if (!session.user) {
    redirect("/login");
  }

  // Check token expiration
  // if (session.user.expiresAt <= Date.now()) {
  //   const newTokens = await refreshAccessToken(session.user.refreshToken);

  //   if (!newTokens) {
  //     await clearSession();
  //     redirect("/login");
  //   }

  //   session.user.accessToken = newTokens.accessToken;
  //   session.user.refreshToken = newTokens.refreshToken;
  //   session.user.expiresAt = Date.now() + newTokens.expiresIn * 1000;
  //   await session.save();
  // }

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${session.user.access_token}`);

  return fetch(url, {
    ...options,
    headers,
  });
}
