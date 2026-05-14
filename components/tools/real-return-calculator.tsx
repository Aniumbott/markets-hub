"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard } from "./tool-shell";

export function RealReturnCalculator() {
  const [nominal, setNominal] = useState(7);
  const [inflation, setInflation] = useState(5);
  const [tax, setTax] = useState(30);

  const postTax = nominal * (1 - tax / 100);
  const realReturn = postTax - inflation;
  // Geometric proper formula
  const realGeo = ((1 + postTax / 100) / (1 + inflation / 100) - 1) * 100;

  return (
    <ToolShell
      title="Real return calculator"
      description="What you actually earn after tax and inflation. The number that compounds your purchasing power."
      inputs={
        <>
          <NumberInput
            label="Nominal return"
            value={nominal}
            min={2}
            max={30}
            step={0.25}
            suffix="%"
            onChange={setNominal}
          />
          <NumberInput
            label="Inflation"
            value={inflation}
            min={1}
            max={15}
            step={0.25}
            suffix="%"
            onChange={setInflation}
          />
          <NumberInput
            label="Tax bracket"
            value={tax}
            min={0}
            max={42}
            step={5}
            suffix="%"
            onChange={setTax}
          />
        </>
      }
      outputs={
        <>
          <OutputCard
            label="Post-tax return"
            value={`${postTax.toFixed(2)}%`}
          />
          <OutputCard
            label="Real return (approx)"
            value={`${realReturn.toFixed(2)}%`}
            tone={realReturn > 0 ? "up" : "down"}
          />
          <OutputCard
            label="Real return (proper)"
            value={`${realGeo.toFixed(2)}%`}
            tone={realGeo > 0 ? "up" : "down"}
          />
          <OutputCard
            label="Inflation cost"
            value={`-${inflation.toFixed(1)}%`}
            tone="down"
          />
        </>
      }
      takeaway={
        realGeo < 0
          ? `Your purchasing power is shrinking by ${Math.abs(realGeo).toFixed(2)}% per year. Long-run, this is wealth destruction even though the nominal balance grows.`
          : realGeo < 1
            ? `Real return is only ${realGeo.toFixed(2)}% — barely keeping up with inflation. Consider higher-return options if your horizon allows.`
            : `Real return of ${realGeo.toFixed(2)}% is the rate at which your purchasing power compounds. This is what should drive your asset choice.`
      }
    />
  );
}
