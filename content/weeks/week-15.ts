import type { Lesson } from "../types";

const W = 15;

const lessons: Lesson[] = [
  {
    id: "w15-l01",
    weekId: W,
    order: 1,
    title: "COVID March 2020 — the everything-crash",
    summary: "The fastest equity bear market in history. What we learned about correlations, central banks, and recovery.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "COVID 2020 was the fastest equity bear market in history. Nifty fell 38% in 5 weeks. S&P fell 34%. Brent went negative briefly. Gold sold off initially before rallying. The everything-crash that became the everything-rally.",
      },
      {
        kind: "h2",
        text: "Read the full case study",
      },
      {
        kind: "p",
        text: "Visit the case study library for the detailed timeline, asset-by-asset moves, and lessons from this episode.",
      },
      {
        kind: "h2",
        text: "Key macro lessons",
      },
      {
        kind: "list",
        items: [
          "**Correlations break in crises** — everything (including gold) sold off in the first 2 weeks as margin calls dominated. Diversification offered less protection than expected.",
          "**Central banks set the bottom** — Fed unlimited QE on March 23 marked the technical bottom. Within hours, markets stabilised.",
          "**Recoveries can be fast** — by Sept 2020, Nifty was back at pre-COVID levels. By year-end, at new ATHs. The fastest V-shape ever.",
          "**SIP discipline pays** — investors who maintained SIPs through March-May 2020 had outstanding 18-month returns. Those who stopped did much worse.",
        ],
      },
      {
        kind: "h2",
        text: "Sector reactions",
      },
      {
        kind: "list",
        items: [
          "**Pharma and IT** — rallied first (work from home, vaccine plays). IT outperformed broadly through 2020.",
          "**Hospitality, travel, real estate** — worst hit. Recovery took 2 years.",
          "**Banks and financials** — moderate hit. Recovery on accommodative RBI.",
          "**Consumer staples** — resilient. Defensive nature came through.",
          "**Auto and capital goods** — initial sell-off then strong recovery as activity resumed.",
        ],
      },
      {
        kind: "h2",
        text: "Personal investor lessons",
      },
      {
        kind: "list",
        items: [
          "Emergency cash buffer (3-6 months expenses) prevents panic-selling at lows",
          "Quality compounders (HDFC Bank, TCS, Asian Paints) recovered fastest and durably",
          "Speculative names that crashed didn't always recover (some never)",
          "Lump-sum investments at any point during March 2020 returned 100%+ within 18 months",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "What to do if it happens again",
        text: "Don't panic-sell. Maintain SIPs. If you have cash, deploy gradually over 4-8 weeks. Don't try to catch the exact bottom — within 20% of the bottom is good enough for multi-year compounding.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Fastest bear market in history; fastest recovery too.",
          "Correlations broke initially; gold sold off with everything before rallying.",
          "Fed pivot (unlimited QE) marked the technical bottom.",
          "Investors who held and added through the crash had best outcomes.",
          "Quality compounders recovered fastest and most durably.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What technical event marked the bottom of the COVID crash?",
        options: [
          "Vaccine announcement",
          "Fed announcing unlimited QE on March 23, 2020",
          "WHO declaring pandemic",
          "Lockdown ending",
        ],
        correctIndex: 1,
        explanation: "Fed unlimited QE on March 23 was the technical bottom. Liquidity intervention reversed the technical death spiral, even though the pandemic itself continued.",
      },
      {
        id: "q2",
        prompt: "What's the most useful lesson for retail from the COVID crash and recovery?",
        options: [
          "Always panic-sell during crashes",
          "Maintain SIPs and quality positions through crashes — recoveries are often faster than expected",
          "Avoid all equity",
          "Trade more during volatility",
        ],
        correctIndex: 1,
        explanation: "Investors who maintained SIPs through March-May 2020 had outstanding returns. Those who stopped or panic-sold locked in losses. Discipline > Activity.",
      },
    ],
  },
  {
    id: "w15-l02",
    weekId: W,
    order: 2,
    title: "2022 inflation shock and the Fed pivot",
    summary: "The biggest inflation surprise in 40 years. How the Fed responded, what it did to markets, and what we learned.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "After a decade of low inflation, 2021-22 brought the largest inflation surge since the early 1980s. US CPI peaked at 9.1% in June 2022. The Fed responded with 525 bps of hikes — the most aggressive cycle in 40 years. The aftermath redefined global asset prices.",
      },
      {
        kind: "h2",
        text: "The build-up",
      },
      {
        kind: "p",
        text: "Inflation emerged from a combination of factors:",
      },
      {
        kind: "list",
        items: [
          "Massive fiscal stimulus during COVID (Fed balance sheet expanded $5T+; US deficit at 15% of GDP)",
          "Supply chain disruptions (China lockdowns, Suez Canal blockage)",
          "Pent-up demand as economies reopened",
          "Russia-Ukraine war (Feb 2022) spiked oil and food",
          "Tight US labor market with wage growth",
        ],
      },
      {
        kind: "p",
        text: "Fed Chair Powell called inflation 'transitory' through 2021. By March 2022, it became clear it wasn't. The hiking cycle began.",
      },
      {
        kind: "h2",
        text: "The Fed cycle",
      },
      {
        kind: "table",
        headers: ["Date", "Fed funds rate", "Hike size"],
        rows: [
          ["March 2022", "0.25-0.50%", "+25 bps (first hike since 2018)"],
          ["May 2022", "0.75-1.00%", "+50 bps"],
          ["June 2022", "1.50-1.75%", "+75 bps (first 75 bp since 1994)"],
          ["Jul, Sep, Nov 2022", "...", "Three +75 bp hikes"],
          ["Dec 2022", "4.25-4.50%", "+50 bps"],
          ["Feb-Jul 2023", "5.25-5.50%", "Sequence of 25 bp hikes"],
          ["Jul 2023 - Aug 2024", "5.25-5.50%", "Hold at peak"],
          ["Sep 2024 onward", "Cutting cycle began", "-50, -25, -25 bps"],
        ],
      },
      {
        kind: "h2",
        text: "Market reactions",
      },
      {
        kind: "list",
        items: [
          "**S&P 500**: -19% in 2022 (4,800 to 3,580)",
          "**Nasdaq**: -33% in 2022 (15,800 to 10,500)",
          "**Long-duration US Treasuries**: -30%+ (worst bond year in 40 years)",
          "**Gold**: -3% in USD but +15% in INR (rupee weakness)",
          "**Crude**: peaked $130 (March 2022), settled $80 by year-end",
          "**Bitcoin**: -65% (peak $69k to $16k)",
          "**Nifty**: +4% in 2022 — remarkably resilient (DII offset)",
          "**INR**: weakened from 74 to 83 over the year",
        ],
      },
      {
        kind: "h2",
        text: "The 60/40 broke",
      },
      {
        kind: "p",
        text: "The classic 60/40 portfolio (60% equity, 40% bonds) had its worst year since the Great Depression. Both stocks and bonds fell together because rising rates were the dominant variable hitting both. Diversification broke down precisely when investors needed it.",
      },
      {
        kind: "p",
        text: "Lesson: bond-stock negative correlation works in deflationary environments. In inflationary environments, both can fall together.",
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
          "RBI hiked from 4.0% to 6.5% (250 bps total) — moderate vs Fed's 525 bps",
          "FII outflows of $15-20B in 2022, offset by DII flows",
          "INR weakened 12% but well-managed by RBI",
          "Indian inflation peaked at 7.8% but moderated to 5% by year-end",
          "Indian energy companies (Reliance, ONGC) benefited from high oil",
          "Indian discounted Russian crude saved $10-15B in import bills",
        ],
      },
      {
        kind: "h2",
        text: "The 2023-24 pivot",
      },
      {
        kind: "p",
        text: "By mid-2023, US inflation was clearly moderating. Markets started pricing Fed cuts. The pivot expectations drove a 2023-24 risk-on rally. Mag 7 led the US recovery (AI capex thesis emerged). Indian markets joined the global rally in late 2023 / early 2024.",
      },
      {
        kind: "p",
        text: "Fed actually started cutting in September 2024 — 50 bps surprise cut, then 25 bps cuts in subsequent meetings. The cutting cycle is ongoing.",
      },
      {
        kind: "analogy",
        title: "The hangover after the party",
        text: "COVID stimulus was the party. The 2022 hike cycle was the hangover. Painful for asset prices but necessary to restore stability. 2023-24 has been the recovery. Investors who survived 2022 with quality positions came out fine; speculative bets and overleveraged players got hurt badly.",
      },
      {
        kind: "h2",
        text: "Personal investor lessons",
      },
      {
        kind: "list",
        items: [
          "Don't dismiss inflation as 'transitory' once it's structurally embedded",
          "Long-duration bonds are not safe during rising-rate environments",
          "Quality compounders weathered the storm; speculation got crushed",
          "Indian DII flows are a real structural advantage",
          "Maintaining SIPs through 2022 was the right call",
        ],
      },
      {
        kind: "callout",
        tone: "money",
        title: "Where we are now",
        text: "Late 2024 / early 2025: Fed cutting, dollar range-bound, India performing well despite FII outflow risk. Quadrant: gentle Q3 disinflation. Asset class winners: long-duration bonds (rate cuts coming), quality equity (multiple expansion possible), gold (real yields falling). Asset class losers: cyclical small caps (growth softening), commodity speculation.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "2021-22 was the largest inflation surge since the early 1980s.",
          "Fed hiked 525 bps in 16 months — most aggressive cycle in 40 years.",
          "S&P -19%, Nasdaq -33%, long bonds -30%+ in 2022. 60/40 portfolio had its worst year since Depression.",
          "India weathered 2022 well thanks to RBI's measured response and DII flow offset.",
          "Fed pivot completed in Sept 2024 with first rate cut; cutting cycle ongoing.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why did the classic 60/40 (equity/bond) portfolio lose so much money in 2022?",
        options: [
          "Bad luck",
          "Rising rates hurt both equities (multiple compression) AND bonds (duration-related price decline) simultaneously; negative correlation broke down in inflationary environment",
          "Bond market crash",
          "Equity crash",
        ],
        correctIndex: 1,
        explanation: "Bond-stock negative correlation works in deflationary environments. In inflationary environments where rising rates dominate, both asset classes fall together — defeating naive 60/40 diversification.",
      },
      {
        id: "q2",
        prompt: "How did the Indian market perform in 2022 vs global markets?",
        options: [
          "Worse than US",
          "Remarkably resilient — Nifty +4% vs S&P -19%; DII flows offset FII outflows; RBI's measured response and energy sector tailwinds helped",
          "Similar to US",
          "Crashed harder",
        ],
        correctIndex: 1,
        explanation: "India's structural DII flow base + cautious RBI policy + energy sector benefits all combined to make 2022 a resilient year for Indian equity despite global stress.",
      },
    ],
  },
  {
    id: "w15-l03",
    weekId: W,
    order: 3,
    title: "SVB and the regional bank crisis March 2023",
    summary: "A duration mismatch + interest rate hikes + run = bank failure. The lessons of SVB.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Silicon Valley Bank (SVB) collapsed in March 2023 — the second-largest US bank failure ever. The cause: a textbook duration mismatch that became existential when interest rates rose. Within days, two more US regional banks fell. The fallout reshaped US banking regulation and revealed cracks in the Fed's hiking cycle.",
      },
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "SVB served the tech and venture capital ecosystem. During the COVID era, deposits surged from ~$60B to ~$180B by end-2021 as tech raised massive funding rounds. SVB invested most of these deposits in long-duration US Treasuries and MBS at 1-2% yields — when bond prices were near peaks.",
      },
      {
        kind: "p",
        text: "Through 2022 and into 2023, Fed hiked rapidly. SVB's bond portfolio lost market value but was held as 'available-for-sale' — losses didn't hit reported earnings until bonds were sold.",
      },
      {
        kind: "p",
        text: "Meanwhile, tech funding dried up. Startup customers started withdrawing deposits to cover burn rates. SVB began having to sell bonds at losses to meet withdrawals.",
      },
      {
        kind: "h2",
        text: "The run",
      },
      {
        kind: "p",
        text: "On March 8, 2023, SVB announced an emergency capital raise after acknowledging $1.8B in unrealized losses on bond portfolio. Markets panicked.",
      },
      {
        kind: "p",
        text: "March 9-10, 2023: classic bank run. Word spread via Twitter and VC group chats: 'pull your money out'. Depositors withdrew $42 billion in a single day (March 9). SVB couldn't meet withdrawals. FDIC seized the bank March 10 morning.",
      },
      {
        kind: "p",
        text: "Within days, Signature Bank also failed. First Republic Bank stress emerged (eventually acquired by JPMorgan in May 2023). The crisis spread to Credit Suisse globally (rescued by UBS).",
      },
      {
        kind: "h2",
        text: "The government response",
      },
      {
        kind: "list",
        items: [
          "FDIC seized SVB; created bridge bank to honor deposits",
          "US Treasury, Fed, FDIC announced unlimited deposit guarantees for SVB customers (even above $250k insurance limit) on March 12",
          "Fed created Bank Term Funding Program (BTFP) — lent against bonds at face value, removing the duration loss problem",
          "Crisis subsided within 2 weeks of intervention",
        ],
      },
      {
        kind: "p",
        text: "The 'too big to fail' implicit guarantee was extended to smaller banks via the deposit guarantee announcement — a major policy shift.",
      },
      {
        kind: "h2",
        text: "USDC depeg",
      },
      {
        kind: "p",
        text: "Circle (issuer of USDC stablecoin) had ~$3B of reserves at SVB. When SVB failed, $3B was temporarily unaccessible. USDC briefly traded down to $0.87 over the weekend before recovering to $1 when SVB depositors were guaranteed Monday morning. This was crypto's worst stablecoin scare.",
      },
      {
        kind: "h2",
        text: "What broke and what didn't",
      },
      {
        kind: "p",
        text: "What broke:",
      },
      {
        kind: "list",
        items: [
          "The illusion that 'safe US Treasuries' couldn't bankrupt a bank — they did, via duration losses",
          "The standard $250k FDIC insurance ceiling — politically suspended for SVB",
          "Faith in regional banks — their stocks fell 20-50%",
          "The Fed's confidence in continued aggressive hiking pace — they slowed pacing afterward",
        ],
      },
      {
        kind: "p",
        text: "What didn't break:",
      },
      {
        kind: "list",
        items: [
          "Major banks (JPMorgan, Bank of America, Citi) — actually benefited from deposit migration to safety",
          "Global financial system — contagion was limited",
          "Indian banks — completely insulated from US regional issues",
        ],
      },
      {
        kind: "h2",
        text: "The Indian context",
      },
      {
        kind: "p",
        text: "Indian banking system is structurally very different from US:",
      },
      {
        kind: "list",
        items: [
          "Indian banks hold most government securities at amortized cost (held-to-maturity) — they don't mark to market like SVB",
          "Indian deposit base is dominated by retail (~30% retail by value), much stickier than tech VC deposits",
          "RBI's regulatory regime requires higher capital ratios than US",
          "Indian bond yields rose less aggressively than US, limiting duration losses",
        ],
      },
      {
        kind: "p",
        text: "Indian banking has its own historical issues (Yes Bank 2020, IL&FS 2018, PSU bank NPA cycles) but a US-style SVB-type collapse is structurally less likely.",
      },
      {
        kind: "analogy",
        title: "The submerged anchor",
        text: "Banks borrow short (deposits, withdrawable on demand) and lend long (loans, bonds with multi-year maturities). It's like floating a boat with a long anchor below water. In calm seas, no problem. In stormy seas (rate hikes), the anchor gets heavier and can pull the boat under. SVB's anchor was too long for the storm.",
      },
      {
        kind: "h2",
        text: "Lessons",
      },
      {
        kind: "list",
        items: [
          "Banks fail when interest rate risk meets concentrated, flighty depositors",
          "Duration mismatch is the eternal banking risk",
          "Modern bank runs happen in hours (Twitter speed), not days",
          "Government will intervene to prevent contagion (modern Western world)",
          "'Risk-free' assets aren't risk-free for institutions holding them with duration mismatch",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "SVB collapsed March 2023 from duration mismatch + tech depositor run.",
          "Fed/FDIC intervened with unlimited deposit guarantees; created BTFP lending facility.",
          "USDC briefly depegged to $0.87 due to SVB reserve exposure.",
          "Indian banks are structurally insulated from US regional bank issues.",
          "Modern bank runs happen in hours; duration risk is eternal in banking.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What was the fundamental cause of SVB's collapse?",
        options: [
          "Fraud",
          "Duration mismatch — assets were long-duration bonds whose market value dropped when Fed hiked, while deposits were short-duration and flighty",
          "Cybersecurity breach",
          "Regulatory failure",
        ],
        correctIndex: 1,
        explanation: "SVB held bonds at 1-2% yields; when Fed hiked to 4-5%, bond prices fell ~20-30%. They had to sell at losses when tech depositors withdrew, creating the run.",
      },
      {
        id: "q2",
        prompt: "Why is the Indian banking system structurally less vulnerable to SVB-type duration failure?",
        options: [
          "Indian banks don't hold bonds",
          "Indian banks classify most G-Secs as held-to-maturity (no mark-to-market loss); retail deposit base is stickier than US tech VC deposits; RBI requires higher capital ratios",
          "RBI bans bonds",
          "Indian banks only lend",
        ],
        correctIndex: 1,
        explanation: "Indian banking structure differs in important ways from US banking that reduce duration-mismatch tail risk. Plus stickier retail deposits and tighter regulation.",
      },
    ],
  },
  {
    id: "w15-l04",
    weekId: W,
    order: 4,
    title: "The Yen carry unwind — August 2024",
    summary: "A 25 bps BoJ rate hike triggered the largest one-day Nikkei drop in history. The recap and lessons.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "August 5, 2024 saw Nikkei 225 fall 12.4% — the largest single-day drop in the index's history. The trigger was a BoJ rate hike combined with weak US data. The mechanism was a yen carry trade unwind. The lesson: macro positioning can crash any market.",
      },
      {
        kind: "h2",
        text: "Read the full case study",
      },
      {
        kind: "p",
        text: "The detailed timeline and asset moves are in the case study library. This lesson focuses on the macro lessons.",
      },
      {
        kind: "h2",
        text: "What we learned",
      },
      {
        kind: "list",
        items: [
          "**Positioning matters as much as fundamentals** — neither Japan nor the US had a recession in August 2024. The crash was pure positioning unwind.",
          "**Carry trades end violently** — built up over years, unwind in days",
          "**Watch the yen as a stress indicator** — sudden 3%+ USDJPY moves often signal stress",
          "**Recovery from positioning-driven events is fast** — Nikkei recovered 60% of the drop within days; full recovery in weeks",
          "**Indian markets are now resilient** — Nifty gapped down 3% but closed -2.7% then quickly recovered; DII flows absorbed the shock",
        ],
      },
      {
        kind: "h2",
        text: "Why it took everyone by surprise",
      },
      {
        kind: "list",
        items: [
          "Most investors don't think about carry trades — it's a hedge fund / asset manager concept",
          "BoJ hike was only 15 bps to 0.25% — sounds small but signaled regime change",
          "Combined with weak US NFP — two shocks compounded",
          "Trillions in unwind happened over a weekend; markets gapped open Monday",
        ],
      },
      {
        kind: "h2",
        text: "Personal investor lessons",
      },
      {
        kind: "list",
        items: [
          "Have a cash buffer (5-10%) to add during such events",
          "Don't panic-sell positioning-driven crashes — they're temporary",
          "Quality compounders held up better than speculative names",
          "Watch the yen as a leading indicator of macro stress",
        ],
      },
      {
        kind: "h2",
        text: "The next carry unwind?",
      },
      {
        kind: "p",
        text: "Carry trades rebuild after every unwind. If BoJ stays on hold and Fed cuts aggressively, the yen carry can re-establish. But the August 2024 episode taught markets to watch the yen closely. Future carry unwinds may be smaller because positioning is now more cautious.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The wider lesson",
        text: "Markets break in unexpected ways. Macro positioning, technical leverage, derivatives, and crowded trades can all create sudden moves that have nothing to do with company fundamentals. Holding through these events with quality positions and discipline beats trying to predict the next one.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "August 2024 Nikkei drop was the largest in history; carry-trade unwind triggered.",
          "Positioning shocks can crash markets even when fundamentals are fine.",
          "Indian markets recovered within days thanks to DII flows.",
          "Watch yen and USDJPY as leading indicators of carry-related stress.",
          "Cash buffer + discipline beats panic-selling during positioning shocks.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What triggered the August 2024 Yen carry unwind?",
        options: [
          "Russian invasion",
          "BoJ rate hike to 0.25% combined with weak US NFP — both legs of carry trade turned simultaneously",
          "Bitcoin crash",
          "Indian elections",
        ],
        correctIndex: 1,
        explanation: "Funding side (BoJ hike) + return side (US slowdown) both turned against carry. Forced unwinding cascaded into yen rally and global risk asset sell-off.",
      },
      {
        id: "q2",
        prompt: "Why did Indian markets recover faster than Nikkei from this event?",
        options: [
          "RBI intervention",
          "DII flows absorbed FII selling; carry-trade positioning was less concentrated in India than in Japan/Nikkei; positioning-driven shocks resolve quickly",
          "Currency hedging",
          "Coincidence",
        ],
        correctIndex: 1,
        explanation: "Indian market's domestic DII flow base + lower carry-trade concentration meant the shock could be absorbed quickly. By contrast, Nikkei is more directly hit by yen + global risk-off.",
      },
    ],
  },
  {
    id: "w15-l05",
    weekId: W,
    order: 5,
    title: "Adani-Hindenburg — Indian governance and short sellers",
    summary: "January 2023's $150B+ market cap wipe-out. The lessons about governance, leverage, and short-seller reports.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "On January 24, 2023, US-based short seller {{hindenburg|Hindenburg Research}} published a critical report on the Adani Group alleging stock manipulation, accounting fraud, and undisclosed related-party transactions. Within weeks, Adani Group market cap fell from $235B to $80B — over $150 billion erased.",
      },
      {
        kind: "h2",
        text: "The setup",
      },
      {
        kind: "p",
        text: "Adani Group was one of India's largest conglomerates — ports (Adani Ports), power (Adani Power), green energy (Adani Green), gas (Adani Total Gas), media (NDTV), and more. Founded 1988, expanded aggressively post-2014. Stock prices had rallied 1000-2000% for several group companies during 2020-22.",
      },
      {
        kind: "p",
        text: "Concerns had been raised by some Indian and foreign investors:",
      },
      {
        kind: "list",
        items: [
          "Heavy debt levels (~$30B group debt)",
          "Pledged promoter shares",
          "Stock prices at very high P/E multiples",
          "Complex shareholding patterns with Mauritius/Cayman entities",
        ],
      },
      {
        kind: "h2",
        text: "The Hindenburg report",
      },
      {
        kind: "p",
        text: "Hindenburg published a 100+ page report alleging:",
      },
      {
        kind: "list",
        items: [
          "Stock price manipulation through related-party shell entities",
          "Accounting irregularities at multiple group companies",
          "Money laundering via overseas entities",
          "Promoter share pledging risks",
          "Hindenburg disclosed being short on Adani securities",
        ],
      },
      {
        kind: "p",
        text: "Adani Group strongly denied all allegations.",
      },
      {
        kind: "h2",
        text: "The market reaction",
      },
      {
        kind: "table",
        headers: ["Stock", "Market cap fall (Jan-Mar 2023)"],
        rows: [
          ["Adani Enterprises", "~$70B → $30B"],
          ["Adani Power", "~$30B → $13B"],
          ["Adani Ports", "~$24B → $13B"],
          ["Adani Total Gas", "~$36B → $11B"],
          ["Adani Green", "~$30B → $13B"],
        ],
      },
      {
        kind: "p",
        text: "Most Adani stocks lost 60-80% in 4 weeks. The Adani Enterprises FPO (Follow-on Public Offering) launched at the worst possible timing was withdrawn.",
      },
      {
        kind: "h2",
        text: "Broader market impact",
      },
      {
        kind: "list",
        items: [
          "Nifty fell ~3% in the week of the report",
          "LIC (a large Adani equity holder via passive index exposure) faced political and reputational pressure",
          "PSU banks with Adani loan exposure dropped 8-12%",
          "FII outflows accelerated through Feb-March 2023",
        ],
      },
      {
        kind: "h2",
        text: "The recovery",
      },
      {
        kind: "p",
        text: "Through 2023, several Adani Group companies recovered. The group secured large investments from international entities (GQG Partners $1.9B in March 2023). Debt was reduced through asset sales. SEBI conducted an investigation (still ongoing); courts dismissed several PILs against the group.",
      },
      {
        kind: "p",
        text: "By late 2024, most Adani stocks had recovered 40-60% from January 2023 lows. None fully reached pre-Hindenburg highs.",
      },
      {
        kind: "h2",
        text: "What this case teaches",
      },
      {
        kind: "h3",
        text: "Lesson 1: Even India's most rallying stocks can collapse",
      },
      {
        kind: "p",
        text: "Adani Total Gas was one of India's hottest stocks of 2020-22, up 30x. It lost 70% in 4 weeks. Past performance is no guarantee.",
      },
      {
        kind: "h3",
        text: "Lesson 2: Promoter pledging is a real risk",
      },
      {
        kind: "p",
        text: "Heavy promoter pledging means lenders can liquidate pledged shares if margin calls hit. This creates forced selling exactly when prices are falling — amplifying drawdowns.",
      },
      {
        kind: "h3",
        text: "Lesson 3: Short sellers exist for a reason",
      },
      {
        kind: "p",
        text: "Short sellers like Hindenburg are incentivized to find problems (they profit if their reports are correct). They're not always right, but they often find issues that long-only investors miss.",
      },
      {
        kind: "h3",
        text: "Lesson 4: Governance and disclosure matter",
      },
      {
        kind: "p",
        text: "Complex shareholding structures with offshore entities, related-party transactions, and aggressive debt should warrant a higher discount on valuation. Most retail underestimated these risks during the 2020-22 rally.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "The 'don't fight the chairman' problem",
        text: "Indian markets have a deep deference to powerful business families. Often this means concerns get suppressed in mainstream coverage. Foreign short sellers (Hindenburg, Boulton, etc.) can speak more freely. Their reports deserve serious consideration, not knee-jerk dismissal — even if you ultimately disagree.",
      },
      {
        kind: "h2",
        text: "Practical implications",
      },
      {
        kind: "list",
        items: [
          "Avoid stocks with very high promoter pledging (check on screener.in)",
          "Be cautious about stocks that have run 5x+ in 2 years without proportional earnings growth",
          "Diversify within sectors — don't concentrate in a single group",
          "Take short-seller reports seriously; don't dismiss them out of hand",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Hindenburg report in January 2023 erased $150B+ from Adani Group market cap.",
          "Heavy debt, promoter pledging, complex offshore structures were known concerns that became urgent.",
          "Short sellers play a market role despite being controversial.",
          "Most Adani stocks recovered 40-60% by late 2024 but didn't fully reclaim peaks.",
          "Indian retail should evaluate governance, leverage, and pledging carefully before concentrated positions.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's a key risk indicator that became visible in the Adani-Hindenburg episode?",
        options: [
          "Strong revenue growth",
          "Heavy promoter pledging combined with complex offshore shareholding and aggressive debt — created forced-selling vulnerability when sentiment turned",
          "Too many subsidiaries",
          "Index inclusion",
        ],
        correctIndex: 1,
        explanation: "Pledged promoter shares + offshore structures + high debt = vulnerability to margin call cascades. When sentiment turned, forced selling amplified the decline.",
      },
      {
        id: "q2",
        prompt: "What's a practical lesson from this case for retail investors?",
        options: [
          "Always trust corporate India",
          "Check promoter pledging (screener.in), avoid concentrated single-group exposure, take short-seller reports seriously, evaluate governance carefully",
          "Avoid all Indian stocks",
          "Only buy PSU stocks",
        ],
        correctIndex: 1,
        explanation: "Specific actionable lessons: pledging check, single-group diversification limit, taking governance concerns seriously. Reactive dismissal of warnings was costly.",
      },
    ],
  },
  {
    id: "w15-l06",
    weekId: W,
    order: 6,
    title: "Patterns across crises — what generalises",
    summary: "Beyond individual crises, what patterns repeat? Lessons that help you navigate future events.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "After studying COVID, 2022 inflation, SVB, the yen carry unwind, Adani-Hindenburg, and other crises, certain patterns emerge. The next crisis will be different in specifics but similar in shape. Recognizing the patterns helps you act appropriately when something does break.",
      },
      {
        kind: "h2",
        text: "Pattern 1: Crises arrive faster than expected",
      },
      {
        kind: "p",
        text: "From low-VIX complacency to crisis is usually days or weeks, not months. SVB went from announcing capital raise to FDIC seizure in 48 hours. Bitcoin can fall 30% in a weekend. Modern information speed and algorithmic positioning accelerate these events.",
      },
      {
        kind: "p",
        text: "Implication: don't wait for confirmation. Build resilience in calm times.",
      },
      {
        kind: "h2",
        text: "Pattern 2: The 'unknown unknowns'",
      },
      {
        kind: "p",
        text: "The trigger is rarely what the market is most worried about. In Feb 2020, the consensus worry was the US election cycle — nobody had COVID on their list. In 2022, the consensus worry was an earnings recession — nobody expected inflation to break 9%. SVB and the yen unwind also came from corners few were watching.",
      },
      {
        kind: "p",
        text: "Implication: diversification protects against unknown unknowns. Concentrate too much and a black swan can wipe you out.",
      },
      {
        kind: "h2",
        text: "Pattern 3: Initial crash is followed by central bank intervention",
      },
      {
        kind: "p",
        text: "Modern central banks (especially Fed) intervene when systemic stress emerges:",
      },
      {
        kind: "list",
        items: [
          "COVID March 2020: Fed unlimited QE within weeks",
          "SVB March 2023: BTFP + unlimited deposit guarantees within days",
          "2019 repo crisis: Fed liquidity injections within hours",
        ],
      },
      {
        kind: "p",
        text: "Implication: don't panic-sell during initial crashes. Central bank pivot is often near.",
      },
      {
        kind: "h2",
        text: "Pattern 4: Correlations break",
      },
      {
        kind: "p",
        text: "In severe stress, correlations between asset classes converge. Gold can fall with equities. Bonds can fall with equities. Diversification works less than expected.",
      },
      {
        kind: "p",
        text: "Implication: in true crisis, only cash and the US dollar work. Maintain some cash buffer.",
      },
      {
        kind: "h2",
        text: "Pattern 5: Quality recovers faster",
      },
      {
        kind: "p",
        text: "Coming out of every crisis, quality compounders recover fastest:",
      },
      {
        kind: "list",
        items: [
          "HDFC Bank, Asian Paints, TCS — recovered to all-time highs within 12-18 months of COVID crash",
          "Speculative names — many never recovered to peaks (Bharti Airtel went years without reclaiming earlier highs)",
          "Junk stocks — often delisted or in distress years after crashes",
        ],
      },
      {
        kind: "p",
        text: "Implication: build a core of quality. It's your foundation for surviving any crisis.",
      },
      {
        kind: "h2",
        text: "Pattern 6: Leverage kills first",
      },
      {
        kind: "p",
        text: "Whether retail F&O traders, leveraged hedge funds, or institutions with duration mismatches — leverage is what kills first in crises:",
      },
      {
        kind: "list",
        items: [
          "COVID: leveraged ETF holders wiped out",
          "2022: speculative crypto leverage cleansed",
          "SVB: duration leverage (borrow short, invest long)",
          "Yen carry unwind: cross-border financial leverage",
        ],
      },
      {
        kind: "p",
        text: "Implication: avoid significant leverage in your portfolio. The asymmetry is brutal — you can lose everything when something breaks.",
      },
      {
        kind: "h2",
        text: "Pattern 7: Recoveries are V-shaped more often than not",
      },
      {
        kind: "p",
        text: "Modern crises (COVID, SVB, yen unwind) have V-shaped recoveries because central banks intervene. Recoveries are days to months, not years. Bear markets that take years to recover (2008 GFC, dotcom bust) tend to involve structural credit issues rather than positioning shocks.",
      },
      {
        kind: "p",
        text: "Implication: holding through positioning-driven crashes is usually rewarded. Selling and trying to time re-entry usually fails.",
      },
      {
        kind: "h2",
        text: "Pattern 8: SIPs and discipline always win",
      },
      {
        kind: "p",
        text: "Across every crisis studied:",
      },
      {
        kind: "list",
        items: [
          "Investors who maintained SIPs through the worst periods had the best outcomes",
          "Investors who panic-sold near lows had the worst outcomes",
          "Investors who paused SIPs to 'time' the bottom usually missed it",
        ],
      },
      {
        kind: "p",
        text: "Implication: SIP discipline beats market timing. Build a strategy you can maintain even when scared.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "Pre-commit to your behavior",
        text: "Before any crisis hits, decide what you'll do. Common pre-commitments: 'If market drops 20% from peak, I'll deploy half my cash buffer'. 'I'll never sell my equity SIPs regardless of market levels'. 'If India VIX exceeds 25, I'll increase my SIP by 25% for 3 months'. Pre-committed behaviors beat in-the-moment decisions.",
      },
      {
        kind: "h2",
        text: "The meta-lesson",
      },
      {
        kind: "p",
        text: "There will be more crises. You can't predict when, where, or what. But you can:",
      },
      {
        kind: "list",
        items: [
          "Build a quality core that compounds through cycles",
          "Maintain reasonable cash buffer (5-10%)",
          "Avoid leverage and concentrated speculation",
          "Maintain SIPs through panic",
          "Have a written investment plan you trust when emotions run high",
        ],
      },
      {
        kind: "p",
        text: "The investor who survived COVID, 2022, SVB, the yen unwind, and the Adani crisis (and there will be more) is not the one who timed each crisis correctly. It's the one whose process is robust enough to survive any of them.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Crises arrive faster than expected; build resilience in calm times.",
          "Initial sell-offs are often followed by central bank intervention.",
          "Correlations break in stress — only cash and USD work in true panic.",
          "Quality recovers fastest; leverage kills first.",
          "SIP discipline + pre-committed plan beats reactive decisions.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's a consistent finding across major modern market crises?",
        options: [
          "Crises last for years",
          "Recoveries are typically V-shaped, often kicked off by central bank intervention; quality compounders recover fastest",
          "All asset classes uncorrelated",
          "Diversification always works",
        ],
        correctIndex: 1,
        explanation: "Modern crises (COVID, SVB, yen unwind) have shown fast V-shaped recoveries triggered by central bank intervention. Quality compounders lead the recovery.",
      },
      {
        id: "q2",
        prompt: "What's the most reliable single behavior for retail across all crises studied?",
        options: [
          "Trade actively",
          "Maintain SIPs and disciplined allocation through panic; avoid leverage; have pre-committed responses to drawdowns",
          "Sell everything at the first sign",
          "Buy at the exact bottom",
        ],
        correctIndex: 1,
        explanation: "Discipline > Activity. Pre-committed behavior + SIP maintenance + leverage avoidance has been the durable winning combination across every modern crisis.",
      },
    ],
  },
];

export const WEEK_15_LESSONS = lessons;
