"use client";

import { useState } from "react";
import { ToolShell, NumberInput, OutputCard, fmtINRFull } from "./tool-shell";

export function FnoCostCalculator() {
  const [premium, setPremium] = useState(50); // option premium per share
  const [lotSize, setLotSize] = useState(75); // typical Bank Nifty lot size
  const [trades, setTrades] = useState(50);

  // Per round-trip cost (entry + exit)
  const turnoverPerTrade = premium * lotSize * 2; // buy + sell
  const stt = (premium * lotSize * 0.001 * 2) / 1; // 0.1% on sell side option premium (rough)
  const sttSell = premium * lotSize * 0.001; // 0.1% on sell only
  const gst = 0.18 * 40; // ₹40 brokerage typical → GST
  const brokerage = 40; // ₹20 entry + ₹20 exit
  const sebi = turnoverPerTrade * 0.000001; // SEBI charges
  const stampDuty = premium * lotSize * 0.00003; // stamp duty on buy
  const exchange = turnoverPerTrade * 0.000053; // exchange transaction charges

  const costPerTrade = brokerage + sttSell + gst + sebi + stampDuty + exchange;
  const costAsPctOfPremium = (costPerTrade / (premium * lotSize)) * 100;
  const annualCost = costPerTrade * trades;

  return (
    <ToolShell
      title="F&O cost realism check"
      description="Calculate the real cost of options trading after brokerage, STT (Budget 2024 hike), GST, exchange charges. Most retail underestimates this."
      inputs={
        <>
          <NumberInput
            label="Option premium (₹/share)"
            value={premium}
            min={5}
            max={500}
            step={5}
            prefix="₹"
            onChange={setPremium}
          />
          <NumberInput
            label="Lot size"
            value={lotSize}
            min={15}
            max={400}
            step={5}
            onChange={setLotSize}
          />
          <NumberInput
            label="Round-trips per year"
            value={trades}
            min={1}
            max={500}
            step={10}
            onChange={setTrades}
          />
        </>
      }
      outputs={
        <>
          <OutputCard
            label="Cost per round-trip"
            value={fmtINRFull(costPerTrade)}
            tone="down"
          />
          <OutputCard
            label="% of premium"
            value={`${costAsPctOfPremium.toFixed(2)}%`}
            tone={costAsPctOfPremium > 1 ? "down" : "ink"}
          />
          <OutputCard
            label="Annual cost"
            value={fmtINRFull(annualCost)}
            tone="down"
          />
          <OutputCard
            label="Premium total/trade"
            value={fmtINRFull(premium * lotSize)}
          />
        </>
      }
      takeaway={
        costAsPctOfPremium > 2
          ? `Cost is ${costAsPctOfPremium.toFixed(2)}% of premium per round-trip — that's brutal. Need to beat this drag before showing profit. SEBI data: ~90% of F&O retail loses money.`
          : `Cost ratio of ${costAsPctOfPremium.toFixed(2)}% is manageable. Still meaningful drag on profits over many trades.`
      }
    />
  );
}
