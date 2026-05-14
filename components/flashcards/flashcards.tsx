"use client";

import { useEffect, useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { GLOSSARY, getTerm } from "@/content/glossary";
import { pickDueCards, type CardState, type Quality } from "@/lib/srs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import { RotateCw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUALITY_LABELS: { q: Quality; label: string; tone: string; hint: string }[] = [
  { q: 0, label: "Blank", tone: "border-down/40 text-down hover:bg-down/10", hint: "No idea" },
  { q: 1, label: "Struggled", tone: "border-warn/40 text-warn hover:bg-warn/10", hint: "Got it with effort" },
  { q: 2, label: "Good", tone: "border-up/30 text-up hover:bg-up/10", hint: "Recalled correctly" },
  { q: 3, label: "Easy", tone: "border-accent/40 text-accent hover:bg-accent/10", hint: "Instant recall" },
];

export function Flashcards() {
  const [mounted, setMounted] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [reviewedThisSession, setReviewedThisSession] = useState(0);

  const cards = useStore((s) => s.cards);
  const ensureCards = useStore((s) => s.ensureCards);
  const review = useStore((s) => s.reviewCard);
  const bilingual = useStore((s) => s.settings.bilingualGlossary);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    // Seed cards lazily — only the first 30 glossary terms become cards by default
    // (so the user isn't overwhelmed). They can add more by clicking terms in lessons.
    const seedSlugs = GLOSSARY.slice(0, 30).map((g) => g.slug);
    ensureCards(seedSlugs);
  }, [mounted, ensureCards]);

  const dueCards = useMemo(() => {
    if (!mounted) return [] as CardState[];
    return pickDueCards(Object.values(cards), 25);
  }, [cards, mounted]);

  const current = dueCards[0];
  const term = current ? getTerm(current.slug) : undefined;

  const onReview = (q: Quality) => {
    if (!current) return;
    review(current.slug, q);
    setFlipped(false);
    setReviewedThisSession((n) => n + 1);
  };

  if (!mounted) {
    return <div className="h-[400px] animate-pulse rounded-2xl bg-surface" />;
  }

  if (!current || !term) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-accent" />
        <h2 className="mt-4 font-serif text-2xl text-ink">No cards due — nice work</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-2">
          {reviewedThisSession > 0
            ? `You've reviewed ${reviewedThisSession} card${reviewedThisSession === 1 ? "" : "s"} today. They'll resurface based on how well you knew them.`
            : "Open a lesson and click any underlined term to add it to your deck. Cards resurface based on how well you recall them."}
        </p>
        <p className="mt-4 text-xs text-ink-3">
          Deck size: {Object.keys(cards).length} cards
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between text-xs text-ink-3">
        <span>
          {dueCards.length} due · reviewed {reviewedThisSession} today
        </span>
        <span>Deck: {Object.keys(cards).length} cards</span>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{
            width: `${reviewedThisSession === 0 ? 0 : (reviewedThisSession / (reviewedThisSession + dueCards.length)) * 100}%`,
          }}
        />
      </div>

      <div className="mt-6 relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug + (flipped ? "-back" : "-front")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="card flex min-h-[280px] flex-col p-8"
          >
            <div className="flex items-center justify-between">
              <Badge variant="ghost">
                {term.category.replace("-", " ")}
              </Badge>
              <Badge variant="ghost">
                {current.reps === 0
                  ? "New"
                  : `Reps ${current.reps} · interval ${current.interval}d`}
              </Badge>
            </div>

            {!flipped ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
                  {term.term}
                </h2>
                {bilingual && term.termHi && (
                  <p className="mt-2 text-base text-ink-3">{term.termHi}</p>
                )}
                <p className="mt-6 text-sm text-ink-3">
                  Recall the definition, then flip.
                </p>
              </div>
            ) : (
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="font-sans text-sm font-semibold text-ink">
                  {term.term}
                </h3>
                <p className="mt-2 font-serif text-lg leading-relaxed text-ink">
                  {term.short}
                </p>
                {term.example && (
                  <p className="mt-3 rounded-md border border-border bg-surface-2 p-3 text-xs text-ink-2">
                    {term.example}
                  </p>
                )}
              </div>
            )}

            {!flipped && (
              <div className="flex justify-center">
                <Button onClick={() => setFlipped(true)}>
                  <RotateCw className="h-4 w-4" />
                  Show answer
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {flipped && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {QUALITY_LABELS.map(({ q, label, tone, hint }) => (
            <button
              key={q}
              type="button"
              onClick={() => onReview(q)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border bg-surface px-3 py-3 transition-colors",
                tone
              )}
            >
              <span className="font-mono text-xs text-ink-3">{q}</span>
              <span className="font-sans text-sm font-medium">{label}</span>
              <span className="text-[10px] text-ink-3">{hint}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
