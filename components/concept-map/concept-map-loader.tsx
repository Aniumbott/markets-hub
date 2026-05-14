"use client";

import dynamic from "next/dynamic";

const ConceptMap = dynamic(
  () => import("./concept-map").then((m) => m.ConceptMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] animate-pulse rounded-2xl border border-border bg-surface sm:h-[520px] lg:h-[720px]" />
    ),
  }
);

export function ConceptMapLoader() {
  return <ConceptMap />;
}
