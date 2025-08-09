'use client';
import { useState, useMemo } from 'react';
import { Product } from '@/data/products';
import Toast from '@/components/Toast';

export default function ProductConfigurator({ product }: { product: Product }){
  const [w,setW]=useState(product.minW);
  const [h,setH]=useState(product.minH);
  const [qty,setQty]=useState(1);
  const [opt,setOpt]=useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const area = Math.max((w*h)/144,0);
  const base = Math.max(area*product.baseSqFtPrice,1);
  const linear = 2*(w+h)/12;

  const optionsPrice = product.options.reduce((sum,o)=>{
    if(!opt[o.key]) return sum;
    switch(o.type){
      case 'flat': return sum + o.price;
      case 'perSqFt': return sum + o.price*area;
      case 'linear': return sum + o.price*linear;
      case 'each': return sum + o.price*qty;
      default: return sum;
    }
  },0);

  const total = (base + optionsPrice) * qty;

  const copyQuote = async()=>{
    const txt = `${product.name} — ${w}" x ${h}", qty ${qty} — $${total.toFixed(2)}`;
    try{
      await navigator.clipboard.writeText(txt);
      setCopied(true);
      setTimeout(()=>setCopied(false), 2000);
    }catch{}
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img src="/placeholder.svg" alt="" className="w-full h-72 object-cover rounded-3xl" />
        <div className="mt-3 text-sm text-slate-600">Mock product image. Replace with your own assets.</div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-slate-600 mb-4">{product.description}</p>

        {product.presets?.length ? (
          <div className="mb-4 flex flex-wrap gap-2" aria-label="Common sizes">
            {product.presets.map((p)=> (
              <button key={p.w+'x'+p.h} className="px-3 py-1 rounded-xl border border-slate-300 hover:bg-slate-50"
                onClick={()=>{ setW(p.w); setH(p.h); }} aria-label={`Select ${p.w} by ${p.h}`}>
                {p.w}" × {p.h}"
              </button>
            ))}
          </div>
        ): null}

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div><div className="label">Width (in)</div><input className="input" type="number" min={product.minW} max={product.maxW} value={w} onChange={e=>setW(+e.target.value)} /></div>
          <div><div className="label">Height (in)</div><input className="input" type="number" min={product.minH} max={product.maxH} value={h} onChange={e=>setH(+e.target.value)} /></div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div><div className="label">Quantity</div><input className="input" type="number" min={1} value={qty} onChange={e=>setQty(Math.max(1,+e.target.value))} /></div>
          <div className="grid items-end"><div className="text-sm">Area: <span className="font-semibold">{area.toFixed(2)} sq ft</span></div></div>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-2">Options</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.options.map(o=>(
              <label key={o.key} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={!!opt[o.key]} onChange={e=>setOpt(s=>({...s,[o.key]:e.target.checked}))} />
                <span>{o.label}</span>
                <span className="ml-auto text-slate-500 text-xs">
                  {o.type==='flat' ? `+ $${o.price}` : `+ ${o.price}${o.type==='perSqFt'?"/sq ft": o.type==='linear'?"/lf": o.type==='each'?" ea":""}`}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between py-3 border-t">
          <div>
            <div className="text-sm text-slate-500">Estimated Total</div>
            <div className="text-2xl font-bold">${total.toFixed(2)}</div>
          </div>
          <div className="flex gap-2">
            <button className="btn-outline" onClick={copyQuote}>Copy quote</button>
            <button className="btn" disabled>Checkout (Stripe later)</button>
          </div>
        </div>
        {copied ? <Toast message="Copied to clipboard" /> : null}
      </div>
    </div>
  )
}
