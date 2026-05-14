"use client";

import { useState } from "react";

interface Slice {
  label: string;
  value: number;
  color: string;
}

const PRESETS = {
  conservative: { equity: 30, intl: 5, debt: 50, gold: 12, cash: 3 },
  balanced: { equity: 50, intl: 15, debt: 25, gold: 8, cash: 2 },
  growth: { equity: 65, intl: 18, debt: 12, gold: 5, cash: 0 },
  aggressive: { equity: 75, intl: 18, debt: 5, gold: 2, cash: 0 },
};

export function AllocationVisualizer() {
  const [equity, setEquity] = useState(55);
  const [intl, setIntl] = useState(15);
  const [debt, setDebt] = useState(20);
  const [gold, setGold] = useState(8);
  const [cash, setCash] = useState(2);

  const total = equity + intl + debt + gold + cash;
  const slices: Slice[] = [
    { label: "Indian equity", value: equity, color: "#C2410C" },
    { label: "International", value: intl, color: "#9333EA" },
    { label: "Debt", value: debt, color: "#0EA5E9" },
    { label: "Gold", value: gold, color: "#F59E0B" },
    { label: "Cash", value: cash, color: "#94A3B8" },
  ];

  // Risk score (simplified)
  const riskScore = Math.round(
    equity * 1.0 + intl * 0.9 + gold * 0.4 + debt * 0.15 + cash * 0
  );

  const cx = 110;
  const cy = 110;
  const r = 80;
  const innerR = 50;
  let cumulative = 0;
  const arcs = slices.map((s) => {
    const startAngle = (cumulative / total) * 360 - 90;
    cumulative += s.value;
    const endAngle = (cumulative / total) * 360 - 90;
    const largeArc = s.value / total > 0.5 ? 1 : 0;
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

  const applyPreset = (k: keyof typeof PRESETS) => {
    const p = PRESETS[k];
    setEquity(p.equity);
    setIntl(p.intl);
    setDebt(p.debt);
    setGold(p.gold);
    setCash(p.cash);
  };

  return (
    <article className="rounded-2xl border border-border bg-surface p-5 lg:p-6">
      <header>
        <h3 className="font-serif text-xl tracking-tight text-ink">
          Allocation visualizer
        </h3>
        <p className="mt-1 text-sm text-ink-2">
          Build your target portfolio split. See risk profile + visual donut. Use presets as starting points.
        </p>
      </header>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-xs text-ink-3">Preset:</span>
        {(Object.keys(PRESETS) as (keyof typeof PRESETS)[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => applyPreset(k)}
            className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-2 hover:bg-surface-2"
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_240px]">
        <div className="space-y-3">
          <AllocSlider label="Indian equity" value={equity} color="#C2410C" onChange={setEquity} />
          <AllocSlider label="International equity" value={intl} color="#9333EA" onChange={setIntl} />
          <AllocSlider label="Debt" value={debt} color="#0EA5E9" onChange={setDebt} />
          <AllocSlider label="Gold (SGB/ETF)" value={gold} color="#F59E0B" onChange={setGold} />
          <AllocSlider label="Cash" value={cash} color="#94A3B8" onChange={setCash} />

          <div className="rounded-md border border-border bg-bg p-3 text-xs">
            <div className="flex justify-between">
              <span className="text-ink-3">Total</span>
              <span className={total === 100 ? "text-up" : "text-down"}>
                {total}%
              </span>
            </div>
            <div className="mt-1 flex justify-between">
              <span className="text-ink-3">Risk score</span>
              <span className="font-mono text-ink">
                {riskScore} / 100 ·{" "}
                {riskScore < 30
                  ? "Conservative"
                  : riskScore < 50
                    ? "Moderate"
                    : riskScore < 70
                      ? "Growth"
                      : "Aggressive"}
              </span>
            </div>
          </div>
        </div>

        <div>
          <svg viewBox="0 0 220 220" role="img" aria-label="Portfolio allocation donut">
            {arcs.map((a, i) => (
              <path
                key={i}
                d={a.d}
                fill={a.color}
                stroke="var(--surface)"
                strokeWidth="1"
              />
            ))}
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              className="fill-[var(--ink-3)] font-sans"
              fontSize="9"
              fontFamily="monospace"
            >
              ALLOCATION
            </text>
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              className="fill-[var(--ink)] font-sans"
              fontSize="11"
              fontWeight="600"
            >
              {total}%
            </text>
          </svg>
        </div>
      </div>
    </article>
  );
}

function AllocSlider({
  label,
  value,
  color,
  onChange,
}: {
  label: string;
  value: number;
  color: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="inline-flex items-center gap-2 text-xs text-ink-2">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded"
            style={{ background: color }}
          />
          {label}
        </span>
        <span className="font-mono text-xs text-accent">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-[var(--accent)]"
      />
    </div>
  );
}
