import { PageHeader } from "@/components/ui/page-header";
import { Flashcards } from "@/components/flashcards/flashcards";

export const metadata = {
  title: "Flashcards",
};

export default function FlashcardsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Spaced repetition"
        title="Flashcards"
        description="A 5-minute drill that resurfaces glossary terms based on how well you knew them. SM-2 algorithm — same logic as Anki. Honest grading is the entire game."
      />
      <div className="mt-10">
        <Flashcards />
      </div>
    </div>
  );
}
