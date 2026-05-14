"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { WEEKS, getAllLessons } from "@/content/curriculum";
import { useStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export function QuizzesOverview() {
  const [mounted, setMounted] = useState(false);
  const quizResults = useStore((s) => s.quizResults);

  useEffect(() => setMounted(true), []);

  const allLessons = getAllLessons();
  const withQuiz = allLessons.filter((l) => l.quiz.length > 0);
  const totalAttempted = mounted ? Object.keys(quizResults).length : 0;
  const totalQ = withQuiz.reduce((sum, l) => sum + l.quiz.length, 0);
  const totalCorrect = mounted
    ? Object.values(quizResults).reduce((s, r) => s + r.correct, 0)
    : 0;
  const totalTaken = mounted
    ? Object.values(quizResults).reduce((s, r) => s + r.total, 0)
    : 0;
  const overallPct = totalTaken > 0 ? Math.round((totalCorrect / totalTaken) * 100) : 0;

  return (
    <div className="flex flex-col gap-10">
      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Quizzes attempted"
          value={mounted ? `${totalAttempted}` : "—"}
          sub={`of ${withQuiz.length} available`}
        />
        <StatCard
          label="Overall accuracy"
          value={mounted ? `${overallPct}%` : "—"}
          sub={`${totalCorrect} correct of ${totalTaken}`}
        />
        <StatCard
          label="Questions in deck"
          value={`${totalQ}`}
          sub="across all written lessons"
        />
      </section>

      {/* Weak areas */}
      {mounted && totalAttempted > 0 && (
        <WeakAreas results={Object.values(quizResults)} />
      )}

      {/* Per-week list */}
      <section className="flex flex-col gap-4">
        {WEEKS.map((week) => {
          const lessons = week.lessons.filter((l) => l.quiz.length > 0);
          if (lessons.length === 0) return null;
          return (
            <article
              key={week.id}
              className="card overflow-hidden"
            >
              <header className="border-b border-border px-5 py-3 flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-ink-3">
                  Week {String(week.id).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-base text-ink">{week.title}</h3>
              </header>
              <ul className="divide-y divide-border">
                {lessons.map((lesson) => {
                  const result = quizResults[lesson.id];
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/lesson/${lesson.id}#quiz`}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-surface-2"
                      >
                        <span className="flex-1 truncate font-sans text-sm text-ink">
                          {lesson.title}
                        </span>
                        {mounted && result ? (
                          <Badge
                            variant={
                              result.correct === result.total
                                ? "up"
                                : result.correct >= result.total / 2
                                  ? "warn"
                                  : "down"
                            }
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            {result.correct}/{result.total}
                          </Badge>
                        ) : (
                          <Badge variant="ghost">
                            {lesson.quiz.length} Q
                          </Badge>
                        )}
                        <ArrowRight className="h-4 w-4 shrink-0 text-ink-3" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="text-sm text-ink-2">{label}</div>
      <div className="mt-2 font-serif text-3xl tracking-tight text-ink">
        {value}
      </div>
      <div className="mt-1 text-xs text-ink-3">{sub}</div>
    </div>
  );
}

function WeakAreas({ results }: { results: { lessonId: string; score: number; correct: number; total: number }[] }) {
  const weakest = [...results]
    .filter((r) => r.score < 0.6)
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  if (weakest.length === 0) return null;

  return (
    <section className="rounded-2xl border border-warn/30 bg-warn/5 p-5">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-warn" />
        <h3 className="font-sans text-sm font-semibold text-warn">
          Worth revisiting
        </h3>
      </div>
      <ul className="mt-3 flex flex-col gap-1">
        {weakest.map((r) => (
          <li key={r.lessonId}>
            <Link
              href={`/lesson/${r.lessonId}`}
              className={cn(
                "flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-warn/10"
              )}
            >
              <span className="font-sans text-ink">
                {r.lessonId.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-warn">
                {Math.round(r.score * 100)}%
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
