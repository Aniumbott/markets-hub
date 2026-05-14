import type { Lesson } from "../types";

const W = 11;

const lessons: Lesson[] = [
  {
    id: "w11-l01",
    weekId: W,
    order: 1,
    title: "The intermarket framework — DXY, yields, commodities, equities",
    summary: "Markets aren't independent. The four major asset classes move in patterns. Knowing the patterns is half the game.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "After 10 weeks of looking at individual markets, it's time to zoom out. The most important insight in macro investing is that markets are connected — they're not 7 separate stories, they're one story told from 7 angles. The intermarket framework is how professionals read the joint story.",
      },
      {
        kind: "h2",
        text: "The four major asset classes",
      },
      {
        kind: "p",
        text: "At the broadest level, every financial asset fits into four boxes:",
      },
      {
        kind: "list",
        items: [
          "**Currencies** — primarily measured by DXY (the dollar against everything else)",
          "**Bonds** — primarily US 10-year Treasury yield; representative of 'risk-free' interest rates globally",
          "**Commodities** — primarily oil (Brent/WTI) and gold; representative of real economy + inflation hedge",
          "**Equities** — primarily S&P 500 and Nasdaq; representative of growth and risk appetite",
        ],
      },
      {
        kind: "p",
        text: "These four don't move randomly. They're tied together by mechanical relationships (rate differentials drive currencies; rates discount equity cash flows; etc.) and by behavioral relationships (risk-on vs risk-off regimes).",
      },
      {
        kind: "h2",
        text: "The classic relationships",
      },
      {
        kind: "diagram",
        diagram: "cascade-flow",
        caption: "One Fed hike cascades through 7 markets over hours to weeks. Each arrow is a mechanical link.",
      },
      {
        kind: "table",
        headers: ["When this happens", "These typically move together"],
        rows: [
          ["Fed hikes / dollar strengthens", "DXY ↑, US 10Y ↑, gold ↓, oil ↓, Nasdaq ↓, EM equities ↓, INR weakens"],
          ["Fed cuts / dollar weakens", "DXY ↓, US 10Y ↓, gold ↑, oil ↑, Nasdaq ↑, EM equities ↑, INR strengthens"],
          ["Risk-off shock", "VIX ↑, DXY ↑ (haven), US 10Y ↓ (haven bid), gold ↑, oil ↓, equities ↓ globally"],
          ["Growth surge", "Copper ↑, oil ↑, US 10Y ↑, DXY mixed, cyclical equities ↑, defensives ↓"],
          ["Stagflation scare", "Oil ↑, gold ↑, US 10Y volatile, equities ↓, USD strength ambiguous"],
        ],
      },
      {
        kind: "h2",
        text: "Reading the divergence",
      },
      {
        kind: "p",
        text: "Sometimes the relationships break — and that's where the signal lives. Examples:",
      },
      {
        kind: "list",
        items: [
          "**Gold rising while real yields rising** — the textbook says these should diverge. When gold rises alongside higher real yields (2023-24), it usually means central bank buying or geopolitical fear is dominating.",
          "**EM equities falling while DXY falling** — classical relationship would have EM rallying on dollar weakness. If EM still falls, it means local issues are dominating (specific country political shock, Adani-style governance event).",
          "**Yields rising while equities rising** — this happens during 'good growth' phases. If yields are rising on growth expectations, both can go up. Breakdown comes when yields rise on inflation fear without growth.",
        ],
      },
      {
        kind: "analogy",
        title: "The orchestra and the score",
        text: "Markets are an orchestra. DXY is the bass section — slow, dominant, sets the rhythm. Bonds are the brass — they're loud when they're playing, drive crescendos. Commodities are the strings — emotive, often leading the melody on growth and inflation. Equities are the woodwinds — most varied, most attentive to the conductor (the Fed). When all four play in harmony (risk-on or risk-off in unison), the music is clear. When they diverge, listen carefully — something interesting is happening.",
      },
      {
        kind: "h2",
        text: "The Indian overlay",
      },
      {
        kind: "p",
        text: "For Indian investors, three additional layers matter:",
      },
      {
        kind: "list",
        items: [
          "**USD/INR** — translates global flows into Indian terms",
          "**Brent crude** — uniquely important for India's CAD, currency, inflation",
          "**FII flows** — the channel through which global moves transmit into Indian equity",
        ],
      },
      {
        kind: "p",
        text: "Indian equities respond to: global risk-on/off + DXY + Brent + FII flows + RBI policy + Indian earnings. The first three are upstream global; the last three are domestic. On any given day, the mix determines which way Nifty moves.",
      },
      {
        kind: "h2",
        text: "Why this is the foundation of everything",
      },
      {
        kind: "p",
        text: "If you understand the intermarket framework, you can answer: 'Why did markets move today?' without doing any specific stock research. Most retail can't — they see a 1% Nifty drop and search for stock-specific news. Often there's none — the move was a function of DXY rallying overnight on Fed comments, with the cascade landing on India hours later.",
      },
      {
        kind: "p",
        text: "Once you can see the cascade in real time, you become a much steadier investor. You stop reacting to noise and start reading the structure.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Four major asset classes: currencies (DXY), bonds (US 10Y), commodities (oil/gold), equities (S&P/Nasdaq).",
          "They move in connected patterns based on macro regime (Fed cycle, growth, risk mood).",
          "Divergences from classical relationships are signals — something specific is happening.",
          "Indian overlay adds USD/INR, Brent, FII flows to the framework.",
          "Reading intermarket relationships removes 80% of the 'why did markets move?' confusion.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the typical intermarket pattern when the Fed signals an aggressive hike?",
        options: [
          "DXY down, gold up, equities up",
          "DXY up, US 10Y up, gold down, oil down, EM equities down, INR weakens",
          "All assets up together",
          "No predictable pattern",
        ],
        correctIndex: 1,
        explanation: "Hawkish Fed = higher US rates = stronger dollar = headwind for risk assets globally + classical chain through EM currencies and equities.",
      },
      {
        id: "q2",
        prompt: "On a day Nifty falls 1.5% with no India-specific news, what should you check first?",
        options: [
          "Random analyst opinions",
          "Overnight US move + DXY + Brent — likely the move came from global cascade, not domestic story",
          "Quarterly results",
          "Brokerage reports",
        ],
        correctIndex: 1,
        explanation: "Most 'mystery moves' in Indian markets trace to global cascades. Checking DXY, US 10Y, Brent, and S&P move first explains 80% of mysterious Indian price action.",
      },
    ],
  },
  {
    id: "w11-l02",
    weekId: W,
    order: 2,
    title: "The dollar as global liquidity",
    summary: "Why the dollar is the master variable in cross-asset analysis. Strength tightens; weakness eases. Everything else follows.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "If you had to pick one variable to summarize the global financial state, you'd pick the US dollar — specifically {{dxy|DXY}}. Strong dollar = global liquidity tightening = headwind for everything risky. Weak dollar = global liquidity loosening = tailwind for risk assets.",
      },
      {
        kind: "h2",
        text: "Why the dollar is the master variable",
      },
      {
        kind: "list",
        items: [
          "**Reserve currency** — ~60% of global FX reserves are USD; most cross-border trade settles in USD",
          "**Commodity priced in USD** — oil, copper, gold, soybeans, wheat all priced in dollars",
          "**Dollar debt** — non-US borrowers (including governments) have ~$13 trillion in dollar-denominated debt",
          "**EM dependence** — emerging markets rely on dollar inflows for growth; dollar tightness chokes them",
        ],
      },
      {
        kind: "h2",
        text: "The transmission mechanism",
      },
      {
        kind: "p",
        text: "When DXY rallies:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Dollar debt becomes harder to service for EM borrowers (debt is in USD, revenue often in local currency)",
          "Commodity prices fall in dollar terms (it takes fewer dollars to buy the same physical commodity)",
          "EM currencies weaken in sympathy with the dollar trend",
          "Capital flows out of EM and into US assets",
          "EM equities sell off as both local currency weakness and capital flight hit them",
          "Risk-off mood reinforces — leveraged players reduce gross exposure",
        ],
      },
      {
        kind: "p",
        text: "Each step typically takes hours to weeks. The full cascade plays out over months.",
      },
      {
        kind: "h2",
        text: "Historical dollar cycles",
      },
      {
        kind: "table",
        headers: ["Period", "DXY trend", "EM impact"],
        rows: [
          ["1985-1995", "Strong dollar peak then fall", "EM crises in late 1980s, then 1990s recovery"],
          ["1995-2002", "Strong dollar (DXY 90 to 120)", "Asian financial crisis 1997, Russian default 1998, dot-com bust"],
          ["2002-2008", "Weak dollar (120 to 70)", "EM equity bull market; India's first major run"],
          ["2008-2011", "Dollar mixed during GFC", "EM volatility"],
          ["2011-2016", "Strengthening dollar (70 to 100)", "'Fragile Five' EM crisis 2013, commodity bust"],
          ["2017-2020", "Range-bound (90-100)", "EM range-bound"],
          ["2020-2021", "Weak dollar (90)", "Massive risk-asset rally, Indian equity boom"],
          ["2022", "Spike to 114", "EM crisis territory briefly"],
          ["2023-2024", "Range 100-108", "EM resilient on domestic flows"],
        ],
      },
      {
        kind: "h2",
        text: "The two regimes",
      },
      {
        kind: "p",
        text: "Multi-year dollar trends define multi-year investment regimes:",
      },
      {
        kind: "list",
        items: [
          "**Strong dollar regime** — favors US assets, US large-cap tech, defensive sectors. Hurts EM equity, commodities, gold over the cycle.",
          "**Weak dollar regime** — favors EM equity, commodities, gold, international diversification. Hurts pure US large-cap if dollar weakness is severe.",
        ],
      },
      {
        kind: "p",
        text: "Knowing which regime you're in (or transitioning to) is one of the highest-value macro views to hold.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "The 'dollar smile' framework",
        text: "Stephen Jen's dollar smile theory: the dollar tends to strengthen at both extremes — during US economic outperformance (top right of smile) AND during global risk-off (top left of smile). It's the 'normal middle' (US in line with rest of world, calm markets) where the dollar weakens. The shape explains why dollar can rally in both booms and crises.",
      },
      {
        kind: "h2",
        text: "Watching dollar liquidity",
      },
      {
        kind: "p",
        text: "Beyond DXY, professional macro investors watch:",
      },
      {
        kind: "list",
        items: [
          "**Cross-currency basis swaps** — measure dollar funding stress; widening swaps = dollar shortage = risk-off",
          "**Fed swap lines** — emergency dollar facilities Fed extends to other central banks; activation signals stress",
          "**Eurodollar futures** — implied future Fed funds rate path",
          "**TED spread** (LIBOR - T-Bill yield) — was the classic stress indicator; less relevant post-LIBOR",
        ],
      },
      {
        kind: "p",
        text: "For retail, just watching DXY daily captures 80% of the signal.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Dollar is the master variable — strength tightens global liquidity, weakness eases it.",
          "Mechanical chain: DXY up → EM currencies down → commodities down → EM equity outflows.",
          "Multi-year dollar cycles correlate with EM equity cycles (weak dollar = EM bull).",
          "'Dollar smile' — dollar strengthens at both extremes (US outperformance OR global crisis).",
          "Daily DXY check captures 80% of the global macro signal.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why do non-US emerging markets suffer when the dollar strengthens?",
        options: [
          "Random",
          "EM borrowers often have dollar debt (harder to service when dollar strong) + EM currencies weaken + capital flows out → equity and currency double-hit",
          "Better US opportunities",
          "Sanctions",
        ],
        correctIndex: 1,
        explanation: "The chain is mechanical: dollar debt servicing, currency translation, capital flow direction. All three reinforce each other during strong dollar phases.",
      },
      {
        id: "q2",
        prompt: "Which dollar regime tends to be most favorable for Indian equity?",
        options: [
          "Strong dollar",
          "Weak dollar — EM equity historically outperforms during weak-dollar multi-year regimes (2003-08, 2020-21 examples)",
          "Stable dollar always",
          "Doesn't matter",
        ],
        correctIndex: 1,
        explanation: "Indian equity (and EM broadly) tends to do best when dollar weakens — capital flows toward EM, currency support, commodity tailwind.",
      },
    ],
  },
  {
    id: "w11-l03",
    weekId: W,
    order: 3,
    title: "Cross-asset signals — reading what markets are telling you",
    summary: "Beyond DXY: how bond spreads, sector rotation, and volatility metrics together paint the macro picture.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "DXY is the headline. But there are several other signals that, taken together, give you a richer read of where markets are. Watching all of them isn't necessary; understanding what each tells you is.",
      },
      {
        kind: "h2",
        text: "Volatility — VIX and VVIX",
      },
      {
        kind: "p",
        text: "{{vix|VIX}} is the implied volatility of S&P 500 options — the 'fear gauge'. Resting state 12-15. Spikes signal stress:",
      },
      {
        kind: "table",
        headers: ["VIX level", "Meaning"],
        rows: [
          ["< 12", "Complacency — markets too calm. Often precedes a sell-off."],
          ["12-15", "Normal — healthy markets"],
          ["15-20", "Mild stress — corrections, news"],
          ["20-30", "Real stress — typical bear market territory"],
          ["30-50", "Crisis pricing — major events"],
          ["50+", "Panic — COVID, 2008, brief 2024 August spike"],
        ],
      },
      {
        kind: "p",
        text: "{{india-vix|India VIX}} is the Nifty equivalent. Normally 10-15; spikes above 20 are unusual.",
      },
      {
        kind: "h2",
        text: "Credit spreads",
      },
      {
        kind: "p",
        text: "The yield spread between low-rated corporate bonds and Treasuries (or G-Secs) measures credit stress. Widening spreads signal economic concern; tight spreads signal complacency.",
      },
      {
        kind: "list",
        items: [
          "**US high-yield spread**: normal 300-500 bps. Above 700 bps signals recession risk. Spiked to 1,100 bps in March 2020.",
          "**US investment-grade spread**: normal 100-150 bps. Above 200 bps signals stress.",
          "**Indian AAA-G-Sec spread**: normal 50-80 bps. Widening signals credit market concern.",
        ],
      },
      {
        kind: "h2",
        text: "Yield curve shape",
      },
      {
        kind: "p",
        text: "We covered this in Week 9. Inverted curve = recession warning. Re-steepening from inverted = imminent recession. Currently the US 2s10s curve has been steepening since mid-2024 — bears have been waiting on this.",
      },
      {
        kind: "h2",
        text: "Sector rotation",
      },
      {
        kind: "p",
        text: "Within equity markets, which sectors are leading and lagging tells you what regime markets are pricing:",
      },
      {
        kind: "table",
        headers: ["Sectors leading", "What it signals"],
        rows: [
          ["Tech (Nasdaq) + Growth", "Risk-on, rates expected to fall, growth scarcity premium"],
          ["Banks + Industrials + Materials", "Cyclical rebound, rates expected to rise, growth confidence"],
          ["Defensives (Staples, Utilities) + Pharma", "Defensive rotation, recession fear, late cycle"],
          ["Energy + Materials only", "Stagflation fears or commodity supercycle"],
          ["Small caps outperforming large", "Genuine economic optimism, broad recovery"],
        ],
      },
      {
        kind: "h2",
        text: "Russell 2000 vs S&P 500",
      },
      {
        kind: "p",
        text: "Russell 2000 (US small caps) vs S&P 500 (US large caps) is a clean signal:",
      },
      {
        kind: "list",
        items: [
          "Russell outperforming S&P 500: broad economic optimism, small caps lead in early-cycle expansion",
          "S&P 500 outperforming Russell: narrow Mag 7-driven market, late cycle, megacap concentration",
          "Russell consistently underperforming: signal of economic weakness, small caps more rate-sensitive",
        ],
      },
      {
        kind: "p",
        text: "Through 2023-24, S&P 500 hugely outperformed Russell 2000 — sign of an unusually narrow market. By contrast, 2003-07 saw Russell lead, signaling broad expansion.",
      },
      {
        kind: "h2",
        text: "Yen as carry stress",
      },
      {
        kind: "p",
        text: "We covered this in Week 6. Sudden yen rallies (USDJPY falling sharply) signal carry-trade unwinds. Watch USDJPY alongside VIX as a leading indicator of cross-market stress.",
      },
      {
        kind: "h2",
        text: "China copper as growth signal",
      },
      {
        kind: "p",
        text: "Copper prices reflect global growth, especially China property/infrastructure demand. Falling copper + falling Chinese yuan + falling Hang Seng = global growth scare. Rising all three = growth resumption.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "A simple intermarket dashboard",
        text: "Bookmark a TradingView watchlist with these symbols: SPX (S&P), NDX (Nasdaq), DXY, US10Y, BRENT, GOLD, USDINR, USDJPY, VIX, HG (copper), HSI (Hang Seng). Glance at this in the morning. 60 seconds tells you the global mood. Better than 30 minutes of TV business news.",
      },
      {
        kind: "h2",
        text: "Indian-specific signals",
      },
      {
        kind: "list",
        items: [
          "**India VIX** — Nifty implied vol; usually 11-15, stress above 18",
          "**FII/DII flow trend** — multi-week running totals matter more than single days",
          "**Nifty IT vs Nifty Bank relative strength** — IT leading = global risk-off coming; Banks leading = domestic optimism",
          "**Nifty Midcap vs Nifty 50** — midcap outperforming = broad participation; underperforming = narrow leadership",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "VIX + credit spreads + yield curve = cross-asset risk barometer.",
          "Sector rotation signals macro regime — which sectors are leading reveals what investors believe.",
          "Russell 2000 vs S&P 500 spread is a clean 'broad vs narrow' market signal.",
          "Yen direction signals carry-trade stress; copper signals global growth.",
          "Build a simple intermarket dashboard — 10 symbols, one screen, daily glance.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "VIX has been at 12 for 4 months while equity markets keep rising. What's the historical implication?",
        options: [
          "All clear, keep buying",
          "Complacency — extended low VIX often precedes corrections or sharp sell-offs",
          "VIX is wrong",
          "Markets will keep rising",
        ],
        correctIndex: 1,
        explanation: "Sustained VIX below 12 is the 'complacency zone'. Markets rarely stay this calm without a catalyst eventually breaking the calm. Historically a contrarian warning.",
      },
      {
        id: "q2",
        prompt: "What does it suggest if US Russell 2000 (small caps) consistently underperforms S&P 500 for many months?",
        options: [
          "Random",
          "Narrow market driven by megacap concentration, possibly late cycle, small caps more rate-sensitive and reflecting economic concerns",
          "Strong economic broad-based growth",
          "Small caps about to outperform",
        ],
        correctIndex: 1,
        explanation: "Sustained Russell underperformance signals narrow leadership and small-cap economic concerns. 2023-24 saw this clearly with Mag 7 dominating S&P returns.",
      },
    ],
  },
  {
    id: "w11-l04",
    weekId: W,
    order: 4,
    title: "Risk-on vs risk-off — the two regimes everything cycles through",
    summary: "Most macro moves are versions of these two regimes. How to spot them and what works in each.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Strip away the details and most market environments are versions of two regimes: {{risk-on|risk-on}} (investors embracing risk for return) and {{risk-off|risk-off}} (investors fleeing to safety). Both can last days, weeks, or years. Recognising which you're in is one of the most useful macro skills.",
      },
      {
        kind: "h2",
        text: "Risk-on characteristics",
      },
      {
        kind: "table",
        headers: ["Asset", "Risk-on direction"],
        rows: [
          ["Equities (global, including EM and small caps)", "Up"],
          ["High-yield credit / corporate bonds", "Tight spreads / up"],
          ["Industrial metals (copper)", "Up"],
          ["US Dollar / DXY", "Often down (capital flows out of haven)"],
          ["US Treasuries / yields", "Yields up (no need for safety)"],
          ["Gold", "Mixed (less haven demand, but inflation hedge sometimes)"],
          ["Japanese yen", "Down (carry trade active)"],
          ["VIX", "Below 15, often 12-14"],
          ["EM currencies (INR, BRL, MXN)", "Stable or strengthening"],
          ["Bitcoin / risk assets", "Up"],
        ],
      },
      {
        kind: "h2",
        text: "Risk-off characteristics",
      },
      {
        kind: "table",
        headers: ["Asset", "Risk-off direction"],
        rows: [
          ["Equities (especially EM and small caps)", "Down"],
          ["High-yield credit", "Spreads widening / prices down"],
          ["Industrial metals", "Down"],
          ["US Dollar / DXY", "Up (flight to haven currency)"],
          ["US Treasuries", "Yields down (flight to safety)"],
          ["Gold", "Up (haven bid)"],
          ["Japanese yen", "Up (carry trade unwinding)"],
          ["VIX", "20+, often 25-40 in real stress"],
          ["EM currencies", "Weakening across the board"],
          ["Bitcoin", "Down (risk asset)"],
        ],
      },
      {
        kind: "h2",
        text: "The signal cluster",
      },
      {
        kind: "p",
        text: "True risk-off has multiple confirmations. If only equity falls but DXY and gold are unchanged, it's not real risk-off — it's a localised equity move. Real risk-off has the cluster: equity down + DXY up + gold up + yen up + VIX up + EM currencies down.",
      },
      {
        kind: "p",
        text: "When you see the cluster forming, position accordingly. When you see only one piece, ignore and wait.",
      },
      {
        kind: "h2",
        text: "Regime persistence",
      },
      {
        kind: "p",
        text: "Risk regimes have momentum. A risk-on environment that's been running 6 months usually continues another 3-6 months. A risk-off shock that's been running 2 weeks often continues 2-4 more weeks before resolution.",
      },
      {
        kind: "p",
        text: "Transitions are messy and slow. Don't try to call them precisely — instead, recognize when one regime has clearly given way to another and adjust gradually.",
      },
      {
        kind: "analogy",
        title: "Two weathers",
        text: "Risk-on is summer in Bengaluru — pleasant, predictable, you wear what you want. Risk-off is monsoon in Mumbai — water everywhere, transport breaks, everyone hunkers down. Both are weather patterns. Both are temporary. Both have specific clothing and behavior rules. Treat market regimes the same way.",
      },
      {
        kind: "h2",
        text: "What works in each regime",
      },
      {
        kind: "p",
        text: "Risk-on (growth periods):",
      },
      {
        kind: "list",
        items: [
          "Equities — especially cyclicals, mid caps, small caps, EM",
          "High-yield credit",
          "Industrial metals (copper)",
          "Risk-on currencies (AUD, NZD, BRL)",
          "Underperform: gold, defensives, long bonds",
        ],
      },
      {
        kind: "p",
        text: "Risk-off (stress periods):",
      },
      {
        kind: "list",
        items: [
          "Cash (especially USD)",
          "US Treasuries (haven bid)",
          "Gold (especially when real yields are also falling)",
          "Defensive equities (FMCG, pharma, utilities)",
          "USD/yen / safe-haven currencies",
          "Underperform: cyclicals, small caps, EM, commodity producers",
        ],
      },
      {
        kind: "h2",
        text: "Why most retail get this wrong",
      },
      {
        kind: "p",
        text: "Retail tendency: buy aggressively in late risk-on euphoria, panic-sell in early risk-off, repeat. The correct pattern is the opposite — trim in euphoria, accumulate in despair. The intermarket framework helps you see the regime objectively rather than emotionally.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "Adjust gradually, not abruptly",
        text: "Don't reposition 50% of your portfolio when you see a regime shift. Adjust at the margin — 5-10% of portfolio toward more cash and gold during clear risk-off escalation; 5-10% back into equities during clear risk-on confirmation. Small, frequent adjustments avoid being whipsawed by false signals.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Risk-on: equities up, DXY down, commodities up, VIX low, EM strong.",
          "Risk-off: equities down, DXY up, gold up, yen up, VIX high, EM weak.",
          "Look for the cluster of signals — single divergence isn't a regime change.",
          "Regimes have momentum — usually persist months once established.",
          "Adjust positioning at the margin; don't try to perfectly time transitions.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which of these is the cleanest 'risk-off' confirmation?",
        options: [
          "Just equities falling",
          "Cluster: equities down + DXY up + gold up + yen up + VIX above 20 + EM currencies weakening — all together",
          "Bitcoin only down",
          "Indian VIX above 12",
        ],
        correctIndex: 1,
        explanation: "Real risk-off shows a cluster of confirmations. A single asset falling isn't a regime change — could be localised. The cluster confirms a regime shift.",
      },
      {
        id: "q2",
        prompt: "What's the most common retail mistake regarding risk regimes?",
        options: [
          "Diversifying too much",
          "Buying aggressively in late euphoria (risk-on top) and panic-selling in early risk-off — exactly the opposite of optimal",
          "Holding too much gold",
          "Reading too many books",
        ],
        correctIndex: 1,
        explanation: "Retail emotion runs counter to the optimal pattern. Intermarket framework helps see regimes objectively, enabling counter-cyclical positioning.",
      },
    ],
  },
  {
    id: "w11-l05",
    weekId: W,
    order: 5,
    title: "Building a daily intermarket dashboard",
    summary: "10 symbols, one screen, two minutes. The exact dashboard a professional macro trader checks every morning.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "After all this theory, here's the practical output: a daily 10-symbol intermarket dashboard that you can set up in TradingView for free. Two minutes a day. Gives you 90% of what professional macro traders see.",
      },
      {
        kind: "h2",
        text: "The 10 symbols",
      },
      {
        kind: "table",
        headers: ["Symbol", "What it tells you"],
        rows: [
          ["**S&P 500 (SPX)**", "Global equity mood"],
          ["**Nasdaq 100 (NDX)**", "Tech-specific / growth mood"],
          ["**DXY**", "Dollar strength = global liquidity"],
          ["**US 10Y Treasury yield (TNX)**", "World's benchmark rate"],
          ["**Brent crude (BRENT or UKOIL)**", "Energy / India inflation upstream"],
          ["**Gold (XAUUSD)**", "Crisis insurance / real yield indicator"],
          ["**USD/INR**", "India FX status"],
          ["**USD/JPY**", "Carry trade stress indicator"],
          ["**VIX**", "Volatility / fear gauge"],
          ["**Hang Seng (HSI)**", "China growth / EM Asian read"],
        ],
      },
      {
        kind: "h2",
        text: "Setting it up in TradingView",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Create a free TradingView account at tradingview.com",
          "Go to 'Watchlists' → 'Create New Watchlist'",
          "Name it 'Macro Dashboard'",
          "Add all 10 symbols above",
          "Optionally arrange in groups (US, currencies, commodities, Asia)",
          "Pin the watchlist; check it daily at a consistent time (morning before market open is ideal for Indian investors)",
        ],
      },
      {
        kind: "h2",
        text: "Daily reading workflow",
      },
      {
        kind: "p",
        text: "60-second daily process:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Check overnight S&P / Nasdaq moves. Up or down? By how much?",
          "Check DXY direction. Up, down, flat?",
          "Check US 10Y. Up or down?",
          "Check Brent. Sharp move? Stable?",
          "Check USD/INR. Where vs yesterday?",
          "Note VIX level. Stress or calm?",
          "Note Hang Seng overnight close. Asian risk mood?",
          "Mentally synthesize: risk-on, risk-off, or mixed? Why? What do you expect for Indian open?",
        ],
      },
      {
        kind: "p",
        text: "Write a one-line note in your journal. After 30-60 days, patterns become intuitive.",
      },
      {
        kind: "h2",
        text: "What you're looking for",
      },
      {
        kind: "table",
        headers: ["Reading", "Trade-day implication"],
        rows: [
          ["SPX -1.5%, DXY +0.8%, US10Y -10bp, gold +1%, yen +1%, VIX +20%", "Strong risk-off cluster. Expect Indian gap-down 1%+ at open. FIIs likely to sell."],
          ["SPX +1.2%, DXY -0.4%, US10Y +5bp, Brent +2%", "Risk-on growth day. Expect Indian gap-up. Cyclicals and metals to lead."],
          ["SPX flat, DXY flat, US10Y -3bp, gold +0.5%, Brent -2%, USDJPY -0.5%", "Mixed but slightly cautious. Indian flat to slightly down. Defensives may outperform."],
          ["Hang Seng -3% overnight on China property news", "China-specific risk-off, may pull Indian metals and EM-sensitive names down regardless of US tape"],
        ],
      },
      {
        kind: "h2",
        text: "Weekly deeper review",
      },
      {
        kind: "p",
        text: "Once a week (Sunday is good), do a longer review:",
      },
      {
        kind: "list",
        items: [
          "Take a screenshot of the weekly chart for each symbol",
          "Note the weekly % move",
          "Highlight any breakouts or breakdowns (multi-month support/resistance)",
          "Compare to your one-line daily notes — were your gut readings right?",
          "Identify the dominant macro narrative of the week (e.g., 'Fed pivot expectations build', 'oil spike + INR weakness pressures Nifty', etc.)",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Don't overdo it",
        text: "The temptation is to add more symbols — gilts, palladium, soybean futures, every G7 yield curve. Don't. 10 symbols is enough to capture the core macro picture. More symbols = more noise = less clarity. Pros use 20-30 symbols, but only after years of feel-development on the core set.",
      },
      {
        kind: "h2",
        text: "How this changes your decisions",
      },
      {
        kind: "p",
        text: "After a few months of consistent dashboard reading, your decisions become noticeably calmer:",
      },
      {
        kind: "list",
        items: [
          "You stop panicking on bad Indian days when global tape is fine — you know the local story will fade",
          "You stop chasing rallies that are happening into stretched conditions — you see the warning signs",
          "You feel the regime shifts before they're obvious",
          "You're never confused about 'why did markets do that today?' — usually you can explain it",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "10 symbols cover 90% of professional macro view: SPX, NDX, DXY, US10Y, Brent, gold, USDINR, USDJPY, VIX, HSI.",
          "Set up free in TradingView; check 60 seconds daily.",
          "Synthesize into 'risk-on / risk-off / mixed' read with a one-line journal entry.",
          "Weekly review on Sundays for deeper pattern recognition.",
          "After 30-60 days, decisions become calmer and more strategic.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which combination is the cleanest 'global risk-off' overnight read for Indian markets?",
        options: [
          "SPX up, DXY up, gold up",
          "SPX -2%, DXY +1%, US 10Y -15bp, gold +1.5%, USDJPY -1%, VIX +25%",
          "Hang Seng down",
          "Bitcoin up",
        ],
        correctIndex: 1,
        explanation: "The cluster — equities down, dollar strong, treasuries bid, gold up, yen rallying, vol spiking — is the classic risk-off cluster. Indian markets will almost certainly open weak.",
      },
      {
        id: "q2",
        prompt: "Why is daily macro dashboard discipline more valuable than reading TV business news?",
        options: [
          "TV is too detailed",
          "Direct symbol observation removes interpretation bias and builds pattern recognition; TV narratives are often after-the-fact and influenced by anchors' angles",
          "TV is too slow",
          "All news is wrong",
        ],
        correctIndex: 1,
        explanation: "Raw data + your own synthesis builds intuition faster than secondhand interpretation. TV adds noise; the dashboard provides signal.",
      },
    ],
  },
  {
    id: "w11-l06",
    weekId: W,
    order: 6,
    title: "Common intermarket myths and pitfalls",
    summary: "Where popular intermarket 'wisdom' falls apart. Real-world cautions for a beginner.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "The intermarket framework is powerful but it's not magic. Several oft-repeated 'rules' fall apart in practice. Here are the common ones and why.",
      },
      {
        kind: "h2",
        text: "Myth: gold always goes up when stocks crash",
      },
      {
        kind: "p",
        text: "Reality: in the first wave of major crashes, gold often falls too. Why? Investors getting margin calls sell their most liquid assets — including gold — to meet calls in other positions. Gold typically rallies once the liquidity squeeze resolves.",
      },
      {
        kind: "p",
        text: "Examples: March 2020 (gold fell ~12% in two weeks alongside equities, then rallied to all-time highs); 2008 GFC (gold initially flat-to-down before bottoming and rallying).",
      },
      {
        kind: "h2",
        text: "Myth: dollar weakens when Fed cuts rates",
      },
      {
        kind: "p",
        text: "Reality: dollar moves on relative rate differentials. If Fed is cutting but ECB and BoE are cutting faster, dollar can strengthen even during a Fed cutting cycle. The 2024 environment showed this — Fed cut 75 bps in late 2024 but DXY held 105+ because European cuts were just as aggressive.",
      },
      {
        kind: "h2",
        text: "Myth: oil up always means inflation up",
      },
      {
        kind: "p",
        text: "Reality: oil prices contribute to inflation, but the pass-through varies dramatically. In demand-driven oil rallies (2007 boom), CPI rose. In supply-shock oil rallies (Russia 2022, geopolitical scares), CPI often rose less because demand was already weakening.",
      },
      {
        kind: "p",
        text: "Also, the energy share of CPI is much smaller than people assume — US CPI energy is ~7%, India CPI energy is ~7%. Even a 50% oil spike adds ~3.5% to CPI maximum if fully passed through.",
      },
      {
        kind: "h2",
        text: "Myth: bonds and stocks always move opposite",
      },
      {
        kind: "p",
        text: "Reality: this works in deflationary or stable-inflation environments but not in high-inflation ones. In 2022, both US bonds (-15%) and equities (-19%) fell because the dominant macro variable was rising rates, which hurts both asset classes simultaneously.",
      },
      {
        kind: "p",
        text: "The 60/40 portfolio (60% equity / 40% bonds) lost more than expected in 2022 precisely because of broken correlations. Diversification works only if the diversifiers move differently — when both fall, you have concentration, not diversification.",
      },
      {
        kind: "diagram",
        diagram: "correlation-matrix",
        caption: "Cross-asset correlations are long-run averages. In stress (March 2020), most of these snap toward +1 — everything sells off together.",
      },
      {
        kind: "h2",
        text: "Myth: VIX above 30 = imminent recovery",
      },
      {
        kind: "p",
        text: "Reality: high VIX signals stress but doesn't predict timing. VIX hit 82 in March 2020 and the bottom came within weeks — but VIX also stayed above 30 for months in late 2008 / early 2009 while markets fell another 20%. High VIX = stressed pricing, not a buy signal.",
      },
      {
        kind: "h2",
        text: "Myth: India can decouple from global markets",
      },
      {
        kind: "p",
        text: "Reality: India's correlation with S&P 500 has been 0.5-0.6 over the past decade. While DII flows have made Indian markets more resilient on the downside, full decoupling hasn't happened and probably can't happen — India is too large and too connected to global capital flows.",
      },
      {
        kind: "p",
        text: "The phrase 'India is decoupling' tends to appear in Indian financial media every 18-24 months. It's been wrong every time.",
      },
      {
        kind: "h2",
        text: "Pitfall: over-fitting recent patterns",
      },
      {
        kind: "p",
        text: "If 2023 had a specific intermarket pattern (e.g., 'gold and Bitcoin moved together'), the human tendency is to assume that pattern continues. Patterns DO break.",
      },
      {
        kind: "p",
        text: "Stay humble. Use the framework as a guide, not a recipe. Always ask 'what could go wrong with this thesis?' before sizing positions.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "The trader's curse",
        text: "Once you can read intermarket signals, the next pitfall is over-trading. Just because you can see the picture doesn't mean you should act on every change. Most macro views play out over weeks-months; most retail tries to trade them in days, getting whipsawed by noise. Build the view, then be patient.",
      },
      {
        kind: "h2",
        text: "The right framing",
      },
      {
        kind: "p",
        text: "Use intermarket analysis to:",
      },
      {
        kind: "list",
        items: [
          "Set portfolio tilts (more or less equity, more or less duration) on multi-month horizons",
          "Avoid making panicked decisions on noise days",
          "Understand 'why' rather than be confused by random moves",
          "Identify regime shifts and adjust gradually",
        ],
      },
      {
        kind: "p",
        text: "Don't use it to:",
      },
      {
        kind: "list",
        items: [
          "Trade short-term direction",
          "Predict exact tops and bottoms",
          "Override the basic discipline of SIPs and long-term holding",
          "Make 'genius' market calls (you'll be humbled)",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Gold can fall in early crash waves alongside equities — margin call dynamics.",
          "Dollar moves on RELATIVE rate differentials, not just Fed direction.",
          "Bond-stock negative correlation breaks in high-inflation regimes (2022 example).",
          "High VIX signals stress but not timing.",
          "Use intermarket framework for tilts and understanding, not for tactical short-term trading.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why might gold fall alongside equities in the first wave of a major market crash?",
        options: [
          "Random",
          "Margin call dynamics — investors sell their most liquid assets including gold to meet calls in other positions; gold rallies once the liquidity squeeze resolves",
          "Gold is correlated with equities",
          "It doesn't happen",
        ],
        correctIndex: 1,
        explanation: "March 2020 and 2008 GFC both showed gold selling off briefly with equities. Once liquidity normalizes, gold rallies on macro fundamentals.",
      },
      {
        id: "q2",
        prompt: "Why did the classic 60/40 (equity/bond) portfolio lose more than expected in 2022?",
        options: [
          "Bad luck",
          "High inflation regime broke the negative correlation — both stocks and bonds fell as the dominant variable (rising rates) hurt both",
          "Bond default crisis",
          "Equity crash",
        ],
        correctIndex: 1,
        explanation: "In rising-rate / inflationary regimes, bonds and equities can both fall, defeating naive 60/40 diversification. 2022 saw bonds -15%, equities -19%.",
      },
    ],
  },
];

export const WEEK_11_LESSONS = lessons;
