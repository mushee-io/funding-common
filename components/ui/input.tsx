import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-crimson-500/40 focus:ring-2 focus:ring-crimson-500/20",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
