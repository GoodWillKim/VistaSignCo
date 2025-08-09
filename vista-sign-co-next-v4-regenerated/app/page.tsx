'use client';
import Link from "next/link";
import QuickQuote from "@/components/QuickQuote";
import CategoryStrip from "@/components/CategoryStrip";

export default function HomePage(){
  return (
    <div>
      <section className="bg-slate-50">
        <div className="container py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge" aria-label="Trade friendly">Trade-friendly</span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Trade-Ready Printing, Simplified</h1>
            <p className="mt-4 text-lg text-slate-600">Instant quotes, fast turnaround, and dependable quality for agencies and installers.</p>
            <div className="mt-6 flex gap-3">
              <Link className="btn" href="/catalog">Browse Products</Link>
              <Link className="btn-outline" href="/upload">Start with Artwork</Link>
            </div>
          </div>
          <div className="card p-6" aria-labelledby="quick-quote">
            <h2 id="quick-quote" className="font-semibold mb-3">Quick Quote</h2>
            <QuickQuote />
          </div>
        </div>
      </section>
      <section className="container py-10" aria-label="Popular categories">
        <CategoryStrip />
      </section>
    </div>
  )
}
