# Markets Hub

A complete self-contained learning platform for Indian and global markets — conversational curriculum, interactive diagrams, calculators, simulators, behavioral finance, decision flowcharts, archetype quiz, and more.

Built as a single-user local app — all state lives in your browser's `localStorage`.

## Run it

```bash
npm install   # first time only
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The first time you load, you'll land on the Dashboard.

## Production build

```bash
npm run build && npm start
```

## What's inside

### Curriculum (97 lessons, 4 phases, 16 weeks)
- **Phase 1 — Foundations (Weeks 1-3)** — Markets, money, indicators
- **Phase 2 — Seven Markets (Weeks 4-10)** — Indian equity, global equity, forex, oil, gold, bonds, crypto
- **Phase 3 — Connections (Weeks 11-13)** — Intermarket analysis, macro regimes, liquidity
- **Phase 4 — Practice (Weeks 14-16)** — Event-driven, case studies, build your routine

### Interactive diagrams (13 custom SVG components)
- Bid-ask spread visualization
- Order book depth
- Yield curve shapes (interactive toggle)
- Four-quadrants framework (clickable)
- Compound growth (live slider)
- Sector composition donuts (Nifty + S&P)
- Cross-asset correlation matrix
- Macro cascade flow
- CPI basket comparison (India vs US)
- Risk-return scatter
- Asset class returns bar
- 25-year Nifty history
- Rate cut sector impact

### Interactive calculators (8)
- SIP corpus with step-up
- Home loan EMI
- Compound growth (Rule of 72)
- Real return (post-tax post-inflation)
- Capital gains tax (post-Budget 2024)
- F&O cost realism check
- Prepay home loan vs invest in equity
- Allocation visualizer (with presets)

### Behavioral finance module
- 6 cognitive biases with interactive scenarios — loss aversion, confirmation bias, recency bias, anchoring, herding, sunk cost
- Self-test setups + reveal analysis
- Countermeasures for each bias

### Decision flowcharts (4)
- Should I buy this stock?
- Should I prepay home loan or invest?
- Should I sell this position?
- How much equity should I have?

### Personalization
- 10-question investor archetype quiz
- 4 archetypes with tailored allocation recommendations
- 15 unlockable achievement badges
- Paper portfolio with drift tracking

### Reference content
- 6 famous investor profiles (Buffett, Munger, Jhunjhunwala, Damani, Mukherjea, Marks)
- 8 scam categories with real Indian examples (Ponzi, pump & dump, fake exchanges, etc.)
- 9 case studies fully written
- 7 markets library entries
- 12 monthly macro events reference
- 130+ glossary terms, bilingual where relevant

### Other tools
- Market cascade simulator (8 scenarios with animated waves)
- Concept map (interactive React Flow node graph)
- Flashcards (SM-2 spaced repetition)
- Daily habits tracker (7-day grid)
- Quiz progress with weak-area detection
- Settings (bilingual toggle, JSON export/import, reset)

## Project size

- ~29,100 lines of TypeScript / CSS
- 142 static pages prerendered on production build
- Zero TypeScript errors, zero build warnings
- 13 custom SVG diagrams
- 8 calculators with sliders

## Routes

```
/dashboard              Main hub with streak, progress, today's lesson
/curriculum             16-week structured curriculum
/lesson/[id]            Individual lesson reader

/tools                  8 interactive calculators
/archetype              Investor archetype quiz
/portfolio              Paper portfolio builder
/decisions              Decision flowcharts

/behavioral             Behavioral finance module
/behavioral/[slug]      Individual bias deep-dive

/simulator              Cause-effect cascade simulator (8 scenarios)
/concept-map            Interactive intermarket graph
/markets, /markets/[slug]   Markets library
/case-studies, /case-studies/[slug]   9 detailed case studies
/investors, /investors/[slug]   6 famous investor profiles
/scams, /scams/[slug]   8 scam categories
/glossary               130+ bilingual terms, searchable
/flashcards             SM-2 spaced repetition
/quizzes                Quiz overview & weak-area tracker
/habits                 Daily habits tracker
/calendar               Monthly macro events reference
/achievements           15 unlockable badges
/settings               Preferences, export/import
```

## Where to add content

| File | What |
|---|---|
| `content/curriculum.ts` | Orchestrates 16 weeks; imports per-week files |
| `content/weeks/week-NN.ts` | Per-week lesson content |
| `content/glossary.ts` | Glossary terms |
| `content/case-studies.ts` | Case studies |
| `content/scenarios.ts` | Simulator scenarios |
| `content/markets.ts` | Markets library |
| `content/concept-map.ts` | Concept graph |
| `content/calendar.ts` | Macro events |
| `content/behavioral.ts` | Behavioral biases |
| `content/archetype.ts` | Quiz + archetypes |
| `content/investors.ts` | Investor profiles |
| `content/scams.ts` | Scam categories |
| `content/decisions.ts` | Decision flowcharts |
| `content/badges.ts` | Badge definitions |
| `content/types.ts` | Shared types |

## Inline lesson syntax

```
**bold**
*italic*
`code`
{{glossary-slug|display text}}
[link label](https://example.com)
```

And the structural block types include: `p`, `h2`, `h3`, `analogy`, `callout`, `list`, `quote`, `keyTakeaways`, `table`, `diagram`.

To embed a diagram, use:
```typescript
{ kind: "diagram", diagram: "yield-curve", caption: "..." }
```

Available diagrams: bid-ask, order-book, yield-curve, four-quadrants, compound-growth, sector-donut, correlation-matrix, cascade-flow, cpi-basket, risk-return-scatter, asset-class-returns, nifty-history, rate-cut-impact.

## Tech

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 — design tokens in `app/globals.css`
- Zustand for state with localStorage persistence
- React Flow for the concept map
- Framer Motion for simulator animations
- Lucide React for icons (no emoji used as icons)
- next-themes for dark mode

## Backup

Use **Settings → Export progress** to download a JSON of everything (streak, lesson completion, journal entries, quiz scores, flashcard schedule, habits, badges, archetype result, paper portfolio). Restore via the same panel.
