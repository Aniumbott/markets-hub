"use client";

import { useEffect } from "react";
import { useStore } from "@/lib/store";

export function CaseTracker({ slug }: { slug: string }) {
  const markCaseRead = useStore((s) => s.markCaseRead);
  useEffect(() => {
    markCaseRead(slug);
  }, [slug, markCaseRead]);
  return null;
}
