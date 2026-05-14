import type { Lesson } from "../types";

const W = 16;

const lessons: Lesson[] = [
  {
    id: "w16-l01",
    weekId: W,
    order: 1,
    title: "Reviewing the framework end-to-end",
    summary: "A 16-week recap. The mental model you now have for thinking about markets.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "You've spent 16 weeks building a mental model of markets. Let's recap what you should now have — and what to do with it.",
      },
      {
        kind: "h2",
        text: "The four pillars",
      },
      {
        kind: "p",
        text: "Phase 1 (Weeks 1-3) gave you the foundations:",
      },
      {
        kind: "list",
        items: [
          "What a market is — price discovery, bid-ask, liquidity, order types",
          "Money and rates — interest as the price of money, central banks, transmission",
          "Economic indicators — GDP, CPI, PMI, NFP — the data calendar",
        ],
      },
      {
        kind: "p",
        text: "Phase 2 (Weeks 4-10) covered the seven markets:",
      },
      {
        kind: "list",
        items: [
          "Indian equities — structure, indices, FII/DII, taxation",
          "Global equities — US dominance, Mag 7, geographic diversification",
          "Forex — DXY, USD/INR, carry trade",
          "Crude oil — OPEC+, India's exposure",
          "Gold, silver, metals — macro drivers, SGBs",
          "Bonds — yields, duration, US 10Y as benchmark",
          "Crypto — as a small allocation, Indian taxation",
        ],
      },
      {
        kind: "p",
        text: "Phase 3 (Weeks 11-13) connected everything:",
      },
      {
        kind: "list",
        items: [
          "Intermarket framework — DXY/yields/commodities/equities as a connected machine",
          "Macro regimes — growth vs inflation quadrants",
          "Liquidity — Fed balance sheet, global USD flow",
        ],
      },
      {
        kind: "p",
        text: "Phase 4 (Weeks 14-15) gave you practice:",
      },
      {
        kind: "list",
        items: [
          "Event-driven analysis — monthly calendar, earnings season, Budget",
          "Case studies — COVID, 2022 inflation, SVB, yen unwind, Adani-Hindenburg",
        ],
      },
      {
        kind: "diagram",
        diagram: "nifty-history",
        caption: "25 years of Nifty in one chart. Multiple major drawdowns. Yet from ~1,500 to 26,000 — patient capital wins.",
      },
      {
        kind: "h2",
        text: "What this framework lets you do",
      },
      {
        kind: "list",
        items: [
          "**Read the macro environment** — identify regime, understand drivers, anticipate ripple effects",
          "**Set strategic allocation** — equity / debt / gold / international split that matches your situation",
          "**Tilt tactically** — adjust 5-15% based on regime read",
          "**Stay disciplined through events** — pre-committed responses, no panic-selling",
          "**Continuously improve** — learn from each cycle and refine your mental model",
        ],
      },
      {
        kind: "h2",
        text: "What it doesn't do",
      },
      {
        kind: "list",
        items: [
          "Make you a successful active trader (different skill)",
          "Predict tops and bottoms precisely",
          "Eliminate market drawdowns from your portfolio",
          "Replace personal financial planning (taxes, insurance, real estate, etc.)",
          "Make you rich quickly",
        ],
      },
      {
        kind: "p",
        text: "What this framework does is help you make better long-term decisions consistently, without being overwhelmed or anxious. The goal isn't to be the smartest investor in the room — it's to be the most disciplined and structured one.",
      },
      {
        kind: "h2",
        text: "Your competitive advantage as Indian retail",
      },
      {
        kind: "p",
        text: "Indian retail has structural advantages over global institutional investors:",
      },
      {
        kind: "list",
        items: [
          "**Long horizon** — you can hold 20-30 years; pension funds report quarterly",
          "**No size constraint** — you can buy small-cap quality stocks; institutions can't deploy meaningful capital there",
          "**No mandate** — you can shift allocation without quarterly performance pressure",
          "**Cost advantage** — direct equity, index funds, RBI Retail Direct — all very low cost",
          "**Tax efficiency** — Indian LTCG at 12.5% above ₹1.25L is favorable",
          "**SIP discipline** — automatic dollar-cost-averaging beats most active strategies",
        ],
      },
      {
        kind: "callout",
        tone: "money",
        title: "Your job is patience",
        text: "Most Indian retail will earn 12-15% nominal CAGR over 20 years if they just maintain disciplined SIPs in diversified equity. That's ~7-9% real return. That's outstanding. Don't try to be a hero. Be patient. The framework you have is more than enough.",
      },
      {
        kind: "h2",
        text: "What changes from here",
      },
      {
        kind: "p",
        text: "From Week 16 onward, the question shifts from 'what do I need to learn?' to 'how do I practice and refine?' The next sections cover building your daily routine, choosing tools, making investing-vs-trading decisions, and where to go for the next 16 weeks.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "You've built a complete mental model: foundations, seven markets, connections, practice.",
          "Framework lets you read the macro, set allocation, tilt tactically, stay disciplined.",
          "Indian retail has structural advantages: long horizon, no constraints, low costs, favorable tax.",
          "The job is patience and discipline — not stock picking genius.",
          "12-15% nominal CAGR via disciplined SIPs is excellent over 20 years.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the biggest structural advantage of Indian retail investors vs institutions?",
        options: [
          "Better stock picks",
          "Long horizon flexibility — can hold 20-30 years without quarterly performance pressure, allowing real compounding through cycles",
          "Insider information",
          "Tax advantages only",
        ],
        correctIndex: 1,
        explanation: "Long horizon + no mandate = institutional retail's biggest edge. The ability to ignore short-term noise and compound across multiple cycles is a massive advantage.",
      },
      {
        id: "q2",
        prompt: "What does this 16-week framework actually deliver?",
        options: [
          "Stock picks for next year",
          "A mental model for thinking about markets coherently — set allocation, tilt tactically, stay disciplined through events",
          "Make you rich quickly",
          "Predict bottoms perfectly",
        ],
        correctIndex: 1,
        explanation: "Framework provides a lens for thinking, not predictions. The competitive edge it delivers is consistency and clarity, not crystal ball forecasting.",
      },
    ],
  },
  {
    id: "w16-l02",
    weekId: W,
    order: 2,
    title: "Designing your daily 20-minute routine",
    summary: "The exact routine to maintain over years. Customizable but specific.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "Routines build habits. Habits build expertise over years. Here's a tested 20-minute daily routine you can start tomorrow and maintain for 20 years.",
      },
      {
        kind: "h2",
        text: "Morning (10 minutes, before market open or first thing)",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Open TradingView macro watchlist (60 seconds)",
          "Note overnight US close — S&P, Nasdaq direction and % move",
          "Note DXY direction — overnight move and current level",
          "Note Brent and gold — significant moves?",
          "Note USD/INR overnight — where vs yesterday's close?",
          "Glance at Asian session — Nikkei, Hang Seng direction",
          "Check GIFT Nifty — preview for Indian open",
          "Form one-sentence mental thesis: 'today expected to be risk-on/risk-off/mixed because X'",
        ],
      },
      {
        kind: "h2",
        text: "Mid-day (optional, 2 minutes)",
      },
      {
        kind: "list",
        items: [
          "Glance at Nifty / Bank Nifty around 12:30 PM",
          "Check if Indian market is behaving as your morning thesis predicted",
          "Note any major Indian news",
        ],
      },
      {
        kind: "h2",
        text: "Evening (8 minutes, after market close)",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Nifty / Bank Nifty close — note % move and major level",
          "Check FII/DII flow data on NSE (~6:30 PM)",
          "Pick one stock that moved >2% — search 'why did X move today'",
          "Read one short article from Money Control or Mint",
          "Write one-sentence cause-effect note in your journal",
        ],
      },
      {
        kind: "p",
        text: "Example journal entry: 'Nifty -0.4%, FII sold ₹1,200 cr (5th consecutive day), IT was weakest sector (-1.1%), no obvious India-specific trigger — overnight S&P down 0.7%, DXY +0.3% set the tone.'",
      },
      {
        kind: "h2",
        text: "Weekly Sunday review (30 minutes)",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Skim 5 weekly notes from the past week — what was the dominant theme?",
          "Look at weekly charts of key symbols — DXY, S&P, Brent, Nifty — any breakouts?",
          "Note any major upcoming events for the week ahead (FOMC, CPI, Indian results)",
          "Review your portfolio for any drift from target allocation",
          "If equity allocation has drifted >5% from target, rebalance",
          "Write 2-3 sentences summarizing the week",
        ],
      },
      {
        kind: "h2",
        text: "Monthly review (45 minutes, first of each month)",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Update quadrant scorecard (growth + inflation indicators)",
          "Note current regime: Q1/Q2/Q3/Q4",
          "Compare to last month's read — has the regime shifted?",
          "Check liquidity dashboard — Fed balance sheet, DXY trend, RRP, RBI reserves",
          "Review portfolio in detail — winners, losers, any positions requiring action",
          "Plan SIP increases if income has grown",
          "Read one in-depth article or research note",
        ],
      },
      {
        kind: "h2",
        text: "Quarterly review (90 minutes)",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Comprehensive portfolio review — every position, performance vs strategic targets",
          "Update strategic allocation if life circumstances have changed",
          "Major rebalancing if needed",
          "Review tax-loss harvesting opportunities (especially before March 31)",
          "Read in-depth quarterly reports from companies you own",
          "Reflect on lessons learned from the quarter — what did you get right? What wrong?",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Sustainability over intensity",
        text: "The 20-minute daily routine is designed to be sustained for 20+ years. Most retail tries to do 3+ hours daily for 3 months and burns out. The shorter daily commitment compounds over decades; the intense short burst rarely lasts. Choose sustainability.",
      },
      {
        kind: "h2",
        text: "Skipping days",
      },
      {
        kind: "p",
        text: "You'll miss days. That's fine. The streak isn't about perfection — it's about returning. If you miss a week, just resume. The framework is forgiving; the only true failure is permanently quitting.",
      },
      {
        kind: "h2",
        text: "Adapting to your life",
      },
      {
        kind: "list",
        items: [
          "**Working professional**: this exact routine fits a 9-6 job",
          "**Student**: weight more on weekly/monthly reviews; daily is optional",
          "**Trader (active)**: significantly more time, different setup",
          "**Retired**: focus on monthly + quarterly; daily is unnecessary",
          "**Heavy social media user**: cut social media to make time; the trade is worthwhile",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Daily: 10 min morning, 8 min evening (~20 min total).",
          "Weekly: 30-min Sunday review.",
          "Monthly: 45-min first-of-month review.",
          "Quarterly: 90-min comprehensive review.",
          "Sustainability matters more than intensity — design for 20-year practice.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What time of day should you do the morning macro check?",
        options: [
          "After market opens",
          "Before market opens (or first thing in the morning) — gives you the macro context for the day ahead",
          "At market close",
          "Doesn't matter",
        ],
        correctIndex: 1,
        explanation: "Morning check before market open lets you form expectations based on overnight global moves. Useful even if you don't trade — builds intuition.",
      },
      {
        id: "q2",
        prompt: "Why is a 20-minute daily routine better than 2-3 hours of intensive analysis?",
        options: [
          "More is always better",
          "Sustainability — 20 min/day for 20 years compounds. Intense 2-3 hour days lead to burnout within months. Consistency > Intensity.",
          "Less learning",
          "Cheaper",
        ],
        correctIndex: 1,
        explanation: "Investment expertise builds over decades, not weeks. A sustainable daily practice you maintain for 20 years beats an intense practice you quit in 3 months.",
      },
    ],
  },
  {
    id: "w16-l03",
    weekId: W,
    order: 3,
    title: "Choosing your trackers and tools",
    summary: "The exact app stack to install today. Free and Indian-relevant.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "Modern Indian retail has access to powerful free tools that didn't exist a decade ago. Here's the recommended stack — minimal, free, Indian-relevant.",
      },
      {
        kind: "h2",
        text: "Essential apps to install",
      },
      {
        kind: "list",
        items: [
          "**TradingView** (free tier) — charts, watchlists, alerts. Best charting on mobile/web.",
          "**Investing.com** — economic calendar, news, multi-asset quotes.",
          "**Money Control** — Indian-specific markets news and tracking.",
          "**Screener.in** — Indian fundamentals, screener, financials. Best free source.",
          "**Trendlyne** — alternative aggregator with built-in commentary.",
          "**Zerodha Kite** or **Groww** — brokerage app for buying/selling.",
        ],
      },
      {
        kind: "h2",
        text: "Reference websites to bookmark",
      },
      {
        kind: "list",
        items: [
          "**NSE India** (nseindia.com) — official source for FII/DII data, index information",
          "**RBI** (rbi.org.in) — monetary policy, MPC minutes, forex reserves",
          "**SEBI** (sebi.gov.in) — regulations, IPO announcements, AIF/MF disclosures",
          "**FRED** (fred.stlouisfed.org) — US/global macro data",
          "**OECD Stats** — international comparisons",
        ],
      },
      {
        kind: "h2",
        text: "Books worth owning",
      },
      {
        kind: "list",
        items: [
          "**'The Intelligent Investor'** by Benjamin Graham — fundamentals of value investing",
          "**'A Random Walk Down Wall Street'** by Burton Malkiel — index investing case",
          "**'The Psychology of Money'** by Morgan Housel — behavioral finance, accessible",
          "**'When Genius Failed'** by Roger Lowenstein — LTCM crisis, lessons on leverage",
          "**'The Coffee Can Investing'** by Saurabh Mukherjee — Indian quality investing",
          "**'The Bogleheads' Guide to Investing'** — practical index/passive investing",
        ],
      },
      {
        kind: "h2",
        text: "Newsletters worth subscribing to",
      },
      {
        kind: "list",
        items: [
          "**Stratechery (Ben Thompson)** — technology and platform business analysis",
          "**Marc Rubinstein 'Net Interest'** — banking and finance commentary",
          "**Marginal Revolution** — economics blog by Tyler Cowen",
          "**Mint (premium)** — Indian financial daily, well-edited",
          "**The Ken (premium)** — Indian business journalism, good for sectoral deep dives",
        ],
      },
      {
        kind: "h2",
        text: "YouTube channels (selective)",
      },
      {
        kind: "list",
        items: [
          "**Zerodha Varsity** — free educational content, excellent for beginners",
          "**Akshat Shrivastava** — Indian retail investing, sometimes useful",
          "**Pranjal Kamra** — Indian retail focus, decent for beginners",
          "**Ray Dalio** (his videos on macro) — How the Economic Machine Works is a classic",
          "**Wall Street Journal Markets** — short, polished financial news",
        ],
      },
      {
        kind: "p",
        text: "Avoid most 'stock tip' YouTubers — they're entertainment, not analysis.",
      },
      {
        kind: "h2",
        text: "What to UNINSTALL or stop using",
      },
      {
        kind: "list",
        items: [
          "**Stock-tip Telegram groups** — almost universally bad",
          "**TV business news** — high noise, low signal",
          "**'Free tip' WhatsApp groups** — often scams",
          "**Apps with constant push notifications** — disable alerts",
          "**Social media stock 'gurus' on Twitter/Instagram** — minimal accountability, often selling courses",
        ],
      },
      {
        kind: "h2",
        text: "Optional premium tools",
      },
      {
        kind: "list",
        items: [
          "**TradingView paid tiers** — multi-chart, advanced indicators (₹2,000-5,000/year). Useful if you do active analysis.",
          "**Trendlyne premium / Tijori** — deeper Indian data (₹3,000-8,000/year)",
          "**ValuePickr forum** — Indian community for deep stock research (free)",
        ],
      },
      {
        kind: "p",
        text: "Premium tools are useful but not necessary. Free stack covers 90% of retail needs.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "The trap of tool addiction",
        text: "Some investors collect 20+ apps and 50+ data points to 'optimize'. More tools doesn't equal better decisions. The lean stack above gives you 95% of what professional retail investors use. Resist the urge to constantly add tools.",
      },
      {
        kind: "h2",
        text: "Setup checklist",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Open free TradingView account; create macro watchlist (10 symbols)",
          "Bookmark Investing.com economic calendar; filter to High importance + US + India",
          "Install Money Control and Screener.in apps",
          "Subscribe to 2-3 newsletters max",
          "Disable all push notifications on financial apps",
          "Block time on calendar for daily/weekly/monthly review routines",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Essential free stack: TradingView, Investing.com, Money Control, Screener.in.",
          "Reference sites: NSE, RBI, SEBI, FRED.",
          "Books: Intelligent Investor, Psychology of Money, Bogleheads Guide.",
          "Uninstall stock-tip groups, TV news during market hours, push notifications.",
          "Resist tool addiction; lean stack covers 95% of retail needs.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the best free source for Indian stock fundamentals and financials?",
        options: [
          "Bloomberg",
          "Screener.in — free, comprehensive, Indian-focused",
          "Premium Money Control",
          "Twitter",
        ],
        correctIndex: 1,
        explanation: "Screener.in is the standard free tool for Indian retail fundamental research. Most professional Indian retail investors use it daily.",
      },
      {
        id: "q2",
        prompt: "What's the right approach to push notifications on financial apps?",
        options: [
          "Enable all notifications",
          "Disable nearly all notifications; use scheduled review times instead",
          "Set them to LOUD",
          "Constant alerts are essential",
        ],
        correctIndex: 1,
        explanation: "Push notifications fragment attention and create reactive trading. Scheduled review times produce better decisions than reactive notification-driven behavior.",
      },
    ],
  },
  {
    id: "w16-l04",
    weekId: W,
    order: 4,
    title: "Investing vs trading — making the personal call",
    summary: "Two very different activities, often confused. Honest framing of which makes sense for you.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Most Indian retail call themselves 'investors' but behave like traders. The distinction matters because the math is brutally different.",
      },
      {
        kind: "h2",
        text: "The honest distinction",
      },
      {
        kind: "table",
        headers: ["Trait", "Investing", "Trading"],
        rows: [
          ["Holding period", "Years to decades", "Days to months"],
          ["Number of decisions per year", "5-50", "50-1000+"],
          ["What you're betting on", "Business growth + compounding", "Price movement"],
          ["Cost structure", "Low (one-time + small periodic)", "High (every transaction)"],
          ["Tax efficiency", "Long-term capital gains", "Short-term gains or business income"],
          ["Time commitment", "20 min/day max", "Hours daily"],
          ["Information edge", "Patience + quality selection", "Pattern recognition + execution"],
          ["Typical retail outcome", "Most can do well over decades", "Most lose money over years"],
        ],
      },
      {
        kind: "h2",
        text: "Why most retail lose money trading",
      },
      {
        kind: "p",
        text: "SEBI's own data: 90% of individual F&O traders lose money over a year. Within active intraday traders in cash market, the win rate is similar. Why?",
      },
      {
        kind: "list",
        items: [
          "**Cost structure** — brokerage + STT + slippage + taxes eat profit on every trade. Costs are 0.05-0.30% per trade for active retail. Over hundreds of trades, this compounds.",
          "**Competition** — you're trading against professional firms with millions of dollars in technology and dozens of years of experience",
          "**Psychological costs** — losses cause more pain than gains pleasure (loss aversion). Decision quality degrades under stress.",
          "**Survivorship bias** — winners post on social media, losers don't. You see only the 10% who succeeded, not the 90% who didn't.",
          "**Leverage destruction** — F&O margin requirements amplify both gains and losses. Most retail use too much leverage.",
        ],
      },
      {
        kind: "h2",
        text: "Why most can do well investing",
      },
      {
        kind: "list",
        items: [
          "**No information edge needed** — you're betting on broad business compounding, which happens regardless of short-term price movements",
          "**Time is the equalizer** — compounding works for everyone with patience",
          "**Cost advantage** — index funds at 0.05-0.5% TER, occasional rebalancing, low STT impact",
          "**Tax efficiency** — long-term holdings benefit from favorable LTCG rates",
          "**Mathematical certainty** — Indian Nifty has averaged 12-14% over 30 years; you don't need to predict each year",
        ],
      },
      {
        kind: "h2",
        text: "Who should consider trading?",
      },
      {
        kind: "p",
        text: "A small subset of retail can profit from trading IF certain conditions are met:",
      },
      {
        kind: "list",
        items: [
          "Full-time commitment (4+ hours daily)",
          "Strong mathematical/statistical background",
          "Risk-management discipline (max drawdown <20%, position sizing rules)",
          "Capital you can afford to lose entirely",
          "3-5 years of paper trading before going live",
          "Realistic expectations: even good traders make 15-30% annually, not 100%+",
        ],
      },
      {
        kind: "p",
        text: "If even one of these is missing, you should not be trading.",
      },
      {
        kind: "h2",
        text: "The 'sometimes investor, sometimes trader' confusion",
      },
      {
        kind: "p",
        text: "Many retail switch between modes mid-position:",
      },
      {
        kind: "list",
        items: [
          "Buy as 'long-term investment'; sell after a week because stock went up 8%",
          "Buy as 'trade'; hold for years because it's now in loss",
          "Different parts of portfolio with different timeframes, no clear strategy",
        ],
      },
      {
        kind: "p",
        text: "Pick one. Or have two clearly separated accounts with separate rules. Mixing kills both strategies.",
      },
      {
        kind: "analogy",
        title: "Marriage vs dating",
        text: "Investing is like marriage — long horizon, deep commitment, patience through difficult times, expect compounding. Trading is like dating — short-term assessment, multiple parallel options, exit at the first sign of mismatch. Both can be valid in life. Confusing them — committing to a date or trading a marriage — usually ends badly.",
      },
      {
        kind: "h2",
        text: "The pragmatic Indian retail decision",
      },
      {
        kind: "p",
        text: "For 95% of Indian retail, the right answer is investing, not trading. Specifically:",
      },
      {
        kind: "list",
        items: [
          "Monthly SIPs into broad equity (Nifty 50 + Mid-cap blend)",
          "Some international equity exposure (10-20%)",
          "Modest debt allocation (15-25%)",
          "Small gold allocation (5-10%)",
          "Rebalance annually",
          "Keep working at your day job",
        ],
      },
      {
        kind: "p",
        text: "This boring approach produces 10-13% CAGR over 20-30 years, beats inflation by 5-7% real, and requires 30 minutes a week of maintenance. It's the highest-probability path to wealth for the average Indian retail.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The math of patience",
        text: "₹10,000/month SIP for 30 years at 12% CAGR = ₹3.5 crore. ₹50,000/month for 30 years at 12% = ₹17.5 crore. The biggest wealth creator isn't returns — it's amount × time. Increase your SIP every year by your salary growth rate; let compounding do the rest.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Investing and trading are very different activities; cost structure, time commitment, and skills differ dramatically.",
          "SEBI data: 90% of F&O traders lose money over a year.",
          "Investing edges retail can capitalize on: long horizon, low costs, tax efficiency.",
          "Trading viable for a small minority who meet specific conditions; otherwise destructive.",
          "For 95% of Indian retail, disciplined SIP-based investing is the right strategy.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "According to SEBI's data, what percentage of individual F&O traders lose money over a year?",
        options: ["10%", "30%", "50%", "Around 90%"],
        correctIndex: 3,
        explanation: "SEBI's published data showed roughly 90% of individual F&O traders lose money over a year. Costs, leverage, and competition with professional firms explain this.",
      },
      {
        id: "q2",
        prompt: "For most Indian retail investors, what's the highest-probability path to wealth?",
        options: [
          "Active F&O trading",
          "Disciplined monthly SIPs in broad equity + diversification + 20-30 year horizon + annual rebalancing",
          "Day trading equity",
          "Penny stocks",
        ],
        correctIndex: 1,
        explanation: "SIP discipline + compounding + broad equity exposure over 20-30 years has consistently produced wealth for Indian retail. The math is robust; the discipline is the challenge.",
      },
    ],
  },
  {
    id: "w16-l05",
    weekId: W,
    order: 5,
    title: "Tax-aware portfolio construction (Indian context)",
    summary: "Smart asset location can add 1-2% to your real returns. Specifics for Indian retail.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Where you hold an asset matters as much as which asset you hold. Tax-aware portfolio construction is one of the highest-leverage decisions for an Indian retail investor — adding 1-2% to real annual returns through smart asset location.",
      },
      {
        kind: "h2",
        text: "The Indian tax landscape (post Budget 2024)",
      },
      {
        kind: "table",
        headers: ["Asset", "STCG/LTCG treatment", "Dividend"],
        rows: [
          ["Indian listed equity (>1y)", "LTCG 12.5% above ₹1.25L exemption", "Slab rate"],
          ["Indian listed equity (≤1y)", "STCG 20%", "Slab rate"],
          ["Debt mutual funds", "Slab rate regardless of holding period (post-April 2023)", "Slab rate"],
          ["Direct G-Sec interest", "Slab rate (income from other sources)", "N/A"],
          ["FDs", "Slab rate", "N/A"],
          ["Listed bonds (>1y)", "LTCG 12.5%", "Slab rate"],
          ["Gold ETF (>1y)", "LTCG 12.5%", "N/A"],
          ["Sovereign Gold Bonds (at maturity)", "LTCG fully exempt!", "Coupon at slab rate"],
          ["Real estate (>2y)", "LTCG 12.5% (no indexation post-Budget 2024)", "Rent at slab rate"],
          ["Cryptocurrency", "30% flat regardless of period", "N/A"],
          ["International equity (Indian MF)", "Slab rate post-April 2023", "Slab rate"],
          ["International equity (direct LRS)", "Complex; varies", "Withheld + Indian tax"],
        ],
      },
      {
        kind: "h2",
        text: "Smart asset location principles",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Hold tax-favored assets in taxable accounts** — Indian listed equity (12.5% LTCG) is highly tax-efficient for long-term holding",
          "**Maximize tax-free accounts** — EPF, NPS, ELSS (if on old regime) provide tax-deferred or tax-free growth",
          "**Place income-generating assets where taxes are deferred** — FD interest and dividends are taxed at slab rate; PPF interest is tax-free",
          "**Use Sovereign Gold Bonds over physical gold** — SGB LTCG exempt at 8-year maturity",
          "**Tax-loss harvest** — in March, sell loss positions to offset gains; rebuy 31 days later (no wash sale rule like US, so 1-day rebuy is technically OK)",
        ],
      },
      {
        kind: "h2",
        text: "Account types for Indian retail",
      },
      {
        kind: "list",
        items: [
          "**Demat (Trading) account** — for equity, listed bonds, gold ETF, REITs",
          "**EPF (Employees' Provident Fund)** — mandatory for salaried; tax-free interest + maturity",
          "**NPS (National Pension System)** — additional ₹50k deduction beyond 80C; partial tax exemption on withdrawal",
          "**PPF (Public Provident Fund)** — tax-free interest, principal, and maturity; 15-year lock-in; ₹1.5L annual cap",
          "**Mutual fund folio** — for direct MF holdings; same tax as underlying assets",
        ],
      },
      {
        kind: "h2",
        text: "Building tax-efficient portfolios",
      },
      {
        kind: "p",
        text: "A tax-efficient structure for a middle-income Indian (age 30-40, married, 1-2 dependents):",
      },
      {
        kind: "table",
        headers: ["Vehicle", "Annual contribution", "Tax treatment"],
        rows: [
          ["**EPF** (employer + employee)", "12-25% of salary", "Tax-free interest, tax-free maturity"],
          ["**PPF**", "₹1.5L (Section 80C limit)", "Tax-free everything"],
          ["**NPS** (additional)", "₹50k beyond 80C", "Deduction + partial tax-free maturity"],
          ["**ELSS (if old regime)**", "₹1.5L (within 80C, alternative to PPF)", "12.5% LTCG"],
          ["**Direct equity (long-term)**", "Variable", "12.5% LTCG above ₹1.25L"],
          ["**Equity mutual funds**", "Variable", "Same as above"],
          ["**Debt MF / FDs**", "Emergency + short-term", "Slab rate"],
          ["**SGB**", "Gold allocation", "Tax-free at maturity"],
        ],
      },
      {
        kind: "h2",
        text: "Tax-loss harvesting",
      },
      {
        kind: "p",
        text: "By end of March, review your holdings:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Identify positions in significant loss",
          "If you have capital gains realized in the same financial year, sell loss positions to offset",
          "Buy back the same positions 1-2 days later (Indian rules allow this; the loss is still booked)",
          "STCG losses offset STCG gains; LTCG losses offset LTCG gains; carry forward 8 years",
        ],
      },
      {
        kind: "p",
        text: "This is legal and saves real tax. Most retail don't do it; it's an easy 0.5-1% annual return improvement.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "Old vs new tax regime",
        text: "Old regime: claim Section 80C (₹1.5L), 80D (insurance), home loan interest, HRA, LTA. New regime: lower slab rates but no deductions. For most working salaried with high 80C utilization + home loan + insurance, old regime saves more. Run the math each year; circumstances change.",
      },
      {
        kind: "h2",
        text: "The big picture",
      },
      {
        kind: "p",
        text: "Most Indian retail don't optimize for taxes:",
      },
      {
        kind: "list",
        items: [
          "They hold equity in churn-heavy portfolios — paying STCG instead of LTCG",
          "They neglect 80C tools — PPF, ELSS, EPF top-ups",
          "They underuse NPS (additional ₹50k deduction)",
          "They don't tax-loss harvest in March",
          "They forget LTCG exemption for SGBs at maturity",
        ],
      },
      {
        kind: "p",
        text: "Combined, these 'free wins' can add 1-2% to your real annual returns. Compounded over 30 years, that's life-changing wealth.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Tax-efficient asset location can add 1-2% to annual real returns.",
          "Hold long-term equity in taxable accounts (LTCG 12.5% favorable); use PPF/EPF for tax-free growth.",
          "SGB > physical gold and gold ETFs for tax-efficient gold allocation.",
          "Tax-loss harvest in March before year-end.",
          "Run old-vs-new tax regime math each year based on your specific deductions.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is Sovereign Gold Bond (SGB) tax-superior to physical gold or gold ETF for long-term holding?",
        options: [
          "Higher returns",
          "LTCG fully exempt at 8-year maturity; plus 2.5% annual coupon; plus no making charges or storage cost",
          "Government-backed",
          "Easier to sell",
        ],
        correctIndex: 1,
        explanation: "SGB's LTCG exemption at maturity is unique — no other gold form gets this. Combined with the 2.5% coupon and zero overhead, it's tax-mathematically dominant.",
      },
      {
        id: "q2",
        prompt: "What's tax-loss harvesting and when should you do it?",
        options: [
          "Selling profitable positions",
          "Selling loss positions in March to offset realized gains in the same financial year; rebuy 1-2 days later if you still want the position",
          "Not paying taxes",
          "Random selling",
        ],
        correctIndex: 1,
        explanation: "Tax-loss harvesting is legal and effective. Sell loss positions, claim the loss against gains, rebuy after 1-2 days if you want to maintain the position. Saves real tax annually.",
      },
    ],
  },
  {
    id: "w16-l06",
    weekId: W,
    order: 6,
    title: "Where to go from here — the next 16 weeks and beyond",
    summary: "After 16 weeks of foundations, what's next? Deeper specialization, practice, and long-term mastery.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "You've completed the 16-week framework. Congratulations — you now know more about markets than 95% of Indian retail investors. The question is: what's next?",
      },
      {
        kind: "h2",
        text: "Three paths from here",
      },
      {
        kind: "h3",
        text: "Path 1: Practical investor (most appropriate for most)",
      },
      {
        kind: "p",
        text: "Apply the framework. Don't add more learning before you've practiced for 12-24 months. Specifically:",
      },
      {
        kind: "list",
        items: [
          "Set up your tools and routines this week",
          "Run them for 12 months without major changes",
          "Build the SIPs and discipline",
          "Watch one full earnings season per quarter",
          "Read 1-2 quality finance books per quarter",
          "Re-read this curriculum after 12 months — different lessons will land",
        ],
      },
      {
        kind: "p",
        text: "Most retail's biggest gains come from running the framework, not adding more knowledge. Year 2 of practicing beats Year 1 of learning.",
      },
      {
        kind: "h3",
        text: "Path 2: Active investor (for committed enthusiasts)",
      },
      {
        kind: "p",
        text: "Deepen your edge in specific areas:",
      },
      {
        kind: "list",
        items: [
          "**Individual stock analysis** — Aswath Damodaran's valuation courses (free on his YouTube channel)",
          "**Indian sectoral expertise** — pick 1-2 sectors to specialize in (banks, FMCG, IT, energy)",
          "**Macro deep dives** — Lyn Alden's writing on macro; Bridgewater's research",
          "**Indian small/mid cap research** — ValuePickr forum, Capital Mind",
          "**International equity** — get LRS account, start with $1k/quarter direct US investing",
        ],
      },
      {
        kind: "h3",
        text: "Path 3: Active trader (for very specific personalities)",
      },
      {
        kind: "p",
        text: "If you absolutely want to trade actively, do it right:",
      },
      {
        kind: "list",
        items: [
          "Paper trade for 6-12 months first",
          "Read 'Trading in the Zone' by Mark Douglas (psychology of trading)",
          "Develop and BACKTEST a specific strategy",
          "Risk no more than 1-2% of capital per trade",
          "Start with cash, never use leverage until proven profitable for 12+ months",
          "Track every trade in a journal with reason for entry, exit, and outcome",
        ],
      },
      {
        kind: "p",
        text: "If you're not doing all these, you're not trading — you're gambling. The math will eventually punish you.",
      },
      {
        kind: "h2",
        text: "Long-term skill development",
      },
      {
        kind: "p",
        text: "Over years, the skills that matter most for any path:",
      },
      {
        kind: "list",
        items: [
          "**Patience** — the foundation of compounding",
          "**Emotional regulation** — not panicking in stress, not euphoric in highs",
          "**Continuous learning** — but slow and deliberate, not frantic",
          "**Honest self-assessment** — knowing what you did right, wrong, and why",
          "**Humility** — markets will humble even the smartest analysts",
          "**Sustainability** — practices that work for 30 years, not 30 days",
        ],
      },
      {
        kind: "h2",
        text: "Common derailers to avoid",
      },
      {
        kind: "list",
        items: [
          "**Chasing the latest hot thing** — IPOs, themes, sectors. Stay disciplined",
          "**Listening to gurus over yourself** — your own judgment, refined by experience, is more reliable than anyone's",
          "**Excessive trading** — destroys returns, increases anxiety",
          "**Information overload** — more data ≠ better decisions",
          "**Frequent strategy changes** — switching mutual funds every quarter loses you all the compounding",
          "**Lifestyle inflation** — increasing spending faster than savings; reverses the compounding equation",
        ],
      },
      {
        kind: "h2",
        text: "Building wealth over decades",
      },
      {
        kind: "p",
        text: "The boring truth: most Indian retail will build wealth primarily through:",
      },
      {
        kind: "list",
        items: [
          "Earning more over their career (skills, promotions, side income)",
          "Saving more as income grows (increasing SIPs)",
          "Holding through cycles (not interrupting compounding)",
          "Modest tax optimization (1-2% per year edge)",
          "Avoiding catastrophic mistakes (panic-selling, leverage, scams)",
        ],
      },
      {
        kind: "p",
        text: "Notice what's NOT on this list: picking great stocks, timing markets, finding multi-baggers. Those are bonuses. The main game is consistent saving + compounding.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The 30-year math",
        text: "₹15,000/month SIP, starting at age 30, 12% CAGR, 30 years: corpus = ₹5.3 crore. ₹25,000/month, same parameters: ₹8.8 crore. ₹50,000/month: ₹17.6 crore. The amount matters more than the genius of stock-picking. Increase your SIP by 10% every year (matching salary growth). The math becomes spectacular.",
      },
      {
        kind: "h2",
        text: "A final philosophical note",
      },
      {
        kind: "p",
        text: "Markets exist to discover prices, allocate capital, and reward patience. They're not casinos. They're not enemies. They're long-term wealth-creation machines that occasionally have nasty episodes.",
      },
      {
        kind: "p",
        text: "Your job as an investor isn't to outsmart the market — it's to participate in it consistently with discipline, taking the average return that history has shown is robust over decades. The framework you've built in these 16 weeks gives you the tools.",
      },
      {
        kind: "p",
        text: "Now go use it. For 30 years. The mathematics will take care of the rest.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Apply the framework before adding more knowledge — practice beats theory.",
          "Three paths: practical investor (most), active investor (committed), active trader (specific personalities).",
          "Skills that matter most over years: patience, emotional regulation, continuous learning, humility, sustainability.",
          "Wealth comes primarily from earning more, saving more, holding through cycles, modest optimization, avoiding mistakes.",
          "The boring SIP + compounding math produces life-changing wealth over 20-30 years.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "After completing this 16-week curriculum, what's the most impactful next step for most retail?",
        options: [
          "Add more learning rapidly",
          "Apply the framework consistently for 12-24 months — practice beats theory for actual outcomes",
          "Start day trading",
          "Change to a different curriculum",
        ],
        correctIndex: 1,
        explanation: "Most retail's biggest gains come from running their framework, not adding more knowledge. Year 2 of disciplined practice typically beats Year 1 of intensive learning.",
      },
      {
        id: "q2",
        prompt: "What's the realistic long-term wealth-creation formula for most Indian retail?",
        options: [
          "Find the next multi-bagger stock",
          "Time the market perfectly",
          "Earning more + saving more + holding through cycles + modest tax optimization + avoiding catastrophic mistakes",
          "Trade daily for income",
        ],
        correctIndex: 2,
        explanation: "Stock-picking genius is a bonus. The main game is consistent saving + compounding + discipline. These produce predictable wealth over decades for most Indian retail.",
      },
    ],
  },
];

export const WEEK_16_LESSONS = lessons;
