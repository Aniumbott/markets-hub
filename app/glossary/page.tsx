import { Suspense } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { GlossaryExplorer } from "@/components/glossary/glossary-explorer";

export const metadata = {
  title: "Glossary",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Reference"
        title="Glossary"
        description="Plain-English definitions of the terms that show up in lessons and case studies. Bilingual where the Hindi term is widely used. Click any term in a lesson to jump straight to it."
      />
      <div className="mt-8">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-surface" />}>
          <GlossaryExplorer />
        </Suspense>
      </div>
    </div>
  );
}
