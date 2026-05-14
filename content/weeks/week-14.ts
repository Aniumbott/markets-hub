import type { Lesson } from "../types";

const W = 14;

const lessons: Lesson[] = [
  {
    id: "w14-l01",
    weekId: W,
    order: 1,
    title: "The monthly macro calendar — your event playbook",
    summary: "A consolidated view of what happens each month and how to prepare for it.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Markets have a predictable monthly rhythm. By Week 3, you knew the data calendar. After 14 weeks, you have everything to put it together into a personal monthly playbook. Here's the consolidated map.",
      },
      {
        kind: "h2",
        text: "The monthly schedule (typical)",
      },
      {
        kind: "table",
        headers: ["Week of month", "Key events", "Watch for"],
        rows: [
          ["**Week 1**", "ISM Manufacturing PMI (1st), US NFP (first Friday)", "Setting tone for the month; growth pulse"],
          ["**Week 2**", "US CPI (~10-13th), India CPI (12th)", "Inflation prints — biggest of the month"],
          ["**Week 3**", "FOMC meetings (variable); US retail sales; jobless claims", "Central bank decisions and consumer pulse"],
          ["**Week 4**", "PCE inflation (Fed's preferred); GDP releases; quarterly earnings", "Confirming earlier reads + earnings"],
        ],
      },
      {
        kind: "p",
        text: "Plus periodic events: RBI MPC (every 2 months), OPEC+ (every ~6 weeks), Indian budget (annual Feb 1), state elections (variable).",
      },
      {
        kind: "h2",
        text: "Building your personal monthly calendar",
      },
      {
        kind: "p",
        text: "A practical 5-step setup:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Open Google Calendar or any calendar app",
          "Create a separate calendar called 'Macro Events'",
          "Add recurring events for major dates: First Friday NFP, 12th India CPI, 13th US CPI (estimated; actual moves around 10-13th), FOMC quarterly meetings, RBI MPC bi-monthly",
          "Add reminders 1 day before for Tier 1 events",
          "Schedule a recurring 30-min 'monthly macro review' on the 1st of each month",
        ],
      },
      {
        kind: "h2",
        text: "The pre-event routine",
      },
      {
        kind: "p",
        text: "Day before a Tier 1 event:",
      },
      {
        kind: "list",
        items: [
          "Check market consensus / expectations",
          "Note current positioning (your portfolio + market positioning indicators like VIX, COT data)",
          "Mentally rehearse: 'if hawkish surprise, expected reaction is X; if dovish surprise, expected reaction is Y'",
        ],
      },
      {
        kind: "p",
        text: "During the event:",
      },
      {
        kind: "list",
        items: [
          "Note the actual print vs consensus",
          "Watch DXY/US 10Y/gold reaction within 30 seconds — they tell you the dominant interpretation",
          "Don't trade in the first 5 minutes — wait for the initial chaos to settle",
        ],
      },
      {
        kind: "p",
        text: "Day after:",
      },
      {
        kind: "list",
        items: [
          "Note Indian market reaction (if event was outside Indian hours)",
          "Update your monthly journal with key observations",
          "Adjust quadrant view if the data changes your read materially",
        ],
      },
      {
        kind: "h2",
        text: "Indian-specific event calendar",
      },
      {
        kind: "list",
        items: [
          "**Indian quarterly results season** (mid-Jul, mid-Oct, mid-Jan, mid-Apr) — 6 weeks each",
          "**Indian Budget** — February 1, 11 AM IST",
          "**Indian state elections** — variable, but key state elections (Maharashtra, Gujarat, Uttar Pradesh) move markets",
          "**RBI MPC** — bi-monthly, usually Fridays 10 AM IST",
          "**India CPI / IIP** — monthly mid-month",
          "**FII/DII flows** — daily ~6:30 PM IST",
          "**Indian PMI** — first business day, monthly",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The 'event muscle memory' build",
        text: "After 6-12 months of consistent monthly review, you'll start feeling the rhythm. You'll instinctively know what's coming next week, what the consensus expects, and what kind of reaction would surprise. This intuition is invaluable — and impossible to shortcut.",
      },
      {
        kind: "h2",
        text: "When to expect volatility",
      },
      {
        kind: "p",
        text: "Most Tier 1 events produce intraday volatility:",
      },
      {
        kind: "list",
        items: [
          "NFP Friday: US markets volatile 5 minutes after release; Indian markets feel it the next session",
          "FOMC Wednesday: US markets volatile from 11:30 PM IST until next morning",
          "Indian Budget day: most volatile day of the Indian calendar — VIX can spike 50%+",
          "Indian RBI MPC: morning of the announcement (10 AM IST)",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Markets follow a monthly rhythm — week 1 PMI/NFP, week 2 CPI, week 3 FOMC, week 4 earnings + PCE.",
          "Build a personal macro events calendar with Tier 1 events.",
          "Pre-event: check consensus and rehearse scenarios. During: watch DXY first. After: journal observations.",
          "Indian additions: quarterly results, Budget Day, RBI MPC, state elections, daily FII/DII flow.",
          "After 6-12 months, you develop instinctive event-rhythm intuition.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which is the typical biggest scheduled monthly macro event by market impact?",
        options: [
          "Indian GDP",
          "US CPI release (around 10-13th of each month, 6 PM IST)",
          "OPEC compliance reports",
          "Indian quarterly earnings",
        ],
        correctIndex: 1,
        explanation: "US CPI moves every major asset class globally within seconds. It's the most-watched monthly economic release.",
      },
      {
        id: "q2",
        prompt: "What's the right post-event behavior for a retail investor on a Tier 1 release day?",
        options: [
          "Trade aggressively in the first 5 minutes",
          "Watch initial reaction (especially DXY); don't trade for 30+ minutes; journal observations for pattern recognition",
          "Sell everything",
          "Buy everything",
        ],
        correctIndex: 1,
        explanation: "Initial post-event price action is chaotic and often reverses. Patience + journaling builds pattern recognition without exposing you to whipsaw losses.",
      },
    ],
  },
  {
    id: "w14-l02",
    weekId: W,
    order: 2,
    title: "Pre-event positioning vs reactive trading",
    summary: "Why most retail loses money trying to trade events. The difference between informed positioning and reaction.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Most retail loses money on macro events. They see news, react with emotion, trade poorly. Professional traders rarely 'trade events' — they position before events and absorb the volatility.",
      },
      {
        kind: "h2",
        text: "The four common retail traps",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Buying the rally during/right after good news** — by the time you see it, the move is mostly done. The first 10 seconds of reaction captures 70% of the daily move on Tier 1 events.",
          "**Panic-selling during/right after bad news** — same problem, opposite direction. Volatility resolves faster than you think.",
          "**Pre-event tactical trading without an edge** — taking risk based on guesses about the print, with no statistical edge",
          "**Holding into known volatility events with too much leverage** — F&O traders holding through FOMC night and getting wiped out",
        ],
      },
      {
        kind: "h2",
        text: "The 'positioned vs reactive' frame",
      },
      {
        kind: "p",
        text: "Positioned: you've decided based on multi-month analysis what your portfolio should look like. You're holding through events. Volatility is noise, not signal.",
      },
      {
        kind: "p",
        text: "Reactive: you trade based on each news headline. Every event is a 'signal' you must act on. You're constantly anxious.",
      },
      {
        kind: "p",
        text: "Position > React in nearly every scenario for retail.",
      },
      {
        kind: "h2",
        text: "Examples of healthy positioning",
      },
      {
        kind: "list",
        items: [
          "Holding long-duration bonds going into a Fed cut cycle — bond prices rise, you benefit, no trading required",
          "Holding gold during geopolitical tensions — flat or up on bad news, no need to trade headlines",
          "Holding quality compounders through quarterly earnings — short-term swings, long-term wealth",
          "Holding international equity during INR weakness episodes — currency gain offsets local INR volatility",
        ],
      },
      {
        kind: "h2",
        text: "Examples of harmful reactive trading",
      },
      {
        kind: "list",
        items: [
          "Selling everything after a single bad CPI print 'because inflation is back'",
          "Doubling F&O positions on news momentum without risk control",
          "Switching mutual funds every month based on returns",
          "Chasing the sector that ran 30% last month",
        ],
      },
      {
        kind: "analogy",
        title: "The drivers and the navigators",
        text: "Some drivers in Mumbai traffic look at the immediate car in front of them — they react to every brake light. Other drivers look 3-4 cars ahead and anticipate. Reactive trading is the brake-light driver. Positioned investing is the look-ahead driver. The look-ahead driver gets to the destination faster, with less stress, with fewer fender-benders.",
      },
      {
        kind: "h2",
        text: "When events ARE worth trading",
      },
      {
        kind: "p",
        text: "Some retail can profitably trade specific events with discipline:",
      },
      {
        kind: "list",
        items: [
          "**Earnings reactions on quality names** — buy quality companies that gap down after slight misses (the market often overreacts to short-term metrics on otherwise great businesses)",
          "**Sector rotations on regime shifts** — buying banks at start of a rate-cut cycle, selling them at the end",
          "**Currency hedges around major elections** — buying gold or USD-linked assets before known political event windows",
        ],
      },
      {
        kind: "p",
        text: "But these are exceptions, not the rule. And they require multi-year experience to execute well.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The Buffett rule",
        text: "Buffett famously said his ideal holding period is forever. The point isn't never selling — it's that you should buy positions you'd hold through every news event, every quarterly miss, every macro shock. If a position requires constant tending to feel safe, you've sized it wrong or chosen the wrong asset.",
      },
      {
        kind: "h2",
        text: "Practical guidelines",
      },
      {
        kind: "list",
        items: [
          "Make portfolio decisions on monthly cadence, not daily news",
          "Set SIPs and forget them; they auto-buy through volatility",
          "Maintain quality core that you'd hold through any single event",
          "Use macro events to refine your read of the regime, not to trade tactically",
          "If you must trade events, paper-trade for 3 months first to test your discipline",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Most retail loses money trying to trade macro events.",
          "Positioned > Reactive — make portfolio decisions on multi-month thinking, hold through events.",
          "Initial 30-second reaction captures most of an event's daily move — by the time retail acts, it's done.",
          "Events worth trading require multi-year experience and specific edge.",
          "Build portfolios you'd hold through any single news cycle.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does most retail lose money trying to trade Tier 1 macro events?",
        options: [
          "Random bad luck",
          "Initial 30-second reaction captures 70%+ of the daily move; retail acts after seeing the news, by which time the trade is already done; emotion-driven sizing amplifies losses",
          "TV anchors mislead them",
          "Trading is illegal",
        ],
        correctIndex: 1,
        explanation: "By the time retail processes news and clicks, the price has already moved. Plus, panic/euphoria leads to bad position sizing. The structural disadvantage is severe.",
      },
      {
        id: "q2",
        prompt: "What's the Warren Buffett-style approach to event-driven volatility?",
        options: [
          "Trade every event",
          "Build a portfolio you'd hold through every event — quality companies that compound regardless of news cycles",
          "Sell before every event",
          "Ignore all markets",
        ],
        correctIndex: 1,
        explanation: "Buffett's approach: own businesses you'd hold forever. Then events become irrelevant to your decisions. Volatility is opportunity, not problem.",
      },
    ],
  },
  {
    id: "w14-l03",
    weekId: W,
    order: 3,
    title: "Earnings season tactics",
    summary: "How to use quarterly results for portfolio decisions without falling into the trading trap.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Indian earnings season happens four times a year. For investors, it's a tactical info-rich period. For traders, it's a high-volatility minefield. Understanding the structure helps you extract signal without paying high volatility costs.",
      },
      {
        kind: "h2",
        text: "The Indian earnings calendar",
      },
      {
        kind: "list",
        items: [
          "**Q1 results (Apr-Jun period)** — released mid-July to August. TCS usually first major print.",
          "**Q2 results (Jul-Sep period)** — released mid-October to November.",
          "**Q3 results (Oct-Dec period)** — released mid-January to February.",
          "**Q4 + annual results (Jan-Mar period)** — released mid-April to mid-May.",
        ],
      },
      {
        kind: "h2",
        text: "What to read",
      },
      {
        kind: "p",
        text: "Indian companies typically release: a 2-3 page press release with key numbers, a 20-30 page investor presentation, a board statement, and increasingly an earnings call recording.",
      },
      {
        kind: "p",
        text: "Priority order for a 20-minute review:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Headline numbers** (5 min) — revenue, EBITDA, PAT, EPS vs same quarter last year",
          "**The watched metric for the sector** (3 min) — for banks: NIM, loan growth, GNPA. For IT: USD revenue growth, attrition, deal wins. For consumer: volume growth, gross margin.",
          "**Management commentary section** (7 min) — guidance, business mix, risks. Compare tone vs last quarter.",
          "**One specific risk or concern** (3 min) — what surprised analysts? Read 2-3 quick analyst reactions.",
          "**Stock reaction** (2 min) — note where the stock went, ask if it makes sense relative to the print",
        ],
      },
      {
        kind: "h2",
        text: "The bellwether prints to watch",
      },
      {
        kind: "p",
        text: "These set the tone for entire sectors:",
      },
      {
        kind: "table",
        headers: ["Sector", "Bellwether companies"],
        rows: [
          ["**IT services**", "TCS (first), Infosys (second day), then Wipro, HCL, Tech Mahindra"],
          ["**Private banks**", "HDFC Bank, ICICI Bank (sets tone for Axis, Kotak)"],
          ["**FMCG**", "HUL, ITC, Nestle India, Britannia, Dabur"],
          ["**Auto**", "Maruti, Bajaj Auto, Mahindra"],
          ["**Pharma**", "Sun Pharma, Dr Reddy's"],
          ["**Capital goods/infra**", "L&T, Bharat Electronics"],
          ["**Energy/refining**", "Reliance Industries, ONGC, IOC"],
        ],
      },
      {
        kind: "h2",
        text: "The 'beat / miss' game",
      },
      {
        kind: "p",
        text: "Markets care about results vs consensus expectations, not just absolute numbers. A 30% PAT growth might be 'a miss' if consensus expected 35%. A 12% PAT growth might be 'a beat' if expectation was 8%.",
      },
      {
        kind: "p",
        text: "Consensus numbers are tracked by Bloomberg, Reuters, and Indian aggregators like Trendlyne. Free retail-accessible sources: Trendlyne, Tijori, and Money Control 'estimates vs actual' pages.",
      },
      {
        kind: "h2",
        text: "How quality stocks react to misses",
      },
      {
        kind: "p",
        text: "Sometimes quality stocks drop materially on small misses. The HDFC Bank Q1 FY24 example (Week 1) — 6% drop on NIM compression despite 30% PAT growth.",
      },
      {
        kind: "p",
        text: "How to think about these:",
      },
      {
        kind: "list",
        items: [
          "**Quality + temporary miss = often an opportunity** — if the fundamental story is intact, the drop creates a better entry. Watch for stabilization before adding.",
          "**Quality + structural miss = caution** — if the watched metric is permanently impaired, don't 'buy the dip'. Re-evaluate the thesis.",
          "**Junk + miss = avoid** — even cheaper junk is still junk",
        ],
      },
      {
        kind: "h2",
        text: "Pre and post earnings windows",
      },
      {
        kind: "p",
        text: "Two windows have predictable patterns:",
      },
      {
        kind: "list",
        items: [
          "**2 weeks before earnings**: drift in direction of expectation. Stocks rated 'buy' often drift higher; downgraded names drift lower.",
          "**5 sessions after earnings**: continuation. Stocks that gap up tend to grind higher for a week; gap downs see follow-through selling.",
        ],
      },
      {
        kind: "p",
        text: "These patterns aren't reliable enough to trade systematically as retail, but they explain why the market often 'pre-positions' for earnings.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The retail earnings approach",
        text: "Don't try to trade earnings. Instead: track the bellwethers (TCS, HDFC Bank, Reliance, ITC). Read their management commentary. Note tone changes vs last quarter. These build your understanding of which way sectors are leaning. Decisions stay slow — multi-month tilts, not earnings-day reactions.",
      },
      {
        kind: "h2",
        text: "Long-term earnings tracking",
      },
      {
        kind: "p",
        text: "Over years, watching the same handful of bellwether prints builds powerful intuition. You learn:",
      },
      {
        kind: "list",
        items: [
          "What 'good' looks like for each sector",
          "When management starts hinting at issues 1-2 quarters before the issue becomes visible",
          "How earnings translate to stock moves (not always linear)",
          "Where you'd rather own quality at a high P/E than junk at a low P/E",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Indian earnings season is 4x year, ~6 weeks each.",
          "Bellwethers (TCS, HDFC Bank, Reliance, etc.) set sector tone.",
          "Watched metric per sector matters more than headline numbers.",
          "Quality + temporary miss = often an opportunity; quality + structural miss = caution.",
          "Build long-term sector intuition by tracking bellwether prints over years.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the watched metric for an Indian bank's quarterly print that matters more than the headline PAT growth?",
        options: [
          "Marketing spend",
          "Net Interest Margin (NIM) — directly drives forward earnings trajectory and is the most-tracked profitability driver for banks",
          "Number of branches",
          "Employee count",
        ],
        correctIndex: 1,
        explanation: "NIM is the key bank profitability metric. A NIM miss matters more than a headline PAT beat. HDFC Bank Q1 FY24 dropped 6% on this dynamic despite 30% PAT growth.",
      },
      {
        id: "q2",
        prompt: "When a quality compounder drops 10% on a small earnings miss, what's the typical strategic response?",
        options: [
          "Sell more — it's broken",
          "Investigate whether the miss is temporary (often an opportunity to add) vs structural (re-evaluate thesis)",
          "Always panic-sell",
          "Always buy more",
        ],
        correctIndex: 1,
        explanation: "Quality compounders often have temporary blip quarters. The job is to assess whether the issue is one-off (margin pressure that will normalize) vs structural (lost competitive advantage). Investigation > reflex action.",
      },
    ],
  },
  {
    id: "w14-l04",
    weekId: W,
    order: 4,
    title: "Indian Budget day — your most volatile single date",
    summary: "February 1 in India is the most volatile single market day. How to read Budget commentary and what to ignore.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "February 1 is the most volatile day on the Indian market calendar. The Union Budget is presented at 11 AM. By close, every sector has moved on policy announcements. India VIX often spikes 50%+ intraday.",
      },
      {
        kind: "h2",
        text: "What the Budget contains",
      },
      {
        kind: "list",
        items: [
          "**Fiscal deficit target** — government's net borrowing for the year. Lower target = market positive (smaller bond issuance).",
          "**Capex allocations** — infrastructure, defense, railways spending. Higher = beneficiaries (L&T, BEL, IRCTC, etc.) rally.",
          "**Tax changes** — LTCG, STCG, STT, slabs. Direct impact on market structure.",
          "**Sectoral incentives** — PLI schemes, subsidies, duties. Specific sector winners and losers.",
          "**Disinvestment plans** — government stake sales. Major LIC, IDBI Bank etc. announcements move those stocks.",
          "**Subsidy and welfare spending** — PM Kisan, agriculture allocations. Affects rural consumption stocks.",
        ],
      },
      {
        kind: "h2",
        text: "The Budget 2024 example",
      },
      {
        kind: "p",
        text: "February 2024 Union Budget had several market-moving items:",
      },
      {
        kind: "list",
        items: [
          "Fiscal deficit revised down — bond yields fell sharply (rally for bonds)",
          "STCG raised from 15% to 20%, LTCG from 10% to 12.5% — initial sell-off",
          "STT on options hiked materially — F&O activity hit",
          "Infrastructure capex maintained at high levels — capex names continued running",
          "Long-term capital gains indexation removed on real estate — real estate stocks dropped initially",
        ],
      },
      {
        kind: "p",
        text: "Nifty had a 3% intraday range on Budget day. The post-Budget weeks saw various sectors digest the announcements.",
      },
      {
        kind: "h2",
        text: "How to actually engage with the Budget",
      },
      {
        kind: "p",
        text: "Practical workflow:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**1-2 weeks before**: Read pre-Budget expectations and 'wish lists' from industry. Helps you understand consensus expectations.",
          "**Budget day morning (10:30-11 AM)**: Have a news source open. Don't pre-place trades.",
          "**During the speech (11 AM - 1 PM)**: Watch sector indices in real time. Note immediate reactions.",
          "**Afternoon (1 PM - 3:30 PM)**: Markets often digest and reverse initial reactions. Don't trade in the first 30 minutes post-speech — initial moves often whipsaw.",
          "**Evening**: Read 2-3 broker analyses. Match what brokers identified as winners/losers to what you observed.",
          "**1-2 weeks after**: Re-evaluate any portfolio positions affected by significant policy changes (sectoral incentives, tax changes).",
        ],
      },
      {
        kind: "h2",
        text: "What to ignore",
      },
      {
        kind: "list",
        items: [
          "**Headline numbers without context** — 'capex increased 11%' is meaningless without knowing the base and what's actually new",
          "**TV anchors' hot takes during the speech** — emotional reactions, often wrong",
          "**Penny stocks rallying on rumored beneficiary status** — junk doesn't become quality because of a budget line item",
          "**Day-trader Telegram groups claiming inside info** — illegal and unreliable",
        ],
      },
      {
        kind: "h2",
        text: "What deserves attention",
      },
      {
        kind: "list",
        items: [
          "**Fiscal deficit and bond yield reaction** — clear barometer of fiscal discipline",
          "**Tax structure changes** — affects everyone with capital gains exposure",
          "**Capex announcements with named projects** — beneficiaries become clearer over weeks",
          "**Sectoral incentives with implementation timelines** — multi-year tailwinds",
          "**Direct tax slab changes** — affects consumption and rural demand",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Don't take Budget Day positions",
        text: "F&O positions on Budget Day are extremely high-risk. Implied volatility is already priced higher than usual. Direction can be wildly wrong. Most retail F&O traders lose money on Budget Day specifically.",
      },
      {
        kind: "h2",
        text: "Stocks to watch each Budget",
      },
      {
        kind: "list",
        items: [
          "**L&T, BEL, HAL, Bharat Forge, Kalyani Strategic Industries** — defense and infra beneficiaries",
          "**LIC, NPS-linked names** — long-term policy themes",
          "**Real estate (DLF, Godrej Properties)** — affected by tax structure changes",
          "**Affordable housing (Aavas, Aptus)** — beneficiaries of housing schemes",
          "**Rural / agri (Mahindra & Mahindra, Dabur, Hero MotoCorp)** — affected by farm subsidies and PM Kisan",
          "**Health and education** — depending on allocations",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Indian Budget on February 1 is the most volatile single market day.",
          "Key items: fiscal deficit, capex, tax structure, sectoral incentives, subsidies.",
          "Don't trade during the speech; let the dust settle 30+ minutes post-event.",
          "Major policy changes warrant portfolio re-evaluation; ignore noise from penny stocks.",
          "F&O positions on Budget Day are high-risk and not recommended for retail.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the typical market reaction to a fiscal deficit target that's lower than expectations?",
        options: [
          "Negative — government spending less",
          "Positive for bonds (lower issuance pressure) and risk-on for equities (fiscal discipline signal)",
          "Neutral",
          "Markets crash",
        ],
        correctIndex: 1,
        explanation: "Lower fiscal deficit = less government borrowing = supply relief on bond market = lower yields = supportive for equity multiples and risk appetite overall.",
      },
      {
        id: "q2",
        prompt: "Should retail investors trade aggressively during the Budget speech (11 AM - 1 PM)?",
        options: [
          "Yes — make easy money",
          "No — initial moves often whipsaw, F&O implied vol is high, retail typically loses money on this day specifically",
          "Yes but only F&O",
          "Only with margin",
        ],
        correctIndex: 1,
        explanation: "Budget Day is high volatility, high implied vol, and high reversal risk. Retail trading is heavily disadvantaged. Let dust settle 30-60 min post-event before any decisions.",
      },
    ],
  },
  {
    id: "w14-l05",
    weekId: W,
    order: 5,
    title: "Geopolitical shocks — Russia, Israel, Taiwan",
    summary: "Unpredictable but high-impact. How geopolitical events affect markets and how to think about them.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Geopolitical events are markets' wild cards. By definition unpredictable. High impact when they happen. The Russia-Ukraine war (Feb 2022), Israel-Hamas (Oct 2023), and Taiwan-China tensions are recent examples shaping markets. Here's how to think about them.",
      },
      {
        kind: "h2",
        text: "The classic geopolitical playbook",
      },
      {
        kind: "p",
        text: "When a major geopolitical event hits:",
      },
      {
        kind: "list",
        items: [
          "**Oil spikes** (often immediately) — concerns about supply disruption",
          "**Gold rallies** (haven bid)",
          "**Dollar strengthens** (DXY haven bid) — sometimes",
          "**Bonds rally** (yields fall, haven bid)",
          "**Equities sell off, especially EMs**",
          "**India VIX and global VIX spike**",
          "**Defense and energy stocks rally**",
        ],
      },
      {
        kind: "p",
        text: "The reaction is usually fast (hours to days) and tends to fade as initial panic settles and the market processes whether the event will actually disrupt the global economy.",
      },
      {
        kind: "h2",
        text: "Russia-Ukraine February 2022",
      },
      {
        kind: "p",
        text: "Russia invaded Ukraine on February 24, 2022. Market reaction:",
      },
      {
        kind: "list",
        items: [
          "Brent crude spiked from $94 to $130 in two weeks",
          "Wheat (Russia + Ukraine are major suppliers) surged 50%+",
          "European gas crisis began (Nord Stream sabotage later)",
          "Global equities sold off 5-10% in initial days",
          "Nifty dropped from ~17,500 to 15,700 in 6 weeks",
          "Russian assets froze (sanctions); rouble crashed initially, recovered later",
          "Gold rallied from $1,850 to $2,070",
        ],
      },
      {
        kind: "p",
        text: "Indian implications: Russian crude purchases at discount (covered in Week 7), Indian wheat exports surged temporarily, RBI defended INR, Nifty recovered by mid-2022 as inflation became the dominant story.",
      },
      {
        kind: "h2",
        text: "Israel-Hamas October 2023",
      },
      {
        kind: "p",
        text: "October 7, 2023 attack triggered Israeli response. Subsequent escalation to Houthi attacks on Red Sea shipping (early 2024) and direct Iran-Israel exchanges (April 2024).",
      },
      {
        kind: "list",
        items: [
          "Initial oil spike was muted (~5%); markets quickly priced limited supply disruption",
          "Gold rallied from $1,850 to $2,400 over 6 months",
          "Defense stocks rallied globally",
          "Indian markets relatively resilient (Indian oil supply from Russia/Saudi still secured)",
          "Red Sea shipping rerouting added ~$300/container freight costs globally",
        ],
      },
      {
        kind: "h2",
        text: "The Taiwan question",
      },
      {
        kind: "p",
        text: "Taiwan is China's most likely future flashpoint. Taiwan Semiconductor (TSMC) produces ~90% of global advanced chips. A Taiwan conflict would massively disrupt:",
      },
      {
        kind: "list",
        items: [
          "Global tech supply chains (no advanced chips = no Nvidia GPUs, no advanced iPhones)",
          "Global trade (Taiwan-China tensions affect entire Pacific shipping)",
          "US-China relations (would trigger broad de-coupling)",
          "Indian markets indirectly via Mag 7 dependence on TSMC",
        ],
      },
      {
        kind: "p",
        text: "Markets currently price this at low probability for the immediate term. But it's the biggest tail risk in global geopolitics. Worth being aware of.",
      },
      {
        kind: "analogy",
        title: "The earthquake on the other side of the world",
        text: "Geopolitical shocks are like earthquakes — you can study fault lines (geopolitical pressure points), measure tension, build risk awareness — but you can't predict the exact moment of rupture. The right approach: build a portfolio robust to multiple scenarios, with some tail-risk hedges (gold, defensive exposure), rather than trying to time specific events.",
      },
      {
        kind: "h2",
        text: "How to position for geopolitical tail risk",
      },
      {
        kind: "list",
        items: [
          "**Maintain a 5-10% gold allocation** — most reliable single hedge for geopolitical shocks",
          "**Don't over-leverage** — geopolitical events often coincide with margin call cascades",
          "**Have a cash buffer** — 5-10% of portfolio in liquid/cash. Lets you add on geopolitical-driven drawdowns at better prices.",
          "**Geographic diversification** — Indian + International equity reduces single-country political risk",
          "**Watch defense stocks as a barometer** — sustained outperformance signals rising geopolitical premium",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "What NOT to do during geopolitical shocks",
        text: "Don't trade the news — initial reactions often reverse. Don't sell everything — geopolitical sell-offs frequently recover within weeks. Don't try to predict 'next big event' — you can't. Don't overweight a single defense stock based on a war narrative — diversify.",
      },
      {
        kind: "h2",
        text: "Indian context",
      },
      {
        kind: "p",
        text: "India's specific geopolitical risks:",
      },
      {
        kind: "list",
        items: [
          "**Pakistan border tensions** — periodic, sometimes affect markets briefly",
          "**China border tensions** (Galwan 2020 example) — limited market impact historically",
          "**Sri Lanka, Bangladesh political instability** — regional but limited impact",
          "**Middle East shipping disruption** — affects oil imports and exports",
          "**Russian sanctions impact** — affected Indian-Russian trade but ultimately benefited via cheap oil",
        ],
      },
      {
        kind: "p",
        text: "India is geographically distant from most current major flashpoints. The biggest geopolitical risk to Indian portfolios is via the global oil and trade channels — not direct conflict.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Geopolitical events are unpredictable, high-impact wild cards.",
          "Classic playbook: oil up, gold up, dollar up (sometimes), bonds up, equities down, vol up.",
          "Recent examples: Russia-Ukraine 2022 (major impact), Israel-Hamas (moderate), Taiwan question (biggest tail risk).",
          "Hedge with 5-10% gold; maintain cash buffer; don't over-leverage.",
          "India is geographically resilient but exposed via global oil and trade channels.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's typically the cleanest single asset hedge for unforeseen geopolitical events?",
        options: [
          "Cash only",
          "Gold — historically the cleanest geopolitical hedge, rallies on shocks and provides currency diversification",
          "Bitcoin",
          "Bonds only",
        ],
        correctIndex: 1,
        explanation: "Gold has historically been the most reliable single hedge for geopolitical shocks. Currency diversification, safe-haven appeal, and crisis insurance properties combine.",
      },
      {
        id: "q2",
        prompt: "Why is the Taiwan question considered the largest tail risk in global geopolitics?",
        options: [
          "Taiwan is large",
          "Taiwan Semiconductor produces ~90% of advanced chips globally; conflict would massively disrupt global tech supply chains, US-China relations, and global trade",
          "Geographic proximity",
          "Population size",
        ],
        correctIndex: 1,
        explanation: "TSMC's central role in advanced chip manufacturing means a Taiwan conflict would have second-order effects on Mag 7, AI capex, global tech, and broader US-China trade dynamics.",
      },
    ],
  },
  {
    id: "w14-l06",
    weekId: W,
    order: 6,
    title: "Building your personal alert system",
    summary: "Practical apps, channels, and frequencies for staying informed without becoming overwhelmed.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "Information overload is real. The goal isn't to know everything — it's to know what matters reliably. Here's a practical setup for a working Indian investor.",
      },
      {
        kind: "h2",
        text: "The minimal essential daily setup",
      },
      {
        kind: "list",
        items: [
          "**Morning (5 minutes)**: TradingView macro dashboard — check overnight US close + DXY + Brent + key Asian moves",
          "**Evening (3 minutes)**: Note Nifty close, FII/DII flow numbers, any major news of the day",
          "**Total time commitment**: 10 minutes per trading day",
        ],
      },
      {
        kind: "h2",
        text: "Optional moderate setup",
      },
      {
        kind: "list",
        items: [
          "**Daily**: above + read 1-2 short articles from Money Control or Mint front page",
          "**Weekly**: 30-min Sunday review — week's macro events, portfolio status, journal entry",
          "**Monthly**: 30-min macro review — quadrant scorecard update, allocation drift check",
          "**Total time**: 30-40 minutes daily; 1 hour weekly",
        ],
      },
      {
        kind: "h2",
        text: "Apps worth installing",
      },
      {
        kind: "list",
        items: [
          "**TradingView** (free) — best charting and intermarket dashboard",
          "**Investing.com** — economic calendar and news",
          "**Money Control** — Indian-specific markets news",
          "**Trendlyne** — Indian fundamentals and screener",
          "**Screener.in** — Indian financial data",
          "**Bloomberg / Reuters (free articles)** — global financial news",
        ],
      },
      {
        kind: "h2",
        text: "Apps to AVOID",
      },
      {
        kind: "list",
        items: [
          "**Stock-tip Telegram groups** — almost universally scams or unreliable hype",
          "**TV business news during market hours** — anxiety-inducing, not useful",
          "**'Real-time' chat rooms** — noise, not signal",
          "**Apps with constant push notifications** — fragments attention; disable notifications",
        ],
      },
      {
        kind: "h2",
        text: "Setting smart alerts",
      },
      {
        kind: "p",
        text: "Most apps let you set price/event alerts. Useful but easy to over-do. Recommended alerts:",
      },
      {
        kind: "list",
        items: [
          "Nifty drops 2%+ in a day (rare; signals worth-checking event)",
          "USD/INR moves 1%+ in a day (rare; signals macro stress)",
          "India VIX spikes above 20 (stress signal)",
          "Your specific stock holdings move 5%+ in a day",
        ],
      },
      {
        kind: "p",
        text: "Avoid alerting on every macro release — you'll be overwhelmed. Better: set a daily review at consistent times.",
      },
      {
        kind: "h2",
        text: "Information diet for different life stages",
      },
      {
        kind: "table",
        headers: ["Stage", "Recommended commitment"],
        rows: [
          ["Beginner (year 1)", "10-20 min/day learning + journaling. Heavy on books and platform like this."],
          ["Building intuition (years 2-3)", "20-30 min/day. Active dashboard checking, monthly reviews."],
          ["Practitioner (years 3+)", "15-20 min/day for maintenance. Less is more once intuition is built."],
          ["Retired / passive", "Monthly check is enough. SIPs running, broad allocation discipline."],
        ],
      },
      {
        kind: "h2",
        text: "What expert investors do less of",
      },
      {
        kind: "p",
        text: "Experienced retail investors have learned to do less of:",
      },
      {
        kind: "list",
        items: [
          "TV business news (especially during market hours)",
          "Telegram groups, WhatsApp tips, Twitter financial drama",
          "Daily stock price checking of individual holdings",
          "Predicting top/bottom timing",
          "Reading every quarterly result of every holding",
        ],
      },
      {
        kind: "p",
        text: "And more of:",
      },
      {
        kind: "list",
        items: [
          "Reading long-form quality writing (books, in-depth articles)",
          "Quiet reflection / journaling",
          "Reviewing their own decisions historically",
          "Studying past cycles (Bharat Forge through 2008-2018, HDFC Bank long-term)",
          "Talking to operators in specific industries rather than analysts",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The 'less is more' paradox",
        text: "Counterintuitively, investors who pay attention LESS often perform better. Constant attention leads to constant reaction. Quarterly reviews are usually enough for portfolio decisions. The skill isn't knowing every move — it's knowing which moves matter.",
      },
      {
        kind: "h2",
        text: "Building a sustainable practice",
      },
      {
        kind: "p",
        text: "After 16 weeks of this curriculum, your goal is a sustainable practice you maintain for 20+ years. The traits of a sustainable practice:",
      },
      {
        kind: "list",
        items: [
          "Time commitment fits your real life (15-30 min/day max for active phase)",
          "Decision frequency matches your information depth (monthly decisions for monthly data)",
          "Less anxiety, more clarity",
          "Annual rebalancing without emotional drama",
          "Comfort with not having every answer",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Daily minimum: 10 min — morning dashboard + evening close review.",
          "Moderate: 30-40 min daily + 1 hour weekly review + monthly macro review.",
          "Essential apps: TradingView, Investing.com, Money Control, Trendlyne.",
          "Avoid: Telegram tip groups, TV during market hours, constant push notifications.",
          "Build a practice you can sustain for decades; less attention often = better outcomes.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the minimum daily time commitment to maintain useful market awareness as a working professional?",
        options: [
          "2-3 hours minimum",
          "Around 10 minutes — morning macro check + evening close review is sufficient",
          "1 hour minimum",
          "Continuous attention",
        ],
        correctIndex: 1,
        explanation: "10 minutes daily — 5 min morning dashboard, 3 min evening close. Sufficient for portfolio awareness without anxiety. More time doesn't proportionally improve outcomes.",
      },
      {
        id: "q2",
        prompt: "What information habit do most experienced retail investors consciously reduce?",
        options: [
          "Reading books",
          "TV business news during market hours, Telegram tip groups, constant stock price checking — high-noise low-signal sources that create anxiety without aiding decisions",
          "Studying balance sheets",
          "All news",
        ],
        correctIndex: 1,
        explanation: "Experienced investors filter aggressively toward signal-rich slow content (books, in-depth analysis) and away from noise-heavy real-time content (TV, social media, tip groups).",
      },
    ],
  },
];

export const WEEK_14_LESSONS = lessons;
