"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard, fmtINR } from "./tool-shell";

export function SipCalculator() {
  const [monthly, setMonthly] = useState(15000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(12);
  const [increment, setIncrement] = useState(10);

  const r = rate / 100 / 12;
  const months = years * 12;

  // Without step-up
  let plain = 0;
  for (let m = 1; m <= months; m++) {
    plain = plain * (1 + r) + monthly;
  }

  // With annual step-up
  let stepped = 0;
  let currentSIP = monthly;
  for (let m = 1; m <= months; m++) {
    if (m > 1 && (m - 1) % 12 === 0) {
      currentSIP = currentSIP * (1 + increment / 100);
    }
    stepped = stepped * (1 + r) + currentSIP;
  }

  // Total contributed
  let contributed = 0;
  let csip = monthly;
  for (let m = 1; m <= months; m++) {
    if (m > 1 && (m - 1) % 12 === 0) {
      csip = csip * (1 + increment / 100);
    }
    contributed += csip;
  }

  return (
    <ToolShell
      title="SIP corpus calculator"
      description="Calculate the future value of monthly SIPs with optional annual step-up (most useful — your salary grows every year, your SIP should too)."
      inputs={
        <>
          <NumberInput
            label="Monthly SIP"
            value={monthly}
            min={1000}
            max={200000}
            step={1000}
            prefix="₹"
            onChange={setMonthly}
          />
          <NumberInput
            label="Years"
            value={years}
            min={3}
            max={40}
            step={1}
            suffix="y"
            onChange={setYears}
          />
          <NumberInput
            label="Annual return (CAGR)"
            value={rate}
            min={6}
            max={18}
            step={0.5}
            suffix="%"
            onChange={setRate}
          />
          <NumberInput
            label="Annual step-up"
            value={increment}
            min={0}
            max={20}
            step={1}
            suffix="%"
            onChange={setIncrement}
          />
        </>
      }
      outputs={
        <>
          <OutputCard label="Total contributed" value={fmtINR(contributed)} />
          <OutputCard label="Without step-up" value={fmtINR(plain)} tone="ink" />
          <OutputCard label="With step-up" value={fmtINR(stepped)} tone="accent" />
          <OutputCard
            label="Step-up adds"
            value={fmtINR(stepped - plain)}
            tone="up"
          />
        </>
      }
      takeaway={`A ${increment}% annual SIP increase adds ${fmtINR(stepped - plain)} over ${years} years vs flat SIP. The discipline of increasing with salary is the most underused wealth lever.`}
    />
  );
}
