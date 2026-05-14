import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SCAMS } from "@/content/scams";

export const metadata = {
  title: "Scams to avoid",
};

export default function ScamsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Defensive knowledge"
        title="Scams to avoid"
        description="Indian retail loses hundreds of crores annually to financial scams. Eight categories of common scams, with real Indian examples and how to protect yourself."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {SCAMS.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/scams/${s.slug}`}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-down/20 bg-down/[0.02] p-5 transition-colors hover:border-down/40"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-down/15 text-down">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-lg text-ink">{s.name}</h2>
                </div>
              </div>
              <p className="text-sm text-ink-2">{s.oneLiner}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-down group-hover:translate-x-0.5">
                How to spot it <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
