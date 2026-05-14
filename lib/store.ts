"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ymd, daysBetween } from "./date";
import { newCard, reviewCard, type CardState, type Quality } from "./srs";
import type { ArchetypeSlug, BadgeSlug } from "@/content/types";
import { WEEKS } from "@/content/curriculum";

export interface QuizResult {
  lessonId: string;
  score: number;     // 0..1
  correct: number;
  total: number;
  takenOn: string;
}

export interface HabitEntry {
  date: string;
  bidAsk: boolean;
  whyItMoved: boolean;
  whyItMovedNote?: string;
  newTerm: boolean;
  newTermNote?: string;
}

export interface JournalEntry {
  scope: string;     // lesson id, week id, or "free"
  text: string;
  updatedAt: string;
}

interface SettingsState {
  bilingualGlossary: boolean;
  lessonNavMode: "linear" | "free";
  fontScale: 1 | 1.05 | 1.1;
}

export interface PaperHolding {
  label: string;       // e.g., "Nifty 50 index fund", "Gold (SGB)"
  targetPct: number;   // 0-100
  actualAmount: number; // ₹
}

export interface PaperPortfolio {
  totalCapital: number;     // ₹ user has set aside
  holdings: PaperHolding[];
  lastUpdated: string;
  startedOn: string;
}

export interface ArchetypeResult {
  archetype: ArchetypeSlug;
  scores: Record<ArchetypeSlug, number>;
  takenOn: string;
}

interface MarketsState {
  // Progress
  completedLessons: Record<string, string>;     // lessonId -> dateCompleted
  lastLessonId?: string;                        // for "resume"
  quizResults: Record<string, QuizResult>;      // lessonId -> last result

  // Streak
  streak: number;
  lastStudyDate?: string;
  totalStudyDays: number;

  // Flashcards
  cards: Record<string, CardState>;             // slug -> card

  // Habits
  habits: Record<string, HabitEntry>;           // date -> entry

  // Journal
  journal: Record<string, JournalEntry>;        // scope -> entry

  // Settings
  settings: SettingsState;

  // New: archetype quiz
  archetypeResult?: ArchetypeResult;

  // New: behavioral quiz tracking
  behavioralCompleted: Record<string, string>;  // biasSlug -> dateCompleted

  // New: scenarios played
  scenariosPlayed: Record<string, string>;      // scenarioSlug -> dateCompleted

  // New: case studies read
  casesRead: Record<string, string>;            // caseSlug -> dateRead

  // New: badges
  badges: Record<string, string>;               // badgeSlug -> dateEarned

  // New: paper portfolio
  paperPortfolio?: PaperPortfolio;

  // Actions
  markLessonComplete: (lessonId: string) => void;
  unmarkLessonComplete: (lessonId: string) => void;
  setLastLesson: (lessonId: string) => void;
  recordQuiz: (lessonId: string, correct: number, total: number) => void;

  ensureCard: (slug: string) => void;
  ensureCards: (slugs: string[]) => void;
  reviewCard: (slug: string, q: Quality) => void;

  setHabit: (date: string, patch: Partial<HabitEntry>) => void;
  setJournal: (scope: string, text: string) => void;

  updateSettings: (patch: Partial<SettingsState>) => void;

  setArchetype: (result: ArchetypeResult) => void;
  markBehavioralComplete: (slug: string) => void;
  markScenarioPlayed: (slug: string) => void;
  markCaseRead: (slug: string) => void;

  awardBadge: (slug: BadgeSlug) => void;
  checkBadges: () => void;

  setPaperPortfolio: (portfolio: PaperPortfolio) => void;

  resetAll: () => void;
  export: () => string;
  import: (data: string) => boolean;
}

const initialSettings: SettingsState = {
  bilingualGlossary: true,
  lessonNavMode: "free",
  fontScale: 1,
};

function bumpStreak(state: MarketsState): { streak: number; totalStudyDays: number; lastStudyDate: string } {
  const today = ymd();
  if (state.lastStudyDate === today) {
    return { streak: state.streak, totalStudyDays: state.totalStudyDays, lastStudyDate: today };
  }
  const diff = state.lastStudyDate ? daysBetween(state.lastStudyDate, today) : null;
  const nextStreak = diff === 1 ? state.streak + 1 : 1;
  return {
    streak: nextStreak,
    totalStudyDays: state.totalStudyDays + 1,
    lastStudyDate: today,
  };
}

