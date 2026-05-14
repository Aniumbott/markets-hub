"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Blocks } from "@/components/lesson/blocks";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import type { BehavioralBias } from "@/content/types";

interface BiasDetailProps {
  bias: BehavioralBias;
}

export function BiasDetail({ bias }: BiasDetailProps) {
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const markBehavioralComplete = useStore((s) => s.markBehavioralComplete);
  const completed = useStore((s) => Boolean(s.behavioralCompleted[bias.slug]));

  useEffect(() => {
    if (revealed && !completed) {
      markBehavioralComplete(bias.slug);
    }
  }, [revealed, completed, bias.slug, markBehavioralComplete]);

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <header className="border-b border-border pb-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          Behavioral finance
        </span>
        <h1 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          {bias.name}
        </h1>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink-2">
          {bias.oneLiner}
        </p>
      </header>

      <div className="mt-8">
        <Blocks blocks={bias.body} />
      </div>

      {/* Interactive example */}
      <section className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-surface p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Try it on yourself
          </span>
        </div>
        <p className="text-sm text-ink-2 italic">{bias.example.setup}</p>

        <div className="mt-5 space-y-5">
          {bias.example.questions.map((q) => (
            <div key={q.id}>
              <p className="font-sans text-sm font-medium text-ink">
                {q.prompt}
              </p>
              <div className="mt-3 space-y-2">
                {q.choices.map((c, i) => {
                  const selected = answers[q.id] === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        !revealed && setAnswers((a) => ({ ...a, [q.id]: i }))
                      }
                      disabled={revealed}
                      className={
                        "w-full rounded-md border px-3 py-2 text-left text-sm transition-colors " +
                        (selected
                          ? "border-accent bg-accent/10 text-ink"
                          : revealed
                            ? "border-border bg-surface text-ink-2 cursor-default"
                            : "border-border bg-surface text-ink-2 hover:bg-surface-2 hover:text-ink")
                      }
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {!revealed ? (
          <div className="mt-5 flex justify-end">
            <Button
              onClick={() => setRevealed(true)}
              disabled={Object.keys(answers).length < bias.example.questions.length}
            >
              Reveal analysis
            </Button>
          </div>
        ) : (
          <div className="mt-5 rounded-lg border border-accent/30 bg-accent/[0.05] p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Analysis
            </div>
            <p className="mt-2 text-sm text-ink-2">{bias.example.reveal}</p>
          </div>
        )}
      </section>

      {/* Countermeasure */}
      <section className="mx-auto mt-8 max-w-2xl rounded-2xl border border-up/30 bg-up/[0.05] p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-up" />
          <div>
            <h3 className="font-sans text-sm font-semibold text-up">
              Countermeasure
            </h3>
            <p className="mt-2 text-sm text-ink-2">{bias.countermeasure}</p>
          </div>
        </div>
      </section>

      {completed && (
        <div className="mx-auto mt-6 max-w-2xl rounded-md border border-up/30 bg-up/[0.05] p-3 text-center text-xs text-up">
          <CheckCircle2 className="mr-1 inline h-3 w-3" />
          Completed
        </div>
      )}
    </article>
  );
}
