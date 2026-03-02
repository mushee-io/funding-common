"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={cn("gradient-border w-full max-w-2xl bg-ink-900/70 shadow-soft")}>
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div className="text-sm font-semibold text-white/90">{title ?? "Details"}</div>
            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-5 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
