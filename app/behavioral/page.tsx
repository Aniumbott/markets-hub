import Link from "next/link";
import { ArrowRight, Brain } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { BIASES } from "@/content/behavioral";

export const metadata = {
  title: "Behavioral finance",
};

export default function BehavioralPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
      <PageHeader
        eyebrow="The mind game"
        title="Behavioral finance"
        description="The biggest enemy of your portfolio isn't the market — it's the cognitive patterns you bring to it. Six biases that drive most retail mistakes, with interactive scenarios to recognize them in yourself."
      />

      <ul className="mt-10 flex flex-col gap-4">
        {BIASES.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/behavioral/${b.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Brain className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-xl text-ink">{b.name}</h2>
                <p className="mt-1 text-sm text-ink-2">{b.oneLiner}</p>
              </div>
              <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-ink-3 group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
