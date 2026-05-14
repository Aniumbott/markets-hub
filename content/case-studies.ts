import type { CaseStudy } from "./types";

export const CASE_STUDIES: CaseStudy[] = [
  // -----------------------------------------------------------------------
  // 1. HDFC Bank July 17, 2023
  // -----------------------------------------------------------------------
  {
    slug: "hdfc-bank-july-2023",
    title: "HDFC Bank Q1 FY24 — when the most-owned stock cracked 6% in one day",
    date: "July 17, 2023",
    markets: ["Indian equities", "Nifty Bank"],
    oneLiner:
      "India's most-loved private bank dropped 6% in a single session despite reporting record profits. A textbook lesson in 'beat the print, miss the expectation'.",
    timeline: [
      { date: "Sat, 15 Jul 2023", event: "HDFC Bank reports Q1 FY24 results: net profit ₹11,952 cr (up 30% YoY); merger with HDFC Ltd effective." },
      { date: "Mon, 17 Jul 2023 (pre-open)", event: "Analysts flag NIM compression to 4.1% and rising opex; brokerages downgrade or maintain with target cuts." },
      { date: "17 Jul 2023, 9:15 AM", event: "Stock opens at ₹1,694 (down from prior close of ₹1,720), immediately drops to ₹1,650." },
      { date: "17 Jul 2023, 11:30 AM", event: "Stock hits intraday low of ₹1,617 — 6% down. Bank Nifty drags 2.6% lower; Nifty 50 falls 0.65% led by financials." },
      { date: "17 Jul 2023, close", event: "HDFC Bank closes ₹1,624, down 5.6%. Market cap loss: ~₹73,000 cr in a single day." },
      { date: "18 Jul 2023", event: "Mild recovery. Stock trades sideways for several weeks." },
    ],
    body: [
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "Going into the Q1 FY24 print, HDFC Bank was India's most-owned private financial. Sell-side consensus expected the post-merger combined entity to deliver strong loan growth, stable margins, and a path back to 18%+ ROE. The bank had completed its merger with HDFC Ltd on July 1, 2023 — the largest merger in Indian corporate history at the time.",
      },
      {
        kind: "p",
        text: "Then the print landed.",
      },
      {
        kind: "h2",
        text: "What the numbers actually showed",
      },
      {
        kind: "list",
        items: [
          "**Net profit**: ₹11,952 cr (up 30% YoY) — a record absolute number",
          "**Loan growth**: 16% YoY ex-merger — strong",
          "**Deposit growth**: 19% — strong",
          "**Net Interest Margin (NIM)**: 4.1% vs expectation of 4.3-4.5% — a soft miss",
          "**Cost-to-income ratio**: ~40% vs hopes for sub-39% — disappointing",
          "**Asset quality**: GNPA at 1.2%, stable — fine",
        ],
      },
      {
        kind: "p",
        text: "The headline was good. The margin miss and rising costs were not. The market reads margins as the most important signal for a bank's medium-term earnings — a 30 bps NIM miss on a ₹24 lakh crore loan book is a real ₹7,200 cr/year drag on pre-tax earnings vs expectation.",
      },
      {
        kind: "h2",
        text: "Why the stock cracked despite a 30% PAT growth",
      },
      {
        kind: "p",
        text: "Three reasons stacked:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Expectations were elevated.** HDFC Bank had compounded mid-20s for two decades; any sign of slowing in unit economics threatens the multiple. The stock was trading at ~3.5x book — premium to peers because of that growth story.",
          "**The merger created new uncertainty.** HDFC Ltd's housing book brought lower-yielding assets, which mechanically compresses NIM. But how much, for how long, and how fast would the combined entity rebuild margin? The print made the timeline murkier.",
          "**Crowded positioning.** Over 60% of large-cap funds and FII portfolios held HDFC Bank as a top-5 position. When sentiment turns, crowded longs get sold first — there's just more inventory to clear.",
        ],
      },
      {
        kind: "quote",
        text: "On a day like that, the stock is selling itself. Everyone owns it, so the only marginal action is selling. Buyers wait for the dust to settle.",
        attribution: "A Mumbai PMS manager, paraphrased post-close",
      },
      {
        kind: "h2",
        text: "Cross-market impact",
      },
      {
        kind: "p",
        text: "HDFC Bank is roughly 11% of Nifty 50 weight and ~26% of Bank Nifty weight. When it falls 6%:",
      },
      {
        kind: "list",
        items: [
          "Bank Nifty: -2.6% on the day, dragging the index from 45,200 to 44,030",
          "Nifty 50: -0.65%, despite IT and consumer staples being positive",
          "Other private banks (ICICI, Axis) traded down 0.5-1% in sympathy — sectoral risk-off",
          "INR weakened 8 paise vs USD on the foreign outflow flow",
          "India VIX rose from 11.5 to 12.4 — modest but visible nervousness",
        ],
      },
      {
        kind: "h2",
        text: "The follow-through",
      },
      {
        kind: "p",
        text: "HDFC Bank traded sideways at ₹1,600-1,700 for the next 5 months. Multiple subsequent quarterly prints showed gradual NIM rebuild and management commentary settled. The stock eventually broke out higher in 2024 as the merger story digested. But the lesson stuck — the most-owned, most-loved Indian financial isn't immune to a brutal day when the print misses on the margin line.",
      },
      {
        kind: "h2",
        text: "What this case teaches",
      },
      {
        kind: "callout",
        tone: "tip",
        text: "**Stocks don't trade on absolute results; they trade on the gap between results and expectations.** HDFC Bank grew profit 30% — extraordinary by global standards — and the stock fell 6% because the market had priced in 35%+ on a comparable line item. Knowing where expectations sit is half the game.",
      },
    ],
    lessons: [
      "Even India's most defensive, most-owned stock can drop 6% on results day when an important metric misses.",
      "NIM (margin) misses matter more than headline profit growth for bank stocks.",
      "Crowded positioning amplifies sell-offs — when everyone owns it, only sellers add liquidity on bad days.",
      "Don't expect a single quarter's reaction to dictate long-term direction — fundamentals reassert over quarters, not days.",
      "Always check the 'expected vs actual' gap, not just the absolute numbers.",
    ],
    related: ["covid-march-2020", "yen-carry-august-2024"],
  },

  // -----------------------------------------------------------------------
  // 2. COVID March 2020 — the everything-crash
  // -----------------------------------------------------------------------
  {
    slug: "covid-march-2020",
    title: "COVID March 2020 — the everything-crash",
    date: "February–March 2020",
    markets: ["Indian equities", "Global equities", "Crude oil", "Gold", "USD/INR", "Bonds"],
    oneLiner:
      "In four weeks, Nifty fell 38%, oil briefly went negative, gold sold off (yes, even gold), and every correlation in the textbook flipped.",
    timeline: [
      { date: "20 Feb 2020", event: "Nifty hits an all-time high near 12,430. WHO declares COVID-19 a public health emergency." },
      { date: "28 Feb 2020", event: "First major weekly decline. Nifty -5%. Global equities sell off as Italy reports community spread." },
      { date: "9 Mar 2020 ('Black Monday')", event: "Saudi-Russia oil price war begins. Brent drops 30% in a session. Nifty -4.4%, US markets hit circuit breakers." },
      { date: "12 Mar 2020", event: "WHO declares pandemic. Nifty -8.3% in a single day, the worst since 2008." },
      { date: "16 Mar 2020", event: "US Fed cuts rates to zero in emergency move. Markets sell off further (fear of why they cut so much)." },
      { date: "23 Mar 2020", event: "Nifty bottoms at 7,610 — 38% below the Feb peak. India announces 21-day national lockdown that evening." },
      { date: "24-31 Mar 2020", event: "Fed announces unlimited QE. Markets begin one of the fastest recoveries in history." },
      { date: "20 Apr 2020", event: "WTI crude futures (May contract) briefly trade negative — settle at -$37/barrel. Storage capacity question gone viral." },
      { date: "Year-end 2020", event: "Nifty closes at 13,981 — fully recovered and at a new all-time high." },
    ],
    body: [
      {
        kind: "h2",
        text: "What made this crash different",
      },
      {
        kind: "p",
        text: "Crashes usually have a story you can follow — a leveraged player blew up, a sector overheated, a credit cycle turned. The COVID crash had a different problem: nobody knew anything. Was this 1918? Was this SARS? Would lockdowns last 3 weeks or 3 years? Could the world economy actually go into voluntary deep freeze?",
      },
      {
        kind: "p",
        text: "When information is unknowable, you don't get rational repricing. You get forced selling. Every leveraged fund had to reduce gross exposure. Every parametric strategy hit risk limits at once. Every mutual fund saw redemptions. The selling was technical, not fundamental.",
      },
      {
        kind: "h2",
        text: "The everything-down problem",
      },
      {
        kind: "p",
        text: "In a normal sell-off, gold goes up. Bonds go up. USD goes up (flight to safety). Stocks go down. The textbook holds. For two weeks in March 2020, it didn't.",
      },
      {
        kind: "table",
        headers: ["Asset", "Feb 20 to Mar 23", "Note"],
        rows: [
          ["Nifty 50", "-38%", "Worst Indian drawdown since 2008"],
          ["S&P 500", "-34%", "Faster than 2008"],
          ["Brent crude", "-58%", "Saudi-Russia price war + demand collapse"],
          ["Gold (USD)", "-12% (initially)", "Sold to meet margin calls in other positions"],
          ["US Investment-grade bonds", "-7%", "Bond market 'illiquidity event'"],
          ["DXY (Dollar Index)", "+8%", "Flight to dollar cash"],
          ["INR vs USD", "Weakened from 71 to 76.5", "FII outflows + global dollar grab"],
        ],
        caption: "Cross-asset performance during the worst phase of the crash",
      },
      {
        kind: "p",
        text: "Even gold sold off in the first wave. Why? Because investors got margin calls on other positions and gold was the most liquid thing they could sell. Diversification helps; but in true panics, correlations all snap to 1. The only thing that worked was cash, specifically US dollars.",
      },
      {
        kind: "h2",
        text: "Negative oil — the moment that broke physics",
      },
      {
        kind: "p",
        text: "On April 20, 2020, the May WTI futures contract traded down to negative $37/barrel. Sellers were paying $37 to take oil off their hands. This wasn't an algorithmic glitch — it was a real storage problem. With global demand collapsed and Cushing storage near capacity, holders of physical-deliverable futures had no place to put the oil if they took delivery. Closing the position at any cost was rational.",
      },
      {
        kind: "p",
        text: "Brent (financial settlement) stayed positive but bottomed near $19/barrel. India, importing ~85% of its oil, briefly experienced one of the cheapest oil windows in decades — paid for in lost demand from the lockdown.",
      },
      {
        kind: "h2",
        text: "The pivot — March 23, 2020",
      },
      {
        kind: "p",
        text: "The Fed announced unlimited QE on March 23. Translation: 'we will buy as many bonds as it takes to stabilize markets.' Within hours, the bond market stabilized. Within days, equities began to recover. The Fed's commitment to provide liquidity broke the technical death spiral.",
      },
      {
        kind: "p",
        text: "The RBI moved aggressively in parallel: emergency repo cuts (75 bps in March alone), CRR cut by 100 bps, TLTRO program, moratorium on EMIs. Indian liquidity got flooded too. Combined with massive fiscal stimulus globally, the foundation for the V-shaped recovery was set.",
      },
      {
        kind: "h2",
        text: "The recovery (and the FOMO)",
      },
      {
        kind: "p",
        text: "By November 2020, Nifty had reclaimed pre-crash levels. By year-end, it was at a new all-time high. Through 2021, it ran to 18,000+. Anyone who panic-sold in March missed one of the strongest 18-month equity windows in Indian history. Anyone who bought through March 2020 — even mechanically via SIP — looks like a genius today.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The behavioural lesson",
        text: "The crash was 4 weeks. The recovery took 9 months for indices, but the strong buys were available in a 6-week window. Most retail investors stop SIPs during crashes — locking in the wrong behaviour. The right answer for a long horizon: don't stop SIPs, don't panic-sell, ideally add lump-sum if you can stomach it. Easier said than done.",
      },
      {
        kind: "h2",
        text: "What changed structurally",
      },
      {
        kind: "list",
        items: [
          "**Indian retail discovered equity** — broking account openings 4x'd. Zerodha doubled active client count.",
          "**Central bank balance sheets exploded** — the Fed went from $4T to $8T; the RBI also expanded sharply.",
          "**Inflation seeds were planted** — massive monetary and fiscal stimulus combined with supply chain disruption set up the 2022 inflation problem.",
          "**Tech stocks ran first** — Nasdaq doubled by mid-2021 as work-from-home + zero rates re-rated growth assets.",
          "**Cyclicals took longer to recover** — financials, autos, hospitality took most of 2021 to fully participate.",
        ],
      },
    ],
    lessons: [
      "In true crises, correlations snap to 1 — diversification breaks down temporarily.",
      "Cash is the only true safe haven in the first wave of panic; even gold can sell off.",
      "Central bank pivot points (Fed unlimited QE) mark the technical bottom more reliably than any fundamental indicator.",
      "Most retail behaviours during crashes (panic-selling, stopping SIPs) are exactly wrong for long horizons.",
      "Recoveries from technical/panic crashes can be sharper than recoveries from credit/structural crashes.",
    ],
    related: ["hdfc-bank-july-2023", "yen-carry-august-2024"],
  },

  // -----------------------------------------------------------------------
  // 3. Yen carry unwind — August 2024
  // -----------------------------------------------------------------------
  {
    slug: "yen-carry-august-2024",
    title: "Yen carry unwind — August 2024",
    date: "August 1-5, 2024",
    markets: ["Japanese yen", "Nikkei", "Global equities", "Indian equities", "Bitcoin"],
    oneLiner:
      "A 25 bps rate hike by the Bank of Japan combined with a weak US jobs print triggered the largest one-day fall in Nikkei history. The shock rippled into Nifty.",
    timeline: [
      { date: "31 Jul 2024", event: "BoJ unexpectedly hikes its policy rate by 15 bps to 0.25%; signals more to come. Yen begins to surge from 153 to 150 vs USD." },
      { date: "1 Aug 2024", event: "ISM Manufacturing PMI in US comes in weak (46.8). Recession fears rise. US 10Y yield falls 13 bps." },
      { date: "2 Aug 2024 (Fri)", event: "US Non-Farm Payrolls print weak (114k vs 175k expected). Sahm rule (recession indicator) triggers. S&P 500 -1.8%, Nasdaq -2.4%, USDJPY collapses from 149 to 146.5." },
      { date: "Sat-Sun 3-4 Aug 2024", event: "Weekend. Hedge funds receive margin calls. Carry trades being unwound urgently." },
      { date: "5 Aug 2024 ('Black Monday')", event: "Nikkei 225 falls 12.4% — its largest single-day drop in history, exceeding 1987's Black Monday in absolute points. Topix -12%. Asia in chaos. Nifty opens -3% but recovers to close -2.7%. USDJPY hits 141.7. Bitcoin falls 17% intraday. VIX touches 65, India VIX spikes to 20." },
      { date: "6 Aug 2024", event: "Markets stabilize on dovish BoJ jawboning ('we won't hike while markets unstable'). Sharp partial recovery." },
      { date: "Mid-late August 2024", event: "Markets largely recover. The episode is officially designated a carry trade unwind." },
    ],
    body: [
      {
        kind: "h2",
        text: "The carry trade — the setup",
      },
      {
        kind: "p",
        text: "For two decades, Japan's policy rate was zero or negative. Hedge funds, asset managers, and retail Japanese investors borrowed yen at near-zero cost and invested in higher-yielding assets globally — US tech stocks, Indian equities, Mexican bonds, Brazilian carry, even Bitcoin. Borrow at 0%, earn 5-7%+, pocket the spread. This is the {{carry-trade|carry trade}}.",
      },
      {
        kind: "p",
        text: "The size was estimated in the trillions of dollars. Nobody knew the exact number — by definition, carry trades happen across hundreds of funds and individuals.",
      },
      {
        kind: "h2",
        text: "What changed",
      },
      {
        kind: "p",
        text: "Two things happened simultaneously:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Funding cost rising**. The BoJ hiked from -0.1% to 0% in March 2024, then to 0.25% on July 31. Small moves in absolute terms, but the message was clear: the era of free yen funding was ending.",
          "**Return on carried assets falling**. The weak US ISM and NFP prints on Aug 1-2 made US equities and the dollar suddenly less attractive. The other side of the carry was wobbling.",
        ],
      },
      {
        kind: "p",
        text: "When both legs of a trade simultaneously turn against you, the only rational response is to unwind — which means selling your overseas assets (US tech, EM equities, crypto) and buying yen to repay the loan. Everyone doing this at once is exactly what happened the weekend of August 3-4.",
      },
      {
        kind: "h2",
        text: "Why Nikkei fell 12%",
      },
      {
        kind: "p",
        text: "Japanese exporters (Toyota, Honda, electronics makers) make most of their money in dollars. When the yen surges 6% in a week, their dollar earnings translate into fewer yen — earnings get downgraded. Plus, foreign investors holding Nikkei via futures had used yen as funding — they were the carry trade. Forced selling fed itself. The 12% one-day drop wasn't a Japanese fundamental event; it was a global deleveraging event playing out in Tokyo.",
      },
      {
        kind: "h2",
        text: "How it hit Nifty",
      },
      {
        kind: "p",
        text: "India had multiple exposures:",
      },
      {
        kind: "list",
        items: [
          "**FIIs that funded India exposure with yen** had to sell Indian stocks to buy back yen.",
          "**Global risk-off** pushed DXY up briefly, but actually fell sharply as the yen surged — counterintuitive.",
          "**Nifty IT** got hit hard because of US recession fears (Indian IT export to US clients).",
          "**Indian midcaps** sold off on global risk-off.",
        ],
      },
      {
        kind: "p",
        text: "Nifty opened 3% gap-down on August 5, fell another 1% intraday, but rallied back to close down only 2.7%. India VIX touched 20 (had been near 12). The next two sessions saw recovery; by mid-August, Nifty had reclaimed levels.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why Nifty held up better than Nikkei",
        text: "India has structural domestic flow (₹25,000 cr/month in SIPs) that absorbs FII selling. The carry unwind was a global deleveraging shock — local buyers in India provided support that Japan, where most domestic money is in government bonds, did not have. This is the new India story: less FII-dependent than 10 years ago.",
      },
      {
        kind: "h2",
        text: "What it teaches",
      },
      {
        kind: "p",
        text: "Carry trades build up slowly, in calm markets, with leverage. When the regime shifts, they unwind violently. The mechanics are predictable: the funding currency rallies, risk assets sell off, correlations rise, VIX spikes. The trigger is often something unrelated to the carry itself — a weak data print, an unrelated geopolitical event.",
      },
      {
        kind: "p",
        text: "August 2024 was not a recession event. There was no banking crisis, no economic collapse. It was a positioning unwind. The fundamental story (Japanese normalization + US slowdown) was real, but the move was disproportionate because of leverage. Most positioning unwinds resolve within weeks; structural recessions take longer.",
      },
    ],
    lessons: [
      "Cheap funding currencies build up massive cross-border positioning that can unwind violently.",
      "Watch the yen as a stress indicator — a sudden 3%+ move in USDJPY usually signals carry unwind risk.",
      "Indian markets have become more resilient to global shocks because of domestic SIP flows.",
      "Positioning-driven shocks tend to resolve faster than fundamental shocks (V-shaped, not U-shaped).",
      "When everything sells off in a hurry, look at what's rallying — that's where the unwinding is hiding (yen, USD, bonds usually).",
    ],
    related: ["covid-march-2020", "hdfc-bank-july-2023"],
  },

  // -----------------------------------------------------------------------
  // 4. Adani-Hindenburg — January 2023
  // -----------------------------------------------------------------------
  {
    slug: "adani-hindenburg-january-2023",
    title: "Adani-Hindenburg — $150B+ market cap erased in 4 weeks",
    date: "January 24, 2023",
    markets: ["Indian equities", "PSU Banks"],
    oneLiner:
      "US short seller publishes 100-page critical report on Indian conglomerate. Adani Group market cap falls from $235B to $80B over 4 weeks.",
    timeline: [
      { date: "24 Jan 2023", event: "Hindenburg Research publishes report alleging stock manipulation, accounting fraud, undisclosed related-party transactions at Adani Group." },
      { date: "25 Jan 2023", event: "Adani Enterprises FPO opens; book gets subscribed only by Day 3 with anchor demand support, but retail subscription weak." },
      { date: "27 Jan 2023", event: "All Adani group stocks down 15-30% in 3 days. Adani Total Gas hits lower circuit." },
      { date: "1 Feb 2023", event: "Adani Group withdraws ₹20,000 cr FPO citing 'volatile market conditions'." },
      { date: "Feb 2023 (multiple)", event: "Sustained selling. Adani Total Gas down 70%+, Adani Green Energy down 60%+. LIC's holdings face political scrutiny." },
      { date: "2 Mar 2023", event: "GQG Partners (US-based fund) invests $1.9B across Adani Group companies; first major institutional vote of confidence." },
      { date: "Mid-2023", event: "Adani Group reduces debt through asset sales; selectively recovers. SEBI investigation ongoing." },
      { date: "Late 2024", event: "Most Adani stocks recovered 40-60% from January 2023 lows; none fully reached pre-Hindenburg peaks." },
    ],
    body: [
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "Adani Group was one of India's largest conglomerates — ports (Adani Ports), power (Adani Power), green energy (Adani Green), gas (Adani Total Gas), media (NDTV). Founded 1988, dramatically expanded post-2014. Multiple group stocks had rallied 1,000-2,000% during 2020-22, making founder Gautam Adani briefly Asia's richest person.",
      },
      {
        kind: "p",
        text: "Concerns had been raised by some Indian and foreign analysts about: high debt levels (~$30B group debt), pledged promoter shares, very high P/E multiples (often 100x+ for non-banking subsidiaries), complex shareholding patterns with Mauritius/Cayman entities.",
      },
      {
        kind: "h2",
        text: "The Hindenburg report",
      },
      {
        kind: "p",
        text: "On January 24, 2023, Hindenburg Research (US short seller) published a 100+ page report alleging:",
      },
      {
        kind: "list",
        items: [
          "Stock price manipulation through related-party shell entities in Mauritius and other offshore jurisdictions",
          "Accounting irregularities at multiple group companies",
          "Money laundering via overseas entities",
          "Promoter share pledging creating forced-sale vulnerabilities",
          "Disclosed: Hindenburg was short Adani securities and would profit if prices fell",
        ],
      },
      {
        kind: "p",
        text: "Adani Group strongly denied all allegations, releasing a 413-page rebuttal characterizing the report as 'an attack on India' and threatening legal action.",
      },
      {
        kind: "h2",
        text: "The market carnage",
      },
      {
        kind: "p",
        text: "Despite the rebuttal, markets sold off aggressively. Adani Total Gas (smallest float, highest P/E) fell the most. Within 4 weeks:",
      },
      {
        kind: "table",
        headers: ["Stock", "Pre-Hindenburg market cap ($B)", "Trough market cap ($B)", "% fall"],
        rows: [
          ["Adani Total Gas", "$36B", "$11B", "-69%"],
          ["Adani Green Energy", "$30B", "$13B", "-57%"],
          ["Adani Enterprises", "$70B", "$30B", "-57%"],
          ["Adani Power", "$30B", "$13B", "-57%"],
          ["Adani Ports", "$24B", "$13B", "-46%"],
        ],
      },
      {
        kind: "p",
        text: "Total Adani Group market cap fell from $235B to ~$80B at the trough — over $150 billion erased.",
      },
      {
        kind: "h2",
        text: "Broader market impact",
      },
      {
        kind: "list",
        items: [
          "Nifty fell ~3% in the report week",
          "LIC (large passive Adani holder) faced political scrutiny and reputational pressure — its stock fell 8%",
          "PSU banks with Adani loan exposure (SBI, PNB, BoB) dropped 8-12%",
          "FII outflows accelerated through Feb-March 2023 (₹40k+ cr cumulative)",
          "USD/INR weakened from 81.3 to 82.8 on related capital outflow concerns",
        ],
      },
      {
        kind: "h2",
        text: "The recovery",
      },
      {
        kind: "p",
        text: "Several factors helped stabilize:",
      },
      {
        kind: "list",
        items: [
          "GQG Partners' $1.9B investment in March 2023 signaled foreign institutional confidence",
          "Adani Group accelerated debt reduction — paid down over $3B of debt in 2023",
          "Asset sales (cement, infrastructure stakes) raised additional cash",
          "SEBI investigation found no immediate prosecutable evidence (still ongoing as of late 2024)",
          "Indian Supreme Court refused to fast-track multiple PILs against the group",
        ],
      },
      {
        kind: "p",
        text: "Stock prices stabilized through 2023; selective recovery in 2024 as the news cycle moved on. By late 2024, most Adani stocks had recovered 40-60% from January lows. None had reached pre-Hindenburg peaks.",
      },
      {
        kind: "h2",
        text: "What this teaches",
      },
      {
        kind: "p",
        text: "Several enduring lessons:",
      },
      {
        kind: "list",
        items: [
          "**Past performance is not a guarantee** — Adani Total Gas was one of India's hottest stocks of 2020-22, then lost 70% in weeks. The stocks that ran the most often correct the hardest.",
          "**Promoter pledging is a real risk** — heavy pledging creates forced-selling vulnerabilities in stress periods. Avoid stocks with promoter pledging >20%.",
          "**Short sellers exist for a reason** — they're incentivized to find problems. Their reports deserve serious analytical consideration, not knee-jerk dismissal.",
          "**Governance discount is real** — complex shareholding, offshore entities, aggressive debt should warrant lower valuation multiples. Investors paying high P/Es on weak governance get punished eventually.",
          "**Single-group concentration is dangerous** — owning multiple Adani stocks was concentration risk, not diversification. Diversify within sectors.",
        ],
      },
    ],
    lessons: [
      "Stocks that have run 5-10x in 2 years can lose 50-70% in weeks when sentiment turns.",
      "Promoter pledging combined with offshore shareholding structures creates forced-selling risk.",
      "Short-seller reports deserve serious analytical consideration, not dismissal.",
      "Pay a 'governance discount' for complex shareholding and aggressive debt.",
      "Avoid single-group concentration — having multiple Adani stocks was concentration, not diversification.",
    ],
    related: ["hdfc-bank-july-2023", "paytm-ipo-disaster", "demonetisation-2016"],
  },

  // -----------------------------------------------------------------------
  // 5. SVB collapse — March 2023
  // -----------------------------------------------------------------------
  {
    slug: "svb-collapse-march-2023",
    title: "Silicon Valley Bank — when 'safe' Treasuries broke a bank",
    date: "March 8-12, 2023",
    markets: ["US Banks", "Stablecoins", "Global financial system"],
    oneLiner:
      "The second-largest US bank failure ever. Duration mismatch + tech depositor run + Fed hikes = collapse in 48 hours.",
    timeline: [
      { date: "8 Mar 2023", event: "SVB announces emergency $2.25B capital raise plus discloses $1.8B unrealized loss on bond portfolio. Stock falls 60% after market close." },
      { date: "9 Mar 2023", event: "Depositors withdraw $42B in a single day (~25% of total deposits). Bank cannot meet withdrawals." },
      { date: "10 Mar 2023 (Fri)", event: "FDIC seizes SVB before market open. Stock halted permanently. Signature Bank also under stress." },
      { date: "11 Mar 2023 (Sat)", event: "Signature Bank seized. Circle (USDC issuer) reveals $3.3B of reserves at SVB. USDC depegs to $0.87 over weekend." },
      { date: "12 Mar 2023 (Sun)", event: "US Treasury, Fed, FDIC jointly announce unlimited deposit guarantees for SVB customers + new Bank Term Funding Program (BTFP)." },
      { date: "13 Mar 2023 (Mon)", event: "USDC re-pegs to $1. Regional bank stocks fall 20-50%. First Republic Bank under heavy stress." },
      { date: "Mid-March 2023", event: "Credit Suisse failure (separate cause) compounds global banking stress; UBS forced rescue." },
      { date: "May 2023", event: "First Republic Bank fails; JPMorgan acquires it. Banking stress subsides." },
    ],
    body: [
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "Silicon Valley Bank was the bank for the US tech and venture capital ecosystem. During the COVID era of free money, tech raised massive funding rounds. Deposits at SVB surged from ~$60B to ~$180B by end-2021. SVB invested these deposits in long-duration US Treasuries and Mortgage-Backed Securities at 1-2% yields — when bond prices were near peaks.",
      },
      {
        kind: "p",
        text: "Then the Fed started hiking in March 2022. Through 2022 and into 2023, SVB's bond portfolio lost market value (bond prices fall when rates rise). The losses were held as 'available-for-sale' — not hitting reported earnings unless realized through sale.",
      },
      {
        kind: "p",
        text: "Meanwhile, tech funding dried up. Startup customers burned through deposits faster than expected. Withdrawals exceeded new inflows. SVB needed to sell bonds — at losses — to meet withdrawals.",
      },
      {
        kind: "h2",
        text: "The run",
      },
      {
        kind: "p",
        text: "On Wednesday, March 8, 2023, SVB tried to fix the situation with an emergency $2.25B capital raise and a $21B bond portfolio sale. They disclosed the $1.8B realized loss. Markets reacted violently — SVB stock fell 60% after-hours.",
      },
      {
        kind: "p",
        text: "Within hours, panic spread via VC Twitter and group chats. 'Pull your money out of SVB!' became a meme. By Thursday morning, depositors had requested $42B in withdrawals. SVB couldn't meet them — its reserves were tied up in long-duration bonds losing value.",
      },
      {
        kind: "p",
        text: "FDIC seized the bank Friday morning. The second-largest bank failure in US history was a 48-hour event.",
      },
      {
        kind: "h2",
        text: "The contagion",
      },
      {
        kind: "p",
        text: "Within hours of SVB's seizure, attention turned to similar mid-sized banks:",
      },
      {
        kind: "list",
        items: [
          "Signature Bank — crypto-heavy depositor base, failed Saturday",
          "First Republic Bank — high-net-worth depositor base, also under stress",
          "Multiple other regionals had similar duration-mismatched portfolios",
        ],
      },
      {
        kind: "p",
        text: "The crypto angle was unique: USDC stablecoin issuer Circle held ~$3.3B of reserves at SVB. When SVB failed, $3.3B was potentially lost. USDC briefly traded down to $0.87 — a major stablecoin depeg.",
      },
      {
        kind: "h2",
        text: "The intervention",
      },
      {
        kind: "p",
        text: "Sunday March 12, US Treasury + Fed + FDIC announced jointly:",
      },
      {
        kind: "list",
        items: [
          "**Unlimited deposit guarantees** for SVB and Signature customers — even above $250k FDIC limit (effectively socializing the loss)",
          "**Bank Term Funding Program (BTFP)** — Fed would lend to banks against US Treasuries at face value (not market value), removing the duration loss problem",
          "**Implicit guarantee** for similarly-stressed regional banks",
        ],
      },
      {
        kind: "p",
        text: "These were major policy shifts. The 'too big to fail' implicit guarantee was effectively extended to smaller banks. Critics argued this socialized losses and incentivized risk-taking.",
      },
      {
        kind: "h2",
        text: "Market reactions",
      },
      {
        kind: "list",
        items: [
          "**Regional bank stocks**: fell 20-50%; many still trading below pre-crisis levels in late 2024",
          "**Major banks (JPMorgan, BofA)**: benefited from deposit migration to perceived safety",
          "**US 10Y yield**: fell 60+ bps in a week as flight-to-safety bid Treasuries",
          "**Bitcoin**: rallied (saw it as bank-failure validation)",
          "**Indian banks**: completely insulated; minimal direct impact",
          "**Gold**: rallied above $2,000",
        ],
      },
      {
        kind: "h2",
        text: "Why Indian banks weren't affected",
      },
      {
        kind: "p",
        text: "Indian banking is structurally different in important ways:",
      },
      {
        kind: "list",
        items: [
          "Indian banks classify G-Secs as held-to-maturity — no mark-to-market loss on rate hikes",
          "Indian deposits are dominated by retail (~30%+ retail by value) — much stickier than tech VC deposits",
          "RBI requires higher capital ratios than US",
          "Indian bond yields rose less aggressively than US",
          "Indian banking has its own historical issues (Yes Bank 2020) but US-style duration mismatch is less of a risk",
        ],
      },
      {
        kind: "h2",
        text: "What this taught",
      },
      {
        kind: "list",
        items: [
          "**'Risk-free' US Treasuries can bankrupt a bank** via duration losses; rates moves of 4-5% destroy long-bond portfolios",
          "**Modern bank runs happen in hours** (Twitter speed), not days",
          "**Government will intervene** to prevent systemic contagion (modern Western policy)",
          "**Deposit insurance ceilings matter less than implicit guarantees** for systemic stability",
          "**Duration risk is eternal** in banking — borrowing short, lending/investing long is the original banking risk",
        ],
      },
    ],
    lessons: [
      "Even US Treasuries can produce duration losses that bankrupt institutions in rising rate environments.",
      "Modern bank runs happen in hours, accelerated by social media and digital banking.",
      "Government bailouts of mid-sized banks have effectively made 'too big to fail' apply much more broadly.",
      "Indian banking system is structurally insulated from US-style duration-mismatch failures.",
      "USDC stablecoin's vulnerability to bank reserves showed crypto's reliance on traditional banking.",
    ],
    related: ["covid-march-2020", "yen-carry-august-2024"],
  },

  // -----------------------------------------------------------------------
  // 6. 2022 inflation shock and Fed pivot
  // -----------------------------------------------------------------------
  {
    slug: "fed-hike-cycle-2022",
    title: "The 2022 inflation shock — fastest Fed hike cycle in 40 years",
    date: "2021-2024",
    markets: ["Global equities", "US Treasuries", "Currency", "Crypto"],
    oneLiner:
      "After 'transitory inflation' became 9% reality, Fed hiked 525 bps in 16 months. Worst year for 60/40 portfolios since the Depression.",
    timeline: [
      { date: "Apr 2021", event: "US CPI starts rising; Powell calls it 'transitory'." },
      { date: "Dec 2021", event: "CPI hits 7%; Powell admits 'transitory' was wrong; signals 2022 hikes." },
      { date: "Mar 2022", event: "Fed hikes 25 bps — first since 2018. Russia invades Ukraine; commodity prices spike." },
      { date: "May 2022", event: "Fed hikes 50 bps. CPI hits 8.6%." },
      { date: "Jun 2022", event: "Fed hikes 75 bps — first 75-bp since 1994. CPI peaks at 9.1%." },
      { date: "Jul-Nov 2022", event: "Three more 75-bp hikes in sequence." },
      { date: "Dec 2022", event: "Fed funds at 4.25-4.50%, up from 0% in March. S&P -19% for the year. Long bonds -30%." },
      { date: "Feb-Jul 2023", event: "Fed continues smaller hikes; SVB crisis in March slows pace briefly." },
      { date: "Jul 2023 - Aug 2024", event: "Fed funds peak at 5.25-5.50%. Held for 14 months." },
      { date: "Sep 2024", event: "Fed begins cutting cycle with surprise 50 bp cut." },
    ],
    body: [
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "After a decade of low inflation, 2021-22 brought the largest inflation surge since the early 1980s. The causes were multiple: massive COVID-era fiscal and monetary stimulus, supply chain disruptions, China lockdowns, Russia-Ukraine war (Feb 2022) spiking energy and food, tight US labor markets with wage growth.",
      },
      {
        kind: "p",
        text: "Through 2021, Fed Chair Powell repeatedly called inflation 'transitory' — implying it would fade as supply chains normalized. By December 2021, this position became untenable.",
      },
      {
        kind: "h2",
        text: "The hiking cycle",
      },
      {
        kind: "table",
        headers: ["Period", "Fed funds rate", "Pace"],
        rows: [
          ["March 2022", "0.25-0.50%", "+25 bps"],
          ["May 2022", "0.75-1.00%", "+50 bps"],
          ["June 2022", "1.50-1.75%", "+75 bps (first since 1994)"],
          ["July-November 2022", "...", "Three more +75 bp hikes"],
          ["December 2022", "4.25-4.50%", "+50 bps"],
          ["February-July 2023", "5.25-5.50%", "Sequence of +25 bp hikes"],
          ["August 2023 - August 2024", "5.25-5.50%", "Hold at peak"],
          ["September 2024", "4.75-5.00%", "-50 bps (surprise cut)"],
        ],
      },
      {
        kind: "p",
        text: "Total: 525 bps of hikes in 16 months. The most aggressive cycle in 40 years (since the Volcker shock).",
      },
      {
        kind: "h2",
        text: "Market carnage 2022",
      },
      {
        kind: "list",
        items: [
          "**S&P 500**: -19% (4,800 to 3,580)",
          "**Nasdaq**: -33% (15,800 to 10,500)",
          "**Long-duration US Treasuries (TLT)**: -30%+ — worst bond year in 40 years",
          "**Gold**: -3% in USD, +15% in INR (rupee weakness)",
          "**Crude**: peaked $130 (March 2022), settled $80 by year-end",
          "**Bitcoin**: -65% (peak $69k to $16k)",
          "**Nifty**: +4% — remarkably resilient (DII flow offset)",
          "**INR**: weakened 74 to 83",
        ],
      },
      {
        kind: "h2",
        text: "Why the 60/40 broke",
      },
      {
        kind: "p",
        text: "The classic 60/40 portfolio (60% equity, 40% bonds) had its worst year since the Great Depression. Both stocks and bonds fell together because rising rates was the dominant variable hitting both: bonds via duration losses, equities via discount rate compression.",
      },
      {
        kind: "p",
        text: "This broke the assumption underlying 60/40 — that bonds zig when stocks zag. In inflationary regimes, both can fall together. Diversification works in deflationary environments; less in inflationary ones.",
      },
      {
        kind: "h2",
        text: "Indian-specific story",
      },
      {
        kind: "p",
        text: "India navigated 2022 remarkably well:",
      },
      {
        kind: "list",
        items: [
          "RBI hiked from 4.0% to 6.5% (250 bps) — moderate vs Fed's 525 bps",
          "FII outflows of $15-20B in 2022, offset by DII flows",
          "INR weakened 12% but well-managed by RBI",
          "Indian inflation peaked at 7.8% but moderated to 5% by year-end",
          "Indian energy companies (Reliance, ONGC) benefited from high oil",
          "Indian discounted Russian crude imports saved $10-15B in import bills",
        ],
      },
      {
        kind: "h2",
        text: "The pivot",
      },
      {
        kind: "p",
        text: "By mid-2023, US inflation was clearly moderating. Markets started pricing Fed cuts. The pivot expectations drove a 2023-24 risk-on rally. Mag 7 led the US recovery (AI capex thesis emerged). Indian markets joined the global rally in late 2023.",
      },
      {
        kind: "p",
        text: "Fed started cutting in September 2024 — surprise 50 bp cut, then 25 bp cuts in subsequent meetings. The cutting cycle is ongoing.",
      },
      {
        kind: "h2",
        text: "Lessons",
      },
      {
        kind: "list",
        items: [
          "**Don't dismiss inflation once embedded** — 'transitory' became a cautionary policy term",
          "**Long-duration bonds aren't safe in rising rates** — 30%+ losses are possible",
          "**Quality compounders weathered the storm** — speculation got crushed",
          "**Indian DII flows are a real structural advantage** — kept Nifty resilient",
          "**Maintaining SIPs through 2022 was the right call** — 2023-24 recovery proved this",
        ],
      },
    ],
    lessons: [
      "Inflation, once embedded, takes years and aggressive rate moves to dislodge.",
      "Long-duration bonds are sensitive to rate hikes — 'safe' US Treasuries can lose 30%+ in a year.",
      "Bond-stock negative correlation breaks in inflationary environments.",
      "Indian DII flow base provides genuine structural resilience.",
      "Maintaining SIP discipline through painful bear markets has historically paid off.",
    ],
    related: ["covid-march-2020", "svb-collapse-march-2023", "yen-carry-august-2024"],
  },

  // -----------------------------------------------------------------------
  // 7. Paytm IPO disaster — November 2021
  // -----------------------------------------------------------------------
  {
    slug: "paytm-ipo-disaster",
    title: "Paytm IPO — India's biggest IPO disaster",
    date: "November 18, 2021",
    markets: ["Indian equities", "Indian IPOs"],
    oneLiner:
      "₹18,300 cr Indian IPO opens at ₹1,955 vs issue price ₹2,150. Falls below ₹500 over the next two years. A lesson on IPO valuation and 'profitless growth' stories.",
    timeline: [
      { date: "Pre-IPO (2021)", event: "Paytm pre-IPO valuation rounds priced at $16B. Significant pre-IPO hype around 'India's first digital payments unicorn going public'." },
      { date: "8 Nov 2021", event: "IPO opens at ₹2,080-2,150 price band. Heavy retail subscription (1.89x), QIB subscription strong." },
      { date: "10 Nov 2021", event: "IPO subscribed 1.89x — fully subscribed. Listing scheduled for 18 Nov." },
      { date: "18 Nov 2021", event: "Paytm lists at ₹1,955 (-9% from issue price). Falls another 27% intraday to close at ₹1,564 — down 27% on Day 1." },
      { date: "Dec 2021", event: "Stock drops below ₹1,500, then ₹1,000." },
      { date: "2022", event: "Continues falling. Drops below ₹600 by year-end. Loses over 70% of issue price value." },
      { date: "2023", event: "Stock languishes around ₹400-500. Multiple regulatory issues with payments bank arm." },
      { date: "Late 2024", event: "Stock has slightly recovered but still well below issue price ₹2,150." },
    ],
    body: [
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "Paytm (One97 Communications) was India's most recognized digital payments brand. Founded 2010 by Vijay Shekhar Sharma. Pioneered UPI adoption at the consumer level. Survived demonetisation, gained huge consumer mindshare.",
      },
      {
        kind: "p",
        text: "Pre-IPO funding rounds valued the company at $16B. Major backers included SoftBank Vision Fund, Ant Group (Alibaba), Berkshire Hathaway (small position), and others. The IPO was widely viewed as a coming-of-age moment for Indian tech.",
      },
      {
        kind: "h2",
        text: "The valuation problem",
      },
      {
        kind: "p",
        text: "At ₹2,150 issue price, Paytm was valued at ~$20B — a 25% premium to pre-IPO funding round price. The company had:",
      },
      {
        kind: "list",
        items: [
          "Revenue: ₹2,800 cr (FY21)",
          "Net loss: ₹1,700 cr",
          "No path to profitability disclosed",
          "Heavy competition from PhonePe (Walmart-owned), Google Pay, others",
          "Payments business itself was low-margin and subject to UPI regulatory caps",
        ],
      },
      {
        kind: "p",
        text: "On any sane valuation framework — P/E (no E), price-to-revenue ratio (12-15x revenue), or DCF — Paytm was egregiously overvalued. The IPO was sold on 'India's largest fintech' narrative rather than fundamentals.",
      },
      {
        kind: "h2",
        text: "The collapse",
      },
      {
        kind: "p",
        text: "Day 1 listing was a disaster. Stock opened at ₹1,955, then fell intraday to close at ₹1,564 — 27% below issue price. Heaviest retail loss day in any major Indian IPO of the past decade.",
      },
      {
        kind: "p",
        text: "Through 2022, the stock continued falling as:",
      },
      {
        kind: "list",
        items: [
          "Macro conditions tightened (rising rates compressing growth stock valuations)",
          "Quarterly losses persisted — no clear path to profitability",
          "RBI imposed restrictions on Paytm Payments Bank (the related banking arm)",
          "Competition from PhonePe and Google Pay intensified",
          "Founder Vijay Shekhar Sharma reduced his stake to repay personal loans (a negative signal)",
        ],
      },
      {
        kind: "p",
        text: "By end of 2022, the stock was around ₹500 — 77% below issue price. Retail investors who subscribed at ₹2,150 had lost over ₹15,000 of every ₹20,000 invested.",
      },
      {
        kind: "h2",
        text: "Broader implications",
      },
      {
        kind: "p",
        text: "The Paytm disaster shaped Indian IPO markets for the next 2-3 years:",
      },
      {
        kind: "list",
        items: [
          "SEBI tightened IPO valuation disclosure rules",
          "Indian institutional buyers became more skeptical of 'profitless growth' stories",
          "Several subsequent Indian fintech IPOs (Zomato in same window) also disappointed",
          "Retail became more cautious about subscribing to high-priced IPOs",
          "Path-to-profit messaging became mandatory in IPO prospectus",
        ],
      },
      {
        kind: "h2",
        text: "Lessons for retail",
      },
      {
        kind: "list",
        items: [
          "**Most IPOs underperform** in the first 3-5 years post-listing. Studies show 60-70% of IPOs trade below issue price 3 years out.",
          "**Pre-IPO hype is sales** — bankers, anchor investors, and management all benefit from selling. Their interests aren't aligned with retail buyers.",
          "**Profitable companies > profitless growth stories** — boring businesses (HDFC Bank, Asian Paints) compound; story stocks often don't",
          "**Listing day pop isn't success** — the real test is 3-5 years out. Many high-hype IPOs have crashed below issue price within 18 months.",
          "**Wait 6-12 months post-listing** — let the hype settle, see actual quarterly results, then evaluate at lower price",
        ],
      },
      {
        kind: "callout",
        tone: "money",
        title: "Indian IPO history is sobering",
        text: "Some other recent disappointments: Zomato (-50% within 18 months of listing, has recovered), Cartrade Tech (-60%), Nykaa (-30% within 18 months, partial recovery), LIC (-30% within 12 months). Indian IPOs are sold to retail at peak hype prices. Wait, watch, then evaluate.",
      },
    ],
    lessons: [
      "Profitless growth IPOs at premium valuations rarely work out for retail.",
      "Pre-IPO hype is sales communication; bankers and management benefit from sale.",
      "Listing day pops aren't success — 3-5 year performance is the real test.",
      "Wait 6-12 months post-listing before evaluating an IPO; let hype settle.",
      "60-70% of IPOs trade below issue price 3 years out.",
    ],
    related: ["adani-hindenburg-january-2023"],
  },

  // -----------------------------------------------------------------------
  // 8. Russia-Ukraine commodity spike — February 2022
  // -----------------------------------------------------------------------
  {
    slug: "russia-ukraine-feb-2022",
    title: "Russia-Ukraine war — global commodity shock",
    date: "February 24, 2022",
    markets: ["Crude oil", "Wheat", "European gas", "Gold", "USD/INR"],
    oneLiner:
      "Russia invades Ukraine on Feb 24, 2022. Brent spikes from $94 to $130 in two weeks. Wheat +50%, European gas to record highs. Global inflation acceleration.",
    timeline: [
      { date: "Late Jan 2022", event: "Russia masses 100k+ troops on Ukraine border. Oil markets begin pricing in war risk." },
      { date: "21 Feb 2022", event: "Russia recognizes Donetsk and Luhansk republics. Markets sell off." },
      { date: "24 Feb 2022", event: "Russia invades Ukraine. Brent spikes to $105 immediately." },
      { date: "Mar 7-8, 2022", event: "Brent hits $130 peak. Wheat +50%. European gas to all-time highs." },
      { date: "Mar 16, 2022", event: "Fed begins hiking cycle (first 25 bps); separately, sanctions on Russia expand." },
      { date: "Apr-Jun 2022", event: "Markets adjust; supply chains reroute; Indian Russian crude purchases ramp." },
      { date: "Sep 2022", event: "Nord Stream pipeline sabotaged; European gas crisis worsens." },
      { date: "Year-end 2022", event: "Brent settles ~$80; European gas eases from peaks but stays elevated; war ongoing." },
    ],
    body: [
      {
        kind: "h2",
        text: "Pre-war setup",
      },
      {
        kind: "p",
        text: "Russia was the world's second-largest oil exporter (after Saudi Arabia) and largest natural gas exporter to Europe. Together with Ukraine, the two countries also supplied ~30% of global wheat exports. Any disruption would be major.",
      },
      {
        kind: "p",
        text: "Through January 2022, Russia massed 100k+ troops at the Ukrainian border. Markets oscillated between 'this is a bluff' and 'invasion is real'. Risk premium built up in commodities.",
      },
      {
        kind: "h2",
        text: "The invasion and commodity spike",
      },
      {
        kind: "p",
        text: "On February 24, 2022, Russian forces invaded Ukraine. Markets immediately repriced:",
      },
      {
        kind: "list",
        items: [
          "**Brent crude**: $94 → $130 (over two weeks) on supply disruption fears",
          "**Wheat**: +50% (Russia/Ukraine combined 30% of global exports)",
          "**European natural gas (TTF)**: hit all-time highs, eventually 10x normal levels",
          "**Aluminium**: +30%",
          "**Nickel**: +250% in a wild March squeeze that broke London Metal Exchange briefly",
          "**Gold**: $1,850 → $2,070",
        ],
      },
      {
        kind: "h2",
        text: "Sanctions and market disruption",
      },
      {
        kind: "p",
        text: "Western sanctions on Russia targeted:",
      },
      {
        kind: "list",
        items: [
          "Russian central bank reserves frozen (~$300B)",
          "Major Russian banks removed from SWIFT",
          "Exports of oil and gas eventually banned/capped (varied by country)",
          "Aircraft leasing, components, technology blocked",
        ],
      },
      {
        kind: "p",
        text: "Russia retaliated by demanding gas payments in rubles, threatening to cut supply, and eventually sabotaging Nord Stream pipelines.",
      },
      {
        kind: "h2",
        text: "Equity market impact",
      },
      {
        kind: "list",
        items: [
          "**Global equities**: 5-10% sell-off in initial days",
          "**Nifty**: 17,500 to 15,700 in 6 weeks (-10%)",
          "**Russian assets**: frozen, MOEX market closed for weeks",
          "**Energy stocks globally**: rallied — best year for energy since 2008",
          "**Defense stocks globally**: rallied",
          "**European equities**: hit hardest (gas dependency)",
        ],
      },
      {
        kind: "h2",
        text: "Indian impacts",
      },
      {
        kind: "p",
        text: "India's response was strategically complex:",
      },
      {
        kind: "list",
        items: [
          "**Oil imports diversified**: Russian crude went from ~2% to 35%+ of Indian imports within months (discounted Urals grade)",
          "**Refinery margins**: spiked for Indian refiners (Reliance, IOC, BPCL) selling processed products to Europe",
          "**FII outflows**: ~$25B from India in 2022",
          "**INR weakening**: from 74 to 83 over the year",
          "**Inflation impact**: Indian CPI peaked at 7.8% in 2022 (vs 4-5% target)",
          "**Wheat exports**: Indian wheat exports surged temporarily before being banned by government",
        ],
      },
      {
        kind: "h2",
        text: "Long-term implications",
      },
      {
        kind: "list",
        items: [
          "**Energy security became national security priority** for Europe",
          "**Dollarization debate**: EM central banks (China, India, Saudi) began diversifying away from USD reserves",
          "**Defense spending globally** increased substantially",
          "**Globalization questioned**: critical supply chains reconsidered",
          "**India-Russia ties strengthened** strategically despite Western pressure",
        ],
      },
      {
        kind: "h2",
        text: "Lessons",
      },
      {
        kind: "list",
        items: [
          "Geopolitical shocks happen suddenly; commodity-dependent economies see immediate stress",
          "Gold proved its role as crisis insurance — rallied through the chaos",
          "Energy and defense stocks were tail-risk hedges that paid",
          "India's strategic flexibility (Russian crude imports despite Western sanctions) cushioned the macro impact",
          "Central bank reserve freezes (Russia 2022) changed global thinking about USD dependence",
        ],
      },
    ],
    lessons: [
      "Geopolitical shocks can spike commodities 30-100% in weeks.",
      "Gold and defense stocks are reliable hedges for geopolitical events.",
      "India benefited strategically by maintaining trade with Russia despite Western sanctions.",
      "Western sanctions accelerated dollar diversification by EM central banks.",
      "Energy security has become national security for energy-importing economies.",
    ],
    related: ["covid-march-2020", "fed-hike-cycle-2022"],
  },

  // -----------------------------------------------------------------------
  // 9. Demonetisation — November 2016
  // -----------------------------------------------------------------------
  {
    slug: "demonetisation-2016",
    title: "Demonetisation — overnight currency replacement",
    date: "November 8, 2016",
    markets: ["Indian equities", "Indian banks", "Consumer demand"],
    oneLiner:
      "PM Modi invalidates ₹500 and ₹1,000 notes (86% of currency value) on national TV at 8 PM. Indian economy in cash chaos for 4 months. Long-term consequences reshaped Indian financial habits.",
    timeline: [
      { date: "8 Nov 2016, 8 PM", event: "PM Modi announces invalidation of ₹500 and ₹1,000 notes effective midnight." },
      { date: "9 Nov 2016", event: "Indian markets closed (holiday declared). Long queues at ATMs and banks." },
      { date: "10 Nov 2016", event: "Markets reopen. Nifty drops 2% initially, recovers." },
      { date: "Nov-Dec 2016", event: "Cash crunch nationwide. SME business shut down. Consumer demand collapses temporarily. Real estate transactions freeze." },
      { date: "Q4 2016 (Oct-Dec)", event: "Indian GDP growth slows from 7.6% to 6.6% — direct demonetisation impact." },
      { date: "Q1 2017", event: "Tier 1 cities recover; rural and informal sectors slower." },
      { date: "FY18 (Apr 2017 onward)", event: "Recovery; digital payments boom (UPI launched 2016, accelerated post-demonetisation)." },
      { date: "Long-term", event: "Indian household savings shifted from physical cash and gold to financial assets — SIP boom from 2017-18 onward." },
    ],
    body: [
      {
        kind: "h2",
        text: "What happened",
      },
      {
        kind: "p",
        text: "On the evening of November 8, 2016, Prime Minister Modi appeared on national TV at 8 PM. He announced that all ₹500 and ₹1,000 currency notes — approximately 86% of Indian cash in circulation by value — would cease to be legal tender at midnight that night.",
      },
      {
        kind: "p",
        text: "Citizens had until December 30 to deposit old notes in banks. Withdrawal limits were imposed (initial limit ₹2,000/day; ATMs in chaos). New ₹2,000 notes were introduced; ₹500 notes (new design) were reissued gradually.",
      },
      {
        kind: "p",
        text: "The stated goals: combat black money (untaxed cash hoards), reduce counterfeit currency, curb terror financing, and accelerate digital payments.",
      },
      {
        kind: "h2",
        text: "Immediate market reaction",
      },
      {
        kind: "p",
        text: "When markets reopened November 10:",
      },
      {
        kind: "list",
        items: [
          "Nifty dropped 2% initially, then partially recovered through the day",
          "Banks (HDFC Bank, ICICI Bank, SBI) initially rallied — anticipated deposit surge benefits",
          "Real estate stocks (DLF, Godrej Properties) dropped 5-10% — cash-heavy sector",
          "FMCG stocks dropped 3-5% — cash-dependent retail",
          "Jewelry retailers (Titan, Kalyan) dropped 8-15%",
        ],
      },
      {
        kind: "h2",
        text: "The economic impact",
      },
      {
        kind: "p",
        text: "Through Q4 2016 and Q1 2017:",
      },
      {
        kind: "list",
        items: [
          "**Indian GDP growth slowed from 7.6% to 6.6%** in the demonetisation quarter — direct measurable impact",
          "**SME and informal sector hit hardest** — cash-dependent businesses lost weeks of activity",
          "**Rural India most affected** — banking infrastructure thin, cash dependency high",
          "**Real estate transactions froze** — high-cash sector",
          "**Currency in circulation contracted ~50%** during peak crunch period",
        ],
      },
      {
        kind: "h2",
        text: "Did it achieve goals?",
      },
      {
        kind: "p",
        text: "Mixed assessment:",
      },
      {
        kind: "list",
        items: [
          "**Black money detection**: ~99% of demonetised currency was deposited back — suggesting most cash was not 'black money'; the operation didn't unearth as much undeclared wealth as expected",
          "**Counterfeit reduction**: marginal; counterfeiting adapted to new notes within months",
          "**Digital payments boom**: UPI was already in development (launched April 2016), but demonetisation accelerated adoption dramatically — UPI volumes 10x'd within 18 months",
          "**Tax compliance**: increased — number of income tax filings rose ~20-25%",
          "**Long-term household savings shift**: large structural movement of household savings into financial assets (mutual funds, equity), benefiting the SIP boom",
        ],
      },
      {
        kind: "h2",
        text: "Equity market consequences",
      },
      {
        kind: "p",
        text: "Long-term effects on equities:",
      },
      {
        kind: "list",
        items: [
          "**Banks** benefited — surge in CASA deposits, lower cost of funds for years",
          "**Digital payments** companies (Paytm, PhonePe, Razorpay) saw massive adoption",
          "**SIP inflows surged** from ~₹3,800 cr/month (2016) to ~₹25,000 cr/month (2024) — a structural shift",
          "**Consumer durables and FMCG** recovered within 6-12 months",
          "**Real estate** struggled for 2-3 years, then stabilized as cash-on-sale practices declined",
          "**Jewelry retailers** structurally weaker post-demonetisation as physical gold sales moderated",
        ],
      },
      {
        kind: "h2",
        text: "Strategic policy lessons",
      },
      {
        kind: "list",
        items: [
          "Disruptive policy actions can have unanticipated consequences both negative (short-term economic slowdown) and positive (long-term structural shifts)",
          "Cash-dependent economies have hidden fragilities that policy can expose dramatically",
          "Digital payment infrastructure (UPI) became the most consequential long-term legacy of demonetisation",
          "Public communication of major policy changes affects market response significantly",
          "Indian institutional resilience — markets recovered within weeks despite economic disruption",
        ],
      },
      {
        kind: "h2",
        text: "What investors learned",
      },
      {
        kind: "list",
        items: [
          "Policy risk in India is real — government can take unilateral disruptive action",
          "Cash-heavy sectors (real estate, jewelry, traditional retail) are vulnerable to formalization initiatives",
          "Digital/formalized businesses benefit from these initiatives long-term",
          "Hold quality positions through policy shocks — most quality stocks recovered within 3-6 months",
          "SIP discipline through such events compounds — investors who continued SIPs through Nov 2016 onward had outstanding 5-year returns",
        ],
      },
    ],
    lessons: [
      "Disruptive Indian policy can hit specific sectors (real estate, jewelry) sharply.",
      "Long-term structural shifts (digital payments, financialization of savings) often emerge from policy shocks.",
      "Indian markets generally recover from policy disruptions within months.",
      "Demonetisation was a catalyst for the Indian SIP boom — ₹3,800 cr to ₹25,000 cr/month in 8 years.",
      "Holding quality positions and maintaining SIPs through such events has rewarded patient investors.",
    ],
    related: ["adani-hindenburg-january-2023"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
