"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Auto-close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Hamburger / Close trigger — visible in the mobile header */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors lg:hidden",
          "border-border-strong bg-surface-2 text-ink",
          "hover:bg-surface hover:border-accent/40 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        )}
      >
        {open ? (
          <X className="h-5 w-5" strokeWidth={2.2} aria-hidden />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={2.2} aria-hidden />
        )}
      </button>

      {/* Backdrop scrim — strong enough for legibility */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Drawer — explicit h-dvh so children can use h-full */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-dvh w-[min(20rem,86vw)] flex-col",
          "border-r border-border-strong bg-surface shadow-2xl",
          "transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Drawer header: brand + close — replaces the brand row inside Sidebar */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bg">
              <span className="font-serif text-sm font-semibold leading-none">
                M
              </span>
            </div>
            <span className="text-sm font-medium tracking-tight text-ink">
              Markets Hub
            </span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg",
              "text-ink-2 hover:bg-surface-2 hover:text-ink",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            )}
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>

        {/* Sidebar fills the remaining height (no duplicate brand) */}
        <div className="flex min-h-0 flex-1 flex-col">
          <Sidebar onNavigate={() => setOpen(false)} hideBrand />
        </div>
      </aside>
    </>
  );
}
