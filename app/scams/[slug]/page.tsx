import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, AlertTriangle, ShieldCheck } from "lucide-react";
import { SCAMS, getScam } from "@/content/scams";

interface ScamPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ScamPage({ params }: ScamPageProps) {
  const { slug } = await params;
  const scam = getScam(slug);
  if (!scam) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
      <Link
        href="/scams"
        className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        All scams
      </Link>

      <header className="mt-4 border-b border-border pb-6">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-down">
          <ShieldAlert /> Scam
        </span>
        <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          {scam.name}
        </h1>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink-2">
          {scam.oneLiner}
        </p>
      </header>

      <section className="mt-8 prose-reader mx-auto">
        <h2>How it works</h2>
        <p>{scam.howItWorks}</p>
      </section>

      <section className="mt-8 rounded-2xl border border-down/30 bg-down/[0.04] p-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-down" />
          <h3 className="font-sans text-sm font-semibold text-down">Red flags</h3>
        </div>
        <ul className="mt-3 space-y-1.5">
          {scam.redFlags.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-2">
              <span aria-hidden className="text-down">⚠</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
          Real Indian examples
        </h3>
        <ul className="mt-3 space-y-3">
          {scam.realIndianExamples.map((e, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-sm font-semibold text-ink">
                  {e.name}
                </span>
                <span className="font-mono text-xs text-ink-3">{e.year}</span>
              </div>
              <p className="mt-1 text-sm text-ink-2">{e.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-up/30 bg-up/[0.05] p-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-up" />
          <h3 className="font-sans text-sm font-semibold text-up">
            How to protect yourself
          </h3>
        </div>
        <ul className="mt-3 space-y-1.5">
          {scam.howToProtect.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-2">
              <span aria-hidden className="text-up">◆</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function ShieldAlert() {
  return (
    <span aria-hidden className="inline-block h-3 w-3 rounded-full bg-down" />
  );
}

export function generateStaticParams() {
  return SCAMS.map((s) => ({ slug: s.slug }));
}
