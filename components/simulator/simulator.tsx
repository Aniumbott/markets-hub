"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Minus, Play, RotateCcw, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SCENARIOS } from "@/content/scenarios";
import type { SimulatorScenario, ScenarioStep } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import { useStore } from "@/lib/store";

export function Simulator() {
  const [activeSlug, setActiveSlug] = useState<string>(SCENARIOS[0].slug);
  const [waveIndex, setWaveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const markScenarioPlayed = useStore((s) => s.markScenarioPlayed);

  const scenario = SCENARIOS.find((s) => s.slug === activeSlug) ?? SCENARIOS[0];
  const maxWave = scenario.steps.length;

  useEffect(() => {
    if (!playing) return;
    if (waveIndex >= maxWave) {
      setPlaying(false);
      // Persist that user completed this scenario
      markScenarioPlayed(activeSlug);
      return;
    }
    const t = setTimeout(() => setWaveIndex((w) => w + 1), 1100);
    return () => clearTimeout(t);
  }, [playing, waveIndex, maxWave, activeSlug, markScenarioPlayed]);

  // Also mark as played when user manually steps through to the end
  useEffect(() => {
    if (waveIndex >= maxWave && maxWave > 0) {
      markScenarioPlayed(activeSlug);
    }
  }, [waveIndex, maxWave, activeSlug, markScenarioPlayed]);

  const start = () => {
    setWaveIndex(0);
    setPlaying(true);
  };
  const reset = () => {
    setPlaying(false);
    setWaveIndex(0);
  };
  const stepThrough = () => {
    if (waveIndex < maxWave) setWaveIndex((w) => w + 1);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside aria-label="Choose scenario" className="lg:sticky lg:top-20 lg:self-start">
        <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
          Pick a scenario
        </h3>
        <div className="flex flex-col gap-2">
          {SCENARIOS.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => {
                setActiveSlug(s.slug);
                reset();
              }}
              className={cn(
                "rounded-lg border border-border p-3 text-left transition-colors",
                activeSlug === s.slug
                  ? "border-accent/40 bg-accent/5"
                  : "bg-surface hover:bg-surface-2"
              )}
            >
              <span className="block font-serif text-sm text-ink">
                {s.title}
              </span>
              <span className="mt-1 block text-xs text-ink-3 line-clamp-2">
                {s.trigger}
              </span>
            </button>
          ))}
        </div>
      </aside>

      <section className="min-w-0">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">
              <Zap className="h-3 w-3" />
              Trigger
            </Badge>
          </div>
          <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
            {scenario.title}
          </h2>
          <p className="mt-2 text-ink-2">{scenario.trigger}</p>
          <p className="mt-3 text-sm text-ink-3">{scenario.premise}</p>

          <div className="mt-5 flex gap-2">
            <Button onClick={start} disabled={playing && waveIndex < maxWave}>
              <Play className="h-4 w-4" />
              {waveIndex === 0 ? "Play cascade" : "Replay from start"}
            </Button>
            <Button
              variant="outline"
              onClick={stepThrough}
              disabled={waveIndex >= maxWave}
            >
              Step forward
            </Button>
            <Button variant="ghost" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        <ol className="mt-8 flex flex-col gap-6">
          {scenario.steps.map((wave, wIndex) => (
            <Wave
              key={wIndex}
              waveNumber={wIndex + 1}
              steps={wave}
              visible={waveIndex > wIndex}
            />
          ))}
        </ol>

        {waveIndex >= maxWave && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-2xl border border-accent/40 bg-accent/5 p-6"
          >
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Takeaways
            </h3>
            <ul className="mt-3 space-y-2">
              {scenario.takeaways.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-2">
                  <span aria-hidden className="text-accent">
                    ◆
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </section>
    </div>
  );
}

const toneIcons = {
  up: ArrowUp,
  down: ArrowDown,
  neutral: Minus,
};

const toneClasses = {
  up: "text-down border-down/30 bg-down/5",
  down: "text-down border-down/30 bg-down/5",
  neutral: "text-ink-3 border-border bg-surface-2",
};

const toneIconClass = {
  up: "text-down",
  down: "text-down",
  neutral: "text-ink-3",
};

function Wave({
  waveNumber,
  steps,
  visible,
}: {
  waveNumber: number;
  steps: ScenarioStep[];
  visible: boolean;
}) {
  return (
    <li>
      <div className="mb-3 flex items-center gap-3">
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium font-mono",
            visible
              ? "bg-accent/15 text-accent border border-accent/30"
              : "border border-border text-ink-3 bg-surface-2"
          )}
        >
          {waveNumber}
        </div>
        <span
          className={cn(
            "text-xs uppercase tracking-wider",
            visible ? "text-ink-2" : "text-ink-3"
          )}
        >
          Wave {waveNumber}
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {steps.map((step, i) => {
          const Icon = toneIcons[step.tone];
          return (
            <motion.div
              key={step.id}
              initial={false}
              animate={
                visible
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.25, y: 4 }
              }
              transition={{
                duration: 0.4,
                delay: visible ? i * 0.08 : 0,
              }}
              className={cn(
                "card flex gap-3 p-4 transition-colors",
                !visible && "border-dashed opacity-50"
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                  visible ? toneClasses[step.tone] : "border-border text-ink-3"
                )}
              >
                <Icon className={cn("h-4 w-4", visible && toneIconClass[step.tone])} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-sans text-sm font-medium text-ink">
                  {step.label}
                </div>
                {step.marketHint && (
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                    {step.marketHint}
                  </div>
                )}
                <p className="mt-1 text-xs text-ink-2">{step.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </li>
  );
}
