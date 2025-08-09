'use client';
import Link from 'next/link';
import { productsIndex } from '@/data/products';

function matchesTags(p:any, tags:string[]){
  if(tags.length===0) return true;
  return tags.every(t => p.tags?.includes(t));
}
function matchesQuery(p:any, q:string){
  if(!q) return true;
  const s = (p.name + ' ' + (p.category||'') + ' ' + (p.tags||[]).join(' ')).toLowerCase();
  return s.includes(q.toLowerCase());
}

export default function ProductGrid({ filterCategory, search, tags }: { filterCategory?: string, search?: string, tags?: string[] }){
  let list = productsIndex;
  if(filterCategory) list = list.filter(p=>p.category===filterCategory);
  if(search) list = list.filter(p=>matchesQuery(p, search));
  if(tags && tags.length) list = list.filter(p=>matchesTags(p, tags));
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {list.map(p=>(
        <article key={p.slug} className="card p-5 hover:shadow-lg transition-shadow">
          <img src="/placeholder.svg" alt="" className="h-28 w-full object-cover rounded-2xl mb-4" />
          <h2 className="font-semibold text-base">{p.name}</h2>
          <p className="text-sm text-slate-600">From ${p.baseSqFtPrice}/sq ft</p>
          <div className="mt-3">
            <Link href={`/product/${p.slug}`} className="btn-outline" aria-label={`Configure ${p.name}`}>Configure</Link>
          </div>
        </article>
      ))}
    </div>
  )
}
