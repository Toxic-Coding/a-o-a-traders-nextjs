import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { clearSession, getSession } from "./lib/session";
import { endpoints } from "./helpers/endpoints";

async function refreshAccessToken(refresh_token: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}${endpoints.auth.refresh}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token }),
      }
    );

    console.log(response.status);

    if (!response.ok)
      throw new Error(`Token refresh failed ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.log("Error refreshing token:", error);

    return null;
  }
}

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // console.log(refreshToken);

  const session = await getSession();
  const path = request.nextUrl.pathname;

  if (session.user && session.user.expiresAt <= Date.now()) {
    const refreshToken = await refreshAccessToken(session?.user.refresh_token);
    if (refreshToken) {
      session.user.expiresAt = Date.now() + 55 * 60 * 1000; // Token expires in 55 minutes
      session.user.access_token = refreshToken?.access_token;
      session.user.refresh_token = refreshToken?.refresh_token;
      await session.save().then(() => {
        console.log("Session updated");
      });
    } else {
      await clearSession();
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
  }

  // Define public paths that do not require authentication
  const authPaths = [
    "/signin",
    "/magic-login",
    "/signup",
    "/verifyemail",
    "/verification-sent",
    "/resetpassword",
    "/forgot-password",
    "/google",
  ];

  const adminPath = ["/admin"];

  const supplierPaths = ["/supplier"];

  const protectedPaths = [...adminPath, ...supplierPaths];

  const redirect = (to: string) =>
    NextResponse.redirect(new URL(to, request.nextUrl));

  // Redirect authenticated users away from public paths

  if (protectedPaths.some((p) => path.startsWith(p)) && !session.user) {
    return redirect("/signin");
  } else if (authPaths.some((p) => path.startsWith(p)) && session.user) {
    return redirect("/");
  } else if (
    adminPath.some((p) => path.startsWith(p)) &&
    session.user &&
    session.user.user_role !== "admin"
  ) {
    return redirect("/");
  } else if (
    supplierPaths.some((p) => path.startsWith(p)) &&
    session.user &&
    session.user.user_role !== "supplier"
  ) {
    return redirect("/");
  } else if (
    !supplierPaths.some((p) => path.startsWith(p)) &&
    session.user &&
    session.user.user_role === "supplier"
  ) {
    return redirect("/supplier");
  } else if (
    !adminPath.some((p) => path.startsWith(p)) &&
    session.user &&
    session.user.user_role === "admin"
  ) {
    return redirect("/admin");
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
