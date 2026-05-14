import { PageHeader } from "@/components/ui/page-header";
import { ArchetypeQuiz } from "@/components/archetype/quiz";

export const metadata = {
  title: "Archetype quiz",
};

export default function ArchetypePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Know thyself"
        title="Investor archetype quiz"
        description="10 honest questions about your horizon, behavior, and conviction. Result: which of 4 investor archetypes fits you, with a tailored allocation suggestion."
      />
      <div className="mt-10">
        <ArchetypeQuiz />
      </div>
    </div>
  );
}
