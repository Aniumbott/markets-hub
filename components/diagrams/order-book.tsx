"use client";

import { DiagramScroller } from "./diagram-scroller";

export function OrderBookDiagram() {
  const bids = [
    { price: "2,800.00", qty: 12400 },
    { price: "2,799.95", qty: 8200 },
    { price: "2,799.90", qty: 15600 },
    { price: "2,799.85", qty: 9800 },
    { price: "2,799.80", qty: 22100 },
  ];
  const asks = [
    { price: "2,800.05", qty: 14200 },
    { price: "2,800.10", qty: 11700 },
    { price: "2,800.15", qty: 9300 },
    { price: "2,800.20", qty: 18600 },
    { price: "2,800.25", qty: 26400 },
  ];
  const max = Math.max(
    ...bids.map((b) => b.qty),
    ...asks.map((a) => a.qty)
  );

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-4 font-sans not-italic">
      <div className="mb-3 flex items-baseline justify-between font-sans">
        <div className="text-sm font-medium text-ink">Reliance Industries order book (illustrative)</div>
        <div className="font-mono text-xs text-ink-3">LTP: ₹2,800.00</div>
      </div>

      <DiagramScroller minWidth={420}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border">
        {/* Bids */}
        <div className="bg-surface">
          <div className="grid grid-cols-2 gap-2 border-b border-border bg-surface-2 px-2 py-1.5 text-[10px] uppercase tracking-wider text-ink-3">
            <span>Buy Qty</span>
            <span className="text-right">Bid</span>
          </div>
          {bids.map((b, i) => (
            <div key={i} className="relative grid grid-cols-2 items-center gap-2 px-2 py-1.5">
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full bg-up/10"
                style={{ width: `${(b.qty / max) * 100}%` }}
              />
              <span className="relative font-mono text-xs text-ink-2">
                {b.qty.toLocaleString("en-IN")}
              </span>
              <span className="relative text-right font-mono text-xs font-medium text-up">
                {b.price}
              </span>
            </div>
          ))}
        </div>

        {/* Asks */}
        <div className="bg-surface">
          <div className="grid grid-cols-2 gap-2 border-b border-border bg-surface-2 px-2 py-1.5 text-[10px] uppercase tracking-wider text-ink-3">
            <span>Ask</span>
            <span className="text-right">Sell Qty</span>
          </div>
          {asks.map((a, i) => (
            <div key={i} className="relative grid grid-cols-2 items-center gap-2 px-2 py-1.5">
              <div
                aria-hidden
                className="absolute right-0 top-0 h-full bg-down/10"
                style={{ width: `${(a.qty / max) * 100}%` }}
              />
              <span className="relative font-mono text-xs font-medium text-down">
                {a.price}
              </span>
              <span className="relative text-right font-mono text-xs text-ink-2">
                {a.qty.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      </div>
      </DiagramScroller>

      <p className="mt-3 text-xs text-ink-3">
        Top 5 levels of depth. The wider the bar, the more shares queued at that price.
      </p>
    </div>
  );
}
