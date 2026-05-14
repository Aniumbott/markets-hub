import Link from "next/link";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-dvh w-full">
      {/* Desktop sidebar — hidden on mobile, sticky on lg+ */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-surface lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-dvh">
        <Sidebar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile-only top app bar */}
        <header
          className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-bg/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-bg/80 lg:hidden"
          role="banner"
        >
          <MobileNav />
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-ink"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bg">
              <span className="font-serif text-sm font-semibold leading-none">
                M
              </span>
            </div>
            <span className="font-serif text-base">Markets Hub</span>
          </Link>
        </header>

        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
