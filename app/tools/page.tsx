import { PageHeader } from "@/components/ui/page-header";
import { SipCalculator } from "@/components/tools/sip-calculator";
import { EmiCalculator } from "@/components/tools/emi-calculator";
import { CompoundCalculator } from "@/components/tools/compound-calculator";
import { RealReturnCalculator } from "@/components/tools/real-return-calculator";
import { TaxCalculator } from "@/components/tools/tax-calculator";
import { FnoCostCalculator } from "@/components/tools/fno-cost-calculator";
import { PrepayVsInvest } from "@/components/tools/prepay-vs-invest";
import { AllocationVisualizer } from "@/components/tools/allocation-visualizer";

export const metadata = {
  title: "Calculators",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Interactive tools"
        title="Calculators"
        description="Run the math behind real decisions. Every calculator here works offline — drag sliders and see numbers update instantly."
      />

      <div className="mt-10 space-y-8">
        <SipCalculator />
        <CompoundCalculator />
        <RealReturnCalculator />
        <EmiCalculator />
        <PrepayVsInvest />
        <TaxCalculator />
        <FnoCostCalculator />
        <AllocationVisualizer />
      </div>
    </div>
  );
}
