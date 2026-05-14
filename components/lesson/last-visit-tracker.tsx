"use client";

import { useEffect } from "react";
import { useStore } from "@/lib/store";

export function LastVisitTracker({ lessonId }: { lessonId: string }) {
  const setLastLesson = useStore((s) => s.setLastLesson);
  useEffect(() => {
    setLastLesson(lessonId);
  }, [lessonId, setLastLesson]);
  return null;
}
