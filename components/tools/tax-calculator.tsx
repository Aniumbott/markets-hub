"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard, fmtINR } from "./tool-shell";

type AssetType = "equity-lt" | "equity-st" | "debt-mf" | "crypto" | "real-estate";

const ASSETS = [
  { id: "equity-lt", label: "Equity (>1y, LTCG)", rate: 12.5, exemption: 125000 },
  { id: "equity-st", label: "Equity (≤1y, STCG)", rate: 20, exemption: 0 },
  { id: "debt-mf", label: "Debt MF (any period)", rate: 30, exemption: 0 },
  { id: "crypto", label: "Crypto (VDA)", rate: 30, exemption: 0 },
  { id: "real-estate", label: "Real estate (>2y)", rate: 12.5, exemption: 0 },
] as const;

export function TaxCalculator() {
  const [assetType, setAssetType] = useState<AssetType>("equity-lt");
  const [gain, setGain] = useState(200000);

  const asset = ASSETS.find((a) => a.id === assetType)!;
  const taxable = Math.max(0, gain - asset.exemption);
  const tax = (taxable * asset.rate) / 100;
  const cess = tax * 0.04;
  const totalTax = tax + cess;
  const net = gain - totalTax;
  const effectiveRate = gain > 0 ? (totalTax / gain) * 100 : 0;

  return (
    <ToolShell
      title="Capital gains tax (post-Budget 2024)"
      description="Compute the post-tax outcome of a sale gain under the new Indian tax rules."
      inputs={
        <>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-ink-3">
              Asset type
            </label>
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value as AssetType)}
              className="mt-2 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-ink"
            >
              {ASSETS.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>
            <p className="mt-2 font-mono text-[10px] text-ink-3">
              Rate: {asset.rate}% · Exemption: ₹{asset.exemption.toLocaleString("en-IN")}
            </p>
          </div>
          <NumberInput
            label="Capital gain"
            value={gain}
            min={10000}
            max={50000000}
            step={10000}
            prefix="₹"
            onChange={setGain}
          />
        </>
      }
      outputs={
        <>
          <OutputCard label="Taxable amount" value={fmtINR(taxable)} />
          <OutputCard label="Tax" value={fmtINR(tax)} tone="down" />
          <OutputCard label="Cess (4%)" value={fmtINR(cess)} tone="down" />
          <OutputCard
            label="Net after tax"
            value={fmtINR(net)}
            tone="accent"
          />
          <OutputCard
            label="Effective tax rate"
            value={`${effectiveRate.toFixed(2)}%`}
          />
        </>
      }
      takeaway={
        assetType === "crypto"
          ? "Crypto is the harshest taxed asset class. 30% flat regardless of holding period. Plus 1% TDS on every trade. Plan accordingly."
          : assetType === "equity-lt"
            ? `LTCG at 12.5% (above ₹1.25L exemption) is favorable. Holding equity >1 year is materially better than churning.`
            : `${asset.label} taxed at ${asset.rate}%. Compare to LTCG on equity which is 12.5% above ₹1.25L exemption.`
      }
    />
  );
}
