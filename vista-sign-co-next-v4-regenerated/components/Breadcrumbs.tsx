'use client';
import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { href?: string, label: string }[] }){
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="flex items-center gap-2 text-slate-600">
        {items.map((it, i)=> (
          <li key={i} className="flex items-center gap-2">
            {it.href ? <Link className="underline" href={it.href}>{it.label}</Link> : <span className="font-medium text-slate-800">{it.label}</span>}
            {i < items.length-1 ? <span className="text-slate-400">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
