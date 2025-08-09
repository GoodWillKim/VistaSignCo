import { NextResponse } from 'next/server';
export function GET(){
  const body = `User-agent: *\nAllow: /\nSitemap: ${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/sitemap.xml`;
  return new NextResponse(body, { headers: { 'Content-Type': 'text/plain' } });
}
