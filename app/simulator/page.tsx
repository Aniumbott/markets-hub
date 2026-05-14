import { PageHeader } from "@/components/ui/page-header";
import { Simulator } from "@/components/simulator/simulator";

export const metadata = {
  title: "Simulator",
};

export default function SimulatorPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Cause and effect"
        title="Market cascade simulator"
        description="Pick a trigger. Watch the cascade ripple across markets, wave by wave. Each step shows what tends to happen — not a guarantee, but the dominant tendency that experienced traders pattern-match against."
      />
      <div className="mt-10">
        <Simulator />
      </div>
    </div>
  );
}
