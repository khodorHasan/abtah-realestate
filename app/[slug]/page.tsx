import { notFound } from "next/navigation";
import PropertyDetail from "./PropertyDetail";
import properties from "../data/properties.json";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();
  return <PropertyDetail property={property} />;
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: encodeURIComponent(p.slug) }));
}
