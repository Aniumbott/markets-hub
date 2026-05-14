"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, RefreshCw, PieChart as PieIcon } from "lucide-react";
import { useStore, type PaperHolding } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ymd, relativeDay } from "@/lib/date";

const DEFAULTS: PaperHolding[] = [
  { label: "Nifty 50 index fund", targetPct: 40, actualAmount: 0 },
  { label: "Nifty Midcap 150 fund", targetPct: 15, actualAmount: 0 },
  { label: "International (Nasdaq 100)", targetPct: 15, actualAmount: 0 },
  { label: "Debt (short duration)", targetPct: 20, actualAmount: 0 },
  { label: "Gold (SGB)", targetPct: 8, actualAmount: 0 },
  { label: "Cash / Liquid", targetPct: 2, actualAmount: 0 },
];

export function PaperPortfolio() {
  const [mounted, setMounted] = useState(false);
  const portfolio = useStore((s) => s.paperPortfolio);
  const setPortfolio = useStore((s) => s.setPaperPortfolio);

  const [capital, setCapital] = useState(1000000);
  const [holdings, setHoldings] = useState<PaperHolding[]>(DEFAULTS);

  useEffect(() => {
    setMounted(true);
    if (portfolio) {
      setCapital(portfolio.totalCapital);
      setHoldings(portfolio.holdings);
    }
  }, [portfolio]);

  const totalTarget = holdings.reduce((s, h) => s + h.targetPct, 0);
  const totalActual = holdings.reduce((s, h) => s + h.actualAmount, 0);

  const save = () => {
    setPortfolio({
      totalCapital: capital,
      holdings,
      startedOn: portfolio?.startedOn ?? ymd(),
      lastUpdated: ymd(),
    });
  };

  const reset = () => {
    setHoldings(DEFAULTS);
    setCapital(1000000);
  };

  const update = (i: number, patch: Partial<PaperHolding>) => {
    setHoldings(holdings.map((h, idx) => (idx === i ? { ...h, ...patch } : h)));
  };

  const remove = (i: number) => {
    setHoldings(holdings.filter((_, idx) => idx !== i));
  };

  const add = () => {
    setHoldings([
      ...holdings,
      { label: "New holding", targetPct: 0, actualAmount: 0 },
    ]);
  };

  if (!mounted) {
    return <div className="h-96 animate-pulse rounded-xl bg-surface" />;
  }

  return (
    <div className="space-y-6">
      {/* Header / Summary */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <label className="text-[10px] font-medium uppercase tracking-wider text-ink-3">
              Total capital
            </label>
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="mt-1 block w-48 rounded-md border border-border bg-bg px-3 py-2 font-serif text-2xl text-ink focus:border-accent focus:outline-none"
              step={10000}
              min={0}
            />
          </div>
          <div className="text-right">
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-3">
              Target total
            </div>
            <div
              className={
                totalTarget === 100
                  ? "font-mono text-2xl text-up"
                  : "font-mono text-2xl text-down"
              }
            >
              {totalTarget}%
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-3">
              Actual deployed
            </div>
            <div className="font-mono text-2xl text-ink">
              ₹{totalActual.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
        {portfolio && (
          <p className="mt-3 text-xs text-ink-3">
            Tracking since {relativeDay(portfolio.startedOn)} · last updated{" "}
            {relativeDay(portfolio.lastUpdated)}
          </p>
        )}
      </div>

      {/* Holdings */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-serif text-lg text-ink">Holdings</h3>
          <Button variant="ghost" size="sm" onClick={add}>
            <Plus className="h-3 w-3" />
            Add holding
          </Button>
        </div>

        <div className="space-y-3">
          {holdings.map((h, i) => {
            const targetAmount = (capital * h.targetPct) / 100;
            const actualPct = capital > 0 ? (h.actualAmount / capital) * 100 : 0;
            const drift = actualPct - h.targetPct;
            const driftPct =
              h.targetPct > 0 ? (drift / h.targetPct) * 100 : 0;

            return (
              <div
                key={i}
                className="rounded-lg border border-border bg-bg p-3"
              >
                <div className="grid grid-cols-12 items-center gap-2">
                  <input
                    type="text"
                    value={h.label}
                    onChange={(e) => update(i, { label: e.target.value })}
                    className="col-span-12 rounded-md border border-border bg-surface px-2 py-1 text-sm text-ink focus:border-accent focus:outline-none lg:col-span-4"
                  />
                  <div className="col-span-6 lg:col-span-2">
                    <div className="text-[9px] uppercase text-ink-3">Target %</div>
                    <input
                      type="number"
                      value={h.targetPct}
                      onChange={(e) =>
                        update(i, { targetPct: Number(e.target.value) })
                      }
                      min={0}
                      max={100}
                      step={1}
                      className="w-full rounded-md border border-border bg-surface px-2 py-1 font-mono text-sm text-accent focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-3">
                    <div className="text-[9px] uppercase text-ink-3">
                      Actual ₹
                    </div>
                    <input
                      type="number"
                      value={h.actualAmount}
                      onChange={(e) =>
                        update(i, { actualAmount: Number(e.target.value) })
                      }
                      min={0}
                      step={1000}
                      className="w-full rounded-md border border-border bg-surface px-2 py-1 font-mono text-sm text-ink focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="col-span-9 lg:col-span-2">
                    <div className="text-[9px] uppercase text-ink-3">Drift</div>
                    {h.targetPct > 0 ? (
                      <span
                        className={
                          Math.abs(drift) < 2
                            ? "font-mono text-sm text-ink-2"
                            : drift > 0
                              ? "font-mono text-sm text-warn"
                              : "font-mono text-sm text-down"
                        }
                      >
                        {drift > 0 ? "+" : ""}
                        {drift.toFixed(1)}%
                      </span>
                    ) : (
                      <span className="text-xs text-ink-3">—</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(i)}
                    className="col-span-3 flex items-center justify-end text-ink-3 hover:text-down lg:col-span-1"
                    aria-label="Remove holding"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 text-[10px] font-mono text-ink-3">
                  Target: ₹{Math.round(targetAmount).toLocaleString("en-IN")} ·
                  Actual: {actualPct.toFixed(1)}%
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex gap-2">
          <Button onClick={save}>Save</Button>
          <Button variant="outline" onClick={reset}>
            <RefreshCw className="h-3 w-3" />
            Reset to defaults
          </Button>
        </div>
      </div>

      {/* Visualization */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <div className="mb-3 flex items-center gap-2">
          <PieIcon className="h-4 w-4 text-accent" />
          <h3 className="font-serif text-lg text-ink">Target vs Actual</h3>
        </div>
        <div className="space-y-3">
          {holdings.map((h, i) => {
            const actualPct =
              capital > 0 ? (h.actualAmount / capital) * 100 : 0;
            return (
              <div key={i}>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-2">{h.label}</span>
                  <span className="font-mono text-ink-3">
                    Target {h.targetPct}% · Actual {actualPct.toFixed(1)}%
                  </span>
                </div>
                <div className="relative mt-1 h-3 rounded-full bg-bg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-border-strong opacity-50"
                    style={{ width: `${Math.min(h.targetPct, 100)}%` }}
                  />
                  <div
                    className="absolute top-0 left-0 h-full bg-accent"
                    style={{ width: `${Math.min(actualPct, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[10px] text-ink-3">
          Light bar = target; solid bar = actual. Larger drift = bigger rebalance signal.
        </p>
      </div>
    </div>
  );
}
