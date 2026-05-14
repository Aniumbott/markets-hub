import { PageHeader } from "@/components/ui/page-header";
import { DailyHabits } from "@/components/habits/daily-habits";

export const metadata = {
  title: "Daily habits",
};

export default function HabitsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Build the muscle"
        title="Daily habits"
        description="Three small things, every day. Together they build the intuition that takes a beginner to a competent observer of markets. Don't trade off them — just keep showing up."
      />
      <div className="mt-10">
        <DailyHabits />
      </div>
    </div>
  );
}
