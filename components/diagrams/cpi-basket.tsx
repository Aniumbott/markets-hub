"use client";

const INDIA = [
  { name: "Food & beverages", pct: 45.86, color: "#C2410C" },
  { name: "Miscellaneous", pct: 28.32, color: "#94A3B8" },
  { name: "Housing", pct: 10.07, color: "#10B981" },
  { name: "Fuel & light", pct: 6.84, color: "#F59E0B" },
  { name: "Clothing & footwear", pct: 6.53, color: "#0EA5E9" },
  { name: "Pan, tobacco", pct: 2.38, color: "#8B5CF6" },
];

const US = [
  { name: "Housing/Shelter", pct: 35.0, color: "#10B981" },
  { name: "Transportation", pct: 16.5, color: "#0EA5E9" },
  { name: "Food", pct: 13.5, color: "#C2410C" },
  { name: "Medical care", pct: 7.5, color: "#EC4899" },
  { name: "Recreation", pct: 5.5, color: "#8B5CF6" },
  { name: "Education & communication", pct: 6.0, color: "#9333EA" },
  { name: "Apparel", pct: 2.5, color: "#06B6D4" },
  { name: "Energy", pct: 7.0, color: "#F59E0B" },
  { name: "Other", pct: 6.5, color: "#94A3B8" },
];

function Bar({
  data,
  title,
}: {
  data: { name: string; pct: number; color: string }[];
  title: string;
}) {
  return (
    <div>
      <div className="mb-2 font-sans text-sm font-medium text-ink">{title}</div>
      <div className="flex h-4 w-full overflow-hidden rounded-md">
        {data.map((d, i) => (
          <div
            key={i}
            style={{ width: `${d.pct}%`, background: d.color }}
            title={`${d.name}: ${d.pct.toFixed(1)}%`}
          />
        ))}
      </div>
      <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-sans text-xs">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 shrink-0 rounded"
              style={{ background: d.color }}
            />
            <span className="flex-1 truncate text-ink-2">{d.name}</span>
            <span className="font-mono text-ink-3">{d.pct.toFixed(1)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CPIBasketDiagram() {
  return (
    <figure className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-4 font-sans text-sm font-medium text-ink">
        CPI basket weights — India vs US
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Bar data={INDIA} title="India CPI" />
        <Bar data={US} title="US CPI" />
      </div>
      <p className="mt-4 text-xs italic text-ink-3 font-sans not-italic">
        India's basket is food-heavy (~46%); US is shelter-heavy. A tomato spike moves Indian CPI; the same spike barely registers in US CPI.
      </p>
    </figure>
  );
}
