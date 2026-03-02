import { cn } from "@/lib/utils";

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-xl border border-white/10 bg-ink-950/60 px-4 text-sm text-white outline-none transition focus:border-crimson-500/40 focus:ring-2 focus:ring-crimson-500/20",
        className
      )}
      {...props}
    />
  );
}
