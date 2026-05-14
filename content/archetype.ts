import type { Archetype, ArchetypeQuestion, ArchetypeSlug } from "./types";

export const ARCHETYPES: Record<ArchetypeSlug, Archetype> = {
  "conservative-compounder": {
    slug: "conservative-compounder",
    name: "Conservative compounder",
    tagline: "Slow, steady, sleep-at-night.",
    description:
      "You prioritize capital preservation. You're willing to accept lower returns in exchange for lower volatility. You want to sleep at night without checking the portfolio. This archetype builds wealth slowly but durably over decades.",
    recommendedAllocation: [
      { label: "Indian equity", pct: 35 },
      { label: "International equity", pct: 10 },
      { label: "Debt (G-Sec + short duration)", pct: 35 },
      { label: "Gold (SGB)", pct: 15 },
      { label: "Cash", pct: 5 },
    ],
    strengths: [
      "Won't panic-sell in crashes",
      "Strong emergency fund discipline",
      "Realistic expectations",
      "Long-term mindset",
    ],
    watchouts: [
      "May leave growth on the table (under-equity)",
      "FDs/debt could underperform inflation post-tax",
      "Risk: being too conservative when horizon is 20+ years",
    ],
  },
  "balanced-builder": {
    slug: "balanced-builder",
    name: "Balanced builder",
    tagline: "60/40 with intent.",
    description:
      "You want growth but with risk management. You're comfortable with moderate volatility for better long-run returns. You believe in diversification across asset classes. Most working professionals fit this archetype.",
    recommendedAllocation: [
      { label: "Indian equity (Large + Mid)", pct: 50 },
      { label: "International equity", pct: 15 },
      { label: "Debt", pct: 20 },
      { label: "Gold (SGB)", pct: 10 },
      { label: "Cash", pct: 5 },
    ],
    strengths: [
      "Rebalances mechanically",
      "Diversified across geographies + asset classes",
      "Resilient through cycles",
      "Realistic SIP discipline",
    ],
    watchouts: [
      "Can become too rigid; review every 2-3 years",
      "Don't confuse 'diversification' with 'overdiversification'",
      "Real estate often missing from this mix",
    ],
  },
  "growth-seeker": {
    slug: "growth-seeker",
    name: "Growth seeker",
    tagline: "Equity-heavy, long horizon.",
    description:
      "You have a long horizon (15+ years) and tolerance for drawdowns. You're focused on maximizing real returns. You're comfortable with periodic 20-30% drawdowns. You may have stronger conviction about specific themes or sectors.",
    recommendedAllocation: [
      { label: "Indian equity (Large + Mid + Small)", pct: 60 },
      { label: "International equity (US-heavy)", pct: 20 },
      { label: "Debt (mostly for liquidity)", pct: 12 },
      { label: "Gold", pct: 5 },
      { label: "Crypto / alternatives (optional)", pct: 3 },
    ],
    strengths: [
      "Long-term real return maximizer",
      "Tolerates drawdowns intellectually",
      "May allocate to mid/small caps for higher returns",
      "Aware of currency diversification",
    ],
    watchouts: [
      "Behavioral risk: overconfidence in bull markets",
      "Drawdowns in real money feel different than in spreadsheets",
      "Don't go above 80% equity without genuine 20+ year horizon",
    ],
  },
  "tactical-trader": {
    slug: "tactical-trader",
    name: "Tactical trader",
    tagline: "Active, opinionated, regime-aware.",
    description:
      "You enjoy active engagement with markets. You want to take regime-based tactical positions. You're willing to spend 30+ minutes daily on markets. This archetype can outperform with discipline — but most retail in this category underperforms due to costs and emotional decisions.",
    recommendedAllocation: [
      { label: "Core equity (passive)", pct: 40 },
      { label: "Tactical equity (sector/theme tilts)", pct: 20 },
      { label: "International equity", pct: 12 },
      { label: "Active debt (duration tactical)", pct: 12 },
      { label: "Gold + commodity tactical", pct: 8 },
      { label: "Cash (tactical buffer)", pct: 8 },
    ],
    strengths: [
      "Engaged with macro and intermarket",
      "Willing to act on conviction",
      "Active risk management",
      "Faster to identify regime shifts",
    ],
    watchouts: [
      "Highest cost drag of all archetypes",
      "Behavioral risks are highest (overconfidence, FOMO, recency)",
      "SEBI data: most retail active traders underperform passive over 10+ years",
      "Most who try this should be growth-seekers instead",
    ],
  },
};

