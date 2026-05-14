"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getTerm } from "@/content/glossary";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

interface GlossaryPopoverProps {
  slug: string;
  children: React.ReactNode;
}

export function GlossaryPopover({ slug, children }: GlossaryPopoverProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const term = getTerm(slug);
  const ensureCard = useStore((s) => s.ensureCard);
  const bilingual = useStore((s) => s.settings.bilingualGlossary);

  useEffect(() => {
    if (open && term) ensureCard(slug);
  }, [open, slug, term, ensureCard]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!term) {
    return <span className="text-ink">{children}</span>;
  }

  return (
    <span className="relative inline">
      <button
        ref={triggerRef}
        type="button"
        className="glossary-term"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {children}
      </button>

      {open && (
        <span
          ref={popoverRef}
          role="dialog"
          aria-label={`Definition of ${term.term}`}
          className={cn(
            "absolute left-0 top-full z-30 mt-2 block w-[20rem] max-w-[calc(100vw-2rem)]",
            "rounded-lg border border-border bg-surface p-4 shadow-pop"
          )}
        >
          <span className="block text-xs font-medium uppercase tracking-wider text-accent">
            Term
          </span>
          <span className="mt-1 block font-serif text-lg text-ink">
            {term.term}
            {bilingual && term.termHi && (
              <span className="ml-2 font-sans text-base text-ink-3">
                / {term.termHi}
              </span>
            )}
          </span>
          <span className="mt-2 block text-sm text-ink-2">{term.short}</span>
          {term.example && (
            <span className="mt-2 block rounded-md border border-border bg-surface-2 px-3 py-2 text-xs text-ink-2">
              {term.example}
            </span>
          )}
          <Link
            href={`/glossary?q=${encodeURIComponent(term.slug)}`}
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            Open in glossary
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </span>
      )}
    </span>
  );
}
