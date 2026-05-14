"use client";

import { Fragment } from "react";
import { GlossaryPopover } from "./glossary-popover";

interface InlineTextProps {
  text: string;
}

type Node =
  | { kind: "text"; value: string }
  | { kind: "bold"; value: string }
  | { kind: "italic"; value: string }
  | { kind: "code"; value: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "term"; slug: string; display: string };

/**
 * Tiny inline parser. Order matters: longest/most-specific patterns first.
 * Supported:
 *   **bold**       → bold
 *   *italic*       → italic
 *   `code`         → code
 *   {{slug|text}}  → glossary popover
 *   [label](url)   → external link
 */
function parse(text: string): Node[] {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\{\{[a-z0-9-]+\|[^}]+\}\}|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern);
  const nodes: Node[] = [];

  for (const part of parts) {
    if (!part) continue;

    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push({ kind: "bold", value: part.slice(2, -2) });
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push({ kind: "code", value: part.slice(1, -1) });
    } else if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      nodes.push({ kind: "italic", value: part.slice(1, -1) });
    } else if (part.startsWith("{{") && part.endsWith("}}")) {
      const inner = part.slice(2, -2);
      const [slug, display] = inner.split("|");
      nodes.push({ kind: "term", slug: slug.trim(), display: (display || slug).trim() });
    } else if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (m) {
        nodes.push({ kind: "link", label: m[1], href: m[2] });
      } else {
        nodes.push({ kind: "text", value: part });
      }
    } else {
      nodes.push({ kind: "text", value: part });
    }
  }

  return nodes;
}

export function InlineText({ text }: InlineTextProps) {
  const nodes = parse(text);
  return (
    <>
      {nodes.map((n, i) => {
        switch (n.kind) {
          case "text":
            return <Fragment key={i}>{n.value}</Fragment>;
          case "bold":
            return <strong key={i}>{n.value}</strong>;
          case "italic":
            return <em key={i}>{n.value}</em>;
          case "code":
            return <code key={i}>{n.value}</code>;
          case "link":
            return (
              <a
                key={i}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                {n.label}
              </a>
            );
          case "term":
            return (
              <GlossaryPopover key={i} slug={n.slug}>
                {n.display}
              </GlossaryPopover>
            );
        }
      })}
    </>
  );
}
