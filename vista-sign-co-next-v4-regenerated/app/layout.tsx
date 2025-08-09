import "./../styles/globals.css";
import Link from "next/link";
import MegaMenu from "@/components/MegaMenu";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: { default: "Vista Sign Co", template: "%s • Vista Sign Co" },
  description: "Trade-ready printing, simplified. Instant quotes and dependable quality.",
  openGraph: {
    title: "Vista Sign Co",
    description: "Trade-ready printing, simplified.",
    type: "website",
    url: "/",
    images: [{ url: "/placeholder.svg", width: 800, height: 450 }]
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">Skip to content</a>
        <header className="sticky top-0 z-50" style={{ background: "var(--brand-dark)" }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center text-white font-bold" aria-label="Vista Sign Co logo">VS</div>
              <Link href="/" className="text-white text-lg font-semibold">Vista Sign Co</Link>
            </div>
            <nav className="hidden md:flex items-center gap-6" aria-label="Main">
              <MegaMenu />
              <Link href="/catalog" className="navlink">All Products</Link>
              <Link href="/upload" className="navlink">Upload Artwork</Link>
              <Link href="/account" className="navlink">Sign In</Link>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="mt-16" style={{ background: "#F8FAFC" }}>
          <div className="container py-12 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="font-bold text-lg mb-2">Vista Sign Co</div>
              <div className="text-slate-600">Wholesale print partner for agencies and installers. Simple pricing, fast turnarounds.</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Catalog</div>
              <ul className="space-y-1 text-slate-600">
                <li>Banners</li><li>Flags</li><li>Banner Stands</li><li>Rigid Signs</li><li>Window Graphics</li><li>Stickers</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-1 text-slate-600">
                <li>About</li><li>Contact</li><li>Trade Program</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="space-y-1 text-slate-600">
                <li>Terms</li><li>Privacy</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
