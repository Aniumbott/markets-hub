"use client";

import { Info, AlertTriangle, Lightbulb, IndianRupee } from "lucide-react";
import { InlineText } from "./inline-text";
import type { LessonBlock } from "@/content/types";
import { cn } from "@/lib/cn";
import { Diagram } from "@/components/diagrams/registry";

const calloutIcons = {
  info: Info,
  warn: AlertTriangle,
  tip: Lightbulb,
  money: IndianRupee,
};

const calloutTone = {
  info: "border-accent/40 bg-accent/[0.06]",
  warn: "border-warn/40 bg-warn/[0.08]",
  tip: "border-up/40 bg-up/[0.06]",
  money: "border-accent/40 bg-accent/[0.06]",
};

const calloutIconColor = {
  info: "text-accent",
  warn: "text-warn",
  tip: "text-up",
  money: "text-accent",
};

interface BlocksProps {
  blocks: LessonBlock[];
}

export function Blocks({ blocks }: BlocksProps) {
  return (
    <div className="prose-reader mx-auto">
      {blocks.map((block, i) => {
        const key = i;

        switch (block.kind) {
          case "p":
            return (
              <p key={key}>
                <InlineText text={block.text} />
              </p>
            );

          case "h2":
            return <h2 key={key}>{block.text}</h2>;

          case "h3":
            return <h3 key={key}>{block.text}</h3>;

          case "quote":
            return (
              <blockquote key={key}>
                <InlineText text={block.text} />
                {block.attribution && (
                  <footer className="mt-2 text-sm not-italic text-ink-3">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          case "list":
            if (block.ordered) {
              return (
                <ol key={key}>
                  {block.items.map((item, j) => (
                    <li key={j}>
                      <InlineText text={item} />
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={key}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );

          case "analogy":
            return (
              <aside
                key={key}
                className="my-8 rounded-2xl border border-border bg-surface-2 p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Analogy
                  </span>
                  {block.title && (
                    <span className="font-serif text-base text-ink">
                      · {block.title}
                    </span>
                  )}
                </div>
                <p className="text-ink-2">
                  <InlineText text={block.text} />
                </p>
              </aside>
            );

          case "callout": {
            const Icon = calloutIcons[block.tone];
            return (
              <aside
                key={key}
                className={cn(
                  "my-6 flex gap-3 rounded-xl border p-4",
                  calloutTone[block.tone]
                )}
              >
                <Icon
                  className={cn("mt-0.5 h-5 w-5 shrink-0", calloutIconColor[block.tone])}
                  strokeWidth={2}
                  aria-hidden
                />
                <div className="text-sm leading-relaxed">
                  {block.title && (
                    <p className="mb-1 font-semibold text-ink">{block.title}</p>
                  )}
                  <p className="text-ink-2">
                    <InlineText text={block.text} />
                  </p>
                </div>
              </aside>
            );
          }

          case "keyTakeaways":
            return (
              <section
                key={key}
                className="mt-8 rounded-2xl border border-border bg-surface-2 p-6"
              >
                <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  Key takeaways
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2 font-sans text-sm text-ink-2"
                    >
                      <span aria-hidden className="select-none text-accent">
                        ◆
                      </span>
                      <span>
                        <InlineText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );

          case "table":
            return (
              <figure key={key} className="my-8 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border-strong">
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-3 py-2 text-left font-sans text-xs font-semibold uppercase tracking-wider text-ink-3"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="font-sans">
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-border">
                        {row.map((cell, k) => (
                          <td key={k} className="px-3 py-2 align-top text-ink-2">
                            <InlineText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {block.caption && (
                  <figcaption className="mt-2 text-center font-sans text-xs italic text-ink-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "case":
            return null;

          case "diagram":
            return (
              <figure key={key} className="my-10 not-italic">
                <Diagram kind={block.diagram} props={block.props} />
                {block.caption && (
                  <figcaption className="mt-3 text-center font-sans text-xs italic text-ink-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
