import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLogin = false; // ← Hardcoded for demo (normally check cookies/token)

  const pathname = request.nextUrl.pathname;

  if (!isLogin && pathname !== '/home') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/:path*'], // Run middleware on all routes
// };
