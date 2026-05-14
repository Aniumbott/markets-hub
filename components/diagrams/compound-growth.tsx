"use client";

import { useState } from "react";

interface CompoundGrowthProps {
  initialPrincipal?: number;
  initialMonthly?: number;
  initialYears?: number;
  initialRate?: number;
}

export function CompoundGrowthDiagram({
  initialPrincipal = 0,
  initialMonthly = 15000,
  initialYears = 30,
  initialRate = 12,
}: CompoundGrowthProps) {
  const [monthly, setMonthly] = useState(initialMonthly);
  const [years, setYears] = useState(initialYears);
  const [rate, setRate] = useState(initialRate);
  const principal = initialPrincipal;

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const series: { year: number; corpus: number; contributed: number }[] = [];
  let corpus = principal;
  let contributed = principal;
  for (let m = 0; m <= months; m++) {
    if (m > 0) {
      corpus = corpus * (1 + monthlyRate) + monthly;
      contributed += monthly;
    }
    if (m % 12 === 0) {
      series.push({ year: m / 12, corpus, contributed });
    }
  }

  const W = 600;
  const H = 280;
  const padX = 60;
  const padY = 30;
  const plotW = W - padX * 2;
  const plotH = H - padY * 2;

  const maxY = Math.max(...series.map((s) => s.corpus));

  const xFor = (year: number) => padX + (year / years) * plotW;
  const yFor = (val: number) => padY + plotH - (val / maxY) * plotH;

  const corpusPath = series
    .map((s, i) => `${i === 0 ? "M" : "L"} ${xFor(s.year)} ${yFor(s.corpus)}`)
    .join(" ");
  const contribPath = series
    .map((s, i) => `${i === 0 ? "M" : "L"} ${xFor(s.year)} ${yFor(s.contributed)}`)
    .join(" ");

  const final = series[series.length - 1];
  const wealth = final.corpus - final.contributed;

  const fmt = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${Math.round(n).toLocaleString("en-IN")}`;
  };

  return (
    <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        The math of SIP compounding
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <Slider
          label="Monthly SIP"
          value={monthly}
          min={1000}
          max={100000}
          step={1000}
          format={(v) => `₹${v.toLocaleString("en-IN")}`}
          onChange={setMonthly}
        />
        <Slider
          label="Years"
          value={years}
          min={5}
          max={40}
          step={1}
          format={(v) => `${v}y`}
          onChange={setYears}
        />
        <Slider
          label="Annual return (CAGR)"
          value={rate}
          min={6}
          max={18}
          step={0.5}
          format={(v) => `${v}%`}
          onChange={setRate}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3 mb-3">
        <Stat label="Total contributed" value={fmt(final.contributed)} />
        <Stat label="Wealth generated" value={fmt(wealth)} tone="up" />
        <Stat label="Final corpus" value={fmt(final.corpus)} tone="accent" />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Compound growth chart">
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line
              x1={padX}
              x2={W - padX}
              y1={yFor(maxY * f)}
              y2={yFor(maxY * f)}
              stroke="var(--border)"
              strokeDasharray="2 4"
            />
            <text
              x={padX - 8}
              y={yFor(maxY * f) + 4}
              textAnchor="end"
              className="fill-[var(--ink-3)] font-sans"
              fontSize="9"
            >
              {fmt(maxY * f)}
            </text>
          </g>
        ))}

        {/* X labels */}
        {[0, years / 4, years / 2, (years * 3) / 4, years].map((y, i) => (
          <text
            key={i}
            x={xFor(y)}
            y={H - 12}
            textAnchor="middle"
            className="fill-[var(--ink-3)] font-sans"
            fontSize="10"
          >
            Yr {Math.round(y)}
          </text>
        ))}

        {/* Wealth area (between contributed and corpus) */}
        <path
          d={`${corpusPath} L ${xFor(final.year)} ${yFor(final.contributed)} L ${xFor(0)} ${yFor(0)} Z`}
          fill="var(--up)"
          fillOpacity="0.08"
        />

        {/* Contributed line */}
        <path
          d={contribPath}
          fill="none"
          stroke="var(--ink-3)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Corpus line */}
        <path
          d={corpusPath}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
        />
      </svg>

      <div className="mt-3 flex items-center justify-center gap-4 text-xs">
        <span className="inline-flex items-center gap-2 text-ink-2">
          <span className="inline-block h-0.5 w-6 bg-accent" /> Corpus value
        </span>
        <span className="inline-flex items-center gap-2 text-ink-2">
          <span className="inline-block h-0.5 w-6 border-t border-dashed border-ink-3" /> Total contributed
        </span>
      </div>
    </figure>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="rounded-lg border border-border bg-bg p-3">
      <div className="flex items-baseline justify-between">
        <label className="text-[10px] uppercase tracking-wider text-ink-3">
          {label}
        </label>
        <span className="font-mono text-xs font-medium text-accent">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--accent)]"
      />
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "up" | "accent";
}) {
  const toneClass =
    tone === "up"
      ? "text-up"
      : tone === "accent"
        ? "text-accent"
        : "text-ink";
  return (
    <div className="rounded-lg border border-border bg-bg p-3">
      <div className="text-[10px] uppercase tracking-wider text-ink-3">{label}</div>
      <div className={`mt-1 font-serif text-2xl ${toneClass}`}>{value}</div>
    </div>
  );
}
