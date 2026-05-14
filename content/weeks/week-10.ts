import type { Lesson } from "../types";

const W = 10;

const lessons: Lesson[] = [
  {
    id: "w10-l01",
    weekId: W,
    order: 1,
    title: "What Bitcoin and Ethereum actually are",
    summary: "Stripped of hype, what these two networks do and why they're treated as macro assets today.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Most introductions to crypto either sell it or dismiss it. Both fail. The honest answer: Bitcoin and Ethereum are real, durable financial networks that have grown into multi-trillion-dollar asset classes. Whether you should own them is a separate question from understanding what they are.",
      },
      {
        kind: "h2",
        text: "Bitcoin in one paragraph",
      },
      {
        kind: "p",
        text: "{{bitcoin|Bitcoin}} is a peer-to-peer digital money network launched in January 2009, post-financial-crisis. Three core properties: (1) supply is hard-capped at 21 million BTC ever, encoded in the protocol; (2) issuance halves every ~4 years ({{halving|halving events}}); (3) transactions are validated by a distributed network of computers (miners) — no bank, no central server.",
      },
      {
        kind: "p",
        text: "It started as a payments idea. It's now mostly held as a long-duration macro asset — 'digital gold' in marketing speak, though its price behavior often correlates with risk assets like Nasdaq more than with gold.",
      },
      {
        kind: "h2",
        text: "Ethereum in one paragraph",
      },
      {
        kind: "p",
        text: "{{ethereum|Ethereum}} is a programmable smart contract platform launched in 2015. Think of it as a global computer that anyone can deploy code on. The native asset (ETH) is needed to pay for computation (called 'gas'). Most stablecoins (USDT, USDC), decentralized exchanges, lending protocols, and NFTs run on Ethereum.",
      },
      {
        kind: "p",
        text: "Ethereum switched from proof-of-work (energy-intensive mining) to proof-of-stake in 2022 (validators stake ETH to secure the network). Energy consumption dropped 99%+; ETH became 'productive' in that staking now yields ~3-4% APR.",
      },
      {
        kind: "h2",
        text: "How they're treated by markets",
      },
      {
        kind: "p",
        text: "Despite the 'digital gold' and 'global computer' narratives, both behave like high-beta risk assets in macro terms:",
      },
      {
        kind: "list",
        items: [
          "Correlation with Nasdaq: ~0.6-0.7 over the past 4 years",
          "Beta to Nasdaq: ~2-3x (BTC and ETH move 2-3% when Nasdaq moves 1%)",
          "Drawdowns: 70-85% peak-to-trough is normal (BTC has had several)",
          "Up-cycles: 5-10x runs every few years in 'crypto bull markets'",
        ],
      },
      {
        kind: "analogy",
        title: "Two utilities of the same color",
        text: "Bitcoin is electricity grid infrastructure — boring, foundational, you don't think about it but it powers everything. Ethereum is the internet — programmable, flexible, where all the interesting applications live. They're both 'crypto' but they're very different kinds of investments. Bitcoin trades on macro and supply. Ethereum trades on usage and network growth.",
      },
      {
        kind: "h2",
        text: "Why they survived",
      },
      {
        kind: "p",
        text: "Crypto critics have called the death of Bitcoin a 'thousand times'. Yet 15+ years later, Bitcoin and Ethereum together are worth over $2.5 trillion (as of late 2024). Why?",
      },
      {
        kind: "list",
        items: [
          "**Real users** — millions of daily active users across the ecosystems",
          "**Real use cases** — stablecoins for cross-border payments, DeFi for permissionless lending, on-chain settlements",
          "**Institutional adoption** — BlackRock, Fidelity launched Bitcoin ETFs in early 2024 with $20B+ inflows",
          "**Network effects** — biggest networks attract more developers, more capital, more usage",
        ],
      },
      {
        kind: "h2",
        text: "What they aren't",
      },
      {
        kind: "list",
        items: [
          "**Stable currencies** — too volatile to be used as money for daily transactions",
          "**Inflation hedges** (Bitcoin's claim) — empirically performed poorly during 2022 inflation",
          "**Productive in themselves** — Bitcoin generates no cash flow (Ethereum staking is closer to productive)",
          "**Backed by anything** — value comes from network effects and belief, not collateral",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Crypto outside BTC and ETH",
        text: "There are thousands of other cryptocurrencies ('altcoins'). 99% are illiquid speculation vehicles, scams, or zombie projects. The handful with serious adoption (Solana, Ripple, Chainlink, etc.) are still much riskier than BTC/ETH. For most retail, BTC and ETH only — and even that as a small allocation.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Bitcoin: fixed-supply digital money network; treated as macro asset / risk-on bet.",
          "Ethereum: programmable smart contract platform; ETH is 'fuel' plus staking-productive.",
          "Both behave like 2-3x beta Nasdaq exposure in practice.",
          "Survived 15+ years; institutional adoption accelerated via ETFs in 2024.",
          "Not inflation hedges, not stable, not productive in the equity sense — but real networks with real users.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the supply cap on Bitcoin?",
        options: ["1 million BTC", "21 million BTC, hard-coded in the protocol", "100 million BTC", "Unlimited"],
        correctIndex: 1,
        explanation: "Bitcoin's protocol limits total supply to 21 million BTC ever, with new issuance halving roughly every 4 years. The next halving in 2028 will reduce block rewards from 3.125 BTC to 1.5625 BTC.",
      },
      {
        id: "q2",
        prompt: "Why are Bitcoin and Ethereum sometimes called 'high-beta Nasdaq' rather than 'digital gold'?",
        options: [
          "Marketing reasons",
          "Empirically they correlate 0.6-0.7 with Nasdaq and move 2-3x as much — risk-on behavior, not haven behavior",
          "Both are tech stocks",
          "They are listed on Nasdaq",
        ],
        correctIndex: 1,
        explanation: "Despite the 'digital gold' narrative, BTC and ETH have traded as risk-on assets. They rally with growth tech in easy-money cycles and crash with growth tech in tightening cycles.",
      },
    ],
  },
  {
    id: "w10-l02",
    weekId: W,
    order: 2,
    title: "Crypto's macro correlation and cycles",
    summary: "Why crypto cycles look like 4-year macro cycles, and what drives the booms and busts.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Crypto has had three major bull cycles since Bitcoin's launch: 2013, 2017, and 2020-21. The next cycle started arguably in late 2023 / early 2024. The 4-year rhythm isn't coincidence — it's driven by the combination of Bitcoin halvings, global liquidity, and Fed policy.",
      },
      {
        kind: "h2",
        text: "The 4-year cycle pattern",
      },
      {
        kind: "table",
        headers: ["Cycle", "Bull peak", "Bear bottom", "BTC range"],
        rows: [
          ["Cycle 1", "Nov 2013", "Jan 2015", "$13 → $1,150 → $200"],
          ["Cycle 2", "Dec 2017", "Dec 2018", "$200 → $19,500 → $3,200"],
          ["Cycle 3", "Nov 2021", "Nov 2022", "$3,200 → $69,000 → $15,500"],
          ["Cycle 4 (current)", "TBD (2025?)", "TBD", "$15,500 → $100,000+ → ?"],
        ],
      },
      {
        kind: "p",
        text: "Each cycle: ~3 years of accumulation/decline, ~1 year of mania at peak. Bear markets are brutal (70-85% drops). Bull markets are euphoric (5-10x runs).",
      },
      {
        kind: "h2",
        text: "Halvings as a supply catalyst",
      },
      {
        kind: "p",
        text: "Bitcoin halvings reduce new BTC issuance by 50% every ~4 years. Past halvings: 2012, 2016, 2020, 2024. Next: 2028.",
      },
      {
        kind: "p",
        text: "After each halving, supply growth slows just as demand cycles often pick up. The combination of reduced supply + improving demand has historically produced the bull market run in the 12-18 months following each halving. Correlation isn't causation, but the pattern is striking.",
      },
      {
        kind: "h2",
        text: "Liquidity as the dominant driver",
      },
      {
        kind: "p",
        text: "Even more important than halvings: global liquidity (Fed balance sheet, M2 money supply, dollar strength).",
      },
      {
        kind: "list",
        items: [
          "**2020-21 bull market** — Fed went from $4T balance sheet to $9T. Trillions in stimulus. Risk assets exploded. Bitcoin 10x.",
          "**2022 bear market** — Fed hiked 525 bps. QT (balance sheet shrinkage). Risk assets crushed. Bitcoin -75%.",
          "**2023-24 recovery** — Fed paused. Dollar peaked. Liquidity stabilized. Bitcoin recovered.",
          "**2024-25 forward** — Fed cutting cycle expected. Liquidity expected to expand. Bullish setup.",
        ],
      },
      {
        kind: "analogy",
        title: "The crypto tide and the boats",
        text: "Crypto bull markets ride on the tide of global liquidity. The tide comes in (Fed easing) and lifts everything — BTC, ETH, growth stocks, EM equity, gold. The tide goes out (Fed tightening) and exposes who's been swimming naked — leveraged crypto traders, broken protocols, overvalued altcoins. The 4-year crypto cycle is largely the 4-year Fed cycle in disguise.",
      },
      {
        kind: "h2",
        text: "Institutional adoption — the new factor",
      },
      {
        kind: "p",
        text: "January 2024 marked a structural shift: the US approved spot Bitcoin ETFs (BlackRock IBIT, Fidelity FBTC, etc.). These ETFs attracted $20+ billion of inflows in their first year — institutional money buying Bitcoin in pension and retirement accounts.",
      },
      {
        kind: "p",
        text: "This may dampen future cycle volatility somewhat. Institutional buyers tend to be steadier than retail. The 2024 bull market has been less manic than 2021 — fewer scams, less leverage, more 'serious' players. The pattern may rhyme but not exactly repeat.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Indian investors and Bitcoin ETFs",
        text: "Indian investors cannot directly buy US Bitcoin ETFs. The LRS route applies but with tax complications. The simplest exposure for Indians is direct crypto via legal Indian exchanges (CoinDCX, WazirX, Mudrex) — but with the harsh 30% + 1% TDS tax regime. No Indian-listed Bitcoin ETF exists as of 2024.",
      },
      {
        kind: "h2",
        text: "Bear market signposts",
      },
      {
        kind: "p",
        text: "How do you spot the top of a crypto cycle? Historical signs:",
      },
      {
        kind: "list",
        items: [
          "Mainstream media obsession (Time magazine cover, Saturday Night Live skits)",
          "Bizarre new tokens going viral (NFTs in 2021, ICOs in 2017, dog coins)",
          "Funding rates extremely positive (longs paying shorts heavily) on perpetual futures",
          "Bitcoin dominance falling sharply (altcoins leading) — froth signal",
          "Massive ETF inflows decelerating after months of acceleration",
        ],
      },
      {
        kind: "p",
        text: "Bear bottom signs are equally distinctive: 'crypto is dead' articles, exchange failures (FTX 2022), Tether depegging fears, capitulation candles on charts.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Crypto has had ~4-year cycles aligned with Bitcoin halvings and Fed liquidity cycles.",
          "Bull markets: 5-10x in 12-18 months. Bear markets: 70-85% drawdowns over a year.",
          "Halvings reduce new supply; combined with Fed easing cycles, set up bull markets.",
          "January 2024 Bitcoin ETF approvals brought institutional money — may moderate future volatility.",
          "Indian retail accesses crypto via direct exchanges; no Bitcoin ETF available domestically.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does the Bitcoin halving cycle correlate with crypto bull markets?",
        options: [
          "Random",
          "Halvings reduce new BTC supply by 50%; combined with Fed easing cycles that often follow recent slowdowns, supply tightens just as demand picks up",
          "Halvings cause buying pressure directly",
          "Government mandates buying after halvings",
        ],
        correctIndex: 1,
        explanation: "The 4-year halving rhythm + ~4-year Fed cycle alignment have historically combined to set up bullish supply-demand setups, even if causation is murky.",
      },
      {
        id: "q2",
        prompt: "What was the structural shift for crypto in January 2024?",
        options: [
          "Bitcoin replaced gold globally",
          "US approved spot Bitcoin ETFs, allowing institutional and retirement money to buy BTC in regulated vehicles — $20B+ inflows in year one",
          "Bitcoin became legal tender in the US",
          "Crypto became free of regulation",
        ],
        correctIndex: 1,
        explanation: "Spot Bitcoin ETFs (IBIT, FBTC, etc.) opened a major institutional channel. This structural development may make future cycles less manic and more durable.",
      },
    ],
  },
  {
    id: "w10-l03",
    weekId: W,
    order: 3,
    title: "Stablecoins and the dollar's digital extension",
    summary: "USDT and USDC are now multi-hundred-billion-dollar instruments. Why they matter for global dollar liquidity.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "{{stablecoin|Stablecoins}} are crypto assets designed to maintain a peg to a fiat currency — usually USD. The two largest, USDT (Tether) and USDC (Circle), have combined market cap of $180+ billion as of late 2024. They're the second-largest crypto category after Bitcoin.",
      },
      {
        kind: "h2",
        text: "How they work",
      },
      {
        kind: "p",
        text: "USDT and USDC are issued by companies (Tether and Circle respectively). For every USDT in circulation, Tether claims to hold $1 of reserves (dollars, T-Bills, or other assets). Users send actual USD to the issuer, receive USDT, and use it in crypto markets. When they want USD back, they redeem USDT for actual dollars.",
      },
      {
        kind: "p",
        text: "If everyone trusts the issuer maintains 1:1 backing, USDT trades at exactly $1. If trust breaks, USDT can depeg (briefly trade below $1).",
      },
      {
        kind: "h2",
        text: "Why stablecoins matter",
      },
      {
        kind: "list",
        items: [
          "**Trading pair / cash** — Most crypto trades happen against USDT or USDC, not against BTC. They're the 'cash' of crypto markets.",
          "**Cross-border payments** — sending $10,000 across borders via traditional banking takes days and costs $30-100. Via stablecoins, it takes minutes and costs cents.",
          "**Dollar access in restricted regimes** — citizens in Argentina, Turkey, Lebanon use stablecoins to escape local currency collapse.",
          "**DeFi infrastructure** — most lending and trading protocols are built around stablecoins.",
        ],
      },
      {
        kind: "h2",
        text: "The Tether question",
      },
      {
        kind: "p",
        text: "Tether (issuer of USDT) has been controversial for years. Questions over whether reserves are fully audited, whether they include risky assets like Chinese commercial paper, whether the 1:1 backing actually exists in stress conditions.",
      },
      {
        kind: "p",
        text: "Tether has settled with US regulators on past misrepresentations. Reserves have shifted toward US T-Bills. Tether profitability has soared — they earn ~$5+ billion/year from interest on their $100+ billion T-Bill holdings.",
      },
      {
        kind: "p",
        text: "USDC (issued by Circle) is generally considered more transparent — audited reserves, primarily T-Bills, US-regulated.",
      },
      {
        kind: "h2",
        text: "When stablecoins break",
      },
      {
        kind: "p",
        text: "Stablecoin depegs are rare but real:",
      },
      {
        kind: "list",
        items: [
          "**USDC March 2023** — briefly fell to $0.87 when ~$3B of Circle's reserves were stuck at the failing Silicon Valley Bank. Recovered within 72 hours when SVB depositors were guaranteed.",
          "**USDT periodically** — small intraday depegs to $0.96-0.98 in stress periods (May 2022 Terra collapse). Always recovered within days.",
          "**Terra/Luna May 2022** — UST was an 'algorithmic stablecoin' (not 1:1 backed by reserves). It collapsed from $1 to $0.10 in a week, wiping out $40B+ in market cap.",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Algorithmic stablecoins are not the same as backed stablecoins",
        text: "Terra/Luna's UST was 'algorithmically maintained' through arbitrage with another token. It worked in calm times and catastrophically failed in stress. USDT and USDC are different — they're claimed to be backed 1:1 by actual reserves. Be very wary of any 'stablecoin' that doesn't have transparent 1:1 backing.",
      },
      {
        kind: "h2",
        text: "Stablecoins as global dollar extension",
      },
      {
        kind: "p",
        text: "Stablecoins effectively extend the dollar's reach into populations that don't have US bank accounts but want dollar exposure. This has become geopolitically significant — Argentinian families holding USDT during peso collapse, African remittance workers using stablecoins to skip Western Union, etc.",
      },
      {
        kind: "p",
        text: "Many estimate that more dollars now flow through stablecoins for cross-border purposes than through traditional banking for many EM-EM corridors. Tether is one of the largest holders of US T-Bills — bigger than many sovereign holders.",
      },
      {
        kind: "h2",
        text: "Indian context",
      },
      {
        kind: "p",
        text: "In India, stablecoin use is legally murky. RBI has been hostile to crypto and stablecoins. Most Indian crypto traders use USDT for trading pair purposes but don't hold significant USDT directly. The 30% tax + 1% TDS regime applies to stablecoin gains/losses as much as to any other VDA (Virtual Digital Asset).",
      },
      {
        kind: "p",
        text: "RBI's Digital Rupee (e₹) pilot is the Indian state's response — a CBDC (central bank digital currency) that could provide stablecoin-like functionality under government control. Still small in scale as of late 2024.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Stablecoins (USDT, USDC) are crypto pegged 1:1 to USD, backed by reserves (mostly T-Bills).",
          "Function as the 'cash' of crypto markets and increasingly as cross-border payment rails.",
          "USDC is generally more transparent; USDT has historical concerns but has stabilized.",
          "Depegs are rare but real — USDC March 2023 (SVB), Terra UST May 2022 (algorithmic, total collapse).",
          "Avoid algorithmic stablecoins; understand backing before holding.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why did USDC briefly depeg to $0.87 in March 2023?",
        options: [
          "Fraud at Circle",
          "Circle had ~$3 billion of reserves at Silicon Valley Bank, which failed; uncertainty over whether those reserves were recoverable",
          "Bitcoin crashed",
          "Random panic",
        ],
        correctIndex: 1,
        explanation: "USDC's backing exposure to SVB created a 72-hour fear that some reserves were lost. Once US guaranteed SVB depositors, USDC recovered to $1.",
      },
      {
        id: "q2",
        prompt: "Why are stablecoins increasingly important geopolitically?",
        options: [
          "They replace the dollar",
          "They extend dollar access to populations without US bank accounts; significant cross-border payment role; Tether is now among the largest US T-Bill holders",
          "They're issued by governments",
          "They're risk-free",
        ],
        correctIndex: 1,
        explanation: "Stablecoins extend dollar reach globally outside traditional banking, especially for EM citizens hedging local currency risk and for cross-border payments.",
      },
    ],
  },
  {
    id: "w10-l04",
    weekId: W,
    order: 4,
    title: "Indian crypto taxation — the 30% + 1% TDS reality",
    summary: "Indian crypto tax rules are among the harshest globally. How they work and what to plan for.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Budget 2022 introduced specific tax rules for Virtual Digital Assets (VDAs) — crypto, NFTs, similar. The rules are among the most restrictive globally and have dramatically reduced Indian crypto activity. Here's what they actually mean.",
      },
      {
        kind: "h2",
        text: "The three rules",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**30% flat tax on gains** — no slab benefit, no LTCG-STCG distinction, no holding-period concession. All gains taxed at 30% + cess.",
          "**1% TDS on every trade** — every sale of VDA above ₹10,000 (₹50,000 for some categories) attracts 1% TDS. Deducted by the exchange and adjusted at year-end.",
          "**No offsetting losses against other income** — crypto losses cannot offset salary, business, or other capital gains. Losses can carry forward to future crypto gains, but not against other income.",
        ],
      },
      {
        kind: "h2",
        text: "What this means practically",
      },
      {
        kind: "p",
        text: "Example: You buy ₹1 lakh of Bitcoin in 2024. Sell for ₹1.5 lakh in 2025. Gain = ₹50,000. Tax owed = ₹15,000 (30%). Plus 1% TDS deducted at sale (~₹1,500). Net after-tax gain: ₹35,000 — but you've been hit with high taxes regardless of holding period.",
      },
      {
        kind: "p",
        text: "Worse case: you make ₹50,000 profit on Bitcoin and ₹30,000 loss on Ethereum, in the same year. You pay 30% tax on the ₹50,000 Bitcoin gain. You cannot deduct the ₹30,000 Ethereum loss against it. The loss can only offset future crypto gains.",
      },
      {
        kind: "h2",
        text: "The 1% TDS impact",
      },
      {
        kind: "p",
        text: "1% TDS on every sale is the most disruptive rule. Active traders making 50 trades a year see 1% sliced off every sale — cumulatively a massive friction. Indian crypto trading volumes dropped 85-90% after the rule took effect in mid-2022.",
      },
      {
        kind: "p",
        text: "Most active Indian crypto traders moved to offshore exchanges (Binance, Bybit) — illegally for residents — or just gave up trading. The 1% TDS essentially killed active retail crypto trading in India.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Offshore exchanges are illegal for residents",
        text: "Using Binance, Bybit, or other non-Indian exchanges from India violates FEMA (Foreign Exchange Management Act) rules. There have been enforcement cases. The 'easy workaround' to Indian crypto tax is not actually a workaround — it's an unlawful act with real legal exposure.",
      },
      {
        kind: "h2",
        text: "Comparison to other asset classes",
      },
      {
        kind: "table",
        headers: ["Asset", "Tax treatment", "Loss offset"],
        rows: [
          ["Listed equity (>1y)", "12.5% LTCG above ₹1.25L", "Can offset against other capital gains"],
          ["Listed equity (≤1y)", "20% STCG", "Can offset against other STCG"],
          ["Listed bonds (>1y)", "12.5% LTCG", "Yes, against capital gains"],
          ["Real estate (>2y)", "12.5% LTCG (no indexation post Budget 2024)", "Yes"],
          ["Gold (SGB at maturity)", "Tax-free!", "N/A"],
          ["Crypto (any period)", "30% flat", "Only against future crypto gains"],
        ],
      },
      {
        kind: "p",
        text: "Crypto tax is the worst of all options — flat 30%, no holding incentive, no other-asset loss netting, 1% TDS on every trade. This makes the after-tax return profile very harsh.",
      },
      {
        kind: "h2",
        text: "Compliance basics",
      },
      {
        kind: "p",
        text: "If you do hold crypto:",
      },
      {
        kind: "list",
        items: [
          "Use Indian exchanges (CoinDCX, WazirX, Mudrex). They handle the 1% TDS automatically.",
          "Keep records of all buy/sell transactions with dates, INR values, and counterparty exchange.",
          "Report VDA income separately in your tax return — there's a dedicated schedule (Schedule VDA in ITR-2/ITR-3).",
          "Form 26AS will show the TDS deducted; reconcile this with exchange statements.",
          "Total annual income from crypto is taxed at 30% — pay advance tax to avoid interest.",
        ],
      },
      {
        kind: "h2",
        text: "Is crypto still worth it?",
      },
      {
        kind: "p",
        text: "For long-term buy-and-hold investors, the 30% rate is bearable. Bitcoin compounding at 20-30% nominal can still leave you with 15-20% post-tax returns over multi-year periods — competitive with high-quality equity.",
      },
      {
        kind: "p",
        text: "For active traders, the 1% TDS + 30% rate makes it essentially impossible to compound. Indian crypto trading is functionally dead.",
      },
      {
        kind: "p",
        text: "The pragmatic position: small allocation (under 3% of portfolio), BTC and ETH only, treat as long-term hold, plan for the 30% tax on any eventual gains, never trade for short-term profit.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "30% flat tax on crypto gains — no slab, no holding period benefit.",
          "1% TDS on every sale — destroys active trading economics.",
          "Crypto losses can only offset future crypto gains, not other income.",
          "Crypto tax regime is the harshest of any Indian asset class.",
          "Practical approach: small allocation, long-term hold, BTC+ETH only via legal Indian exchanges.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the tax rate on Bitcoin gains for an Indian resident, regardless of holding period?",
        options: ["12.5% LTCG above ₹1.25L", "20% STCG", "30% flat", "Slab rate"],
        correctIndex: 2,
        explanation: "Indian VDA tax is a flat 30% on all gains regardless of holding period. No LTCG/STCG distinction, no exemption threshold.",
      },
      {
        id: "q2",
        prompt: "Can you offset Ethereum losses against Bitcoin gains in the same year?",
        options: [
          "No — losses cannot offset against other income at all",
          "Yes, partially — only against future VDA gains; cannot offset against salary or other capital gains",
          "Yes, fully",
          "Only if both are on the same exchange",
        ],
        correctIndex: 1,
        explanation: "Crypto losses can carry forward to offset future VDA gains, but cannot offset salary, other capital gains, or business income.",
      },
    ],
  },
  {
    id: "w10-l05",
    weekId: W,
    order: 5,
    title: "Custody, exchanges, and self-sovereignty",
    summary: "Holding crypto safely. The trade-offs between exchanges (convenient, risky) and self-custody (secure, complex).",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Once you own crypto, where you hold it matters. The crypto adage 'not your keys, not your coins' captures the choice between trusting an exchange (convenient) and self-custody (full control, full responsibility).",
      },
      {
        kind: "h2",
        text: "Exchange custody",
      },
      {
        kind: "p",
        text: "Most retail crypto sits on exchanges — Coinbase, Binance, CoinDCX, etc. The exchange holds the private keys; you have an account balance.",
      },
      {
        kind: "p",
        text: "Pros: convenient (web/mobile app), easy to buy/sell, automatic tax reporting (in India), regulated, recovery options if you lose login.",
      },
      {
        kind: "p",
        text: "Cons: counterparty risk (the exchange could be hacked, mismanaged, or go bankrupt), regulatory risk (assets can be frozen), the platform technically owns the coins.",
      },
      {
        kind: "h2",
        text: "Exchange failures — real history",
      },
      {
        kind: "list",
        items: [
          "**Mt Gox 2014** — at the time, world's largest BTC exchange. Lost 850,000 BTC to hack (worth ~$50B today). Most customers got partial recovery 10 years later.",
          "**FTX November 2022** — second-largest crypto exchange. Sam Bankman-Fried diverted customer funds. $8 billion in customer money frozen, mostly lost.",
          "**WazirX (India) July 2024** — major hack drained ~$235 million in crypto. Indian users had funds frozen for months.",
          "**Smaller failures** — happen regularly. Most Indian exchanges have had at least one outage / security incident.",
        ],
      },
      {
        kind: "h2",
        text: "Self-custody",
      },
      {
        kind: "p",
        text: "Self-custody means you control the private key — a 12 or 24 word seed phrase that uniquely controls your crypto wallet. No company, no platform, no recovery option (if you lose the seed, the coins are gone).",
      },
      {
        kind: "p",
        text: "Wallet options:",
      },
      {
        kind: "list",
        items: [
          "**Hardware wallets** (Ledger, Trezor) — physical USB-like device that stores keys offline. Industry standard for serious holdings.",
          "**Software wallets** (MetaMask, Trust Wallet, Phantom) — browser extensions or mobile apps. Convenient but less secure than hardware.",
          "**Paper wallets** — keys printed/written. Most secure for long-term holding but inconvenient.",
        ],
      },
      {
        kind: "p",
        text: "Pros of self-custody: no counterparty risk, full control, immune to exchange failures, can access DeFi protocols.",
      },
      {
        kind: "p",
        text: "Cons: full responsibility, complex setup, no recovery if you lose the seed phrase, harder for tax compliance.",
      },
      {
        kind: "analogy",
        title: "The bank vs the home safe",
        text: "Exchange custody is your savings account at HDFC Bank — convenient, FDIC-equivalent up to certain limits, professionally managed, but the bank technically holds your money. Self-custody is a safe deposit box that only you have a key to — total control, no fees, no counterparty risk, but if you lose the key it's gone forever.",
      },
      {
        kind: "h2",
        text: "The pragmatic Indian approach",
      },
      {
        kind: "p",
        text: "Realistic guidance for retail in India:",
      },
      {
        kind: "list",
        items: [
          "Small amounts you might want to sell in 1-2 years: keep on a reputable Indian exchange (CoinDCX, Mudrex). The 1% TDS is automatically deducted; tax compliance is automatic.",
          "Larger amounts you intend to hold long-term: hardware wallet (Ledger Nano S Plus or Trezor Model One, ₹6-12k cost).",
          "Never hold significant amounts on a software wallet (browser extension) — vulnerable to phishing and malware.",
          "Backup your seed phrase to two separate physical locations (bank locker + home safe).",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Scams in crypto are rampant",
        text: "Fake support DMs on Telegram, 'investment advisors' on Instagram promising guaranteed returns, fake exchange websites, phishing emails. The crypto space attracts scammers because transactions are irreversible. Default rule: nobody from Binance or your wallet provider will ever DM you. Never share your seed phrase. If something seems too good to be true (40% APR on crypto deposits!), it is.",
      },
      {
        kind: "h2",
        text: "DeFi — beyond exchanges",
      },
      {
        kind: "p",
        text: "Decentralized Finance (DeFi) protocols let you do exchange-like activities (trading, lending, derivatives) without an exchange — purely through smart contracts on Ethereum.",
      },
      {
        kind: "p",
        text: "Examples: Uniswap (DEX), Aave (lending), Curve (stablecoin AMM), MakerDAO (DAI stablecoin).",
      },
      {
        kind: "p",
        text: "Pros: no KYC, no centralized counterparty, immune to exchange failures.",
      },
      {
        kind: "p",
        text: "Cons: smart contract risk (hacks, bugs), complexity, gas fees on Ethereum, harder for Indian tax compliance.",
      },
      {
        kind: "p",
        text: "Indian retail should approach DeFi cautiously. The tax complexity (every protocol interaction is technically a taxable event) makes it operationally very hard to use compliantly.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Exchange custody: convenient but carries counterparty risk (Mt Gox, FTX, WazirX as examples).",
          "Self-custody: hardware wallet for serious holdings; you control keys, no recovery option.",
          "Pragmatic Indian approach: small amounts on Indian exchanges, larger long-term holdings on hardware wallet.",
          "Never share seed phrase. Backup to two physical locations.",
          "DeFi is technologically interesting but operationally hard for compliant Indian use.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the main risk of keeping crypto on an exchange?",
        options: [
          "Tax penalties",
          "Counterparty risk — the exchange could be hacked, mismanaged, or fail (Mt Gox, FTX, WazirX examples)",
          "Bitcoin price falls",
          "Internet connectivity",
        ],
        correctIndex: 1,
        explanation: "Exchanges are custodial — they hold your keys. If they fail or are compromised, your access to coins can be lost. Self-custody removes this single risk.",
      },
      {
        id: "q2",
        prompt: "What's the recommended approach for storing significant long-term crypto holdings?",
        options: [
          "Browser wallet (MetaMask)",
          "Hardware wallet (Ledger, Trezor) with seed phrase backed up to two separate physical locations",
          "Indian exchange custody",
          "Print on paper and keep at home",
        ],
        correctIndex: 1,
        explanation: "Hardware wallets store keys offline, minimizing attack surface. Combined with physical seed backup, this is the industry standard for serious long-term holders.",
      },
    ],
  },
  {
    id: "w10-l06",
    weekId: W,
    order: 6,
    title: "Crypto as a small portfolio allocation",
    summary: "If you allocate to crypto, how much, in what form, and how to manage the position over years.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "After all the analysis — what's the practical role of crypto in an Indian investor's portfolio? The honest answer: optional, small, and treated like a separate asset class with its own rules.",
      },
      {
        kind: "h2",
        text: "Does crypto belong in your portfolio?",
      },
      {
        kind: "p",
        text: "Reasons it might:",
      },
      {
        kind: "list",
        items: [
          "Genuine diversification (BTC has periods of low correlation with equity)",
          "Asymmetric upside (history of multi-bagger returns in bull cycles)",
          "Long-term store of value bet (the digital gold thesis)",
          "Currency-debasement hedge (in extreme scenarios)",
        ],
      },
      {
        kind: "p",
        text: "Reasons it might not:",
      },
      {
        kind: "list",
        items: [
          "Volatility is severe (70-85% drawdowns are normal)",
          "Indian taxation is harsh (30% flat, no offset)",
          "Custody is complex and irreversible if mishandled",
          "Long-term real return is uncertain",
        ],
      },
      {
        kind: "h2",
        text: "If yes, how much?",
      },
      {
        kind: "p",
        text: "Industry suggested allocations: 1-5% of total investable assets for most retail. The math: crypto is highly volatile, so even a small allocation can produce meaningful absolute return contribution in bull cycles, and meaningful absolute loss in bear cycles.",
      },
      {
        kind: "p",
        text: "Example: 2% of ₹50 lakh portfolio = ₹1 lakh in crypto. If Bitcoin 5x's, that becomes ₹5 lakh — a meaningful boost without portfolio-wrecking risk. If it goes to zero, you lose ₹1 lakh — manageable in a multi-decade horizon.",
      },
      {
        kind: "h2",
        text: "What to buy",
      },
      {
        kind: "p",
        text: "Stick to Bitcoin (BTC) and Ethereum (ETH) for retail. Reasons:",
      },
      {
        kind: "list",
        items: [
          "Largest, most liquid",
          "Longest track record (15 and 9 years respectively)",
          "Institutional adoption (Bitcoin ETFs in US)",
          "Lower probability of going to zero than altcoins",
        ],
      },
      {
        kind: "p",
        text: "Avoid: meme coins (Dogecoin, Shiba Inu), small-cap altcoins, NFTs as investments, anything 'guaranteed return', new launches, and most DeFi yield farms.",
      },
      {
        kind: "h2",
        text: "How to SIP",
      },
      {
        kind: "p",
        text: "Like any volatile asset, dollar-cost averaging works well for crypto. Set up a monthly SIP via Indian exchanges (CoinDCX SIP, WazirX SIP). Buy fixed INR amounts of BTC and ETH monthly. Don't try to time the market.",
      },
      {
        kind: "p",
        text: "A simple SIP framework:",
      },
      {
        kind: "list",
        items: [
          "Monthly amount: 1-3% of monthly investible savings",
          "Split: 60% BTC, 40% ETH (or 70/30 if conservative)",
          "Duration: at minimum 3-5 years; ideally 10+",
          "Review: annually, not monthly",
        ],
      },
      {
        kind: "h2",
        text: "When to take profit",
      },
      {
        kind: "p",
        text: "In a true bull market, crypto can run 5-10x in 12-18 months. After such runs, profit-taking discipline is critical — most retail holds through the bull and crashes through the bear.",
      },
      {
        kind: "p",
        text: "A simple rule: if your crypto allocation grows beyond 5% of total portfolio (from 2% starting point), trim back to 2-3%. This forces 'sell high' behavior mechanically. Take the 30% tax hit on gains, redeploy into other asset classes that may be temporarily cheap.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The danger of euphoria",
        text: "At bull market peaks (late 2017, late 2021), crypto Telegram groups talk about Bitcoin going to $1 million, friends quitting jobs to trade full-time, every taxi driver discussing altcoins. These are bubble signs. The 2018 and 2022 bear markets followed within months. Trim aggressively in euphoria; accumulate quietly in despair.",
      },
      {
        kind: "h2",
        text: "Long-term framing",
      },
      {
        kind: "p",
        text: "Crypto in 2024 is in roughly the position equity was in 1924 — clearly a real asset class, with institutional adoption beginning, but with many cycles of volatility ahead. Allocating a small slice for 10-20 years is a reasonable bet on the technology and adoption trajectory continuing.",
      },
      {
        kind: "p",
        text: "Allocating 30% of your portfolio to crypto, watching prices daily, trading on news — is most likely the worst possible approach. The harsh tax regime and volatility make it a long-term hold or nothing.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "1-5% of total portfolio in crypto is the typical recommended retail range.",
          "BTC and ETH only; avoid altcoins, meme coins, NFTs, leveraged products.",
          "Use monthly SIPs via Indian exchanges; don't try to time entries.",
          "Trim back to target when allocation grows beyond ~5% (bull markets); rebalance.",
          "Long-term hold; the 30% Indian tax and volatility make active trading uneconomic.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's a sensible maximum crypto allocation for a typical Indian investor?",
        options: ["0%", "1-5% of total portfolio", "20-30%", "50%+"],
        correctIndex: 1,
        explanation: "1-5% allows meaningful asymmetric upside exposure without putting your portfolio at risk of severe damage during bear markets.",
      },
      {
        id: "q2",
        prompt: "Which crypto strategy is most appropriate for retail Indian investors given the 30% tax regime?",
        options: [
          "Active trading multiple times per week",
          "Long-term SIP-based holding of BTC and ETH on legal Indian exchanges; rebalance to target annually",
          "Leveraged futures",
          "DeFi yield farming",
        ],
        correctIndex: 1,
        explanation: "30% tax + 1% TDS + extreme volatility = long-term hold is the only viable strategy. SIP averages entry, annual rebalance manages position size.",
      },
    ],
  },
];

export const WEEK_10_LESSONS = lessons;
