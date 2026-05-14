import type { ConceptMapNode, ConceptMapEdge } from "./types";

export const CONCEPT_NODES: ConceptMapNode[] = [
  // Policy
  { id: "fed", label: "Fed (US)", group: "policy", description: "Sets the US policy rate. Most influential institution in global finance." },
  { id: "rbi", label: "RBI (India)", group: "policy", description: "Sets the Indian policy rate. Defends the rupee." },
  { id: "boj", label: "Bank of Japan", group: "policy", description: "Long ZIRP; only recently exiting. Source of the yen carry trade." },

  // Indicators
  { id: "us-10y", label: "US 10-Year Yield", group: "indicator", description: "World's benchmark interest rate. Long-duration asset prices live or die by this number." },
  { id: "dxy", label: "DXY (Dollar Index)", group: "indicator", description: "USD value vs basket of majors. Rising DXY = tightening global liquidity." },
  { id: "us-cpi", label: "US CPI", group: "indicator", description: "Monthly US inflation print. Top macro event globally." },
  { id: "india-cpi", label: "India CPI", group: "indicator", description: "Monthly Indian inflation print. Food-heavy basket." },
  { id: "vix", label: "VIX", group: "indicator", description: "S&P 500 implied volatility. Global fear gauge." },
  { id: "india-vix", label: "India VIX", group: "indicator", description: "Nifty implied volatility. Local stress signal." },

  // Macro
  { id: "global-liquidity", label: "Global USD Liquidity", group: "macro", description: "The slow tide. Fed balance sheet + global dollar flows." },
  { id: "risk-on-off", label: "Risk-on / Risk-off regime", group: "macro", description: "Capital flow regime between safety and risk assets." },

  // Markets
  { id: "spx", label: "S&P 500", group: "market", description: "US large-cap equity. Sets the global equity tone." },
  { id: "nasdaq", label: "Nasdaq", group: "market", description: "US tech-heavy index. Most rate-sensitive equity exposure." },
  { id: "nifty", label: "Nifty 50", group: "market", description: "India's flagship equity index." },
  { id: "bank-nifty", label: "Bank Nifty", group: "market", description: "Indian bank index. F&O volume king." },
  { id: "nikkei", label: "Nikkei 225", group: "market", description: "Japan's flagship equity index. Hostage to yen and global growth." },

  { id: "usd-inr", label: "USD/INR", group: "market", description: "Rupee vs dollar — the most important Indian currency pair." },
  { id: "yen", label: "Japanese yen", group: "market", description: "Historical funding currency for global carry trades." },

  { id: "brent", label: "Brent Crude", group: "market", description: "International oil benchmark. India imports 85%." },
  { id: "gold", label: "Gold", group: "market", description: "Crisis insurance. Real-yield sensitive." },
  { id: "copper", label: "Copper", group: "market", description: "Dr. Copper — leading indicator for global manufacturing." },

  { id: "g-sec", label: "Indian 10Y G-Sec", group: "market", description: "Indian government bond benchmark." },
  { id: "btc", label: "Bitcoin", group: "market", description: "Macro risk asset; correlates with Nasdaq." },
];

export const CONCEPT_EDGES: ConceptMapEdge[] = [
  // Fed-driven
  { source: "fed", target: "us-10y", label: "sets policy anchor", polarity: "context" },
  { source: "us-10y", target: "dxy", label: "higher 10Y → DXY up", polarity: "positive" },
  { source: "us-10y", target: "spx", label: "higher 10Y → SPX down", polarity: "negative" },
  { source: "us-10y", target: "nasdaq", label: "higher 10Y → Nasdaq down more", polarity: "negative" },
  { source: "us-10y", target: "gold", label: "higher real yields → gold down", polarity: "negative" },
  { source: "us-10y", target: "btc", label: "higher 10Y → BTC down", polarity: "negative" },

  // DXY cascades
  { source: "dxy", target: "usd-inr", label: "DXY up → INR weaker", polarity: "positive" },
  { source: "dxy", target: "yen", label: "DXY up → yen weaker", polarity: "positive" },
  { source: "dxy", target: "gold", label: "DXY up → gold down", polarity: "negative" },
  { source: "dxy", target: "brent", label: "DXY up → oil down", polarity: "negative" },
  { source: "dxy", target: "copper", label: "DXY up → copper down", polarity: "negative" },

  // Liquidity drives risk-on/off
  { source: "global-liquidity", target: "risk-on-off", label: "more liquidity → risk-on", polarity: "positive" },
  { source: "risk-on-off", target: "nifty", label: "risk-on → Nifty up", polarity: "positive" },
  { source: "risk-on-off", target: "spx", label: "risk-on → SPX up", polarity: "positive" },
  { source: "risk-on-off", target: "btc", label: "risk-on → BTC up", polarity: "positive" },

  // India-specific
  { source: "rbi", target: "g-sec", label: "RBI MPC moves G-Sec yields", polarity: "context" },
  { source: "rbi", target: "usd-inr", label: "RBI intervenes in INR", polarity: "context" },
  { source: "usd-inr", target: "india-cpi", label: "INR weak → imported inflation", polarity: "positive" },
  { source: "brent", target: "india-cpi", label: "oil up → CPI up", polarity: "positive" },
  { source: "brent", target: "usd-inr", label: "oil up → INR weak", polarity: "positive" },
  { source: "g-sec", target: "nifty", label: "higher yields → equity drag", polarity: "negative" },
  { source: "india-cpi", target: "rbi", label: "CPI > 4% → RBI hawkish", polarity: "positive" },

  // Carry
  { source: "boj", target: "yen", label: "BoJ rate path drives yen", polarity: "context" },
  { source: "yen", target: "nikkei", label: "yen strong → Nikkei down", polarity: "negative" },
  { source: "yen", target: "spx", label: "carry unwind → SPX down", polarity: "negative" },

  // Volatility / sentiment
  { source: "vix", target: "india-vix", label: "VIX spike → India VIX up", polarity: "positive" },
  { source: "vix", target: "risk-on-off", label: "VIX up → risk-off", polarity: "negative" },

  // Copper / growth
  { source: "copper", target: "spx", label: "copper up → growth view up", polarity: "positive" },
];
