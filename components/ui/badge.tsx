import { cn } from "@/lib/cn";

type Variant = "default" | "accent" | "up" | "down" | "warn" | "ghost";

const styles: Record<Variant, string> = {
  default: "bg-surface-2 text-ink-2 border-border",
  accent: "bg-accent/15 text-accent-ink border-accent/30 dark:text-accent",
  up: "bg-up/10 text-up border-up/30",
  down: "bg-down/10 text-down border-down/30",
  warn: "bg-warn/10 text-warn border-warn/30",
  ghost: "bg-transparent text-ink-3 border-border",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ variant = "default", className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium",
        styles[variant],
        className
      )}
      {...rest}
    />
  );
}
