"use client";

interface Node {
  id: string;
  label: string;
  layer: number;
  group?: "policy" | "market" | "indicator" | "macro";
}

interface Edge {
  from: string;
  to: string;
  label?: string;
}

const NODES: Node[] = [
  { id: "fed", label: "Fed hikes", layer: 0, group: "policy" },
  { id: "us10y", label: "US 10Y ↑", layer: 1, group: "indicator" },
  { id: "dxy", label: "DXY ↑", layer: 1, group: "indicator" },
  { id: "spx", label: "S&P 500 ↓", layer: 2, group: "market" },
  { id: "gold", label: "Gold ↓", layer: 2, group: "market" },
  { id: "inr", label: "USD/INR ↑", layer: 2, group: "market" },
  { id: "fii", label: "FII outflows", layer: 3, group: "macro" },
  { id: "nifty", label: "Nifty ↓", layer: 4, group: "market" },
];

const EDGES: Edge[] = [
  { from: "fed", to: "us10y", label: "+" },
  { from: "fed", to: "dxy", label: "+" },
  { from: "us10y", to: "spx", label: "−" },
  { from: "us10y", to: "gold", label: "−" },
  { from: "dxy", to: "inr", label: "+" },
  { from: "dxy", to: "fii", label: "→" },
  { from: "inr", to: "fii", label: "→" },
  { from: "fii", to: "nifty", label: "−" },
];

const groupColors: Record<string, string> = {
  policy: "#C2410C",
  indicator: "#F59E0B",
  market: "#0EA5E9",
  macro: "#9333EA",
};

export function CascadeFlowDiagram() {
  const W = 700;
  const H = 320;
  const layerCount = 5;
  const layerW = W / layerCount;

  const positions: Record<string, { x: number; y: number }> = {};
  const byLayer: Record<number, Node[]> = {};
  NODES.forEach((n) => {
    if (!byLayer[n.layer]) byLayer[n.layer] = [];
    byLayer[n.layer].push(n);
  });

  Object.keys(byLayer).forEach((l) => {
    const layer = byLayer[Number(l)];
    layer.forEach((n, i) => {
      positions[n.id] = {
        x: Number(l) * layerW + layerW / 2,
        y: 40 + (i + 1) * (H - 80) / (layer.length + 1),
      };
    });
  });

  return (
    <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-4 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        Macro cascade — how one Fed hike ripples through to Nifty
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Macro cascade flow diagram">
        {/* Edges */}
        {EDGES.map((e, i) => {
          const from = positions[e.from];
          const to = positions[e.to];
          const isNeg = e.label === "−";
          const stroke = isNeg ? "var(--down)" : e.label === "+" ? "var(--up)" : "var(--ink-3)";
          return (
            <g key={i}>
              <path
                d={`M ${from.x + 50} ${from.y} C ${from.x + 100} ${from.y}, ${to.x - 100} ${to.y}, ${to.x - 50} ${to.y}`}
                fill="none"
                stroke={stroke}
                strokeWidth="1.5"
                strokeOpacity="0.5"
                markerEnd="url(#arrow)"
              />
            </g>
          );
        })}

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--ink-3)" />
          </marker>
        </defs>

        {/* Nodes */}
        {NODES.map((n) => {
          const p = positions[n.id];
          const color = groupColors[n.group ?? "market"];
          return (
            <g key={n.id}>
              <rect
                x={p.x - 50}
                y={p.y - 18}
                width="100"
                height="36"
                rx="6"
                fill="var(--surface)"
                stroke={color}
                strokeWidth="2"
              />
              <text
                x={p.x}
                y={p.y + 5}
                textAnchor="middle"
                className="fill-[var(--ink)] font-sans"
                fontSize="11"
                fontWeight="500"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex items-center justify-center gap-4 text-xs font-sans text-ink-3 not-italic">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded border-2" style={{ borderColor: "#C2410C" }} />
          Policy
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded border-2" style={{ borderColor: "#F59E0B" }} />
          Indicator
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded border-2" style={{ borderColor: "#0EA5E9" }} />
          Market
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded border-2" style={{ borderColor: "#9333EA" }} />
          Flow
        </span>
      </div>
    </figure>
  );
}
