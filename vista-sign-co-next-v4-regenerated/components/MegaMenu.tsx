'use client';
import Link from 'next/link';
import { categories } from '@/data/products';
import { useEffect, useRef, useState } from 'react';

export default function MegaMenu(){
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement|null>(null);
  const menuRef = useRef<HTMLDivElement|null>(null);

  useEffect(()=>{
    const onKey = (e: KeyboardEvent)=>{
      if(e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return ()=>window.removeEventListener('keydown', onKey);
  },[]);

  return (
    <div className="relative">
      <button ref={btnRef} className="navlink" aria-haspopup="menu" aria-expanded={open} onClick={()=>setOpen(o=>!o)} onMouseEnter={()=>setOpen(true)}>
        Products
      </button>
      {open && (
        <div ref={menuRef} className="dropdown" role="menu" onMouseLeave={()=>setOpen(false)}>
          {categories.map(c=>(
            <div key={c.slug}>
              <div className="font-semibold mb-1">{c.name}</div>
              <Link role="menuitem" href={`/catalog?c=${c.slug}`} onClick={()=>setOpen(false)}>View {c.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
