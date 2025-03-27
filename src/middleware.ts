import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Decrypt the session from the cookie
  const refreshToken = (await cookies().get("refreshToken")?.value) ?? "";

  // Redirect to /login if the user is not authenticated
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/dashboard/:path*"],
};
