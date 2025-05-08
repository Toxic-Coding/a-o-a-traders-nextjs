"use server";
import { cookies } from "next/headers";

export async function getAuthSession() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");
  return authCookie ? authCookie.value : null;
}
