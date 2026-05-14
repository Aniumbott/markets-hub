import Link from "next/link";
import { ArrowRight, GitBranch } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { DECISIONS } from "@/content/decisions";

export const metadata = {
  title: "Decision aids",
};

export default function DecisionsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="Frameworks"
        title="Decision aids"
        description="Interactive flowcharts for the decisions you'll face repeatedly. Click through the questions to get reasoned recommendations — and learn the underlying frameworks."
      />
      <ul className="mt-10 grid gap-4">
        {DECISIONS.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/decisions/${d.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <GitBranch className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-xl text-ink">{d.title}</h2>
                <p className="mt-1 text-sm text-ink-2">{d.description}</p>
              </div>
              <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-ink-3 group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
