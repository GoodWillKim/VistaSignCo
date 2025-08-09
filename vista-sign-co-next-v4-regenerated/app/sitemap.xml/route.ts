import { NextResponse } from 'next/server';
import { productsIndex } from '@/data/products';

export function GET(){
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const urls = [
    `${base}/`,
    `${base}/catalog`,
    `${base}/upload`,
    ...productsIndex.map(p=>`${base}/product/${p.slug}`)
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u=>`<url><loc>${u}</loc></url>`).join('')}
  </urlset>`;
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
