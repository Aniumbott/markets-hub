import Link from "next/link";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-dvh w-full">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-surface lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-dvh">
        <Sidebar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-bg/85 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-bg/70 lg:hidden">
          <MobileNav />
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-ink"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-bg">
              <span className="font-serif text-xs font-semibold leading-none">M</span>
            </div>
            Markets Hub
          </Link>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
