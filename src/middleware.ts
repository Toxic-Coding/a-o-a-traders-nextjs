import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "./lib/session";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const session = await getSession();
  const path = request.nextUrl.pathname;

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

  const protectedPaths = ["/dashboard","/admin", "/profile", "/settings", "/orders"];

  const adminPath = ["/admin"];

  // Redirect authenticated users away from public paths
  if (authPaths.includes(path) && session.user) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (adminPath.includes(path) && session.user.user_role !== "admin") {
    return NextResponse.redirect(new URL("/404", request.nextUrl));
  }

  if (protectedPaths.includes(path) && !session.user) {
    // Redirect unauthenticated users to the sign-in page
    return NextResponse.redirect(new URL(authPaths[0], request.nextUrl));
  }

  // ✅ Restrict based on role
  const userRole = token?.role;

  //   if (userRole && roleRestrictedPaths[userRole]) {
  //     const restrictedPaths = roleRestrictedPaths[userRole];
  //     const isRestricted = restrictedPaths.some((restrictedPath) =>
  //       path.startsWith(restrictedPath)
  //     );

  //     if (isRestricted) {
  //       return NextResponse.redirect(new URL("/unauthorized", request.nextUrl)); // create this page or redirect to home
  //     }
  //   }

  // Check for RefreshAccessTokenError and clear cookies if present
  // if (token?.error === "RefreshAccessTokenError") {
  //   const response = NextResponse.redirect(
  //     new URL("/auth/signin", request.nextUrl),
  //   );
  //   response.cookies.set("next-auth.session-token", "", {
  //     maxAge: 0,
  //     path: "/",
  //   });
  //   response.cookies.set("next-auth.csrf-token", "", { maxAge: 0, path: "/" });
  //   return response;
  // }

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
