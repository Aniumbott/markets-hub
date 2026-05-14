import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { INVESTORS } from "@/content/investors";

export const metadata = {
  title: "Famous investors",
};

export default function InvestorsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Stand on shoulders"
        title="Famous investors"
        description="Six investors whose ideas have shaped how money is made. Three global legends, three Indian masters. Read their philosophy, key bets, and what generalises to your own portfolio."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {INVESTORS.map((i) => (
          <li key={i.slug}>
            <Link
              href={`/investors/${i.slug}`}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <User className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl text-ink">{i.name}</h2>
                  <p className="text-xs text-ink-3">
                    {i.nationality} · {i.yearsActive}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-ink-2">{i.tagline}</p>
              <p className="text-xs text-ink-3 italic">"{i.philosophy}"</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:translate-x-0.5">
                Read profile <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
