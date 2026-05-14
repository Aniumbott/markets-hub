import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { DECISIONS, getDecision } from "@/content/decisions";
import { Flowchart } from "@/components/decisions/flowchart";

interface DecisionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DecisionPage({ params }: DecisionPageProps) {
  const { slug } = await params;
  const decision = getDecision(slug);
  if (!decision) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
      <Link
        href="/decisions"
        className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        All decision aids
      </Link>

      <header className="mt-4 border-b border-border pb-6">
        <h1 className="font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          {decision.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink-2">{decision.description}</p>
      </header>

      <div className="mt-8">
        <Flowchart decision={decision} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return DECISIONS.map((d) => ({ slug: d.slug }));
}
