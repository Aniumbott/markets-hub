"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard, fmtINR } from "./tool-shell";

export function EmiCalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.5);

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  const emi =
    months > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;
  const totalPayable = emi * months;
  const totalInterest = totalPayable - principal;

  // If you invested the EMI instead (15% example)
  const investRate = 0.12 / 12;
  let invested = 0;
  for (let m = 1; m <= months; m++) {
    invested = invested * (1 + investRate) + emi;
  }

  return (
    <ToolShell
      title="Home loan EMI"
      description="Compute the EMI for a home or vehicle loan. Also shows what you'd accumulate if you invested the same EMI in equity at 12% CAGR (opportunity cost framing)."
      inputs={
        <>
          <NumberInput
            label="Principal"
            value={principal}
            min={500000}
            max={50000000}
            step={100000}
            prefix="₹"
            onChange={setPrincipal}
          />
          <NumberInput
            label="Tenure"
            value={years}
            min={2}
            max={30}
            step={1}
            suffix="y"
            onChange={setYears}
          />
          <NumberInput
            label="Interest rate"
            value={rate}
            min={6}
            max={15}
            step={0.25}
            suffix="%"
            onChange={setRate}
          />
        </>
      }
      outputs={
        <>
          <OutputCard label="Monthly EMI" value={fmtINR(emi)} tone="accent" />
          <OutputCard label="Total payable" value={fmtINR(totalPayable)} />
          <OutputCard
            label="Total interest"
            value={fmtINR(totalInterest)}
            tone="down"
          />
          <OutputCard
            label="If you invested EMI @ 12%"
            value={fmtINR(invested)}
            tone="up"
          />
        </>
      }
      takeaway={`Total interest = ${fmtINR(totalInterest)} (${((totalInterest / principal) * 100).toFixed(0)}% of principal). At ${rate}% loan vs 12% equity, the opportunity cost of locking up cash flow in EMIs is real.`}
    />
  );
}
