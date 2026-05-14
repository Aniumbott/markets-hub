"use client";

import { DiagramScroller } from "./diagram-scroller";

const ASSETS = [
  { name: "Cash / Liquid", risk: 1, return: 3, color: "#94A3B8" },
  { name: "FD", risk: 2, return: 7, color: "#64748B" },
  { name: "Short-duration debt", risk: 4, return: 7.5, color: "#10B981" },
  { name: "Long G-Sec", risk: 12, return: 8, color: "#0EA5E9" },
  { name: "Corporate bonds (AAA)", risk: 8, return: 8.5, color: "#06B6D4" },
  { name: "Gold (INR)", risk: 14, return: 10, color: "#F59E0B" },
  { name: "Nifty 50", risk: 18, return: 13, color: "#C2410C" },
  { name: "Indian mid-cap", risk: 26, return: 15, color: "#EC4899" },
  { name: "Indian small-cap", risk: 35, return: 17, color: "#9333EA" },
  { name: "Bitcoin", risk: 65, return: 25, color: "#F97316" },
];

export function RiskReturnScatterDiagram() {
  const W = 600;
  const H = 360;
  const padX = 60;
  const padY = 40;
  const plotW = W - padX * 2;
  const plotH = H - padY * 2;

  const maxRisk = 70;
  const maxReturn = 30;

  const xFor = (r: number) => padX + (r / maxRisk) * plotW;
  const yFor = (ret: number) => padY + plotH - (ret / maxReturn) * plotH;

  return (
    <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        Risk vs return — Indian asset classes (long-run, illustrative)
      </div>
      <DiagramScroller minWidth={560}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Risk vs return scatter plot">
        {/* gridlines */}
        {[0, 5, 10, 15, 20, 25, 30].map((y) => (
          <g key={y}>
            <line
              x1={padX}
              x2={W - padX}
              y1={yFor(y)}
              y2={yFor(y)}
              stroke="var(--border)"
              strokeDasharray="2 4"
              strokeWidth="0.5"
            />
            <text
              x={padX - 8}
              y={yFor(y) + 4}
              textAnchor="end"
              className="fill-[var(--ink-3)] font-sans"
              fontSize="9"
            >
              {y}%
            </text>
          </g>
        ))}

        {[0, 10, 20, 30, 40, 50, 60, 70].map((x) => (
          <text
            key={x}
            x={xFor(x)}
            y={H - 20}
            textAnchor="middle"
            className="fill-[var(--ink-3)] font-sans"
            fontSize="9"
          >
            {x}%
          </text>
        ))}

        {/* Axis labels */}
        <text
          x={W / 2}
          y={H - 6}
          textAnchor="middle"
          className="fill-[var(--ink-2)] font-sans"
          fontSize="11"
          fontWeight="500"
        >
          Annualized volatility (risk) →
        </text>
        <text
          x={20}
          y={H / 2}
          textAnchor="middle"
          className="fill-[var(--ink-2)] font-sans"
          fontSize="11"
          fontWeight="500"
          transform={`rotate(-90 20 ${H / 2})`}
        >
          Expected return →
        </text>

        {/* Efficient frontier (rough indication) */}
        <path
          d={`M ${xFor(1)} ${yFor(3)} Q ${xFor(15)} ${yFor(10)}, ${xFor(35)} ${yFor(17)}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />

        {/* Points */}
        {ASSETS.map((a, i) => (
          <g key={i}>
            <circle
              cx={xFor(a.risk)}
              cy={yFor(a.return)}
              r="8"
              fill={a.color}
              fillOpacity="0.3"
              stroke={a.color}
              strokeWidth="2"
            />
            <text
              x={xFor(a.risk) + (a.risk > 50 ? -12 : 12)}
              y={yFor(a.return) + 4}
              textAnchor={a.risk > 50 ? "end" : "start"}
              className="fill-[var(--ink-2)] font-sans"
              fontSize="10"
            >
              {a.name}
            </text>
          </g>
        ))}
      </svg>
      </DiagramScroller>
      <p className="mt-2 text-center text-xs italic text-ink-3 font-sans not-italic">
        Higher expected returns come with higher risk — but the trade-off isn't linear. The dashed curve roughly marks the efficient frontier.
      </p>
    </figure>
  );
}
