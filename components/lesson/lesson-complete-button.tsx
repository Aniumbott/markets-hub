"use client";

import { Check, Circle } from "lucide-react";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

interface LessonCompleteButtonProps {
  lessonId: string;
}

export function LessonCompleteButton({ lessonId }: LessonCompleteButtonProps) {
  const completed = useStore((s) => Boolean(s.completedLessons[lessonId]));
  const mark = useStore((s) => s.markLessonComplete);
  const unmark = useStore((s) => s.unmarkLessonComplete);

  if (completed) {
    return (
      <Button variant="secondary" onClick={() => unmark(lessonId)}>
        <Check className="h-4 w-4 text-up" />
        Completed — mark as not done
      </Button>
    );
  }

  return (
    <Button onClick={() => mark(lessonId)}>
      <Circle className="h-4 w-4" />
      Mark complete
    </Button>
  );
}
