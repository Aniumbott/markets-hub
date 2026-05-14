"use client";

import { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { QuizQuestion } from "@/content/types";

interface QuizProps {
  lessonId: string;
  questions: QuizQuestion[];
}

export function Quiz({ lessonId, questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const previous = useStore((s) => s.quizResults[lessonId]);

  if (questions.length === 0) return null;

  const select = (qid: string, idx: number) => {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qid]: idx }));
  };

  const submit = () => {
    const correct = questions.filter(
      (q) => answers[q.id] === q.correctIndex
    ).length;
    recordQuiz(lessonId, correct, questions.length);
    setSubmitted(true);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;

  return (
    <section
      aria-label="Lesson quiz"
      className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-card"
    >
      <header className="mb-6 flex items-center justify-between gap-2">
        <div>
          <h3 className="font-serif text-xl text-ink">Check your understanding</h3>
          <p className="mt-1 text-xs text-ink-3">
            {questions.length} {questions.length === 1 ? "question" : "questions"}
            {previous &&
              ` · last attempt: ${previous.correct}/${previous.total}`}
          </p>
        </div>
        {submitted && (
          <div
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
              correctCount === questions.length
                ? "bg-up/15 text-up"
                : correctCount >= questions.length / 2
                  ? "bg-warn/15 text-warn"
                  : "bg-down/15 text-down"
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {correctCount}/{questions.length}
          </div>
        )}
      </header>

      <ol className="space-y-6">
        {questions.map((q, qi) => {
          const selected = answers[q.id];
          const isCorrect = submitted && selected === q.correctIndex;
          const isWrong = submitted && selected !== undefined && selected !== q.correctIndex;
          return (
            <li key={q.id}>
              <p className="font-sans text-sm font-medium text-ink">
                {qi + 1}. {q.prompt}
              </p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => {
                  const chosen = selected === oi;
                  const correctChoice = submitted && oi === q.correctIndex;
                  const wrongChoice = submitted && chosen && oi !== q.correctIndex;
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => select(q.id, oi)}
                      disabled={submitted}
                      className={cn(
                        "w-full rounded-md border px-3 py-2 text-left text-sm transition-colors",
                        chosen && !submitted && "border-accent bg-accent/10",
                        !chosen && !submitted && "border-border hover:bg-surface-2",
                        correctChoice && "border-up bg-up/10 text-up",
                        wrongChoice && "border-down bg-down/10 text-down",
                        submitted && "cursor-default"
                      )}
                    >
                      <span className="inline-flex w-full items-start gap-2">
                        <span
                          aria-hidden
                          className={cn(
                            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold",
                            chosen && !submitted && "border-accent bg-accent text-bg",
                            correctChoice && "border-up bg-up text-bg",
                            wrongChoice && "border-down bg-down text-bg",
                            !chosen && !submitted && "border-border-strong text-ink-3"
                          )}
                        >
                          {correctChoice ? <Check className="h-3 w-3" /> : wrongChoice ? <X className="h-3 w-3" /> : String.fromCharCode(65 + oi)}
                        </span>
                        <span>{opt}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p
                  className={cn(
                    "mt-3 rounded-md border px-3 py-2 text-sm",
                    isCorrect
                      ? "border-up/30 bg-up/5 text-up"
                      : isWrong
                        ? "border-ink-3/30 bg-surface-2 text-ink-2"
                        : "border-ink-3/30 bg-surface-2 text-ink-2"
                  )}
                >
                  {q.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <footer className="mt-6 flex items-center justify-end gap-2">
        {submitted ? (
          <Button variant="outline" onClick={reset}>
            Try again
          </Button>
        ) : (
          <Button onClick={submit} disabled={!allAnswered}>
            Check answers
          </Button>
        )}
      </footer>
    </section>
  );
}
