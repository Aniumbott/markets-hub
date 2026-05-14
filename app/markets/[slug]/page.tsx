import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { MARKETS, getMarket } from "@/content/markets";
import { getTerm } from "@/content/glossary";
import { Blocks } from "@/components/lesson/blocks";
import { Badge } from "@/components/ui/badge";

interface MarketPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MarketPage({ params }: MarketPageProps) {
  const { slug } = await params;
  const market = getMarket(slug as never);
  if (!market) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <Link
        href="/markets"
        className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        All markets
      </Link>

      <header className="mt-4 border-b border-border pb-8">
        <Badge variant="accent">Markets library</Badge>
        <h1 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          {market.name}
        </h1>
        <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-ink-2">
          {market.tagline}
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Overview
        </h2>
        <div className="mt-3">
          <Blocks blocks={market.overview} />
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Key terms
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {market.keyTerms.map((slug) => {
            const term = getTerm(slug);
            if (!term) return null;
            return (
              <Link
                key={slug}
                href={`/glossary?q=${slug}`}
                className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-2 hover:bg-surface-2 hover:text-ink"
              >
                {term.term}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          How to track it
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {market.trackers.map((t, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-surface p-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-sans text-sm font-medium text-ink">
                    {t.label}
                  </span>
                  {t.note && (
                    <p className="mt-0.5 text-xs text-ink-3">{t.note}</p>
                  )}
                </div>
                {t.href && (
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    Open <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Indian context
        </h2>
        <div className="mt-3">
          <Blocks blocks={market.indianContext} />
        </div>
      </section>

      {market.caseStudies.length > 0 && (
        <section className="mt-12">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Related case studies
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {market.caseStudies.map((cs) => (
              <li key={cs}>
                <Link
                  href={`/case-studies/${cs}`}
                  className="block rounded-lg border border-border bg-surface px-4 py-3 hover:bg-surface-2"
                >
                  <span className="font-sans text-sm font-medium text-ink">
                    {cs.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return MARKETS.map((m) => ({ slug: m.slug }));
}
