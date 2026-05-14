import { PageHeader } from "@/components/ui/page-header";
import { BadgeGrid } from "@/components/achievements/badge-grid";

export const metadata = {
  title: "Achievements",
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Milestones"
        title="Achievements"
        description="15 badges to earn over the course of the curriculum. They unlock as you complete lessons, build streaks, explore scenarios, and develop your investing practice."
      />
      <div className="mt-10">
        <BadgeGrid />
      </div>
    </div>
  );
}
