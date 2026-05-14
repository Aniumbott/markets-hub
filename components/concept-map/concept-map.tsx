"use client";

import { useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  Handle,
  Position,
  type NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";
import { CONCEPT_NODES, CONCEPT_EDGES } from "@/content/concept-map";
import type { ConceptMapNode } from "@/content/types";
import { cn } from "@/lib/cn";

const groupColors: Record<ConceptMapNode["group"], { border: string; bg: string; tag: string }> = {
  policy: {
    border: "border-accent/60",
    bg: "bg-accent/10",
    tag: "bg-accent/15 text-accent",
  },
  indicator: {
    border: "border-warn/50",
    bg: "bg-warn/10",
    tag: "bg-warn/15 text-warn",
  },
  market: {
    border: "border-border-strong",
    bg: "bg-surface",
    tag: "bg-surface-2 text-ink-2",
  },
  macro: {
    border: "border-up/50",
    bg: "bg-up/10",
    tag: "bg-up/15 text-up",
  },
};

function MarketNode(props: NodeProps) {
  const { data, selected } = props;
  const node = data as { node: ConceptMapNode };
  const tone = groupColors[node.node.group];
  return (
    <div
      className={cn(
        "rounded-xl border-2 px-3 py-2 shadow-card transition-all min-w-[140px]",
        tone.border,
        tone.bg,
        selected && "ring-2 ring-accent ring-offset-2 ring-offset-bg"
      )}
    >
      <Handle type="target" position={Position.Top} className="!h-2 !w-2 !bg-ink-3" />
      <div className={cn("inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider", tone.tag)}>
        {node.node.group}
      </div>
      <div className="mt-1 font-sans text-sm font-medium text-ink">
        {node.node.label}
      </div>
      <Handle type="source" position={Position.Bottom} className="!h-2 !w-2 !bg-ink-3" />
    </div>
  );
}

const nodeTypes = { market: MarketNode };

// Hand-laid positions so the graph is readable instead of force-layout chaos
const POSITIONS: Record<string, { x: number; y: number }> = {
  // Top: Fed / global drivers
  fed: { x: 80, y: 20 },
  boj: { x: 360, y: 20 },
  "us-cpi": { x: 600, y: 20 },
  "global-liquidity": { x: 840, y: 20 },

  // Tier 2: Core global indicators
  "us-10y": { x: 80, y: 180 },
  dxy: { x: 360, y: 180 },
  yen: { x: 600, y: 180 },
  "risk-on-off": { x: 840, y: 180 },
  vix: { x: 1100, y: 180 },

  // Tier 3: Global markets + India FX
  spx: { x: 80, y: 360 },
  nasdaq: { x: 280, y: 360 },
  nikkei: { x: 480, y: 360 },
  "usd-inr": { x: 680, y: 360 },
  gold: { x: 880, y: 360 },
  brent: { x: 1080, y: 360 },
  copper: { x: 1280, y: 360 },

  // Tier 4: India side
  rbi: { x: 280, y: 540 },
  "india-cpi": { x: 540, y: 540 },
  "india-vix": { x: 1100, y: 540 },

  // Tier 5: India outputs
  "g-sec": { x: 280, y: 700 },
  nifty: { x: 540, y: 700 },
  "bank-nifty": { x: 740, y: 700 },
  btc: { x: 1080, y: 700 },
};

export function ConceptMap() {
  const [selectedNode, setSelectedNode] = useState<ConceptMapNode | null>(null);

  const nodes: Node[] = useMemo(
    () =>
      CONCEPT_NODES.map((n) => ({
        id: n.id,
        type: "market",
        position: POSITIONS[n.id] ?? { x: Math.random() * 800, y: Math.random() * 600 },
        data: { node: n },
      })),
    []
  );

  const edges: Edge[] = useMemo(
    () =>
      CONCEPT_EDGES.map((e, i) => ({
        id: `e${i}`,
        source: e.source,
        target: e.target,
        label: e.label,
        animated: false,
        labelStyle: {
          fontSize: 10,
          fontFamily: "var(--font-inter), sans-serif",
          fill: "var(--ink-3)",
        },
        labelBgStyle: { fill: "var(--surface)", fillOpacity: 0.9 },
        style: {
          stroke:
            e.polarity === "positive"
              ? "var(--up)"
              : e.polarity === "negative"
                ? "var(--down)"
                : "var(--ink-3)",
          strokeWidth: 1.5,
          opacity: 0.5,
        },
      })),
    []
  );

  return (
    <div className="relative">
      <div className="h-[420px] overflow-hidden rounded-2xl border border-border bg-bg sm:h-[520px] lg:h-[720px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={(_, n) => {
            const cn = CONCEPT_NODES.find((c) => c.id === n.id);
            if (cn) setSelectedNode(cn);
          }}
          fitView
          minZoom={0.3}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={20} size={1} color="var(--border)" />
          <Controls showInteractive={false} />
          <MiniMap
            maskColor="rgba(0, 0, 0, 0.4)"
            nodeColor="var(--ink-3)"
            style={{ background: "var(--surface)" }}
          />
        </ReactFlow>
      </div>

      <Legend />

      {selectedNode && (
        <div className="mt-6 rounded-xl border border-border bg-surface p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className={cn("inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider", groupColors[selectedNode.group].tag)}>
                {selectedNode.group}
              </div>
              <h3 className="mt-2 font-serif text-xl text-ink">{selectedNode.label}</h3>
              <p className="mt-1 text-sm text-ink-2">{selectedNode.description}</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedNode(null)}
              className="text-ink-3 hover:text-ink"
              aria-label="Close detail"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Legend() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-3">
      <span className="font-medium">Edge color:</span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-0.5 w-6 bg-up" /> positive (same direction)
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-0.5 w-6 bg-down" /> negative (opposite)
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-0.5 w-6 bg-ink-3" /> context
      </span>
      <span className="ml-auto hidden sm:inline">Tap a node for detail. Pan + zoom to explore.</span>
    </div>
  );
}
