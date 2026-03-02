import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-crimson-600 text-white hover:bg-crimson-500 active:bg-crimson-700 shadow-glow",
  outline:
    "border border-white/10 bg-white/[0.03] text-white/85 hover:border-white/20 hover:bg-white/[0.05]",
  ghost:
    "bg-transparent text-white/80 hover:bg-white/5 active:bg-white/10",
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-500/50 disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
