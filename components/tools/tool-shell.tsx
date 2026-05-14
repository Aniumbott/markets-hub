"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ToolShellProps {
  title: string;
  description: string;
  inputs: ReactNode;
  outputs: ReactNode;
  visualization?: ReactNode;
  takeaway?: string;
  className?: string;
}

export function ToolShell({
  title,
  description,
  inputs,
  outputs,
  visualization,
  takeaway,
  className,
}: ToolShellProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-surface p-5 lg:p-6",
        className
      )}
    >
      <header>
        <h3 className="font-serif text-xl tracking-tight text-ink">{title}</h3>
        <p className="mt-1 text-sm text-ink-2">{description}</p>
      </header>

      <div className="mt-5 grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">{inputs}</div>
        <div className="space-y-3">{outputs}</div>
      </div>

      {visualization && <div className="mt-6">{visualization}</div>}

      {takeaway && (
        <p className="mt-4 rounded-md border border-accent/30 bg-accent/[0.05] p-3 text-xs text-ink-2">
          <strong className="text-accent">Takeaway: </strong>
          {takeaway}
        </p>
      )}
    </article>
  );
}

interface InputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}

export function NumberInput({
  label,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="flex items-baseline justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-ink-3">
          {label}
        </span>
        <span className="font-mono text-sm text-accent">
          {prefix}
          {value.toLocaleString("en-IN")}
          {suffix}
        </span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--accent)]"
      />
      <div className="mt-1 flex justify-between text-[10px] text-ink-3 font-mono">
        <span>{prefix}{min.toLocaleString("en-IN")}{suffix}</span>
        <span>{prefix}{max.toLocaleString("en-IN")}{suffix}</span>
      </div>
    </div>
  );
}

export function OutputCard({
  label,
  value,
  tone = "ink",
}: {
  label: string;
  value: string;
  tone?: "ink" | "accent" | "up" | "down";
}) {
  const toneClass = {
    ink: "text-ink",
    accent: "text-accent",
    up: "text-up",
    down: "text-down",
  }[tone];
  return (
    <div className="rounded-lg border border-border bg-bg p-3">
      <div className="text-[10px] font-medium uppercase tracking-wider text-ink-3">
        {label}
      </div>
      <div className={`mt-1 font-serif text-2xl ${toneClass}`}>{value}</div>
    </div>
  );
}

export function fmtINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)}cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}k`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function fmtINRFull(n: number): string {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
