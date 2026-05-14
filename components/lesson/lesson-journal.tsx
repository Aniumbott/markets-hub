"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { Save } from "lucide-react";
import { cn } from "@/lib/cn";

interface LessonJournalProps {
  lessonId: string;
}

export function LessonJournal({ lessonId }: LessonJournalProps) {
  const entry = useStore((s) => s.journal[lessonId]);
  const setJournal = useStore((s) => s.setJournal);
  const [text, setText] = useState(entry?.text ?? "");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setText(entry?.text ?? "");
  }, [entry?.text]);

  useEffect(() => {
    if (text === (entry?.text ?? "")) return;
    setSaved(false);
    const t = setTimeout(() => {
      setJournal(lessonId, text);
      setSaved(true);
      const c = setTimeout(() => setSaved(false), 1500);
      return () => clearTimeout(c);
    }, 600);
    return () => clearTimeout(t);
  }, [text, entry?.text, lessonId, setJournal]);

  return (
    <section className="mx-auto mt-10 max-w-2xl">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Your notes on this lesson
        </h3>
        <span
          className={cn(
            "inline-flex items-center gap-1 text-xs text-ink-3 transition-opacity",
            saved ? "opacity-100" : "opacity-0"
          )}
        >
          <Save className="h-3 w-3" /> Saved
        </span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What clicked? What confused you? Write a sentence for your future self."
        rows={5}
        className="w-full resize-y rounded-lg border border-border bg-surface px-3 py-2 font-serif text-base leading-relaxed text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
      />
    </section>
  );
}
