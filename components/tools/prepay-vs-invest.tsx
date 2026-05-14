"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard, fmtINR } from "./tool-shell";

export function PrepayVsInvest() {
  const [surplus, setSurplus] = useState(10000);
  const [loanRate, setLoanRate] = useState(8.5);
  const [equityRate, setEquityRate] = useState(12);
  const [years, setYears] = useState(15);
  const [tax, setTax] = useState(20);

  // Prepay path: surplus is used to reduce principal; saves loan interest over years
  // Simplification: treat as future-value of avoided interest at loan rate
  const r1 = loanRate / 100 / 12;
  const months = years * 12;
  let prepay = 0;
  for (let m = 1; m <= months; m++) {
    prepay = prepay * (1 + r1) + surplus;
  }

  // Invest path: surplus into equity, post-tax LTCG 12.5%
  const r2 = equityRate / 100 / 12;
  let invest = 0;
  for (let m = 1; m <= months; m++) {
    invest = invest * (1 + r2) + surplus;
  }
  // Apply LTCG tax on profits (simplified)
  const totalContrib = surplus * months;
  const investProfit = invest - totalContrib;
  const ltcgTax = investProfit * 0.125;
  const investPostTax = invest - ltcgTax;

  const winner = investPostTax > prepay ? "invest" : "prepay";
  const delta = Math.abs(investPostTax - prepay);

  return (
    <ToolShell
      title="Prepay home loan vs invest in equity"
      description="If you have surplus cash flow, should you prepay the home loan or invest in equity? Math shows the trade-off at your specific rates."
      inputs={
        <>
          <NumberInput
            label="Monthly surplus"
            value={surplus}
            min={1000}
            max={100000}
            step={1000}
            prefix="₹"
            onChange={setSurplus}
          />
          <NumberInput
            label="Home loan rate"
            value={loanRate}
            min={6}
            max={15}
            step={0.25}
            suffix="%"
            onChange={setLoanRate}
          />
          <NumberInput
            label="Expected equity return"
            value={equityRate}
            min={8}
            max={18}
            step={0.5}
            suffix="%"
            onChange={setEquityRate}
          />
          <NumberInput
            label="Years to compare"
            value={years}
            min={5}
            max={30}
            step={1}
            suffix="y"
            onChange={setYears}
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
            label="If you prepay"
            value={fmtINR(prepay)}
            tone={winner === "prepay" ? "up" : "ink"}
          />
          <OutputCard
            label="If you invest (post-LTCG)"
            value={fmtINR(investPostTax)}
            tone={winner === "invest" ? "up" : "ink"}
          />
          <OutputCard
            label="Equity wins by"
            value={winner === "invest" ? fmtINR(delta) : `-${fmtINR(delta)}`}
            tone={winner === "invest" ? "up" : "down"}
          />
        </>
      }
      takeaway={
        winner === "invest"
          ? `At ${equityRate}% equity return vs ${loanRate}% loan, investing wins by ${fmtINR(delta)} over ${years} years. The math favors equity when the spread > 2-3 percentage points.`
          : `Prepayment wins by ${fmtINR(delta)} over ${years} years. The loan rate is too close to expected equity return to justify the equity volatility risk.`
      }
    />
  );
}
