// -----------------------------------------------------------------------
// Curriculum content types
// -----------------------------------------------------------------------

/**
 * A single block within a lesson. Text fields support a tiny inline syntax:
 *  - **bold**
 *  - *italic*
 *  - {{term-slug|display text}}  → renders a clickable glossary term
 *  - `code`
 *  - [link text](https://example.com)
 */
export type DiagramKind =
  | "bid-ask"
  | "order-book"
  | "yield-curve"
  | "four-quadrants"
  | "compound-growth"
  | "sector-donut"
  | "correlation-matrix"
  | "cascade-flow"
  | "cpi-basket"
  | "risk-return-scatter"
  | "asset-class-returns"
  | "nifty-history"
  | "rate-cut-impact";

export type LessonBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "analogy"; title?: string; text: string }
  | { kind: "callout"; tone: "info" | "warn" | "tip" | "money"; title?: string; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "keyTakeaways"; items: string[] }
  | { kind: "case"; caseSlug: string }
  | { kind: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { kind: "diagram"; diagram: DiagramKind; caption?: string; props?: Record<string, unknown> };

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;                  // e.g., "w01-l03"
  weekId: number;              // 1..16
  order: number;               // 1..N within the week
  title: string;
  summary: string;             // 1-line summary shown in lists
  minutes: number;             // estimated read time
  body: LessonBlock[];
  quiz: QuizQuestion[];
  references?: { label: string; href: string }[];
}

export type Phase = "foundations" | "markets" | "connections" | "practice";

export interface Week {
  id: number;                  // 1..16
  phase: Phase;
  title: string;
  blurb: string;               // 1-2 sentence pitch
  lessons: Lesson[];
}

export interface GlossaryTerm {
  slug: string;                // kebab-case unique id
  term: string;                // English
  termHi?: string;             // Hindi (optional)
  category: GlossaryCategory;
  short: string;               // 1-line plain-English definition
  long?: string;               // optional longer explainer
  related?: string[];          // slugs of related terms
  example?: string;            // optional Indian-context example
}

export type GlossaryCategory =
  | "foundations"
  | "rates-and-money"
  | "indian-equities"
  | "global-equities"
  | "forex"
  | "commodities"
  | "bonds"
  | "crypto"
  | "intermarket"
  | "risk"
  | "taxes-india";

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;                // human-readable, e.g., "July 2023"
  markets: string[];           // affected market tickers/labels
  oneLiner: string;
  timeline: { date: string; event: string }[];
  body: LessonBlock[];
  lessons: string[];           // bullets: what to learn from this
  related?: string[];          // other case slugs
}

export interface ScenarioStep {
  id: string;
  label: string;
  detail: string;
  tone: "up" | "down" | "neutral";
  marketHint?: string;         // e.g., "USD/INR", "Nifty IT", "Gold"
}

export interface SimulatorScenario {
  slug: string;
  title: string;
  trigger: string;
  premise: string;
  steps: ScenarioStep[][];     // arrays of parallel steps per round (cascade waves)
  takeaways: string[];
}

export type MarketSlug =
  | "indian-equities"
  | "global-equities"
  | "forex"
  | "crude-oil"
  | "gold-metals"
  | "bonds"
  | "crypto";

export interface Market {
  slug: MarketSlug;
  name: string;
  tagline: string;
  overview: LessonBlock[];
  keyTerms: string[];          // glossary slugs
  trackers: { label: string; href?: string; note?: string }[];
  indianContext: LessonBlock[];
  caseStudies: string[];       // case-study slugs
}

export interface ConceptMapNode {
  id: string;
  label: string;
  group: "market" | "indicator" | "policy" | "macro";
  description: string;
}

export interface ConceptMapEdge {
  source: string;
  target: string;
  label: string;
  polarity: "positive" | "negative" | "context";
}

// -----------------------------------------------------------------------
// Behavioral finance
// -----------------------------------------------------------------------

export interface BehavioralBias {
  slug: string;
  name: string;
  oneLiner: string;
  body: LessonBlock[];
  example: { setup: string; questions: { id: string; prompt: string; choices: string[] }[]; reveal: string };
  countermeasure: string;
}

// -----------------------------------------------------------------------
// Archetype quiz
// -----------------------------------------------------------------------

export type ArchetypeSlug = "conservative-compounder" | "balanced-builder" | "growth-seeker" | "tactical-trader";

export interface Archetype {
  slug: ArchetypeSlug;
  name: string;
  tagline: string;
  description: string;
  recommendedAllocation: { label: string; pct: number }[];
  strengths: string[];
  watchouts: string[];
}

export interface ArchetypeQuestion {
  id: string;
  prompt: string;
  options: {
    label: string;
    scores: Partial<Record<ArchetypeSlug, number>>;
  }[];
}

// -----------------------------------------------------------------------
// Investor profiles
// -----------------------------------------------------------------------

export interface InvestorProfile {
  slug: string;
  name: string;
  nationality: string;
  yearsActive: string;
  tagline: string;
  philosophy: string;
  body: LessonBlock[];
  famousQuotes: string[];
  keyLessons: string[];
  notable: string[]; // notable wins / losses / decisions
}

// -----------------------------------------------------------------------
// Scams
// -----------------------------------------------------------------------

export interface Scam {
  slug: string;
  name: string;
  oneLiner: string;
  howItWorks: string;
  redFlags: string[];
  realIndianExamples: { name: string; year: string; description: string }[];
  howToProtect: string[];
}

// -----------------------------------------------------------------------
// Decision flowcharts
// -----------------------------------------------------------------------

export interface FlowchartNode {
  id: string;
  question?: string;
  answer?: string;
  yes?: string; // next node id
  no?: string;
  note?: string;
}

export interface Decision {
  slug: string;
  title: string;
  description: string;
  rootNodeId: string;
  nodes: FlowchartNode[];
  takeaways: string[];
}

// -----------------------------------------------------------------------
// Badges
// -----------------------------------------------------------------------

export type BadgeSlug =
  | "first-lesson"
  | "first-week"
  | "first-phase"
  | "all-foundations"
  | "all-markets"
  | "all-connections"
  | "graduation"
  | "streak-7"
  | "streak-30"
  | "streak-100"
  | "flashcards-100"
  | "quiz-master"
  | "archetype-found"
  | "scenarios-all"
  | "case-explorer"
  | "habit-month";

export interface Badge {
  slug: BadgeSlug;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  threshold?: number;
}
