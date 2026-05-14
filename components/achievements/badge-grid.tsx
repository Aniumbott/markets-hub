"use client";

import { useEffect, useState } from "react";
import {
  Footprints,
  BookOpen,
  Layers,
  Library,
  Network,
  GraduationCap,
  Flame,
  Sparkles,
  Trophy,
  UserCheck,
  Workflow,
  History,
  NotebookPen,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { useStore } from "@/lib/store";
import { BADGES } from "@/content/badges";
import { relativeDay } from "@/lib/date";
import { cn } from "@/lib/cn";

const ICON_MAP: Record<string, LucideIcon> = {
  Footprints,
  BookOpen,
  Layers,
  Library,
  Network,
  GraduationCap,
  Flame,
  Sparkles,
  Trophy,
  UserCheck,
  Workflow,
  History,
  NotebookPen,
};

export function BadgeGrid() {
  const [mounted, setMounted] = useState(false);
  const badges = useStore((s) => s.badges);
  const checkBadges = useStore((s) => s.checkBadges);

  useEffect(() => {
    setMounted(true);
    checkBadges();
  }, [checkBadges]);

  const earned = mounted ? Object.keys(badges).length : 0;
  const total = BADGES.length;

  return (
    <div>
      <div className="mb-6 rounded-2xl border border-accent/30 bg-accent/[0.04] p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Progress
            </div>
            <div className="mt-1 font-serif text-2xl text-ink">
              {mounted ? earned : 0} of {total} earned
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-3xl text-accent">
              {Math.round(((mounted ? earned : 0) / total) * 100)}%
            </div>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${mounted ? (earned / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BADGES.map((b) => {
          const earnedDate = mounted ? badges[b.slug] : undefined;
          const Icon = ICON_MAP[b.icon] ?? Trophy;
          const isEarned = Boolean(earnedDate);

          return (
            <article
              key={b.slug}
              className={cn(
                "rounded-2xl border p-4 transition-all",
                isEarned
                  ? "border-accent/40 bg-accent/[0.05]"
                  : "border-border bg-surface opacity-70"
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    isEarned
                      ? "bg-accent text-bg"
                      : "bg-surface-2 text-ink-3"
                  )}
                >
                  {isEarned ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-sans text-sm font-semibold text-ink">
                    {b.name}
                  </div>
                  <p className="mt-0.5 text-xs text-ink-2">{b.description}</p>
                  {isEarned && earnedDate && (
                    <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-accent">
                      Earned {relativeDay(earnedDate)}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
