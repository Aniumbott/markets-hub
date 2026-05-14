import type { Lesson } from "../types";

const W = 9;

const lessons: Lesson[] = [
  {
    id: "w09-l01",
    weekId: W,
    order: 1,
    title: "How bonds actually work — coupon, yield, price",
    summary: "The three numbers that define every bond and the inverse relationship between price and yield that confuses everyone at first.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "When you 'buy a stock', you become a part-owner of a company. When you 'buy a bond', you become a lender. The company (or government) borrows from you in exchange for fixed periodic interest and a promise to repay the principal at maturity.",
      },
      {
        kind: "p",
        text: "Three numbers describe every bond: {{coupon|coupon}}, face value, and maturity. Two derived numbers — price and {{yield|yield}} — move every day in inverse to each other. This inverse relationship is the most important thing to internalise about bond markets.",
      },
      {
        kind: "h2",
        text: "The basics",
      },
      {
        kind: "p",
        text: "Imagine a 10-year Indian government bond with:",
      },
      {
        kind: "list",
        items: [
          "Face value: ₹100",
          "Coupon: 7% (paid semi-annually as ₹3.50 every 6 months)",
          "Maturity: 10 years (at maturity, you get the ₹100 face value back)",
        ],
      },
      {
        kind: "p",
        text: "If you buy this bond at issue for ₹100, you receive ₹7 per year. Your yield (return) is exactly 7%. Easy.",
      },
      {
        kind: "h2",
        text: "Why prices move",
      },
      {
        kind: "p",
        text: "After issue, the bond trades in the secondary market. Suppose interest rates rise — new 10-year bonds are now issued at 8% coupon. Why would anyone buy your old 7% bond at ₹100 when they can get 8% on a new one?",
      },
      {
        kind: "p",
        text: "Answer: they wouldn't. Your bond's price has to drop. If your bond trades at ₹93, then a new buyer pays ₹93, receives ₹7 annual coupon, and gets ₹100 back at maturity. Their effective yield: roughly 8% (close to the new bond's coupon).",
      },
      {
        kind: "p",
        text: "Rates went up → bond prices went down. The inverse is also true: rates fall → bond prices rise.",
      },
      {
        kind: "h2",
        text: "Yield = total return concept",
      },
      {
        kind: "p",
        text: "Yield to Maturity (YTM) is the total annualized return you'd get from buying the bond at current price and holding to maturity, assuming all coupons are reinvested at the same yield. It combines:",
      },
      {
        kind: "list",
        items: [
          "Coupon payments",
          "Capital appreciation (if you bought below face value) or loss (if above)",
        ],
      },
      {
        kind: "p",
        text: "When you read 'Indian 10-year G-Sec yield is 6.85%', that's the current YTM on benchmark 10-year government bonds.",
      },
      {
        kind: "analogy",
        title: "The fixed-rent flat with changing market rents",
        text: "Imagine you've signed a 10-year lease for a flat at ₹30,000/month. After 3 years, market rents in the area have risen to ₹40,000/month. Your fixed lease has become valuable — you'd be willing to pay a premium to lock in a similar deal. If market rents fall to ₹20,000, your ₹30,000 lease has become an overpayment — its 'value' to a new buyer is negative. Bond prices work similarly relative to current market interest rates.",
      },
      {
        kind: "h2",
        text: "Duration — the sensitivity measure",
      },
      {
        kind: "p",
        text: "{{duration|Duration}} measures how much a bond's price changes when yields change. Roughly: a bond with duration of 8 years will lose ~8% if yields rise 1%, and gain ~8% if yields fall 1%.",
      },
      {
        kind: "p",
        text: "Longer maturity = higher duration = more sensitivity. A 30-year bond has higher duration than a 2-year bond. This is why long-duration bonds (like ultra-long Treasuries) were so painful in 2022 — Fed hiked, long yields rose, and 30-year bonds fell 30%+ in price.",
      },
      {
        kind: "h2",
        text: "Credit quality",
      },
      {
        kind: "p",
        text: "Government bonds (issued by sovereign nations in their own currency) are considered 'risk-free' — they can't default because they can print money. Corporate bonds carry credit risk: the company might go bankrupt before repaying.",
      },
      {
        kind: "p",
        text: "Credit ratings (AAA, AA, A, BBB, BB, B, etc.) signal default risk. AAA is the safest; junk bonds (BB and below) are riskier and pay higher yields to compensate.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Indian corporate bond yields",
        text: "AAA corporate bonds typically yield ~50-80 bps above G-Sec of same maturity. AA bonds: ~80-150 bps over G-Sec. Below A: spreads widen significantly. Use the spread as a quick proxy for the credit risk you're taking.",
      },
      {
        kind: "h2",
        text: "Why bonds matter even if you don't own them",
      },
      {
        kind: "p",
        text: "Bond yields are the discount rate for every other asset. Your home loan EMI follows G-Sec yields. Equity valuations get reset by bond yields. Stocks compete with bonds for investor capital. The 10-year US Treasury yield is the gravity of the financial universe.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Bond = loan to borrower; coupon = interest payment; face value = principal repaid at maturity.",
          "Price and yield move inversely. Rates up = bond prices down.",
          "Duration measures price sensitivity to yield changes. Long bonds = high duration = more risk.",
          "Government bonds are risk-free in own currency; corporate bonds carry credit risk.",
          "Bond yields are the discount rate for every other asset.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "If market interest rates rise 1%, what happens to the price of an existing bond with 8-year duration?",
        options: [
          "Price rises 1%",
          "Price falls roughly 8%",
          "Price unchanged",
          "Price doubles",
        ],
        correctIndex: 1,
        explanation: "Duration × yield change ≈ price change. 8 × 1% = 8% price decline approximately. The inverse relationship between rates and bond prices is the core bond market mechanic.",
      },
      {
        id: "q2",
        prompt: "Why do AAA corporate bonds typically yield more than government bonds of the same maturity?",
        options: [
          "Corporates are bigger than governments",
          "Credit risk — companies can default; governments (in their own currency) cannot. The spread compensates for default risk",
          "Tax differences only",
          "Random",
        ],
        correctIndex: 1,
        explanation: "The yield spread over government bonds is the credit risk premium. AAA bonds pay ~50-80 bps more than G-Secs to compensate for the small but real default probability.",
      },
    ],
  },
  {
    id: "w09-l02",
    weekId: W,
    order: 2,
    title: "The yield curve and what an inversion means",
    summary: "A simple chart that's predicted every US recession in 60 years. How yield curves work and what they're telling you.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Plot government bond yields against their maturity (2-year, 5-year, 10-year, 30-year). Connect the dots. That's the {{yield-curve|yield curve}}. Its shape is one of the most powerful signals in macroeconomics.",
      },
      {
        kind: "h2",
        text: "The three shapes",
      },
      {
        kind: "diagram",
        diagram: "yield-curve",
        caption: "Toggle between shapes to see the same set of maturities at different rate environments.",
      },
      {
        kind: "table",
        headers: ["Curve shape", "Description", "Macro implication"],
        rows: [
          ["**Normal**", "Upward-sloping: longer maturity = higher yield", "Healthy economy, normal expansion, growth + inflation expectations"],
          ["**Flat**", "Long yields ≈ short yields", "Transition phase. Often precedes inversion or recovery"],
          ["**Inverted**", "Long yields LOWER than short yields", "Recession warning historically. Markets expecting future rate cuts"],
        ],
      },
      {
        kind: "h2",
        text: "Why curves usually slope up",
      },
      {
        kind: "p",
        text: "Longer-maturity bonds typically yield more because:",
      },
      {
        kind: "list",
        items: [
          "Inflation uncertainty over longer periods — investors demand compensation",
          "Liquidity preference — investors prefer near-term cash over locking up for 30 years",
          "Term premium — risk-free rate plus a premium for length",
        ],
      },
      {
        kind: "p",
        text: "Normal curves are upward-sloping. A 2-year US Treasury might yield 4.5%; the 10-year 4.7%; the 30-year 4.9%. Small slope, but positive.",
      },
      {
        kind: "h2",
        text: "Why inversions are scary",
      },
      {
        kind: "p",
        text: "When long yields fall BELOW short yields, the curve inverts. Why would investors accept lower yield to lend longer? They wouldn't — unless they expect short rates to fall sharply in the future.",
      },
      {
        kind: "p",
        text: "An inverted curve is the market saying: 'Short-term rates are too high right now. The economy will weaken. The Fed will be cutting aggressively over the next few years.'",
      },
      {
        kind: "p",
        text: "Historical track record: every US recession since 1960 has been preceded by an inversion of the 2-year vs 10-year curve. Average lag: 12-18 months from inversion to recession start.",
      },
      {
        kind: "h2",
        text: "The 2022-24 inversion",
      },
      {
        kind: "p",
        text: "The US 2y/10y inverted in mid-2022 and stayed inverted into mid-2024 — one of the longest inversions in history. By the typical playbook, recession should have hit by mid-2023 to 2024. It didn't (yet). Either the playbook is broken, or recession is delayed.",
      },
      {
        kind: "p",
        text: "Bull case for 'recession deferred': massive post-COVID fiscal stimulus, US labor market resilience, AI investment boom, Mag 7 capex. Bear case: recessions just take longer this cycle; signal still valid.",
      },
      {
        kind: "analogy",
        title: "The weather satellite warning",
        text: "An inverted yield curve is like a weather satellite warning of a hurricane forming. The hurricane doesn't always hit your city — sometimes it dissipates, sometimes it changes path. But you take the warning seriously because it's been right far more often than it's been wrong over decades.",
      },
      {
        kind: "h2",
        text: "Indian yield curve",
      },
      {
        kind: "p",
        text: "Indian yield curves are less famous as recession predictors (India's last technical recession was 1980, ignoring COVID). But they tell you about Indian rate expectations.",
      },
      {
        kind: "p",
        text: "Current Indian curve (late 2024) is mildly upward-sloping: 91-day T-bill ~6.8%, 10-year G-Sec ~6.85%, 30-year G-Sec ~7.0%. A flat curve here signals the market expects RBI cuts ahead. A steep curve signals expected hikes.",
      },
      {
        kind: "h2",
        text: "How to read the curve practically",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Bookmark Investing.com's US Treasury yield curve page",
          "Note 2-year, 10-year, 30-year yields weekly",
          "Watch for shape changes — steepening, flattening, inverting",
          "When the 10-2 spread goes from negative back to positive ('un-inverts'), that's historically been a much better recession signal than the initial inversion",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "The un-inversion signal",
        text: "Counterintuitively, when an inverted yield curve UN-inverts (returns to positive slope), it's been a more reliable near-term recession signal than the initial inversion. Reason: un-inversion typically happens because short rates are falling fast as the Fed cuts to address weakness — the recession is closer than during the inverted period.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Yield curve = plot of bond yields vs maturity.",
          "Normal: upward-sloping. Inverted: long yields below short yields.",
          "Inversions have preceded every US recession since 1960, with 12-18 month lag.",
          "The 2022-24 inversion was unusually long; recession delayed or playbook broken.",
          "Un-inversion (return to positive slope) is often a more imminent recession signal than initial inversion.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is an inverted yield curve historically a recession signal?",
        options: [
          "Lower long yields = bad luck",
          "It signals the market expects short rates to fall sharply in the future — implying economic weakness ahead that the Fed will need to address with cuts",
          "Inversions cause recessions directly",
          "Random correlation",
        ],
        correctIndex: 1,
        explanation: "Inversions reflect collective market expectation of future weakness and aggressive central bank cuts. The historical correlation is strong but not perfect.",
      },
      {
        id: "q2",
        prompt: "If the US 2-year yield is 4.7% and the 10-year yield is 4.3%, what's the shape?",
        options: [
          "Normal (upward sloping)",
          "Inverted",
          "Flat",
          "Cannot tell",
        ],
        correctIndex: 1,
        explanation: "10-year yield below 2-year yield = inverted. The market is pricing in significant rate cuts over the medium term.",
      },
    ],
  },
  {
    id: "w09-l03",
    weekId: W,
    order: 3,
    title: "The US 10-year — the world's benchmark rate",
    summary: "The single most important interest rate on Earth. Every long-duration asset is priced relative to it.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "{{us-10y|The US 10-year Treasury yield}} is the closest thing global finance has to a universal benchmark. When central bankers, hedge fund managers, and corporate treasurers talk about 'the risk-free rate', they almost always mean this number.",
      },
      {
        kind: "h2",
        text: "Why this specific yield",
      },
      {
        kind: "list",
        items: [
          "**US Treasuries are effectively risk-free** — the US government in dollars can always pay (it prints dollars). Default risk is zero.",
          "**Dollar is the reserve currency** — most global lending, commodity pricing, and trade settles in dollars.",
          "**10-year is the most liquid 'long-duration' point** — actively traded, plenty of supply, used as benchmark for long-duration assets.",
          "**Globally accepted** — every pricing model for corporate bonds, mortgages, equity multiples references the US 10Y.",
        ],
      },
      {
        kind: "h2",
        text: "How a 1% move ripples globally",
      },
      {
        kind: "p",
        text: "A 1% rise in the US 10Y yield (say from 4% to 5%):",
      },
      {
        kind: "list",
        items: [
          "Long-duration equity valuations compress by 10-20% (Nasdaq hit hardest)",
          "Global corporate borrowing costs rise — Indian companies issuing dollar bonds pay more",
          "USD strengthens (DXY +3-5%) as US assets become more attractive",
          "EM currencies including INR weaken",
          "EM equity sees outflows",
          "Gold falls 5-10% (rising real yields are a headwind)",
          "Indian G-Sec yields rise 30-50 bps in sympathy",
          "Home loan rates eventually rise as central banks adjust",
        ],
      },
      {
        kind: "p",
        text: "This is why so much global market commentary obsesses over the US 10Y. It's the single number with the largest cross-asset spillover.",
      },
      {
        kind: "h2",
        text: "What drives the 10Y",
      },
      {
        kind: "list",
        items: [
          "**Fed expectations** — if markets expect cuts, the 10Y falls",
          "**US growth expectations** — strong growth = higher 10Y",
          "**Inflation expectations** — higher expected CPI = higher 10Y (Treasury holders demand inflation compensation)",
          "**Fiscal deficit** — wider US deficit = more Treasury issuance = potential supply pressure on yields",
          "**Risk-off flight to safety** — in crises, money flows to Treasuries, pushing yields down",
          "**Foreign demand** — China, Japan, Saudi Arabia are major holders; changes in their buying matter",
        ],
      },
      {
        kind: "h2",
        text: "Recent history",
      },
      {
        kind: "table",
        headers: ["Period", "10Y range", "Macro context"],
        rows: [
          ["2020 (COVID low)", "0.5%", "Emergency Fed cuts to zero, unlimited QE"],
          ["2021", "1-1.7%", "Recovery + emerging inflation"],
          ["2022 peak", "4.3%", "Fed hiked 525 bps; inflation peak"],
          ["2023", "3.3-4.7%", "Volatile as Fed peaked and pivot debate intensified"],
          ["2024", "3.6-4.7%", "Range-bound, awaiting Fed cuts"],
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why 4-5% feels high but isn't historically",
        text: "Many investors are surprised by the post-2022 yield environment because we got used to 2008-2020 when 10Y was 1.5-3%. But pre-2008, the 10Y rarely went below 4%. From 1965-2007, the average 10Y yield was ~6%. The 2000s and 2010s were the historical anomaly. Current 4-5% is closer to normal.",
      },
      {
        kind: "h2",
        text: "How to track",
      },
      {
        kind: "list",
        items: [
          "Investing.com 'US 10-Year Bond Yield'",
          "TradingView TNX symbol",
          "Bloomberg Markets",
        ],
      },
      {
        kind: "p",
        text: "Check daily, similar to DXY. The combination of 10Y direction + DXY direction tells you 80% of global macro mood for the day.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "US 10-year Treasury yield is the world's risk-free benchmark.",
          "A 1% move ripples through every asset class globally.",
          "Drivers: Fed expectations, US growth/inflation, fiscal deficit, foreign demand.",
          "Current 4-5% range is historically normal; the 2008-2020 low-rate era was the anomaly.",
          "Track it daily alongside DXY for global macro context.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does the US 10-year Treasury yield matter for Indian equity valuations?",
        options: [
          "It doesn't",
          "It's the global risk-free discount rate — higher 10Y compresses equity multiples everywhere, including India",
          "Only affects US stocks",
          "Affects only bond markets",
        ],
        correctIndex: 1,
        explanation: "Discounted cash flow valuations of stocks use the risk-free rate. Higher 10Y = higher discount rate = lower stock valuations globally.",
      },
      {
        id: "q2",
        prompt: "What is the historical 'normal' range for the US 10-year yield over 1965-2007?",
        options: ["1-3%", "Around 6%", "10%+", "Always below 2%"],
        correctIndex: 1,
        explanation: "Pre-2008, the 10Y rarely went below 4%; average was ~6%. The 2008-2020 zero-rate era was an aberration, not the norm.",
      },
    ],
  },
  {
    id: "w09-l04",
    weekId: W,
    order: 4,
    title: "Indian G-Secs and the bond market structure",
    summary: "How the Indian bond market works, who plays, and what retail can access through RBI Retail Direct.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Indian bond market is institutional-dominated and historically retail-inaccessible. That changed in 2021 with the RBI Retail Direct platform. Now you can buy G-Secs and T-Bills directly with as little as ₹10,000. Here's what to know.",
      },
      {
        kind: "h2",
        text: "G-Secs — the foundation",
      },
      {
        kind: "p",
        text: "{{g-sec|G-Secs}} (Government Securities) are the cleanest credit in the Indian bond market. Issued by the central government via the RBI. Maturity ranges from 1 year to 40 years. The most-watched is the 10-year benchmark G-Sec — currently yielding ~6.85%.",
      },
      {
        kind: "p",
        text: "G-Secs are 'risk-free' in INR (Indian government can print rupees), though not in USD. They form the basis for pricing of every other Indian fixed income product.",
      },
      {
        kind: "h2",
        text: "T-Bills — short-term government debt",
      },
      {
        kind: "p",
        text: "{{t-bill|Treasury Bills}} are short-dated government debt: 91-day, 182-day, 364-day. Issued at a discount to face value and redeemed at face value — the gap is your return.",
      },
      {
        kind: "p",
        text: "Example: A 364-day T-bill might trade at ₹93.50 with face value ₹100. You earn ₹6.50 over 364 days = ~7% annualized. Cleaner than FDs because no TDS on accrual (taxed only at redemption as income from other sources).",
      },
      {
        kind: "h2",
        text: "State Development Loans (SDLs)",
      },
      {
        kind: "p",
        text: "SDLs are bonds issued by Indian state governments (Maharashtra, Tamil Nadu, Karnataka, etc.). They yield ~30-50 bps above central G-Secs of same maturity — small spread reflecting marginal additional credit risk.",
      },
      {
        kind: "p",
        text: "SDLs are SLR-eligible (banks count them as Statutory Liquidity Reserves), which provides natural demand. Retail access via RBI Retail Direct.",
      },
      {
        kind: "h2",
        text: "Corporate bonds",
      },
      {
        kind: "p",
        text: "Indian corporate bond market is large but less retail-accessible than G-Secs. AAA-rated corporate bonds (HDFC Bank, Reliance, NTPC, Power Grid) yield ~50-80 bps above G-Sec; AA-rated ~80-150 bps; below-investment-grade can be 300+ bps over G-Sec.",
      },
      {
        kind: "p",
        text: "Retail access:",
      },
      {
        kind: "list",
        items: [
          "NSE/BSE secondary market for listed corporate bonds (lots of friction, low liquidity)",
          "Public bond offerings (Power Finance Corp, REC, etc.) come out periodically",
          "Through corporate bond mutual funds (cleanest retail option)",
          "Newer platforms: Wint Wealth, GoldenPi (retail bond marketplaces)",
        ],
      },
      {
        kind: "h2",
        text: "RBI Retail Direct — the game changer",
      },
      {
        kind: "p",
        text: "Launched in November 2021, RBI Retail Direct (rbiretaildirect.org.in) lets Indian individuals open an account directly with RBI and buy G-Secs, SDLs, T-Bills, and SGBs without an intermediary.",
      },
      {
        kind: "p",
        text: "Pros:",
      },
      {
        kind: "list",
        items: [
          "Zero brokerage and account fees",
          "Direct ownership; no third-party risk",
          "Access to both primary auctions and secondary market",
          "Government-backed safety",
        ],
      },
      {
        kind: "p",
        text: "Cons:",
      },
      {
        kind: "list",
        items: [
          "Less liquid secondary market for individual bonds",
          "Tax treatment complex (interest = income from other sources)",
          "No automatic reinvestment of coupons",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "When direct bonds make sense",
        text: "For most retail with monthly investible amounts of ₹5-50k, debt mutual funds (liquid + medium-duration mix) are simpler and more efficient. Direct G-Secs/T-Bills via RBI Retail Direct make sense for: lump sums above ₹5 lakh, specific maturity targeting (e.g., child's education in 8 years), and HNIs avoiding TER drag on debt funds.",
      },
      {
        kind: "h2",
        text: "Debt mutual funds — the easier route",
      },
      {
        kind: "p",
        text: "Debt mutual funds invest in a portfolio of bonds professionally managed:",
      },
      {
        kind: "list",
        items: [
          "**Liquid funds** — invest in 91-day instruments; ultra-low risk, used for emergency cash. Returns ~6-7%.",
          "**Money market funds** — short-duration corporate paper. Returns ~6-7.5%.",
          "**Short duration funds** — bonds maturing 1-3 years. Returns ~7-8%.",
          "**Medium / long duration** — 3-10 year bonds. Higher duration risk but higher expected return.",
          "**Gilt funds** — invest only in G-Secs. Pure government risk.",
          "**Credit risk funds** — invest in AA and below. Higher yield but credit risk.",
          "**Dynamic bond funds** — manager actively adjusts duration based on rate view.",
        ],
      },
      {
        kind: "p",
        text: "Post-April 2023 tax change: gains from debt MFs (held >36 months) are taxed at slab rate (not 20% with indexation as before). This made debt MFs less attractive vs FDs for high-tax-bracket investors. The structural case for them is now simpler liquidity and diversification, not pure tax efficiency.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "G-Secs are the foundation of Indian fixed income — risk-free in INR.",
          "T-Bills are short-dated (91/182/364 day) — discount-to-par instruments.",
          "RBI Retail Direct (since 2021) lets retail buy G-Secs/T-Bills directly without intermediary.",
          "For most retail with monthly amounts, debt mutual funds are simpler than direct bonds.",
          "Post-April 2023 tax change: debt MF gains taxed at slab rate — reduced tax advantage vs FDs.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How can Indian retail directly buy G-Secs without going through a broker or mutual fund?",
        options: [
          "Cannot — retail is locked out",
          "RBI Retail Direct platform (rbiretaildirect.org.in) — direct account with RBI, zero brokerage, primary and secondary market access",
          "Only via banks",
          "Via demat only",
        ],
        correctIndex: 1,
        explanation: "RBI Retail Direct was launched in November 2021 specifically to give retail direct access to government securities and SGBs without intermediaries.",
      },
      {
        id: "q2",
        prompt: "What changed for debt mutual fund taxation post-April 2023?",
        options: [
          "Reduced to 5% LTCG",
          "Gains from debt MFs are taxed at slab rate (regardless of holding period), removing the prior indexation benefit",
          "Made tax-exempt",
          "No change",
        ],
        correctIndex: 1,
        explanation: "Budget 2023 ended the indexation + 20% LTCG benefit for debt MFs. All gains now taxed at slab rate, making them less tax-efficient than they used to be.",
      },
    ],
  },
  {
    id: "w09-l05",
    weekId: W,
    order: 5,
    title: "Duration and credit risk — the two risks of bond investing",
    summary: "Why a 'safe' bond can lose 30%, and why high yield isn't free money. The two dimensions of bond risk.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Bond investing has two main risks: duration (interest rate risk) and credit (default risk). Different bonds have different combinations. Understanding which risk you're taking — and being paid for — is core to bond investing.",
      },
      {
        kind: "h2",
        text: "Duration risk in detail",
      },
      {
        kind: "p",
        text: "Recall: duration measures price sensitivity to yield changes. A bond with 10-year duration loses ~10% if yields rise 1%.",
      },
      {
        kind: "p",
        text: "Common bond categories by duration:",
      },
      {
        kind: "table",
        headers: ["Bond type", "Approximate duration", "Risk profile"],
        rows: [
          ["Cash / overnight rates", "0", "No duration risk"],
          ["91-day T-Bills", "0.25", "Minimal duration risk"],
          ["1-2 year G-Sec", "1-2", "Low duration"],
          ["10-year G-Sec", "~7-8", "Medium-high"],
          ["30-year G-Sec", "15-18", "Very high duration"],
          ["Long-duration debt fund", "5-10", "Significant — moves with rates"],
        ],
      },
      {
        kind: "h2",
        text: "The 2022 lesson",
      },
      {
        kind: "p",
        text: "In 2022, US long-duration Treasuries fell 30%+ as the Fed hiked aggressively. Bonds — typically thought of as 'safe' — had their worst year in modern history. A 'conservative' 60/40 portfolio (60% equity / 40% long bonds) lost more than expected because both legs fell together.",
      },
      {
        kind: "p",
        text: "Lesson: in rising rate environments, long-duration bonds are NOT safe. They're rate-sensitive. Use short-duration debt for cash-equivalents; long-duration only when you have a specific view that rates will fall.",
      },
      {
        kind: "h2",
        text: "Credit risk in detail",
      },
      {
        kind: "p",
        text: "Credit risk is the probability the borrower defaults. Rating agencies (CRISIL, ICRA, CARE in India; S&P, Moody's, Fitch globally) assign letter ratings:",
      },
      {
        kind: "table",
        headers: ["Rating", "Meaning", "Yield premium over G-Sec"],
        rows: [
          ["AAA", "Highest safety", "~50-80 bps"],
          ["AA", "High safety", "~80-150 bps"],
          ["A", "Adequate safety", "~150-250 bps"],
          ["BBB", "Moderate safety; investment-grade boundary", "~250-400 bps"],
          ["BB and below", "Speculative ('junk')", "400+ bps"],
          ["D", "Defaulted", "Distressed pricing"],
        ],
      },
      {
        kind: "h2",
        text: "Indian credit events",
      },
      {
        kind: "p",
        text: "India has had its share of credit shocks that taught harsh lessons:",
      },
      {
        kind: "list",
        items: [
          "**IL&FS 2018** — large infrastructure conglomerate defaulted. Triggered the NBFC liquidity crisis.",
          "**DHFL 2019** — major housing finance company defaulted; eventually resolved via bankruptcy",
          "**Vodafone Idea ongoing** — telecom with massive debt, multiple credit downgrades",
          "**Yes Bank 2020** — bank rescue; AT1 bonds wiped out (₹8,400 cr loss for bondholders)",
          "**Various small/medium NBFCs** — periodic defaults",
        ],
      },
      {
        kind: "p",
        text: "These events caused mass redemptions from credit risk debt funds and reminded investors that 'higher yield' has a real reason — the credit risk premium is paid because some bonds do default.",
      },
      {
        kind: "h2",
        text: "How to think about combining the two",
      },
      {
        kind: "p",
        text: "Three combinations:",
      },
      {
        kind: "list",
        items: [
          "**Long duration + AAA credit** (long G-Secs, long PSU corporates): pure rate bet. Wins when rates fall, loses when they rise.",
          "**Short duration + lower credit** (credit risk funds with AA/A bonds): credit bet, not rate bet. Hold to maturity ideally; default risk is the threat.",
          "**Short duration + AAA credit** (liquid funds, ultra-short funds): minimal risk on both axes. Returns close to overnight rates.",
        ],
      },
      {
        kind: "analogy",
        title: "Mountain hiking — two risks",
        text: "Hiking has two main risks: weather (interest rates — sudden, severe, hits everyone) and rockslides (credit risk — rare, localized, devastating). You can carry rain gear (short duration) and avoid loose paths (high-credit bonds), or you can choose your adventure. The risks are real either way.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "AT1 bonds — the hidden trap",
        text: "Additional Tier 1 bonds issued by banks are perpetual instruments with a 'write-down' clause. If the bank fails, these bonds can be wiped out entirely (zero recovery). Yes Bank's AT1 bondholders lost ₹8,400 cr in March 2020. AT1s pay higher coupons but carry equity-like loss potential. Retail should generally avoid them.",
      },
      {
        kind: "h2",
        text: "Practical guidelines",
      },
      {
        kind: "list",
        items: [
          "Emergency fund / short-term cash: liquid funds or overnight funds only. No duration, no credit risk.",
          "1-3 year goals: short duration funds with AAA credit. Predictable, low risk.",
          "5+ year goals: mix of long duration (G-Sec or PSU AAA) for rate sensitivity + some equity for return",
          "Speculative income: stay away from credit risk funds unless you understand the bonds in detail",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Two main bond risks: duration (interest rate sensitivity) and credit (default risk).",
          "Long-duration bonds are NOT safe — they fell 30%+ in 2022 as Fed hiked.",
          "Credit risk premium is paid because defaults do happen — Indian IL&FS, DHFL, Yes Bank AT1 examples.",
          "Combine risks intentionally: pure rate bets (long G-Sec) vs pure credit bets (short AA) vs neither (liquid funds).",
          "Avoid AT1 bonds and high-yield credit funds for retail unless you understand the specific holdings.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why did long-duration US Treasury bonds fall 30%+ in 2022 despite being 'risk-free'?",
        options: [
          "Default risk increased",
          "The Fed hiked rates aggressively; long-duration bonds have high price sensitivity to yield changes",
          "Bond market collapsed",
          "Currency issues",
        ],
        correctIndex: 1,
        explanation: "Long bonds are 'credit risk-free' but not 'duration risk-free'. Price moves opposite to yields, scaled by duration. A 525 bps Fed hiking cycle crushed long-bond prices.",
      },
      {
        id: "q2",
        prompt: "What's an AT1 bond and why should most retail investors avoid them?",
        options: [
          "A safe government bond",
          "Bank-issued Additional Tier 1 perpetual bonds with a 'write-down' clause — can be wiped out (zero recovery) if bank fails, as Yes Bank holders learned in 2020",
          "International bonds",
          "Tax-free bonds",
        ],
        correctIndex: 1,
        explanation: "AT1s carry equity-like loss potential despite higher coupons. Yes Bank AT1 holders lost ₹8,400 cr completely. Not appropriate for retail unless deeply understood.",
      },
    ],
  },
  {
    id: "w09-l06",
    weekId: W,
    order: 6,
    title: "Retail bond investing in India — practical playbook",
    summary: "How a retail Indian investor should actually approach bonds in 2025. Vehicles, durations, and what to avoid.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Most Indian retail investors are underexposed to formal bond markets and overexposed to FDs. The post-April 2023 tax change reduced the bond MF advantage but bonds still play important portfolio roles. Here's a practical playbook for 2025.",
      },
      {
        kind: "h2",
        text: "Three bond roles in a portfolio",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Cash buffer** — Money you might need in days/weeks. Liquid funds, ultra-short funds, overnight funds. Yield ~6-7%; safety is the goal, not return.",
          "**Short-term goals** — Money you need in 1-3 years (house down payment, child's school fees). Short duration funds, ladder of T-Bills. Yield ~7-7.5%.",
          "**Long-term diversifier** — Bonds that buffer equity drawdowns over 10+ year horizons. Long duration G-Sec funds, or G-Secs purchased directly. Yield = market rate; price volatility is real.",
        ],
      },
      {
        kind: "h2",
        text: "Vehicle by vehicle",
      },
      {
        kind: "table",
        headers: ["Vehicle", "Best for", "Caveat"],
        rows: [
          ["**Liquid funds**", "Emergency fund, short cash", "Avoid funds with corporate paper of unknown quality"],
          ["**Money market funds**", "Slightly better than liquid for 1-3 month parking", "Slightly more interest rate risk than liquid"],
          ["**Short duration funds**", "1-3 year horizon", "Avoid 'credit risk' variants for retail"],
          ["**Medium duration funds**", "3-5 year horizon", "Higher duration risk in rising-rate environments"],
          ["**Long duration / gilt funds**", "Tactical bet on falling rates; portfolio diversifier", "Can lose 10-20% in rate spikes"],
          ["**RBI Retail Direct G-Sec**", "Specific maturity targeting, lump sums", "Less liquid than funds"],
          ["**Corporate bonds (via NSE/BSE or platforms)**", "Higher yield for tactical retail", "Less liquid; do credit homework"],
          ["**FDs**", "Predictable nominal return; small amounts; insured to ₹5L per bank by DICGC", "Post-tax real return often near zero"],
        ],
      },
      {
        kind: "h2",
        text: "A simple bond allocation for most working Indians",
      },
      {
        kind: "p",
        text: "If you have 15-25% of your portfolio in debt (typical for 30-50 year old), split it roughly:",
      },
      {
        kind: "list",
        items: [
          "**40% in liquid + ultra-short funds** — emergency + short-term flexibility",
          "**30% in short-duration debt funds** — slightly higher yield",
          "**20% in medium-duration funds OR direct G-Sec via RBI Retail Direct** — for 3-5 year horizons",
          "**10% in long-duration gilt funds (optional)** — for tactical falling-rates bet",
        ],
      },
      {
        kind: "p",
        text: "Avoid credit risk funds, AT1s, and unrated/below-investment-grade bonds unless you have the time and skill to evaluate each holding.",
      },
      {
        kind: "h2",
        text: "When to add long-duration",
      },
      {
        kind: "p",
        text: "Long-duration bonds (10-30 year G-Secs, long gilt funds) make most sense when:",
      },
      {
        kind: "list",
        items: [
          "Yields are historically high (RBI repo at 6.5%+, long G-Sec at 7%+ as of late 2024)",
          "Inflation is moderating (Indian CPI trending toward 4% target)",
          "RBI is preparing to cut (the rate path is downward)",
          "You have multi-year holding power (10+ years)",
        ],
      },
      {
        kind: "p",
        text: "Late 2024 conditions actually meet several of these criteria — long-duration G-Secs are arguably one of the more attractive positions for a 5-10 year holding period as rate cuts materialize.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "The lock-in lookalike trap",
        text: "Beware products marketed as 'guaranteed return' bonds with FD-like simplicity but corporate credit risk. Welcomstrust insurance plans, structured debentures with embedded equity bets, perpetual bonds offered to retail without proper risk disclosure — these have caused significant retail losses. The label sounds safe; the underlying isn't always.",
      },
      {
        kind: "h2",
        text: "What about gold bonds vs regular bonds?",
      },
      {
        kind: "p",
        text: "SGBs are different from regular bonds — they pay a fixed 2.5% coupon but return depends on gold price. They're a gold investment with a fixed-income kicker, not a bond per se. We covered them in Week 8. Allocate them to your gold/commodity slice, not your debt slice.",
      },
      {
        kind: "h2",
        text: "Tax efficiency — the post-2023 reality",
      },
      {
        kind: "p",
        text: "Post-April 2023, debt mutual fund gains are taxed at your slab rate. The earlier indexation benefit is gone. This means:",
      },
      {
        kind: "list",
        items: [
          "For higher tax brackets, FDs and debt funds are now equivalent on a post-tax basis",
          "Direct G-Sec interest income is also taxed as 'income from other sources' at slab rate",
          "Capital gains on G-Sec held over 12 months: LTCG at 12.5% (Budget 2024)",
          "ELSS and Section 80C ELSS mutual funds still offer deductions in the old tax regime",
        ],
      },
      {
        kind: "p",
        text: "Tax-aware suggestion: hold debt for predictable income and liquidity; don't expect post-tax real returns above 1-2% above CPI in current environment. Equity remains the long-term real-return engine.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Bonds play three roles: cash buffer, short-term goals, long-term equity diversifier.",
          "Liquid funds for emergencies; short-duration for 1-3 year goals; medium/long duration tactical for falling-rate environments.",
          "Avoid credit risk funds, AT1 bonds, and 'guaranteed return' product traps.",
          "Post-2023 tax: debt MF gains taxed at slab rate — FDs and debt MFs now equivalent post-tax.",
          "Late 2024 — long-duration G-Secs reasonably attractive for multi-year horizons given expected rate cut path.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which type of debt fund is most appropriate for your emergency fund?",
        options: [
          "Long-duration gilt fund",
          "Liquid fund or overnight fund — minimal duration risk, daily NAV stability",
          "Credit risk fund",
          "Corporate bond fund",
        ],
        correctIndex: 1,
        explanation: "Emergency fund priority is capital preservation and immediate access. Liquid/overnight funds minimize both duration and credit risk for that purpose.",
      },
      {
        id: "q2",
        prompt: "When is it most rational to overweight long-duration bonds?",
        options: [
          "Always",
          "When yields are historically high, inflation is moderating, and central bank is preparing to cut — multi-year falling-rate environment",
          "Never",
          "Only in emergency",
        ],
        correctIndex: 1,
        explanation: "Long-duration bonds shine when rates fall (price rises = duration × yield decline). Late 2024 had several setup conditions for this trade in India.",
      },
    ],
  },
];

export const WEEK_09_LESSONS = lessons;
