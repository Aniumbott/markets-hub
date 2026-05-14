"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle2, Circle, Clock, Layers } from "lucide-react";
import { WEEKS, PHASE_LABELS } from "@/content/curriculum";
import type { Phase } from "@/content/types";
import { useStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export function CurriculumTree() {
  const completedLessons = useStore((s) => s.completedLessons);
  const lastLessonId = useStore((s) => s.lastLessonId);

  // Group weeks by phase
  const phases: Phase[] = ["foundations", "markets", "connections", "practice"];

  return (
    <div className="flex flex-col gap-10">
      {phases.map((phase) => {
        const phaseWeeks = WEEKS.filter((w) => w.phase === phase);
        if (phaseWeeks.length === 0) return null;
        return (
          <section key={phase}>
            <div className="mb-4 flex items-center gap-3">
              <Layers className="h-4 w-4 text-accent" />
              <h2 className="font-serif text-xl tracking-tight text-ink">
                {PHASE_LABELS[phase]}
              </h2>
              <span className="text-xs text-ink-3">
                {phaseWeeks.length} {phaseWeeks.length === 1 ? "week" : "weeks"}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {phaseWeeks.map((week) => {
                const doneCount = week.lessons.filter(
                  (l) => completedLessons[l.id]
                ).length;
                const totalCount = week.lessons.length;
                const pct = totalCount > 0 ? (doneCount / totalCount) * 100 : 0;
                const hasActive = week.lessons.some(
                  (l) => l.id === lastLessonId
                );
                const fullyWritten = week.lessons.some(
                  (l) => l.body.length > 1
                );

                return (
                  <WeekRow
                    key={week.id}
                    weekId={week.id}
                    title={week.title}
                    blurb={week.blurb}
                    doneCount={doneCount}
                    totalCount={totalCount}
                    pct={pct}
                    defaultOpen={hasActive}
                    fullyWritten={fullyWritten}
                    lessons={week.lessons.map((l) => ({
                      id: l.id,
                      title: l.title,
                      summary: l.summary,
                      minutes: l.minutes,
                      order: l.order,
                      completed: Boolean(completedLessons[l.id]),
                      stub: l.body.length <= 1,
                    }))}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function WeekRow({
  weekId,
  title,
  blurb,
  doneCount,
  totalCount,
  pct,
  defaultOpen,
  fullyWritten,
  lessons,
}: {
  weekId: number;
  title: string;
  blurb: string;
  doneCount: number;
  totalCount: number;
  pct: number;
  defaultOpen: boolean;
  fullyWritten: boolean;
  lessons: {
    id: string;
    title: string;
    summary: string;
    minutes: number;
    order: number;
    completed: boolean;
    stub: boolean;
  }[];
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article
      id={`week-${weekId}`}
      className="card overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-4 py-4 text-left hover:bg-surface-2"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 font-mono text-sm text-ink-2">
          {String(weekId).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-base text-ink sm:text-lg">{title}</h3>
            {doneCount === totalCount && totalCount > 0 && (
              <Badge variant="up">Done</Badge>
            )}
            {!fullyWritten && (
              <Badge variant="ghost">Coming soon</Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-ink-3 line-clamp-1 sm:line-clamp-2">
            {blurb}
          </p>
        </div>
        <div className="hidden flex-col items-end gap-1 sm:flex">
          <span className="text-xs text-ink-3">
            {doneCount}/{totalCount}
          </span>
          <div className="h-1 w-24 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-ink-3 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ol className="border-t border-border bg-bg/40">
          {lessons.map((lesson) => (
            <li key={lesson.id} className="border-b border-border last:border-b-0">
              <Link
                href={`/lesson/${lesson.id}`}
                className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-surface-2 sm:px-6"
              >
                {lesson.completed ? (
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-up" />
                ) : (
                  <Circle className="mt-1 h-4 w-4 shrink-0 text-ink-3" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-[11px] text-ink-3">
                      Lesson {String(lesson.order).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-sans text-sm font-medium",
                        lesson.completed ? "text-ink-2" : "text-ink"
                      )}
                    >
                      {lesson.title}
                    </span>
                    {lesson.stub && (
                      <Badge variant="ghost">Stub</Badge>
                    )}
                  </div>
                  {!lesson.stub && (
                    <p className="mt-0.5 text-xs text-ink-3 line-clamp-2">
                      {lesson.summary}
                    </p>
                  )}
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs text-ink-3">
                  <Clock className="h-3 w-3" /> {lesson.minutes}m
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}
