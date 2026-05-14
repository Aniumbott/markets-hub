import type { Lesson } from "../types";

const W = 5;

const lessons: Lesson[] = [
  {
    id: "w05-l01",
    weekId: W,
    order: 1,
    title: "Why the US sets the global equity tone",
    summary: "The US is 60% of global equity market cap. When it sneezes, every market catches a cold. The mechanical reasons why.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Global equity market cap is roughly $115 trillion. The US alone is ~$60 trillion — more than half. Europe is $20T. Japan is $7T. India is $5T. China is $11T. The US is bigger than the next four combined.",
      },
      {
        kind: "p",
        text: "When the US equity market moves, it sets the global mood. Asian markets the next morning trade off the US close. Indian indices open in sympathy with the US. This isn't sentiment — it's mechanical, and it matters for anyone holding Indian equity.",
      },
      {
        kind: "h2",
        text: "Why the US dominates",
      },
      {
        kind: "list",
        items: [
          "**Largest, deepest capital markets** — 60%+ of global market cap, 40%+ of global trading volume.",
          "**Reserve currency** — the dollar is what global investors think in. US equity is dollar-denominated.",
          "**Innovation leadership** — the largest companies by market cap (Apple, Microsoft, Nvidia, Google, Amazon, Meta) are all US.",
          "**Liquidity** — you can move billions in and out of US large caps without moving prices. No other market offers that.",
          "**Index dominance** — global passive flows track MSCI World and S&P 500. ~70% of global equity ETF AUM tracks US-heavy benchmarks.",
        ],
      },
      {
        kind: "h2",
        text: "How US moves transmit to India",
      },
      {
        kind: "p",
        text: "Three transmission channels:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Direct flow channel** — When the S&P sells off, global investors reduce gross equity exposure. They sell Indian holdings too, even if India had no news. FII outflows result.",
          "**Sentiment channel** — Indian retail and DII money also reacts to US headlines. 'Markets are nervous globally' translates to caution in India.",
          "**Sector channel** — Indian IT trades with Nasdaq. When US tech sells off, Indian IT does too — both because clients (US tech companies) might cut budgets and because IT is treated as a 'global tech proxy' by some investors.",
        ],
      },
      {
        kind: "analogy",
        title: "The neighborhood power outage",
        text: "When the area transformer trips, every building in the neighborhood goes dark — including yours, even though your wiring is fine. US equity selling off is the area transformer for global markets. India is one of the buildings. Your wiring (Indian fundamentals) is fine; that doesn't matter for the next 24 hours.",
      },
      {
        kind: "h2",
        text: "Decoupling — myth or reality?",
      },
      {
        kind: "p",
        text: "Every 5 years, someone says 'India is decoupling from global markets'. The data doesn't support it. India's correlation with the S&P 500 is around 0.5-0.6 on monthly returns over the past decade. That's similar to other major EMs.",
      },
      {
        kind: "p",
        text: "What HAS changed is the asymmetry. Indian markets are now more cushioned on the downside (thanks to DII flows) but still move up with global rallies. Selectively decoupled, you might say.",
      },
      {
        kind: "h2",
        text: "The three US indices to know",
      },
      {
        kind: "table",
        headers: ["Index", "Stocks", "Character"],
        rows: [
          ["**S&P 500**", "500", "Broadest, large-cap. The benchmark. Roughly half is tech-adjacent."],
          ["**Nasdaq 100**", "100", "Tech-heavy. Mag 7 dominate. Highest beta of the three."],
          ["**Dow Jones Industrial Average**", "30", "Older, price-weighted (oddly). Less representative but quoted on TV."],
        ],
      },
      {
        kind: "p",
        text: "When watching the US, S&P 500 is the main signal. Nasdaq tells you specifically about tech and growth/duration. Dow is mostly ceremonial.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "GIFT Nifty — your morning preview",
        text: "GIFT Nifty (formerly SGX Nifty) is the Nifty 50 futures contract that trades in Singapore/GIFT City when Indian markets are closed. It opens before NSE and gives you a preview of where Nifty might open. If GIFT Nifty is down 1% at 8 AM IST, Nifty will likely open weaker.",
      },
      {
        kind: "h2",
        text: "When US drives India most",
      },
      {
        kind: "list",
        items: [
          "**FOMC days** — Wednesday 11:30 PM IST Fed meeting → Thursday Indian market reaction",
          "**US CPI / NFP releases** — 6 PM Friday/mid-month → Monday Indian market reaction",
          "**Major US earnings (Nvidia, Apple)** — overnight US move → Indian IT reaction the next day",
          "**Risk-off events** (banking crises, geopolitical) — global de-risking hits all EMs including India",
          "**US elections** — once every 4 years, but huge implications for global capital flow",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "US equity is 60%+ of global market cap. When it moves, the world moves.",
          "Transmission channels: capital flow (FII), sentiment, sector-specific (Indian IT and Nasdaq).",
          "India is correlated 0.5-0.6 with S&P. Decoupling is a myth; selective cushioning is real.",
          "Three indices: S&P 500 (broad), Nasdaq 100 (tech), Dow (ceremonial).",
          "GIFT Nifty is your overnight preview of Indian market direction.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does Nifty often open weaker after a sharp S&P 500 sell-off, even if Indian fundamentals haven't changed?",
        options: [
          "Indian fundamentals must have changed",
          "FII capital flow channel — global investors reduce gross equity exposure across all markets simultaneously",
          "Random correlation",
          "Indian retail panics",
        ],
        correctIndex: 1,
        explanation: "FIIs allocate across global equity. When they reduce gross exposure, they sell India too. The flow effect is mechanical.",
      },
      {
        id: "q2",
        prompt: "What's GIFT Nifty most useful for?",
        options: [
          "Investing in IFSC zones",
          "Previewing where Nifty 50 might open in the morning",
          "Forex hedging",
          "Tax-free trading",
        ],
        correctIndex: 1,
        explanation: "GIFT Nifty trades when NSE is closed. Its level before NSE opens previews the likely Indian opening direction.",
      },
    ],
  },
  {
    id: "w05-l02",
    weekId: W,
    order: 2,
    title: "S&P 500 vs Nasdaq vs Dow — what each represents",
    summary: "Three indices, three different stories. Reading them together tells you what kind of US move is happening.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "When Indian financial news quotes 'US markets', they often mean Dow Jones. That's because Dow is the oldest and gets TV airtime. But Dow is the least representative of the three major US indices. Knowing which index leads on a given day tells you what type of macro move is happening.",
      },
      {
        kind: "h2",
        text: "S&P 500 — the benchmark",
      },
      {
        kind: "p",
        text: "The Standard & Poor's 500 covers the 500 largest US listed companies. Market-cap weighted (like Nifty 50), so larger companies dominate. Reflects the broad US economy across all sectors.",
      },
      {
        kind: "p",
        text: "S&P 500 sector composition is markedly different from Nifty 50 — much more tech-heavy, less financial-services-heavy.",
      },
      {
        kind: "diagram",
        diagram: "sector-donut",
        props: { index: "sp500" },
        caption: "S&P 500 sector weights — tech alone is over 30%. Healthcare and Financials together are another quarter.",
      },
      {
        kind: "p",
        text: "When you hear 'US stocks are up 1%', think S&P 500. It's the default global benchmark.",
      },
      {
        kind: "h2",
        text: "Nasdaq 100 — the tech bias",
      },
      {
        kind: "p",
        text: "Nasdaq 100 covers the 100 largest non-financial Nasdaq-listed companies. Massively tech-tilted. The Magnificent Seven (Apple, Microsoft, Nvidia, Alphabet/Google, Amazon, Meta, Tesla) collectively make up ~50% of Nasdaq 100 weight as of late 2024.",
      },
      {
        kind: "p",
        text: "Nasdaq has higher beta than S&P — bigger moves both up and down. It's also more rate-sensitive (longer-duration growth stocks suffer most when discount rates rise).",
      },
      {
        kind: "h2",
        text: "Dow Jones Industrial Average — the old guard",
      },
      {
        kind: "p",
        text: "Dow tracks 30 large US companies, hand-picked by a committee. The oddity: Dow is **price-weighted**, not market-cap weighted. UnitedHealth at $550/share has 4x the index weight of Microsoft at $130/share, even though Microsoft has more than 3x the market cap.",
      },
      {
        kind: "p",
        text: "Because of the price-weighting and selective inclusion, Dow under-represents tech and over-represents older industrial and financial names. Less useful for understanding broad market dynamics, but still quoted everywhere.",
      },
      {
        kind: "analogy",
        title: "The three news anchors",
        text: "S&P 500 is the senior editor — broad, balanced, what every other outlet quotes. Nasdaq is the tech beat reporter — narrow, intense, sees future trends first. Dow is the veteran columnist — well-loved, set in his ways, doesn't represent today's economy but everyone reads him.",
      },
      {
        kind: "h2",
        text: "What divergences tell you",
      },
      {
        kind: "table",
        headers: ["Pattern", "Interpretation"],
        rows: [
          ["S&P up, Nasdaq down more", "Tech-specific selling. Maybe rates rising or AI doubts."],
          ["S&P down, Nasdaq up", "Old economy weakness. Tech is the haven."],
          ["S&P down, Nasdaq down hard", "Risk-off + tech-specific. Bad combo. Global selloff."],
          ["S&P up, Dow flat or down", "Growth working, industrials lagging. Late-cycle vibes."],
          ["Dow up sharply, others flat", "Specific name moving the index (price-weighted distortion)."],
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "How to actually track",
        text: "On TradingView or Investing.com, open S&P 500 (SPX) and Nasdaq 100 (NDX) side by side. Watch the relative move daily. Indian IT correlates more with Nasdaq than S&P. Indian banks and consumer have less direct mapping but the broad S&P sentiment matters.",
      },
      {
        kind: "h2",
        text: "The Russell 2000 — worth knowing about",
      },
      {
        kind: "p",
        text: "Russell 2000 tracks US small caps. Generally has higher beta than S&P. When Russell 2000 underperforms S&P 500 by a lot over weeks, it signals broad economy weakness — small caps are more domestic and more rate-sensitive than the megacaps that dominate S&P.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "S&P 500: broad benchmark, sector-balanced, the default.",
          "Nasdaq 100: tech-heavy, Mag 7 = 50%+, higher beta, more rate-sensitive.",
          "Dow: 30 stocks, price-weighted (odd), narrow, ceremonial.",
          "Divergences between S&P and Nasdaq tell you whether moves are broad or tech-specific.",
          "Russell 2000 vs S&P spread tells you about broad economic health vs megacap concentration.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "S&P 500 is down 0.5% but Nasdaq 100 is down 2.5%. What's the most likely macro driver?",
        options: [
          "Broad recession scare",
          "Tech-specific selling — could be rate concerns or AI sector doubts",
          "Bank failure",
          "Election uncertainty",
        ],
        correctIndex: 1,
        explanation: "When Nasdaq underperforms S&P by a lot, it's tech-specific. Usually rates rising (hurts long-duration growth) or sector-specific concerns.",
      },
      {
        id: "q2",
        prompt: "Why is the Dow Jones Industrial Average considered less representative than the S&P 500?",
        options: [
          "It's a Brazilian index",
          "It's price-weighted (not market-cap weighted), uses only 30 stocks, and skews toward old-economy names",
          "It only tracks tech",
          "It's calculated annually",
        ],
        correctIndex: 1,
        explanation: "Dow is price-weighted, hand-selected, and only 30 stocks. The structural choices make it less representative of the broad economy than S&P 500 or Nasdaq.",
      },
    ],
  },
  {
    id: "w05-l03",
    weekId: W,
    order: 3,
    title: "The Magnificent 7 and the concentration problem",
    summary: "Seven companies are now 50% of Nasdaq 100 weight and 30% of the S&P 500. What that means for risk.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Apple. Microsoft. Nvidia. Alphabet (Google). Amazon. Meta (Facebook). Tesla. Seven companies. Combined market cap: ~$17 trillion as of late 2024 — bigger than the entire stock market of every country except the US itself.",
      },
      {
        kind: "p",
        text: "These seven are called the Magnificent Seven (Mag 7), a name that stuck during the 2023 AI rally. They drive a hugely disproportionate share of US equity returns and have become a global macro factor in their own right.",
      },
      {
        kind: "h2",
        text: "How concentrated they are",
      },
      {
        kind: "table",
        headers: ["Index", "Mag 7 share of index weight (~late 2024)"],
        rows: [
          ["Nasdaq 100", "~50%"],
          ["S&P 500", "~30%"],
          ["MSCI World", "~20%"],
          ["MSCI All-Country World", "~17%"],
        ],
      },
      {
        kind: "p",
        text: "That ~30% of S&P 500 is unprecedented. Historically the top 7 stocks accounted for 15-20% of S&P. The current concentration is higher than during the 1999-2000 dotcom peak.",
      },
      {
        kind: "h2",
        text: "Why they got so big",
      },
      {
        kind: "list",
        items: [
          "**Platform economics** — Apple's App Store, Google's Search, Meta's Instagram, Amazon's marketplace are global monopolies/duopolies with near-zero marginal cost",
          "**Network effects** — Each user makes the product more valuable for the next user. Hard to compete with.",
          "**Scale moats** — Capex of $50-200B/year by Mag 7. Combined R&D spend exceeds GDP of medium-sized countries.",
          "**AI catalyst** — Nvidia's pivot from gaming GPUs to AI training accelerators made it a trillion-dollar company in 2 years. Microsoft and Google followed via their AI platforms.",
        ],
      },
      {
        kind: "h2",
        text: "Why this matters for you (even in India)",
      },
      {
        kind: "p",
        text: "Three implications:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**S&P 500 'broad market' isn't broad anymore.** A Nifty 50 investor diversifying via a US S&P fund is mostly buying 7 tech stocks. Be aware of what you actually own.",
          "**Nvidia earnings move global markets.** A weak Nvidia print can take Nasdaq down 3-5% and ripple through Indian IT the next day.",
          "**Concentration = systemic risk.** If AI capex thesis cracks, Mag 7 could correct 30-50%, dragging S&P and global equity with them. The risk in 'safe passive US exposure' is higher than the index headline suggests.",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Passive ≠ diversified",
        text: "A Mag 7-heavy S&P 500 ETF is 30% in seven tech stocks. That's more concentration risk than most active funds carry. Many investors think they're 'safely passive' when they're effectively running a tech-heavy portfolio. Mix in mid/small cap US (Russell 2000) or international equity to actually diversify.",
      },
      {
        kind: "h2",
        text: "AI capex — the new macro factor",
      },
      {
        kind: "p",
        text: "Mag 7 (specifically Microsoft, Google, Meta, Amazon, Apple) collectively spent ~$200 billion on AI-related capex in 2024 — primarily on Nvidia GPUs. This is unprecedented concentration of investment. If this capex moderates, Nvidia revenue could plunge; if AI economics disappoint, the whole investment cycle reverses.",
      },
      {
        kind: "p",
        text: "Watch Mag 7 quarterly earnings calls for 'capex guidance' commentary. As of late 2024, capex was still rising. A pivot would be one of the most important market events of the decade.",
      },
      {
        kind: "h2",
        text: "Indian context",
      },
      {
        kind: "p",
        text: "Indian IT services (TCS, Infosys, Wipro) sell software and services to large US enterprises — Mag 7 are major direct or indirect clients. Strong Mag 7 = stronger US enterprise spending = better Indian IT demand. Conversely, AI displacing some traditional IT work (code generation, basic data services) is a real long-term concern for Indian IT.",
      },
      {
        kind: "p",
        text: "Indian investors taking US equity exposure should know that the 'global tech' exposure they're buying is heavily concentrated in 7 companies. Mid-cap US and ex-US exposure adds genuine diversification.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Mag 7 (Apple, Microsoft, Nvidia, Google, Amazon, Meta, Tesla) are ~30% of S&P, ~50% of Nasdaq 100.",
          "Concentration is higher than dotcom peak.",
          "Nvidia earnings can move global markets within hours; watch them as macro events.",
          "AI capex is ~$200B/year and concentrated; a pivot would be a major event.",
          "Indian IT sells into Mag 7 indirectly — their health affects Indian IT demand.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Approximately how much of the S&P 500's market cap weight do the Magnificent 7 represent in late 2024?",
        options: ["10%", "30%", "50%", "70%"],
        correctIndex: 1,
        explanation: "Mag 7 are ~30% of S&P 500 weight — historically unprecedented concentration, higher even than the 1999-2000 dotcom peak.",
      },
      {
        id: "q2",
        prompt: "Why is a 'passive' Mag 7-heavy S&P 500 ETF less diversified than it appears?",
        options: [
          "It's not passive at all",
          "30% of holdings sit in 7 tech-adjacent companies, creating significant concentration risk despite the '500 stocks' label",
          "S&P 500 funds are illegal in India",
          "ETFs always carry hidden risks",
        ],
        correctIndex: 1,
        explanation: "Real diversification depends on weights, not just count. 500 stocks with 30% in 7 names is less diversified than 100 stocks evenly weighted.",
      },
    ],
  },
  {
    id: "w05-l04",
    weekId: W,
    order: 4,
    title: "Japan, Europe, China — the other equity blocs",
    summary: "Three large equity markets beyond the US. What drives each, and how each affects India.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "After the US, the next three largest equity blocs are Europe (Stoxx 600), Japan (Nikkei), and China (Hang Seng + onshore A-shares). Each has its own personality, drivers, and India linkages.",
      },
      {
        kind: "h2",
        text: "Japan — Nikkei 225 and the Topix",
      },
      {
        kind: "p",
        text: "Japan was the world's #2 equity market through the 1980s. The Nikkei peaked at ~39,000 in 1989, then spent 30+ years below that level. Re-broke to new all-time highs only in 2024.",
      },
      {
        kind: "p",
        text: "Key dynamics:",
      },
      {
        kind: "list",
        items: [
          "**Yen carry trade** — Japan's near-zero rates make the yen the global funding currency. The {{yen|yen}} is a key macro pair.",
          "**Export-heavy** — Toyota, Honda, Sony, Nintendo. Yen weakness helps exporters; yen strength hurts.",
          "**Corporate governance reforms** — Recent push by Tokyo Stock Exchange to make companies improve ROE. Has driven the post-2023 Nikkei rally.",
          "**Aging population** — Domestic consumption growth limited. Exports + capital allocation are the levers.",
        ],
      },
      {
        kind: "p",
        text: "For Indian investors, Japan matters mostly via the yen and the carry trade. The August 2024 carry unwind (covered in case studies) showed the global ripple effect.",
      },
      {
        kind: "h2",
        text: "Europe — Stoxx 600 and DAX",
      },
      {
        kind: "p",
        text: "Europe's equity story has been one of underperformance vs the US since the GFC. Reasons: less tech concentration, slower growth, energy crisis aftermath, fragmentation across 20+ countries.",
      },
      {
        kind: "p",
        text: "Major indices:",
      },
      {
        kind: "list",
        items: [
          "**Stoxx 600** — broadest pan-European benchmark. 600 stocks across 17 countries.",
          "**DAX (Germany)** — 40 large German stocks. Auto and chemicals heavy. Volkswagen, BMW, Siemens, BASF.",
          "**CAC 40 (France)** — luxury-heavy. LVMH, Hermes, L'Oréal.",
          "**FTSE 100 (UK)** — energy and financials heavy. BP, Shell, HSBC, AstraZeneca.",
        ],
      },
      {
        kind: "p",
        text: "ECB (European Central Bank) is the rate-setter. Watches inflation similar to the Fed but has historically been more dovish. Energy supply (Russia gas disruption post-2022) has been a unique European factor.",
      },
      {
        kind: "h2",
        text: "China — Hang Seng + onshore A-shares",
      },
      {
        kind: "p",
        text: "China's equity market is unique — partially walled off, government-influenced, structurally cheap but with periodic policy shocks.",
      },
      {
        kind: "p",
        text: "Two distinct markets:",
      },
      {
        kind: "list",
        items: [
          "**Hang Seng (Hong Kong)** — H-shares, easier for foreign investors to access. Tech names: Tencent, Alibaba, Meituan, JD.com.",
          "**Shanghai Composite + Shenzhen Composite (A-shares)** — onshore mainland markets. Banks, infrastructure, state-owned enterprises dominate. Access via Stock Connect.",
        ],
      },
      {
        kind: "p",
        text: "Drivers: government stimulus announcements, property sector health (Evergrande contagion), tech regulation cycles, US-China trade tensions.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Why China matters for Indian investors",
        text: "China and India compete for the same EM allocation. When China rallies hard (Sept 2024 stimulus announcement), some FII money rotates from India to China. When China disappoints, India often benefits. Watch Hang Seng moves alongside Nifty for this rotation signal.",
      },
      {
        kind: "h2",
        text: "MSCI Emerging Markets — the bucket India sits in",
      },
      {
        kind: "p",
        text: "Global investors don't usually pick India directly. They allocate to MSCI Emerging Markets (MSCI EM) or MSCI Asia ex-Japan, and India is a sleeve within. India's weight in MSCI EM has grown significantly:",
      },
      {
        kind: "table",
        headers: ["Year", "India weight in MSCI EM"],
        rows: [
          ["2010", "~8%"],
          ["2015", "~8%"],
          ["2020", "~10%"],
          ["2024 (early)", "~18%"],
          ["2024 (late)", "~20%"],
        ],
      },
      {
        kind: "p",
        text: "India has overtaken China as the second-largest EM weight (after Taiwan briefly took the top spot due to TSMC). This is a structural tailwind — passive EM flows mechanically buy more India over time.",
      },
      {
        kind: "h2",
        text: "How to invest globally from India",
      },
      {
        kind: "p",
        text: "Options for Indian residents:",
      },
      {
        kind: "list",
        items: [
          "**LRS (Liberalised Remittance Scheme)** — up to $250,000/year out of India. Use platforms like INDmoney, Vested, Stockal to invest in US directly.",
          "**Indian-listed international ETFs / mutual funds** — Mirae Asset NYSE FANG ETF, Motilal Oswal Nasdaq 100 ETF/FOF, ICICI Prudential US Bluechip Equity Fund. Simpler, INR-denominated, no LRS limit.",
          "**Gift City IFSC route** — newer, for HNI investors. Higher minimums but tax-efficient for larger amounts.",
        ],
      },
      {
        kind: "p",
        text: "For most retail investors, an Indian mutual fund tracking the Nasdaq 100 or S&P 500 is the easiest 'global equity' exposure. 10-20% of your equity allocation in international funds adds real currency and geographic diversification.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Japan: yen-driven, exporter-heavy, recently broke to all-time highs.",
          "Europe: fragmented, slower-growth, no Mag-7 equivalent.",
          "China: walled-off, government-influenced, structural EM rival to India.",
          "MSCI EM: India's weight is ~20% and rising — structural passive tailwind.",
          "Indian retail can invest globally via LRS, Indian-listed international funds, or GIFT City IFSC.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does Chinese equity market performance affect Indian equity flows?",
        options: [
          "Direct competition for products",
          "China and India compete for the same EM allocation; a Chinese rally can pull FII money out of India and vice versa",
          "Currency union",
          "It doesn't affect India",
        ],
        correctIndex: 1,
        explanation: "FIIs allocate to EM as a bucket. China and India are the two largest weights — money rotates between them based on relative outlook.",
      },
      {
        id: "q2",
        prompt: "What's a practical way for an Indian retail investor to gain Nasdaq 100 exposure?",
        options: [
          "It's not possible",
          "Indian-listed international funds (e.g., Motilal Oswal Nasdaq 100 FOF) — INR-denominated, no LRS limit",
          "Crypto exchanges",
          "F&O on NSE",
        ],
        correctIndex: 1,
        explanation: "Indian mutual funds that invest globally are the simplest route. INR-denominated, taxed as international equity, no annual LRS limit.",
      },
    ],
  },
  {
    id: "w05-l05",
    weekId: W,
    order: 5,
    title: "Investing globally from India — LRS and beyond",
    summary: "The practical mechanics of how Indians can hold US, European, and Japanese equity. Costs, taxes, and limits.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "An Indian resident can absolutely own Apple, Microsoft, or a Nasdaq ETF — and increasingly, many do. The mechanics depend on which route you choose. Each route has trade-offs in cost, friction, tax efficiency, and currency exposure.",
      },
      {
        kind: "h2",
        text: "Route 1: Indian mutual funds with international mandate",
      },
      {
        kind: "p",
        text: "Several Indian AMCs run funds that invest in international equity. You buy them like any Indian mutual fund — through Coin, Groww, Kuvera, etc.",
      },
      {
        kind: "p",
        text: "Examples:",
      },
      {
        kind: "list",
        items: [
          "Motilal Oswal Nasdaq 100 ETF (NASDAQ100.NS) — direct ETF, tracks NDX",
          "ICICI Prudential US Bluechip Equity Fund — actively managed",
          "Mirae Asset NYSE FANG+ ETF — concentrated FANG plus exposure",
          "Edelweiss US Technology Equity Fund — US tech focus",
          "Franklin India Feeder - Franklin US Opportunities Fund",
        ],
      },
      {
        kind: "p",
        text: "**Pros**: INR-denominated, simple, no LRS limit, ELSS-equivalent simplicity. **Cons**: Limited fund choices, expense ratios 0.6-1.5%, periodic restrictions when global investment limit is hit (happened multiple times in 2022-23).",
      },
      {
        kind: "h2",
        text: "Route 2: LRS direct broking",
      },
      {
        kind: "p",
        text: "RBI's Liberalised Remittance Scheme (LRS) allows each Indian resident to remit up to $250,000 per financial year out of India for permitted purposes — including investments.",
      },
      {
        kind: "p",
        text: "Platforms like INDmoney, Vested, Stockal, and Groww International let you open a US brokerage account, fund it via LRS, and trade US-listed stocks and ETFs directly.",
      },
      {
        kind: "p",
        text: "**Pros**: Direct ownership, full access to ~5,000 US-listed names, fractional shares (you can buy ₹100 of Apple), lower TER on US ETFs (0.03% on VOO/SPY vs 0.5-1% on Indian wrappers). **Cons**: 20% TCS (Tax Collected at Source) on LRS remittances above ₹7 lakh per year, foreign brokerage account paperwork, FX conversion costs, complex taxation.",
      },
      {
        kind: "h2",
        text: "Route 3: GIFT City IFSC",
      },
      {
        kind: "p",
        text: "Gujarat International Finance Tec-City (GIFT City) is India's offshore financial center. Special tax-efficient regime for international investments. Newer route, mostly for HNI investors.",
      },
      {
        kind: "p",
        text: "**Pros**: No LRS limit (in some structures), tax-efficient on certain instruments. **Cons**: Higher minimums (often ₹10-50 lakh+), narrower product range, still maturing.",
      },
      {
        kind: "h2",
        text: "Taxation of international investments",
      },
      {
        kind: "p",
        text: "This is where it gets complicated. Different rules for different routes:",
      },
      {
        kind: "table",
        headers: ["Route", "Tax treatment in India"],
        rows: [
          ["Indian MF (international)", "Treated as 'non-equity' MF post-April 2023 — gains taxed at slab rate (any holding period)"],
          ["Direct LRS US stocks", "STCG (≤2 years): slab rate. LTCG (>2 years): 12.5% with indexation removed (Budget 2024). Plus dividend tax."],
          ["Dividends received from US stocks", "25% withheld in US, 12.5-25% credit in India (depending on tax treaty)"],
        ],
      },
      {
        kind: "p",
        text: "For most retail investors with smaller amounts, the Indian-listed international fund route is significantly simpler. For amounts >₹10 lakh, direct LRS becomes worth the complexity.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "TCS surprise",
        text: "Since October 2023, LRS remittances above ₹7 lakh in a financial year attract 20% TCS (Tax Collected at Source). It's adjusted against your tax liability when you file returns, but it's a real cash flow drag. Plan accordingly.",
      },
      {
        kind: "h2",
        text: "Allocation guidelines",
      },
      {
        kind: "p",
        text: "How much of your equity portfolio should be international? There's no universal answer, but most reasonable allocations sit between 10-30% of equity exposure.",
      },
      {
        kind: "list",
        items: [
          "**Why international**: currency diversification (USD strength when INR weakens), exposure to companies with no Indian equivalent (Apple, Microsoft, Nvidia), reduced India-specific risk.",
          "**Why not too much**: you live in India, spend in rupees, your wage is in rupees. Currency mismatch is a real cost if rupees strengthen long-term (unlikely but possible). And Indian equity has historically out-returned global equity in INR terms.",
          "**A sensible default**: 15-20% of equity in international, mostly US (S&P 500 or Nasdaq 100 index), maybe 5% in a developed-ex-US fund.",
        ],
      },
      {
        kind: "h2",
        text: "Currency exposure",
      },
      {
        kind: "p",
        text: "When you hold an Indian-listed Nasdaq fund, you're indirectly long USD/INR. If the dollar strengthens (USD/INR rises), your fund value in INR goes up even if the index is flat. This is part of the diversification benefit — INR weakness historically correlates with Indian equity stress, so USD-denominated holdings cushion the blow.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Three routes: Indian international MFs (simplest), LRS direct broking (best for larger amounts), GIFT City IFSC (HNI).",
          "LRS allows up to $250k/year per Indian resident; 20% TCS above ₹7 lakh.",
          "Post-April 2023: Indian international MFs taxed at slab rate regardless of holding period.",
          "15-20% of equity allocation in international (mostly US) is a reasonable default.",
          "International exposure adds currency diversification — INR weakness helps your foreign holdings.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How much can a single Indian resident remit out of India per financial year for investments under LRS?",
        options: ["$50,000", "$250,000", "$1 million", "No limit"],
        correctIndex: 1,
        explanation: "LRS limit is $250,000 per financial year per resident. Above ₹7 lakh of remittance attracts 20% TCS.",
      },
      {
        id: "q2",
        prompt: "Why might 15-20% international exposure benefit an Indian equity investor?",
        options: [
          "Higher returns guaranteed",
          "Currency and geographic diversification — INR weakness helps foreign holdings; exposure to companies with no Indian equivalent",
          "Tax savings",
          "It's required by SEBI",
        ],
        correctIndex: 1,
        explanation: "International exposure adds currency diversification and access to global businesses (Mag 7) that don't have Indian equivalents. Adds real diversification benefit.",
      },
    ],
  },
  {
    id: "w05-l06",
    weekId: W,
    order: 6,
    title: "Earnings season — the global rhythm",
    summary: "US and Indian earnings cycles, what moves, what doesn't, and how to read a quarterly print.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Four times a year, every major listed company in the world reports its quarterly results. The 6-week window from each cycle is called 'earnings season' — the most concentrated period of single-stock volatility on the calendar.",
      },
      {
        kind: "h2",
        text: "The cycle",
      },
      {
        kind: "table",
        headers: ["Cycle", "US (Q starts ~6 weeks before)", "India (Q starts ~6 weeks before)"],
        rows: [
          ["Q1 print", "Mid-April to end-May", "Mid-July to end-August"],
          ["Q2 print", "Mid-July to end-August", "Mid-October to end-November"],
          ["Q3 print", "Mid-October to end-November", "Mid-January to end-February"],
          ["Q4 print", "Mid-January to end-February", "Mid-April to end-May (with annual)"],
        ],
      },
      {
        kind: "p",
        text: "Note: 'Q1' in India typically refers to April-June (Indian financial year basis), reported in July-August. 'Q1' in the US refers to January-March, reported in April-May. The terminology can confuse — pay attention to the calendar.",
      },
      {
        kind: "h2",
        text: "What gets reported",
      },
      {
        kind: "p",
        text: "Companies release quarterly results via a press release plus an investor presentation. Key items:",
      },
      {
        kind: "list",
        items: [
          "**Revenue** — total sales in the quarter, vs prior quarter (QoQ) and year-ago quarter (YoY)",
          "**EBITDA / Operating profit** — earnings before interest, tax, depreciation, amortization. Operating profitability.",
          "**Net profit (PAT)** — bottom line",
          "**EPS** — net profit per share",
          "**Margin trends** — gross margin, EBITDA margin, PAT margin (% of revenue)",
          "**Volume / Order book** — for product companies, units sold; for services, contracted business in pipeline",
          "**Management guidance** — projections for next quarter or full year",
        ],
      },
      {
        kind: "h2",
        text: "What actually moves the stock",
      },
      {
        kind: "p",
        text: "Counter-intuitively, the headline numbers often don't matter most. Three things move stocks more:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Gap vs consensus** — Did revenue and EPS beat or miss what analysts expected? A small miss can crash a stock 10%; a small beat can pop it 5%.",
          "**Guidance** — What management says about next quarter. Lowered guidance is often more painful than the past miss.",
          "**Specific metric markets watch** — For banks, NIM; for IT services, dollar revenue growth; for FMCG, volume growth; for telecom, ARPU. Miss the watched metric and the stock falls even if headline beat.",
        ],
      },
      {
        kind: "p",
        text: "Recall the HDFC Bank Q1 FY24 case (Week 1 reference). 30% PAT growth — phenomenal in absolute terms. Stock fell 6% because NIM (the watched metric) compressed below expectation.",
      },
      {
        kind: "h2",
        text: "The big US prints",
      },
      {
        kind: "p",
        text: "Most-watched US earnings (global market movers):",
      },
      {
        kind: "list",
        items: [
          "**Nvidia** — single biggest global market event in current cycle. Misses or weak guidance can drop Nasdaq 3-5%.",
          "**Apple** — services growth and iPhone unit trends.",
          "**Microsoft** — Azure growth and Office subscription.",
          "**Google (Alphabet)** — ad revenue and YouTube.",
          "**Amazon** — AWS growth (the real profit engine, retail is loss leader).",
          "**Meta** — ad revenue and Reels engagement.",
          "**Tesla** — deliveries and margin.",
        ],
      },
      {
        kind: "h2",
        text: "The big Indian prints",
      },
      {
        kind: "p",
        text: "Sequence matters in Indian earnings season — the first prints often set the tone:",
      },
      {
        kind: "list",
        items: [
          "**TCS** — typically first major IT services print. Bellwether for the entire IT pack.",
          "**Infosys** — second day usually. Guidance for full-year USD revenue growth moves the entire sector.",
          "**HDFC Bank / ICICI Bank** — early bank prints. Set the tone for financial sector.",
          "**Reliance Industries** — segment-wise (RIL has telecom, retail, refining, petrochemicals). Diversified macro read.",
          "**Hindustan Unilever** — FMCG leader. Volume growth tells you about Indian consumption.",
          "**Asian Paints** — consumer discretionary indicator (paint demand follows housing and home renovations).",
          "**Bajaj Auto / Maruti** — auto demand pulse.",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "How to actually engage during earnings season",
        text: "For a beginner: watch the bellwethers (TCS, Infy, HDFC Bank, Reliance). Read the management commentary section of the investor presentation — usually 10-15 pages. Skip the financial statements unless you specifically want to learn how to read them. Note the stock's reaction. Compare to your reading. Two cycles of this and you start seeing patterns.",
      },
      {
        kind: "h2",
        text: "The two windows that move markets",
      },
      {
        kind: "p",
        text: "Beyond the print itself, two windows around earnings move stocks heavily:",
      },
      {
        kind: "list",
        items: [
          "**Pre-print drift** — Stocks often drift up or down in the 2 weeks before earnings as expectations build. Sometimes the 'whisper number' diverges from official consensus.",
          "**Post-print reaction** — The next 5 sessions after earnings tend to see continuation. A stock that gapped up 5% on earnings often grinds higher; a gap-down often sees follow-through selling.",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Four earnings seasons per year, each 6 weeks long. India lags US by ~3 months due to different fiscal year.",
          "What moves stocks: gap vs consensus, guidance, and the specific watched metric per sector.",
          "Bellwethers (Nvidia globally; TCS, Infy, HDFC Bank in India) set the tone for entire sectors.",
          "Read management commentary, not just numbers. The story matters as much as the report.",
          "Don't trade earnings as a beginner — watch and journal instead.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "A bank reports record PAT growth of 28% but its NIM compresses 20 bps below consensus. What's the most likely stock reaction?",
        options: [
          "Strong rally on the headline number",
          "Stock falls because NIM (the watched metric) missed",
          "No reaction",
          "Rally then sell-off",
        ],
        correctIndex: 1,
        explanation: "Banks are valued on NIM — it's the watched metric. A NIM miss matters more than headline PAT growth. This pattern played out repeatedly in HDFC Bank, IndusInd Bank, Kotak Mahindra Bank prints in 2023-24.",
      },
      {
        id: "q2",
        prompt: "Why is Nvidia's earnings report increasingly a global market event?",
        options: [
          "Nvidia is Indian",
          "Nvidia is the largest AI chip provider — its results signal whether the AI capex cycle continues. Weak prints can drop Nasdaq 3-5% and ripple into Indian IT.",
          "Nvidia controls oil prices",
          "Nvidia owns Apple",
        ],
        correctIndex: 1,
        explanation: "Nvidia's results are seen as the cleanest read on AI capex sustainability. The capex cycle moves ~$200B/year globally and Mag 7 economics depend on it.",
      },
    ],
  },
];

export const WEEK_05_LESSONS = lessons;
