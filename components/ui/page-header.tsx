import { cn } from "@/lib/cn";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </span>
      )}
      <h1 className="font-serif text-2xl leading-tight tracking-tight text-ink text-balance sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-ink-2 text-pretty">
          {description}
        </p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
