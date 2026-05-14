"use client";

import { useState } from "react";
import { DiagramScroller } from "./diagram-scroller";

type Shape = "normal" | "flat" | "inverted";

const CURVES: Record<Shape, { points: number[]; label: string; description: string }> = {
  normal: {
    points: [4.2, 4.3, 4.5, 4.7, 4.9, 5.0, 5.05],
    label: "Normal (upward sloping)",
    description: "Healthy economy. Longer maturity = higher yield as you take on more risk and inflation uncertainty.",
  },
  flat: {
    points: [4.8, 4.8, 4.85, 4.85, 4.85, 4.85, 4.85],
    label: "Flat",
    description: "Transition phase. Often precedes inversion (downturn ahead) or normalization (recovery).",
  },
  inverted: {
    points: [5.4, 5.2, 4.9, 4.6, 4.4, 4.3, 4.25],
    label: "Inverted (recession warning)",
    description: "Short yields above long yields. Market expects future rate cuts. Has preceded every US recession since 1960.",
  },
};

const MATURITIES = ["3M", "1Y", "2Y", "5Y", "10Y", "20Y", "30Y"];

export function YieldCurveDiagram() {
  const [shape, setShape] = useState<Shape>("normal");
  const curve = CURVES[shape];

  const width = 600;
  const height = 240;
  const padX = 60;
  const padY = 40;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;

  const yMin = 3.8;
  const yMax = 5.6;

  const xFor = (i: number) => padX + (i / (MATURITIES.length - 1)) * plotW;
  const yFor = (val: number) =>
    padY + plotH - ((val - yMin) / (yMax - yMin)) * plotH;

  const pathD = curve.points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(p)}`)
    .join(" ");

  return (
    <figure className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-4 not-italic">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div className="text-sm font-medium text-ink">US Treasury yield curve shapes</div>
        <div className="inline-flex rounded-full border border-border bg-bg p-0.5">
          {(Object.keys(CURVES) as Shape[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setShape(s)}
              className={
                "rounded-full px-3 py-1 text-xs transition-colors " +
                (shape === s
                  ? "bg-accent text-bg"
                  : "text-ink-2 hover:text-ink")
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <DiagramScroller minWidth={520}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label={`Yield curve - ${curve.label}`}>
        {/* gridlines */}
        {[4.0, 4.5, 5.0, 5.5].map((y) => (
          <g key={y}>
            <line
              x1={padX}
              x2={width - padX}
              y1={yFor(y)}
              y2={yFor(y)}
              stroke="var(--border)"
              strokeDasharray="2 4"
            />
            <text
              x={padX - 8}
              y={yFor(y) + 4}
              textAnchor="end"
              className="fill-[var(--ink-3)] font-sans"
              fontSize="10"
            >
              {y.toFixed(1)}%
            </text>
          </g>
        ))}

        {/* x axis labels */}
        {MATURITIES.map((m, i) => (
          <text
            key={m}
            x={xFor(i)}
            y={height - 12}
            textAnchor="middle"
            className="fill-[var(--ink-3)] font-sans"
            fontSize="10"
          >
            {m}
          </text>
        ))}

        {/* curve */}
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {curve.points.map((p, i) => (
          <circle
            key={i}
            cx={xFor(i)}
            cy={yFor(p)}
            r="3.5"
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        ))}

        {/* zero-spread (for inverted highlight) */}
        {shape === "inverted" && (
          <text
            x={width / 2}
            y={padY - 12}
            textAnchor="middle"
            className="fill-[var(--down)] font-sans"
            fontSize="11"
            fontWeight="600"
          >
            ⚠ Short yields above long yields
          </text>
        )}
      </svg>
      </DiagramScroller>

      <figcaption className="mt-2 text-center text-xs italic text-ink-3 font-sans not-italic">
        {curve.label}: {curve.description}
      </figcaption>
    </figure>
  );
}
