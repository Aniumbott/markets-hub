import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { BIASES, getBias } from "@/content/behavioral";
import { BiasDetail } from "@/components/behavioral/bias-detail";

interface BiasPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BiasPage({ params }: BiasPageProps) {
  const { slug } = await params;
  const bias = getBias(slug);
  if (!bias) notFound();

  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 pt-6 lg:px-8 lg:pt-8">
        <Link
          href="/behavioral"
          className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
        >
          <ChevronLeft className="h-4 w-4" />
          All biases
        </Link>
      </div>
      <BiasDetail bias={bias} />
    </>
  );
}

export function generateStaticParams() {
  return BIASES.map((b) => ({ slug: b.slug }));
}
