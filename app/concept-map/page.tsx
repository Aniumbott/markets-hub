import { PageHeader } from "@/components/ui/page-header";
import { ConceptMapLoader } from "@/components/concept-map/concept-map-loader";

export const metadata = {
  title: "Concept map",
};

export default function ConceptMapPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Intermarket"
        title="The concept map"
        description="The shape of the global financial machine on one canvas. Green edges move together, red move opposite, gray are context. Pan, zoom, click a node for its description."
      />
      <div className="mt-8">
        <ConceptMapLoader />
      </div>
    </div>
  );
}
