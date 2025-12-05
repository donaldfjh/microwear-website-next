import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Force HTTPS redirect in production
  if (
    process.env.NODE_ENV === "production" &&
    request.headers.get("x-forwarded-proto") !== "https"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Add security headers
  const response = NextResponse.next();

  // Strict-Transport-Security: Force HTTPS for 1 year
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  // X-Content-Type-Options: Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // X-Frame-Options: Prevent clickjacking
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  // X-XSS-Protection: Enable XSS filter
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Referrer-Policy: Control referrer information
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions-Policy: Control browser features
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
