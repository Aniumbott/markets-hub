import type { InvestorProfile } from "./types";

export const INVESTORS: InvestorProfile[] = [
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    nationality: "American",
    yearsActive: "1956 – present",
    tagline: "The most successful long-term investor in history.",
    philosophy:
      "Buy great businesses at fair prices, hold forever, ignore short-term price movements.",
    body: [
      {
        kind: "p",
        text: "Warren Buffett is the chairman and CEO of Berkshire Hathaway. From 1965 to 2023, Berkshire's per-share market value compounded at ~20% annually vs the S&P 500's ~10% — an outperformance unmatched at his scale. As of 2024, Berkshire's market cap is over $1 trillion.",
      },
      {
        kind: "p",
        text: "Buffett's core insight: time is the most important variable. Compounding at 20% for 60 years produces 1,000,000x returns. Most investors look for the next 50% gain; Buffett looked for the next 50-year compound.",
      },
      {
        kind: "h2",
        text: "Core principles",
      },
      {
        kind: "list",
        items: [
          "**Circle of competence** — invest only in businesses you genuinely understand",
          "**Economic moats** — durable competitive advantages (brand, network effects, scale, regulatory) are what generate decades of returns",
          "**Owner mindset** — when you buy a stock, you're buying part-ownership of a business; behave accordingly",
          "**Margin of safety** — buy at a price comfortably below intrinsic value to protect against errors",
          "**Long-term holding** — 'My favorite holding period is forever'",
          "**Read everything** — Buffett reads 6+ hours daily; he calls it the 'biggest competitive advantage'",
        ],
      },
      {
        kind: "h2",
        text: "Famous bets",
      },
      {
        kind: "list",
        items: [
          "**Coca-Cola (1988)** — bought $1B worth at 13x P/E. Now worth $25B+ plus decades of dividends.",
          "**See's Candies (1972)** — paid $25M; demonstrated the power of pricing power and brand",
          "**Apple (2016)** — bought over $30B by 2020. Now Berkshire's largest position despite Buffett's historical aversion to tech.",
          "**Insurance + reinvestment of float** — Berkshire's insurance business gave him cheap capital to reinvest for decades",
        ],
      },
    ],
    famousQuotes: [
      "Be fearful when others are greedy, and greedy when others are fearful.",
      "Our favorite holding period is forever.",
      "Price is what you pay; value is what you get.",
      "Risk comes from not knowing what you're doing.",
      "The most important investment you can make is in yourself.",
      "Time is the friend of the wonderful business, the enemy of the mediocre.",
    ],
    keyLessons: [
      "Patience compounds. Most investors underestimate just how long is needed.",
      "Quality businesses with moats outperform clever stock-picking over decades.",
      "Sit on cash if you can't find quality — don't reach for risk.",
      "The biggest competitive edge is in reading and thinking, not trading.",
    ],
    notable: [
      "Berkshire's per-share value compounded at ~20% from 1965-2023, vs ~10% for S&P 500.",
      "Reportedly reads 500+ pages a day.",
      "Plans to give 99%+ of his wealth to philanthropy via the Bill & Melinda Gates Foundation.",
    ],
  },
  {
    slug: "charlie-munger",
    name: "Charlie Munger",
    nationality: "American",
    yearsActive: "1956 – 2023",
    tagline: "Buffett's intellectual partner; pioneer of 'inversion' thinking.",
    philosophy:
      "Avoid stupidity to make money. Use multiple mental models. Be rational even when others aren't.",
    body: [
      {
        kind: "p",
        text: "Charlie Munger was Vice Chairman of Berkshire Hathaway from 1978 until his death in November 2023 at age 99. Without Munger's influence, Buffett's investing style would have stayed strictly Graham-Dodd 'cigar butt' investing. Munger pushed Buffett toward paying up for quality.",
      },
      {
        kind: "p",
        text: "Munger's intellectual legacy is the concept of 'mental models' — borrowing frameworks from psychology, economics, physics, biology, and history to make better investment decisions. His annual speeches at the Daily Journal AGM became must-watch events.",
      },
      {
        kind: "h2",
        text: "Core ideas",
      },
      {
        kind: "list",
        items: [
          "**Inversion** — instead of 'how do I get rich?', ask 'how do I avoid getting poor?'. The answers are often more actionable.",
          "**Multiple mental models** — use psychology, economics, physics, biology to evaluate decisions",
          "**Lollapalooza effects** — when multiple psychological biases combine, irrational outcomes compound",
          "**Patience is a competitive advantage** — most investors are too active; sitting matters",
          "**Avoid stupidity over chasing brilliance** — most investors lose more by doing dumb things than by missing brilliant ones",
        ],
      },
      {
        kind: "h2",
        text: "On Indian markets",
      },
      {
        kind: "p",
        text: "Munger praised India's long-term growth story but warned about valuation excess in Indian small caps. His mental model framework is widely studied in Indian investing communities.",
      },
    ],
    famousQuotes: [
      "I have never succeeded much in life in something I wasn't interested in.",
      "All I want to know is where I'm going to die so I'll never go there.",
      "The big money is not in the buying and selling, but in the waiting.",
      "Take a simple idea and take it seriously.",
      "Show me the incentive and I'll show you the outcome.",
      "If you're not willing to react with equanimity to a market price decline of 50%, you're not fit to be a common shareholder.",
    ],
    keyLessons: [
      "Most investing failures come from psychological biases, not bad analysis.",
      "Inversion: thinking 'what would make this go wrong?' before buying.",
      "Quality compounds; junk reverts.",
      "Sitting on your hands is often the best 'action'.",
    ],
    notable: [
      "Berkshire Hathaway Vice Chairman 1978-2023.",
      "Daily Journal Corporation chairman; annual AGM became famous for unfiltered investing wisdom.",
      "Lived to age 99; gave major speeches until weeks before his death.",
    ],
  },
  {
    slug: "rakesh-jhunjhunwala",
    name: "Rakesh Jhunjhunwala",
    nationality: "Indian",
    yearsActive: "1985 – 2022",
    tagline: "The 'Big Bull' of Indian markets — turned ₹5,000 into ~₹40,000 cr.",
    philosophy:
      "Bet big on conviction. India's long-term growth story is real. Patience + leverage in early career.",
    body: [
      {
        kind: "p",
        text: "Rakesh Jhunjhunwala was India's most successful equity investor of his generation. Starting with ₹5,000 in 1985 (as a young CA), he built a net worth of ~₹40,000 crore by his death in August 2022 — a roughly 35% CAGR over 37 years.",
      },
      {
        kind: "p",
        text: "RJ (as he was known) bet on Indian equity at a time when the asset class was barely investible to retail. He was famously bullish on India through every cycle, including bear markets when most investors capitulated. His public commentary on Indian markets shaped a generation of retail and institutional behavior.",
      },
      {
        kind: "h2",
        text: "Notable bets",
      },
      {
        kind: "list",
        items: [
          "**Titan Industries (early 2000s)** — bought when it was a struggling Tata watch maker; became his largest position at ~₹10,000 cr+ value",
          "**Crisil** — Indian rating agency, multi-bagger over 15+ years",
          "**Star Health & Allied Insurance** — strategic stake, recent IPO",
          "**Akasa Air** — launched in 2022 as RJ's last venture; airline became operational shortly before his death",
        ],
      },
      {
        kind: "h2",
        text: "Style",
      },
      {
        kind: "list",
        items: [
          "Long-term holder of conviction positions (Titan held 25+ years)",
          "Active in F&O early in career (used leverage to scale capital)",
          "Believed in India's long-term growth story unwaveringly",
          "Public commentary on TV; not secretive about views",
          "Heavily concentrated portfolio — top 5 stocks were ~70%+ of net worth",
        ],
      },
    ],
    famousQuotes: [
      "Markets are like women — always commanding, always mysterious, always exciting.",
      "Buy quality stocks, hold them for long, and watch them grow.",
      "India is in the early stage of a long-term growth story.",
      "Bet on the jockey, not just the horse.",
      "Patience is the most important quality of an investor.",
    ],
    keyLessons: [
      "India's long-term growth story has paid off over decades — sit through the volatility.",
      "Conviction positions held for decades produce outsized returns vs frequent trading.",
      "Use early-career capital growth (and risk tolerance) for compounding base.",
      "Public commitment to views can be expensive (he could be very wrong publicly too).",
    ],
    notable: [
      "Started with ₹5,000 in 1985; net worth ~₹40,000 crore at death in Aug 2022.",
      "Active investor for 37 years; multiple severe bear markets survived.",
      "Akasa Air launched 2 weeks before his death.",
      "Influential public voice on Indian markets through TV and interviews.",
    ],
  },
  {
    slug: "radhakishan-damani",
    name: "Radhakishan Damani",
    nationality: "Indian",
    yearsActive: "1980s – present",
    tagline: "Quiet billionaire behind DMart; classic value investor.",
    philosophy:
      "Buy quality businesses at reasonable prices. Operations matter as much as analysis. Be invisible.",
    body: [
      {
        kind: "p",
        text: "Radhakishan Damani is the founder of DMart (Avenue Supermarts), India's largest organized retailer by market cap and one of the most successful retail business stories of modern India. Damani is also one of India's earliest professional equity investors, but unlike Jhunjhunwala, he's famously private and rarely gives interviews.",
      },
      {
        kind: "p",
        text: "Damani's wealth (~₹1 lakh crore+) came primarily from two sources: equity investing in the 1990s-2000s, and building DMart from a single store in 2002 to ~350+ stores by 2024. DMart's IPO in 2017 was one of the most successful in Indian history — it listed at ₹641 vs an issue price of ₹299 (114% premium).",
      },
      {
        kind: "h2",
        text: "Style",
      },
      {
        kind: "list",
        items: [
          "Highly concentrated; few names, high conviction",
          "Long holding periods (decades)",
          "Strong preference for retail/consumer businesses with consumer mindshare",
          "Hands-on with DMart operations — visits stores personally",
          "Almost no public commentary — rare interviews",
        ],
      },
      {
        kind: "h2",
        text: "DMart business model",
      },
      {
        kind: "list",
        items: [
          "EDLP — Everyday Low Pricing (no discount-driven traffic, consistent low prices)",
          "Owned (not leased) stores in most cases",
          "Carefully selected locations (high-density Tier 1/2 cities)",
          "Lean operations; ~3.5% EBITDA margin (very low for retail) but high asset turnover",
          "Pioneered Indian organized grocery retail at scale",
        ],
      },
    ],
    famousQuotes: [
      "I prefer companies that generate cash.",
      "Investing requires patience and the ability to stay invested through cycles.",
    ],
    keyLessons: [
      "Operational excellence is often more durable than purely financial alpha.",
      "Concentrated portfolios + long holding periods can produce extraordinary results.",
      "Being out of the limelight has its advantages — no pressure to defend public positions.",
      "Retail is a hard business but can be one of the largest wealth creators when done right.",
    ],
    notable: [
      "Net worth ~₹1 lakh crore+ as of 2024 (top 5 wealthiest Indians).",
      "DMart founder/major shareholder; one of India's largest retail success stories.",
      "Recognized for low public profile despite enormous wealth.",
    ],
  },
  {
    slug: "saurabh-mukherjea",
    name: "Saurabh Mukherjea",
    nationality: "Indian",
    yearsActive: "2000s – present",
    tagline: "Articulate exponent of 'Coffee Can' quality investing in India.",
    philosophy:
      "Buy and hold high-quality Indian companies (>15% ROE, >10% revenue growth, low debt) for decades. Concentrated portfolios outperform.",
    body: [
      {
        kind: "p",
        text: "Saurabh Mukherjea is the founder of Marcellus Investment Managers (Indian PMS firm) and one of India's most articulate exponents of quality-focused, concentrated equity investing. His books 'The Unusual Billionaires', 'Coffee Can Investing', and 'Diamonds in the Dust' have shaped Indian retail thinking about quality.",
      },
      {
        kind: "p",
        text: "The 'Coffee Can Investing' framework: buy ~15-20 of India's best-quality companies (based on long-run ROE, growth, debt criteria) and hold for 10+ years. The approach has historically beaten Nifty over rolling 10-year windows.",
      },
      {
        kind: "h2",
        text: "Quality filters",
      },
      {
        kind: "list",
        items: [
          "ROE consistently above 15% (10 consecutive years)",
          "Revenue growth consistently above 10% (10 consecutive years)",
          "Debt-to-equity below 1",
          "Sustainable competitive advantages",
          "Trustworthy management with skin in the game",
        ],
      },
      {
        kind: "p",
        text: "Companies meeting these filters in India have historically included: HDFC Bank, Asian Paints, Pidilite, Page Industries, Berger Paints, Marico, Nestle India, Hindustan Unilever, Astral Pipes, Bajaj Finance (until 2018), Britannia, and similar businesses. These are the 'compounders' that produced multi-decade outperformance.",
      },
    ],
    famousQuotes: [
      "Concentration is the friend of compounding.",
      "Most Indian retail underperforms their own SIPs by chasing the latest trends.",
      "Time is the most important variable in investing.",
    ],
    keyLessons: [
      "Quality criteria, mechanically applied, can beat most active strategies.",
      "Concentrated portfolios (15-20 stocks) often outperform diversified ones.",
      "Buy and hold doesn't mean buy and forget — monitor quality criteria annually.",
      "Indian quality businesses have unique advantages (large domestic market, brand longevity).",
    ],
    notable: [
      "Founder of Marcellus Investment Managers (Indian PMS firm).",
      "Author of multiple books on Indian quality investing.",
      "Strong public voice on Indian retail behavior and quality investing.",
    ],
  },
  {
    slug: "howard-marks",
    name: "Howard Marks",
    nationality: "American",
    yearsActive: "1970s – present",
    tagline: "Co-founder of Oaktree Capital; the master of contrarian distressed investing.",
    philosophy:
      "Cycles matter. Sentiment matters. Buying at the bottom of pessimism cycles is where returns come from.",
    body: [
      {
        kind: "p",
        text: "Howard Marks is the co-founder of Oaktree Capital Management, a $170B+ alternatives investment firm specializing in distressed debt, real estate, and other contrarian strategies. His client memos (since 1990) are read by every serious global investor, including Warren Buffett.",
      },
      {
        kind: "p",
        text: "Marks's thinking is dominated by cycles — economic, credit, sentiment. He doesn't predict cycles, but he tries to understand where in the cycle markets are and position accordingly. His 2018 book 'Mastering the Market Cycle' is the modern Bible on cycle awareness.",
      },
      {
        kind: "h2",
        text: "Core ideas",
      },
      {
        kind: "list",
        items: [
          "**Cycles are inevitable** — economy, credit, psychology, market all cycle",
          "**Where are we?** — never predict, but always position based on where in the cycle we are",
          "**Second-level thinking** — most people think 'this is a good company'; second-level thinks 'everyone knows that, what's the price?'",
          "**Risk is not volatility** — risk is permanent loss of capital",
          "**Buying at the bottom of pessimism** — when investors hate an asset class, that's often the best time to allocate",
        ],
      },
      {
        kind: "h2",
        text: "Famous memos",
      },
      {
        kind: "list",
        items: [
          "**'The Limits to Negativism' (Oct 2008)** — argued the GFC was a buying opportunity. Massively prescient.",
          "**'I Beg to Differ' (multiple)** — contrarian positioning",
          "**'The Most Important Thing' (book)** — 21 essential principles",
          "**'Mastering the Market Cycle' (book)** — Marks's lifetime cycle framework",
        ],
      },
    ],
    famousQuotes: [
      "The most important thing is being attentive to cycles.",
      "You can't predict; you can prepare.",
      "Risk is not volatility — risk is permanent loss of capital.",
      "If everyone thinks something will go up, it's probably already gone up.",
      "Successful investing requires thoughtful attention to many separate aspects, all at the same time.",
    ],
    keyLessons: [
      "Sentiment cycles drive 50%+ of asset class returns.",
      "Second-level thinking: think one step beyond the obvious.",
      "Distressed buying — when investors hate an asset — often outperforms.",
      "Don't try to predict cycles; just be aware of where you are.",
    ],
    notable: [
      "Co-founder of Oaktree Capital ($170B+ AUM).",
      "His client memos (since 1990) are essential reading for global investors.",
      "Author of 'The Most Important Thing' (2011) and 'Mastering the Market Cycle' (2018).",
    ],
  },
];

export function getInvestor(slug: string): InvestorProfile | undefined {
  return INVESTORS.find((i) => i.slug === slug);
}
