import { PageHeader } from "@/components/ui/page-header";
import { PaperPortfolio } from "@/components/portfolio/paper-portfolio";

export const metadata = {
  title: "Paper portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Track without trading"
        title="Paper portfolio"
        description="Define your target allocation, log your actual holdings, see your drift. No live prices — pure tracking. Rebalance signals come from comparing target to actual."
      />
      <div className="mt-10">
        <PaperPortfolio />
      </div>
    </div>
  );
}
