"use client";

import type { DiagramKind } from "@/content/types";
import { BidAskDiagram } from "./bid-ask";
import { OrderBookDiagram } from "./order-book";
import { YieldCurveDiagram } from "./yield-curve";
import { FourQuadrantsDiagram } from "./four-quadrants";
import { CompoundGrowthDiagram } from "./compound-growth";
import { SectorDonutDiagram } from "./sector-donut";
import { CorrelationMatrixDiagram } from "./correlation-matrix";
import { CPIBasketDiagram } from "./cpi-basket";
import { CascadeFlowDiagram } from "./cascade-flow";
import { RiskReturnScatterDiagram } from "./risk-return-scatter";
import { AssetClassReturnsDiagram } from "./asset-class-returns";
import { NiftyHistoryDiagram } from "./nifty-history";
import { RateCutImpactDiagram } from "./rate-cut-impact";

interface DiagramProps {
  kind: DiagramKind;
  props?: Record<string, unknown>;
}

export function Diagram({ kind, props = {} }: DiagramProps) {
  switch (kind) {
    case "bid-ask":
      return <BidAskDiagram />;
    case "order-book":
      return <OrderBookDiagram />;
    case "yield-curve":
      return <YieldCurveDiagram />;
    case "four-quadrants":
      return <FourQuadrantsDiagram />;
    case "compound-growth":
      return <CompoundGrowthDiagram {...(props as Record<string, number | undefined>)} />;
    case "sector-donut":
      return <SectorDonutDiagram {...(props as { index?: "nifty" | "sp500" })} />;
    case "correlation-matrix":
      return <CorrelationMatrixDiagram />;
    case "cpi-basket":
      return <CPIBasketDiagram />;
    case "cascade-flow":
      return <CascadeFlowDiagram />;
    case "risk-return-scatter":
      return <RiskReturnScatterDiagram />;
    case "asset-class-returns":
      return <AssetClassReturnsDiagram />;
    case "nifty-history":
      return <NiftyHistoryDiagram />;
    case "rate-cut-impact":
      return <RateCutImpactDiagram />;
    default:
      return null;
  }
}
