"use client";

import { useEffect, useState } from "react";
import { Check, Eye, FileText, Sparkles } from "lucide-react";
import { useStore } from "@/lib/store";
import { ymd, addDays, relativeDay } from "@/lib/date";
import { cn } from "@/lib/cn";

const ITEMS = [
  {
    key: "bidAsk" as const,
    icon: Eye,
    title: "Bid-ask observation",
    hint: "Open Kite or Investing.com. Note the bid-ask spread on one liquid and one illiquid stock.",
  },
  {
    key: "whyItMoved" as const,
    icon: FileText,
    title: "Why did it move?",
    hint: "Pick one stock that moved >2% today. Write a one-line cause-effect note.",
    notable: true,
  },
  {
    key: "newTerm" as const,
    icon: Sparkles,
    title: "One new term",
    hint: "Pick a glossary term you didn't know yesterday. Write it down in your own words.",
    notable: true,
  },
];

export function DailyHabits() {
  const [mounted, setMounted] = useState(false);
  const today = ymd();
  const habits = useStore((s) => s.habits);
  const setHabit = useStore((s) => s.setHabit);

  useEffect(() => setMounted(true), []);

  const todayEntry = mounted ? habits[today] : undefined;

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(today, -i);
    const e = habits[date];
    const doneCount =
      (e?.bidAsk ? 1 : 0) + (e?.whyItMoved ? 1 : 0) + (e?.newTerm ? 1 : 0);
    return { date, doneCount };
  }).reverse();

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <section>
        <div className="card p-6">
          <header className="flex items-center justify-between">
            <h2 className="font-serif text-xl text-ink">Today's three</h2>
            <span className="text-xs text-ink-3">{today}</span>
          </header>

          <ul className="mt-5 flex flex-col gap-3">
            {ITEMS.map(({ key, icon: Icon, title, hint, notable }) => {
              const checked = mounted ? Boolean(todayEntry?.[key]) : false;
              return (
                <li
                  key={key}
                  className={cn(
                    "rounded-lg border bg-surface p-4 transition-colors",
                    checked
                      ? "border-up/40 bg-up/5"
                      : "border-border hover:bg-surface-2"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checked}
                      onClick={() =>
                        setHabit(today, { [key]: !checked })
                      }
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                        checked
                          ? "border-up bg-up text-bg"
                          : "border-border-strong"
                      )}
                    >
                      {checked && <Check className="h-3 w-3" strokeWidth={3} />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            checked ? "text-up" : "text-ink-3"
                          )}
                        />
                        <span
                          className={cn(
                            "font-sans text-sm font-medium",
                            checked ? "text-ink-2 line-through" : "text-ink"
                          )}
                        >
                          {title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-ink-3">{hint}</p>
                      {notable && (
                        <textarea
                          placeholder="Optional: jot a one-liner..."
                          rows={2}
                          value={
                            mounted
                              ? key === "whyItMoved"
                                ? todayEntry?.whyItMovedNote ?? ""
                                : todayEntry?.newTermNote ?? ""
                              : ""
                          }
                          onChange={(e) =>
                            setHabit(today, {
                              [key === "whyItMoved" ? "whyItMovedNote" : "newTermNote"]:
                                e.target.value,
                            })
                          }
                          className="mt-2 w-full resize-y rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
                        />
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <aside aria-label="Last 7 days" className="lg:sticky lg:top-20 lg:self-start">
        <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
          Last 7 days
        </h3>
        <ul className="flex flex-col gap-2">
          {last7.map((d) => (
            <li
              key={d.date}
              className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
            >
              <div>
                <div className="text-xs font-medium text-ink">
                  {relativeDay(d.date)}
                </div>
                <div className="text-[10px] font-mono text-ink-3">{d.date}</div>
              </div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full border",
                      mounted && i < d.doneCount
                        ? "border-up bg-up"
                        : "border-border bg-surface-2"
                    )}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
