"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Wraps wide SVG/table diagrams so they scroll horizontally on small viewports
 * instead of becoming unreadable when scaled down.
 *
 * Pass the natural rendering width as `minWidth` (default 560px).
 * Below sm/md breakpoint, content stays at minWidth and scrolls horizontally.
 */
export function DiagramScroller({
  children,
  minWidth = 560,
  className,
}: {
  children: ReactNode;
  minWidth?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative -mx-3 sm:mx-0", className)}>
      <div className="overflow-x-auto pb-2 px-3 sm:px-0">
        <div style={{ minWidth: `${minWidth}px` }} className="sm:min-w-0">
          {children}
        </div>
      </div>
      {/* Mobile hint */}
      <div className="pointer-events-none absolute -top-1 right-1 rounded-full bg-bg/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-ink-3 sm:hidden">
        scroll →
      </div>
    </div>
  );
}
