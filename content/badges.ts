import type { Badge } from "./types";

export const BADGES: Badge[] = [
  {
    slug: "first-lesson",
    name: "First step",
    description: "Completed your first lesson",
    icon: "Footprints",
  },
  {
    slug: "first-week",
    name: "Week one done",
    description: "Completed all lessons in Week 1",
    icon: "BookOpen",
  },
  {
    slug: "all-foundations",
    name: "Foundations master",
    description: "Completed Phase 1 (Weeks 1-3)",
    icon: "Layers",
  },
  {
    slug: "all-markets",
    name: "Seven markets",
    description: "Completed Phase 2 (Weeks 4-10) — all 7 markets covered",
    icon: "Library",
  },
  {
    slug: "all-connections",
    name: "Intermarket eyes",
    description: "Completed Phase 3 (Weeks 11-13) — sees the connections",
    icon: "Network",
  },
  {
    slug: "graduation",
    name: "Graduation",
    description: "Completed all 16 weeks of the curriculum",
    icon: "GraduationCap",
  },
  {
    slug: "streak-7",
    name: "Week-long streak",
    description: "7 consecutive days of study",
    icon: "Flame",
    threshold: 7,
  },
  {
    slug: "streak-30",
    name: "30-day discipline",
    description: "30 consecutive days of study",
    icon: "Flame",
    threshold: 30,
  },
  {
    slug: "streak-100",
    name: "Century",
    description: "100 consecutive days of study — rare territory",
    icon: "Flame",
    threshold: 100,
  },
  {
    slug: "flashcards-100",
    name: "Vocab built",
    description: "100 flashcard reviews completed",
    icon: "Sparkles",
    threshold: 100,
  },
  {
    slug: "quiz-master",
    name: "Quiz master",
    description: "Scored 100% on 10+ quizzes",
    icon: "Trophy",
  },
  {
    slug: "archetype-found",
    name: "Self-aware",
    description: "Completed the investor archetype quiz",
    icon: "UserCheck",
  },
  {
    slug: "scenarios-all",
    name: "Scenario explorer",
    description: "Played through all 8 simulator scenarios",
    icon: "Workflow",
  },
  {
    slug: "case-explorer",
    name: "Case study scholar",
    description: "Read 5+ case studies",
    icon: "History",
  },
  {
    slug: "habit-month",
    name: "Habit former",
    description: "30 days of completing at least one daily habit",
    icon: "NotebookPen",
  },
];

export function getBadge(slug: string): Badge | undefined {
  return BADGES.find((b) => b.slug === slug);
}
