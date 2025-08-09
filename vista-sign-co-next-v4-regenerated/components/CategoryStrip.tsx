'use client';
import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategoryStrip(){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {categories.slice(0,12).map(c=>(
        <Link key={c.slug} href={`/catalog?c=${c.slug}`} className="card p-4 hover:shadow-lg transition-shadow" aria-label={`View ${c.name}`}>
          <img src="/placeholder.svg" alt="" className="h-10 w-full object-cover rounded-xl mb-3" />
          <div className="text-sm font-semibold">{c.name}</div>
        </Link>
      ))}
    </div>
  )
}
