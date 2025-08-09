'use client';
import { useParams } from "next/navigation";
import { productBySlug } from "@/data/products";
import ProductConfigurator from "@/components/ProductConfigurator";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/SEO";

export default function ProductPage(){
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const product = productBySlug(slug);
  if(!product) return <div className="container py-12">Product not found.</div>;

  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name": product.name,
    "description": product.description,
    "category": product.category,
  };

  return (
    <div className="container py-10">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/catalog', label: 'Catalog' }, { label: product.name }]} />
      <ProductConfigurator product={product} />
    </div>
  );
}
