import Link from "next/link";
import { ArrowRight, HeartHandshake, Layers3, ShieldCheck, Sparkles, Users, Globe2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CommonsPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-7 shadow-soft sm:p-12">
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(720px_circle_at_25%_15%,rgba(244,63,94,.20),transparent_60%)]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="red" className="gap-1.5"><HeartHandshake className="h-3.5 w-3.5" /> Public Goods</Badge>
              <Badge className="gap-1.5"><Users className="h-3.5 w-3.5" /> Community</Badge>
              <Badge className="gap-1.5"><Layers3 className="h-3.5 w-3.5" /> Commons</Badge>
              <Badge className="gap-1.5"><Globe2 className="h-3.5 w-3.5" /> UK + global</Badge>
            </div>

            <h1 className="text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Mushee
            </h1>

            <p className="max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              <span className="font-medium text-white/90">Mushee is building within Commons</span> — open, reusable infrastructure that helps people participate, verify, and transact online with less friction.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/grants">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore funding <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Read roadmap <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm text-white/55">Based</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight">UK</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm text-white/55">Built for</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight">Commons</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm text-white/55">Principle</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight">Open</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-white/85">What we’re building</div>
                  <div className="text-xs text-white/55">A composable stack for communities</div>
                </div>
                <Badge variant="ok" className="gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Focused</Badge>
              </CardHeader>

              <CardContent className="space-y-3">
                {[
                  { icon: <Sparkles className="h-4 w-4" />, t: "Identity primitives", d: "Simple verification + reputation you can plug anywhere." },
                  { icon: <Layers3 className="h-4 w-4" />, t: "Public infrastructure", d: "Open tools for coordinators, communities, and builders." },
                  { icon: <Users className="h-4 w-4" />, t: "Participation loops", d: "Make contributing feel easy, transparent, and rewarding." },
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
              <div className="text-sm font-medium text-white/85">Global pathways</div>
              <p className="mt-2 text-sm text-white/65">
                UK base with clear collaboration routes for US, Singapore, Dubai, Malta, China, EU, and global partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Open by default", desc: "Composable pieces other teams can integrate quickly." },
          { title: "Designed for trust", desc: "Verification and participation without friction." },
          { title: "Built to be reused", desc: "Public goods communities can fork and extend." },
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
