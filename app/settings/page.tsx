import { PageHeader } from "@/components/ui/page-header";
import { SettingsPanel } from "@/components/settings/settings-panel";

export const metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Configuration"
        title="Settings"
        description="Tweak how the platform behaves and back up your progress."
      />
      <div className="mt-10">
        <SettingsPanel />
      </div>
    </div>
  );
}
