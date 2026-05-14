import type { Lesson } from "../types";

const W = 12;

const lessons: Lesson[] = [
  {
    id: "w12-l01",
    weekId: W,
    order: 1,
    title: "Growth vs inflation — the two macro axes",
    summary: "Every macro environment can be described by where it sits on these two axes. The combination defines the regime.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "There are dozens of macro variables — GDP, inflation, unemployment, currency, sentiment. To make decisions, professional macro investors simplify to two: growth (rising or falling) and inflation (rising or falling). Everything else is downstream.",
      },
      {
        kind: "h2",
        text: "The two-axis framework",
      },
      {
        kind: "p",
        text: "Growth (vertical axis): Is the economy accelerating or decelerating? Markets care about the change in growth more than the level. A weak economy improving from -2% to +1% can be more bullish than a strong economy slowing from 5% to 3%.",
      },
      {
        kind: "p",
        text: "Inflation (horizontal axis): Is inflation rising or falling? Again, change matters more than level. Disinflation (inflation falling) is a different environment from low-and-stable inflation, even if the absolute number is similar.",
      },
      {
        kind: "h2",
        text: "The four quadrants",
      },
      {
        kind: "p",
        text: "{{four-quadrants|Four quadrants}} emerge from combining the two axes:",
      },
      {
        kind: "table",
        headers: ["Quadrant", "Growth", "Inflation", "Macro name"],
        rows: [
          ["Q1", "↑ Rising", "↓ Falling", "**Goldilocks** — best of all worlds"],
          ["Q2", "↑ Rising", "↑ Rising", "**Reflation / overheating**"],
          ["Q3", "↓ Falling", "↓ Falling", "**Disinflation / slowdown**"],
          ["Q4", "↓ Falling", "↑ Rising", "**Stagflation** — nightmare"],
        ],
      },
      {
        kind: "h2",
        text: "Identifying the current quadrant",
      },
      {
        kind: "p",
        text: "Indicators for each axis:",
      },
      {
        kind: "list",
        items: [
          "**Growth direction**: PMI (manufacturing, services), GDP nowcasts, employment trends, retail sales, corporate earnings revisions",
          "**Inflation direction**: CPI (headline + core), PPI, wage growth, breakeven inflation rates, commodity prices",
        ],
      },
      {
        kind: "p",
        text: "Tip: don't try to define quadrants in real time precisely — focus on direction. PMI trending down + core CPI trending down = Q3 (disinflation/slowdown). PMI trending up + CPI trending up = Q2 (reflation).",
      },
      {
        kind: "h2",
        text: "Why this matters more than levels",
      },
      {
        kind: "p",
        text: "Inflation at 4% with falling trend (toward 2%) is a bullish disinflation environment. Inflation at 2.5% with rising trend (toward 4%) is a bearish reflation/inflation environment. Same level (~3%) but completely different market implication.",
      },
      {
        kind: "p",
        text: "Markets price the direction of change, not the level. That's why the same CPI print can trigger different reactions depending on what comes before it.",
      },
      {
        kind: "analogy",
        title: "Like reading a thermometer",
        text: "37°C body temperature is normal. 37°C rising toward 38°C is the onset of fever. 37°C falling from 39°C is recovery. The number is identical; the trajectory is everything. Same with growth and inflation — the level matters less than the direction.",
      },
      {
        kind: "h2",
        text: "Indian context",
      },
      {
        kind: "p",
        text: "For India, the two axes are slightly different in scale:",
      },
      {
        kind: "list",
        items: [
          "**Growth**: India's real GDP growth typically 6-8%. Rising past 7.5% = strong; falling below 5% = concerning. The 6-7% range is the normal middle.",
          "**Inflation**: RBI targets 4% (band 2-6%). Below 4% trending = disinflation tailwind. Above 5.5% trending = inflation headwind requiring RBI action.",
        ],
      },
      {
        kind: "p",
        text: "Late 2024 India: growth ~6.5% with slight decel, inflation ~5% with slight decel. Roughly Q3 (mild disinflation/slowdown) — supportive for rate cuts, supportive for long-duration bonds, mixed for equity (margins fine but growth concerns build).",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Two axes simplify macro: growth direction (up/down) and inflation direction (up/down).",
          "Four quadrants: Goldilocks (Q1), Reflation (Q2), Disinflation (Q3), Stagflation (Q4).",
          "Direction matters more than level. Same CPI print = different reaction based on trend.",
          "Tools to identify: PMI, GDP nowcasts (growth), CPI/PPI/wages (inflation).",
          "Late 2024 India is roughly Q3 — supportive for cuts and bonds.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Inflation has been at 5% for 6 months, gradually falling toward 4%. Growth has slowed from 7% to 6%. Which quadrant?",
        options: [
          "Q1 (Goldilocks)",
          "Q2 (Reflation)",
          "Q3 (Disinflation / slowdown) — falling growth + falling inflation",
          "Q4 (Stagflation)",
        ],
        correctIndex: 2,
        explanation: "Both growth and inflation are decelerating. That's the disinflation quadrant — supports rate cuts and bond rallies, mixed for equity.",
      },
      {
        id: "q2",
        prompt: "Why does the same CPI level produce different market reactions in different environments?",
        options: [
          "Random",
          "Markets price direction (trend), not level. 4% CPI rising is bearish; 4% CPI falling is bullish.",
          "Markets are inconsistent",
          "Only level matters",
        ],
        correctIndex: 1,
        explanation: "Direction tells you where the central bank policy is heading. Markets care about the rate path, not absolute inflation level on a single day.",
      },
    ],
  },
  {
    id: "w12-l02",
    weekId: W,
    order: 2,
    title: "The four quadrants and what works in each",
    summary: "Different assets dominate different quadrants. Knowing the regime helps you tilt the portfolio.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Each macro quadrant has assets that work and assets that don't. Knowing the regime helps you tilt your portfolio — not all in, all out, but lean toward what historically works.",
      },
      {
        kind: "diagram",
        diagram: "four-quadrants",
        caption: "Tap a quadrant to see what historically wins and lags. Most modern environments are versions of Q1 (Goldilocks) or Q3 (Disinflation).",
      },
      {
        kind: "h2",
        text: "Q1: Goldilocks (growth rising, inflation falling)",
      },
      {
        kind: "p",
        text: "Best of all worlds. Strong growth + falling inflation means the central bank can stay easy or cut, while corporates benefit from healthy demand and contained costs. Stocks rip; bonds steady; gold quiet.",
      },
      {
        kind: "list",
        items: [
          "**Winners**: Equities (especially growth + small caps), high-yield credit, cyclical sectors (banks, autos, industrials)",
          "**Losers**: Defensive sectors, gold, long-duration bonds (relative to equity)",
          "**Historical examples**: 1995-1999 (US dotcom boom), 2014 (initial Modi rally + disinflation), 2017-2018 (calm globally)",
        ],
      },
      {
        kind: "h2",
        text: "Q2: Reflation / overheating (growth rising, inflation rising)",
      },
      {
        kind: "p",
        text: "Growth is back but inflation is awakening. Central banks have to think about hiking. Commodities boom; financial assets are mixed.",
      },
      {
        kind: "list",
        items: [
          "**Winners**: Commodities (oil, copper, metals), commodity producers (Reliance, ONGC, Tata Steel), real assets, value stocks, banks (rising rates initially help NIM)",
          "**Losers**: Long-duration bonds, expensive growth stocks (multiples compress), defensive bonds",
          "**Historical examples**: 2003-2007 (China-driven commodity boom), 2021 reflation trade, brief 2024 spring period",
        ],
      },
      {
        kind: "h2",
        text: "Q3: Disinflation / slowdown (growth falling, inflation falling)",
      },
      {
        kind: "p",
        text: "Most common modern quadrant. Growth weakening but inflation also softening. Central banks pivot toward cuts. The classic 'bad news is good news' environment.",
      },
      {
        kind: "list",
        items: [
          "**Winners**: Long-duration bonds (rate cuts coming), gold (real yields falling), large-cap growth (multiples expand on lower discount rates), defensives (FMCG, healthcare)",
          "**Losers**: Cyclicals, commodities (demand weakening), small caps initially",
          "**Historical examples**: 2019 (pre-COVID slowdown), 2020 (COVID-driven), late 2024 into 2025 (Indian rate cut anticipation)",
        ],
      },
      {
        kind: "h2",
        text: "Q4: Stagflation (growth falling, inflation rising)",
      },
      {
        kind: "p",
        text: "The nightmare. Central banks can't help — hiking kills growth more, cutting fuels inflation. Most assets struggle.",
      },
      {
        kind: "list",
        items: [
          "**Winners**: Gold (the cleanest stagflation hedge), cash, oil and energy stocks, defensive consumer staples",
          "**Losers**: Most equities, bonds (both inflation- and growth-hit), real estate (rate compression)",
          "**Historical examples**: 1970s US (oil shocks + inflation), brief mid-2022 fears (didn't fully materialise), 1991 India crisis",
        ],
      },
      {
        kind: "h2",
        text: "Sector rotation across the cycle",
      },
      {
        kind: "p",
        text: "A simplified sequencing through a full business cycle (Q1 → Q2 → Q4 → Q3 → Q1 again):",
      },
      {
        kind: "table",
        headers: ["Phase", "Quadrant", "Sectors that lead"],
        rows: [
          ["Early cycle", "Q1 transition to Q2", "Financials, cyclicals, small caps"],
          ["Mid cycle", "Q2", "Energy, materials, industrials"],
          ["Late cycle", "Q4 or transition", "Defensives, energy"],
          ["Recession", "Q3 going deep", "Healthcare, staples, utilities, bonds"],
          ["Recovery", "Back to Q1", "Cyclicals, small caps re-emerge"],
        ],
      },
      {
        kind: "analogy",
        title: "Like seasons of farming",
        text: "Q1 is spring — everything grows, plant aggressively. Q2 is summer — high heat, careful with water (interest rate sensitivity). Q3 is autumn — preserve harvest, prep for winter (defensive rotation). Q4 is winter — survive, hold staples and cash. Different crops for different seasons. The investor's job is to read the season correctly.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The Indian retail tilt today",
        text: "Late 2024 / early 2025 reads like Q3 disinflation: PMI moderating, CPI trending down, RBI preparing to cut. Tilts: slightly favor long-duration bonds (gilt funds for next 12 months), maintain equity (large-cap quality), trim aggressive cyclical/small-cap exposure if overweight, modest gold allocation (5-10%). Don't make 60% tilts — adjust at the margin.",
      },
      {
        kind: "h2",
        text: "The reality check",
      },
      {
        kind: "p",
        text: "Quadrant analysis sounds elegant but reality is messier. Sometimes growth and inflation move ambiguously. Sometimes the central bank surprises. Sometimes geopolitics overrides everything. Use quadrants as a frame, not a recipe.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Q1 Goldilocks: equities especially growth + cyclicals; bad for defensives.",
          "Q2 Reflation: commodities and value; bad for long bonds and expensive growth.",
          "Q3 Disinflation: long bonds, gold, large-cap growth; bad for cyclicals and commodities.",
          "Q4 Stagflation: gold + cash + energy; bad for most equity and bonds.",
          "Tilt portfolios at the margin based on quadrant read; avoid extreme repositioning.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What asset class typically performs best in a Q3 disinflation environment (growth falling, inflation falling)?",
        options: [
          "Commodities",
          "Long-duration bonds and gold (real yields fall; rate cuts coming)",
          "Cyclical equities",
          "All asset classes equally",
        ],
        correctIndex: 1,
        explanation: "Disinflation lets central banks cut. Falling rates = bond prices rise + real yields fall (gold supportive). Cyclicals struggle as growth weakens.",
      },
      {
        id: "q2",
        prompt: "In which quadrant does gold most clearly outperform other asset classes?",
        options: [
          "Q1 Goldilocks",
          "Q4 Stagflation — growth weakness + inflation = nowhere else to hide; gold becomes the cleanest hedge",
          "Q3 Disinflation",
          "Q2 Reflation only",
        ],
        correctIndex: 1,
        explanation: "Stagflation is gold's signature regime — bonds and stocks both hit; gold's inflation-hedge + crisis-insurance + currency-hedge properties combine.",
      },
    ],
  },
  {
    id: "w12-l03",
    weekId: W,
    order: 3,
    title: "Identifying which quadrant you're in",
    summary: "A practical checklist for real-time quadrant identification using freely available data.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Quadrant identification isn't a precise science. It's a directional read built from multiple indicators. Here's a practical checklist you can use monthly.",
      },
      {
        kind: "h2",
        text: "Growth direction indicators",
      },
      {
        kind: "p",
        text: "Look at trend over 3-6 months:",
      },
      {
        kind: "list",
        items: [
          "**Manufacturing PMI** (US ISM, India PMI) — above 50 expansion. Trending up or down?",
          "**Services PMI** — usually moves with manufacturing but smoother",
          "**Retail sales** (US: monthly; India: GDP component) — consumer demand",
          "**Employment trends** — NFP, unemployment rate, jobless claims",
          "**Corporate earnings revisions** — analyst earnings estimates being raised or cut",
          "**Capital goods orders / capex announcements**",
        ],
      },
      {
        kind: "h2",
        text: "Inflation direction indicators",
      },
      {
        kind: "list",
        items: [
          "**Headline CPI** — most-watched, food-volatile in India",
          "**Core CPI** — cleaner signal of underlying trend",
          "**Producer prices (PPI / WPI)** — upstream inflation; leads CPI",
          "**Wage growth** — sticky inflation indicator",
          "**Breakeven inflation rates** (US TIPS-based) — market-implied future inflation",
          "**Oil prices** — commodity input cost",
        ],
      },
      {
        kind: "h2",
        text: "Putting it together — a simple scorecard",
      },
      {
        kind: "p",
        text: "For each indicator, mark +1 if trend is positive (rising for growth, rising for inflation), 0 if flat, -1 if negative. Sum each axis. Plot the point.",
      },
      {
        kind: "p",
        text: "Example for late 2024 India:",
      },
      {
        kind: "table",
        headers: ["Growth indicator", "Direction", "Score"],
        rows: [
          ["Manufacturing PMI", "55→57 (rising)", "+1"],
          ["Services PMI", "59→58 (mildly down)", "0"],
          ["GDP growth", "8% → 6.5% (decelerating)", "-1"],
          ["Earnings revisions", "Mostly down for mid-caps", "-1"],
          ["Capex announcements", "Strong PSU + Modi infra", "+1"],
        ],
      },
      {
        kind: "p",
        text: "Growth net: 0 (mixed, slightly leaning lower)",
      },
      {
        kind: "table",
        headers: ["Inflation indicator", "Direction", "Score"],
        rows: [
          ["Headline CPI", "5.5% → 4.5% (falling)", "-1"],
          ["Core CPI", "Stable around 3.5%", "0"],
          ["WPI", "Modest", "0"],
          ["Wage growth", "Slower private sector", "-1"],
          ["Oil prices", "Range-bound $75-85", "0"],
        ],
      },
      {
        kind: "p",
        text: "Inflation net: -2 (clearly falling)",
      },
      {
        kind: "p",
        text: "Result: late 2024 India = mild Q3 (growth slowing slightly, inflation falling clearly). Implications: RBI cuts more likely, bonds attractive, defensive quality equity over cyclical small caps.",
      },
      {
        kind: "h2",
        text: "Updating the scorecard",
      },
      {
        kind: "p",
        text: "Update monthly when new data lands. Most data points refresh monthly, so a monthly update is the right cadence. Track this in a simple spreadsheet or notebook for 12+ months and you'll start to see the regime shifts.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Use the Money Control or Investing.com economic calendars",
        text: "Both sites publish month-on-month data trends for CPI, PMI, GDP, jobs. You don't need expensive databases. Free public data is enough for retail-level quadrant analysis.",
      },
      {
        kind: "h2",
        text: "Watching for regime transitions",
      },
      {
        kind: "p",
        text: "The most valuable moments are regime transitions. Q3 transitioning to Q1 (cuts working, growth returning) is incredibly bullish for equity. Q1 transitioning to Q2 (overheating starts) is bullish for commodities. Q2 transitioning to Q4 (oil shock + growth weakening) is the dangerous one.",
      },
      {
        kind: "p",
        text: "Transitions usually take 3-6 months and have classic signs:",
      },
      {
        kind: "list",
        items: [
          "PMI breaking above or below the 50 line decisively",
          "CPI yearly trend reversing for 2-3 months",
          "Yield curve shape changing (steepening or inverting)",
          "Central bank stance shifting (verbal pivots before actual policy changes)",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Build a simple monthly scorecard of 5-10 indicators per axis.",
          "Direction (not level) drives the score; +1 / 0 / -1 for each.",
          "Sum to plot the current quadrant.",
          "Regime transitions are the most valuable moments — watch PMI 50-line, CPI 2-3 month trends, yield curve shape, central bank language.",
          "Free public data (Money Control, Investing.com, central bank pages) is sufficient.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which scorecard combination indicates Q3 (disinflation/slowdown)?",
        options: [
          "Growth net +3, Inflation net +2",
          "Growth net -1 to -2, Inflation net -1 to -2 (both decelerating)",
          "Growth net +2, Inflation net -2",
          "Growth net -2, Inflation net +2",
        ],
        correctIndex: 1,
        explanation: "Q3 disinflation = both axes decelerating. Both negative scores indicate mild slowdown + cooling inflation = rate-cut-supportive environment.",
      },
      {
        id: "q2",
        prompt: "What's the most useful frequency to update your quadrant scorecard?",
        options: ["Daily", "Monthly — most macro data is monthly", "Annually", "Hourly"],
        correctIndex: 1,
        explanation: "Macro data is mostly monthly (CPI, PMI, employment, etc.). Monthly review aligns with data release cadence without over-fitting noise.",
      },
    ],
  },
  {
    id: "w12-l04",
    weekId: W,
    order: 4,
    title: "Sectoral rotation through the business cycle",
    summary: "Which sectors lead and lag at each phase. The map for tactical equity exposure.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Within equity markets, different sectors lead at different phases of the cycle. Knowing the typical leadership helps you tilt your equity allocation — overweight what's about to work, underweight what's already played out.",
      },
      {
        kind: "h2",
        text: "The classic sequencing",
      },
      {
        kind: "p",
        text: "Through a full economic cycle:",
      },
      {
        kind: "table",
        headers: ["Phase", "Leaders", "Laggards"],
        rows: [
          ["**Early cycle** (recession ending)", "Financials, Consumer Discretionary, Industrials, Small caps", "Defensives, Utilities, Staples"],
          ["**Mid cycle** (growth strong)", "Technology, Industrials, Materials, Energy", "Healthcare (sometimes)"],
          ["**Late cycle** (overheating)", "Energy, Materials, Healthcare", "Financials weaken, Discretionary weakens"],
          ["**Recession** (contraction)", "Consumer Staples, Healthcare, Utilities, Bonds", "Cyclicals, Small caps, High-beta"],
        ],
      },
      {
        kind: "h2",
        text: "Why this sequencing happens",
      },
      {
        kind: "p",
        text: "Each sector has structural sensitivities:",
      },
      {
        kind: "list",
        items: [
          "**Banks (financials)** — benefit from rising rates and credit growth; lead early cycle as rates normalize and credit demand returns",
          "**Cyclicals (autos, capital goods)** — sensitive to consumer/business spending; lead when growth resumes",
          "**Tech and growth** — benefit from low rates + innovation premium; mid-cycle leaders",
          "**Commodities (energy, materials)** — late-cycle as capacity tightens and inflation builds",
          "**Defensives (FMCG, healthcare, utilities)** — stable cash flow regardless of cycle; outperform when cycle turns down",
        ],
      },
      {
        kind: "h2",
        text: "Indian sector rotation",
      },
      {
        kind: "p",
        text: "Same logic, with Indian-specific patterns:",
      },
      {
        kind: "list",
        items: [
          "**Early cycle India**: PSU banks, autos (rate-sensitive demand), real estate",
          "**Mid cycle India**: Private banks, IT services (if global growth strong), industrials, infra/capex names",
          "**Late cycle India**: Energy (Reliance, ONGC), metals, infrastructure",
          "**Slowdown India**: FMCG (ITC, HUL, Nestle), pharma (Sun, Dr Reddy's), gold-related plays",
        ],
      },
      {
        kind: "h2",
        text: "Practical issues with sector rotation",
      },
      {
        kind: "p",
        text: "Sector rotation sounds elegant but has real difficulties:",
      },
      {
        kind: "list",
        items: [
          "**Timing is hard** — the textbook sequencing happens over years, not months. You may be 'right' early and look wrong for a long time.",
          "**Cycles overlap** — secular themes (energy transition, AI capex) overlay cyclical sectors and break the clean rotation",
          "**Within-sector dispersion is huge** — even in 'leading' sectors, individual stocks can underperform massively",
          "**Costs and taxes** — frequent rotation eats into returns via STT, slippage, taxes",
        ],
      },
      {
        kind: "h2",
        text: "How retail should use this",
      },
      {
        kind: "p",
        text: "Sector rotation is a useful tilt at the margin, not the basis of a portfolio. A reasonable retail approach:",
      },
      {
        kind: "list",
        items: [
          "**Core**: Broad Indian equity exposure via Nifty 50 + Nifty Midcap index funds (60-70% of equity)",
          "**Tilt**: 10-20% of equity in sector-specific funds or ETFs reflecting your quadrant read (e.g., extra weight in banks if early cycle, extra IT if global mid-cycle)",
          "**Avoid**: 100% rotation strategies. Most retail can't execute the timing and pay too much in transaction costs.",
        ],
      },
      {
        kind: "analogy",
        title: "The cricket lineup",
        text: "A T20 batting order has specialists for each phase: powerplay opener, middle-order anchor, finisher. The opener might score 50 in 20 balls or 5 in 8 — but in expectation, having an opener for the powerplay is correct. Sector rotation is similar — over many cycles, having sector tilts that match the phase improves portfolio returns even when individual calls miss.",
      },
      {
        kind: "h2",
        text: "Defensive plays in India",
      },
      {
        kind: "p",
        text: "When defensive rotation is the right call, Indian options:",
      },
      {
        kind: "list",
        items: [
          "**FMCG**: HUL, ITC, Nestle, Britannia, Dabur, Marico — sticky demand, predictable cash flow",
          "**Pharma**: Sun, Dr Reddy's, Cipla, Divi's — global revenue + domestic franchise",
          "**Healthcare services**: Apollo Hospitals, Max Healthcare — secular growth + defensive characteristics",
          "**Utilities**: Power Grid, NTPC, Coal India — government-backed cash flow + dividend",
          "**Telecom**: Bharti Airtel — predictable subscriber revenue (less Vodafone Idea given balance sheet concerns)",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "PSU stocks — a separate rotation",
        text: "Indian PSU stocks (Coal India, NTPC, Power Grid, SBI, BEL, HAL, defence names) had a massive 2022-24 rally as the government focused on infrastructure and defence. This wasn't classic business-cycle rotation — it was policy-driven re-rating. PSU stocks now trade at premium valuations relative to history. The future of this rotation depends on policy continuation.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Different sectors lead at different cycle phases — financials/cyclicals early, energy/materials late, defensives in recession.",
          "Indian context: PSU banks + autos early; private banks + IT mid; metals + energy late; FMCG + pharma slowdown.",
          "Rotation is hard — timing, secular overlays, within-sector dispersion all complicate.",
          "Retail approach: broad core + selective sector tilts (10-20% of equity), not 100% rotation.",
          "PSU rotation 2022-24 was policy-driven, not classic cycle — distinct from textbook sequencing.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In which phase of the business cycle do consumer staples (FMCG) and pharma typically outperform?",
        options: [
          "Early cycle",
          "Late cycle / Recession — sticky demand and defensive cash flows protect them when cyclicals struggle",
          "Mid cycle",
          "Always",
        ],
        correctIndex: 1,
        explanation: "Defensives outperform when growth is weakening. Their demand is non-discretionary; their cash flows don't collapse like cyclicals during slowdowns.",
      },
      {
        id: "q2",
        prompt: "Why is full sector rotation typically not advisable for retail investors?",
        options: [
          "It's illegal",
          "Timing is hard, costs add up (STT, slippage, taxes), and most retail can't execute the rotation accurately enough to outperform a broad index",
          "Sector ETFs don't exist in India",
          "It always loses money",
        ],
        correctIndex: 1,
        explanation: "Frequent rotation eats returns via transaction costs and taxes. Best for retail: broad core exposure with modest sector tilts based on quadrant view.",
      },
    ],
  },
  {
    id: "w12-l05",
    weekId: W,
    order: 5,
    title: "Indian historical regimes — a tour of the past 25 years",
    summary: "Five distinct Indian macro regimes since 2000. Understanding past regimes helps you recognize current ones.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "India hasn't experienced just one type of market environment — it's lived through multiple distinct regimes over the past 25 years, each with characteristic asset performance. A quick tour of these regimes helps you spot which one you're in now.",
      },
      {
        kind: "h2",
        text: "2003-2008: The first big bull market",
      },
      {
        kind: "p",
        text: "Setup: China commodity supercycle, global synchronized growth, weak dollar, low Fed rates, FII discovery of India.",
      },
      {
        kind: "p",
        text: "What worked: cyclicals (banks, infra, real estate, metals), small-mid caps, energy (Reliance, ONGC), property and real-estate-adjacent stocks. Nifty went from 1,200 (2003) to 6,100 (Jan 2008) — 5x in 5 years.",
      },
      {
        kind: "p",
        text: "Regime: Q1 Goldilocks → Q2 reflation. Indian growth 8-9% real, inflation manageable, capital flowing in.",
      },
      {
        kind: "h2",
        text: "2008-2013: GFC and fragile five",
      },
      {
        kind: "p",
        text: "Setup: Global Financial Crisis 2008, deep recession, then unstable recovery. India 2010-2012 became part of the 'Fragile Five' EM crisis with high CAD, high inflation, weak governance perception.",
      },
      {
        kind: "p",
        text: "What worked: gold (massive run from 2008-2011), FMCG (defensive), pharma. Nifty range-bound 4,500-6,300 for 5 years with deep drawdowns.",
      },
      {
        kind: "p",
        text: "Regime: Q3 disinflation initially → Q4 stagflation (2012-13) → eventual stabilization.",
      },
      {
        kind: "h2",
        text: "2014-2019: Modi rally + disinflation",
      },
      {
        kind: "p",
        text: "Setup: Modi 2014 election ushered reform optimism. Oil crashed in 2014-16 (Brent $115 to $30). Indian inflation collapsed. RBI cut aggressively. Earnings expected to surge.",
      },
      {
        kind: "p",
        text: "What worked: small-mid caps massively (2014-17), then private banks, NBFCs, consumer discretionary. Nifty went from 6,400 (2014) to 11,700 (2018) — but earnings disappointed and gains slowed.",
      },
      {
        kind: "p",
        text: "Regime: started Q1 Goldilocks, drifted to confusing mix as earnings underdelivered.",
      },
      {
        kind: "h2",
        text: "2020-2022: COVID and the everything rally",
      },
      {
        kind: "p",
        text: "Setup: COVID crash March 2020. Fed unlimited QE. Global liquidity surge. Risk assets exploded. India joined the everything-rally.",
      },
      {
        kind: "p",
        text: "What worked: tech/IT (work from home), pharma initially, then everything cyclical as recovery played out. Small-mid caps massive (2020-21). Nifty from 7,500 (March 2020) to 18,400 (Oct 2021) — 145% in 18 months.",
      },
      {
        kind: "p",
        text: "Regime: Q3 emergency policy → Q1 Goldilocks → Q2 reflation through 2021.",
      },
      {
        kind: "h2",
        text: "2022-2024: Fed hike cycle and PSU revival",
      },
      {
        kind: "p",
        text: "Setup: Russia invades Ukraine Feb 2022. Inflation surges globally. Fed hikes 525 bps in 2022-23. DXY rallies to 114. Indian equities resilient thanks to DII flows. PSU revival theme drives huge outperformance in defence, capex, railways.",
      },
      {
        kind: "p",
        text: "What worked: PSU stocks (defence, banks, railways), capex/infra plays, midcap manufacturing. Underperformed: IT (US tech worries), small-cap quality (rotation away from growth).",
      },
      {
        kind: "p",
        text: "Regime: Q2 reflation initially, transition to mixed late 2023, leaning toward Q3 in late 2024.",
      },
      {
        kind: "h2",
        text: "What this tour teaches",
      },
      {
        kind: "list",
        items: [
          "**Regimes last years, not weeks** — once you identify the regime, leaning into it for 1-3 years often pays",
          "**India isn't immune** — every global macro shift affected India, even if cushioned",
          "**Sector winners are regime-specific** — the 2003-08 cyclical winners weren't the 2014-19 winners weren't the 2022-24 winners",
          "**Quality is durable** — names like HDFC Bank, Asian Paints, Bajaj Finance (until 2018), TCS compounded through multiple regimes",
          "**Small-mid caps are regime-amplified** — they run the hardest in bull cycles and fall the hardest in bear cycles",
        ],
      },
      {
        kind: "analogy",
        title: "Reading the past tells you the future shape",
        text: "Indian cricket teams have different captains, different formats, different rule changes — but match patterns repeat. A good fan can compare a current Indian XI to past Indian XIs and predict tendencies. Past macro regimes are the same — current setups have echoes of past ones, and recognizing the echo helps you anticipate the next chapter.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Late 2024 / early 2025 — what regime?",
        text: "Mild Q3 disinflation: PMI healthy but decelerating, CPI trending toward 4%, RBI dovish bias, rate cuts likely. Setup similar (but not identical) to 2018-19 (pre-COVID slowdown phase). Investment tilt: maintain equity (with quality bias), add duration in bonds (5-10 year G-Sec), maintain gold allocation, modest cash buffer for opportunities.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Indian markets have moved through multiple distinct regimes since 2000.",
          "Each regime had specific sector winners and losers.",
          "Regimes last years; once identified, lean in for multi-year horizon.",
          "Quality compounders (HDFC Bank, Asian Paints, TCS) work across regimes.",
          "Late 2024 reads as mild Q3 disinflation — supports duration, quality equity, gold.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What was the dominant macro regime during 2003-2008 in India?",
        options: [
          "Q3 disinflation",
          "Q4 stagflation",
          "Q1 Goldilocks transitioning to Q2 reflation — strong growth, commodity boom, foreign capital flooding in",
          "Q2 only",
        ],
        correctIndex: 2,
        explanation: "China-driven commodity boom + weak dollar + global growth surge = Goldilocks → reflation. Indian Nifty 5x'd in this regime; cyclicals, banks, infra led.",
      },
      {
        id: "q2",
        prompt: "What's a sector that worked through nearly every Indian regime since 2000?",
        options: [
          "PSU banks",
          "Quality compounders — HDFC Bank, Asian Paints, TCS — durable across cycles",
          "Real estate",
          "Telecom",
        ],
        correctIndex: 1,
        explanation: "Quality compounders with high ROE and consistent earnings growth tend to compound through regime changes — even if their stock prices have volatility, their long-run wealth creation is regime-agnostic.",
      },
    ],
  },
  {
    id: "w12-l06",
    weekId: W,
    order: 6,
    title: "Building a regime-aware allocation",
    summary: "Combining quadrant analysis with practical portfolio tilts. A flexible framework rather than a fixed prescription.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "After 11 weeks of theory and frameworks, the practical question is: how do I actually combine all this into portfolio decisions? Here's a usable framework — flexible enough to adapt as regimes change, simple enough to maintain.",
      },
      {
        kind: "h2",
        text: "Start with the strategic allocation",
      },
      {
        kind: "p",
        text: "Strategic allocation is your baseline — what you'd hold if you had no view on the regime. For a 30-50 year old Indian investor with a 15-25 year horizon:",
      },
      {
        kind: "list",
        items: [
          "65-75% equity",
          "15-25% debt",
          "5-10% gold",
          "0-3% optional (crypto, specific commodity, alternatives)",
        ],
      },
      {
        kind: "p",
        text: "Within equity: 60-70% Indian (split between large-cap and mid-cap), 20-30% international (mostly US), 5-10% sector tilts based on view.",
      },
      {
        kind: "h2",
        text: "Add tactical tilts by quadrant",
      },
      {
        kind: "p",
        text: "Based on your quadrant read, tilt 5-15% of portfolio (not 50-100%):",
      },
      {
        kind: "table",
        headers: ["Read", "Tactical tilt"],
        rows: [
          ["**Q1 (Goldilocks)**", "Add 5-10% to mid-caps, cyclicals; reduce gold to lower end of range; less defensive in equity allocation"],
          ["**Q2 (Reflation)**", "Add to commodity producers, value stocks; reduce duration in bonds; less expensive growth"],
          ["**Q3 (Disinflation)**", "Extend duration in bonds; increase quality large-cap weight; maintain gold; reduce cyclical small-cap exposure"],
          ["**Q4 (Stagflation)**", "Increase gold and cash; reduce equity overall; favor energy and FMCG; reduce duration"],
        ],
      },
      {
        kind: "h2",
        text: "Rebalance discipline",
      },
      {
        kind: "p",
        text: "Annual rebalance is the minimum. Quarterly is better. Rebalancing forces 'sell high, buy low' behavior — selling what has run beyond target weight and adding to underweights.",
      },
      {
        kind: "p",
        text: "Set rebalancing thresholds: if any major bucket drifts more than 5% from target weight, rebalance regardless of calendar.",
      },
      {
        kind: "h2",
        text: "When to actually shift your view",
      },
      {
        kind: "p",
        text: "Your quadrant view should evolve slowly. Signs that justify a real shift in tilt:",
      },
      {
        kind: "list",
        items: [
          "Central bank stance shifts (RBI moves from accommodative to neutral, or vice versa)",
          "Sustained 3-month trend in PMI through the 50 line",
          "Sustained CPI trend reversal (3 consecutive months in new direction)",
          "Major geopolitical event (war, regime change, major sanctions)",
          "Yield curve shape change (inversion or steepening)",
        ],
      },
      {
        kind: "p",
        text: "Single-month noise should not trigger view shifts. Quadrant views are multi-month commitments.",
      },
      {
        kind: "h2",
        text: "What NOT to do",
      },
      {
        kind: "list",
        items: [
          "**Don't change views on TV commentary** — most TV anchors are reactive, not predictive",
          "**Don't time exact tops and bottoms** — directional tilts, not all-or-nothing",
          "**Don't override SIPs** — strategic SIPs continue regardless of quadrant view",
          "**Don't go to 100% cash** — being out of equity for years is usually more damaging than the worst drawdown",
          "**Don't chase recent winners** — by the time a sector is up 30%, the next 30% is much harder",
        ],
      },
      {
        kind: "h2",
        text: "Multi-year compounding view",
      },
      {
        kind: "p",
        text: "Regimes lasting years means your tactical tilts can hold for multi-year periods. The Q1 Goldilocks tilt in 2014 worked through 2017. The Q2 reflation tilt in 2021 worked through 2022. The Q3 disinflation tilt currently is for 2024-2026 in expectation.",
      },
      {
        kind: "p",
        text: "Don't expect tactical tilts to work in months. Expect them to add 2-3% per year to your blended return over multi-year periods. Compounded, that's meaningful — 3% extra per year over 20 years is roughly 80% more wealth.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "An honest assessment",
        text: "Most retail investors will earn the average market return over 20 years. That's fine — Nifty + diversification + discipline + rebalancing yields ~12% real over time. Quadrant-based tactical tilts can potentially add 1-3% per year IF executed disciplined. But the bigger wins are: starting early, increasing SIPs over time, avoiding panic selling, and tax-efficient asset location.",
      },
      {
        kind: "h2",
        text: "Reviewing regularly",
      },
      {
        kind: "p",
        text: "Set a quarterly review:",
      },
      {
        kind: "list",
        items: [
          "Update quadrant scorecard",
          "Check if any major bucket has drifted >5% from target",
          "Rebalance if needed",
          "Review FII/DII flows, India VIX, USD/INR trends over the quarter",
          "Adjust tactical tilts if quadrant has shifted",
        ],
      },
      {
        kind: "p",
        text: "30-45 minutes per quarter. The discipline matters more than the analysis depth.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Strategic allocation: 65-75% equity, 15-25% debt, 5-10% gold for working-age Indian investor.",
          "Tactical tilts: 5-15% of portfolio adjusted based on quadrant read.",
          "Annual rebalance minimum; quarterly preferred.",
          "Shift views slowly — based on multi-month trend changes, not noise.",
          "Tactical tilts add 1-3% per year in expectation; main wins are from discipline, SIPs, and time.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's a reasonable tactical tilt during a Q3 disinflation environment for an Indian investor?",
        options: [
          "Sell all equity",
          "Modestly extend bond duration, maintain quality equity (large-cap bias), keep gold, possibly reduce cyclical small-cap exposure",
          "Aggressive small-cap buying",
          "All gold",
        ],
        correctIndex: 1,
        explanation: "Q3 = falling growth + falling inflation = rate cuts coming. Duration benefits. Quality equity weathers slowdown. Cyclicals weaken. Modest tilts within disciplined strategic framework.",
      },
      {
        id: "q2",
        prompt: "How much should tactical quadrant tilts adjust your portfolio, in percentage terms?",
        options: [
          "Doesn't matter",
          "5-15% of portfolio shifted toward or away from specific exposures; not all-or-nothing",
          "100% — go all-in on the regime",
          "0% — no tilts ever",
        ],
        correctIndex: 1,
        explanation: "Modest tilts at the margin. All-or-nothing tilts amplify timing errors. 5-15% adjustments improve risk-adjusted returns without exposing you to catastrophic regime-call errors.",
      },
    ],
  },
];

export const WEEK_12_LESSONS = lessons;
