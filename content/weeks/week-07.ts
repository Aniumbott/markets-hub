import type { Lesson } from "../types";

const W = 7;

const lessons: Lesson[] = [
  {
    id: "w07-l01",
    weekId: W,
    order: 1,
    title: "How the global oil market is structured",
    summary: "Producers, consumers, refiners, traders, storage operators — and why oil rarely trades on supply and demand alone.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Crude oil is the most economically important commodity on the planet. It powers cars, planes, ships, and trucks. It's the input for plastics, fertilizers, asphalt, and most chemicals. When oil prices move, downstream prices on thousands of products eventually adjust.",
      },
      {
        kind: "h2",
        text: "Where oil comes from",
      },
      {
        kind: "table",
        headers: ["Producer", "Production (mb/d)", "Notes"],
        rows: [
          ["United States", "~13", "Largest producer post-shale revolution"],
          ["Saudi Arabia", "~10", "Lowest-cost producer; OPEC swing supplier"],
          ["Russia", "~9.5", "Major exporter; sanctioned post-2022"],
          ["Canada", "~5", "Oil sands"],
          ["Iraq", "~4", "OPEC member"],
          ["China", "~4", "Mostly for domestic use"],
          ["UAE", "~3.5", "OPEC member"],
          ["Brazil", "~3.5", "Deep-water"],
          ["Iran", "~3", "Sanctioned"],
          ["Kuwait", "~2.5", "OPEC"],
        ],
      },
      {
        kind: "p",
        text: "Global oil production is roughly 100 million barrels per day (mb/d). India imports ~5 mb/d (about 85% of consumption). This puts India in the top 3 oil importers globally, alongside China and the EU.",
      },
      {
        kind: "h2",
        text: "Who consumes oil",
      },
      {
        kind: "p",
        text: "Consumption is led by transport (~60% of crude usage) and industry/chemicals (~25%). Power generation is a smaller share (~5%) — most electricity comes from coal, gas, hydro, nuclear, or renewables.",
      },
      {
        kind: "p",
        text: "Top consumers:",
      },
      {
        kind: "list",
        items: [
          "**US** — ~20 mb/d. Largest consumer.",
          "**China** — ~15 mb/d. Largest crude importer.",
          "**India** — ~5 mb/d. 3rd largest consumer.",
          "**Russia, Japan, Brazil, Saudi Arabia** — 3-4 mb/d each",
        ],
      },
      {
        kind: "h2",
        text: "Refining and the product chain",
      },
      {
        kind: "p",
        text: "Crude oil isn't directly usable. It's refined into products: diesel (40-50%), petrol (15-20%), kerosene/ATF, naphtha, fuel oil, LPG, asphalt. Different refineries have different capabilities — some are 'simple' (basic distillation) and some are 'complex' (deep conversion, can handle heavy crude).",
      },
      {
        kind: "p",
        text: "Indian refineries are among the most sophisticated globally. Reliance's Jamnagar complex is the world's largest single-site refinery. India also exports refined products — diesel and aviation fuel to Europe and Africa — making refining a significant export industry.",
      },
      {
        kind: "h2",
        text: "Storage and inventories",
      },
      {
        kind: "p",
        text: "Oil prices respond to inventory levels. Strategic Petroleum Reserves (SPR) held by governments, plus commercial inventories at refineries and terminals, plus floating storage on tankers — together hold weeks of consumption.",
      },
      {
        kind: "list",
        items: [
          "**US SPR** — ~365 million barrels (~18 days of US consumption)",
          "**Indian SPR** — only ~5 days of consumption — much smaller cushion",
          "**Commercial inventories** — published weekly by US EIA; market-moving release every Wednesday",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "The Wednesday EIA print",
        text: "Every Wednesday at 8 PM IST, the US Energy Information Administration publishes weekly crude inventory data. A big inventory build = supply outpacing demand = bearish oil. A big draw = demand outpacing supply = bullish. This is the most-watched scheduled oil data point.",
      },
      {
        kind: "h2",
        text: "Why oil is more than supply and demand",
      },
      {
        kind: "p",
        text: "If oil traded purely on physical fundamentals, prices would be much more stable. They aren't — because three other factors regularly dominate:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Geopolitics** — wars, sanctions, regime changes. The Iran-Israel-Saudi-Russia geopolitical web drives ~50% of oil price moves in volatile years.",
          "**OPEC+ coordination** — cartel decisions on production quotas. Cuts push prices up; increases push prices down. Six-week meeting cycles are calendar events.",
          "**Financial flows** — billions of dollars in oil futures speculation by hedge funds, ETFs, commodity index funds. The financial market is much larger than the physical market in daily volume.",
        ],
      },
      {
        kind: "analogy",
        title: "The mandi and the futures market",
        text: "In the Dadar tomato mandi, prices move on the daily truck arrivals. Oil is different — there's the physical mandi (tankers, refineries, storage) AND a much larger futures mandi (financial traders speculating on prices weeks ahead). The financial mandi often moves first; the physical mandi catches up.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Global oil production ~100 mb/d; India consumes ~5 mb/d and imports 85%.",
          "Three benchmark crudes: Brent (international), WTI (US), Dubai (Middle East).",
          "Indian refineries are world-class — refining is a significant Indian export industry.",
          "Weekly US EIA inventory data (Wed 8 PM IST) is the most-watched physical oil data point.",
          "Oil prices move on geopolitics, OPEC+ decisions, and financial flows as much as physical supply/demand.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What percentage of its oil consumption does India import?",
        options: ["About 30%", "About 50%", "About 85%", "About 100%"],
        correctIndex: 2,
        explanation: "India produces about 0.7 mb/d and consumes ~5 mb/d, importing the difference. This ~85% dependency makes India one of the most oil-exposed major economies.",
      },
      {
        id: "q2",
        prompt: "Why does the price of oil often move on financial flows rather than just physical supply and demand?",
        options: [
          "Oil markets are illegal",
          "The financial futures market is much larger than the physical market in daily volume, and speculation often drives short-term prices",
          "Governments fix oil prices",
          "Refiners control prices",
        ],
        correctIndex: 1,
        explanation: "Oil futures volumes are 10-30x physical volume on any given day. Financial positioning, speculation, and ETF flows move prices first; physical catches up later.",
      },
    ],
  },
  {
    id: "w07-l02",
    weekId: W,
    order: 2,
    title: "Brent vs WTI — two benchmarks, one global tape",
    summary: "Why there are two oil prices, what the spread means, and why India effectively pays Brent.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "When you check the oil price, you'll usually see two numbers: {{brent|Brent crude}} and {{wti|WTI crude}}. They're the world's two main benchmarks, both quoted in USD per barrel.",
      },
      {
        kind: "h2",
        text: "Brent",
      },
      {
        kind: "p",
        text: "Brent is the international benchmark, originally based on oil from the Brent field in the North Sea (off the UK). It now includes oil from multiple North Sea fields. Trades on ICE Futures Europe.",
      },
      {
        kind: "p",
        text: "Most importantly: Brent is the benchmark that most international oil — including oil imported to India — is priced against. When you read 'India's oil import basket', it's Brent-linked with adjustments for Middle Eastern and Russian grades.",
      },
      {
        kind: "h2",
        text: "WTI",
      },
      {
        kind: "p",
        text: "West Texas Intermediate (WTI) is the US benchmark. Lighter and sweeter than Brent (lower sulfur, lower density), so technically a higher-quality crude. Trades on CME / NYMEX.",
      },
      {
        kind: "p",
        text: "WTI is mainly relevant for US-focused oil prices. Indian importers don't directly pay WTI — but movements in WTI signal what's happening to US shale economics, US inventories, and global oil dynamics.",
      },
      {
        kind: "h2",
        text: "The Brent-WTI spread",
      },
      {
        kind: "p",
        text: "Brent and WTI usually trade at slightly different prices — the 'spread' between them tells a story:",
      },
      {
        kind: "table",
        headers: ["Spread (Brent − WTI)", "Interpretation"],
        rows: [
          ["$2-5/barrel (Brent higher)", "Normal — reflects transport and quality differences"],
          ["$8-15/barrel (Brent much higher)", "WTI oversupplied — usually US shale boom or Cushing storage glut"],
          ["Near zero or inverted", "Brent weakness — usually Middle East oversupply or post-OPEC+ disagreement"],
          ["$20+/barrel (rare)", "Severe US oversupply (April 2020 negative WTI was the extreme)"],
        ],
      },
      {
        kind: "h2",
        text: "Why two benchmarks survive",
      },
      {
        kind: "p",
        text: "Global oil moves physically — tankers from Saudi to India, pipelines from Texas to Louisiana refineries. Each region has its 'reference' crude. Multiple benchmarks survive because they each represent the local supply-demand reality.",
      },
      {
        kind: "p",
        text: "Beyond Brent and WTI, other benchmarks exist:",
      },
      {
        kind: "list",
        items: [
          "**Dubai/Oman** — Middle Eastern reference, used heavily in Asian pricing",
          "**WCS (Western Canadian Select)** — heavy oil from Canadian oil sands; usually trades $15-25 below WTI",
          "**Urals** — Russian export grade; trades at significant discount to Brent post-sanctions (the discount is what allowed India to buy cheap Russian crude in 2022-23)",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why India bought Russian crude",
        text: "Post-Russia sanctions in 2022, the Urals grade started trading at $25-30/barrel below Brent. Indian refiners (Reliance, IOC, BPCL) ramped up Russian imports — Russia became India's largest oil supplier in 2023-24. The crude was refined in India and the refined products were exported to Europe (legally, because they were 'Indian products' technically). This saved India ~$10-15 billion annually.",
      },
      {
        kind: "h2",
        text: "How to track",
      },
      {
        kind: "list",
        items: [
          "Investing.com: 'Brent Oil' and 'Crude Oil WTI'",
          "TradingView: BRENT and WTI symbols",
          "Bloomberg or Reuters daily commentary",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Brent is the international benchmark; WTI is the US benchmark.",
          "India's import basket is Brent-linked.",
          "Brent typically trades $2-5/barrel above WTI; bigger spreads signal regional imbalances.",
          "Russian Urals crude at discount to Brent enabled India to import heavily post-2022 sanctions.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which oil benchmark is most relevant for India's import costs?",
        options: ["WTI", "Brent", "Dubai", "All three equally"],
        correctIndex: 1,
        explanation: "India's import basket is Brent-linked with adjustments. WTI is more relevant for US-specific dynamics.",
      },
      {
        id: "q2",
        prompt: "Why did Indian refiners ramp up Russian crude imports post-2022?",
        options: [
          "Political alignment",
          "Russian Urals crude traded at $25-30/barrel discount to Brent due to sanctions, providing arbitrage savings of $10-15B/year for India",
          "Russia gave India free oil",
          "Indian sanctions",
        ],
        correctIndex: 1,
        explanation: "Sanctions on Russian oil created a discount that Indian refiners arbitraged legally. Refined products from Russian crude were exported to Europe.",
      },
    ],
  },
  {
    id: "w07-l03",
    weekId: W,
    order: 3,
    title: "OPEC+ and the cartel calendar",
    summary: "An ageing cartel still moves global prices on six-week meeting cycles. How OPEC works and what to watch.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "{{opec|OPEC}} — Organization of the Petroleum Exporting Countries — was founded in 1960 by Saudi Arabia, Iran, Iraq, Kuwait, and Venezuela. Today's OPEC has 12 members. OPEC+ adds Russia and a handful of others (Kazakhstan, Oman, Mexico) since 2016.",
      },
      {
        kind: "p",
        text: "OPEC+ produces roughly 45-50% of global oil. That's enough market share to move prices when they coordinate — though less than the 60-70% share OPEC had at its peak in the 1970s. US shale revolution has changed the balance of power.",
      },
      {
        kind: "h2",
        text: "How OPEC+ actually works",
      },
      {
        kind: "p",
        text: "Every 6 weeks roughly, OPEC+ meets (sometimes virtually, sometimes in person). They negotiate quotas — how much each member can produce — based on the desired oil price. The headline output of the meeting is either:",
      },
      {
        kind: "list",
        items: [
          "**Production cuts** (e.g., -1 mb/d collectively) — pushes prices up",
          "**Rollover** (no change to quotas) — depends on prior trajectory",
          "**Production increase** (rare in recent years) — pushes prices down",
        ],
      },
      {
        kind: "p",
        text: "Saudi Arabia is the dominant force. Saudi has spare capacity and the lowest production costs (~$5-10/barrel breakeven vs $40-60 for US shale). When Saudi wants to defend a price, it can withhold supply. When it wants to punish someone (Russia in 2020), it can flood the market.",
      },
      {
        kind: "h2",
        text: "Compliance is the issue",
      },
      {
        kind: "p",
        text: "Quotas are agreed; actual compliance is patchy. Smaller members often cheat — producing above their quota for revenue. Saudi Arabia frequently absorbs the cheating by under-producing its own quota. The compliance ratio (actual vs quota) is reported monthly; markets react to it.",
      },
      {
        kind: "analogy",
        title: "The diet club with a sneaky member",
        text: "OPEC+ is like a diet club where everyone agrees to eat less. Most stick to it. A few sneak biscuits at home. Saudi, the leader, sometimes eats even less to compensate. The dietitian (the market) sees through it eventually. Some weeks the diet works, some weeks it doesn't.",
      },
      {
        kind: "h2",
        text: "The Saudi-Russia dynamic",
      },
      {
        kind: "p",
        text: "Post-2016, Russia joined OPEC+ as a coordinating partner. The Saudi-Russia alliance ran the cartel jointly for years. Their disagreements have been spectacularly destructive:",
      },
      {
        kind: "list",
        items: [
          "**March 2020** — Russia refused Saudi's proposed cuts; Saudi retaliated with a price war (flooding the market). Brent fell from $50 to $30 in days. COVID then crushed demand and Brent fell further to $19.",
          "**June 2023** — Saudi went it alone on cuts when other OPEC+ members wouldn't commit. Voluntary 1 mb/d cuts maintained for over a year.",
          "**Mid-2024** — Saudi started preparing to unwind voluntary cuts; market pricing reflected concern about additional supply.",
        ],
      },
      {
        kind: "h2",
        text: "The watch-list",
      },
      {
        kind: "list",
        items: [
          "**OPEC+ meeting calendars** — published 2-3 weeks ahead. Investing.com tracks them.",
          "**Saudi communications via state media** — pre-meeting positioning leaks",
          "**Compliance reports** — monthly IEA and OPEC reports show actual vs quota",
          "**Spare capacity estimates** — Saudi spare capacity is around 1.5-2 mb/d; how much it deploys signals intent",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "OPEC+ surprises move markets violently",
        text: "OPEC+ surprises can move oil 5-10% in hours. The June 2023 unilateral Saudi cut, the Oct 2022 production cut (politically charged before US midterms), and the 2020 price war all triggered double-digit oil moves. If you're long oil exposure (Indian OMC stocks, energy ETFs), be aware that OPEC+ meeting days are high-volatility.",
      },
      {
        kind: "h2",
        text: "Long-term: OPEC's declining relevance",
      },
      {
        kind: "p",
        text: "Two structural pressures on OPEC+:",
      },
      {
        kind: "list",
        items: [
          "**US shale** — US production has tripled since 2010. The US is now the largest producer. OPEC can't easily set prices with another major producer outside the cartel.",
          "**Energy transition** — EVs displacing demand for petrol; renewable power growth. OPEC's largest customer (long-run global demand growth) is shrinking.",
        ],
      },
      {
        kind: "p",
        text: "OPEC still matters in the short term. Its long-term influence is uncertain.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "OPEC+ = OPEC (12 members) + Russia + a few others. Produces 45-50% of global oil.",
          "Meeting cycles ~6 weeks. Output: production cuts, rollovers, or rare increases.",
          "Saudi is the dominant force; Russia is the key partner; their alliance has been historically tense.",
          "Compliance with quotas is patchy; Saudi absorbs cheating by under-producing.",
          "OPEC+ surprises can move oil 5-10% in hours; meeting days are high volatility.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is Saudi Arabia the dominant force within OPEC+?",
        options: [
          "Most members",
          "Largest spare capacity, lowest production costs (~$5-10/barrel), can punish or reward with supply moves",
          "Located in Europe",
          "Controls all OPEC tankers",
        ],
        correctIndex: 1,
        explanation: "Saudi has the largest spare capacity and lowest costs. It can flood the market or starve it depending on its strategic goal.",
      },
      {
        id: "q2",
        prompt: "How often does OPEC+ typically meet?",
        options: ["Daily", "Every 6 weeks roughly", "Annually", "Only during crises"],
        correctIndex: 1,
        explanation: "OPEC+ has a standing schedule of meetings roughly every 6 weeks. Additional 'extraordinary' meetings happen during crises.",
      },
    ],
  },
  {
    id: "w07-l04",
    weekId: W,
    order: 4,
    title: "India's oil exposure — why we feel every move",
    summary: "85% import dependency means oil is upstream of India's current account, inflation, rupee, and corporate margins.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Among major economies, India is uniquely vulnerable to oil prices. The US is now a net oil exporter. China imports a lot but has more diverse trade balances. Europe imports too but in smaller absolute size. India imports nearly all its oil, and oil is one of our largest single imports by value.",
      },
      {
        kind: "h2",
        text: "The import bill math",
      },
      {
        kind: "p",
        text: "India imports ~5 mb/d. At $80/barrel, that's $400 million per day or $146 billion per year — roughly 4% of India's GDP. At $120/barrel, the bill rises to $220 billion — 6% of GDP and a big shock.",
      },
      {
        kind: "p",
        text: "Rule of thumb: every $10/barrel sustained move changes India's annual oil import bill by ~$15 billion. That's:",
      },
      {
        kind: "list",
        items: [
          "~$15B impact on the current account deficit (assuming no demand response)",
          "~50-70 paise impact on USD/INR on average",
          "~20-30 bps impact on CPI inflation over 2-3 quarters",
          "Direct earnings hit on oil marketing companies (IOC, BPCL, HPCL); benefit to upstream (ONGC, Oil India)",
        ],
      },
      {
        kind: "h2",
        text: "The current account chain",
      },
      {
        kind: "p",
        text: "India's current account has three main components:",
      },
      {
        kind: "list",
        items: [
          "**Goods trade deficit** — India imports more goods than it exports. Oil and electronics are the biggest single import items.",
          "**Services trade surplus** — Indian IT services exports, BPO, etc. are a massive surplus (~$150B+ per year).",
          "**Net remittances + investment income** — Indian diaspora sending money home is a huge structural inflow ($120B+ per year — world's largest).",
        ],
      },
      {
        kind: "p",
        text: "India's current account deficit (CAD) is typically -1% to -2% of GDP — manageable. But when oil spikes, the goods deficit widens dramatically. CAD can balloon to -3% to -4% of GDP in oil-spike years (briefly hit -5% in 2012-13, contributing to the 'fragile five' crisis).",
      },
      {
        kind: "h2",
        text: "The inflation transmission",
      },
      {
        kind: "p",
        text: "Oil moves into CPI through three channels:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Direct fuel prices** — petrol, diesel, LPG. The government controls retail prices with some lag, especially for LPG. Petrol/diesel retail prices have been remarkably stable since mid-2022 despite international moves — partly because Indian OMCs absorbed the volatility.",
          "**Transport costs** — diesel feeds into trucking costs, which raise the price of essentially every consumer good that has to move from factory to retail.",
          "**Industrial costs** — paint, fertilizer, plastic, chemicals all use crude derivatives. Higher crude = higher input cost for hundreds of manufacturers.",
        ],
      },
      {
        kind: "p",
        text: "Total inflation pass-through: a $20 sustained increase in Brent typically adds 50-70 bps to CPI over the following 2-3 quarters.",
      },
      {
        kind: "analogy",
        title: "Like rain affecting Mumbai",
        text: "When it rains heavily in Mumbai, it's not just the rain that hurts — it's the traffic jams, flight delays, train cancellations, school closures, supply chain disruptions, and increased electricity demand from ACs. Oil works the same way for India. The headline price is just the visible layer. Everything downstream — inflation, currency, sector earnings, RBI policy — gets soaked.",
      },
      {
        kind: "h2",
        text: "Who wins and who loses",
      },
      {
        kind: "table",
        headers: ["Oil up", "Winners", "Losers"],
        rows: [
          ["Sustained $20+ rise", "ONGC, Oil India (upstream), Reliance (refining margins)", "OMCs (IOC, BPCL, HPCL — marketing margins squeezed), paints, cement, airlines, FMCG (cost pressure)"],
          ["Crash $20+ fall", "OMCs (marketing margins recover), paints, airlines, FMCG, government (lower subsidies)", "ONGC, Oil India, Reliance (lower realizations)"],
        ],
      },
      {
        kind: "h2",
        text: "The political dimension",
      },
      {
        kind: "p",
        text: "Retail petrol/diesel prices are politically sensitive in India. Despite official deregulation in 2014, the government and OMCs effectively manage prices in election windows and during sustained spikes. This is a political-economy tax — OMCs swallow margin compression to keep retail prices stable, hurting their stock prices in the short term.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "The 2018 example",
        text: "Brent hit $86 in October 2018 during a Saudi production cut + US sanctions on Iran. Indian OMC stocks dropped 25%+ in weeks as the government quietly required them to absorb margin pressure ahead of state elections. The OMCs eventually recovered when Brent fell to $50 by year-end. Lesson: state-owned OMC stock prices are partly political risk, not pure commodity risk.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "India imports 85% of oil; oil bill is ~$146B/year at $80/barrel.",
          "Every $10/barrel sustained move = ~$15B current account impact + 50-70 paise USD/INR + 20-30 bps CPI.",
          "Three inflation channels: direct fuel prices, transport costs, industrial inputs.",
          "Upstream (ONGC, RIL) wins when oil rises; OMCs and downstream (paints, cement, airlines) lose.",
          "Retail fuel prices are politically managed — adds risk to state-owned OMC stocks.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Brent sustained at $110 vs base case of $80. What's the approximate impact on USD/INR?",
        options: ["No impact", "Roughly 100-200 paise rupee weakness over time", "Rupee strengthens", "Rupee crashes to 100"],
        correctIndex: 1,
        explanation: "$30/barrel sustained move = ~$45B import bill increase = significant CAD widening = ~150-200 paise USD/INR over time (subject to other factors).",
      },
      {
        id: "q2",
        prompt: "Why do Indian OMCs (IOC, BPCL, HPCL) often underperform when oil rises?",
        options: [
          "They don't",
          "Their marketing margins get squeezed as raw material costs rise faster than retail prices (which the government keeps stable)",
          "OMCs are illegal",
          "Currency hedging losses",
        ],
        correctIndex: 1,
        explanation: "OMCs buy crude (expensive) and sell refined fuel at retail (price-managed). Spikes compress their margins. State ownership creates an implicit subsidy obligation.",
      },
    ],
  },
  {
    id: "w07-l05",
    weekId: W,
    order: 5,
    title: "Oil → CPI → rupee — the chain",
    summary: "Following the cascade from a Brent move to your home loan EMI. Why oil is upstream of everything in India.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "We've covered why oil matters and where the impacts land. Now let's trace one specific cascade so you can see it in motion — a $20/barrel sustained move from $80 to $100 Brent.",
      },
      {
        kind: "h2",
        text: "Step 1 — Import bill widens",
      },
      {
        kind: "p",
        text: "India's annual oil import bill rises ~$30 billion (5 mb/d × 365 days × $20/barrel = ~$36B; demand response reduces this slightly).",
      },
      {
        kind: "p",
        text: "Indian importers (OMCs, mostly) need to buy ~$30B more in dollars. They go to the FX market and buy dollars by selling rupees. Increased dollar demand pressures USD/INR upward.",
      },
      {
        kind: "h2",
        text: "Step 2 — Rupee weakens",
      },
      {
        kind: "p",
        text: "RBI smooths the move but cannot eliminate it. USD/INR typically rises 100-150 paise over the following weeks/months.",
      },
      {
        kind: "h2",
        text: "Step 3 — Imported inflation",
      },
      {
        kind: "p",
        text: "The same dollar of imported petrol now requires more rupees. Retail petrol prices, if government allows passthrough, rise (or OMCs absorb). Plastic packaging, transportation costs, paints, fertilizers all cost more.",
      },
      {
        kind: "p",
        text: "Indian CPI rises 50-70 bps over the next 2-3 quarters. The rise is not all from oil — wage growth, food, and other factors play in — but oil is the largest single contributor in oil-spike scenarios.",
      },
      {
        kind: "h2",
        text: "Step 4 — RBI responds",
      },
      {
        kind: "p",
        text: "Higher CPI shifts RBI's stance. If they were planning to cut rates, the cut is pushed back. If they're already on hold, they stay on hold longer. If inflation breaches the 6% upper band, they may need to hike.",
      },
      {
        kind: "p",
        text: "Even without an actual rate change, the stance shift moves bond markets. G-Sec yields rise 10-20 bps. Bond prices fall.",
      },
      {
        kind: "h2",
        text: "Step 5 — Your loan EMI",
      },
      {
        kind: "p",
        text: "When RBI's rate path shifts hawkish (no cuts, possibly hikes), bank lending rates respond. The Marginal Cost of Funds-based Lending Rate (MCLR) and external benchmark rates rise. Your home loan EMI eventually adjusts — banks reset rates every 6 months for most floating-rate retail loans.",
      },
      {
        kind: "p",
        text: "A 25 bps rate increase on a ₹50 lakh home loan adds ~₹800/month to the EMI over 20 years. On a 75 bps cumulative hike from oil-driven inflation, that's ~₹2,400/month. Compounded over 20 years, that's lakhs of rupees.",
      },
      {
        kind: "h2",
        text: "Step 6 — Equity transmission",
      },
      {
        kind: "p",
        text: "Higher rates and inflation compress equity valuations:",
      },
      {
        kind: "list",
        items: [
          "Discount rates rise — long-duration growth stocks (Nasdaq-like names in India, mid-cap growth) suffer most",
          "Banks: mixed (NIM benefits from higher rates, but loan growth slows)",
          "Auto: hurt by higher EMI cost",
          "FMCG: hurt by raw material cost (palm oil, packaging)",
          "Airlines: hammered by ATF cost",
          "Paints: hit hard by crude derivatives (Asian Paints often falls 15-20% in oil spikes)",
          "Upstream (ONGC): benefits — higher realisations",
        ],
      },
      {
        kind: "analogy",
        title: "Like a rock thrown in a pond",
        text: "Oil is the rock. The first splash is the import bill. The first ring is the currency. The second ring is inflation. The third ring is rate policy. The fourth ring is your EMI. The fifth is equity valuations. Each ring reaches you days or weeks apart, but they all started with the same rock. Understanding this lets you read 'oil up' and forecast the ripples mentally.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "Why this matters practically",
        text: "When you see a sustained oil spike, two practical actions: (1) Don't be surprised when your home loan EMI rises 6 months later. (2) Defensive sectors (FMCG, pharma) can underperform briefly on input cost pressure before stabilizing. Don't panic-sell quality names during oil-driven sell-offs.",
      },
      {
        kind: "h2",
        text: "Reverse chain",
      },
      {
        kind: "p",
        text: "When oil crashes (Mar 2020, Nov 2018, late 2022 briefly), the chain runs in reverse: import bill shrinks → rupee strengthens slightly → CPI moderates → RBI dovish bias → rate cuts → EMIs ease → equity P/E expansion. India does well when oil is low and stable. The 2014-16 oil crash period was one of the strongest Indian equity windows in recent memory.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Oil → import bill → rupee → CPI → RBI → bonds → EMI → equity. Six steps, weeks each.",
          "$20 Brent move = ~$30B import bill change = ~100-150 paise USD/INR = ~50-70 bps CPI.",
          "Compressed equity valuations hurt growth and rate-sensitive sectors most.",
          "Oil up: ONGC, RIL win; OMC, airlines, paints, FMCG lose.",
          "Oil down: opposite chain. India performs best in low-stable oil environments.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In the oil-up cascade, why does your home loan EMI eventually rise?",
        options: [
          "Banks are profit-seeking",
          "Oil → higher CPI → RBI hawkish/hikes → higher MCLR and external benchmark rates → floating EMIs reset higher every 6 months",
          "Government mandates higher EMIs",
          "Oil prices are tied to EMI directly",
        ],
        correctIndex: 1,
        explanation: "Oil drives inflation, which moves RBI, which moves bank rates, which moves your floating home loan rate. The chain is mechanical but takes 6-12 months to fully play out.",
      },
      {
        id: "q2",
        prompt: "Which sector typically falls the most during sustained oil price spikes?",
        options: [
          "Banks",
          "Asian Paints / paints (crude is a major raw material input)",
          "Pharma",
          "PSU banks",
        ],
        correctIndex: 1,
        explanation: "Paint companies use crude derivatives as raw materials. Asian Paints can fall 15-20% during sustained oil spikes due to margin compression.",
      },
    ],
  },
  {
    id: "w07-l06",
    weekId: W,
    order: 6,
    title: "Sectoral plays — upstream, downstream, OMC",
    summary: "The Indian oil & gas sector ecosystem. Which stocks benefit when crude rises, which suffer, and why.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Indian oil & gas is one of the larger sector groupings on the NSE. Within it, three sub-categories with very different commodity sensitivities:",
      },
      {
        kind: "h2",
        text: "Upstream — producers",
      },
      {
        kind: "p",
        text: "Companies that find and extract oil and gas. Their economics: realisation per barrel they produce. Higher crude = higher realisation = higher margin.",
      },
      {
        kind: "list",
        items: [
          "**ONGC** (Oil and Natural Gas Corp) — state-owned, India's largest upstream player. Subject to government 'windfall tax' when oil prices are high.",
          "**Oil India** — smaller PSU upstream.",
          "**Reliance Industries** — has upstream operations in KG-D6 basin alongside its much larger refining and retail businesses.",
          "**Cairn India (now part of Vedanta)** — private upstream.",
        ],
      },
      {
        kind: "p",
        text: "Caveat for Indian upstream: the windfall tax. When global oil prices spike, the government often imposes special taxes on Indian oil producers — capturing some of the upside for the budget rather than letting it flow to shareholders. This limits the upside on Indian upstream relative to global peers.",
      },
      {
        kind: "h2",
        text: "Downstream — refiners",
      },
      {
        kind: "p",
        text: "Companies that convert crude into refined products (diesel, petrol, jet fuel, naphtha). Their margin is the gross refining margin (GRM) — the spread between crude input price and refined output price.",
      },
      {
        kind: "list",
        items: [
          "**Reliance Industries** — Jamnagar complex is the world's largest refinery. Highly complex refining capability lets it process cheap heavy crude (including Russian).",
          "**Nayara Energy** (formerly Essar Oil) — private, large.",
          "**MRPL** (Mangalore Refineries) — PSU subsidiary of ONGC.",
        ],
      },
      {
        kind: "p",
        text: "Refining margins fluctuate with global product demand. When diesel is in short supply globally (post-Ukraine war, 2022), GRMs spike to $20-30/barrel — massively profitable. In oversupply periods, GRMs can fall to $5/barrel or below.",
      },
      {
        kind: "h2",
        text: "OMCs — Oil Marketing Companies",
      },
      {
        kind: "p",
        text: "Companies that sell refined products at retail (petrol pumps, LPG distribution, industrial supply). They buy from refiners and sell to consumers.",
      },
      {
        kind: "list",
        items: [
          "**IOC** (Indian Oil Corp) — largest OMC, owns the most petrol pumps",
          "**BPCL** (Bharat Petroleum) — second largest",
          "**HPCL** (Hindustan Petroleum) — third largest",
        ],
      },
      {
        kind: "p",
        text: "OMCs are the most politically managed sub-sector. The government effectively controls their retail pricing during election windows and oil spikes. When crude rises sharply, OMCs absorb margin compression. When crude falls, they benefit but the government often reduces VAT/excise to keep pump prices low. Net result: OMC earnings are volatile but bounded.",
      },
      {
        kind: "h2",
        text: "City gas distribution (CGD)",
      },
      {
        kind: "p",
        text: "Different from OMCs — these companies distribute natural gas in cities for CNG vehicles and PNG household connections.",
      },
      {
        kind: "list",
        items: [
          "**IGL** (Indraprastha Gas) — Delhi NCR",
          "**Mahanagar Gas** — Mumbai",
          "**Gujarat Gas** — Gujarat",
        ],
      },
      {
        kind: "p",
        text: "CGD economics are different — they're more exposed to natural gas prices (separate from crude oil) and regulated pricing. They've been a structural growth story as CNG adoption rises.",
      },
      {
        kind: "h2",
        text: "Pipeline of oil price scenarios",
      },
      {
        kind: "table",
        headers: ["Oil scenario", "Winners", "Losers"],
        rows: [
          ["Oil > $100 sustained", "ONGC, Oil India, RIL upstream/refining (despite windfall tax)", "OMCs (IOC, BPCL, HPCL), Asian Paints, IndiGo, Maruti"],
          ["Oil $70-90 (stable normal)", "RIL (refining margins healthy), CGD (predictable cost)", "Less stress on any sector"],
          ["Oil < $60", "OMCs (margin recovery), airlines, paints, FMCG cost relief", "ONGC, Oil India, refining margins compress"],
          ["Volatile oil (>$15 monthly swings)", "Reliance (best at managing volatility)", "Most others (planning is hard)"],
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "How to play oil through Indian stocks",
        text: "Pure long-oil bet: ONGC + Oil India + small RIL position. Pure short-oil bet: long IOC/BPCL + Asian Paints + IndiGo. Diversified balanced play: Reliance, which benefits across refining margin scenarios. CGD stocks are a separate, defensive, structural growth play (less commodity-sensitive).",
      },
      {
        kind: "h2",
        text: "Reliance — the special case",
      },
      {
        kind: "p",
        text: "Reliance Industries is unique because it's a vertically integrated giant with significant non-oil businesses too:",
      },
      {
        kind: "list",
        items: [
          "Oil & gas exploration (KG-D6)",
          "Refining (world's largest single-site complex)",
          "Petrochemicals (largest in India)",
          "Telecom (Jio — ~470M subscribers)",
          "Retail (Reliance Retail — largest organized retailer in India)",
          "Renewable energy (gigantic capex plans for solar, hydrogen)",
        ],
      },
      {
        kind: "p",
        text: "RIL's oil & gas plus refining + petchem is ~50-60% of revenue but a declining share of profit. The non-oil businesses (Jio, Retail) are increasingly the growth drivers. RIL has become more of a 'diversified Indian conglomerate' than a pure oil stock.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Upstream (ONGC, Oil India, RIL E&P): wins when crude rises, subject to windfall tax.",
          "Refining (RIL, MRPL): margin = gross refining margin, fluctuates with product demand.",
          "OMCs (IOC, BPCL, HPCL): margins squeezed by retail price management; politically sensitive.",
          "CGD (IGL, Mahanagar Gas, Gujarat Gas): structural growth, less commodity-sensitive.",
          "Reliance is a diversified play; oil & gas is a declining share of its earnings mix.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does ONGC's stock underperform global peers during oil price spikes?",
        options: [
          "Bad management",
          "Indian government imposes windfall taxes on upstream profits during high oil prices, capping shareholder upside",
          "ONGC doesn't produce oil",
          "Currency hedging losses",
        ],
        correctIndex: 1,
        explanation: "Government captures windfall through special taxes during sustained high oil prices, transferring upside from shareholders to the budget.",
      },
      {
        id: "q2",
        prompt: "Which Indian oil sector typically underperforms most when crude oil spikes?",
        options: [
          "Upstream (ONGC, Oil India)",
          "Downstream refining",
          "Oil Marketing Companies (OMCs)",
          "City Gas Distribution",
        ],
        correctIndex: 2,
        explanation: "OMCs (IOC, BPCL, HPCL) face the worst margin compression when crude rises — retail fuel prices are politically managed, leaving OMCs to absorb the cost.",
      },
    ],
  },
];

export const WEEK_07_LESSONS = lessons;
