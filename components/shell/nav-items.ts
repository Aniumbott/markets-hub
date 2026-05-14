import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  BookOpen,
  Workflow,
  Network,
  Sparkles,
  Library,
  History,
  Search,
  ListChecks,
  CalendarDays,
  NotebookPen,
  Settings,
  Calculator,
  Brain,
  UserCheck,
  Users,
  ShieldAlert,
  GitBranch,
  Award,
  PieChart,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  group: "study" | "explore" | "tools" | "track" | "system";
  shortcut?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, group: "study", shortcut: "D" },
  { href: "/curriculum", label: "Curriculum", icon: BookOpen, group: "study", shortcut: "C" },
  { href: "/behavioral", label: "Behavioral finance", icon: Brain, group: "study" },
  { href: "/flashcards", label: "Flashcards", icon: Sparkles, group: "study", shortcut: "F" },
  { href: "/quizzes", label: "Quizzes", icon: ListChecks, group: "study", shortcut: "Q" },

  { href: "/simulator", label: "Simulator", icon: Workflow, group: "explore", shortcut: "S" },
  { href: "/concept-map", label: "Concept map", icon: Network, group: "explore", shortcut: "M" },
  { href: "/markets", label: "Markets library", icon: Library, group: "explore" },
  { href: "/case-studies", label: "Case studies", icon: History, group: "explore" },
  { href: "/investors", label: "Famous investors", icon: Users, group: "explore" },
  { href: "/scams", label: "Scams to avoid", icon: ShieldAlert, group: "explore" },
  { href: "/glossary", label: "Glossary", icon: Search, group: "explore", shortcut: "G" },

  { href: "/tools", label: "Calculators", icon: Calculator, group: "tools" },
  { href: "/archetype", label: "Archetype quiz", icon: UserCheck, group: "tools" },
  { href: "/portfolio", label: "Paper portfolio", icon: PieChart, group: "tools" },
  { href: "/decisions", label: "Decision aids", icon: GitBranch, group: "tools" },

  { href: "/habits", label: "Daily habits", icon: NotebookPen, group: "track" },
  { href: "/calendar", label: "Event calendar", icon: CalendarDays, group: "track" },
  { href: "/achievements", label: "Achievements", icon: Award, group: "track" },

  { href: "/settings", label: "Settings", icon: Settings, group: "system" },
];

export const GROUP_LABELS: Record<NavItem["group"], string> = {
  study: "Study",
  explore: "Explore",
  tools: "Tools",
  track: "Track",
  system: "System",
};
