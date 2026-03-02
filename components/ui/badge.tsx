import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "muted",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "muted" | "red" | "ok" }) {
  const v =
    variant === "red"
      ? "bg-crimson-500/15 text-crimson-200 ring-1 ring-crimson-500/25"
      : variant === "ok"
      ? "bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/20"
      : "bg-white/5 text-white/70 ring-1 ring-white/10";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        v,
        className
      )}
      {...props}
    />
  );
}
