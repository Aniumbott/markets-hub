import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Calendar } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/content/case-studies";
import { Blocks } from "@/components/lesson/blocks";
import { Badge } from "@/components/ui/badge";
import { CaseTracker } from "@/components/case-studies/case-tracker";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <CaseTracker slug={slug} />
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        All case studies
      </Link>

      <header className="mt-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">
            <Calendar className="h-3 w-3" />
            {cs.date}
          </Badge>
          {cs.markets.map((m) => (
            <Badge key={m} variant="ghost">{m}</Badge>
          ))}
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl text-balance">
          {cs.title}
        </h1>
        <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-ink-2">
          {cs.oneLiner}
        </p>
      </header>

      {/* Timeline */}
      <section className="mt-10">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Timeline
        </h2>
        <ol className="mt-4 relative border-l-2 border-border pl-5">
          {cs.timeline.map((t, i) => (
            <li key={i} className="relative mb-4 last:mb-0">
              <span className="absolute -left-[27px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-accent bg-bg" />
              <div className="text-[11px] font-mono uppercase tracking-wider text-ink-3">
                {t.date}
              </div>
              <p className="mt-0.5 text-sm text-ink-2">{t.event}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Body */}
      <div className="mt-10">
        <Blocks blocks={cs.body} />
      </div>

      {/* Lessons */}
      <section className="mt-10 rounded-2xl border border-accent/40 bg-accent/5 p-6">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Lessons
        </h3>
        <ul className="mt-3 space-y-2">
          {cs.lessons.map((l, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-2">
              <span aria-hidden className="text-accent">◆</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </section>

      {cs.related && cs.related.length > 0 && (
        <section className="mt-10">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
            Related cases
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {cs.related.map((r) => {
              const other = getCaseStudy(r);
              if (!other) return null;
              return (
                <li key={r}>
                  <Link
                    href={`/case-studies/${r}`}
                    className="block rounded-lg border border-border bg-surface px-4 py-3 hover:bg-surface-2"
                  >
                    <span className="font-sans text-sm font-medium text-ink">
                      {other.title}
                    </span>
                    <span className="ml-2 text-xs text-ink-3">{other.date}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </article>
  );
}

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}
