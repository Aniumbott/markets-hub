import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { getLesson, getNextLesson, getPrevLesson, WEEKS } from "@/content/curriculum";
import { Blocks } from "@/components/lesson/blocks";
import { Quiz } from "@/components/lesson/quiz";
import { LessonJournal } from "@/components/lesson/lesson-journal";
import { LessonCompleteButton } from "@/components/lesson/lesson-complete-button";
import { LastVisitTracker } from "@/components/lesson/last-visit-tracker";
import { Badge } from "@/components/ui/badge";

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();

  const week = WEEKS.find((w) => w.id === lesson.weekId)!;
  const prev = getPrevLesson(id);
  const next = getNextLesson(id);

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <LastVisitTracker lessonId={id} />

      <Link
        href="/curriculum"
        className="inline-flex items-center gap-1 text-sm text-ink-3 hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        All weeks
      </Link>

      <header className="mt-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">Week {week.id}</Badge>
          <Badge variant="ghost">Lesson {lesson.order}</Badge>
          <Badge variant="ghost">
            <Clock className="h-3 w-3" /> {lesson.minutes} min
          </Badge>
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink text-balance sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-ink-2 text-pretty">
          {lesson.summary}
        </p>
      </header>

      <div className="mt-10">
        <Blocks blocks={lesson.body} />
      </div>

      {lesson.quiz.length > 0 && (
        <Quiz lessonId={lesson.id} questions={lesson.quiz} />
      )}

      <LessonJournal lessonId={lesson.id} />

      <div className="mx-auto mt-10 flex max-w-2xl items-center justify-between border-t border-border pt-6">
        <LessonCompleteButton lessonId={lesson.id} />
      </div>

      <nav
        aria-label="Lesson navigation"
        className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/lesson/${prev.id}`}
            className="card flex flex-col gap-1 p-4 hover:border-border-strong"
          >
            <span className="inline-flex items-center gap-1 text-xs text-ink-3">
              <ChevronLeft className="h-3 w-3" /> Previous
            </span>
            <span className="font-serif text-sm text-ink line-clamp-2">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/lesson/${next.id}`}
            className="card flex flex-col gap-1 p-4 text-right hover:border-border-strong"
          >
            <span className="inline-flex items-center justify-end gap-1 text-xs text-ink-3">
              Next <ChevronRight className="h-3 w-3" />
            </span>
            <span className="font-serif text-sm text-ink line-clamp-2">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}

export function generateStaticParams() {
  return WEEKS.flatMap((w) => w.lessons.map((l) => ({ id: l.id })));
}
