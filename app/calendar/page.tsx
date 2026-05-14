import { PageHeader } from "@/components/ui/page-header";
import { MONTHLY_EVENTS } from "@/content/calendar";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Event calendar",
};

const impactVariant = {
  high: "down" as const,
  medium: "warn" as const,
  low: "ghost" as const,
};

const impactLabel = {
  high: "High impact",
  medium: "Medium impact",
  low: "Low impact",
};

export default function CalendarPage() {
  // Sort by impact descending
  const sorted = [...MONTHLY_EVENTS].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.marketImpact] - order[b.marketImpact];
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Calendar reference"
        title="Monthly cadence of market-moving events"
        description="Not a live calendar — a reference for the events that move markets each month. Knowing the cadence is half the battle: when you see USD/INR spike on a Friday evening, you know what to look up."
      />

      <ul className="mt-10 flex flex-col gap-3">
        {sorted.map((e, i) => (
          <li
            key={i}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-serif text-xl text-ink">{e.name}</h3>
              <Badge variant={impactVariant[e.marketImpact]}>
                {impactLabel[e.marketImpact]}
              </Badge>
              <Badge variant="ghost">{e.cadence}</Badge>
            </div>
            <p className="mt-1 font-mono text-xs text-ink-3">{e.when}</p>
            <p className="mt-3 text-sm text-ink-2">{e.why}</p>
            <p className="mt-3 rounded-md border border-border bg-surface-2 px-3 py-2 text-xs text-ink-2">
              <span className="font-semibold text-ink">Watch for: </span>
              {e.watchFor}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
