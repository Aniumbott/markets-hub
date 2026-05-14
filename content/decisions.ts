import type { Decision } from "./types";

export const DECISIONS: Decision[] = [
  {
    slug: "should-i-buy-this-stock",
    title: "Should I buy this stock?",
    description:
      "Run this checklist before buying any individual stock. If you can't answer 'yes' to most of these, you're speculating, not investing.",
    rootNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Can you explain this business to a friend in 2 minutes?",
        yes: "moat",
        no: "no-understanding",
      },
      {
        id: "no-understanding",
        answer: "Don't buy — circle of competence",
        note: "Buffett rule. If you can't explain it, you can't evaluate it. Either learn more or pass.",
      },
      {
        id: "moat",
        question: "Does the company have a durable competitive advantage (brand, network, scale, regulatory)?",
        yes: "fundamentals",
        no: "no-moat",
      },
      {
        id: "no-moat",
        answer: "Be cautious — commodity-like businesses rarely compound",
        note: "Without a moat, profits get competed away. Some commodity businesses can still work, but require deeper analysis and active monitoring.",
      },
      {
        id: "fundamentals",
        question: "Are revenue, EBITDA, profit, and ROE trending in the right direction over 3-5 years?",
        yes: "valuation",
        no: "deteriorating",
      },
      {
        id: "deteriorating",
        answer: "Avoid or wait — deteriorating fundamentals + future growth claims is the classic value trap",
        note: "Many cheap-looking stocks are cheap for a reason. The numbers tell you what's actually happening.",
      },
      {
        id: "valuation",
        question: "Is the current valuation reasonable for the growth and quality? (Compare to sector and history)",
        yes: "position-size",
        no: "expensive",
      },
      {
        id: "expensive",
        answer: "Wait for better entry — or take a small starter position",
        note: "Even great businesses can be expensive. The HDFC Bank investor in 2007 had to wait 5 years just to break even. Buy quality at fair prices, not any price.",
      },
      {
        id: "position-size",
        question: "Is your intended position size <5% of total portfolio? (More for concentrated investors)",
        yes: "sell-criteria",
        no: "concentrated",
      },
      {
        id: "concentrated",
        answer: "Be sure you understand the concentration risk",
        note: "Concentrated portfolios can outperform but require deep conviction. Most retail should diversify across 15-25 names.",
      },
      {
        id: "sell-criteria",
        question: "Have you written down what would make you sell?",
        yes: "buy",
        no: "no-exit",
      },
      {
        id: "no-exit",
        answer: "Stop — define your exit criteria first",
        note: "Without pre-defined sell triggers, you'll hold losers and sell winners (loss aversion + recency). Write down: 'I'll sell if X, Y, Z happens.'",
      },
      {
        id: "buy",
        answer: "Proceed with the planned position size and your written sell criteria",
        note: "You've passed the major checks. Now: buy in tranches (3-4 entries spread over weeks), monitor quarterly, hold for at least 3 years.",
      },
    ],
    takeaways: [
      "Most retail skip the 'understand the business' step and jump to valuation.",
      "Without a moat and good fundamentals, low valuation isn't a bargain — it's a warning.",
      "Pre-defined sell criteria are essential for protecting against behavioral biases.",
      "Buy in tranches, not all at once. Reduces timing risk.",
    ],
  },
  {
    slug: "prepay-or-invest",
    title: "Should I prepay my home loan or invest in equity?",
    description:
      "If you have surplus cash flow, the math + behavior question of where to put it.",
    rootNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Do you have 6 months of expenses in emergency fund?",
        yes: "horizon",
        no: "build-emergency",
      },
      {
        id: "build-emergency",
        answer: "Build the emergency fund first",
        note: "Without an emergency fund, you're forced to liquidate equity (or take new loans) during stress. Emergency fund = 6 months of household expenses in liquid funds.",
      },
      {
        id: "horizon",
        question: "Is your investment horizon for the surplus 7+ years?",
        yes: "rate-spread",
        no: "shorter-horizon",
      },
      {
        id: "shorter-horizon",
        answer: "Prepay (or split: prepay 70%, debt MF 30%)",
        note: "Short horizons can't ride equity volatility. Loan rate (8.5%) > FD/debt MF post-tax (5-6%). Prepayment is mathematically better.",
      },
      {
        id: "rate-spread",
        question: "Is your loan rate at least 3 percentage points below your expected equity return?",
        yes: "behavior",
        no: "narrow-spread",
      },
      {
        id: "narrow-spread",
        answer: "Prefer prepayment — the spread is too narrow for risk",
        note: "If loan is 9.5% and equity expected return is 11%, the 1.5% spread isn't worth the equity volatility. Prepayment locks in a 'guaranteed' 9.5% return.",
      },
      {
        id: "behavior",
        question: "Will you actually invest the surplus monthly, or will it get spent on lifestyle creep?",
        yes: "invest",
        no: "force-prepay",
      },
      {
        id: "force-prepay",
        answer: "Prepay — the behavioral risk is real",
        note: "Most people who plan to 'invest the difference' don't. Prepayment is automatic discipline. Investing requires monthly action.",
      },
      {
        id: "invest",
        answer: "Invest in equity SIP — math favors equity at this spread + horizon",
        note: "With 3+ pp spread, 7+ year horizon, and behavioral discipline, equity wins by 30-60% over the loan tenure in most scenarios.",
      },
    ],
    takeaways: [
      "Emergency fund first — non-negotiable.",
      "Spread between loan rate and expected return matters more than absolute rate.",
      "Behavioral discipline is real — many 'planned investments' never happen.",
      "Hybrid (50/50 prepay/invest) is often the most-robust choice.",
    ],
  },
  {
    slug: "should-i-sell",
    title: "Should I sell this position?",
    description:
      "The hardest decision in investing. Most retail get it wrong both ways — selling winners too early, holding losers too long.",
    rootNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "Is the original investment thesis still intact?",
        yes: "valuation",
        no: "thesis-broken",
      },
      {
        id: "thesis-broken",
        answer: "Sell — thesis-broken positions don't 'come back'",
        note: "If the reason you bought no longer applies, hold = hope. Get out and redeploy capital where the thesis is intact.",
      },
      {
        id: "valuation",
        question: "Is the current valuation egregiously high (P/E 2x+ historical range)?",
        yes: "rebalance",
        no: "size",
      },
      {
        id: "rebalance",
        answer: "Consider trimming (sell 30-50%, hold the rest)",
        note: "Quality businesses can stay expensive for years. Selling all means missing further compounding. Selling some at extreme valuations + holding the rest is the disciplined middle.",
      },
      {
        id: "size",
        question: "Is the position size <8% of portfolio?",
        yes: "tax",
        no: "trim-size",
      },
      {
        id: "trim-size",
        answer: "Trim back to target weight (rebalance)",
        note: "Concentration risk grows as positions compound. Rebalancing forces 'sell high' behavior mechanically. Take some profit even if you love the business.",
      },
      {
        id: "tax",
        question: "Have you held for >1 year (LTCG eligibility)?",
        yes: "hold",
        no: "tax-consideration",
      },
      {
        id: "tax-consideration",
        answer: "Wait for LTCG if possible (tax saving meaningful)",
        note: "STCG 20% vs LTCG 12.5% above ₹1.25L exemption. If you're close to 1-year mark and not at risk of major decline, waiting is often worth it.",
      },
      {
        id: "hold",
        answer: "Hold — no compelling reason to sell",
        note: "Inaction is often the highest-return move. Quality businesses compound for decades. Most reasons to sell are emotional, not financial.",
      },
    ],
    takeaways: [
      "Thesis-broken = sell. Don't 'wait for breakeven'.",
      "Expensive but thesis intact = trim, don't sell all.",
      "Concentration creep is real — rebalance when positions get too large.",
      "Tax structure matters — LTCG vs STCG can be 7.5% of gains.",
    ],
  },
  {
    slug: "how-much-equity",
    title: "How much equity should I have?",
    description:
      "The single most important allocation decision. Drives 70%+ of long-run returns.",
    rootNodeId: "start",
    nodes: [
      {
        id: "start",
        question: "What's your investment horizon?",
        yes: "long-horizon",
        no: "check-horizon",
      },
      {
        id: "check-horizon",
        answer: "Answer the underlying question",
        note: "If horizon is <3 years, mostly debt (under 30% equity). 3-7 years: 40-60%. 7-15 years: 60-75%. 15+ years: 70-85%.",
      },
      {
        id: "long-horizon",
        question: "Have you confirmed horizon is 7+ years AND you have emergency fund?",
        yes: "tolerance",
        no: "shorten",
      },
      {
        id: "shorten",
        answer: "Drop equity allocation to 40-55%",
        note: "Without emergency fund or shorter horizon, you'll be forced to liquidate equity in stress. Avoid that by reducing equity first.",
      },
      {
        id: "tolerance",
        question: "Can you genuinely tolerate a 30-40% portfolio drawdown without panic-selling?",
        yes: "international",
        no: "reduce-equity",
      },
      {
        id: "reduce-equity",
        answer: "Cap equity at 55-65% (with quality bias)",
        note: "If you can't stomach drawdowns, large equity allocation is wrong. Find the level you'd actually hold through a crash. Underperformance is OK; panic-selling at lows is permanent loss.",
      },
      {
        id: "international",
        question: "Do you have 10-20% international exposure?",
        yes: "rebalance-routine",
        no: "add-intl",
      },
      {
        id: "add-intl",
        answer: "Add 10-20% international exposure",
        note: "Currency diversification + access to companies without Indian equivalents (Mag 7). Add via Indian-listed Nasdaq 100 or S&P 500 funds.",
      },
      {
        id: "rebalance-routine",
        question: "Do you rebalance annually?",
        yes: "good-to-go",
        no: "set-reminder",
      },
      {
        id: "set-reminder",
        answer: "Set up annual rebalancing — calendar reminder for Apr 1 every year",
        note: "Without rebalancing, your equity allocation drifts up in bulls and shrinks in bears. Rebalancing enforces 'sell high, buy low' mechanically.",
      },
      {
        id: "good-to-go",
        answer: "Your allocation is in good shape",
        note: "Maintain discipline through cycles. Reassess if life circumstances change (marriage, child, job change, retirement nearing).",
      },
    ],
    takeaways: [
      "Horizon and behavioral tolerance are equally important.",
      "Emergency fund is non-negotiable before high equity.",
      "International exposure adds real diversification.",
      "Annual rebalancing is the discipline that compounds.",
    ],
  },
];

export function getDecision(slug: string): Decision | undefined {
  return DECISIONS.find((d) => d.slug === slug);
}
