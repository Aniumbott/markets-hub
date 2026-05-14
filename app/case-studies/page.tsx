import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { CASE_STUDIES } from "@/content/case-studies";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Case studies",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Real episodes"
        title="Case studies"
        description="Detailed, dated, price-anchored writeups of episodes worth understanding. The point isn't the price level — it's the chain of cause and effect."
      />
      <ul className="mt-10 flex flex-col gap-4">
        {CASE_STUDIES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/case-studies/${c.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">
                  <Calendar className="h-3 w-3" />
                  {c.date}
                </Badge>
                {c.markets.slice(0, 3).map((m) => (
                  <Badge key={m} variant="ghost">{m}</Badge>
                ))}
              </div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">
                {c.title}
              </h2>
              <p className="text-ink-2">{c.oneLiner}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:translate-x-1">
                Read case study <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
