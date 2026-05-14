"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard, fmtINR } from "./tool-shell";

export function CompoundCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(12);

  const future = principal * Math.pow(1 + rate / 100, years);
  const wealth = future - principal;
  const doubling = 72 / rate;
  const multiplier = future / principal;

  return (
    <ToolShell
      title="Compound growth (lump sum)"
      description="See what a one-time investment grows to. The Rule of 72 also shows how often it doubles."
      inputs={
        <>
          <NumberInput
            label="Principal"
            value={principal}
            min={10000}
            max={10000000}
            step={10000}
            prefix="₹"
            onChange={setPrincipal}
          />
          <NumberInput
            label="Years"
            value={years}
            min={1}
            max={50}
            step={1}
            suffix="y"
            onChange={setYears}
          />
          <NumberInput
            label="Annual return"
            value={rate}
            min={3}
            max={25}
            step={0.5}
            suffix="%"
            onChange={setRate}
          />
        </>
      }
      outputs={
        <>
          <OutputCard label="Future value" value={fmtINR(future)} tone="accent" />
          <OutputCard label="Wealth generated" value={fmtINR(wealth)} tone="up" />
          <OutputCard
            label="Doubling time"
            value={`${doubling.toFixed(1)} yrs`}
          />
          <OutputCard
            label="Multiplier"
            value={`${multiplier.toFixed(1)}x`}
            tone="accent"
          />
        </>
      }
      takeaway={`Money doubles every ${doubling.toFixed(1)} years at ${rate}%. Over ${years} years, ₹${principal.toLocaleString("en-IN")} becomes ${fmtINR(future)} — a ${multiplier.toFixed(1)}x multiplier. Time × rate compounds dramatically.`}
    />
  );
}
