"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, GROUP_LABELS, type NavItem } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string): boolean {
  if (href === "/dashboard") return pathname === "/" || pathname === "/dashboard";
  return pathname === href || pathname.startsWith(href + "/");
}

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const groups = Object.keys(GROUP_LABELS) as NavItem["group"][];

  return (
    <nav
      aria-label="Primary"
      className="flex h-full flex-col gap-6 px-3 py-4"
    >
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className="flex items-center gap-2 px-3 py-1"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bg">
          <span className="font-serif text-sm font-semibold leading-none">M</span>
        </div>
        <span className="text-sm font-medium tracking-tight text-ink">
          Markets Hub
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto">
        {groups.map((group) => {
          const items = NAV_ITEMS.filter((i) => i.group === group);
          if (items.length === 0) return null;
          return (
            <div key={group} className="flex flex-col gap-0.5">
              <div className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                {GROUP_LABELS[group]}
              </div>
              {items.map(({ href, label, icon: Icon, shortcut }) => {
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-surface-2 text-ink"
                        : "text-ink-2 hover:bg-surface-2 hover:text-ink"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        active ? "text-accent" : "text-ink-3 group-hover:text-ink-2"
                      )}
                      strokeWidth={2}
                    />
                    <span className="flex-1 truncate">{label}</span>
                    {shortcut && (
                      <kbd className="rounded border border-border bg-bg px-1 font-mono text-[10px] text-ink-3">
                        {shortcut}
                      </kbd>
                    )}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3 px-1">
        <span className="text-[11px] text-ink-3">Theme</span>
        <ThemeToggle />
      </div>
    </nav>
  );
}
