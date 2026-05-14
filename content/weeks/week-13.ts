import type { Lesson } from "../types";

const W = 13;

const lessons: Lesson[] = [
  {
    id: "w13-l01",
    weekId: W,
    order: 1,
    title: "What macro liquidity actually means",
    summary: "Beyond market liquidity — the macro plumbing that determines whether risk assets globally have a tailwind or headwind.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "We've talked about liquidity at the market level (bid-ask, depth). Macro liquidity is different — it's about how much money is sloshing around the global financial system. When macro liquidity expands, risk assets tend to rise. When it contracts, they tend to fall.",
      },
      {
        kind: "h2",
        text: "Sources of macro liquidity",
      },
      {
        kind: "list",
        items: [
          "**Central bank balance sheets** — Fed, ECB, BoJ, RBI, PBoC. When they expand (QE), they create new money to buy assets. When they shrink (QT), they take money out.",
          "**Bank lending** — Commercial banks create money via fractional reserve lending. When banks lend aggressively, money supply grows. When they tighten, it contracts.",
          "**Government deficits** — When governments deficit-spend with bond issuance, they inject net new spending power into the economy.",
          "**Foreign reserves recycling** — When EM central banks (China, Saudi) accumulate dollar reserves and reinvest in US Treasuries, they recycle global liquidity.",
        ],
      },
      {
        kind: "h2",
        text: "How to see liquidity",
      },
      {
        kind: "p",
        text: "Liquidity isn't a single number. But several proxies help:",
      },
      {
        kind: "list",
        items: [
          "**Fed balance sheet** — published weekly. Peak was ~$9T in 2022; now ~$7T after QT.",
          "**M2 money supply** — total checkable deposits + savings + retail money funds. Grows ~5-8% in normal times; surged 25%+ during COVID stimulus.",
          "**Global central bank balance sheets combined** — Fed + ECB + BoJ + PBoC = the global liquidity number professional macro traders watch.",
          "**Reverse repo (RRP)** — money parked at the Fed; when RRP drains down, that money returns to the economy.",
          "**Bank lending growth** — published monthly by central banks.",
        ],
      },
      {
        kind: "h2",
        text: "Why macro liquidity drives risk assets",
      },
      {
        kind: "p",
        text: "When the Fed prints money (QE), where does it go? Initially, into banks' reserves. But banks then have more money to lend. Investors have more money to invest. Risk assets — stocks, real estate, crypto — get a tailwind from the flow of new money seeking returns.",
      },
      {
        kind: "p",
        text: "When the Fed reverses (QT), the chain runs backward. Less liquidity sloshing around. Risk assets struggle.",
      },
      {
        kind: "h2",
        text: "The 2020-2022 illustration",
      },
      {
        kind: "table",
        headers: ["Period", "Fed balance sheet", "S&P 500", "Bitcoin"],
        rows: [
          ["Feb 2020 (pre-COVID)", "$4.1T", "3,380", "$10,000"],
          ["Mar 2020 (crash)", "$4.7T (started QE)", "2,237", "$5,000"],
          ["Dec 2021 (peak)", "$8.8T (massive QE)", "4,766", "$47,000"],
          ["Oct 2022 (low)", "$8.7T (QT started)", "3,584", "$19,000"],
          ["Dec 2024", "~$7.0T (still QT)", "~6,000", "~$100,000"],
        ],
      },
      {
        kind: "p",
        text: "The correlation between Fed balance sheet and risk assets isn't perfect (recent 2023-24 saw rally despite QT, mostly due to AI thesis and corporate earnings). But over multi-year periods, the relationship is robust.",
      },
      {
        kind: "analogy",
        title: "The water level in a lake",
        text: "Macro liquidity is the water level in a lake. When water rises (QE), boats rise — all of them. Some boats rise faster (Mag 7, Bitcoin) but everything floats higher. When water recedes (QT), boats descend. A few sailboats still find good winds (specific themes), but most boats drift downward. You don't fight the water level; you understand it and position the boat accordingly.",
      },
      {
        kind: "h2",
        text: "Indian context",
      },
      {
        kind: "p",
        text: "Global macro liquidity affects India through:",
      },
      {
        kind: "list",
        items: [
          "**FII flows** — when global liquidity is loose, capital flows toward EMs including India",
          "**Currency** — abundant liquidity often = weaker dollar = stronger INR",
          "**Risk appetite** — global liquidity sets the mood; Indian equities take cues",
          "**Indian banking liquidity** — RBI manages domestic liquidity separately (through CRR, OMOs, etc.) — this is a secondary loop",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "RBI's own balance sheet",
        text: "RBI's balance sheet has grown from ₹30 lakh crore (2014) to ₹70+ lakh crore (2024). Indian-specific liquidity matters for bond yields and currency. But for equity, global liquidity (mostly Fed-driven) is the bigger factor.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Macro liquidity = total money sloshing globally; key sources: central bank balance sheets, bank lending, fiscal deficits.",
          "Key proxies: Fed balance sheet, M2, global CB balance sheets combined, reverse repo.",
          "Liquidity expansion (QE) supports risk assets; contraction (QT) creates headwind.",
          "2020-2022 was the textbook illustration: $5T balance sheet expansion → asset price boom; QT since 2022 → tougher environment.",
          "Indian markets transmit global liquidity via FII flows and currency.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does a Fed QE (quantitative easing) program tend to support risk asset prices?",
        options: [
          "Random correlation",
          "Fed creates new money to buy bonds → banks have more reserves → more money seeks investment → risk assets rally as new flows search for return",
          "QE directly buys stocks",
          "Mandate of QE",
        ],
        correctIndex: 1,
        explanation: "QE expands the monetary base, which through banking and investor channels translates to more demand for risk assets. The mechanism is partly direct (asset purchases) and partly through portfolio rebalancing effects.",
      },
      {
        id: "q2",
        prompt: "Approximately how large was the Fed balance sheet expansion from March 2020 to peak in 2022?",
        options: ["$1T", "$2T", "Around $5T ($4T to ~$9T)", "$10T+"],
        correctIndex: 2,
        explanation: "Fed went from $4.1T pre-COVID to $8.8T peak — roughly $4.7T of expansion, one of the largest in history.",
      },
    ],
  },
  {
    id: "w13-l02",
    weekId: W,
    order: 2,
    title: "The Fed balance sheet — QE, QT, and what they do",
    summary: "The mechanics of how the Fed expands and shrinks the monetary base, and what each policy does to global markets.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "QE (Quantitative Easing) and QT (Quantitative Tightening) sound technical but the concepts are simple. Both are unconventional monetary policy tools — used when normal rate moves aren't enough.",
      },
      {
        kind: "h2",
        text: "What QE does",
      },
      {
        kind: "p",
        text: "{{qe|QE}} works like this:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Fed creates new money (electronically — no physical printing needed)",
          "Fed uses this money to buy US Treasuries and Mortgage-Backed Securities (MBS) from banks and dealers",
          "Cash flows to sellers; their bank accounts get larger",
          "Banks now have more reserves at the Fed",
          "Effect: pushes down long-term yields (bid for long bonds), expands monetary base, signals 'we'll do whatever it takes' to markets",
        ],
      },
      {
        kind: "p",
        text: "The Fed has done four major QE rounds: 2008-2014 (GFC), brief 2019 (repo stress), 2020-2022 (COVID), and ongoing.",
      },
      {
        kind: "h2",
        text: "What QT does",
      },
      {
        kind: "p",
        text: "{{qt|QT}} is the reverse:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Fed lets bonds mature without reinvesting the proceeds (passive QT)",
          "OR Fed actively sells bonds back into the market (active QT, more aggressive)",
          "Effect: monetary base shrinks; reserves decline; long-term yields face upward pressure",
        ],
      },
      {
        kind: "p",
        text: "The Fed has been doing QT since mid-2022 at $60-95B/month pace. Balance sheet went from $9T peak to ~$7T currently. Plans to taper QT further in 2025.",
      },
      {
        kind: "h2",
        text: "Why QE matters more than rate cuts at zero",
      },
      {
        kind: "p",
        text: "When policy rates are already at zero, the Fed can't cut further (negative rates are tried but problematic). QE becomes the marginal stimulus tool. By buying long bonds, Fed pushes down long yields directly — affecting mortgage rates, corporate borrowing rates, equity discount rates.",
      },
      {
        kind: "p",
        text: "QE is sometimes called 'unconventional' but post-2008, it's been used in 7 of the past 16 years. It's now part of the standard toolkit.",
      },
      {
        kind: "h2",
        text: "Side effects of QE",
      },
      {
        kind: "list",
        items: [
          "**Asset price inflation** — risk assets rise on liquidity; benefits asset owners more than wage earners",
          "**Currency debasement** — more dollars = weaker dollar (everything else equal)",
          "**Lower bond yields** — squeezes pension fund returns; pushes savers into riskier assets",
          "**Wealth inequality** — those holding assets benefit; those without assets don't",
          "**Inflation risk** — if too much money chases too few goods, eventually shows up in CPI (lagged effect; emerged in 2021-22)",
        ],
      },
      {
        kind: "h2",
        text: "Side effects of QT",
      },
      {
        kind: "list",
        items: [
          "**Higher bond yields** — withdrawal of bond demand pushes yields up",
          "**Tighter financial conditions** — overall borrowing costs rise",
          "**Risk asset headwind** — less liquidity supporting prices",
          "**Banking stress** — if QT goes too far, banks can hit reserve constraints (caused the SVB-era stress)",
          "**Eventually pause/end** — QT typically ends when something breaks (2019, March 2023)",
        ],
      },
      {
        kind: "analogy",
        title: "Filling and draining a bathtub",
        text: "QE is the Fed filling a bathtub of monetary liquidity with new water. QT is draining it. The bathtub holds the whole global financial system. Different people occupy different parts of the bathtub, but the water level affects everyone. Rate cuts/hikes are like turning on/off the warm/cold tap. Both matter; QE/QT is the bigger water flow.",
      },
      {
        kind: "h2",
        text: "How QE/QT transmits to India",
      },
      {
        kind: "p",
        text: "Direct effects on India:",
      },
      {
        kind: "list",
        items: [
          "**QE periods (2020-21)**: massive FII inflows to India, INR strong, Nifty 145% in 18 months",
          "**QT periods (2022-24)**: FII outflows initially, INR pressure, Nifty resilient thanks to DII offset",
          "**Future QE/QT pivot**: Fed announcing QT slowdown or pause could trigger renewed risk-on rally in India",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Watching Fed balance sheet",
        text: "The Fed publishes its balance sheet weekly (Wednesday afternoon US time). Look for total assets at fred.stlouisfed.org/series/WALCL. Changes are gradual — week-to-week noise, but month-to-month trend is the real signal.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "QE = Fed creates money to buy bonds, expanding monetary base.",
          "QT = Fed lets bonds mature without reinvesting, shrinking balance sheet.",
          "QE supports risk assets; QT creates headwind.",
          "Fed has done 4 major QE rounds since 2008; current QT since mid-2022 ($60-95B/month).",
          "Watch Fed balance sheet weekly; transition pivots (QT slowing/ending) are major macro events.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the immediate effect on bond yields when the Fed starts QE?",
        options: [
          "Yields rise",
          "Long-term yields fall as Fed bids for long bonds, increasing demand",
          "No effect",
          "Currency strengthens",
        ],
        correctIndex: 1,
        explanation: "QE involves Fed buying long-duration bonds, which directly supports their price. Higher price = lower yield. This was the explicit goal of post-GFC and COVID QE — keep long yields low to support the economy.",
      },
      {
        id: "q2",
        prompt: "Why does QT typically pause or end when 'something breaks'?",
        options: [
          "Random",
          "QT reduces bank reserves; if reduced too far, banks hit reserve constraints, causing repo stress, banking failures, or other dysfunction (2019 repo crisis, March 2023 SVB)",
          "Political pressure",
          "Bond market voting",
        ],
        correctIndex: 1,
        explanation: "QT removes reserves from the banking system. If pushed too far, plumbing breaks — banks can't meet payment obligations. Fed historically pauses QT when stress emerges.",
      },
    ],
  },
  {
    id: "w13-l03",
    weekId: W,
    order: 3,
    title: "Cross-border USD flows and EM dependency",
    summary: "How dollars flow around the world, why EMs are dollar-dependent, and what this means for India.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "The US dollar isn't just America's currency — it's the global financial system's plumbing. Most cross-border trade settles in dollars. Most international debt is denominated in dollars. Most commodities are priced in dollars. Understanding how dollars flow globally helps explain EM cycles.",
      },
      {
        kind: "h2",
        text: "The dollar's global roles",
      },
      {
        kind: "list",
        items: [
          "**Reserve currency** — 58% of global FX reserves are USD",
          "**Trade settlement** — ~50% of global trade settles in USD, even between non-US countries",
          "**Borrowing currency** — non-US borrowers (companies, governments) have $13 trillion in dollar debt",
          "**Anchor for emerging markets** — many EM currencies maintain explicit or de facto dollar pegs",
          "**Safe haven asset** — in global stress, dollars are bought regardless of US fundamentals",
        ],
      },
      {
        kind: "h2",
        text: "How dollars flow into EMs",
      },
      {
        kind: "list",
        items: [
          "**Foreign Direct Investment (FDI)** — US/European companies invest in factories, infrastructure in EMs",
          "**Portfolio investment** — FIIs buy EM stocks and bonds",
          "**Trade surplus** — EMs that export more than import accumulate dollars",
          "**Remittances** — workers abroad sending money home (huge for India, Mexico, Philippines)",
          "**Borrowing** — EMs and their corporates borrow dollars in international markets",
          "**Tourism** — foreign visitor spending",
        ],
      },
      {
        kind: "h2",
        text: "How dollars flow out",
      },
      {
        kind: "list",
        items: [
          "**Import payments** — EMs paying for imports, especially oil and electronics",
          "**Service payments** — paying for foreign services (Saudi paying for US software)",
          "**Debt servicing** — repaying dollar bonds",
          "**Portfolio outflows** — when FIIs sell EM assets to bring money home",
          "**Capital flight** — citizens converting savings to dollars (Argentina, Lebanon)",
        ],
      },
      {
        kind: "h2",
        text: "The EM dollar cycle",
      },
      {
        kind: "p",
        text: "EM economies live in a cycle determined by dollar availability:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Easy dollars** (Fed easy, dollar weak): EMs receive FDI, capital flows, borrow cheaply in dollars, grow fast",
          "**Tightening dollars** (Fed hawkish, dollar strong): Dollar debt becomes expensive to service; capital flows reverse; EM currencies weaken",
          "**Crisis** (extreme dollar strength): Defaults, currency crashes, IMF bailouts (Argentina periodically, Turkey 2018, Sri Lanka 2022)",
          "**Recovery** (Fed pivots): Dollar weakens, capital returns, EMs recover",
        ],
      },
      {
        kind: "p",
        text: "This cycle has played out repeatedly since the 1990s — Asian crisis 1997, Argentine crisis 2001, Fragile Five 2013, Turkey 2018, multiple EM stress periods since.",
      },
      {
        kind: "h2",
        text: "India's relative resilience",
      },
      {
        kind: "p",
        text: "India is less dollar-dependent than many EMs because:",
      },
      {
        kind: "list",
        items: [
          "**Massive remittance inflows** — $120+B/year, world's largest. Doesn't reverse during stress.",
          "**Services exports** — IT services brings $200B+/year of dollars in. Sticky structural inflow.",
          "**Lower external debt** — India's external debt is ~20% of GDP, manageable",
          "**Large forex reserves** — $650+B cushion",
          "**Domestic flows** — DII flows via SIPs partially offset FII outflows",
        ],
      },
      {
        kind: "p",
        text: "India is still EM-classified and gets affected by dollar cycles. But it's less brittle than Argentina, Turkey, or Sri Lanka. Even during 2013 Fragile Five and 2022 strong-dollar episodes, India weathered the stress with currency adjustment but no crisis.",
      },
      {
        kind: "analogy",
        title: "The international ATM",
        text: "Imagine a global ATM that's run by the US Federal Reserve. When easy money flows, every country in the world can withdraw dollars to invest, borrow, trade. When the ATM tightens, those needing dollars (EM borrowers, oil importers, commodity exporters) feel the squeeze. The Fed doesn't aim its policy at EMs — but EMs feel every move of the lever.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Dollar reserves shift",
        text: "Post-Russia 2022, several EM central banks (including India) have been reducing USD reserve share and increasing gold. This is a slow but structural shift. If dollar's reserve currency status erodes, EM dollar dependence might gradually reduce. But this is decades-long process, not years.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Dollar = global plumbing for trade, debt, reserves, and risk haven.",
          "EM dollar flows: FDI, portfolio, exports, remittances in; imports, debt service, outflows out.",
          "EM cycle: easy dollars → growth → tightening dollars → stress → pivot → recovery.",
          "India's dollar resilience: massive remittances, IT services exports, manageable external debt, big reserves, DII offset.",
          "EM dollar dependency is decades-old structural; reserve diversification away from USD is slow.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why are EMs cyclically dependent on dollar conditions?",
        options: [
          "Random correlation",
          "EM trade settles in dollars, EMs borrow in dollars, FDI/portfolio flows are in dollars — strong dollar = expensive debt service + outflows + crisis risk",
          "EMs love the dollar",
          "Sanctions",
        ],
        correctIndex: 1,
        explanation: "EM economies depend on dollars for trade, debt, and investment. When dollars tighten (strong dollar / high Fed rates), the whole system feels stress.",
      },
      {
        id: "q2",
        prompt: "What's a major reason India has been more resilient to dollar cycles than other EMs?",
        options: [
          "Random",
          "Massive structural inflows from remittances ($120B+/year) and IT services exports ($200B+/year) — both sticky, don't reverse during crises",
          "RBI controls dollars",
          "Indian government quietly intervenes",
        ],
        correctIndex: 1,
        explanation: "Remittances and services exports are sticky, non-cyclical dollar inflows. They cushion India against the worst of EM dollar stress.",
      },
    ],
  },
  {
    id: "w13-l04",
    weekId: W,
    order: 4,
    title: "Liquidity indicators retail can actually watch",
    summary: "A practical short list of macro liquidity indicators to monitor monthly.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "Most macro liquidity dashboards use 30+ indicators. For retail, a short list of 5-7 captures the picture. Here they are.",
      },
      {
        kind: "h2",
        text: "The retail macro liquidity dashboard",
      },
      {
        kind: "table",
        headers: ["Indicator", "What it tells you", "Frequency"],
        rows: [
          ["**Fed balance sheet total assets**", "Direction of Fed-driven liquidity (QE/QT)", "Weekly"],
          ["**ECB and BoJ balance sheets**", "Other major CB liquidity contribution", "Monthly"],
          ["**US M2 money supply**", "Broad money in the US system", "Monthly"],
          ["**US dollar (DXY)**", "Effective liquidity tightness/looseness for non-US economies", "Daily"],
          ["**Reverse repo facility (RRP)**", "Money parked at the Fed not in the economy", "Daily"],
          ["**Indian forex reserves (RBI)**", "Indian-specific liquidity cushion", "Weekly"],
          ["**Indian banking system liquidity**", "RBI's WACR (Weighted Average Call Rate) vs repo rate signals tightness", "Daily"],
        ],
      },
      {
        kind: "h2",
        text: "Where to find each",
      },
      {
        kind: "list",
        items: [
          "**Fed balance sheet**: fred.stlouisfed.org/series/WALCL — total Fed assets, weekly",
          "**M2**: fred.stlouisfed.org/series/M2SL — US M2 money stock, monthly",
          "**RRP**: fred.stlouisfed.org/series/RRPONTSYD — Reverse repo balance, daily",
          "**DXY**: investing.com or tradingview, daily",
          "**RBI reserves**: rbi.org.in → 'Reserve Bank of India - Database on Indian Economy' → 'Foreign Exchange Reserves'",
          "**WACR**: rbi.org.in money market section",
        ],
      },
      {
        kind: "h2",
        text: "How to read the dashboard",
      },
      {
        kind: "p",
        text: "Synthesise into a simple binary read: liquidity loosening, tightening, or neutral.",
      },
      {
        kind: "p",
        text: "Loosening signals (rare but powerful):",
      },
      {
        kind: "list",
        items: [
          "Fed balance sheet expanding (Q4 2024 has been slowing the contraction)",
          "M2 growth accelerating",
          "DXY weakening",
          "Forex reserves climbing",
          "RRP draining (suggests money returning to the economy)",
        ],
      },
      {
        kind: "p",
        text: "Tightening signals:",
      },
      {
        kind: "list",
        items: [
          "Fed balance sheet shrinking (post-2022 QT)",
          "M2 growth slow or negative",
          "DXY strengthening",
          "Forex reserves falling",
          "RRP rising (money pulled out of the economy)",
        ],
      },
      {
        kind: "h2",
        text: "What 2024-25 looks like",
      },
      {
        kind: "p",
        text: "Late 2024 / early 2025 readings:",
      },
      {
        kind: "list",
        items: [
          "Fed balance sheet: still in QT but pace slowing; potentially pausing/ending in 2025",
          "M2: positive growth resuming after 2022-23 contraction",
          "DXY: range-bound 100-108, no clear breakout",
          "RRP: drained from $2.5T peak to under $200B — flow has returned to the economy",
          "Indian forex reserves: at all-time highs ~$700B",
        ],
      },
      {
        kind: "p",
        text: "Synthesis: liquidity environment is gently improving from the tight 2022 lows. Fed transition toward easing. Indian reserves strong. Setup for risk asset support if continues.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Don't overdo the data",
        text: "Liquidity indicators are slow-moving. Monthly check is enough — daily checking creates noise sensitivity. Set a calendar reminder for the first of each month to spend 15 minutes updating your liquidity read.",
      },
      {
        kind: "h2",
        text: "Connecting to your portfolio",
      },
      {
        kind: "p",
        text: "Liquidity tilts inform 1-3 portfolio decisions:",
      },
      {
        kind: "list",
        items: [
          "**Loosening liquidity environment**: tilt toward equity, especially growth and small caps; reduce cash buffer",
          "**Tightening liquidity environment**: trim equity at the margin; increase cash and gold; favor large-cap quality over small caps",
          "**Inflection points** (QT ending, Fed pivoting): biggest opportunities — often the start of multi-year regimes",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Short list of 5-7 liquidity indicators captures most of the signal.",
          "FRED (fred.stlouisfed.org) is the best free source for US/global liquidity data.",
          "Synthesise to binary: loosening, tightening, or neutral.",
          "Late 2024 reads: gentle improvement from tight 2022, Fed transitioning toward easing.",
          "Use to inform portfolio tilts at the margin, especially around inflection points.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which indicator is the best single read of broad US monetary conditions?",
        options: [
          "DXY",
          "Fed balance sheet — directly shows monetary base; tracks QE/QT precisely",
          "Indian forex reserves",
          "Bitcoin price",
        ],
        correctIndex: 1,
        explanation: "Fed balance sheet is the most direct measure of US monetary policy stance. Other indicators downstream from it (DXY, yields, etc.) provide secondary signals.",
      },
      {
        id: "q2",
        prompt: "What does a draining reverse repo (RRP) balance suggest?",
        options: [
          "Recession imminent",
          "Money parked at the Fed is moving back into the economy — net positive for liquidity",
          "Bank failures",
          "Quantitative easing",
        ],
        correctIndex: 1,
        explanation: "When RRP balance falls, that money typically returns to the financial system. It's a positive liquidity signal — money flowing into investments/banks rather than parked at the Fed.",
      },
    ],
  },
  {
    id: "w13-l05",
    weekId: W,
    order: 5,
    title: "Why liquidity sometimes beats fundamentals short-term",
    summary: "In the short run, markets follow the money. Fundamentals matter in the long run. Recognising which is dominant matters.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Warren Buffett: 'In the short run, the market is a voting machine. In the long run, it's a weighing machine.' The 'voting machine' in the short run is largely a liquidity machine. The 'weighing machine' in the long run is a fundamentals machine.",
      },
      {
        kind: "h2",
        text: "Short-term liquidity dominance",
      },
      {
        kind: "p",
        text: "Over 1-3 month windows, liquidity often dominates fundamentals:",
      },
      {
        kind: "list",
        items: [
          "Stocks with poor fundamentals can rally in liquidity surges (meme stocks 2021, low-quality names in late bull phases)",
          "Stocks with great fundamentals can drift when liquidity is tight (HDFC Bank flat for 2 years 2023-24 despite strong earnings)",
          "EM equity rallies during global QE waves regardless of country specifics",
          "Crypto explodes in liquidity surges with no clear fundamental driver",
        ],
      },
      {
        kind: "h2",
        text: "Long-term fundamental dominance",
      },
      {
        kind: "p",
        text: "Over 5-10+ year windows, fundamentals win:",
      },
      {
        kind: "list",
        items: [
          "HDFC Bank compounded 18%+ for 25 years through every regime — fundamentals dominated",
          "Yes Bank rallied to ₹400 on hype, then collapsed to ₹15 on broken fundamentals",
          "Indian IT services delivered compounding earnings over 30 years; stock prices followed",
          "Companies that destroyed value (Anil Ambani Group, DHFL, Vodafone Idea) all eventually collapsed despite periodic rallies",
        ],
      },
      {
        kind: "h2",
        text: "Which is dominant now?",
      },
      {
        kind: "p",
        text: "Indicators that liquidity is dominating fundamentals:",
      },
      {
        kind: "list",
        items: [
          "Stocks with worst fundamentals up the most (rotation into 'junk')",
          "Small-cap underperforming large-cap not because of fundamentals but because of flow rotation",
          "VIX low + DXY weak + market grinding higher (textbook liquidity environment)",
          "All sector indices rising regardless of sector-specific story (broad-based liquidity rally)",
        ],
      },
      {
        kind: "p",
        text: "Indicators that fundamentals are dominating:",
      },
      {
        kind: "list",
        items: [
          "Quality outperforming junk (rotation to quality)",
          "Earnings beats and misses moving stocks materially",
          "Sector dispersion increasing — winners and losers diverging",
          "Volatility elevated; markets discriminate between names",
        ],
      },
      {
        kind: "h2",
        text: "What this means for you",
      },
      {
        kind: "p",
        text: "In liquidity-dominated environments, broad equity index exposure works well. Small-cap, mid-cap, and even quality compounders can underperform shiny narratives. Don't fight the tape — but don't abandon quality either.",
      },
      {
        kind: "p",
        text: "In fundamental-dominated environments, quality outperforms; junk gets punished. Reduce small-cap exposure; favor quality compounders.",
      },
      {
        kind: "p",
        text: "Most retail get this wrong by trying to predict the next 'big stock' rather than understanding which environment they're in.",
      },
      {
        kind: "analogy",
        title: "The river and the rocks",
        text: "Imagine a river. The water (liquidity) determines whether boats float or scrape bottom. The rocks (fundamentals) determine which boats hit damage. When water is high, all boats float — even the cheap ones. When water recedes, only the well-built boats survive the rocks. You want to own well-built boats AND understand when the water is high vs low.",
      },
      {
        kind: "h2",
        text: "Historical examples",
      },
      {
        kind: "list",
        items: [
          "**2020-21 liquidity wave** — Indian small caps up 200%+, including many companies with weak earnings. Liquidity dominated. The 2022-23 correction punished the weak names — fundamentals re-asserted.",
          "**2018 ILFS-NBFC crisis** — fundamentals dominated. Quality survived; over-leveraged names collapsed.",
          "**2023-24 PSU rally** — narrative + policy (capex theme) + liquidity rotation drove PSU stocks up 100-300%. Some had improving fundamentals; some didn't.",
          "**Long compounders** (HDFC Bank, Asian Paints, Bajaj Finance pre-2018) — outperformed across both regimes because fundamentals were durable.",
        ],
      },
      {
        kind: "callout",
        tone: "money",
        title: "The realistic personal lesson",
        text: "Don't bet on calling the next big liquidity-driven theme. Most retail can't. Instead: maintain core quality compounders for long-term wealth. Allow some satellite exposure to themes during liquidity environments. When liquidity tightens, your quality core holds up. The themes will fluctuate; quality compounds.",
      },
      {
        kind: "h2",
        text: "When fundamental investors look 'wrong'",
      },
      {
        kind: "p",
        text: "Quality-focused investors look 'wrong' for years during liquidity surges. They underperform speculative stocks. They look conservative. Patience is required.",
      },
      {
        kind: "p",
        text: "Then liquidity reverses. The 2022 small-cap correction in India returned 30-50% of the 2020-21 gains. Quality held up. The 'wrong' fundamental investors looked right again.",
      },
      {
        kind: "p",
        text: "Compounding over decades — not catching every wave — is the realistic retail edge. Recognising that liquidity matters in the short run helps you not panic when quality lags; recognising fundamentals win long-term helps you not chase liquidity-driven manias.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Short-term (1-3 months): liquidity often dominates fundamentals.",
          "Long-term (5-10+ years): fundamentals dominate.",
          "Liquidity-dominated environment: broad index works, even junk rallies; don't fight the tape.",
          "Fundamental-dominated environment: quality outperforms; junk punished.",
          "Realistic retail edge: own quality compounders + don't chase liquidity manias.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which of these is most reliable for long-term wealth compounding?",
        options: [
          "Catching the next liquidity-driven theme",
          "Owning quality compounders with sustained ROE > 18%, durable competitive advantages, and reasonable valuations",
          "Penny stocks",
          "Options trading",
        ],
        correctIndex: 1,
        explanation: "Long-term, fundamentals dominate. Quality compounders deliver consistent returns through regimes. Themes rotate; quality endures.",
      },
      {
        id: "q2",
        prompt: "Why do quality-focused investors often look 'wrong' during liquidity surges?",
        options: [
          "Bad strategy",
          "Speculative and low-quality stocks rally hardest in liquidity surges; quality looks staid by comparison — but the relationship reverses when liquidity tightens",
          "Quality stocks are always wrong",
          "Random",
        ],
        correctIndex: 1,
        explanation: "Junk rallies hard in liquidity surges (cheap money chases anything moving). Quality has lower beta. Patience pays — when liquidity reverses, quality holds while junk corrects sharply.",
      },
    ],
  },
  {
    id: "w13-l06",
    weekId: W,
    order: 6,
    title: "Connecting liquidity to your investment behavior",
    summary: "How to actually use liquidity awareness in portfolio decisions, without becoming reactive.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "Macro liquidity is interesting to read about and easy to obsess over. The question is: how do you actually let it inform decisions without becoming a reactive trader?",
      },
      {
        kind: "h2",
        text: "Three concrete actions liquidity awareness enables",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Don't panic-sell during liquidity-driven sell-offs.** When DXY rallies 3% in a week and global equities sell off, you know it's a liquidity event, not a fundamental crisis for your portfolio. Quality companies you hold are still good. Hold or add.",
          "**Don't FOMO-buy during liquidity surges.** When everything is up, narratives proliferate, and small caps are running 200%, you know it's a liquidity event. Resist chasing. Stick to your strategic allocation.",
          "**Use liquidity inflection points as accumulation windows.** Major Fed pivots (taper announcement, first rate cut, QT ending) tend to precede multi-year liquidity expansions. Use these as moments to deploy cash you've been holding into longer-duration equity exposure.",
        ],
      },
      {
        kind: "h2",
        text: "What NOT to do",
      },
      {
        kind: "list",
        items: [
          "**Don't try to time perfect tops and bottoms** — liquidity inflection points are usually obvious in hindsight, fuzzy in real time",
          "**Don't go to 100% cash on tightening** — being out of equity for years is more damaging than the worst drawdown",
          "**Don't double up on speculative leverage during liquidity surges** — you'll get crushed when the tide turns",
          "**Don't change strategic allocation more than 10-15% based on liquidity** — keep most of your portfolio anchored to long-term goals",
        ],
      },
      {
        kind: "h2",
        text: "The 2020 case study",
      },
      {
        kind: "p",
        text: "When the Fed announced unlimited QE on March 23, 2020, the S&P bottomed within hours. Nifty bottomed the same day in spot, though some sectors took weeks to confirm. This was the textbook liquidity pivot point.",
      },
      {
        kind: "p",
        text: "An investor who recognised this and deployed cash into equity over the next 4-8 weeks captured most of the 18-month bull market that followed (Nifty 7,500 to 18,400 — 145% return). The window was clear in retrospect; less obvious in real time.",
      },
      {
        kind: "h2",
        text: "The 2022 case study",
      },
      {
        kind: "p",
        text: "Fed announced aggressive QT and rate hikes in March 2022. Liquidity tightening was telegraphed. An investor reading the signs in early-mid 2022 could have:",
      },
      {
        kind: "list",
        items: [
          "Trimmed aggressive small-cap exposure",
          "Increased cash buffer modestly (from 5% to 15%)",
          "Increased gold allocation",
          "Stayed put on quality compounders",
        ],
      },
      {
        kind: "p",
        text: "Most retail didn't read the signs and held everything. The drawdown was 12-25% across various equity slices through Q4 2022 / Q1 2023. Recovery came; investors who held came out fine but with anxiety. Investors who tilted got slightly better risk-adjusted outcomes.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "What about 2024-25?",
        text: "Late 2024 readings suggest: Fed pivot is in progress (rate cuts started, QT slowing toward eventual end), DXY range-bound, Indian liquidity strong. Setup is gradually friendly. Tactical tilt: don't reduce equity; consider extending duration in bonds; maintain gold; deploy any cash buffer into long-term positions if you haven't already.",
      },
      {
        kind: "h2",
        text: "The bigger picture",
      },
      {
        kind: "p",
        text: "Liquidity matters but it's one input among many. Your investment outcome over 20 years is mostly determined by:",
      },
      {
        kind: "list",
        items: [
          "Starting early",
          "Saving consistently (SIPs, increasing over time)",
          "Maintaining strategic allocation through cycles",
          "Avoiding panic selling and FOMO buying",
          "Tax-efficient asset location",
          "Lower fees / DIY index approach",
        ],
      },
      {
        kind: "p",
        text: "Liquidity awareness might add 0.5-1.5% per year if executed well. That's meaningful, but the bigger drivers above dominate. Build a strong base; tilt at the margin.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Use liquidity to inform 'don't panic sell' and 'don't FOMO buy' behavior.",
          "Major Fed inflection points (pivots) are accumulation opportunities.",
          "Don't go 100% cash or 100% equity based on liquidity reads.",
          "Tactical tilts: 10-15% of portfolio, not entire portfolio.",
          "Liquidity awareness adds 0.5-1.5% per year potentially; long-term basics (start early, SIP, allocation discipline) matter more.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the most appropriate action during a clear liquidity-driven sell-off (global stress event, DXY rallying, your portfolio down 8%)?",
        options: [
          "Panic-sell all equity",
          "Hold quality positions; consider modest accumulation if cash is available; recognize this is positioning-driven, not fundamental-driven",
          "Go 100% cash",
          "Double up on speculative bets",
        ],
        correctIndex: 1,
        explanation: "Liquidity-driven sell-offs are usually fast and recover quickly when liquidity normalizes. Quality holdings should be held or added to, not panic-sold.",
      },
      {
        id: "q2",
        prompt: "How much of your portfolio should you reposition based on liquidity reads alone?",
        options: [
          "100% — go all-in or all-out",
          "10-15% at most — tactical tilt, not strategic overhaul",
          "0% — never react to macro",
          "50%",
        ],
        correctIndex: 1,
        explanation: "Modest tactical tilts (10-15%) capture most of the benefit while limiting damage from incorrect calls. Larger shifts expose you to catastrophic timing errors.",
      },
    ],
  },
];

export const WEEK_13_LESSONS = lessons;
