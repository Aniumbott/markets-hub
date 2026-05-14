import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Quote } from "lucide-react";
import { INVESTORS, getInvestor } from "@/content/investors";
import { Blocks } from "@/components/lesson/blocks";
import { Badge } from "@/components/ui/badge";

interface InvestorPageProps {
  params: Promise<{ slug: string }>;
}

export default async function InvestorPage({ params }: InvestorPageProps) {
  const { slug } = await params;
  const investor = getInvestor(slug);
  if (!investor) notFound();

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <Link
        href="/investors"
        className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        All investors
      </Link>

      <header className="mt-4 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{investor.nationality}</Badge>
          <Badge variant="ghost">{investor.yearsActive}</Badge>
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          {investor.name}
        </h1>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink-2">
          {investor.tagline}
        </p>
        <p className="mt-3 max-w-2xl text-sm italic text-ink-3">
          Philosophy: {investor.philosophy}
        </p>
      </header>

      <div className="mt-10">
        <Blocks blocks={investor.body} />
      </div>

      <section className="mt-10 rounded-2xl border border-accent/30 bg-accent/[0.05] p-6">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Quotes worth memorizing
        </h3>
        <ul className="mt-3 space-y-3">
          {investor.famousQuotes.map((q, i) => (
            <li key={i} className="flex gap-2">
              <Quote className="mt-1 h-3 w-3 shrink-0 text-accent" />
              <p className="font-serif text-base text-ink-2 italic">"{q}"</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-up/30 bg-up/[0.04] p-6">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-up">
          Key lessons
        </h3>
        <ul className="mt-3 space-y-2">
          {investor.keyLessons.map((l, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-2">
              <span aria-hidden className="text-up">◆</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
          Notable facts
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-ink-2">
          {investor.notable.map((n, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-ink-3">•</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export function generateStaticParams() {
  return INVESTORS.map((i) => ({ slug: i.slug }));
}
