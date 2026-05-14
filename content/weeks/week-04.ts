import type { Lesson } from "../types";

const W = 4;

const lessons: Lesson[] = [
  {
    id: "w04-l01",
    weekId: W,
    order: 1,
    title: "The structure of Indian equity markets",
    summary: "Two exchanges, two depositories, one regulator. The plumbing matters because it's what gives the system trust.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Most Indian retail investors interact with the equity market through Zerodha or Groww and never think about what sits behind the app. That's fine for trading. It's not enough for understanding. Once you can see the architecture, the news headlines about SEBI, depositories, and exchanges start making sense.",
      },
      {
        kind: "h2",
        text: "The two exchanges",
      },
      {
        kind: "p",
        text: "{{nse|NSE (National Stock Exchange)}}, founded 1992, is the dominant venue. ~93% of cash equity volume and essentially all liquid F&O happens here. {{bse|BSE (Bombay Stock Exchange)}}, founded 1875, has more listed companies and the iconic Sensex, but daily volume is far lower.",
      },
      {
        kind: "p",
        text: "Why does the same stock trade on both? Because brokers can route to either. Most stocks have tiny price differences between the two — milliseconds of arbitrage between the matching engines. For retail, it doesn't matter. Pick the exchange your broker defaults to.",
      },
      {
        kind: "h2",
        text: "The two depositories",
      },
      {
        kind: "p",
        text: "Your shares don't live at your broker. They live at one of two {{depository|depositories}}: NSDL (National Securities Depository Limited) or CDSL (Central Depository Services Limited). Both are SEBI-regulated. Brokers are 'depository participants' — they connect you to the depository.",
      },
      {
        kind: "p",
        text: "You can check your holdings at CDSL Easi or NSDL Speed-e directly, without going through your broker. This is your independent verification. Most retail investors never do this; doing it once a quarter takes 5 minutes and is the single best safety habit.",
      },
      {
        kind: "h2",
        text: "The regulator",
      },
      {
        kind: "p",
        text: "{{| SEBI}} (Securities and Exchange Board of India), founded 1992, regulates markets. It writes the rules for listed companies, brokers, mutual funds, IPOs, F&O, and the depositories themselves. SEBI does not run the exchanges; it regulates them.",
      },
      {
        kind: "analogy",
        title: "The traffic system",
        text: "SEBI is the traffic department. Exchanges are the roads. Depositories are where you park your car. Brokers are the autos that take you from your house to the road. RBI is in charge of all the bank ATMs along the way. Each piece has its job; the system works because nobody overlaps too much.",
      },
      {
        kind: "h2",
        text: "What flows where",
      },
      {
        kind: "p",
        text: "When you tap 'buy' on Zerodha:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Order goes Zerodha → NSE → matching engine",
          "Trade matches with a counterparty",
          "Trade gets routed to NSE Clearing (the clearing corporation)",
          "On T+1 (next working day), shares move from seller's demat to your demat at CDSL/NSDL",
          "Money moves from your linked bank account to the seller's linked bank account",
          "Everyone reconciles. You see the position in Kite the morning after the trade.",
        ],
      },
      {
        kind: "h2",
        text: "T+1 — the fastest cycle in the world",
      },
      {
        kind: "p",
        text: "India moved fully to {{t-plus-1|T+1 settlement}} in early 2023. The US and Europe are still T+2. India was the first major market to make this transition. SEBI is now experimenting with T+0 (same-day settlement) for select stocks.",
      },
      {
        kind: "p",
        text: "Why this matters: if you sell on Monday, money is in your bank by Tuesday evening. Less working capital tied up. Cleaner. The downside (briefly): less time to recall a trade if you made an error.",
      },
      {
        kind: "h2",
        text: "The three classes of listed companies",
      },
      {
        kind: "p",
        text: "SEBI classifies listed companies by market cap, rules-based, updated semi-annually:",
      },
      {
        kind: "list",
        items: [
          "**{{large-cap|Large cap}}** — top 100 by market cap. Stable, well-followed.",
          "**{{mid-cap|Mid cap}}** — rank 101-250. Higher growth, higher drawdowns.",
          "**{{small-cap|Small cap}}** — rank 251+. Most volatile, most opportunity, most risk.",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why classification matters",
        text: "Mutual funds and PMS strategies have category-specific mandates ('large-cap fund', 'multi-cap fund'). When SEBI reclassifies a stock from small-to-mid-cap, large institutions must include it. That's a real flow that can move the stock 5-15% in the weeks around classification — search 'AMFI reclassification' to see the periodic events.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "NSE dominates volume; BSE has more listings and the Sensex.",
          "Your shares live at CDSL or NSDL, not your broker. Verify quarterly.",
          "SEBI regulates the markets but doesn't run them.",
          "India runs on T+1 settlement — the fastest in the world.",
          "SEBI's size classification (large/mid/small cap) drives fund flows when stocks get reclassified.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Where do your shares actually 'live' after a buy trade settles?",
        options: ["At your broker's office", "At the stock exchange (NSE/BSE)", "In a depository — CDSL or NSDL", "In the company's records"],
        correctIndex: 2,
        explanation: "Depositories hold electronic share ownership records. Your broker is the depository participant that interfaces between you and the depository.",
      },
      {
        id: "q2",
        prompt: "What's the current settlement cycle for Indian equity trades?",
        options: ["T+0", "T+1", "T+2", "T+3"],
        correctIndex: 1,
        explanation: "India moved fully to T+1 settlement in early 2023 — fastest in the world. SEBI is piloting T+0 for select stocks.",
      },
    ],
  },
  {
    id: "w04-l02",
    weekId: W,
    order: 2,
    title: "Indices and sectors — the map of Indian equity",
    summary: "Why Nifty 50 is half the story, and why sectoral indices are how professionals actually read the market.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "When TV anchors say 'the market is up 1%', they mean Nifty 50 is up 1%. But Nifty is one of dozens of NSE indices. Reading sectoral indices alongside Nifty is what separates a beginner from someone who can see what's actually happening.",
      },
      {
        kind: "h2",
        text: "The headline indices",
      },
      {
        kind: "table",
        headers: ["Index", "Stocks", "Notes"],
        rows: [
          ["{{nifty-50|Nifty 50}}", "50", "The flagship. Top 50 NSE stocks by free-float market cap. Represents ~53% of Indian listed market cap."],
          ["{{sensex|Sensex}}", "30", "BSE's index. Older, narrower. Moves nearly identically to Nifty day to day."],
          ["{{bank-nifty|Bank Nifty}}", "12", "Indian banks. The most-traded F&O index in India by volume."],
          ["Nifty Next 50", "50", "Stocks ranked 51-100. The 'on-deck' candidates for Nifty inclusion."],
          ["Nifty Midcap 100", "100", "Top mid-cap names. Higher beta than Nifty."],
          ["Nifty Smallcap 100", "100", "Top small-cap names. Highest beta and volatility."],
          ["Nifty 500", "500", "Broadest single index. Closest thing to 'the whole market' in India."],
        ],
      },
      {
        kind: "h2",
        text: "Sectoral indices",
      },
      {
        kind: "diagram",
        diagram: "sector-donut",
        props: { index: "nifty" },
        caption: "Nifty 50 sector composition — Financial Services dominates at over a third of the index. IT is the second largest.",
      },
      {
        kind: "p",
        text: "NSE publishes ~14 sectoral indices. The most-watched:",
      },
      {
        kind: "list",
        items: [
          "**Nifty IT** — TCS, Infosys, HCL Tech, Wipro, Tech Mahindra, LTI Mindtree, Persistent. Highly dollar-revenue sensitive — INR weakness helps IT.",
          "**Nifty Bank** — see above. Rate-sensitive. Most-traded F&O.",
          "**Nifty Pharma** — Sun, Dr Reddy's, Cipla, Divi's. Dollar-revenue sensitive too. Defensive sector.",
          "**Nifty FMCG** — HUL, ITC, Nestle, Britannia, Dabur. Defensive. Low growth, low drawdowns.",
          "**Nifty Auto** — Maruti, Tata Motors, Mahindra, Bajaj Auto, Eicher. Cyclical, rate-sensitive.",
          "**Nifty Metal** — Tata Steel, JSW Steel, Hindalco, Vedanta, Coal India. Cyclical, commodity-sensitive.",
          "**Nifty Realty** — DLF, Godrej Properties, Oberoi. Rate-sensitive, cyclical.",
          "**Nifty Energy** — Reliance, ONGC, BPCL, IOC, NTPC, Power Grid. Oil-sensitive.",
        ],
      },
      {
        kind: "analogy",
        title: "Reading a city through neighborhoods",
        text: "Saying 'Mumbai is doing well' tells you nothing — Bandra-Worli could be booming while Borivali industrial is dying. Indian equity is the same. Saying 'Nifty is up' hides whether IT is leading or financials are dragging. Sectoral indices are the neighborhoods.",
      },
      {
        kind: "h2",
        text: "How to read a sectoral split",
      },
      {
        kind: "p",
        text: "On any given trading day, some sectors lead and some lag. Reading the spread tells you what the market is processing:",
      },
      {
        kind: "table",
        headers: ["What leads", "What's the market saying"],
        rows: [
          ["IT + Pharma", "Risk-off + dollar strength (USD-revenue sectors win)"],
          ["Banks + Auto", "Risk-on + growth optimism + rate-cut expectations"],
          ["FMCG + Consumer Staples", "Defensive rotation — investors hiding"],
          ["Metals + Energy", "Commodity-cycle bid (often paired with global PMI strength)"],
          ["Realty + Capital goods", "Domestic capex + low-rate optimism"],
          ["PSU banks + Defence", "Government policy beneficiary rotations"],
        ],
      },
      {
        kind: "h2",
        text: "Weights matter",
      },
      {
        kind: "p",
        text: "In Nifty 50, the top 5 stocks (Reliance, HDFC Bank, ICICI Bank, Infosys, TCS) usually account for 35-40% of the index. The top 10 account for 55%+. Nifty is far more concentrated than people realize. A 5% move in HDFC Bank can swing Nifty 0.5% all by itself.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Free float vs full market cap",
        text: "Nifty uses 'free-float market cap' — only the shares actually available to public investors, excluding promoter and government holdings. This matters because a company like Coal India is 60%+ government-held — its free-float weight is far smaller than its total market cap weight.",
      },
      {
        kind: "h2",
        text: "How to use indices in your decisions",
      },
      {
        kind: "list",
        items: [
          "For passive investing: Nifty 50 index fund or ETF is the cheapest, broadest, lowest-effort core holding.",
          "For diversification: Add a Nifty Midcap 150 or Nifty Smallcap 250 index fund as a satellite.",
          "For active reads: Watch which sectoral indices are leading and lagging. Don't chase what's already run.",
          "For F&O exposure: Bank Nifty and Nifty are the only really liquid options. Stock options thin out quickly.",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Nifty 50 is the headline; sectoral indices show what's actually happening.",
          "Top 5 stocks are 35-40% of Nifty. The index is more concentrated than it looks.",
          "Reading sector leadership tells you the market's mood — risk-on vs risk-off, growth vs defensives.",
          "Use Nifty 50 + Midcap as a core; add sectoral or thematic exposure as satellites if you have a view.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "On a day Nifty IT and Pharma both rise 1.5% while Auto and Banks fall 1%, what's the dominant macro interpretation?",
        options: [
          "Random rotation",
          "Risk-off + dollar strength — USD-revenue sectors winning",
          "Strong domestic economy",
          "Election-related move",
        ],
        correctIndex: 1,
        explanation: "IT and Pharma earn in USD. INR weakness or USD strength helps them. Auto and Banks are domestic-cyclical and hurt by rate/risk-off. Classic risk-off rotation.",
      },
      {
        id: "q2",
        prompt: "What's 'free-float market cap'?",
        options: [
          "Total shares × price",
          "Only the shares available to public investors (excluding promoter and government holdings) × price",
          "Market cap during the first hour of trading",
          "Government-held shares × price",
        ],
        correctIndex: 1,
        explanation: "Nifty weights stocks by free-float market cap. A government-heavy stock like Coal India has a much smaller index weight than its total market cap would suggest.",
      },
    ],
  },
  {
    id: "w04-l03",
    weekId: W,
    order: 3,
    title: "FII and DII flows — what they actually mean",
    summary: "Two flow numbers come out every evening. Reading them in context is one of the most useful daily habits in Indian markets.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Every evening around 6:30 PM, NSE publishes two numbers: provisional {{fii|FII}} flow and provisional {{dii|DII}} flow. They're in ₹ crore, with separate breakouts for cash market vs F&O. Within hours, every financial outlet has them as a headline. They're the most-watched daily macro signal for Indian equities.",
      },
      {
        kind: "h2",
        text: "What FIIs and DIIs are",
      },
      {
        kind: "p",
        text: "**FII / FPI** stands for Foreign Institutional Investor / Foreign Portfolio Investor (SEBI renamed in 2014; both terms are still used interchangeably). These are large overseas pools — pension funds, sovereign wealth funds, hedge funds, mutual funds — investing in Indian listed securities. They collectively own ~18-20% of NSE listed market cap.",
      },
      {
        kind: "p",
        text: "**DIIs** are Domestic Institutional Investors — Indian mutual funds, insurance companies (LIC, SBI Life, HDFC Life), and pension funds. They've grown rapidly thanks to the {{sip|SIP}} boom. Monthly SIP inflows crossed ₹25,000 crore in 2024.",
      },
      {
        kind: "h2",
        text: "Reading the numbers",
      },
      {
        kind: "table",
        headers: ["Daily flow magnitude", "Interpretation"],
        rows: [
          ["±₹500 cr", "Routine noise. Ignore."],
          ["±₹1,000-3,000 cr", "Notable but not unusual."],
          ["±₹5,000 cr", "Heavy. Worth checking what triggered it."],
          ["±₹10,000+ cr", "Major event day. Usually tied to specific news or global risk-off/on."],
        ],
      },
      {
        kind: "h2",
        text: "The classic offset",
      },
      {
        kind: "p",
        text: "For the past five years, a clear pattern: when FIIs sell heavily, DIIs buy. Sometimes the buying fully offsets the selling. Sometimes only partially. The reason is structural — ₹25,000 cr/month of SIP money has to be deployed into equity.",
      },
      {
        kind: "p",
        text: "October 2024 was the most extreme example to date: FIIs sold ₹1.14 lakh crore in a single month — the largest monthly outflow ever — and Nifty fell only ~6%. Without the DII offset, the same flow would have crashed the market 15%+. The DII flow has fundamentally changed the volatility profile of Indian equity.",
      },
      {
        kind: "analogy",
        title: "Two crowds, one stadium",
        text: "Imagine a cricket stadium where one side cheers for the bowling team and the other for the batting team. When the bowling side leaves (FII sell), the volume drops — unless the batting fans (DII buy) get louder. The Indian market in 2024-25 is mostly the batting crowd. They show up monthly. They don't leave on bad days.",
      },
      {
        kind: "h2",
        text: "What drives FII flows",
      },
      {
        kind: "p",
        text: "FIIs are not investing because they love India specifically. They're allocating across all emerging markets (EM) — India is one bucket alongside China, Brazil, Mexico, Indonesia. The decision logic is:",
      },
      {
        kind: "list",
        items: [
          "**EM as a whole** — How attractive is EM vs developed markets? Driven by the US dollar, Fed rates, global growth.",
          "**India's slice of EM** — How does India rank vs other EMs on growth, valuation, currency stability?",
          "**Tactical** — Is the rupee at risk? Are Indian valuations stretched? Is China cheap and re-opening?",
        ],
      },
      {
        kind: "p",
        text: "When the dollar strengthens, all EM sells off — India included. When China makes stimulus noise, money rotates from India to China. When Indian elections come, some FIIs reduce exposure ahead of the result.",
      },
      {
        kind: "h2",
        text: "What drives DII flows",
      },
      {
        kind: "p",
        text: "DII flows are much steadier. Once an Indian household sets up a ₹15,000/month SIP for a child's education, that flow runs for 10 years. It doesn't react to short-term news. It just keeps coming.",
      },
      {
        kind: "p",
        text: "DIIs do tactically time the market within their mandates — many mutual funds carry 5-15% cash on bad days and deploy on dips. This is part of what gives Indian markets their characteristic 'bounce back' on intraday FII selling days.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Where to find the data",
        text: "NSE's website (nseindia.com) → 'Market Data' → 'FII/DII Cash Trading' has the daily provisional and final numbers. Investing.com and Money Control both have it on their front pages every evening. Aim to glance at it daily for a few months — pattern recognition develops.",
      },
      {
        kind: "h2",
        text: "F&O flows are different",
      },
      {
        kind: "p",
        text: "Beyond cash market, FIIs also trade index futures and options. F&O FII flow is published separately and is much harder to interpret — it can be hedging vs directional vs arbitrage. Don't try to read F&O FII data unless you've spent significant time understanding derivatives.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "FII = foreign institutions. DII = domestic mutual funds, insurance, pension.",
          "Daily flow numbers release ~6:30 PM IST after market close.",
          "DIIs (driven by ₹25,000 cr/month SIPs) now structurally offset FII selling.",
          "FII selling is usually about global factors (dollar, EM allocation), not India-specific.",
          "Heavy single-day moves (±₹5,000+ cr) signal real news; smaller moves are noise.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "FIIs sell ₹8,000 cr today. DIIs buy ₹6,500 cr. Nifty closes -0.4%. What's the takeaway?",
        options: [
          "Indian markets are in crisis",
          "Healthy offset — DII flows absorbed most FII selling, hence the small Nifty move",
          "DIIs are trying to manipulate the market",
          "Tomorrow's market will crash",
        ],
        correctIndex: 1,
        explanation: "The small Nifty decline relative to FII sell magnitude shows the DII offset working. This is the new normal for Indian markets — domestic flows cushion foreign outflows.",
      },
      {
        id: "q2",
        prompt: "Why do FIIs collectively sell Indian equities even when India's economy is strong?",
        options: [
          "They have bad analysts",
          "They allocate across all EMs; India sells when the broad EM bucket sells, often driven by US dollar strength",
          "They prefer Pakistan",
          "Currency arbitrage",
        ],
        correctIndex: 1,
        explanation: "FII decisions are EM-bucket decisions. When global risk-off hits (dollar up, US 10Y up), all EM including India sells, regardless of country-specific fundamentals.",
      },
    ],
  },
  {
    id: "w04-l04",
    weekId: W,
    order: 4,
    title: "Reading an Indian company's annual report",
    summary: "A 20-minute scan tells you 80% of what you need to know. Where to look and what to skip.",
    minutes: 8,
    body: [
      {
        kind: "p",
        text: "Indian listed companies file annual reports every September-November for fiscal year ending March. A typical annual report is 200-400 pages. Most of it is regulatory boilerplate. The signal lives in maybe 30 pages.",
      },
      {
        kind: "h2",
        text: "Where to find them",
      },
      {
        kind: "list",
        items: [
          "**Screener.in** (free) — annual reports, financials, ratios in one place. Best starting point.",
          "**Company investor relations page** — direct source, sometimes has presentations and FAQs.",
          "**BSE / NSE filings page** — official archive. Search by company name.",
          "**Trendlyne, Tijori** — alternative aggregators with built-in commentary.",
        ],
      },
      {
        kind: "h2",
        text: "The 20-minute scan",
      },
      {
        kind: "p",
        text: "If you only have 20 minutes per company, here's where to spend them, in order:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Chairman's / MD's letter (3 min)** — gives you the story management is telling. Watch for changes in tone year-over-year.",
          "**5-year financial summary (3 min)** — usually a 2-page summary table at the back. Revenue, EBITDA, PAT, EPS, ROE, debt growth. This is your trend skeleton.",
          "**Management Discussion & Analysis (5 min)** — the meatiest section. Skim for industry context, the company's strategy, and risks.",
          "**Cash flow statement (3 min)** — operating cash flow trend. Is the company actually generating cash, or just booking earnings?",
          "**Notes to accounts — significant policies (3 min)** — look for changes in accounting policy. These are often where surprises hide.",
          "**Related party transactions (3 min)** — promoter-related transactions can be a red flag. Watch for unusual loans, sales to related parties, asset transfers.",
        ],
      },
      {
        kind: "h2",
        text: "Key numbers to extract",
      },
      {
        kind: "table",
        headers: ["Metric", "What it tells you", "Where to find"],
        rows: [
          ["Revenue growth (3Y, 5Y CAGR)", "Is the business growing?", "5-year summary"],
          ["EBITDA margin trend", "Pricing power & operating leverage", "Income statement"],
          ["ROE", "Return on shareholders' capital", "5-year summary"],
          ["Debt-to-equity", "Leverage", "Balance sheet"],
          ["Cash conversion (CFO / EBITDA)", "Quality of earnings", "Cash flow + income statement"],
          ["Promoter holding & changes", "Skin in the game", "Shareholding pattern"],
        ],
      },
      {
        kind: "callout",
        tone: "money",
        title: "The number to obsess over: ROE",
        text: "Return on Equity = Net profit / Shareholders' equity. A company that compounds equity at 20%+ ROE over a decade is genuinely creating value. A company with 8% ROE is essentially a bond pretending to be a stock. India's best long-term compounders (HDFC Bank, Asian Paints, Bajaj Finance pre-2018, Page Industries) all have multi-decade ROE > 18%.",
      },
      {
        kind: "h2",
        text: "Red flags to watch for",
      },
      {
        kind: "list",
        items: [
          "**Revenue grew faster than cash flow consistently** — earnings might not be 'real'. Worth investigating receivables.",
          "**Auditor changes without clear reason** — sometimes a precursor to disclosure issues.",
          "**Frequent acquisitions of unrelated businesses** — can be empire-building rather than value-creating.",
          "**Promoter pledge increasing** — leverage at the promoter level can force liquidation in downturns.",
          "**Capex with vague rationale** — 'general purpose' capex is harder to justify than expanding a known production line.",
          "**Related-party loans without clear collateral** — often a tunneling mechanism.",
        ],
      },
      {
        kind: "analogy",
        title: "Like checking a rented flat before signing",
        text: "You don't measure every wall. You check: does the lift work? Is there water? Are the windows broken? Are the previous tenant's complaints reasonable? Reading an annual report is the same — a fast structured check, not a forensic audit. Forensic audits are for analysts. Your job is to spot dealbreakers in 20 minutes.",
      },
      {
        kind: "h2",
        text: "Quarterly results — the in-between check",
      },
      {
        kind: "p",
        text: "Beyond the annual report, Indian companies report quarterly. Q1 (April-June) reports come around late July. Q2 (July-Sep) around late October. Q3 (Oct-Dec) around late January. Q4 (Jan-March) along with annual results around April-May.",
      },
      {
        kind: "p",
        text: "Quarterly results are shorter (3-5 page press release + ~20 page presentation). Read the management commentary; skim the numbers; compare to last quarter and year-ago quarter. That's enough for ongoing tracking.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Most of an annual report is boilerplate. The signal is in ~30 pages.",
          "20-minute scan: Chairman's letter, 5-year summary, MD&A, cash flow, accounting policies, related-party transactions.",
          "Numbers to extract: revenue growth, EBITDA margin trend, ROE, debt/equity, cash conversion, promoter holding.",
          "ROE > 18% sustained over a decade is the gold standard for Indian compounders.",
          "Red flags: revenue growth without cash growth, promoter pledge rising, frequent unrelated acquisitions.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "If a company shows strong revenue growth but cash flow from operations isn't growing in proportion, what should you investigate?",
        options: [
          "Nothing — revenue is the only thing that matters",
          "Whether earnings are 'real' — high receivables or aggressive accounting can flatter revenue without cash backing",
          "The CEO's salary",
          "The auditor's qualifications",
        ],
        correctIndex: 1,
        explanation: "Revenue without cash conversion is a common precursor to accounting issues. Check receivables, working capital, and management commentary on collections.",
      },
      {
        id: "q2",
        prompt: "Which metric best captures whether a company is genuinely compounding shareholder wealth over a long period?",
        options: ["Revenue growth", "Sustained ROE > 18%", "Dividend yield", "P/E ratio"],
        correctIndex: 1,
        explanation: "ROE measures how efficiently the company turns equity into profit. Sustained high ROE over 5-10+ years is the hallmark of an Indian compounder.",
      },
    ],
  },
  {
    id: "w04-l05",
    weekId: W,
    order: 5,
    title: "Valuation in Indian context — P/E, P/B, ROE",
    summary: "Three numbers do most of the heavy lifting for Indian equity valuation. Knowing what's high, low, and reasonable is half the battle.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Valuation is the bridge between price (what you pay) and value (what you get). It's never precise — every multiple has caveats and exceptions. But three numbers give you 80% of what you need for most Indian listed companies.",
      },
      {
        kind: "h2",
        text: "P/E — the universal first check",
      },
      {
        kind: "p",
        text: "{{pe-ratio|P/E ratio}} = price per share / earnings per share. A P/E of 25 means the stock costs 25 years of current earnings. High P/E = market expects fast growth (or is overpaying). Low P/E = pessimism, value, or a trap.",
      },
      {
        kind: "table",
        headers: ["P/E range (Indian context)", "Typical interpretation"],
        rows: [
          ["< 10", "Deep value or cyclical bottom — or value trap"],
          ["10-15", "Reasonable for a mature business"],
          ["15-25", "Indian large-cap median range"],
          ["25-40", "Growth premium — needs to keep delivering"],
          ["> 40", "High expectations — small disappointment = big drop"],
        ],
      },
      {
        kind: "p",
        text: "Indian Nifty 50's average P/E has oscillated between 18-28 over the past two decades. As of late 2024, Nifty traded around 22-24x trailing earnings — historically rich but not extreme.",
      },
      {
        kind: "h2",
        text: "Trailing vs forward P/E",
      },
      {
        kind: "p",
        text: "**Trailing P/E** uses the last 4 quarters of actual earnings. Real, audited, but backward-looking. **Forward P/E** uses analyst estimates for the next 4 quarters. More relevant for fast-changing businesses, but only as good as the estimates.",
      },
      {
        kind: "p",
        text: "Use trailing for cyclical and mature businesses. Use forward for high-growth (where last year's earnings undersell the trajectory). Don't compare a trailing P/E in one stock to a forward P/E in another — apples and oranges.",
      },
      {
        kind: "h2",
        text: "P/B — useful for banks and asset-heavy",
      },
      {
        kind: "p",
        text: "{{pb-ratio|P/B ratio}} = price / book value per share. Book value is what shareholders' equity is per share — a conservative floor on what the company is worth if liquidated.",
      },
      {
        kind: "p",
        text: "P/B is most useful for businesses where book value approximates real economic value:",
      },
      {
        kind: "list",
        items: [
          "**Banks** — HDFC Bank ~3x, ICICI Bank ~2.8x, SBI ~1.5x. PSU banks usually trade below 1x in tough periods, above 1.5x in good ones.",
          "**Real estate** — book value reflects land and inventory.",
          "**Heavy manufacturing** — book value reflects plants and machinery.",
        ],
      },
      {
        kind: "p",
        text: "P/B is much less useful for IT services, FMCG, pharma — these businesses derive value from brand, intellectual property, and customer relationships, none of which sit on the balance sheet as book value.",
      },
      {
        kind: "h2",
        text: "ROE — the quality filter",
      },
      {
        kind: "p",
        text: "ROE (Return on Equity) = Net profit / Shareholders' equity. This tells you how efficiently the company turns equity into profit. ROE × retention ratio = sustainable growth rate. A 20% ROE company that retains 50% of earnings can grow equity at 10% per year just from retained earnings.",
      },
      {
        kind: "table",
        headers: ["ROE range", "Quality"],
        rows: [
          ["< 8%", "Below cost of equity — destroying value"],
          ["8-12%", "Mediocre"],
          ["12-18%", "Solid"],
          ["18-25%", "Excellent"],
          ["> 25%", "Outstanding — but check for one-time items"],
        ],
      },
      {
        kind: "h2",
        text: "Combining the three",
      },
      {
        kind: "p",
        text: "P/E alone is dangerous. A stock at 30x P/E is expensive — unless its ROE is 25%+ and growth is durable. A stock at 10x P/E is cheap — unless ROE is 8% and the business is shrinking. Always read them together:",
      },
      {
        kind: "list",
        items: [
          "High P/E + high ROE + high growth = reasonable expensive (most great compounders)",
          "Low P/E + high ROE + stagnant = potential value",
          "High P/E + low ROE = overvalued story stock",
          "Low P/E + low ROE = value trap (most common retail mistake)",
        ],
      },
      {
        kind: "callout",
        tone: "money",
        title: "The PEG shortcut",
        text: "PEG = P/E / earnings growth rate. A stock at 30x P/E growing 30% per year has PEG of 1.0. PEG < 1 is often considered cheap-for-growth. Useful mental shortcut, but be cautious — growth rates are estimates and can be wrong.",
      },
      {
        kind: "h2",
        text: "Sector-specific norms",
      },
      {
        kind: "p",
        text: "Different sectors trade at different multiples for structural reasons:",
      },
      {
        kind: "list",
        items: [
          "**FMCG** (HUL, Nestle, Britannia) — 40-65x P/E historically; capital-light, brand-driven, high ROE",
          "**IT** (TCS, Infosys) — 20-30x P/E; cyclical but predictable, dollar-revenue exposed",
          "**Banks** — 1.5-4x P/B; P/E is less informative for banks",
          "**Cement, Steel** — cyclical, P/E can be 6-30x at different cycle stages",
          "**Pharma** — 25-50x P/E historically; defensive growth",
          "**PSU** — 5-15x P/E; government ownership cap on valuation",
        ],
      },
      {
        kind: "p",
        text: "Compare a stock to its own sector and its own history, not to the index. A bank at 2.5x P/B is rich for a PSU bank and cheap for HDFC Bank.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "P/E tells you how expensive the stock is vs current earnings. Nifty median: 18-28x.",
          "P/B is useful for banks and asset-heavy businesses; less useful for asset-light.",
          "ROE tells you quality. >18% sustained is excellent.",
          "Read P/E, P/B, ROE together. P/E alone is dangerous.",
          "Compare to sector and historical ranges, not to the index headline.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "A stock trades at 35x P/E. ROE is 26%, expected earnings growth 22%, debt-to-equity 0.3. Which classification fits best?",
        options: [
          "Overvalued — P/E is too high",
          "Reasonable for a high-quality compounder",
          "Value trap",
          "Banking sector specific",
        ],
        correctIndex: 1,
        explanation: "High P/E justified by high ROE + strong growth + low debt = a quality compounder. PEG = 35/22 ≈ 1.6 is on the rich side but reasonable for the quality.",
      },
      {
        id: "q2",
        prompt: "Why is P/B less useful for evaluating IT services companies like TCS?",
        options: [
          "IT companies don't disclose book value",
          "Their value comes from intellectual property and client relationships, which aren't on the balance sheet",
          "P/B is illegal in India",
          "Banks regulate IT differently",
        ],
        correctIndex: 1,
        explanation: "IT services are asset-light. Book value barely reflects the actual business. P/E and ROE are far more useful for asset-light businesses.",
      },
    ],
  },
  {
    id: "w04-l06",
    weekId: W,
    order: 6,
    title: "Indian taxation for equity investors (post-Budget 2024)",
    summary: "STCG, LTCG, STT, dividends — the four taxes that move your real return. The post-Budget 2024 rules.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Indian equity taxation is simple once you know the four categories. Budget 2024 changed several rates, so a lot of older online content is wrong. Here's the current state as of FY 2024-25.",
      },
      {
        kind: "h2",
        text: "Short-term capital gains (STCG)",
      },
      {
        kind: "p",
        text: "{{stcg|STCG}} applies to gains on listed equity shares (or equity mutual funds) held for **1 year or less**. The rate is **20%** flat. Budget 2024 raised this from 15% to 20%.",
      },
      {
        kind: "p",
        text: "Example: You buy ₹1 lakh of Reliance, sell after 6 months for ₹1.2 lakh. Gain = ₹20,000. STCG tax = ₹4,000 (20%).",
      },
      {
        kind: "h2",
        text: "Long-term capital gains (LTCG)",
      },
      {
        kind: "p",
        text: "{{ltcg|LTCG}} applies to gains on listed equity held for **more than 1 year**. The rate is **12.5%** above an annual exemption of **₹1.25 lakh**. Budget 2024 changed both — rate up from 10%, exemption up from ₹1 lakh.",
      },
      {
        kind: "p",
        text: "Example: ₹1 lakh of TCS held 3 years, sold for ₹1.6 lakh. Gain = ₹60,000. Below ₹1.25 lakh threshold = tax-free. If gain were ₹2 lakh, the taxable portion is ₹75,000 (₹2L - ₹1.25L); tax = ₹9,375 (12.5%).",
      },
      {
        kind: "table",
        headers: ["Asset class", "Holding period for LT", "LT rate (FY24-25)", "ST rate"],
        rows: [
          ["Listed equity, equity MFs", "> 1 year", "12.5% above ₹1.25L exemption", "20%"],
          ["Listed bonds", "> 1 year", "12.5%", "Slab rate"],
          ["Debt mutual funds (bought after April 2023)", "Any", "Slab rate", "Slab rate"],
          ["Gold ETFs, SGB", "> 1 year (Gold ETF); on maturity (SGB) — LTCG exempt", "12.5% (Gold ETF)", "Slab rate"],
          ["Real estate", "> 24 months", "12.5% (no indexation post-Budget 2024)", "Slab rate"],
          ["Cryptocurrency (VDA)", "Any", "30% flat", "30% flat"],
        ],
      },
      {
        kind: "h2",
        text: "Securities Transaction Tax (STT)",
      },
      {
        kind: "p",
        text: "{{stt|STT}} is a small tax built into every equity trade. You don't see it on your trade confirmation but it's there. Current rates (post-Budget 2024):",
      },
      {
        kind: "list",
        items: [
          "Cash market delivery — 0.1% on both buy and sell",
          "Cash market intraday (squared off) — 0.025% on sell side only",
          "Equity F&O — STT on futures: 0.02% on sell side. STT on options: 0.10% on premium on sell side (Budget 2024 hiked this materially)",
        ],
      },
      {
        kind: "p",
        text: "STT is unavoidable. It's the price of trading on regulated Indian exchanges. For active F&O traders, STT can easily exceed ₹50,000-1,00,000 per year — material.",
      },
      {
        kind: "h2",
        text: "Dividends",
      },
      {
        kind: "p",
        text: "Dividends from Indian companies are taxed in your hands at your **slab rate**. Before 2020, there was a Dividend Distribution Tax (DDT) paid by the company; that's been abolished. Now you get the gross dividend and pay tax based on your income slab.",
      },
      {
        kind: "p",
        text: "If you're in the 30% slab, a ₹10,000 dividend is taxed at ₹3,000 + cess. This is why high-dividend strategies are less tax-efficient than capital appreciation for high earners.",
      },
      {
        kind: "h2",
        text: "F&O income — business income",
      },
      {
        kind: "p",
        text: "F&O profits are NOT capital gains. They're treated as **business income** under 'profits from business or profession'. This means:",
      },
      {
        kind: "list",
        items: [
          "Taxed at your slab rate (potentially 30% + cess)",
          "Losses can be offset against any business income; but cannot be set off against salary income in the same year",
          "Losses can be carried forward 8 years",
          "If turnover exceeds threshold (~₹1 cr for some, ₹10 cr for others), tax audit becomes mandatory",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Budget 2024 raised F&O costs across the board",
        text: "STCG 15% → 20%. STT on options nearly doubled. SEBI also raised lot sizes and reduced weekly expiries. Combined, the cost of F&O has gone up materially in 2024. If you do F&O, factor in 5-10% of profits going to tax + STT + brokerage.",
      },
      {
        kind: "h2",
        text: "Section 80C and ELSS",
      },
      {
        kind: "p",
        text: "If you're on the **old tax regime**, Section 80C lets you deduct up to ₹1.5 lakh of specified investments — PPF, EPF, NSC, life insurance premium, home loan principal, and {{elss|ELSS}} (Equity Linked Savings Scheme mutual funds). ELSS has the shortest lock-in (3 years) and equity returns.",
      },
      {
        kind: "p",
        text: "The **new tax regime** (default for FY24-25 onward) has no Section 80C deduction. You decide which regime fits your situation; for those with significant 80C-eligible investments and home loan interest, the old regime can still be better.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "STCG on equity (≤1 year): 20% flat (was 15% pre-Budget 2024).",
          "LTCG on equity (>1 year): 12.5% above ₹1.25 lakh annual exemption (was 10% above ₹1 lakh).",
          "STT applies to every trade — material for F&O after Budget 2024 hikes.",
          "Dividends taxed at slab rate; high earners pay 30%+.",
          "F&O income is taxed as business income, not capital gains.",
          "Section 80C and ELSS only available in the old tax regime.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "You hold Nifty index fund for 2 years and book ₹2 lakh long-term gain in FY24-25. What's your tax?",
        options: [
          "₹20,000 (10% above ₹1 lakh)",
          "₹9,375 (12.5% above ₹1.25 lakh)",
          "₹40,000 (20% flat)",
          "Tax-free",
        ],
        correctIndex: 1,
        explanation: "Post-Budget 2024: LTCG 12.5% above ₹1.25 lakh exemption. Taxable gain = ₹2L - ₹1.25L = ₹75,000. Tax = ₹9,375.",
      },
      {
        id: "q2",
        prompt: "How is F&O profit treated for tax purposes in India?",
        options: [
          "Capital gains (12.5% LTCG)",
          "Business income, taxed at your slab rate",
          "Tax-exempt",
          "Same as dividends",
        ],
        correctIndex: 1,
        explanation: "F&O profits are business income. Taxed at your slab rate (could be up to 30%+ cess). Losses can be carried forward 8 years.",
      },
    ],
  },
];

export const WEEK_04_LESSONS = lessons;
