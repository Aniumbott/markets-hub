/**
 * Lightweight SM-2-style spaced repetition.
 * One card = one glossary term.
 */
import { addDays, ymd } from "./date";

export interface CardState {
  slug: string;
  ease: number;        // multiplier, default 2.5
  interval: number;    // days until next review
  reps: number;        // successful reps in a row
  dueDate: string;     // YYYY-MM-DD
  lastReviewed?: string;
  history: { date: string; quality: Quality }[];
}

/** 0 = total blackout, 1 = struggled, 2 = correct with effort, 3 = easy */
export type Quality = 0 | 1 | 2 | 3;

export function newCard(slug: string): CardState {
  return {
    slug,
    ease: 2.5,
    interval: 0,
    reps: 0,
    dueDate: ymd(),
    history: [],
  };
}

export function reviewCard(card: CardState, quality: Quality): CardState {
  const today = ymd();
  const failed = quality < 2;

  let { ease, interval, reps } = card;

  if (failed) {
    reps = 0;
    interval = 1;
  } else {
    reps += 1;
    if (reps === 1) interval = 1;
    else if (reps === 2) interval = 3;
    else interval = Math.round(interval * ease);
  }

  // SM-2 ease adjustment
  ease = Math.max(
    1.3,
    ease + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02))
  );

  return {
    ...card,
    ease,
    interval,
    reps,
    dueDate: addDays(today, Math.max(interval, 1)),
    lastReviewed: today,
    history: [...card.history, { date: today, quality }],
  };
}

export function isDue(card: CardState, on: string = ymd()): boolean {
  return card.dueDate <= on;
}

export function pickDueCards(cards: CardState[], limit = 20, on: string = ymd()): CardState[] {
  return cards
    .filter((c) => isDue(c, on))
    .sort((a, b) => {
      if (a.dueDate !== b.dueDate) return a.dueDate.localeCompare(b.dueDate);
      return a.reps - b.reps; // newer cards first
    })
    .slice(0, limit);
}
