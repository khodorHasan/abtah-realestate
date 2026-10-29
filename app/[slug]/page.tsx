import { notFound } from "next/navigation";
import PropertyDetail from "./PropertyDetail";
import properties from "../data/properties.json";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Resolves params for Next.js 15+ while remaining backwards compatible with Next.js 14
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(rawSlug);

  // Match against either decoded or raw slug in properties.json
  const property = properties.find(
    (p) => p.slug === decodedSlug || p.slug === rawSlug,
  );

  if (!property) notFound();

  return <PropertyDetail property={property} />;
}

export function generateStaticParams() {
  // Return the raw slug string; Next.js handles route encoding automatically
  return properties.map((p) => ({
    slug: p.slug,
  }));
}
