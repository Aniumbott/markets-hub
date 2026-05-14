import { PageHeader } from "@/components/ui/page-header";
import { QuizzesOverview } from "@/components/quizzes/quizzes-overview";

export const metadata = {
  title: "Quizzes",
};

export default function QuizzesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Test yourself"
        title="Quizzes"
        description="Every written lesson ends with 2-3 multiple-choice questions. Track your accuracy, see weak areas, and revisit the lessons where you scored under 60%."
      />
      <div className="mt-10">
        <QuizzesOverview />
      </div>
    </div>
  );
}
