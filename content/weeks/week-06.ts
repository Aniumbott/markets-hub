import type { Lesson } from "../types";

const W = 6;

const lessons: Lesson[] = [
  {
    id: "w06-l01",
    weekId: W,
    order: 1,
    title: "How currencies are quoted and traded",
    summary: "The world's largest market is invisible to most retail investors. The basics of FX before we tackle the dollar.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Foreign exchange (FX or forex) is the largest financial market in the world by daily volume. ~$7.5 trillion changes hands every day — more than every stock market combined. Yet most retail investors never directly trade it. That's because in India, retail FX trading is restricted to a few INR pairs, with global pairs accessible only through indirect means.",
      },
      {
        kind: "h2",
        text: "How a currency pair works",
      },
      {
        kind: "p",
        text: "Currencies are always quoted in pairs: USD/INR, EUR/USD, USD/JPY, GBP/USD. The first currency is the base; the second is the quote. The number tells you how much of the quote currency you need to buy one unit of the base.",
      },
      {
        kind: "p",
        text: "USD/INR = 84.5 means 1 US dollar costs 84.5 rupees. If USD/INR rises to 85, the dollar got stronger (or the rupee weaker — same thing). If USD/INR falls to 83, the dollar got weaker (or the rupee stronger).",
      },
      {
        kind: "analogy",
        title: "The currency seesaw",
        text: "USD/INR is always a seesaw — when one side goes up, the other goes down. The number is the ratio. People often confuse direction; the simplest trick is to remember 'higher number = the base currency (USD) is winning'.",
      },
      {
        kind: "h2",
        text: "Pip — the smallest unit",
      },
      {
        kind: "p",
        text: "In professional FX, prices move in pips — the last decimal place of the quote. For USD/INR quoted to two decimals (e.g., 84.55), a pip is 0.01 (one paisa). USD/INR moving from 84.50 to 84.75 is a 25-pip move — small in dollars, but on a $10 million position, that's $25,000.",
      },
      {
        kind: "p",
        text: "For majors like EUR/USD quoted to four decimals (1.0852), a pip is 0.0001 — even smaller. FX is a high-volume, thin-margin game.",
      },
      {
        kind: "h2",
        text: "Who trades FX",
      },
      {
        kind: "list",
        items: [
          "**Banks** — interbank market, biggest by volume. They quote prices to each other and to clients.",
          "**Corporates** — Indian IT exporters, oil importers, manufacturers — they hedge or convert currency for business.",
          "**Central banks** — RBI, Fed, BoJ intervene to influence their currencies.",
          "**Hedge funds and asset managers** — directional bets, carry trades, hedging international portfolios.",
          "**Retail traders** — mostly outside India, via CFD brokers. Small slice of total volume but heavily marketed.",
        ],
      },
      {
        kind: "h2",
        text: "Spot, forward, swap",
      },
      {
        kind: "p",
        text: "Three FX instrument types:",
      },
      {
        kind: "list",
        items: [
          "**Spot** — immediate (technically T+2 settlement) exchange. The quoted USD/INR is the spot rate.",
          "**Forward** — agreed exchange at a future date at a rate locked today. Used by corporates to hedge known future flows.",
          "**Swap** — combination of spot and forward; used by banks for funding and yield arbitrage.",
        ],
      },
      {
        kind: "p",
        text: "The forward rate is set by interest rate differential. If Indian rates are higher than US rates (which they always are), the forward USD/INR is higher than spot — you'd need to pay more rupees for a dollar in 6 months because rupees yield more in the interim.",
      },
      {
        kind: "h2",
        text: "Indian retail FX access",
      },
      {
        kind: "p",
        text: "Indian residents can trade USD/INR and a few other INR pairs (EUR/INR, GBP/INR, JPY/INR) on NSE's currency derivatives segment. Non-INR pairs (EUR/USD, USD/JPY) are not legal to trade for Indian residents — RBI restricts capital account FX speculation.",
      },
      {
        kind: "p",
        text: "Indirect exposure is possible:",
      },
      {
        kind: "list",
        items: [
          "**International equity funds** — buying a Nasdaq fund gives you indirect USD exposure.",
          "**Gold ETFs / SGB** — gold price moves with USD; holding INR gold means you're indirectly long USD.",
          "**FCNR / NRE accounts** — for NRIs and returning Indians, dollar-denominated bank accounts.",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Avoid offshore CFD platforms",
        text: "Several websites offer 'global FX trading' from India through CFD brokers in places like Mauritius or Cyprus. These often violate Indian capital account rules. The RBI has prosecuted users in the past. Stick to legal NSE currency segment if you want to trade FX, or take indirect exposure through approved instruments.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "FX is ~$7.5T/day — the world's largest financial market.",
          "Currency pairs: base/quote. USD/INR = how many rupees per dollar.",
          "Higher USD/INR = stronger dollar / weaker rupee.",
          "Indians can legally trade only INR pairs on NSE currency segment.",
          "Indirect FX exposure via international equity funds, gold, FCNR accounts.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "USD/INR moves from 83.00 to 84.50. What happened?",
        options: [
          "Rupee strengthened",
          "Rupee weakened by ₹1.50 per dollar (or 1.8%)",
          "Dollar weakened",
          "No change in relative value",
        ],
        correctIndex: 1,
        explanation: "USD/INR up = more rupees per dollar = rupee weaker. ₹1.50/USD = about 1.8% INR weakness.",
      },
      {
        id: "q2",
        prompt: "Can Indian retail residents legally trade EUR/USD directly?",
        options: [
          "Yes, through any broker",
          "No — RBI restricts non-INR currency trading for retail residents; use indirect exposure instead",
          "Only HNIs",
          "Only with Aadhaar verification",
        ],
        correctIndex: 1,
        explanation: "RBI's capital account rules restrict speculative non-INR FX for resident retail. Indians can trade only INR-pairs on NSE; non-INR exposure is via approved indirect routes.",
      },
    ],
  },
  {
    id: "w06-l02",
    weekId: W,
    order: 2,
    title: "DXY — the dollar's report card",
    summary: "One index, six currencies, one of the most powerful single signals in global macro.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "The {{dxy|DXY}} (US Dollar Index) measures the dollar's value against a basket of six major currencies. Created in 1973 after the breakdown of the Bretton Woods system. Still uses the original weighting — heavily skewed toward the euro.",
      },
      {
        kind: "h2",
        text: "The DXY basket",
      },
      {
        kind: "table",
        headers: ["Currency", "Weight"],
        rows: [
          ["Euro (EUR)", "57.6%"],
          ["Japanese yen (JPY)", "13.6%"],
          ["British pound (GBP)", "11.9%"],
          ["Canadian dollar (CAD)", "9.1%"],
          ["Swedish krona (SEK)", "4.2%"],
          ["Swiss franc (CHF)", "3.6%"],
        ],
      },
      {
        kind: "p",
        text: "DXY is rebased to 100 (the 1973 level). Higher DXY = stronger dollar. As of late 2024, DXY trades around 105-108, which is historically elevated. The dollar can spike to 113-115 in stress periods (March 2020, September 2022) and drop to 90 during easy-Fed cycles (2020-21).",
      },
      {
        kind: "h2",
        text: "Why DXY matters globally",
      },
      {
        kind: "p",
        text: "DXY is one of the most powerful single signals in macro because the dollar is the world's reserve currency. ~60% of global FX reserves, ~50% of cross-border trade settlement, ~70% of EM external debt. When the dollar gets stronger, every dollar-denominated obligation globally becomes harder.",
      },
      {
        kind: "p",
        text: "Mechanical cascade of a 5% DXY rally:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "EM currencies weaken by 3-7% on average (DXY is mostly developed-market currencies, but EM moves in sympathy)",
          "Commodities (priced in USD) fall as it takes fewer dollars to buy them in dollar terms",
          "Gold typically falls (DXY headwind)",
          "Crude oil typically falls",
          "EM equity sees outflows as their currency-translated returns drop",
          "Indian markets feel the squeeze — USD/INR up, FII flows out, Nifty down",
        ],
      },
      {
        kind: "analogy",
        title: "The exchange rate at the airport counter",
        text: "Imagine you're at the airport counter exchanging your INR for USD before a US trip. Today you get $1,180 for ₹1 lakh. Next week, USD/INR has jumped 2% — you get only $1,160. Every Indian importer is your friend in this scenario; every Indian exporter is your enemy.",
      },
      {
        kind: "h2",
        text: "What moves DXY",
      },
      {
        kind: "list",
        items: [
          "**Fed policy** — hawkish Fed → DXY up; dovish → DXY down. Direct, fast.",
          "**Interest rate differential** — if US rates are higher than developed peers, dollar is more attractive.",
          "**Risk-off** — investors flee to USD during global stress. DXY rallies even when Fed isn't hiking.",
          "**Trade and current account balances** — chronic deficits weaken; but with the dollar, this is partially offset by reserve currency status.",
          "**Political stability** — US political dysfunction can weaken the dollar; usually less than you'd think.",
        ],
      },
      {
        kind: "h2",
        text: "When DXY is highest impact for India",
      },
      {
        kind: "p",
        text: "DXY moves matter most for India when:",
      },
      {
        kind: "list",
        items: [
          "Crude is also rising — oil-import double-whammy on the rupee",
          "India is in FII outflow mode — every percent of DXY adds pressure",
          "India VIX is elevated — combination of fear and dollar strength",
          "Election season — political uncertainty + dollar strength = sharp INR moves",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Your daily DXY check",
        text: "Bookmark Investing.com's DXY chart (in.investing.com/quotes/us-dollar-index). 30 seconds in the morning tells you the global liquidity mood for the day. If DXY is up overnight, Indian markets will likely open weak. If it's down, supportive.",
      },
      {
        kind: "h2",
        text: "DXY trends",
      },
      {
        kind: "p",
        text: "DXY has its own multi-year cycles:",
      },
      {
        kind: "list",
        items: [
          "**2014-2016**: DXY rallied from 80 to 100+ during Fed taper and rate hike cycle. EM crisis (rupee hit 68).",
          "**2017-2018**: DXY weak as Fed paused; EM strong.",
          "**2019-2020**: DXY rallied during COVID risk-off (peaked 103); then dropped to 89 in 2021 with easy Fed.",
          "**2022**: DXY surged to 114 — 20-year high — as Fed hiked 525 bps. EM crisis territory.",
          "**2023-2024**: DXY oscillated between 100-108 as Fed peaked and prepared to cut.",
        ],
      },
      {
        kind: "p",
        text: "Watching DXY over years (not days) tells you which macro regime you're in.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "DXY measures USD vs 6 major currencies — euro is 58% of the basket.",
          "Higher DXY = stronger dollar = global liquidity tightening.",
          "DXY +5% typically: EM currencies -5%, commodities -10%, gold -8%, EM equity -3-5%.",
          "Watch DXY daily as your fastest read on global risk mood.",
          "Multi-year DXY cycles correlate with EM equity cycles.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which currency has the biggest weight in DXY?",
        options: ["Japanese yen", "Euro (~58%)", "British pound", "Canadian dollar"],
        correctIndex: 1,
        explanation: "Euro is 57.6% of DXY weight. DXY rallies usually mean euro weakness; euro rallies usually mean DXY weakness.",
      },
      {
        id: "q2",
        prompt: "A sharp 4% DXY rally over a week typically affects emerging markets how?",
        options: [
          "Strong tailwind — EMs rally",
          "EM currencies weaken, commodities fall, EM equities see outflows",
          "No impact",
          "Only affects gold",
        ],
        correctIndex: 1,
        explanation: "Dollar strength tightens global liquidity. EM assets uniformly suffer — currency, equity, commodity exposure all hit by the cascade.",
      },
    ],
  },
  {
    id: "w06-l03",
    weekId: W,
    order: 3,
    title: "USD/INR — what drives the rupee",
    summary: "The single most important currency pair for Indians. Five drivers, one managed-float reality.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "{{usd-inr|USD/INR}} is the most important currency pair for anyone living in India. It affects your imported electronics, your overseas trips, your child's foreign education, your equity returns, and — indirectly — the cost of everything from petrol to mobile phones.",
      },
      {
        kind: "h2",
        text: "A multi-decade trajectory",
      },
      {
        kind: "p",
        text: "USD/INR has structurally trended upward (rupee depreciated) over decades:",
      },
      {
        kind: "table",
        headers: ["Year", "USD/INR (approximate)"],
        rows: [
          ["1990", "17"],
          ["2000", "44"],
          ["2010", "45"],
          ["2013 (taper tantrum peak)", "68"],
          ["2020 (COVID peak)", "76"],
          ["2022", "82"],
          ["2024 (late)", "84-85"],
        ],
      },
      {
        kind: "p",
        text: "The long-term depreciation runs about 3-4% per year on average — broadly matching the inflation differential between India and the US (Indian CPI averaged ~6% vs US 2%, so a 4% rupee depreciation roughly compensates).",
      },
      {
        kind: "h2",
        text: "Five drivers of USD/INR",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**DXY (dollar strength globally)** — When DXY rallies, every currency including INR weakens. The single largest driver day-to-day.",
          "**Crude oil** — India imports 85% of its oil. Higher Brent = wider current account deficit = INR pressure.",
          "**FII flows** — When foreign investors sell Indian equities, they convert INR to USD to take money home. Sustained FII selling pressures INR.",
          "**Fed-RBI rate differential** — If US rates rise faster than RBI rates, the differential narrows, INR weakens.",
          "**RBI intervention** — The most discretionary lever. RBI sells dollars from reserves to slow INR weakness; buys dollars to slow strength.",
        ],
      },
      {
        kind: "h2",
        text: "Managed float reality",
      },
      {
        kind: "p",
        text: "USD/INR is technically a 'floating' rate set by the market. In practice, the RBI is very active — it intervenes regularly to smooth volatility. India's $650+ billion forex reserves give the RBI substantial firepower.",
      },
      {
        kind: "p",
        text: "Typical RBI behavior:",
      },
      {
        kind: "list",
        items: [
          "Allows gradual rupee weakness in line with inflation differentials",
          "Steps in when daily moves exceed 30-50 paise — sells dollars to slow the move",
          "Resists 'one-way bet' positioning — if everyone is shorting INR, RBI surprises with aggressive intervention",
          "Rarely defends a specific level publicly, but watches psychological round numbers (₹80, ₹85)",
        ],
      },
      {
        kind: "analogy",
        title: "The traffic cop at an intersection",
        text: "USD/INR is the intersection. Market forces are the cars. The RBI is the traffic cop — they don't decide who goes where, but they smooth out chaos, prevent gridlock, and stop reckless drivers (one-way speculation). Most days the cop is invisible; on busy days, you'll see them directing traffic.",
      },
      {
        kind: "h2",
        text: "Real Effective Exchange Rate (REER)",
      },
      {
        kind: "p",
        text: "USD/INR alone doesn't tell the whole story. REER measures the rupee's strength against a trade-weighted basket of currencies, adjusted for inflation differences. The RBI publishes REER monthly.",
      },
      {
        kind: "p",
        text: "If REER is rising, the rupee is becoming 'overvalued' on a real basis — exports are getting less competitive. If REER falls, INR is becoming more competitive. RBI watches REER as one of its intervention triggers.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why a strong rupee isn't always good",
        text: "Indian middle-class instinct: 'rupee strengthening is good for India'. Actually no — a too-strong rupee makes exports uncompetitive, hurts IT services and manufacturers, and widens the trade deficit. The RBI deliberately allows gradual rupee depreciation to keep exports competitive. The goal isn't a strong rupee — it's a stable, predictable rupee.",
      },
      {
        kind: "h2",
        text: "What a typical USD/INR move looks like",
      },
      {
        kind: "list",
        items: [
          "**Quiet day**: ±5-10 paise. Most days fall in this band.",
          "**News day**: ±15-30 paise. Fed surprise, RBI MPC, big macro data.",
          "**Stress day**: ±40-70 paise. Risk-off events, FII outflows, geopolitical shock.",
          "**Crisis day**: 100+ paise. COVID March 2020, taper tantrum 2013, Russia invasion Feb 2022.",
        ],
      },
      {
        kind: "h2",
        text: "How to track",
      },
      {
        kind: "list",
        items: [
          "Investing.com USD/INR chart and live quote",
          "TradingView (USDINR symbol)",
          "RBI Reference Rate page (rbi.org.in) — daily official reference rate",
          "Money Control's currency page",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "USD/INR has trended up ~3-4%/year over decades, broadly matching inflation differentials.",
          "Five drivers: DXY, oil, FII flows, rate differential, RBI intervention.",
          "RBI runs a managed float — active intervention to smooth volatility, not to defend a specific level.",
          "REER tells you if rupee is fundamentally over- or under-valued on a trade-weighted basis.",
          "A gradually weakening rupee isn't bad — it keeps Indian exports competitive.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which factor most directly causes USD/INR to spike when oil prices surge?",
        options: [
          "Random correlation",
          "India imports 85% of oil — higher prices widen current account deficit, increasing dollar demand and weakening INR",
          "Tax policy",
          "Indian retail buying dollars",
        ],
        correctIndex: 1,
        explanation: "Higher oil = more dollars needed for imports = wider CAD = INR weakness. ~$10/barrel sustained adds ~$15B/year to India's oil import bill.",
      },
      {
        id: "q2",
        prompt: "Why might a 'too strong' rupee be bad for India's economy?",
        options: [
          "It's never bad — strong rupee = strong India",
          "Hurts export competitiveness (IT services, textiles, pharma), widens trade deficit",
          "Inflation rises",
          "RBI loses control",
        ],
        correctIndex: 1,
        explanation: "Strong INR makes Indian exports more expensive in dollar terms — bad for IT services, textiles, pharma exports. RBI prefers gradual managed depreciation.",
      },
    ],
  },
  {
    id: "w06-l04",
    weekId: W,
    order: 4,
    title: "Carry trade — the yen and the global funding engine",
    summary: "Why a 0.25% rate in Tokyo can move every market in the world. The mechanics of the largest macro flow you've never seen.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "For two decades, Japan's central bank kept interest rates at zero or negative. This made the {{yen|Japanese yen}} the world's cheapest funding currency. Hedge funds, asset managers, and even retail Japanese investors borrowed yen for free and invested in higher-yielding assets abroad — US tech, EM bonds, Indian equities, Mexican bonds, even crypto.",
      },
      {
        kind: "p",
        text: "This is the {{carry-trade|carry trade}}. You borrow at 0%, invest at 5%, pocket the 5% spread. As long as your borrowing currency stays cheap and your investment currency stays stable, it's nearly risk-free money.",
      },
      {
        kind: "h2",
        text: "The size",
      },
      {
        kind: "p",
        text: "Nobody knows the exact size of the yen carry trade. Estimates range from $1 trillion to $4 trillion — comparable to the entire market cap of all Indian listed equity. This isn't visible on any single balance sheet because it's spread across thousands of funds and millions of individual positions.",
      },
      {
        kind: "h2",
        text: "How it works mechanically",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "A Japanese fund or Western hedge fund borrows yen at ~0.1% rate",
          "Converts yen to USD (selling yen, buying dollars)",
          "Buys US Treasuries at 4.5% or US equities or Indian bonds at 7%",
          "Earns the yield spread minus borrowing cost",
          "When the trade is unwound, they sell the asset, convert back to yen, repay loan",
        ],
      },
      {
        kind: "p",
        text: "Step 2 — selling yen to buy dollars — is what keeps yen weak. As long as carry money flows out of yen, yen stays weak, which makes the carry profitable, which attracts more flow. It's a self-reinforcing cycle until it isn't.",
      },
      {
        kind: "h2",
        text: "Why carry unwinds are violent",
      },
      {
        kind: "p",
        text: "Carry is profitable in calm markets. It loses money in volatile markets — and the losses compound:",
      },
      {
        kind: "list",
        items: [
          "If the yen rallies 5%, anyone borrowing yen sees the cost of repayment rise — eating yield spread",
          "If the asset side falls (US equities sell off), carry traders lose on both legs",
          "Margin calls force selling of assets and buying of yen — both moves accelerate",
          "Yen rallying further → more pain for other carry traders → more selling → more yen buying",
          "Cascading deleveraging",
        ],
      },
      {
        kind: "p",
        text: "This is exactly what happened in August 2024 (covered in detail in the case studies). A small BoJ hike + weak US NFP combined to make carry unprofitable. Within 3 trading days, Nikkei fell 25%, US equities fell 6%, Indian markets gapped down 3% before recovering.",
      },
      {
        kind: "analogy",
        title: "The crowded stairwell",
        text: "Carry trades build up over years like people slowly filling a stairwell during a quiet office day. Nobody notices. When an alarm sounds, everyone wants out at the same time through the same narrow exit. The exit isn't designed for that volume. The crush is the unwind.",
      },
      {
        kind: "h2",
        text: "Watching the yen as a stress indicator",
      },
      {
        kind: "p",
        text: "The yen has become a leading indicator for global risk. Watch USDJPY:",
      },
      {
        kind: "table",
        headers: ["USDJPY pattern", "Implication"],
        rows: [
          ["Steady or weakening yen (USDJPY rising)", "Risk-on environment. Carry working."],
          ["Yen rallying suddenly 1-2% in a day", "Risk-off warning. Possible unwind in progress."],
          ["Yen rallying 3%+ in days", "Unwind in motion. Brace for global cascade."],
          ["Yen weakening fast (USDJPY climbing)", "Risk appetite returning OR Japanese intervention concerns."],
        ],
      },
      {
        kind: "h2",
        text: "The BoJ's predicament",
      },
      {
        kind: "p",
        text: "BoJ wants to gradually normalize rates after 20+ years of zero. But every small hike risks triggering a carry unwind that crashes global markets. The August 2024 episode after BoJ went to +0.25% showed how delicate the calibration is.",
      },
      {
        kind: "p",
        text: "Current path: small hikes (15-25 bps each), heavy verbal guidance ('we won't hike while markets are unstable'), patience. Each BoJ meeting is now a global event, similar in importance to the Fed.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Other carry pairs",
        text: "Beyond yen carry, other funding currencies include Swiss franc, Chinese yuan (sometimes), and increasingly the euro (negative ECB rates 2014-22). The yen has historically been the largest by volume.",
      },
      {
        kind: "h2",
        text: "Why this matters for an Indian investor",
      },
      {
        kind: "p",
        text: "Carry unwinds hit Indian markets within hours. They're typically violent but short-lived — markets often recover within 1-3 weeks. Knowing the carry framework helps you:",
      },
      {
        kind: "list",
        items: [
          "Not panic-sell during a carry-driven flash crash",
          "Distinguish carry stress (positioning event) from genuine economic stress (extended bear market)",
          "Add exposure when the unwind creates 5-8% Nifty drops in days",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Yen carry trade is estimated at $1-4T+ — among the largest macro positioning globally.",
          "Carry profitable in calm markets, painful in volatile ones.",
          "Carry unwinds are violent: yen rallies, risk assets sell off, leverage gets liquidated.",
          "Watch USDJPY for early warning of stress.",
          "BoJ meetings are now global events. Each hike risks triggering an unwind.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does a sudden 3% rally in the yen often coincide with global equity sell-offs?",
        options: [
          "Random correlation",
          "Yen carry trade unwind — buying yen to repay loans while simultaneously selling overseas assets",
          "Japan controls global stocks",
          "It doesn't — these are unrelated",
        ],
        correctIndex: 1,
        explanation: "Carry traders sell their non-yen assets (US, Indian, EM) and buy yen to repay loans. Both moves are simultaneous and self-reinforcing.",
      },
      {
        id: "q2",
        prompt: "Why is the Bank of Japan cautious about hiking rates aggressively?",
        options: [
          "BoJ doesn't believe in inflation",
          "Sudden hikes risk triggering a yen carry trade unwind that can crash global markets — as demonstrated in August 2024",
          "Japan has no inflation problem",
          "Political reasons only",
        ],
        correctIndex: 1,
        explanation: "BoJ's small hike to 0.25% in July 2024 combined with a weak US NFP triggered a global cascade. They're now extremely cautious about timing further moves.",
      },
    ],
  },
  {
    id: "w06-l05",
    weekId: W,
    order: 5,
    title: "RBI intervention and the managed-float reality",
    summary: "The RBI is far more active in FX than most people realize. How intervention works, when it happens, and what its limits are.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "When you read a headline like 'rupee strengthens 15 paise on RBI intervention', you might wonder what that actually means. The RBI doesn't 'set' the rupee — it influences it by buying and selling dollars in the FX market. Here's how it actually works.",
      },
      {
        kind: "h2",
        text: "The mechanics",
      },
      {
        kind: "p",
        text: "The RBI sits on India's forex reserves — currently around $650 billion, among the world's largest. These reserves are mostly US Treasuries plus some gold, euros, and SDRs (a basket maintained by the IMF).",
      },
      {
        kind: "p",
        text: "When the RBI wants to strengthen the rupee (slow weakness), it sells dollars from reserves. The buyer of those dollars (a bank or a corporation) pays in rupees, taking dollars off the market — reducing dollar supply, slowing the rupee's slide.",
      },
      {
        kind: "p",
        text: "When the RBI wants to weaken the rupee (slow strength), it buys dollars in the market. Now dollar demand goes up, pushing the rupee weaker.",
      },
      {
        kind: "p",
        text: "Each operation is usually $1-3 billion. On stressed days, RBI can intervene multiple times intraday for cumulative $5-10 billion.",
      },
      {
        kind: "h2",
        text: "Why intervene at all?",
      },
      {
        kind: "p",
        text: "The RBI's official mandate is 'orderly market conditions' — not a specific exchange rate level. In practice, this means:",
      },
      {
        kind: "list",
        items: [
          "**Smooth volatility** — large daily moves create uncertainty for businesses. Less than 30 paise moves are tolerated, but bigger ones often get smoothed.",
          "**Avoid one-way bets** — if speculators are heavily short INR, RBI intervention can squeeze them and remove the directional bias.",
          "**Manage inflation pass-through** — sudden INR weakness raises imported inflation. RBI weighs this against allowing competitive depreciation.",
          "**Support export competitiveness** — without intervention, INR might be even stronger sometimes; RBI buys dollars on strength to maintain export viability.",
        ],
      },
      {
        kind: "analogy",
        title: "The Mumbai traffic constable",
        text: "RBI intervention is like a traffic constable at a busy junction. They can't make cars go faster or slower individually, but by waving, blowing whistles, and physically blocking lanes, they keep the overall flow smooth. Most drivers don't even notice them on quiet days. On chaotic days, their presence is the difference between flow and gridlock.",
      },
      {
        kind: "h2",
        text: "When RBI intervenes most",
      },
      {
        kind: "list",
        items: [
          "Approaching psychologically round numbers (₹80, ₹85)",
          "When daily moves exceed 30-50 paise",
          "When India VIX spikes alongside currency weakness — joint stress",
          "Pre and post Budget day to manage volatility",
          "During RBI MPC days to absorb positioning",
          "Significant FII outflow days",
        ],
      },
      {
        kind: "h2",
        text: "The limits",
      },
      {
        kind: "p",
        text: "RBI's intervention has real limits:",
      },
      {
        kind: "list",
        items: [
          "**Reserves are finite** — $650B sounds large but can be depleted quickly in a true crisis (2013 taper tantrum saw $30B+ drawn down)",
          "**Sterilization complications** — when RBI sells dollars, it absorbs rupees, which can tighten domestic liquidity. RBI then has to inject rupee liquidity to offset.",
          "**Cannot fight fundamentals indefinitely** — if Indian inflation is much higher than US inflation, the rupee has to depreciate over time regardless of intervention.",
          "**Global trends override** — when DXY rallies 8% in a quarter, RBI can slow but not reverse INR weakness.",
        ],
      },
      {
        kind: "h2",
        text: "Indian banks' role",
      },
      {
        kind: "p",
        text: "RBI doesn't trade directly with retail. It works through Authorized Dealer banks — primarily SBI, HDFC Bank, ICICI Bank, Axis Bank, and a few foreign banks. These banks transmit RBI's intervention into the market.",
      },
      {
        kind: "p",
        text: "On heavy intervention days, FX dealers in these banks watch the order flow obsessively. The presence of a 'large unnamed buyer' selling $500m of dollars is almost always RBI. By the next morning, the market knows what happened.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Reading 'RBI intervened today'",
        text: "When a financial news outlet says 'RBI intervened to defend rupee', they're describing a behavior pattern, not an official announcement. RBI rarely confirms intervention. Look at end-of-week forex reserves data — a $3-5B drop alongside a tight INR week confirms heavy intervention.",
      },
      {
        kind: "h2",
        text: "Forex reserves trajectory",
      },
      {
        kind: "p",
        text: "India's reserves have grown significantly:",
      },
      {
        kind: "list",
        items: [
          "2013 (taper tantrum): ~$280B",
          "2018: $400B",
          "2020 (COVID): $570B",
          "2021 (peak): $640B",
          "2022 (drawn down to defend INR): $530B",
          "2024 (recovered): ~$650-700B",
        ],
      },
      {
        kind: "p",
        text: "Higher reserves give the RBI more firepower. India's reserves are now roughly 11 months of import cover — comfortable by historical standards.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "RBI manages USD/INR through reserves of ~$650B; not free-float.",
          "Intervenes via buying/selling dollars; usually $1-3B per operation.",
          "Goal: smooth volatility, not defend a specific level.",
          "Limits: reserves are finite, can't fight fundamentals long-term, global DXY trends override.",
          "Reserves data confirms intervention — RBI rarely announces it.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does the RBI typically slow rupee weakness?",
        options: [
          "Issuing decrees",
          "Selling dollars from reserves into the FX market — increasing dollar supply",
          "Asking banks to stop selling rupees",
          "Increasing the repo rate",
        ],
        correctIndex: 1,
        explanation: "RBI sells dollars from reserves, which adds dollar supply to the market and reduces the pace of rupee weakening.",
      },
      {
        id: "q2",
        prompt: "What's the main limit on RBI's ability to defend the rupee indefinitely?",
        options: [
          "Political pressure",
          "Reserves are finite, and if fundamentals (inflation differential, FII outflows) keep pressuring INR, intervention can only delay, not reverse",
          "RBI charter restrictions",
          "RBI never intervenes",
        ],
        correctIndex: 1,
        explanation: "RBI can smooth and slow, but fundamentals (CAD, inflation differentials, capital flows) eventually win. Reserves can be depleted in extended one-way stress.",
      },
    ],
  },
  {
    id: "w06-l06",
    weekId: W,
    order: 6,
    title: "Practical forex exposure for Indian investors",
    summary: "You can't trade EUR/USD legally, but you have several legitimate ways to take currency views. Here's the toolkit.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Indian retail can't speculate in global FX pairs. But you can take currency-aware positions through approved channels. Here's how to actually have FX exposure in your portfolio.",
      },
      {
        kind: "h2",
        text: "Direct: NSE currency segment",
      },
      {
        kind: "p",
        text: "NSE has a currency derivatives segment. Indian retail can trade futures and options on:",
      },
      {
        kind: "list",
        items: [
          "USD/INR (most liquid)",
          "EUR/INR",
          "GBP/INR",
          "JPY/INR",
        ],
      },
      {
        kind: "p",
        text: "Standard contract sizes (typically $1,000 notional). Cash-settled in INR. Used by importers/exporters to hedge and by retail traders to speculate. Tax treatment: same as F&O — business income, taxed at slab rate.",
      },
      {
        kind: "p",
        text: "**Caution**: USD/INR currency F&O is more volatile than it appears. Indian retail has lost significant money here too. Don't trade FX on news without significant experience.",
      },
      {
        kind: "h2",
        text: "Indirect: International equity funds",
      },
      {
        kind: "p",
        text: "Buying an Indian mutual fund or ETF that holds US equities gives you indirect USD exposure. When USD strengthens vs INR, your fund value in INR rises even if the underlying index is flat.",
      },
      {
        kind: "p",
        text: "Example: You hold ₹1 lakh in Motilal Oswal Nasdaq 100 FOF. Nasdaq is flat for the month but USD/INR moves from 83 to 85 (2.4% USD strengthen). Your fund value rises ~2.4% in INR terms.",
      },
      {
        kind: "h2",
        text: "Indirect: Gold",
      },
      {
        kind: "p",
        text: "Gold is priced in USD globally. Holding INR-denominated gold (SGB, gold ETF, physical) gives you indirect USD exposure. When USD weakens vs INR (rarely), gold in INR can flat. When USD strengthens and gold also moves up, INR gold rallies double.",
      },
      {
        kind: "p",
        text: "Sovereign Gold Bonds are particularly attractive: 2.5% annual coupon + price appreciation + LTCG-free at maturity.",
      },
      {
        kind: "h2",
        text: "Indirect: IT and pharma stocks",
      },
      {
        kind: "p",
        text: "Indian IT (TCS, Infosys, HCL) earns ~70-80% revenue in USD. Indian pharma (Sun, Dr Reddy's) earns large USD revenue. When the rupee weakens, these companies' INR revenue rises mechanically.",
      },
      {
        kind: "p",
        text: "Holding Nifty IT index ETF or specific IT names is an implicit short-INR / long-USD position. Adds currency-resilient companies to your portfolio.",
      },
      {
        kind: "h2",
        text: "FCNR / NRE accounts (for NRIs)",
      },
      {
        kind: "p",
        text: "Non-Resident Indians can hold dollar-denominated bank deposits in India:",
      },
      {
        kind: "list",
        items: [
          "**FCNR(B)** — Foreign Currency Non-Resident (Bank) deposits. Denominated in USD, GBP, EUR, etc. No exchange risk for the depositor.",
          "**NRE** — Non-Resident External. Rupee-denominated but freely repatriable. Tax-free interest in India.",
        ],
      },
      {
        kind: "p",
        text: "If you're returning to India after a stint abroad, FCNR can be a useful tool to lock in USD exposure for a few years.",
      },
      {
        kind: "h2",
        text: "Hedging vs speculation",
      },
      {
        kind: "p",
        text: "Think of FX positions in two categories:",
      },
      {
        kind: "list",
        items: [
          "**Hedging** — offsetting a real exposure. If you have a USD obligation in 6 months (US tuition, foreign trip), buying USD-linked assets now is a hedge.",
          "**Speculation** — taking a directional view without an underlying need. 'I think the rupee will weaken so I'll buy gold' is speculation.",
        ],
      },
      {
        kind: "p",
        text: "Hedging real exposures is sensible. Pure FX speculation by retail is very hard — multi-trillion-dollar markets move on signals you can't see.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The default Indian portfolio FX exposure",
        text: "If you hold 80% Indian equity + 20% international equity (US-focused mutual fund), your effective USD exposure is ~20%. That's a reasonable default for most Indians. It gives meaningful diversification without overweighting foreign currency. Goes up automatically when INR weakens, providing some downside cushion.",
      },
      {
        kind: "h2",
        text: "What to avoid",
      },
      {
        kind: "list",
        items: [
          "**Offshore CFD brokers offering EUR/USD trading** — illegal for residents, no legal recourse if they cheat you",
          "**Forex 'signals' Telegram groups** — universally scams or grossly unreliable",
          "**Heavy F&O speculation on USD/INR** — extreme leverage on a managed currency is asymmetric",
          "**Crypto pairs marketed as 'forex'** — different legal and tax regime (30% flat plus 1% TDS)",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Direct: NSE currency segment for INR pairs only. Speculation is hard.",
          "Indirect USD exposure: international equity funds, gold (SGB/ETF), Indian IT and pharma stocks.",
          "NRIs can use FCNR(B) or NRE accounts.",
          "Hedge real obligations; avoid pure FX speculation as retail.",
          "A sensible default: 15-20% of equity in international funds = ~15-20% USD exposure.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which of these is the simplest and safest way for retail Indian investors to gain indirect USD exposure?",
        options: [
          "Offshore CFD broker",
          "Indian-listed international equity mutual fund (e.g., Nasdaq 100 FOF) — INR-denominated but USD-exposed",
          "Speculating in USD/INR futures",
          "Buying physical USD",
        ],
        correctIndex: 1,
        explanation: "An international equity fund is simple, legal, and gives you both equity and USD currency exposure in one product.",
      },
      {
        id: "q2",
        prompt: "Why might Indian IT stocks be considered an implicit FX position?",
        options: [
          "They're listed in dollars",
          "They earn 70-80% of revenue in USD — INR weakness mechanically boosts their reported INR revenue",
          "RBI controls IT companies",
          "They're tax-free",
        ],
        correctIndex: 1,
        explanation: "Indian IT services are dollar-revenue businesses. Rupee weakness translates directly into higher INR revenue. Holding Indian IT = implicit long USD position.",
      },
    ],
  },
];

export const WEEK_06_LESSONS = lessons;