export const useStore = create<MarketsState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      quizResults: {},
      streak: 0,
      totalStudyDays: 0,
      cards: {},
      habits: {},
      journal: {},
      settings: initialSettings,
      behavioralCompleted: {},
      scenariosPlayed: {},
      casesRead: {},
      badges: {},

      markLessonComplete: (lessonId) => {
        const today = ymd();
        set((s) => ({
          completedLessons: { ...s.completedLessons, [lessonId]: today },
          lastLessonId: lessonId,
          ...bumpStreak(s),
        }));
        // Trigger badge check after completing
        setTimeout(() => get().checkBadges(), 0);
      },

      unmarkLessonComplete: (lessonId) => {
        set((s) => {
          const next = { ...s.completedLessons };
          delete next[lessonId];
          return { completedLessons: next };
        });
      },

      setLastLesson: (lessonId) => set({ lastLessonId: lessonId }),

      recordQuiz: (lessonId, correct, total) => {
        const score = total > 0 ? correct / total : 0;
        set((s) => ({
          quizResults: {
            ...s.quizResults,
            [lessonId]: {
              lessonId,
              score,
              correct,
              total,
              takenOn: ymd(),
            },
          },
        }));
      },

      ensureCard: (slug) => {
        set((s) => {
          if (s.cards[slug]) return {};
          return { cards: { ...s.cards, [slug]: newCard(slug) } };
        });
      },

      ensureCards: (slugs) => {
        set((s) => {
          const next = { ...s.cards };
          let changed = false;
          for (const slug of slugs) {
            if (!next[slug]) {
              next[slug] = newCard(slug);
              changed = true;
            }
          }
          return changed ? { cards: next } : {};
        });
      },

      reviewCard: (slug, q) => {
        set((s) => {
          const current = s.cards[slug] ?? newCard(slug);
          const updated = reviewCard(current, q);
          const next: Partial<MarketsState> = {
            cards: { ...s.cards, [slug]: updated },
          };
          // Card review counts as a study session
          const bumped = bumpStreak(s);
          return { ...next, ...bumped };
        });
      },

      setHabit: (date, patch) => {
        set((s) => {
          const current: HabitEntry =
            s.habits[date] ?? {
              date,
              bidAsk: false,
              whyItMoved: false,
              newTerm: false,
            };
          const updated = { ...current, ...patch };
          const anyChecked = updated.bidAsk || updated.whyItMoved || updated.newTerm;
          const next: Partial<MarketsState> = {
            habits: { ...s.habits, [date]: updated },
          };
          if (anyChecked && date === ymd()) {
            const bumped = bumpStreak(s);
            return { ...next, ...bumped };
          }
          return next;
        });
      },

      setJournal: (scope, text) => {
        set((s) => ({
          journal: {
            ...s.journal,
            [scope]: { scope, text, updatedAt: new Date().toISOString() },
          },
        }));
      },

      updateSettings: (patch) =>
        set((s) => ({ settings: { ...s.settings, ...patch } })),

      setArchetype: (result) => {
        set({ archetypeResult: result });
        setTimeout(() => get().checkBadges(), 0);
      },

      markBehavioralComplete: (slug) => {
        const today = ymd();
        set((s) => ({
          behavioralCompleted: { ...s.behavioralCompleted, [slug]: today },
          ...bumpStreak(s),
        }));
        setTimeout(() => get().checkBadges(), 0);
      },

      markScenarioPlayed: (slug) => {
        const today = ymd();
        set((s) => ({
          scenariosPlayed: { ...s.scenariosPlayed, [slug]: today },
        }));
        setTimeout(() => get().checkBadges(), 0);
      },

      markCaseRead: (slug) => {
        const today = ymd();
        set((s) => ({
          casesRead: { ...s.casesRead, [slug]: today },
        }));
        setTimeout(() => get().checkBadges(), 0);
      },

      awardBadge: (slug) => {
        set((s) => {
          if (s.badges[slug]) return {};
          return { badges: { ...s.badges, [slug]: ymd() } };
        });
      },

      checkBadges: () => {
        const s = get();
        const award = (slug: BadgeSlug) => {
          if (!s.badges[slug]) get().awardBadge(slug);
        };

        // Lesson-based badges
        const completedCount = Object.keys(s.completedLessons).length;
        if (completedCount >= 1) award("first-lesson");

        // Streak badges
        if (s.streak >= 7) award("streak-7");
        if (s.streak >= 30) award("streak-30");
        if (s.streak >= 100) award("streak-100");

        // Flashcards
        const cardReviews = Object.values(s.cards).reduce(
          (sum, c) => sum + (c.history?.length ?? 0),
          0
        );
        if (cardReviews >= 100) award("flashcards-100");

        // Scenarios
        if (Object.keys(s.scenariosPlayed).length >= 8) award("scenarios-all");

        // Cases
        if (Object.keys(s.casesRead).length >= 5) award("case-explorer");

        // Archetype
        if (s.archetypeResult) award("archetype-found");

        // Habits 30 days
        const habitDays = Object.values(s.habits).filter(
          (h) => h.bidAsk || h.whyItMoved || h.newTerm
        ).length;
        if (habitDays >= 30) award("habit-month");

        // Week + Phase + Graduation badges
        const isWeekComplete = (weekId: number) => {
          const week = WEEKS.find((w) => w.id === weekId);
          if (!week || week.lessons.length === 0) return false;
          return week.lessons.every((l) => s.completedLessons[l.id]);
        };

        // First-week: all of Week 1 done
        if (isWeekComplete(1)) award("first-week");

        // All-foundations: Weeks 1-3 done
        if ([1, 2, 3].every(isWeekComplete)) award("all-foundations");

        // All-markets: Weeks 4-10 done
        if ([4, 5, 6, 7, 8, 9, 10].every(isWeekComplete)) award("all-markets");

        // All-connections: Weeks 11-13 done
        if ([11, 12, 13].every(isWeekComplete)) award("all-connections");

        // Graduation: all 16 weeks
        if (WEEKS.every((w) => isWeekComplete(w.id))) award("graduation");

        // Quiz-master: 10+ perfect scores
        const perfectScores = Object.values(s.quizResults).filter(
          (r) => r.total > 0 && r.correct === r.total
        ).length;
        if (perfectScores >= 10) award("quiz-master");
      },

      setPaperPortfolio: (portfolio) => set({ paperPortfolio: portfolio }),

      resetAll: () =>
        set({
          completedLessons: {},
          quizResults: {},
          streak: 0,
          totalStudyDays: 0,
          cards: {},
          habits: {},
          journal: {},
          settings: initialSettings,
          lastLessonId: undefined,
          lastStudyDate: undefined,
          archetypeResult: undefined,
          behavioralCompleted: {},
          scenariosPlayed: {},
          casesRead: {},
          badges: {},
          paperPortfolio: undefined,
        }),

      export: () => JSON.stringify(get(), null, 2),

      import: (data) => {
        try {
          const parsed = JSON.parse(data);
          if (typeof parsed !== "object" || parsed === null) return false;
          // Merge into current state to handle older backups missing newer fields
          set((s) => ({
            ...s,
            ...parsed,
            // Ensure objects exist even if older backup didn't have them
            completedLessons: parsed.completedLessons ?? {},
            quizResults: parsed.quizResults ?? {},
            cards: parsed.cards ?? {},
            habits: parsed.habits ?? {},
            journal: parsed.journal ?? {},
            settings: { ...initialSettings, ...(parsed.settings ?? {}) },
            behavioralCompleted: parsed.behavioralCompleted ?? {},
            scenariosPlayed: parsed.scenariosPlayed ?? {},
            casesRead: parsed.casesRead ?? {},
            badges: parsed.badges ?? {},
          }));
          return true;
        } catch {
          return false;
        }
      },
    }),
    {
      name: "markets-hub-v1",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

// Convenience selectors
export function selectIsComplete(lessonId: string) {
  return (s: MarketsState) => Boolean(s.completedLessons[lessonId]);
}
