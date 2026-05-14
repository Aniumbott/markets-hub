"use client";

import { useState } from "react";
import { DiagramScroller } from "./diagram-scroller";

type Quadrant = "q1" | "q2" | "q3" | "q4";

const QUADRANTS: Record<Quadrant, {
  name: string;
  growth: "up" | "down";
  inflation: "up" | "down";
  works: string[];
  fails: string[];
  example: string;
}> = {
  q1: {
    name: "Goldilocks",
    growth: "up",
    inflation: "down",
    works: ["Equities (especially growth)", "Mid/small caps", "Cyclicals", "High-yield credit"],
    fails: ["Gold", "Long bonds", "Defensives"],
    example: "1995-1999 US dotcom boom · 2014 Modi rally · 2017",
  },
  q2: {
    name: "Reflation",
    growth: "up",
    inflation: "up",
    works: ["Commodities", "Energy stocks", "Value stocks", "Banks (NIM benefit)"],
    fails: ["Long bonds", "Expensive growth", "Defensives"],
    example: "2003-2007 China boom · 2021 reflation trade",
  },
  q3: {
    name: "Disinflation",
    growth: "down",
    inflation: "down",
    works: ["Long bonds (rate cuts)", "Gold", "Defensive equity", "Quality compounders"],
    fails: ["Cyclicals", "Commodities", "Small caps"],
    example: "2019 pre-COVID · 2020 emergency · 2024 late",
  },
  q4: {
    name: "Stagflation",
    growth: "down",
    inflation: "up",
    works: ["Gold", "Cash", "Energy", "Consumer staples"],
    fails: ["Most equity", "Bonds", "Real estate"],
    example: "1970s US · brief mid-2022 fears",
  },
};

export function FourQuadrantsDiagram() {
  const [active, setActive] = useState<Quadrant>("q3");
  const a = QUADRANTS[active];

  const tile = (q: Quadrant, pos: { x: number; y: number }, w: number, h: number) => {
    const d = QUADRANTS[q];
    const isActive = q === active;
    return (
      <g
        key={q}
        onClick={() => setActive(q)}
        style={{ cursor: "pointer" }}
        role="button"
        aria-label={`Quadrant ${q}: ${d.name}`}
      >
        <rect
          x={pos.x}
          y={pos.y}
          width={w}
          height={h}
          rx={8}
          fill={isActive ? "var(--accent)" : "var(--surface-2)"}
          fillOpacity={isActive ? "0.15" : "1"}
          stroke={isActive ? "var(--accent)" : "var(--border)"}
          strokeWidth={isActive ? "2" : "1"}
        />
        <text
          x={pos.x + w / 2}
          y={pos.y + h / 2 - 8}
          textAnchor="middle"
          className={isActive ? "fill-[var(--accent)]" : "fill-[var(--ink)]"}
          fontFamily="serif"
          fontSize="18"
          fontWeight="500"
        >
          {d.name}
        </text>
        <text
          x={pos.x + w / 2}
          y={pos.y + h / 2 + 14}
          textAnchor="middle"
          className={isActive ? "fill-[var(--accent)]" : "fill-[var(--ink-3)]"}
          fontSize="10"
          fontFamily="monospace"
        >
          growth {d.growth === "up" ? "↑" : "↓"} · inflation {d.inflation === "up" ? "↑" : "↓"}
        </text>
      </g>
    );
  };

  const W = 500;
  const H = 300;
  const margin = 30;
  const half = (W - margin * 2) / 2;
  const halfH = (H - margin * 2) / 2;

  return (
    <figure className="mx-auto max-w-4xl rounded-xl border border-border bg-surface p-4 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        Four quadrants framework
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Grid */}
        <DiagramScroller minWidth={460}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Four quadrants 2x2 grid">
          {/* axis labels */}
          <text x={W / 2} y={20} textAnchor="middle" className="fill-[var(--ink-2)] font-sans" fontSize="11" fontWeight="600">
            INFLATION ↓                                 INFLATION ↑
          </text>
          <text
            x={15}
            y={H / 2}
            textAnchor="middle"
            className="fill-[var(--ink-2)] font-sans"
            fontSize="11"
            fontWeight="600"
            transform={`rotate(-90 15 ${H / 2})`}
          >
            GROWTH ↑                  GROWTH ↓
          </text>

          {/* tiles */}
          {tile("q1", { x: margin, y: margin + 10 }, half, halfH)}
          {tile("q2", { x: margin + half + 4, y: margin + 10 }, half - 4, halfH)}
          {tile("q3", { x: margin, y: margin + halfH + 14 }, half, halfH)}
          {tile("q4", { x: margin + half + 4, y: margin + halfH + 14 }, half - 4, halfH)}
        </svg>
        </DiagramScroller>

        {/* Active detail */}
        <div className="space-y-3">
          <div className="rounded-lg border border-accent/30 bg-accent/[0.04] p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
              {active.toUpperCase()} · {a.name}
            </div>
            <div className="mt-2 font-mono text-xs text-ink-3">
              Growth {a.growth === "up" ? "rising" : "falling"} · inflation {a.inflation === "up" ? "rising" : "falling"}
            </div>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-up">
              What works
            </div>
            <ul className="space-y-0.5 text-xs text-ink-2">
              {a.works.map((w, i) => (
                <li key={i}>• {w}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-down">
              What lags
            </div>
            <ul className="space-y-0.5 text-xs text-ink-2">
              {a.fails.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-ink-3">
              Examples
            </div>
            <p className="text-xs text-ink-3">{a.example}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}
