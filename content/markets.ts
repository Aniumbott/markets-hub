import type { Market } from "./types";

export const MARKETS: Market[] = [
  {
    slug: "indian-equities",
    name: "Indian equities",
    tagline: "NSE, BSE, Nifty, Sensex, and the home market you should know best.",
    overview: [
      {
        kind: "p",
        text: "Indian equities are the most accessible market for an Indian investor and the one where local context matters most. Two major exchanges (NSE and BSE), one currency, one regulator (SEBI), and a domestic flow base that's grown from negligible to dominant over the last decade.",
      },
      {
        kind: "p",
        text: "The Nifty 50 represents the top 50 by free-float market cap; the Sensex is BSE's older 30-stock counterpart. Bank Nifty has become India's most actively traded F&O index. Sectoral indices (Nifty IT, Nifty Pharma, Nifty Auto) give you a clean read on which parts of the economy are working.",
      },
    ],
    keyTerms: ["nifty-50", "sensex", "bank-nifty", "nse", "bse", "fii", "dii", "sip", "fno", "pe-ratio", "market-cap"],
    trackers: [
      { label: "Investing.com India", href: "https://in.investing.com/", note: "All-in-one dashboard for Nifty, Sensex, sectors, FX, commodities" },
      { label: "NSE India", href: "https://www.nseindia.com/", note: "Official source for daily FII/DII flow data (~6:30 PM)" },
      { label: "Money Control / Trendlyne", note: "Sectoral heatmaps and earnings tracking" },
      { label: "Screener.in", href: "https://www.screener.in/", note: "Free fundamental screening of Indian listed companies" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "India's equity story over the next 10-20 years rests on three pillars: rising middle-class consumption, manufacturing pivot under PLI schemes, and digital-first services exports. Critique: market cap to GDP is at historical highs; mid-cap and small-cap valuations have stretched after the 2020-24 run.",
      },
      {
        kind: "p",
        text: "Indian retail F&O is among the world's largest in notional volume — but SEBI's own data shows ~90% of individual F&O traders lose money over a year. F&O is not where Indian retail makes money; long-term equity ownership through SIPs has been.",
      },
    ],
    caseStudies: ["hdfc-bank-july-2023"],
  },

  {
    slug: "global-equities",
    name: "Global equities",
    tagline: "S&P 500, Nasdaq, and why the US still sets the global tone.",
    overview: [
      {
        kind: "p",
        text: "The US accounts for ~60% of global equity market cap. The S&P 500 and Nasdaq are the world's two most important equity indices. When they sneeze, Asia catches a cold — and Nifty rarely defies the trend on global risk-off days.",
      },
      {
        kind: "p",
        text: "Beyond the US, Europe (DAX, FTSE), Japan (Nikkei), and China/Hong Kong matter for specific reasons — Japan is the carry-trade funding source, China is the global manufacturing and commodity demand center. The MSCI Emerging Markets index is what FIIs track as the EM bucket India sits inside.",
      },
    ],
    keyTerms: ["fed", "fomc", "us-10y", "dxy", "fed-funds-rate", "boj"],
    trackers: [
      { label: "TradingView (free)", href: "https://www.tradingview.com/", note: "Chart S&P, Nasdaq, Nikkei in one screen" },
      { label: "MarketWatch", href: "https://www.marketwatch.com/", note: "US-focused daily news" },
      { label: "Bloomberg Markets (free articles)", href: "https://www.bloomberg.com/markets" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "For Indian investors, US equity exposure is available via LRS-route direct broking (INDmoney, Vested), Indian mutual funds that invest globally (Motilal Oswal Nasdaq 100, Edelweiss US Tech), and increasingly via fractional ETFs on Indian exchanges (Mirae S&P 500 ETF, etc.).",
      },
      {
        kind: "p",
        text: "Diversifying 10-20% of an Indian portfolio into US equities adds currency diversification (USD appreciation when INR weakens) and exposure to companies (Apple, Microsoft, Nvidia, Google) that have no Indian listed equivalent.",
      },
    ],
    caseStudies: ["covid-march-2020", "yen-carry-august-2024"],
  },

  {
    slug: "forex",
    name: "Forex",
    tagline: "Currencies — the connective tissue that ties every other market together.",
    overview: [
      {
        kind: "p",
        text: "The largest financial market in the world. ~$7.5 trillion in daily volume — more than every equity market combined. Mostly bilateral, mostly between banks and asset managers, mostly invisible to retail.",
      },
      {
        kind: "p",
        text: "For Indian investors, the two currencies that matter are USD/INR (your wealth's exchange rate to the global economy) and the DXY (the dollar's value against a basket of majors). When DXY rises sharply, every other currency including the rupee tends to weaken — and the chain runs through FII flows into Nifty.",
      },
    ],
    keyTerms: ["usd-inr", "dxy", "carry-trade", "yen", "forex-reserves", "current-account"],
    trackers: [
      { label: "TradingView USD/INR", href: "https://www.tradingview.com/symbols/USDINR/", note: "Charts and live quotes" },
      { label: "RBI Reference Rate", href: "https://www.rbi.org.in/Scripts/ReferenceRateArchive.aspx", note: "Official daily INR reference rates" },
      { label: "Investing.com DXY", href: "https://www.investing.com/quotes/us-dollar-index", note: "Dollar Index chart" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "USD/INR is technically a managed float — the RBI lets it move within bands and intervenes to smooth volatility. Major moves usually require RBI tacit acceptance. Watch for INR break-downs to a new all-time low — these often coincide with sharp FII outflows.",
      },
      {
        kind: "p",
        text: "Retail forex trading is restricted in India (cannot trade non-INR pairs domestically). But you can take indirect exposure via overseas equity, gold, or global mutual funds.",
      },
    ],
    caseStudies: ["yen-carry-august-2024"],
  },

  {
    slug: "crude-oil",
    name: "Crude oil",
    tagline: "Brent, WTI, OPEC+ — and why India is uniquely exposed.",
    overview: [
      {
        kind: "p",
        text: "Crude oil is the most economically important commodity. It moves through every product (plastics, paint, fertilizer), every transport network (planes, trucks), and every input price (everything has to be shipped). Two benchmarks dominate global trade: Brent (international) and WTI (US-focused).",
      },
      {
        kind: "p",
        text: "Oil prices are set by the balance of OPEC+ production decisions (cartel supply control), global growth (demand), and inventories. Six-week meeting cycles of OPEC+ have outsized influence on price.",
      },
    ],
    keyTerms: ["brent", "wti", "opec", "crude-oil", "current-account"],
    trackers: [
      { label: "Investing.com Brent", href: "https://www.investing.com/commodities/brent-oil", note: "Live price + chart" },
      { label: "OPEC Monthly Report", href: "https://www.opec.org/opec_web/en/publications/202.htm", note: "Production and demand outlook" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "India imports ~85% of its crude. Every $10/barrel sustained move changes the current account deficit by ~$15 billion/year and the rupee by 50-70 paise on average. Sectors directly exposed: OMCs (IOC, BPCL, HPCL), upstream (ONGC, Reliance E&P), paints, cement, tyres, airlines, FMCG transport costs.",
      },
      {
        kind: "p",
        text: "India's strategic petroleum reserve is only about 10 days of consumption — minimal cushion. Recent additions of Russian discounted crude have helped the import bill, but the structural dependency on imports remains.",
      },
    ],
    caseStudies: ["covid-march-2020"],
  },

  {
    slug: "gold-metals",
    name: "Gold, silver & industrial metals",
    tagline: "Gold as crisis insurance, copper as the growth signal, India as the world's #2 gold consumer.",
    overview: [
      {
        kind: "p",
        text: "Gold is a financial asset, not just a metal. Its price is driven by real US yields (most important), the dollar, central bank buying, and crisis demand. When real yields fall or the dollar weakens, gold rallies. When real yields rise — as in 2022-23 — gold can struggle.",
      },
      {
        kind: "p",
        text: "Industrial metals are a different story. Copper, aluminium, nickel, and zinc track global manufacturing demand. Copper especially has 'Dr. Copper' status — leading indicator for global growth. China consumes ~55% of global copper.",
      },
    ],
    keyTerms: ["gold", "sgb", "real-yields", "copper", "industrial-metals", "safe-haven"],
    trackers: [
      { label: "Investing.com Gold (USD)", href: "https://www.investing.com/commodities/gold", note: "Spot price" },
      { label: "MCX (India)", href: "https://www.mcxindia.com/", note: "Indian gold and silver futures" },
      { label: "World Gold Council", href: "https://www.gold.org/", note: "Quarterly demand reports" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "Indian households are the world's second-largest gold holders after China. ~25,000 tonnes — more than what's in most central bank vaults. Most is jewellery; investment forms are Sovereign Gold Bonds (SGB), Gold ETFs, and digital gold.",
      },
      {
        kind: "p",
        text: "SGBs are the best instrument for most Indian gold investors: 2.5% annual coupon, LTCG-exempt if held to maturity, fully government-backed, no making charges, no storage. Strictly dominant over physical for investment purposes (jewellery has emotional value beyond pure investment math).",
      },
    ],
    caseStudies: [],
  },

  {
    slug: "bonds",
    name: "Bonds & interest rates",
    tagline: "The US 10-year is the world's most important asset. Indian G-Secs are the local anchor.",
    overview: [
      {
        kind: "p",
        text: "Bonds are loans you make to a borrower in exchange for periodic interest and return of principal. Government bonds (G-Secs in India, Treasuries in the US) are the cleanest reference. Corporate bonds add credit risk for higher yield.",
      },
      {
        kind: "p",
        text: "The US 10-year Treasury yield is the global benchmark for the 'risk-free' long-duration rate. Almost every long-duration asset on Earth is priced relative to it. When the US 10Y moves 1%, billions of dollars in assets reprice.",
      },
    ],
    keyTerms: ["yield", "us-10y", "g-sec", "t-bill", "duration", "bond", "coupon", "yield-curve"],
    trackers: [
      { label: "Investing.com US 10Y", href: "https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield", note: "The world's most important rate" },
      { label: "Investing.com India 10Y", href: "https://www.investing.com/rates-bonds/india-10-year-bond-yield", note: "Indian G-Sec yield" },
      { label: "RBI Retail Direct", href: "https://rbiretaildirect.org.in/", note: "Buy G-Secs and T-Bills directly as retail" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "Retail Indian investors traditionally avoided bonds — FDs were simpler and yielded similarly. Post-2021, RBI Retail Direct lets you buy G-Secs and T-Bills with no intermediary. For tax-efficient long-duration exposure, dynamic and target-date debt mutual funds work well.",
      },
      {
        kind: "p",
        text: "G-Sec yields are the benchmark for everything else in Indian fixed income — corporate bond spreads, FD rates, home loan rates. RBI MPC decisions move G-Sec yields within minutes.",
      },
    ],
    caseStudies: [],
  },

  {
    slug: "crypto",
    name: "Crypto as a macro asset",
    tagline: "Bitcoin, Ethereum, stablecoins — and the harsh Indian tax reality.",
    overview: [
      {
        kind: "p",
        text: "Bitcoin and Ethereum are the two dominant cryptos by market cap. Both correlate ~0.5-0.7 with Nasdaq over recent years — they act more like a leveraged tech bet than digital gold most of the time. The narrative shifts (digital gold, payment system, store of value) but the trading behaviour has been risk-asset.",
      },
      {
        kind: "p",
        text: "Stablecoins (USDT, USDC) are crypto's 'cash' — pegged to USD, used for trading and storing value within the crypto ecosystem. They're a fast-growing channel for dollar transmission globally.",
      },
    ],
    keyTerms: ["bitcoin", "ethereum", "stablecoin", "vda-tax", "halving"],
    trackers: [
      { label: "TradingView BTC", href: "https://www.tradingview.com/symbols/BTCUSD/", note: "Live BTC/USD" },
      { label: "CoinGecko", href: "https://www.coingecko.com/", note: "All-in-one tracker with market caps" },
      { label: "Glassnode (free tier)", href: "https://glassnode.com/", note: "On-chain analytics" },
    ],
    indianContext: [
      {
        kind: "p",
        text: "Indian crypto taxation is among the strictest globally: 30% flat tax on all gains, 1% TDS on every trade, no offsetting losses against other income, no carrying forward losses. This effectively kills active trading and pushes serious holders to long-only buy-and-hold strategies.",
      },
      {
        kind: "p",
        text: "If you allocate to crypto, treat it as a small position (under 5% of investable assets), prefer BTC and ETH only, use registered exchanges (CoinDCX, WazirX, Mudrex), and budget for the 30% tax on any gains. Self-custody via hardware wallet for amounts you wouldn't want lost.",
      },
    ],
    caseStudies: [],
  },
];

export function getMarket(slug: string): Market | undefined {
  return MARKETS.find((m) => m.slug === slug);
}
