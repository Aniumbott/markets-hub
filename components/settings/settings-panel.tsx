"use client";

import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { Download, Upload, RotateCcw, Globe2, BookOpen, HardDrive, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function SettingsPanel() {
  const [mounted, setMounted] = useState(false);
  const settings = useStore((s) => s.settings);
  const updateSettings = useStore((s) => s.updateSettings);
  const exportData = useStore((s) => s.export);
  const importData = useStore((s) => s.import);
  const resetAll = useStore((s) => s.resetAll);
  const completedLessons = useStore((s) => s.completedLessons);
  const cards = useStore((s) => s.cards);
  const habits = useStore((s) => s.habits);
  const journal = useStore((s) => s.journal);
  const quizResults = useStore((s) => s.quizResults);
  const badges = useStore((s) => s.badges);
  const casesRead = useStore((s) => s.casesRead);
  const scenariosPlayed = useStore((s) => s.scenariosPlayed);
  const behavioralCompleted = useStore((s) => s.behavioralCompleted);
  const archetypeResult = useStore((s) => s.archetypeResult);
  const paperPortfolio = useStore((s) => s.paperPortfolio);
  const lastStudyDate = useStore((s) => s.lastStudyDate);
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [storageInfo, setStorageInfo] = useState<{ size: string; key: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("markets-hub-v1");
        if (raw) {
          const sizeKB = (raw.length / 1024).toFixed(1);
          setStorageInfo({ size: `${sizeKB} KB`, key: "markets-hub-v1" });
        } else {
          setStorageInfo({ size: "—", key: "markets-hub-v1" });
        }
      } catch {
        setStorageInfo(null);
      }
    }
  }, [completedLessons, cards, habits, journal, badges]);

  const onExport = () => {
    if (!mounted) return;
    const json = exportData();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `markets-hub-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage("Backup downloaded.");
    setTimeout(() => setMessage(null), 2000);
  };

  const onImport = () => fileRef.current?.click();

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const ok = importData(text);
      setMessage(ok ? "Restore successful — refresh to see changes." : "Could not parse file.");
      setTimeout(() => setMessage(null), 3500);
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const onReset = () => {
    if (confirm("This wipes all progress, journal, flashcards, and habits. Continue?")) {
      resetAll();
      setMessage("All progress reset.");
      setTimeout(() => setMessage(null), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Preferences */}
      <section className="card p-6">
        <h2 className="font-serif text-xl text-ink">Preferences</h2>

        <div className="mt-5 flex flex-col gap-4">
          <Toggle
            icon={Globe2}
            label="Bilingual glossary"
            description="Show Hindi term beside English in glossary popovers and the glossary page."
            checked={mounted ? settings.bilingualGlossary : true}
            onChange={(v) => updateSettings({ bilingualGlossary: v })}
          />

          <Toggle
            icon={BookOpen}
            label="Free navigation"
            description="Move through lessons in any order. Off = strict linear order (lessons unlock when previous is complete)."
            checked={mounted ? settings.lessonNavMode === "free" : true}
            onChange={(v) => updateSettings({ lessonNavMode: v ? "free" : "linear" })}
          />
        </div>
      </section>

      {/* Storage status */}
      <section className="card p-6">
        <div className="flex items-center gap-2">
          <HardDrive className="h-4 w-4 text-accent" />
          <h2 className="font-serif text-xl text-ink">Storage status</h2>
        </div>
        <p className="mt-1 text-sm text-ink-2">
          Your progress is saved automatically in your browser's <code className="rounded bg-surface-2 px-1 text-xs">localStorage</code>.
          No server, no cloud, no account — your data never leaves this device unless you export it.
        </p>

        {storageInfo && (
          <div className="mt-4 rounded-lg border border-up/30 bg-up/[0.05] p-3 text-xs">
            <div className="flex items-center gap-2 text-up font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Saved to localStorage
            </div>
            <div className="mt-1 font-mono text-ink-3">
              Key: <span className="text-ink-2">{storageInfo.key}</span> · Size: <span className="text-ink-2">{storageInfo.size}</span>
            </div>
          </div>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <StatRow label="Lessons completed" value={mounted ? Object.keys(completedLessons).length : 0} />
          <StatRow label="Flashcards in deck" value={mounted ? Object.keys(cards).length : 0} />
          <StatRow label="Habit-days logged" value={mounted ? Object.keys(habits).length : 0} />
          <StatRow label="Journal entries" value={mounted ? Object.keys(journal).length : 0} />
          <StatRow label="Quizzes attempted" value={mounted ? Object.keys(quizResults).length : 0} />
          <StatRow label="Badges earned" value={mounted ? Object.keys(badges).length : 0} />
          <StatRow label="Case studies read" value={mounted ? Object.keys(casesRead).length : 0} />
          <StatRow label="Scenarios played" value={mounted ? Object.keys(scenariosPlayed).length : 0} />
          <StatRow label="Biases studied" value={mounted ? Object.keys(behavioralCompleted).length : 0} />
          <StatRow
            label="Archetype taken"
            value={mounted ? (archetypeResult ? "Yes" : "—") : "—"}
          />
          <StatRow
            label="Paper portfolio set"
            value={mounted ? (paperPortfolio ? "Yes" : "—") : "—"}
          />
          <StatRow
            label="Last study"
            value={mounted ? lastStudyDate ?? "—" : "—"}
          />
        </div>

        <p className="mt-4 text-xs text-ink-3">
          <strong className="text-ink-2">Important:</strong> localStorage is browser-and-device specific.
          If you clear your browser data, switch browsers, or open Markets Hub in incognito mode, you'll start fresh.
          To move progress between devices, use Export → transfer the JSON file → Import on the new device.
        </p>
      </section>

      {/* Backup */}
      <section className="card p-6">
        <h2 className="font-serif text-xl text-ink">Backup & restore</h2>
        <p className="mt-1 text-sm text-ink-2">
          Export to a JSON file periodically — that's your safety net against accidental browser-data clearing.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={onExport} variant="primary">
            <Download className="h-4 w-4" /> Export progress
          </Button>
          <Button onClick={onImport} variant="outline">
            <Upload className="h-4 w-4" /> Restore from file
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={onFile}
          />
        </div>
      </section>

      {/* Danger zone */}
      <section className="rounded-2xl border border-down/30 bg-down/5 p-6">
        <h2 className="font-serif text-xl text-down">Reset</h2>
        <p className="mt-1 text-sm text-ink-2">
          Wipes lesson progress, quiz history, journal entries, flashcards, habits, and streak. There is no undo.
        </p>
        <Button onClick={onReset} variant="danger" className="mt-4">
          <RotateCcw className="h-4 w-4" />
          Reset all progress
        </Button>
      </section>

      <p
        className={cn(
          "text-xs transition-opacity",
          message ? "text-accent opacity-100" : "opacity-0"
        )}
        role="status"
        aria-live="polite"
      >
        {message ?? "."}
      </p>
    </div>
  );
}

interface ToggleProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

function Toggle({ icon: Icon, label, description, checked, onChange }: ToggleProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-3" />
      <div className="flex-1">
        <div className="font-sans text-sm font-medium text-ink">{label}</div>
        <div className="mt-0.5 text-xs text-ink-3">{description}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors",
          checked ? "bg-accent" : "bg-border-strong"
        )}
      >
        <span
          className={cn(
            "inline-block h-3.5 w-3.5 rounded-full bg-bg transition-transform",
            checked ? "translate-x-5" : "translate-x-1"
          )}
        />
      </button>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-md border border-border bg-bg p-2">
      <div className="text-[9px] uppercase tracking-wider text-ink-3">{label}</div>
      <div className="mt-0.5 font-mono text-sm text-ink">{value}</div>
    </div>
  );
}
