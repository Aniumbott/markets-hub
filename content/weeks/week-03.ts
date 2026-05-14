import type { Lesson } from "../types";

const W = 3;

const lessons: Lesson[] = [
  {
    id: "w03-l01",
    weekId: W,
    order: 1,
    title: "The economic data calendar — your monthly map",
    summary: "Markets move on data releases that follow predictable monthly rhythms. Know the calendar and the chaos becomes legible.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Open any Bloomberg terminal at 6 PM India time on the first Friday of the month. The screen lights up. Three numbers print at the same instant — US NFP, unemployment rate, average hourly earnings. Within 30 seconds, the dollar moves. US bond yields move. Oil moves. Gold moves. By 9:15 AM the next Monday morning in Mumbai, Nifty has already digested it.",
      },
      {
        kind: "p",
        text: "You don't need a Bloomberg terminal. You need to know that this event happens, that it always happens at the same time of the month, and that knowing the calendar in advance is half the battle of feeling unprepared.",
      },
      {
        kind: "h2",
        text: "Why scheduled data matters",
      },
      {
        kind: "p",
        text: "Markets price in expectations. When a data point comes in different from expectations, prices have to update. The bigger the gap and the more important the data, the bigger the move. Some data points consistently move every market within minutes:",
      },
      {
        kind: "list",
        items: [
          "**US CPI** (monthly, ~10th-13th of month) — the most important inflation print globally",
          "**US Non-Farm Payrolls / {{nfp|NFP}}** (first Friday) — the most important jobs report",
          "**US FOMC meetings** (every 6 weeks) — the rate decision itself",
          "**India CPI** (12th of each month) — domestic inflation",
          "**RBI MPC meetings** (every 2 months) — Indian rate decision",
          "**US ISM PMI** (first and third business day) — manufacturing/services pulse",
        ],
      },
      {
        kind: "analogy",
        title: "The Mumbai local at 6:25 PM",
        text: "Office hours end. The local arrives. You either know it leaves Churchgate at 6:25 every weekday and plan around it — or you show up at 6:24 and panic-run for a packed compartment. The data calendar is the same. The Fed meeting on the 18th isn't a surprise. Plan around it.",
      },
      {
        kind: "h2",
        text: "Tiers of importance",
      },
      {
        kind: "p",
        text: "Not every release moves markets. A useful three-tier mental model:",
      },
      {
        kind: "table",
        headers: ["Tier", "Examples", "Typical reaction"],
        rows: [
          ["**Tier 1**", "US CPI, NFP, FOMC, RBI MPC", "Multi-asset moves of 0.5-2% within minutes"],
          ["**Tier 2**", "US PMI, India CPI, BoJ decision, OPEC+", "Sector or currency-specific moves"],
          ["**Tier 3**", "Retail sales, durable goods, housing starts", "Confirm trends but rarely move on their own"],
        ],
      },
      {
        kind: "p",
        text: "Tier 1 deserves a calendar entry. Tier 2 is worth knowing about when it happens. Tier 3 is for analysts.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Where to find a free calendar",
        text: "Investing.com's economic calendar (in.investing.com/economic-calendar) is the standard. Filter to High importance and select US + India. You'll see 6-10 entries per week — manageable. Add the FOMC and RBI MPC dates to your phone calendar a year ahead.",
      },
      {
        kind: "h2",
        text: "Expectations are the unseen player",
      },
      {
        kind: "p",
        text: "Every Tier 1 release has a 'street consensus' — the median forecast from economists. The market is already priced for that number before the release. What moves prices is the *gap* between the release and the consensus.",
      },
      {
        kind: "p",
        text: "US CPI expected at 3.2%, prints at 3.5%? That's a 30 bps upside surprise — hawkish. DXY rallies, US 10Y rises, gold falls, Nasdaq sells off, Nifty opens weaker the next day. The number itself (3.5%) means nothing in isolation; the gap (vs 3.2%) is everything.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Major data prints follow predictable monthly cadences. Knowing the calendar removes 80% of the 'why is the market moving?' confusion.",
          "Tier 1: US CPI, NFP, FOMC, RBI MPC. Tier 2: PMI, BoJ, OPEC+. Tier 3: rarely moves markets alone.",
          "What moves prices is the gap between release and consensus, not the absolute number.",
          "Set your phone calendar a year ahead for the dates you can't miss.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "US CPI expectation is 3.2%. Actual print is 3.5%. What's the most likely immediate cross-asset reaction?",
        options: [
          "Dollar weakens, gold rises, Nasdaq rallies",
          "Dollar strengthens, gold falls, Nasdaq sells off",
          "Bond yields fall, equity multiples expand",
          "No reaction — too small a difference",
        ],
        correctIndex: 1,
        explanation: "An upside CPI surprise is hawkish for the Fed — keeps rates higher for longer. Dollar up, gold down, bonds sell off (yields up), growth equities sell off.",
      },
      {
        id: "q2",
        prompt: "When is the US Non-Farm Payrolls report typically released (in IST)?",
        options: ["First Monday of each month, 9 AM", "First Friday of each month, 6 PM", "Mid-month, 5 PM", "Quarterly only"],
        correctIndex: 1,
        explanation: "NFP releases first Friday of each month at 8:30 AM ET, which is 6 PM IST.",
      },
    ],
  },
  {
    id: "w03-l02",
    weekId: W,
    order: 2,
    title: "GDP — what an economy's size actually means",
    summary: "GDP is a simple number with a complicated story. Real vs nominal, growth vs level, and why markets react more to surprises than to size.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "India's {{gdp|GDP}} is around $3.7 trillion. The US is $28 trillion. China is $18 trillion. These numbers sound enormous, and they are — but on their own they tell you very little about what markets care about.",
      },
      {
        kind: "p",
        text: "What markets actually trade is *change* — GDP growth, not GDP level. India's 6.5% real GDP growth is more market-relevant than its absolute size. China's 4.5% growth in 2024 is more market-relevant than its $18 trillion economy.",
      },
      {
        kind: "h2",
        text: "What GDP measures",
      },
      {
        kind: "p",
        text: "GDP is the total monetary value of goods and services produced inside a country in a year. There are three equivalent ways to measure it — expenditure, production, income — that all theoretically arrive at the same number. India publishes both 'nominal' GDP (in current rupees) and 'real' GDP (adjusted for inflation).",
      },
      {
        kind: "p",
        text: "Real GDP growth is what gets reported as 'India grew 7.2% last quarter'. That's nominal growth minus inflation. If nominal GDP grew 12% and CPI was 5%, real growth was about 7%.",
      },
      {
        kind: "analogy",
        title: "Two report cards",
        text: "Imagine you got 90% in school last year and 95% this year. Sounds great — until your school discovers everyone's marks were inflated by 10%. Your real improvement was actually a drop. Nominal vs real GDP is the same idea. Higher nominal growth during high inflation can mean negative real progress.",
      },
      {
        kind: "h2",
        text: "How GDP gets reported",
      },
      {
        kind: "list",
        items: [
          "**India**: Quarterly. Released around the last day of February, May, August, November.",
          "**US**: Quarterly, with three estimates — Advance (1 month after quarter end), Second (2 months), Third (3 months). Each can move markets.",
          "**China**: Quarterly. Less trusted by global investors due to political smoothing — markets watch PMI and trade data more.",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why GDP rarely moves Indian stocks",
        text: "By the time GDP is reported, the quarter ended weeks ago. Earnings releases have happened. PMI prints have happened. GDP confirms what markets already suspected. Bond markets react more than equity markets to GDP — it shifts expectations for the next RBI move.",
      },
      {
        kind: "h2",
        text: "The growth-inflation framework",
      },
      {
        kind: "p",
        text: "Markets don't think in terms of GDP alone. They think in terms of growth vs inflation jointly:",
      },
      {
        kind: "table",
        headers: ["Combo", "What it means", "What typically works"],
        rows: [
          ["Strong growth + low inflation", "Goldilocks — best of all worlds", "Equities, especially cyclicals"],
          ["Strong growth + high inflation", "Overheating", "Commodities, value stocks"],
          ["Weak growth + low inflation", "Disinflation, possible cuts coming", "Bonds, defensives"],
          ["Weak growth + high inflation", "{{stagflation|Stagflation}} — nightmare", "Gold, cash, very few equities"],
        ],
      },
      {
        kind: "p",
        text: "We'll come back to this {{four-quadrants|four quadrants framework}} in Week 12 in more depth.",
      },
      {
        kind: "h2",
        text: "India's GDP growth story",
      },
      {
        kind: "p",
        text: "India's real GDP growth has averaged 6-7% for the past two decades, with a few sharper years (8%+ in 2010, 2015-16) and two contractions (-7% during COVID FY21, modestly negative in some earlier crises). Among large economies, this is exceptionally fast — China averaged similar growth for longer, but is now slowing to 4-5%; the US averages 2-2.5%; Europe averages 1-1.5%.",
      },
      {
        kind: "p",
        text: "This growth differential is the structural India story. As long as India grows 4-5 percentage points faster than developed markets, Indian equity earnings should grow faster, and Indian indices should compound faster — if you can avoid the periodic stretched-valuation drawdowns.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "GDP measures total economic output. Growth rate, not absolute level, is what markets trade.",
          "Real GDP growth = nominal GDP growth − inflation. Real is what compounds your wealth.",
          "GDP releases quarterly; usually confirms what PMI and earnings already showed.",
          "Think of growth and inflation jointly via the four-quadrants framework.",
          "India's structural 6-7% real growth is the foundation of the long-term equity case.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Nominal GDP growth is 11%. CPI inflation is 6%. What's approximate real GDP growth?",
        options: ["11%", "17%", "5%", "6%"],
        correctIndex: 2,
        explanation: "Real growth ≈ nominal growth − inflation = 11% − 6% = 5%.",
      },
      {
        id: "q2",
        prompt: "Why does the bond market typically react more strongly than the equity market to a GDP release?",
        options: [
          "Bonds are bigger than equities",
          "GDP directly resets expectations for the next central bank rate move, which moves bond yields immediately",
          "Equity traders are slower",
          "GDP affects only bonds",
        ],
        correctIndex: 1,
        explanation: "GDP shapes the rate path. Bond yields reprice immediately on rate-path changes. Equities work through it more slowly via discount rates and earnings expectations.",
      },
    ],
  },
  {
    id: "w03-l03",
    weekId: W,
    order: 3,
    title: "CPI — what an inflation print really means",
    summary: "How the inflation number is built, why core matters more than headline, and how a single CPI release moves the entire world.",
    minutes: 8,
    body: [
      {
        kind: "p",
        text: "On the 12th of every month at 5:30 PM Indian time, the {{cpi|CPI}} number drops. On the same day, US CPI usually prints around 6 PM IST. The Indian print moves Indian bonds and the rupee. The US print moves everything.",
      },
      {
        kind: "p",
        text: "A CPI print is a small army of fieldworkers reporting back the prices they saw this month, weighted by what households actually buy. It's an average of averages, summarised into a single percentage. That percentage decides whether the RBI hikes, whether your home loan EMI changes, whether FIIs allocate to India.",
      },
      {
        kind: "h2",
        text: "How the basket is built",
      },
      {
        kind: "p",
        text: "Indian CPI uses a basket of ~300 items, with weights based on the 2011-12 consumer expenditure survey. The big buckets:",
      },
      {
        kind: "table",
        headers: ["Component", "Weight", "Volatility"],
        rows: [
          ["Food and beverages", "46%", "High — weather, supply chain shocks"],
          ["Housing (urban only)", "10%", "Low — sticky, rent-led"],
          ["Fuel and light", "7%", "High — oil, electricity tariffs"],
          ["Clothing and footwear", "7%", "Low"],
          ["Transport and communication", "9%", "Medium — petrol prices, telecom plans"],
          ["Miscellaneous (health, education, etc.)", "21%", "Medium"],
        ],
      },
      {
        kind: "p",
        text: "The basket is what makes Indian inflation different from US inflation. India's basket is food-heavy; the US basket is shelter-heavy. A tomato spike moves Indian CPI dramatically; the same tomato spike barely registers in US CPI.",
      },
      {
        kind: "h2",
        text: "Headline vs core",
      },
      {
        kind: "p",
        text: "Two numbers matter: headline CPI and {{core-cpi|core CPI}}. Headline is the whole basket. Core strips out food and fuel — both volatile and largely outside monetary policy's control.",
      },
      {
        kind: "p",
        text: "If headline CPI is 4.5% but core is 3.5%, inflation is mostly driven by food/oil shocks. The RBI might hold rates and wait for the shock to fade. If headline is 5.5% and core is 5.0%, broad-based price pressure is real — the RBI is more likely to act.",
      },
      {
        kind: "analogy",
        title: "Fever vs underlying illness",
        text: "Your body temperature spikes to 103. Could be a flu (real illness — needs treatment) or could be that you just sat in the Mumbai afternoon sun for an hour (transient — drink water, lie down). A doctor doesn't prescribe antibiotics on temperature alone. The central bank doesn't hike on headline CPI alone — it watches core to see if the 'fever' has a deeper cause.",
      },
      {
        kind: "h2",
        text: "The US CPI moment",
      },
      {
        kind: "p",
        text: "US CPI is the most-watched economic release globally. When it prints, every dealing room watches simultaneously. Within 60 seconds:",
      },
      {
        kind: "list",
        items: [
          "S&P 500 futures move",
          "DXY moves 0.3-1% on a meaningful surprise",
          "US 10Y yield moves 5-15 bps",
          "Gold spikes or drops",
          "Bitcoin moves",
          "Within an hour, Indian USD/INR is reacting — even with our market closed",
        ],
      },
      {
        kind: "p",
        text: "The 2022 US CPI prints were generational events. CPI peaked at 9.1% in June 2022 — highest in 40 years. Every monthly print became a market-moving event because each one told the Fed how aggressively to hike.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "Why you should care about US CPI",
        text: "Even if you only own Indian assets, US CPI changes the Fed's path, which changes DXY, which moves USD/INR, which affects FII flows into Indian equities. The chain is 4 steps long but the timing is hours, not weeks. Set a calendar alert for the 12th-13th of every month at 6 PM IST.",
      },
      {
        kind: "h2",
        text: "Sticky vs sticky-er",
      },
      {
        kind: "p",
        text: "Within core CPI, some sub-categories move slowly and matter more for the long-run inflation story:",
      },
      {
        kind: "list",
        items: [
          "**Shelter / rent** — in the US, around 35% of CPI weight. Moves slowly but persistently. Once shelter inflation is high, it stays high for many months.",
          "**Services excluding shelter** — wages-driven. The Fed's clearest read on whether inflation is becoming structural.",
          "**Goods** — fast-moving, supply-chain driven. Disinflationary post-2022 as supply chains normalised.",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "CPI = monthly price change in a household basket. India's basket is food-heavy (46%); the US basket is shelter-heavy.",
          "Headline CPI is the full basket; core CPI strips food and fuel. Core is what central banks watch most.",
          "US CPI releases (around 6 PM IST mid-month) move every major global market within 60 seconds.",
          "Watch shelter and services-ex-shelter in US CPI to see if inflation is becoming structural.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Indian CPI headline is 5.2% (RBI target band: 2-6%). Core CPI is 3.8%. What's the most likely RBI response?",
        options: [
          "Aggressive rate hike — inflation above 5%",
          "Hold and wait — headline driven by food, core is comfortable",
          "Cut rates",
          "Letter to the government",
        ],
        correctIndex: 1,
        explanation: "When headline is elevated but core is comfortable, it's a food/fuel shock — usually transient. RBI typically holds and waits unless there are second-round effects on core.",
      },
      {
        id: "q2",
        prompt: "Why does US CPI matter for Indian investors who only own Indian assets?",
        options: [
          "It doesn't",
          "It changes Fed expectations → DXY moves → USD/INR moves → FII flows into India shift",
          "Indian CPI is set off US CPI",
          "It only matters for global equity holders",
        ],
        correctIndex: 1,
        explanation: "US CPI is upstream of Fed policy → dollar → emerging market capital flows → Indian asset prices. The chain is 3-4 steps but unfolds within hours.",
      },
    ],
  },
  {
    id: "w03-l04",
    weekId: W,
    order: 4,
    title: "PMI — the leading indicator everyone watches",
    summary: "A simple survey number that moves markets ahead of GDP. How PMI is built, what 50 means, and how to read the sub-components.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "{{pmi|PMI}} — Purchasing Managers' Index — is the world's most popular leading indicator. Every month, S&P Global (and in the US, ISM) surveys hundreds of purchasing managers and asks five simple questions: Are new orders up or down vs last month? Production? Employment? Supplier delivery times? Inventories?",
      },
      {
        kind: "p",
        text: "The answers are aggregated into a single number where 50 is the neutral line. Above 50 = expansion. Below 50 = contraction. The further from 50, the stronger the signal.",
      },
      {
        kind: "h2",
        text: "Why purchasing managers?",
      },
      {
        kind: "p",
        text: "Purchasing managers are the first to see demand softening or hardening. They're the ones placing orders for raw materials weeks before products ship. If demand is weakening, they cut purchasing orders before factories slow, before workers are laid off, before GDP prints. PMI sees the future of the economy a quarter ahead.",
      },
      {
        kind: "analogy",
        title: "The kirana store stock check",
        text: "Imagine the owner of your local kirana. He sees what's selling weeks before any economic data is released. If onion demand is collapsing, he cuts his next order. If Diwali demand is picking up, he reorders early. His behaviour is the leading indicator. PMI surveys the corporate equivalent of him.",
      },
      {
        kind: "h2",
        text: "Reading PMI",
      },
      {
        kind: "table",
        headers: ["PMI level", "Interpretation"],
        rows: [
          ["> 55", "Strong expansion. Usually risk-on environment, cyclicals work."],
          ["50-55", "Healthy expansion. Normal conditions."],
          ["48-50", "Slowdown but not contraction yet. Watch closely."],
          ["45-48", "Mild contraction. Defensives outperform."],
          ["< 45", "Recession territory. Equities sell off, bonds rally."],
        ],
      },
      {
        kind: "p",
        text: "The direction matters as much as the level. PMI dropping from 56 to 52 is still expansion, but markets read it as deceleration — same signal as outright contraction, just earlier.",
      },
      {
        kind: "h2",
        text: "Manufacturing vs Services PMI",
      },
      {
        kind: "p",
        text: "There are two PMI variants. Manufacturing PMI covers factories. Services PMI covers everything else — retail, transport, IT services, banking, hospitality. In modern economies, services is 70%+ of GDP, so services PMI is arguably more important, but manufacturing PMI is more cyclical and gets more attention.",
      },
      {
        kind: "p",
        text: "Composite PMI is a weighted average of the two. It's the cleanest single read of the economy.",
      },
      {
        kind: "h2",
        text: "The sub-components that matter",
      },
      {
        kind: "p",
        text: "Inside the headline PMI are sub-indices that often move before the headline does:",
      },
      {
        kind: "list",
        items: [
          "**New orders** — leads the next 3-6 months of production",
          "**Employment** — leads NFP by a few weeks; key for the Fed",
          "**Prices paid** — leads CPI; jumps from 50 to 60 signal building inflation",
          "**Supplier deliveries** — slower deliveries = either booming demand OR supply chain stress (interpret carefully)",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "How traders actually use PMI",
        text: "A US ISM Manufacturing PMI dropping below 47 has historically been followed by Fed rate cuts within 6 months ~80% of the time. Watch the trend, not the single print. Three consecutive PMI declines is a strong slowdown signal regardless of where the absolute level is.",
      },
      {
        kind: "h2",
        text: "India PMI specifics",
      },
      {
        kind: "p",
        text: "Indian PMI (S&P Global India Manufacturing and Services PMI) has been consistently strong — manufacturing around 55-58 and services around 58-62 through 2023-24. This matches the visible economic acceleration on the ground (capex picking up, services exports booming). Indian PMI isn't a big market-mover on release day, but it's a strong confirmation of the macro narrative.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "PMI is a monthly survey of purchasing managers. Above 50 = expansion, below = contraction.",
          "Leading indicator — sees economic turns a quarter before GDP confirms them.",
          "Watch the trend across 3-6 months, not single prints.",
          "Sub-components (new orders, employment, prices paid) often move ahead of the headline.",
          "US ISM PMI is Tier 1; India PMI is Tier 2 but confirms the macro story.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "US ISM Manufacturing PMI prints at 46.8. What's the historical signal?",
        options: [
          "Strong expansion ahead",
          "Mild slowdown but expansion continues",
          "Contraction territory — historically often precedes Fed rate cuts within 6 months",
          "No signal — PMI is unreliable",
        ],
        correctIndex: 2,
        explanation: "PMI below 47-48 sustained has preceded Fed cuts ~80% of the time historically. Markets price in the cuts ahead of the move.",
      },
      {
        id: "q2",
        prompt: "Which PMI sub-component is the cleanest leading signal for future inflation?",
        options: ["New orders", "Employment", "Prices paid", "Supplier deliveries"],
        correctIndex: 2,
        explanation: "Prices paid measures input cost pressure. A sustained move from 50 to 60+ in prices paid usually shows up in CPI 2-4 months later.",
      },
    ],
  },
  {
    id: "w03-l05",
    weekId: W,
    order: 5,
    title: "NFP and the US data points India can't ignore",
    summary: "The first Friday of every month is a global market event. How to read NFP and the cluster of US data that runs the world's trading rhythm.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "On the first Friday of every month at 6 PM India time, the US Bureau of Labor Statistics releases the {{nfp|Non-Farm Payrolls}} report. It's the single largest scheduled market event on the global calendar. Three numbers print simultaneously: jobs added, unemployment rate, average hourly earnings.",
      },
      {
        kind: "p",
        text: "Within 30 seconds, every major asset class moves. Within an hour, traders in Mumbai who haven't yet opened their screens for Monday morning are already behind.",
      },
      {
        kind: "h2",
        text: "What NFP measures",
      },
      {
        kind: "p",
        text: "NFP counts net jobs added or lost in the US economy excluding farming, military, and self-employed. The 'expected' number is the survey median from economists. The actual ranges from -800,000 (COVID) to +800,000 (post-COVID rebound), with normal monthly numbers in 150k-300k.",
      },
      {
        kind: "table",
        headers: ["NFP signal", "Number", "Interpretation"],
        rows: [
          ["Strong", "> 300k", "Hot labour market. Fed less likely to cut. Dollar up, equities down (initially)."],
          ["Solid", "150k-300k", "Healthy. Status quo."],
          ["Weak", "50k-150k", "Cooling. Markets start pricing in earlier Fed cuts."],
          ["Recession signal", "< 50k or negative", "Job creation stalling. Risk-off OR cut bid (depending on Fed stance)."],
        ],
      },
      {
        kind: "h2",
        text: "Three numbers, three layers",
      },
      {
        kind: "p",
        text: "NFP isn't just one number — it's three released together:",
      },
      {
        kind: "list",
        items: [
          "**Headline payrolls** — the jobs number. The headline-grabbing one.",
          "**Unemployment rate** — the percentage of the workforce without a job. The Sahm rule triggers a recession warning when this rises 0.5 percentage points within 12 months (it did in mid-2024).",
          "**Average hourly earnings (AHE)** — wage growth. If wages are growing fast, it's inflationary and the Fed has to be careful. AHE matters more for the Fed than headline jobs.",
        ],
      },
      {
        kind: "p",
        text: "Markets read all three together. A strong headline with cooling AHE is actually dovish (jobs but no wage pressure). A weak headline with hot AHE is the worst combo (stagflationary risk).",
      },
      {
        kind: "h2",
        text: "Why this matters for India",
      },
      {
        kind: "p",
        text: "When NFP surprises hot, the Fed is more likely to keep rates high. US 10Y yields rise. DXY rallies. Capital flows into the dollar. Emerging markets including India see FII outflows. Indian markets open weaker on Monday after a hot NFP.",
      },
      {
        kind: "p",
        text: "When NFP surprises weak, the opposite — Fed cuts come back into pricing, DXY weakens, EM gets a tailwind. The August 2024 NFP came in weak and triggered the carry-trade unwind (covered in {{| Case Studies}}).",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Don't trade NFP",
        text: "NFP volatility is extreme — even seasoned traders get whipsawed. Initial moves often reverse within an hour as the market digests the sub-components. Watching is fine; trading the print is one of the fastest ways to lose money in this game.",
      },
      {
        kind: "h2",
        text: "Other US data India should track",
      },
      {
        kind: "p",
        text: "Beyond CPI and NFP, a few more US releases consistently move global markets:",
      },
      {
        kind: "list",
        items: [
          "**ISM PMI** (1st and 3rd business day) — manufacturing pulse",
          "**Retail sales** (mid-month) — consumer demand",
          "**Initial jobless claims** (every Thursday) — weekly labour pulse, can lead NFP",
          "**PCE inflation** (end of month) — the Fed's preferred inflation measure",
          "**JOLTS** (job openings) — labour market tightness",
        ],
      },
      {
        kind: "p",
        text: "You don't need to memorize all of these. Bookmark Investing.com's economic calendar, filter to High importance + US, and you'll see the right releases highlighted.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "NFP releases first Friday of each month, 6 PM IST. Three numbers print together.",
          "Headline jobs, unemployment rate, and average hourly earnings all move markets.",
          "Average hourly earnings matters more for the Fed than the headline.",
          "Hot NFP → dollar up, EM down. Weak NFP → dollar down, EM up.",
          "Don't trade the print. Watch and learn from it.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "NFP prints +320k jobs (vs +180k expected). Average hourly earnings comes in at 4.5% YoY (vs 3.8% expected). What's the dominant market reaction?",
        options: [
          "Risk-on rally — strong economy",
          "Hawkish Fed re-pricing — bonds sell off, dollar rallies, equities sell off",
          "Gold rallies",
          "No reaction",
        ],
        correctIndex: 1,
        explanation: "Strong jobs + hot wages = Fed stays high. Bonds sell off (yields up), dollar up, equities sell off as discount rates rise.",
      },
      {
        id: "q2",
        prompt: "What's the 'Sahm rule' that triggered a recession warning in 2024?",
        options: [
          "Unemployment rate rising 0.5 percentage points within 12 months",
          "NFP printing negative",
          "PMI below 47 for 3 months",
          "CPI above 9%",
        ],
        correctIndex: 0,
        explanation: "The Sahm rule: when the 3-month moving average of unemployment rises 0.5 pp from its 12-month low, a recession has historically followed. Triggered in August 2024 NFP.",
      },
    ],
  },
  {
    id: "w03-l06",
    weekId: W,
    order: 6,
    title: "Reading the data calendar in real time",
    summary: "Putting it all together — a practical workflow for a beginner during a Tier 1 data release.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Theory is good. Habit is better. Here's a concrete workflow for how to engage with a Tier 1 data release as a learner — not a trader.",
      },
      {
        kind: "h2",
        text: "Two days before",
      },
      {
        kind: "list",
        items: [
          "Check Investing.com's calendar. Note the expected number for the release.",
          "Write down: what's the dominant scenario? (e.g., 'CPI at 3.2% — Fed stays patient')",
          "Note current levels of DXY, US 10Y, gold, Nifty futures. You'll compare these tomorrow.",
        ],
      },
      {
        kind: "h2",
        text: "The day of",
      },
      {
        kind: "p",
        text: "If it's at 6 PM IST (NFP, US CPI), the Indian market is closed by then but USD/INR and GIFT Nifty are still trading. Here's the live workflow:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "5:55 PM: Have Investing.com calendar open. Have a chart of DXY, US 10Y, Nasdaq futures, gold, USD/INR.",
          "6:00 PM: Number prints. Note the actual vs expected.",
          "6:00:30 PM: Watch DXY first. The 30-second move tells you the dominant interpretation.",
          "6:05 PM: Note where bonds (US 10Y), equities, gold settled after the initial chaos.",
          "6:30 PM: Write a 2-sentence note: what released, what the gap was, how each asset moved. This is your journal.",
          "Next morning: Compare your prediction (from two days ago) to what actually happened. Note where you were wrong.",
        ],
      },
      {
        kind: "analogy",
        title: "Like a sports replay",
        text: "Cricket fans watch the game live AND watch the replays after. The replays are where you learn what actually happened. Data prints work the same way. Live engagement is exciting. Post-event journaling is where you actually build intuition.",
      },
      {
        kind: "h2",
        text: "The Sunday review",
      },
      {
        kind: "p",
        text: "Once a week, on Sunday, spend 15 minutes reviewing the week's data:",
      },
      {
        kind: "list",
        items: [
          "Which Tier 1 releases happened this week?",
          "Did each surprise hawkish, dovish, or in-line?",
          "How did Nifty react net-net?",
          "Were the cross-asset moves consistent (DXY up → INR down → Nifty down on Monday)?",
        ],
      },
      {
        kind: "p",
        text: "After 8-10 such Sundays, you'll start recognizing patterns instinctively. The 'aha' moment usually comes between the second and third month.",
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Use the simulator to rehearse",
        text: "The {{|simulator}} in this app lets you play through cascades for big triggers (Fed hike, oil spike, FII outflow). Use it as a flight simulator — when something real happens that resembles a scenario you've played, you'll feel it.",
      },
      {
        kind: "h2",
        text: "What to ignore",
      },
      {
        kind: "p",
        text: "Most economic data is noise. Things to deliberately not waste time on as a beginner:",
      },
      {
        kind: "list",
        items: [
          "Tier 3 releases (housing starts, durable goods, etc.) — unless you specifically work in those sectors",
          "Day-traders' opinions on social media — they're usually wrong and selling courses",
          "TV news scrolls during a release — they hype every move",
          "Indian GDP — by the time it's released, the market has already moved",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Pre-release: know what's expected, note current levels of key assets.",
          "Live: watch DXY first for the dominant interpretation, then check the chain.",
          "Post: journal in 2 sentences. Compare to your prediction.",
          "Weekly review on Sunday: 15 minutes connecting the week's data to market moves.",
          "Ignore Tier 3 data, TV hype, and social media tipsters.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's the single most useful action you can take right after a Tier 1 data release?",
        options: [
          "Place a trade based on the move",
          "Watch DXY for 30 seconds to confirm the dominant interpretation",
          "Read 10 different news sources",
          "Wait until tomorrow to react",
        ],
        correctIndex: 1,
        explanation: "DXY moves first and cleanest. A 0.3-1% move within 30 seconds confirms whether the market read the print as hawkish or dovish — that's your foundation.",
      },
      {
        id: "q2",
        prompt: "How long does it typically take to start recognizing data-driven market patterns through journaling?",
        options: ["A week", "8-10 weeks", "Six months minimum", "It can't be learned"],
        correctIndex: 1,
        explanation: "Most beginners report the 'aha' moment between 2-3 months of consistent journaling. Patterns emerge from 40-60 reps of observation, not theory.",
      },
    ],
  },
];

export const WEEK_03_LESSONS = lessons;
