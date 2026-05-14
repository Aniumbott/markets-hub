"use client";

const NIFTY_SECTORS = [
  { name: "Financial Services", pct: 33.5, color: "#C2410C" },
  { name: "IT", pct: 13.2, color: "#9333EA" },
  { name: "Oil & Gas", pct: 9.8, color: "#0EA5E9" },
  { name: "Consumer Goods", pct: 9.5, color: "#10B981" },
  { name: "Auto", pct: 7.4, color: "#F59E0B" },
  { name: "Healthcare", pct: 4.1, color: "#EC4899" },
  { name: "Metals", pct: 3.8, color: "#64748B" },
  { name: "Construction", pct: 3.5, color: "#8B5CF6" },
  { name: "Telecom", pct: 3.2, color: "#06B6D4" },
  { name: "Others", pct: 12.0, color: "#94A3B8" },
];

const SP_SECTORS = [
  { name: "Technology", pct: 30.5, color: "#9333EA" },
  { name: "Financials", pct: 13.0, color: "#C2410C" },
  { name: "Healthcare", pct: 12.0, color: "#EC4899" },
  { name: "Consumer Discretionary", pct: 10.5, color: "#F59E0B" },
  { name: "Communication Services", pct: 8.5, color: "#06B6D4" },
  { name: "Industrials", pct: 8.0, color: "#10B981" },
  { name: "Consumer Staples", pct: 6.0, color: "#84CC16" },
  { name: "Energy", pct: 4.0, color: "#0EA5E9" },
  { name: "Utilities", pct: 2.5, color: "#64748B" },
  { name: "Materials", pct: 2.5, color: "#8B5CF6" },
  { name: "Real Estate", pct: 2.5, color: "#A78BFA" },
];

interface SectorDonutProps {
  index?: "nifty" | "sp500";
}

export function SectorDonutDiagram({ index = "nifty" }: SectorDonutProps) {
  const sectors = index === "nifty" ? NIFTY_SECTORS : SP_SECTORS;
  const total = sectors.reduce((s, x) => s + x.pct, 0);

  const cx = 110;
  const cy = 110;
  const r = 80;
  const innerR = 50;

  let cumulative = 0;
  const arcs = sectors.map((s) => {
    const startAngle = (cumulative / total) * 360 - 90;
    cumulative += s.pct;
    const endAngle = (cumulative / total) * 360 - 90;
    const largeArc = s.pct / total > 0.5 ? 1 : 0;
    const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
    const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180);
    const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
    const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);
    const x3 = cx + innerR * Math.cos((endAngle * Math.PI) / 180);
    const y3 = cy + innerR * Math.sin((endAngle * Math.PI) / 180);
    const x4 = cx + innerR * Math.cos((startAngle * Math.PI) / 180);
    const y4 = cy + innerR * Math.sin((startAngle * Math.PI) / 180);

    return {
      ...s,
      d: `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`,
    };
  });

  return (
    <figure className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        {index === "nifty" ? "Nifty 50 sector weights" : "S&P 500 sector weights"}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <svg viewBox="0 0 220 220" role="img" aria-label="Sector composition donut chart">
          {arcs.map((a, i) => (
            <path key={i} d={a.d} fill={a.color} stroke="var(--surface)" strokeWidth="1" />
          ))}
          <text
            x={cx}
            y={cy - 4}
            textAnchor="middle"
            className="fill-[var(--ink-3)] font-sans"
            fontSize="9"
            fontFamily="monospace"
          >
            {index === "nifty" ? "NIFTY 50" : "S&P 500"}
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            className="fill-[var(--ink)] font-sans"
            fontSize="11"
            fontWeight="600"
          >
            ~{total.toFixed(0)}%
          </text>
        </svg>

        <ul className="space-y-1 font-sans">
          {sectors.map((s, i) => (
            <li key={i} className="flex items-center gap-2 text-xs">
              <span
                aria-hidden
                className="inline-block h-3 w-3 shrink-0 rounded"
                style={{ background: s.color }}
              />
              <span className="flex-1 truncate text-ink-2">{s.name}</span>
              <span className="font-mono text-ink-3">{s.pct.toFixed(1)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
