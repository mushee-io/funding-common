"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Flame, ArrowUpRight } from "lucide-react";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/grants", label: "Grants" },
  { href: "/commons", label: "Commons" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-crimson-500/15 ring-1 ring-crimson-500/25">
            <Flame className="h-5 w-5 text-crimson-200" />
          </span>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-wide">Mushee</span>
              <Badge variant="red">Funding</Badge>
            </div>
            <div className="text-xs text-white/50">UK-incorporated • global reach</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm text-white/70 transition hover:text-white hover:bg-white/[0.04]",
                pathname === x.href && "bg-white/[0.05] text-white"
              )}
            >
              {x.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.zhcinstitute.com/grants/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl px-3 py-2 text-sm text-white/65 transition hover:text-white hover:bg-white/[0.04] sm:block"
            title="Reference inspiration"
          >
            Inspiration
          </a>
          <Link href="/grants">
            <Button size="md" className="gap-2">
              Explore funding <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
