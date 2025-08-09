'use client';
import { useState } from 'react';
import { productsIndex } from '@/data/products';
import { useRouter } from 'next/navigation';

export default function QuickQuote(){
  const [slug, setSlug] = useState(productsIndex[0].slug);
  const [w, setW] = useState(72);
  const [h, setH] = useState(36);
  const router = useRouter();
  return (
    <form className="space-y-4" onSubmit={(e)=>{ e.preventDefault(); router.push(`/product/${slug}?w=${w}&h=${h}`); }}>
      <label className="sr-only" htmlFor="prod">Product</label>
      <select id="prod" className="input" value={slug} onChange={e=>setSlug(e.target.value)} aria-label="Choose a product">
        {productsIndex.map(p=>(<option key={p.slug} value={p.slug}>{p.name}</option>))}
      </select>
      <div className="grid grid-cols-2 gap-3">
        <div><label className="label" htmlFor="w">Width (in)</label><input id="w" className="input" type="number" value={w} onChange={e=>setW(+e.target.value)} placeholder="Width (in)" /></div>
        <div><label className="label" htmlFor="h">Height (in)</label><input id="h" className="input" type="number" value={h} onChange={e=>setH(+e.target.value)} placeholder="Height (in)" /></div>
      </div>
      <button className="btn" type="submit">Configure</button>
    </form>
  )
}
