import { PageHeader } from "@/components/ui/page-header";
import { CurriculumTree } from "@/components/curriculum/curriculum-tree";

export const metadata = {
  title: "Curriculum",
};

export default function CurriculumPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="The 16-week map"
        title="Curriculum"
        description="Four phases, sixteen weeks, ~80 lessons. Start anywhere — but Week 1 is genuinely worth reading even if you think you know markets. Each lesson takes 6-10 minutes, ends with a short quiz, and leaves space for your own notes."
      />
      <div className="mt-10">
        <CurriculumTree />
      </div>
    </div>
  );
}
