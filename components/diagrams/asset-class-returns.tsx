"use client";

const ASSETS = [
  { name: "Savings account", real: -2, color: "#DC2626" },
  { name: "FD (30% tax bracket)", real: -0.5, color: "#F97316" },
  { name: "Liquid funds", real: 1.5, color: "#F59E0B" },
  { name: "Debt funds", real: 2.5, color: "#84CC16" },
  { name: "Gold (INR)", real: 5, color: "#22C55E" },
  { name: "Nifty 50 index fund", real: 7, color: "#10B981" },
  { name: "Mid-cap equity", real: 10, color: "#0EA5E9" },
];

export function AssetClassReturnsDiagram() {
  const maxAbs = Math.max(...ASSETS.map((a) => Math.abs(a.real))) + 2;
  const W = 600;
  const barH = 30;
  const gap = 8;
  const H = ASSETS.length * (barH + gap) + 40;
  const labelW = 180;
  const plotW = W - labelW - 60;
  const center = labelW + 20;

  const xFor = (val: number) => center + (val / maxAbs) * (plotW / 2);

  return (
    <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        Long-run real returns (after 5% inflation) — Indian asset classes
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Asset class real returns bar chart">
        {/* center axis */}
        <line
          x1={center}
          y1="10"
          x2={center}
          y2={H - 20}
          stroke="var(--border-strong)"
          strokeWidth="1"
        />

        {/* Scale ticks */}
        {[-2, 0, 2, 4, 6, 8, 10].map((v) => (
          <g key={v}>
            <line
              x1={xFor(v)}
              y1={H - 22}
              x2={xFor(v)}
              y2={H - 18}
              stroke="var(--ink-3)"
              strokeWidth="0.5"
            />
            <text
              x={xFor(v)}
              y={H - 6}
              textAnchor="middle"
              className="fill-[var(--ink-3)] font-sans"
              fontSize="9"
            >
              {v > 0 ? `+${v}%` : `${v}%`}
            </text>
          </g>
        ))}

        {ASSETS.map((a, i) => {
          const y = 10 + i * (barH + gap);
          const width = Math.abs(a.real) * (plotW / 2 / maxAbs);
          const barX = a.real >= 0 ? center : center - width;
          return (
            <g key={i}>
              <text
                x={labelW}
                y={y + barH / 2 + 4}
                textAnchor="end"
                className="fill-[var(--ink-2)] font-sans"
                fontSize="11"
              >
                {a.name}
              </text>
              <rect
                x={barX}
                y={y}
                width={width}
                height={barH}
                fill={a.color}
                fillOpacity="0.25"
                stroke={a.color}
                strokeWidth="1.5"
                rx="3"
              />
              <text
                x={a.real >= 0 ? barX + width + 6 : barX - 6}
                y={y + barH / 2 + 4}
                textAnchor={a.real >= 0 ? "start" : "end"}
                className="fill-[var(--ink)] font-sans"
                fontSize="11"
                fontWeight="600"
                fontFamily="monospace"
              >
                {a.real > 0 ? `+${a.real}%` : `${a.real}%`}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-2 text-center text-xs italic text-ink-3 font-sans not-italic">
        Savings accounts and high-tax-bracket FDs lose purchasing power over time. Equity is the long-run real-return engine.
      </p>
    </figure>
  );
}
