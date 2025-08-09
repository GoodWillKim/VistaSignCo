'use client';
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { categories } from "@/data/products";

export const metadata = {
  title: "Catalog",
  description: "Explore our full catalog of signs, displays, and graphics.",
  alternates: { canonical: "/catalog" }
};

export default function CatalogPage(){
  const sp = useSearchParams();
  const startCat = sp.get('c') || undefined;
  const [cat, setCat] = useState<string|undefined>(startCat);
  const [q, setQ] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const toggleTag = (t:string)=> setTags(s => s.includes(t) ? s.filter(x=>x!==t) : [...s, t]);

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Products</h1>
          <p className="text-slate-600 text-sm">Filter by category, search, or tags.</p>
        </div>
        <div className="flex gap-3" role="search">
          <label className="sr-only" htmlFor="category">Category</label>
          <select id="category" className="input max-w-xs" value={cat||''} onChange={e=>setCat(e.target.value||undefined)}>
            <option value="">All categories</option>
            {categories.map(c=> <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
          <label className="sr-only" htmlFor="search">Search products</label>
          <input id="search" className="input" placeholder="Search products..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6" aria-label="Product tags">
        {['indoor','outdoor','double-sided','lamination','hardware'].map(t=> (
          <button key={t} onClick={()=>toggleTag(t)} className={"px-3 py-1 rounded-xl border " + (tags.includes(t) ? "bg-[color:var(--brand)] text-white border-transparent" : "border-slate-300")} aria-pressed={tags.includes(t)}>{t}</button>
        ))}
      </div>
      <ProductGrid filterCategory={cat} search={q} tags={tags} />
    </div>
  )
}
