"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Flame,
  BookOpen,
  ListChecks,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Calendar,
  Workflow,
} from "lucide-react";
import { useStore } from "@/lib/store";
import { WEEKS, getLesson, getAllLessons, getNextLesson } from "@/content/curriculum";
import { GLOSSARY } from "@/content/glossary";
import { pickDueCards } from "@/lib/srs";
import { ymd, daysBetween } from "@/lib/date";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const streak = useStore((s) => s.streak);
  const lastStudyDate = useStore((s) => s.lastStudyDate);
  const totalStudyDays = useStore((s) => s.totalStudyDays);
  const completedLessons = useStore((s) => s.completedLessons);
  const lastLessonId = useStore((s) => s.lastLessonId);
  const cards = useStore((s) => s.cards);
  const habits = useStore((s) => s.habits);

  useEffect(() => setMounted(true), []);

  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const completedCount = Object.keys(completedLessons).length;
  const overallPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Streak validity — break it if lastStudyDate was more than 1 day ago
  const today = ymd();
  const liveStreak =
    !lastStudyDate || daysBetween(lastStudyDate, today) > 1 ? 0 : streak;

  // Today's recommended lesson
  const resumeLesson = lastLessonId ? getLesson(lastLessonId) : undefined;
  let recommended = resumeLesson && !completedLessons[resumeLesson.id]
    ? resumeLesson
    : undefined;
  if (!recommended) {
    recommended = allLessons.find((l) => !completedLessons[l.id]);
  }
  const next = recommended ? getNextLesson(recommended.id) : undefined;

  // Flashcards due
  const dueCardCount = mounted ? pickDueCards(Object.values(cards), 9999).length : 0;
  const totalCards = mounted ? Object.keys(cards).length : 0;

  // Today's habits
  const todayHabits = habits[today];
  const habitsDoneCount =
    (todayHabits?.bidAsk ? 1 : 0) +
    (todayHabits?.whyItMoved ? 1 : 0) +
    (todayHabits?.newTerm ? 1 : 0);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8 lg:py-12">
      <header className="flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {mounted && liveStreak > 0
            ? `Day ${totalStudyDays} of your journey`
            : "Welcome"}
        </span>
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-ink text-balance sm:text-5xl">
          {mounted && liveStreak > 0
            ? "Pick up where you left off"
            : "16 weeks. Indian and global markets. One hub."}
        </h1>
        <p className="max-w-2xl text-ink-2 text-pretty">
          A self-paced curriculum that connects Indian equities to global rates,
          oil, gold, crypto — and the chains between them. Read a lesson, take
          the quiz, build a streak.
        </p>
      </header>

      {/* Resume / today */}
      <section
        aria-label="Today's focus"
        className="mt-10 grid gap-4 lg:grid-cols-3"
      >
        {/* Big resume card */}
        {recommended && (
          <Link
            href={`/lesson/${recommended.id}`}
            className="group relative col-span-1 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong lg:col-span-2"
          >
            <div className="absolute right-6 top-6">
              <ArrowRight className="h-5 w-5 text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">Today's lesson</Badge>
              <Badge variant="ghost">Week {recommended.weekId}</Badge>
              <Badge variant="ghost">{recommended.minutes} min read</Badge>
            </div>
            <h2 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-3xl">
              {recommended.title}
            </h2>
            <p className="mt-2 max-w-xl text-ink-2">{recommended.summary}</p>
            {next && (
              <p className="mt-6 inline-flex items-center gap-1 text-xs text-ink-3">
                Up next: <span className="text-ink-2">{next.title}</span>
              </p>
            )}
          </Link>
        )}

        {/* Streak card */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2">
            <Flame
              className={cn(
                "h-5 w-5",
                liveStreak > 0 ? "text-accent" : "text-ink-3"
              )}
            />
            <span className="text-sm font-medium text-ink-2">Daily streak</span>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-serif text-5xl font-medium tracking-tight text-ink">
              {mounted ? liveStreak : 0}
            </span>
            <span className="pb-2 text-sm text-ink-3">days</span>
          </div>
          <p className="mt-3 text-xs text-ink-3">
            {mounted
              ? liveStreak === 0
                ? "Mark a lesson complete or review a flashcard to start."
                : `${totalStudyDays} total study days · keep it going`
              : "Loading..."}
          </p>
        </div>
      </section>

      {/* Stat cards */}
      <section
        aria-label="Progress at a glance"
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard
          icon={BookOpen}
          label="Curriculum"
          value={mounted ? `${completedCount}/${totalLessons}` : "—"}
          sub={mounted ? `${overallPct}% complete` : ""}
          href="/curriculum"
        />
        <StatCard
          icon={Sparkles}
          label="Flashcards due"
          value={mounted ? `${dueCardCount}` : "—"}
          sub={mounted ? `${totalCards} cards in deck` : ""}
          href="/flashcards"
        />
        <StatCard
          icon={ListChecks}
          label="Daily habits"
          value={mounted ? `${habitsDoneCount}/3` : "—"}
          sub="Today"
          href="/habits"
        />
        <StatCard
          icon={Workflow}
          label="Simulator"
          value={mounted ? "3" : "—"}
          sub="Scenarios available"
          href="/simulator"
        />
      </section>

      {/* Weeks grid */}
      <section aria-label="Curriculum overview" className="mt-12">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl text-ink">The 16-week map</h2>
            <p className="mt-1 text-sm text-ink-3">
              Four phases. Twelve weeks of solo markets, then four weeks of
              connections and practice.
            </p>
          </div>
          <Link
            href="/curriculum"
            className="hidden text-sm font-medium text-accent hover:underline sm:inline-flex"
          >
            Open curriculum →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {WEEKS.map((week) => {
            const lessonsCount = week.lessons.length;
            const doneCount = week.lessons.filter(
              (l) => completedLessons[l.id]
            ).length;
            const pct = lessonsCount > 0 ? (doneCount / lessonsCount) * 100 : 0;
            const isCurrent = recommended?.weekId === week.id;
            return (
              <Link
                key={week.id}
                href={`/curriculum#week-${week.id}`}
                className={cn(
                  "card group flex h-full flex-col gap-3 p-4 transition-colors hover:border-border-strong",
                  isCurrent && "border-accent/40 ring-1 ring-accent/30"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-3">
                    Week {String(week.id).padStart(2, "0")}
                  </span>
                  {doneCount === lessonsCount && lessonsCount > 0 && (
                    <Badge variant="up">Done</Badge>
                  )}
                  {isCurrent && doneCount < lessonsCount && (
                    <Badge variant="accent">Current</Badge>
                  )}
                </div>
                <h3 className="font-serif text-base leading-tight text-ink line-clamp-2">
                  {week.title}
                </h3>
                <div className="mt-auto">
                  <div className="flex justify-between text-[11px] text-ink-3">
                    <span>{mounted ? `${doneCount}/${lessonsCount}` : `0/${lessonsCount}`}</span>
                    <span>{mounted ? `${Math.round(pct)}%` : "0%"}</span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-accent transition-all"
                      style={{ width: mounted ? `${pct}%` : "0%" }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Random glossary term card */}
      {mounted && (
        <section className="mt-12">
          <RandomTermCard />
        </section>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong"
    >
      <div className="flex items-center gap-2 text-sm text-ink-2">
        <Icon className="h-4 w-4 text-ink-3" />
        {label}
      </div>
      <div className="mt-2 font-serif text-3xl tracking-tight text-ink">
        {value}
      </div>
      <div className="mt-1 text-xs text-ink-3">{sub}</div>
    </Link>
  );
}

function RandomTermCard() {
  const seed = Math.floor((Date.now() / 86400000) % GLOSSARY.length);
  const term = GLOSSARY[seed];
  return (
    <Link
      href={`/glossary?q=${term.slug}`}
      className="group flex items-start gap-4 rounded-2xl border border-border bg-surface-2 p-6 transition-colors hover:border-border-strong"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
        <TrendingUp className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          Term of the day
        </div>
        <div className="mt-1 font-serif text-xl text-ink">{term.term}</div>
        <p className="mt-1 text-sm text-ink-2 line-clamp-2">{term.short}</p>
      </div>
      <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-ink-3 group-hover:translate-x-1 group-hover:text-accent" />
    </Link>
  );
}
