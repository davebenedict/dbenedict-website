import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Extract subdomain
  const subdomain = hostname.split('.')[0];

  // Handle business subdomain
  if (subdomain === 'biz' || hostname.startsWith('biz.')) {
    url.pathname = `/business${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Handle www or main domain - personal site
  if (subdomain === 'www' || !hostname.includes('.') || subdomain === 'localhost:3000' || subdomain.includes('localhost')) {
    url.pathname = `/personal${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|business|personal).*)',
  ],
};
