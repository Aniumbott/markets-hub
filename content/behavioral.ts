import type { BehavioralBias } from "./types";

export const BIASES: BehavioralBias[] = [
  {
    slug: "loss-aversion",
    name: "Loss aversion",
    oneLiner: "Losses hurt about twice as much as equivalent gains feel good. This asymmetry drives most retail mistakes.",
    body: [
      {
        kind: "p",
        text: "Imagine someone offers you a coin flip: heads you win ₹100, tails you lose ₹100. Most people refuse. The math is fair (expected value zero), but the *feeling* isn't. Losing ₹100 hurts more than winning ₹100 feels good.",
      },
      {
        kind: "p",
        text: "This was first formalised by Daniel Kahneman and Amos Tversky in the 1970s — work that won the Nobel Prize in 2002. Their research showed that losses feel roughly 2x as intense as equivalent gains. The implication for investing is enormous.",
      },
      {
        kind: "h2",
        text: "How it shows up in your portfolio",
      },
      {
        kind: "list",
        items: [
          "**Holding losers too long** — you can't bring yourself to sell a stock at -20% because 'realizing the loss' feels worse than the unrealized loss",
          "**Selling winners too early** — you lock in a 15% gain quickly because you can't bear the thought of giving it back",
          "**Avoiding equity entirely** — short-term volatility feels too painful, so you stick to FDs and miss long-run compounding",
          "**Stopping SIPs during corrections** — every monthly statement showing red triggers the urge to stop the bleeding",
          "**Over-checking the portfolio** — repeatedly seeing red amplifies the felt loss far beyond the actual one",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "The Indian retail blow-up pattern",
        text: "Loss aversion is THE reason most retail investors underperform the index they invested in. They buy in euphoria (after big rallies), sell in fear (during corrections), and miss the compounding window. The cure isn't smarter analysis — it's behavioral pre-commitment.",
      },
    ],
    example: {
      setup: "You bought 100 shares of Stock A at ₹500 each. The stock is now at ₹400 (you're down ₹10,000). Stock B, which you also wanted, is now trading at attractive levels — but to buy it, you'd need to sell Stock A. What do you do?",
      questions: [
        {
          id: "q1",
          prompt: "Honest answer: what's the most likely action?",
          choices: [
            "Sell Stock A and book the loss, redeploy into Stock B",
            "Wait for Stock A to 'come back to my cost' before selling",
            "Add more to Stock A to 'average down'",
            "Sell other (profitable) stocks to fund Stock B; keep Stock A",
          ],
        },
      ],
      reveal: "Most retail does option 2 or 3 — both classic loss aversion. Option 2 anchors your future to a past price (cost is a sunk fact, irrelevant for forward decisions). Option 3 doubles down on a thesis that may already be broken. Option 1 is mathematically correct in nearly every case — but emotionally painful. Option 4 is also OK if Stock A's thesis remains intact.",
    },
    countermeasure: "Pre-commit to objective sell criteria: write down (before buying) the price levels or events that would trigger sale. Selling at a loss because the thesis broke is a feature, not a failure.",
  },
  {
    slug: "confirmation-bias",
    name: "Confirmation bias",
    oneLiner: "We seek out information that supports what we already believe and dismiss what contradicts it.",
    body: [
      {
        kind: "p",
        text: "Once you've decided 'Adani is going to ₹10,000' or 'Nifty will crash in 2025', you instinctively notice news that supports the thesis and dismiss news that contradicts it. This is confirmation bias. It's universal and largely unconscious.",
      },
      {
        kind: "p",
        text: "In investing, confirmation bias is the gateway to massive single-stock losses. The investor who held Yes Bank from ₹400 to ₹15, or Vodafone Idea from ₹200 to ₹3, was usually reading only positive news and ignoring red flags — flags that critics had been raising for years.",
      },
      {
        kind: "h2",
        text: "How it shows up",
      },
      {
        kind: "list",
        items: [
          "Following only bullish (or bearish) voices on Twitter for your favorite stocks",
          "Reading the company's investor presentation but skipping critical broker reports",
          "Dismissing short-seller research as 'manipulation' without evaluating the claims",
          "Treating disconfirming evidence as a 'temporary noise'",
          "Building elaborate justifications for losing positions ('the market doesn't understand')",
        ],
      },
      {
        kind: "h2",
        text: "Why it's especially dangerous in Indian markets",
      },
      {
        kind: "p",
        text: "Indian financial media is highly polarized. Most coverage is either uncritical promoter-friendly content or sensationalist short-term takes. The middle ground — sober critical analysis — is rare. Investors who consume only one side of the spectrum drift dangerously off course.",
      },
    ],
    example: {
      setup: "You've held Reliance for 3 years. It's been a great performer. Today, Hindenburg-style research firm publishes a critical report alleging governance issues at Reliance.",
      questions: [
        {
          id: "q1",
          prompt: "What's the bias-resistant approach?",
          choices: [
            "Ignore — short sellers are biased",
            "Read the entire 100-page report objectively, evaluate evidence on merit, check management's rebuttal separately",
            "Sell everything immediately",
            "Buy more — the report is fake",
          ],
        },
      ],
      reveal: "Option 2 is the bias-resistant approach. Short sellers ARE biased (they profit from declines), but their reports often surface real issues. Management responses are also biased. The investor's job is to evaluate evidence — both sides — and update probabilities accordingly. Often you'll conclude the position is still sound; sometimes you'll conclude it's not. Either outcome is honest.",
    },
    countermeasure: "Build a 'pre-mortem' habit: before buying, write down what would make you sell. Periodically read critical analysis of your holdings, not just bullish ones. Follow accounts you sometimes disagree with.",
  },
  {
    slug: "recency-bias",
    name: "Recency bias",
    oneLiner: "Recent events feel more important than they should be. The last 6 months get extrapolated forever.",
    body: [
      {
        kind: "p",
        text: "After a 30% rally in small caps, retail investors pour money into small caps. After a 20% crash, they flee. Recency bias means recent performance carries far more weight in decisions than older history or base-rate probabilities.",
      },
      {
        kind: "p",
        text: "The painful truth: chasing what just worked is a near-perfect way to underperform. By the time a theme is obvious in performance data, you're often near the peak. The next big move is usually in something that's been quiet.",
      },
      {
        kind: "h2",
        text: "Where it shows up",
      },
      {
        kind: "list",
        items: [
          "Switching mutual funds based on 1-year performance",
          "Buying yesterday's winners (sector rotations)",
          "Selling assets after extended drawdowns",
          "Believing 'this time is different' during euphoria",
          "Discounting tail risks because they 'haven't happened recently'",
        ],
      },
      {
        kind: "h2",
        text: "The 'reversion to mean' principle",
      },
      {
        kind: "p",
        text: "Asset classes and sectors that have outperformed dramatically tend to underperform over the next 3-5 years. The 2020-21 small cap explosion was followed by 2022 small cap underperformance. The 2021 IT rally was followed by 2022 IT underperformance. The 2022-24 PSU rally is likely to mean-revert. Discipline = buying what's out of favor, selling what's been overrun.",
      },
    ],
    example: {
      setup: "Mid-cap mutual funds returned 35% in the past year. Large-cap funds returned 12%. You're considering switching some allocation from large-cap to mid-cap.",
      questions: [
        {
          id: "q1",
          prompt: "What's the historical pattern that retail consistently gets wrong?",
          choices: [
            "Switching based on 1-year returns usually outperforms — momentum works",
            "1-year performance is the worst signal — switching based on it leads to chasing peaks and selling lows",
            "Mid-caps always outperform",
            "Random",
          ],
        },
      ],
      reveal: "Option 2. After mid-caps outperform large-caps by 23 percentage points, mid-caps are usually 'expensive' in valuation terms. Buying in is closer to peak. SEBI data on investor behavior shows retail mutual fund flows have a brutal pattern: chase 1-year winners, flee 1-year losers, lock in worst-of-both behavior.",
    },
    countermeasure: "Decide your strategic allocation once a year. Don't change based on 1-year performance. Rebalance to target weights mechanically (sell what ran, buy what lagged).",
  },
  {
    slug: "anchoring",
    name: "Anchoring",
    oneLiner: "We over-rely on the first piece of information ('the anchor') even when better data is available.",
    body: [
      {
        kind: "p",
        text: "You bought a stock at ₹500. It's now ₹350. You won't sell until 'it comes back to ₹500'. But ₹500 is just where you happened to buy — it has no fundamental significance. The right question is: at ₹350 today, is this stock a good investment? The anchor (₹500) clouds clear thinking.",
      },
      {
        kind: "p",
        text: "Anchoring is everywhere. The first valuation estimate, the first price target, the IPO price, the 52-week high — all become anchors. We then evaluate other prices relative to the anchor instead of evaluating them on their merits.",
      },
      {
        kind: "h2",
        text: "How it shows up",
      },
      {
        kind: "list",
        items: [
          "Refusing to sell until 'breakeven' (anchoring on cost)",
          "Refusing to buy 'because it ran' (anchoring on lower past prices)",
          "Using IPO price as a reference for future valuation",
          "Believing analyst target prices despite weak underlying analysis",
          "Comparing current Indian P/E to historical P/E without context (rates and growth have changed)",
        ],
      },
    ],
    example: {
      setup: "You bought a stock at ₹2,000. It went to ₹2,500, then crashed to ₹1,400. You're tempted to wait until it 'comes back to ₹2,000'.",
      questions: [
        {
          id: "q1",
          prompt: "What's the right framework?",
          choices: [
            "Wait — eventually it'll come back",
            "Reset thinking: 'If I had ₹1.4 lakh in cash today, would I buy this stock at ₹1,400?' If yes, hold. If no, sell.",
            "Set a stop-loss at ₹1,300",
            "Average down by buying more",
          ],
        },
      ],
      reveal: "Option 2 — the 'cash decision' framework. Your past purchase price (₹2,000) is a sunk fact. The forward question is: 'Is this stock attractive at ₹1,400 today?' If you wouldn't buy it today at ₹1,400, you shouldn't hold it either (you're effectively re-buying it every day you don't sell). Anchoring on the entry price keeps you stuck.",
    },
    countermeasure: "Use the 'cash decision' framework: if your stock holding was magically converted to its current cash value, would you buy it back at the current price? If no, the holding is anchoring you.",
  },
  {
    slug: "herding",
    name: "Herding (FOMO)",
    oneLiner: "We feel safer in groups. The discomfort of being a contrarian is real and physical.",
    body: [
      {
        kind: "p",
        text: "When everyone is buying X, NOT buying X feels socially risky. If X keeps going up and you're not in, you feel left out. If X crashes and you're not in, no one notices. The asymmetry makes herding feel rational individually, even when it's collectively destructive.",
      },
      {
        kind: "p",
        text: "Herding is the engine of bubbles. The 2021 crypto mania, the 2017 small-cap mania, the 2007 real estate mania — each had real underlying themes but reached prices that only made sense if you assumed others would keep buying. When the herd turned, prices collapsed back to fundamentals (often far below).",
      },
      {
        kind: "h2",
        text: "How it shows up",
      },
      {
        kind: "list",
        items: [
          "Buying meme stocks because everyone is talking about them",
          "FOMO-buying assets at peak hype",
          "Selling during panic just because everyone is selling",
          "Following 'hot' mutual fund SIPs because everyone else is",
          "Believing 'this time is different' during euphoria",
          "Capitulating during prolonged bear markets",
        ],
      },
      {
        kind: "h2",
        text: "Why contrarian thinking is so hard",
      },
      {
        kind: "p",
        text: "It's not just emotional discomfort — it's actual physiological discomfort. Studies show standing apart from a crowd triggers the same brain regions as physical pain. The discomfort of contrarianism is real. Wealthy investors are paid to tolerate this discomfort.",
      },
    ],
    example: {
      setup: "Everyone you know is talking about a specific 'next 10x crypto'. It's been in the news. Your friends are buying. The price has tripled in 3 months.",
      questions: [
        {
          id: "q1",
          prompt: "What's the empirical right move?",
          choices: [
            "Buy heavily — momentum is real",
            "Buy a small amount to avoid FOMO and learn",
            "Don't buy — peak hype usually precedes mean reversion. Investing should not be social-driven.",
            "Buy and short the major crypto as hedge",
          ],
        },
      ],
      reveal: "Option 3 (or option 2 with very small allocation). When everyone is buying, prices have already incorporated their expectations. Forward returns from peak hype are historically dismal. The 2021 crypto cycle saw retail buy at $50k-$60k Bitcoin and capitulate at $16k. The crypto cycle is the same story every 4 years — and yet retail does it.",
    },
    countermeasure: "Be suspicious when a thesis is universally agreed. Look for 'pre-FOMO' positions — sectors and assets people are NOT talking about. Build positions when interest is low, take profits when interest is highest.",
  },
  {
    slug: "sunk-cost",
    name: "Sunk cost fallacy",
    oneLiner: "We make forward decisions based on past investments, even when those past investments are irrelevant to the future.",
    body: [
      {
        kind: "p",
        text: "You've already spent ₹500 on a stock. It crashed to ₹200. Selling 'realizes the loss' — feels wasteful, like you're throwing the ₹500 away. So you hold. But the ₹500 is already spent. The relevant question is: at ₹200 today, going forward, is this a good investment?",
      },
      {
        kind: "p",
        text: "Sunk cost fallacy is everywhere. The job you stay in too long because of seniority earned. The relationship you stay in because 'we've been together so long'. The flat you bought five years ago at peak prices that's now flat. Past costs are emotionally significant but financially irrelevant.",
      },
      {
        kind: "h2",
        text: "How it shows up in investing",
      },
      {
        kind: "list",
        items: [
          "Holding losers because 'I've already lost so much'",
          "Riding underperforming mutual funds for years because 'I've invested for so long'",
          "Refusing to switch from old MF AMCs to new better-performing ones",
          "Holding stocks you know are broken because 'I need to make it back'",
          "Spending more on losing F&O trades to 'recover'",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "The 'good money after bad' trap",
        text: "Adding to a losing position to 'average down' is sometimes correct (if the thesis is intact) and often wrong (if the thesis is broken). The sunk cost fallacy makes 'wrong' feel like 'right'. Always re-evaluate the position fresh, ignoring your entry price.",
      },
    ],
    example: {
      setup: "You bought a stock 2 years ago. You've sunk ₹2 lakh into it via averaging-down purchases. The stock has continued to fall — now down 35% in total. Today, you're considering whether to add ₹50,000 more.",
      questions: [
        {
          id: "q1",
          prompt: "What's the question to ask?",
          choices: [
            "Have I already invested so much I can't back out?",
            "If I had ₹50,000 in cash today and zero existing position, would I buy this stock?",
            "Will averaging down recover my losses faster?",
            "How long until the original investment breaks even?",
          ],
        },
      ],
      reveal: "Option 2 — the 'fresh decision' question. Past investment is sunk. Each new purchase is a forward decision. If you wouldn't buy it fresh at ₹50,000, you shouldn't add to it via 'averaging down'. The fact that you've already lost is irrelevant to the forward decision.",
    },
    countermeasure: "Before any additional purchase, ask: 'If I had no existing position, would I buy this today at the current price?' If no, the additional purchase is sunk cost fallacy. If yes, it's a fresh decision.",
  },
];

export function getBias(slug: string): BehavioralBias | undefined {
  return BIASES.find((b) => b.slug === slug);
}
