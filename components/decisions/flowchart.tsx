"use client";

import { useState } from "react";
import { CheckCircle, RotateCcw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Decision } from "@/content/types";
import { cn } from "@/lib/cn";

interface FlowchartProps {
  decision: Decision;
}

export function Flowchart({ decision }: FlowchartProps) {
  const [path, setPath] = useState<string[]>([decision.rootNodeId]);

  const current = decision.nodes.find((n) => n.id === path[path.length - 1])!;
  const visited = path.map((id) => decision.nodes.find((n) => n.id === id)!);

  const answer = (next: string) => {
    setPath([...path, next]);
  };
  const reset = () => setPath([decision.rootNodeId]);
  const back = () => {
    if (path.length > 1) setPath(path.slice(0, -1));
  };

  return (
    <div className="space-y-6">
      {/* Path history */}
      <ol className="space-y-3">
        {visited.map((node, i) => {
          const isLast = i === visited.length - 1;
          return (
            <li
              key={i}
              className={cn(
                "rounded-2xl border p-5",
                isLast
                  ? node.answer
                    ? "border-accent/40 bg-accent/[0.05]"
                    : "border-border bg-surface"
                  : "border-border bg-surface-2 opacity-70"
              )}
            >
              {node.question && (
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-3">
                    Step {i + 1}
                  </div>
                  <p className="mt-1 font-serif text-lg text-ink">
                    {node.question}
                  </p>
                  {isLast && (
                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="primary"
                        onClick={() => node.yes && answer(node.yes)}
                      >
                        Yes <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => node.no && answer(node.no)}
                      >
                        No
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {node.answer && (
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      Recommendation
                    </span>
                  </div>
                  <p className="mt-2 font-serif text-xl text-ink">
                    {node.answer}
                  </p>
                  {node.note && (
                    <p className="mt-3 text-sm text-ink-2">{node.note}</p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        {path.length > 1 && (
          <Button variant="ghost" size="sm" onClick={back}>
            ← Back one step
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="h-3 w-3" />
          Restart
        </Button>
      </div>

      {/* Takeaways (always visible) */}
      <section className="mt-6 rounded-2xl border border-up/30 bg-up/[0.04] p-5">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-up">
          Key takeaways
        </h3>
        <ul className="mt-3 space-y-1.5">
          {decision.takeaways.map((t, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-2">
              <span aria-hidden className="text-up">◆</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
