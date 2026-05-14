"use client";

const SECTORS = [
  { name: "Auto", impact: 4.5, color: "#10B981" },
  { name: "NBFC", impact: 5.2, color: "#22C55E" },
  { name: "Real Estate", impact: 4.0, color: "#84CC16" },
  { name: "Long-dur bonds", impact: 3.5, color: "#0EA5E9" },
  { name: "Mid-cap", impact: 3.0, color: "#06B6D4" },
  { name: "IT", impact: 0.5, color: "#94A3B8" },
  { name: "FMCG", impact: 0.8, color: "#94A3B8" },
  { name: "Banks", impact: -0.5, color: "#F59E0B" },
  { name: "FDs", impact: -3.0, color: "#DC2626" },
];

export function RateCutImpactDiagram() {
  const maxAbs = Math.max(...SECTORS.map((s) => Math.abs(s.impact))) + 1;
  const W = 600;
  const barH = 26;
  const gap = 6;
  const H = SECTORS.length * (barH + gap) + 50;
  const labelW = 150;
  const plotW = W - labelW - 60;
  const center = labelW + 20;

  const xFor = (val: number) => center + (val / maxAbs) * (plotW / 2);

  return (
    <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        50 bps RBI rate cut — typical sector impact (rough 3-month return delta)
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Rate cut impact by sector">
        <line
          x1={center}
          y1="10"
          x2={center}
          y2={H - 30}
          stroke="var(--border-strong)"
        />

        {SECTORS.map((s, i) => {
          const y = 10 + i * (barH + gap);
          const width = Math.abs(s.impact) * (plotW / 2 / maxAbs);
          const barX = s.impact >= 0 ? center : center - width;
          return (
            <g key={i}>
              <text
                x={labelW}
                y={y + barH / 2 + 4}
                textAnchor="end"
                className="fill-[var(--ink-2)] font-sans"
                fontSize="11"
              >
                {s.name}
              </text>
              <rect
                x={barX}
                y={y}
                width={width}
                height={barH}
                fill={s.color}
                fillOpacity="0.3"
                stroke={s.color}
                strokeWidth="1.5"
                rx="3"
              />
              <text
                x={s.impact >= 0 ? barX + width + 6 : barX - 6}
                y={y + barH / 2 + 4}
                textAnchor={s.impact >= 0 ? "start" : "end"}
                className="fill-[var(--ink)] font-sans"
                fontSize="11"
                fontWeight="600"
                fontFamily="monospace"
              >
                {s.impact > 0 ? `+${s.impact}%` : `${s.impact}%`}
              </text>
            </g>
          );
        })}

        <text
          x={center}
          y={H - 10}
          textAnchor="middle"
          className="fill-[var(--ink-3)] font-sans"
          fontSize="9"
        >
          ← lags · neutral · leads →
        </text>
      </svg>
      <p className="mt-2 text-center text-xs italic text-ink-3 font-sans not-italic">
        Rate cuts most help leveraged sectors (auto, NBFC, real estate, long bonds). Hurt FDs immediately. Banks mixed.
      </p>
    </figure>
  );
}