export const ARCHETYPE_QUESTIONS: ArchetypeQuestion[] = [
  {
    id: "q1",
    prompt: "Your investment horizon is best described as:",
    options: [
      { label: "Under 5 years", scores: { "conservative-compounder": 3, "balanced-builder": 1 } },
      { label: "5-15 years", scores: { "balanced-builder": 3, "conservative-compounder": 1 } },
      { label: "15-25 years", scores: { "growth-seeker": 3, "balanced-builder": 2 } },
      { label: "25+ years", scores: { "growth-seeker": 3, "tactical-trader": 1 } },
    ],
  },
  {
    id: "q2",
    prompt: "If your portfolio drops 30% in 6 months, what's your most honest reaction?",
    options: [
      { label: "Panic — I'd seriously consider selling", scores: { "conservative-compounder": 3 } },
      { label: "Anxious but I'd hold", scores: { "balanced-builder": 3, "conservative-compounder": 1 } },
      { label: "Uncomfortable, but I'd continue SIPs", scores: { "growth-seeker": 3, "balanced-builder": 1 } },
      { label: "Excited — buying opportunity", scores: { "growth-seeker": 2, "tactical-trader": 3 } },
    ],
  },
  {
    id: "q3",
    prompt: "How much time can you realistically commit to investing decisions per week?",
    options: [
      { label: "<1 hour", scores: { "conservative-compounder": 3, "balanced-builder": 2 } },
      { label: "1-3 hours", scores: { "balanced-builder": 3, "growth-seeker": 2 } },
      { label: "3-10 hours", scores: { "growth-seeker": 3, "tactical-trader": 2 } },
      { label: "10+ hours", scores: { "tactical-trader": 3 } },
    ],
  },
  {
    id: "q4",
    prompt: "Which statement resonates most?",
    options: [
      { label: "I want to never lose money", scores: { "conservative-compounder": 3 } },
      { label: "I want diversification across asset classes", scores: { "balanced-builder": 3 } },
      { label: "I want to maximize long-term real returns", scores: { "growth-seeker": 3 } },
      { label: "I want to take active positions on macro themes", scores: { "tactical-trader": 3 } },
    ],
  },
  {
    id: "q5",
    prompt: "How do you feel about international (US/global) equity exposure?",
    options: [
      { label: "Complex — I'd avoid it", scores: { "conservative-compounder": 3 } },
      { label: "Helpful via Indian MFs (5-15%)", scores: { "balanced-builder": 3 } },
      { label: "Essential — 15-25% via direct route", scores: { "growth-seeker": 3, "tactical-trader": 2 } },
      { label: "I'd actively tilt to US tech in some cycles", scores: { "tactical-trader": 3 } },
    ],
  },
  {
    id: "q6",
    prompt: "Your current emergency fund situation:",
    options: [
      { label: "Don't have one yet", scores: { "conservative-compounder": 3 } },
      { label: "Building it (1-3 months)", scores: { "conservative-compounder": 2, "balanced-builder": 2 } },
      { label: "Comfortable (3-6 months)", scores: { "balanced-builder": 2, "growth-seeker": 2 } },
      { label: "Plenty (6+ months) + insurance", scores: { "growth-seeker": 3, "tactical-trader": 3 } },
    ],
  },
  {
    id: "q7",
    prompt: "Your view on F&O / derivatives:",
    options: [
      { label: "Never touch it", scores: { "conservative-compounder": 3, "balanced-builder": 2 } },
      { label: "Don't understand it well", scores: { "balanced-builder": 2 } },
      { label: "Used occasionally for hedging", scores: { "growth-seeker": 2, "tactical-trader": 2 } },
      { label: "Active F&O participation", scores: { "tactical-trader": 3 } },
    ],
  },
  {
    id: "q8",
    prompt: "Your reaction to a 30% sector rally over 6 months:",
    options: [
      { label: "Avoid — it ran too hard", scores: { "conservative-compounder": 2, "balanced-builder": 2 } },
      { label: "Stick to my SIP, no change", scores: { "balanced-builder": 3 } },
      { label: "Wait for correction, then add", scores: { "growth-seeker": 2 } },
      { label: "Investigate and consider tactical position", scores: { "tactical-trader": 3 } },
    ],
  },
  {
    id: "q9",
    prompt: "How comfortable are you with mid/small cap exposure?",
    options: [
      { label: "Avoid completely", scores: { "conservative-compounder": 3 } },
      { label: "Small allocation via index fund", scores: { "balanced-builder": 3 } },
      { label: "Meaningful (15-25% of equity)", scores: { "growth-seeker": 3, "tactical-trader": 2 } },
      { label: "Cycle-dependent — overweight at right times", scores: { "tactical-trader": 3 } },
    ],
  },
  {
    id: "q10",
    prompt: "How would you describe your knowledge level?",
    options: [
      { label: "Beginner — building basics", scores: { "conservative-compounder": 3, "balanced-builder": 2 } },
      { label: "Intermediate — understand core concepts", scores: { "balanced-builder": 3, "growth-seeker": 2 } },
      { label: "Advanced — read research, follow macro", scores: { "growth-seeker": 3, "tactical-trader": 2 } },
      { label: "Expert — institutional-level frameworks", scores: { "tactical-trader": 3 } },
    ],
  },
];
