"use client";

import { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { ARCHETYPES, ARCHETYPE_QUESTIONS } from "@/content/archetype";
import type { ArchetypeSlug } from "@/content/types";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function ArchetypeQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const setArchetype = useStore((s) => s.setArchetype);
  const savedResult = useStore((s) => s.archetypeResult);

  // If saved, show it by default
  const [showSaved, setShowSaved] = useState(Boolean(savedResult));

  const allAnswered = ARCHETYPE_QUESTIONS.every((q) => answers[q.id] !== undefined);

  const compute = () => {
    const scores: Record<ArchetypeSlug, number> = {
      "conservative-compounder": 0,
      "balanced-builder": 0,
      "growth-seeker": 0,
      "tactical-trader": 0,
    };
    ARCHETYPE_QUESTIONS.forEach((q) => {
      const idx = answers[q.id];
      if (idx === undefined) return;
      const option = q.options[idx];
      (Object.keys(option.scores) as ArchetypeSlug[]).forEach((slug) => {
        scores[slug] += option.scores[slug] ?? 0;
      });
    });
    const winner = (Object.keys(scores) as ArchetypeSlug[]).reduce((best, cur) =>
      scores[cur] > scores[best] ? cur : best
    );
    setArchetype({
      archetype: winner,
      scores,
      takenOn: new Date().toISOString().slice(0, 10),
    });
    setSubmitted(true);
    setShowSaved(true);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowSaved(false);
  };

  const activeResult = submitted ? null : savedResult;
  const showResult = submitted || (showSaved && savedResult);

  if (showResult && savedResult) {
    const a = ARCHETYPES[savedResult.archetype];
    return <ResultView archetype={a} scores={savedResult.scores} onReset={reset} />;
  }

  return (
    <div className="space-y-6">
      {activeResult && (
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm">
          You previously scored as <strong>{ARCHETYPES[activeResult.archetype].name}</strong> on {activeResult.takenOn}.{" "}
          <button
            type="button"
            onClick={() => setShowSaved(true)}
            className="underline text-accent"
          >
            View result
          </button>{" "}
          or retake the quiz below.
        </div>
      )}

      <ol className="space-y-6">
        {ARCHETYPE_QUESTIONS.map((q, qi) => (
          <li key={q.id} className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-sans text-sm font-medium text-ink">
              {qi + 1}. {q.prompt}
            </p>
            <div className="mt-3 space-y-2">
              {q.options.map((opt, oi) => {
                const selected = answers[q.id] === oi;
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                    className={cn(
                      "w-full rounded-md border px-3 py-2 text-left text-sm transition-colors",
                      selected
                        ? "border-accent bg-accent/10 text-ink"
                        : "border-border bg-surface text-ink-2 hover:bg-surface-2 hover:text-ink"
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="flex justify-end">
        <Button onClick={compute} disabled={!allAnswered} size="lg">
          <Sparkles className="h-4 w-4" />
          Reveal your archetype
        </Button>
      </div>
    </div>
  );
}

function ResultView({
  archetype,
  scores,
  onReset,
}: {
  archetype: ReturnType<typeof getArchetype>;
  scores: Record<ArchetypeSlug, number>;
  onReset: () => void;
}) {
  const total = Object.values(scores).reduce((s, v) => s + v, 0);
  const ordered = (Object.keys(scores) as ArchetypeSlug[])
    .map((k) => ({ slug: k, score: scores[k], pct: total > 0 ? (scores[k] / total) * 100 : 0 }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-accent/40 bg-accent/[0.06] p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          Your archetype
        </span>
        <h2 className="mt-2 font-serif text-3xl text-ink">{archetype.name}</h2>
        <p className="mt-1 text-ink-2 italic">{archetype.tagline}</p>
        <p className="mt-3 text-sm text-ink-2">{archetype.description}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-up/30 bg-up/[0.04] p-5">
          <h3 className="font-sans text-sm font-semibold text-up">Strengths</h3>
          <ul className="mt-2 space-y-1">
            {archetype.strengths.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-2">
                <span className="text-up">◆</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-warn/30 bg-warn/[0.04] p-5">
          <h3 className="font-sans text-sm font-semibold text-warn">Watch out for</h3>
          <ul className="mt-2 space-y-1">
            {archetype.watchouts.map((w, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-2">
                <span className="text-warn">◆</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5">
        <h3 className="font-sans text-sm font-semibold text-ink">
          Recommended allocation for you
        </h3>
        <ul className="mt-3 space-y-2">
          {archetype.recommendedAllocation.map((slice, i) => (
            <li key={i}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-2">{slice.label}</span>
                <span className="font-mono text-accent">{slice.pct}%</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-bg">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${slice.pct}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5">
        <h3 className="font-sans text-sm font-semibold text-ink">
          Score across archetypes
        </h3>
        <ul className="mt-3 space-y-2">
          {ordered.map((o, i) => (
            <li key={i}>
              <div className="flex items-center justify-between text-sm">
                <span className={i === 0 ? "font-medium text-ink" : "text-ink-2"}>
                  {ARCHETYPES[o.slug].name}
                </span>
                <span className="font-mono text-xs text-ink-3">
                  {Math.round(o.pct)}%
                </span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-bg">
                <div
                  className={i === 0 ? "h-full bg-accent" : "h-full bg-ink-3"}
                  style={{ width: `${o.pct}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
          Retake quiz
        </Button>
      </div>
    </div>
  );
}

function getArchetype(slug: ArchetypeSlug) {
  return ARCHETYPES[slug];
}
