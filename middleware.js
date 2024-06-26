import { NextResponse } from "next/server";

export async function middleware(request) {
  // Check if the application is running in production
  const isProduction = process.env.NODE_ENV === "production";

  // Redirect only in production
  if (isProduction) {
    const { host, protocol, pathname, search } = new URL(request.url);

    // Check if the request is not HTTPS or not starting with "www."
    if (protocol !== "https:" || !host.startsWith("www.")) {
      // Redirect to the HTTPS and "www" version
      const redirectTo = `https://www.${host.replace(
        "www.",
        ""
      )}${pathname}${search}`;

      return NextResponse.redirect(redirectTo, { status: 301 });
    }
  }

  // Continue with the request
  return NextResponse.next();
}
