import Link from "next/link";
import { ArrowRight, Globe2, Sparkles, ShieldCheck, Search, Database, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-sm text-white/55">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-7 shadow-soft sm:p-12">
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(720px_circle_at_30%_10%,rgba(244,63,94,.22),transparent_60%)]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="red" className="gap-1.5"><Zap className="h-3.5 w-3.5" /> YC-grade</Badge>
              <Badge className="gap-1.5"><Database className="h-3.5 w-3.5" /> Funding DB</Badge>
              <Badge className="gap-1.5"><Globe2 className="h-3.5 w-3.5" /> UK + global</Badge>
              <Badge className="gap-1.5"><TrendingUp className="h-3.5 w-3.5" /> Pipeline</Badge>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Mushee Funding Hub — run grants like a product.
            </h1>

            <p className="max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              A premium, founder-friendly portal for tracking grants, accelerators, government innovation routes,
              and Web3/AI ecosystem funding. UK-incorporated, built for global programs.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/grants">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse grants <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/commons">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Public goods (Commons) <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <Stat label="Base" value="United Kingdom" />
              <Stat label="Tracks" value="Web3 + AI" />
              <Stat label="Reach" value="Global" />
            </div>

            <div className="text-sm text-white/55">
              Tip: Use <span className="kbd">Search</span> + filters to shortlist opportunities fast.
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-white/85">What’s inside</div>
                  <div className="text-xs text-white/55">Designed to look like a real YC submission</div>
                </div>
                <Badge variant="ok" className="gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Clean UX</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: <Search className="h-4 w-4" />, t: "Fast search + filters", d: "Region, category, stage, funding type." },
                  { icon: <Database className="h-4 w-4" />, t: "Curated entries", d: "A starter dataset you can swap for real grants." },
                  { icon: <Sparkles className="h-4 w-4" />, t: "Details view", d: "A clean modal that reads like a pro database." },
                ].map((x) => (
                  <div key={x.t} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-crimson-500/15 ring-1 ring-crimson-500/20 text-crimson-200 animate-floaty">
                      {x.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/85">{x.t}</div>
                      <div className="text-sm text-white/60">{x.d}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-7">
              <div className="text-sm font-medium text-white/85">Global routes</div>
              <p className="mt-2 text-sm text-white/65">
                UK base, with pathways for US, Singapore, Dubai, Malta, China, EU, and global programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Web3 + AI", desc: "Ecosystem grants, infra programs, compute credits, and pilots." },
          { title: "Government + Innovation", desc: "R&D and innovation routes, especially UK/EU-friendly programs." },
          { title: "Public Goods", desc: "A Commons landing page to communicate mission and credibility." },
        ].map((x) => (
          <div key={x.title} className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7">
            <div className="text-base font-semibold">{x.title}</div>
            <div className="mt-2 text-sm text-white/65">{x.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
