"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { GLOSSARY, searchGlossary } from "@/content/glossary";
import type { GlossaryCategory } from "@/content/types";
import { useStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

const CATEGORY_LABELS: Record<GlossaryCategory, string> = {
  foundations: "Foundations",
  "rates-and-money": "Rates & money",
  "indian-equities": "Indian equities",
  "global-equities": "Global equities",
  forex: "Forex",
  commodities: "Commodities",
  bonds: "Bonds",
  crypto: "Crypto",
  intermarket: "Intermarket",
  risk: "Risk",
  "taxes-india": "Taxes (India)",
};

export function GlossaryExplorer() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "all">("all");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const bilingual = useStore((s) => s.settings.bilingualGlossary);

  useEffect(() => {
    // If the URL has q=slug and it's an exact slug match, open it
    if (initialQ) {
      const match = GLOSSARY.find((g) => g.slug === initialQ);
      if (match) setSelectedSlug(match.slug);
    }
  }, [initialQ]);

  const filtered = useMemo(() => {
    let results = query ? searchGlossary(query) : GLOSSARY;
    if (activeCategory !== "all") {
      results = results.filter((g) => g.category === activeCategory);
    }
    return results.sort((a, b) => a.term.localeCompare(b.term));
  }, [query, activeCategory]);

  const categories: ("all" | GlossaryCategory)[] = [
    "all",
    "foundations",
    "rates-and-money",
    "indian-equities",
    "global-equities",
    "forex",
    "commodities",
    "bonds",
    "crypto",
    "intermarket",
    "risk",
    "taxes-india",
  ];

  const selected = selectedSlug ? GLOSSARY.find((g) => g.slug === selectedSlug) : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <div>
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms — English or Hindi"
            className="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-9 text-sm text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
            aria-label="Search glossary"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-ink-3 hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                activeCategory === c
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border bg-surface text-ink-2 hover:bg-surface-2"
              )}
            >
              {c === "all" ? "All" : CATEGORY_LABELS[c as GlossaryCategory]}
            </button>
          ))}
        </div>

        <p className="mt-3 text-xs text-ink-3">
          {filtered.length} term{filtered.length === 1 ? "" : "s"}
        </p>

        {/* List */}
        <ul className="mt-3 flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
          {filtered.map((term) => {
            const isActive = selectedSlug === term.slug;
            return (
              <li key={term.slug}>
                <button
                  type="button"
                  onClick={() => setSelectedSlug(term.slug)}
                  className={cn(
                    "flex w-full items-baseline gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-2",
                    isActive && "bg-accent/5"
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-sans text-sm font-medium text-ink">
                      {term.term}
                    </span>
                    {bilingual && term.termHi && (
                      <span className="ml-2 text-sm text-ink-3">
                        {term.termHi}
                      </span>
                    )}
                    <p className="mt-0.5 text-xs text-ink-2 line-clamp-1">
                      {term.short}
                    </p>
                  </div>
                  <Badge variant="ghost">
                    {CATEGORY_LABELS[term.category]}
                  </Badge>
                </button>
              </li>
            );
          })}
          {filtered.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-ink-3">
              No terms match. Try a shorter query.
            </li>
          )}
        </ul>
      </div>

      {/* Detail panel */}
      <aside aria-label="Term detail" className="lg:sticky lg:top-20 lg:self-start">
        {selected ? (
          <div className="card p-5">
            <Badge variant="accent">
              {CATEGORY_LABELS[selected.category]}
            </Badge>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              {selected.term}
            </h2>
            {bilingual && selected.termHi && (
              <p className="mt-1 text-base text-ink-3">{selected.termHi}</p>
            )}
            <p className="mt-3 font-serif text-base leading-relaxed text-ink-2">
              {selected.short}
            </p>
            {selected.long && (
              <p className="mt-4 text-sm leading-relaxed text-ink-2">
                {selected.long}
              </p>
            )}
            {selected.example && (
              <div className="mt-4 rounded-md border border-border bg-surface-2 p-3">
                <p className="text-[11px] font-medium uppercase tracking-wider text-accent">
                  Example
                </p>
                <p className="mt-1 text-sm text-ink-2">{selected.example}</p>
              </div>
            )}
            {selected.related && selected.related.length > 0 && (
              <div className="mt-4">
                <p className="text-[11px] font-medium uppercase tracking-wider text-ink-3">
                  Related
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selected.related.map((slug) => {
                    const t = GLOSSARY.find((g) => g.slug === slug);
                    if (!t) return null;
                    return (
                      <button
                        key={slug}
                        type="button"
                        onClick={() => setSelectedSlug(slug)}
                        className="rounded-full border border-border bg-surface px-2 py-0.5 text-xs text-ink-2 hover:bg-surface-2 hover:text-ink"
                      >
                        {t.term}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="card p-5 text-sm text-ink-3">
            Select a term to see the full definition.
          </div>
        )}
      </aside>
    </div>
  );
}
