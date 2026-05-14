import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { MARKETS } from "@/content/markets";

export const metadata = {
  title: "Markets library",
};

export default function MarketsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Seven markets"
        title="Markets library"
        description="A working reference for each major market: what it is, the key terms, where to track it, and how it specifically affects India."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MARKETS.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/markets/${m.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <h2 className="font-serif text-xl text-ink">{m.name}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-2">{m.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:translate-x-0.5">
                Open <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
