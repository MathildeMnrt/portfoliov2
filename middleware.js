import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split('/')[1];
  if (!['en', 'fr'].includes(locale)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
  return NextResponse.next();
}